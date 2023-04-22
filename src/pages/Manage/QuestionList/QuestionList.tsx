import { FC, useState } from 'react'
import style from './QuestionList.module.scss'
import QuestionListDataJson from '../QuestionList.json'
import { QuestionCard } from '@/components'
import { useTitle } from 'ahooks'
import { Typography } from 'antd'
import { QuestionHead } from '@/components'

const { Title } = Typography

const QuestionList: FC = () => {
  useTitle('墨问卷阁 - 我的问卷')

  const [QuestionListData, setQuestionListData] = useState(QuestionListDataJson)

  return (
    <>
      <QuestionHead title={'我的问卷'}></QuestionHead>
      <div className={style['q__content']}>
        {QuestionListData.length > 0 &&
          QuestionListData.map((question) => <QuestionCard key={question._id} {...question} />)}
      </div>
      <div className={style['q__footer']}>加载更多</div>
    </>
  )
}

export default QuestionList
