const { generateComponentExports } = require('../../scripts/generateComponentExports')
const chokidar = require('chokidar')
const path = require('path')

function shouldTriggerGeneration (filePath) {
  const fileDirName = path.basename(path.dirname(filePath))
  const fileName = path.basename(filePath, '.tsx')
  return fileDirName === fileName
}

function isTopLevelComponentDir (filePath, componentsPath) {
  const parentDir = path.dirname(filePath)
  return parentDir === componentsPath
}

const componentsPath = './src/components'
const relativePath = 'src/components'

function VitePluginGenerateComponentExports () {
  return {
    name: 'vite-plugin-generate-component-exports',
    apply: 'serve',
    configResolved (config) {
      if (config.command === 'serve') {
        chokidar
          .watch(componentsPath, {
            ignoreInitial: true
          })
          .on('add', (filePath) => {
            if (shouldTriggerGeneration(filePath)) {
              generateComponentExports()
            }
          })
          .on('unlink', (filePath) => {
            if (shouldTriggerGeneration(filePath)) {
              generateComponentExports()
            }
          })
          .on('unlinkDir', (filePath) => {
            if (isTopLevelComponentDir(filePath, relativePath)) {
              generateComponentExports()
            }
          })
      }
    }
  }
}

module.exports = VitePluginGenerateComponentExports
