import { FC } from 'react'
import style from './QuestionEdit.module.scss'
import { useParams } from 'react-router-dom'

const QuestionEdit: FC = () => {
  const { id = '' } = useParams()

  return (
    <>
      <div>Edit {id}</div>
    </>
  )
}

export default QuestionEdit
