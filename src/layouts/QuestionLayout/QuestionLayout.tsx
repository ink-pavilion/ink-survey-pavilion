import { FC } from 'react'
import style from './QuestionLayout.module.scss'
import { Outlet } from 'react-router-dom'

const QuestionLayout: FC = () => {
  return (
    <>
      <div>QuestionLayout</div>
      <div>
        <Outlet></Outlet>
      </div>
    </>
  )
}

export default QuestionLayout
