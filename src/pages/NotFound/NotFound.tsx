import { FC, useCallback } from 'react'
import style from './NotFound.module.scss'
import { Button, Result } from 'antd'
import { ThunderboltTwoTone } from '@ant-design/icons'
import { HOME_PATHNAME } from '@/router'
import { useNavigate } from 'react-router-dom'
import { useTitle } from 'ahooks'

const NotFound: FC = () => {
  useTitle('墨问卷阁 - 404')
  const nav = useNavigate()

  const handleLBackHome = useCallback(() => {
    nav(HOME_PATHNAME)
  }, [])

  return (
    <>
      <Result
        title='404'
        icon={<ThunderboltTwoTone twoToneColor={'#e49a06'} />}
        subTitle='Sorry, the page you visited does not exist.'
        extra={
          <Button type='primary' onClick={handleLBackHome}>
            Back Home
          </Button>
        }
      />
    </>
  )
}

export default NotFound
