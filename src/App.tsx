import './index.scss'
import { RouterProvider } from 'react-router-dom'
import routerConfig from '@/router'
import 'antd/dist/reset.css'
import { ConfigProvider, theme, App as AntdApp } from 'antd'

const token = {
  colorPrimary: '#659077',
  colorSuccess: '#38a601',
  colorWarning: '#e49a06',
  colorError: '#e20004',
  colorInfo: '#0666ec',
  colorLink: '#659077',
  colorLinkActive: '#89c7a3',
  colorLinkHover: '#91d3ad',
}

function App() {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.defaultAlgorithm,
        token,
      }}>
      <AntdApp>
        <RouterProvider router={routerConfig}></RouterProvider>
      </AntdApp>
    </ConfigProvider>
  )
}

export default App
