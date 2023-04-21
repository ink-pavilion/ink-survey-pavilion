const fg = require('fast-glob');
const fs = require('fs');
const path = require('path');

const componentsDir = path.resolve(__dirname, '../src/components');


async function generateComponentExports() {
  const components = await fg(['**/*/*[A-Z]*.tsx'], { cwd: componentsDir });

  if (!components.length) {
    console.error('No components found. Please check the structure of the components directory.');
    process.exit(1);
  }

  const indexFileContent = components
    .map((componentPath) => {
      const componentName = componentPath.match(/([A-Za-z0-9-_]+)\/\1\.tsx$/)[1];
      return `export { default as ${componentName} } from './${componentPath.replace('.tsx', '')}';`;
    })
    .join('\n');
    
  fs.writeFileSync(path.resolve(componentsDir, 'index.ts'), indexFileContent);
  console.log('Successfully generated components/index.ts file.');
}

// 添加这一行以导出函数
module.exports = { generateComponentExports };

// 如果直接运行脚本，则执行函数
if (require.main === module) {
  generateComponentExports();
}