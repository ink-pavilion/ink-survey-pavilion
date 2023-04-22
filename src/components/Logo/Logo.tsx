import { FC } from 'react'
import style from './Logo.module.scss'
import { Space, Typography } from 'antd'
import { FormOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

const { Title } = Typography

const Logo: FC = () => {
  return (
    <div className={style['logo__container']}>
      <Link to={'/'}>
        <Space>
          <Title>
            <FormOutlined />
          </Title>
          <Title>墨问卷阁</Title>
        </Space>
      </Link>
    </div>
  )
}

export default Logo
