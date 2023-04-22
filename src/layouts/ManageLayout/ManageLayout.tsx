import { FC, useCallback } from 'react'
import style from './ManageLayout.module.scss'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { Button, Space, Divider } from 'antd'
import { PlusOutlined, BarsOutlined, StarOutlined, DeleteOutlined } from '@ant-design/icons'
import { MANAGE_LIST_PATHNAME, MANAGE_STAR_PATHNAME, MANAGE_TRASH_PATHNAME } from '@/router'

const ManageLayout: FC = () => {
  const nav = useNavigate()
  const { pathname } = useLocation()

  const skipRoute = useCallback((path: string) => {
    nav(path)
  }, [])

  return (
    <>
      <div className={style['manage-layout__container']}>
        <div className={style['manage-layout__left']}>
          <Space wrap>
            <Button type={'primary'} size={'large'} icon={<PlusOutlined />}>
              新建问卷
            </Button>
            <Divider style={{ borderTop: 'transparent' }} />
            <Button
              type={pathname.startsWith(MANAGE_LIST_PATHNAME) ? 'default' : 'text'}
              size={'large'}
              icon={<BarsOutlined />}
              onClick={() => skipRoute(MANAGE_LIST_PATHNAME)}>
              我的问卷
            </Button>
            <Button
              type={pathname.startsWith(MANAGE_STAR_PATHNAME) ? 'default' : 'text'}
              size={'large'}
              icon={<StarOutlined />}
              onClick={() => skipRoute(MANAGE_STAR_PATHNAME)}>
              星标问卷
            </Button>
            <Button
              type={pathname.startsWith(MANAGE_TRASH_PATHNAME) ? 'default' : 'text'}
              size={'large'}
              icon={<DeleteOutlined />}
              onClick={() => skipRoute(MANAGE_TRASH_PATHNAME)}>
              回收站
            </Button>
          </Space>
        </div>
        <div className={style['manage-layout__right']}>
          <Outlet></Outlet>
        </div>
      </div>
    </>
  )
}

export default ManageLayout
