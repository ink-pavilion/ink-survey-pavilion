import { FC, useCallback } from 'react'
import style from './UserInfo.module.scss'
import { useNavigate } from 'react-router-dom'
import { LOGIN_PATHNAME } from '@/router'
import { Button } from 'antd'

const UserInfo: FC = () => {
  const nav = useNavigate()

  const handleLogin = useCallback(() => {
    nav(LOGIN_PATHNAME)
  }, [])

  return (
    <>
      <Button type={'link'} onClick={handleLogin}>
        登录
      </Button>
    </>
  )
}

export default UserInfo
