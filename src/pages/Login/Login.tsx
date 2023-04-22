import { FC, useCallback } from 'react'
import style from './Login.module.scss'
import { useNavigate } from 'react-router-dom'
import { useTitle } from 'ahooks'

const Login: FC = () => {
  useTitle('墨问卷阁 - 登录')
  const nav = useNavigate()

  const handleLogout = useCallback(() => {
    nav('/')
  }, [])

  return (
    <div>
      <p>Login Page</p>
      <div>
        <button onClick={handleLogout}>返回</button>
      </div>
    </div>
  )
}

export default Login
