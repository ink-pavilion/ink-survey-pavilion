import { FC } from 'react'
import style from './MainLayout.module.scss'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import { Logo, UserInfo } from '@/components'

const { Header, Footer, Content } = Layout

const MainLayout: FC = () => {
  return (
    <Layout>
      <Header className={style['main-layout__header']}>
        <div className={style['main-layout__header__left']}>
          <Logo />
        </div>
        <div className={style['main-layout__header__right']}>
          <UserInfo />
        </div>
      </Header>
      <Layout>
        <Content className={style['main-layout__main']}>
          <Outlet></Outlet>
        </Content>
      </Layout>
      <Footer className={style['main-layout__footer']}>
        墨问卷阁 &copy; 2023 present. Created by XiDongDong
      </Footer>
    </Layout>
  )
}

export default MainLayout
