import { FC, useState } from 'react'
import style from './QuestionStar.module.scss'
import QuestionListDataJson from '../QuestionList.json'
import { useTitle } from 'ahooks'
import { Empty, Typography } from 'antd'
import { QuestionCard, QuestionHead } from '@/components'

const { Title } = Typography

const QuestionStar: FC = () => {
  useTitle('墨问卷阁 - 星标问卷')

  const [QuestionListData, setQuestionListData] = useState(QuestionListDataJson.slice(0, 1))

  return (
    <>
      <QuestionHead title={'星标问卷'}></QuestionHead>
      <div className={style['q__content']}>
        {QuestionListData.length === 0 && <Empty description={'暂无数据!'} />}
        {QuestionListData.length > 0 &&
          QuestionListData.map((question) => <QuestionCard key={question._id} {...question} />)}
      </div>
      <div className={style['q__footer']}>加载更多</div>
    </>
  )
}

export default QuestionStar
