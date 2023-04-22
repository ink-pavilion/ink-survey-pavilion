import { FC, useCallback } from 'react'
import style from './Home.module.scss'
import { useNavigate } from 'react-router-dom'
import { useTitle } from 'ahooks'
import { Button, Typography } from 'antd'
import { MANAGE_LIST_PATHNAME } from '../../router/index'

const { Title, Paragraph } = Typography

const Home: FC = () => {
  useTitle('墨问卷阁')
  const nav = useNavigate()

  const handleLStar = useCallback(() => {
    nav(MANAGE_LIST_PATHNAME)
  }, [])

  return (
    <div className={style['home__container']}>
      <div className={style['home__background-mask__left']}></div>
      <div className={style['home__background-mask__right']}></div>
      <div className={style['home__info']}>
        <Title>问卷调查 | 在线投票</Title>

        <Paragraph>已累计问卷 1000份, 发布问卷 1000份, 收到答卷 9999 份</Paragraph>

        <div>
          <Button type={'primary'} onClick={handleLStar}>
            开始使用
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Home
