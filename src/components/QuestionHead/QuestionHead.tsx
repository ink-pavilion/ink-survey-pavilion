import { FC } from 'react'
import style from './QuestionHead.module.scss'
import { Typography } from 'antd'

type QuestionHeadProps = {
  title: string
}

const { Title } = Typography

const QuestionHead: FC<QuestionHeadProps> = (props) => {
  const { title } = props

  return (
    <>
      <div className={style['q-h__container']}>
        <div className={style['q-h__left']}>
          <Title level={3}>{title}</Title>
        </div>
        <div className={style['q-h__right']}>搜索</div>
      </div>
    </>
  )
}

export default QuestionHead
