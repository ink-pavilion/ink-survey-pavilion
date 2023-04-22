import { Button, Divider, Popconfirm, Space, Tag, theme, App } from 'antd'
import { FC, useCallback } from 'react'
import style from './QuestionCard.module.scss'
import { useNavigate } from 'react-router-dom'
import { QUESTION_EDIT_PATHNAME, QUESTION_STAT_PATHNAME } from '@/router'
import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  CopyTwoTone,
  DeleteTwoTone,
  EditTwoTone,
  FundTwoTone,
  StarTwoTone,
  WarningOutlined,
} from '@ant-design/icons'

type QuestionCardProps = {
  _id: string
  title: string
  isStar: boolean
  isPublished: boolean
  answerCount: number
  createdAt: string
}

const { useToken } = theme

const QuestionCard: FC<QuestionCardProps> = (props) => {
  const nav = useNavigate()
  const { token } = useToken()
  const {
    modal: { confirm },
    message: { success },
  } = App.useApp()

  const { _id, title, isPublished, isStar, answerCount, createdAt } = props

  const handleLeftButton = useCallback((type: string, id: string) => {
    switch (type) {
      case 'edit':
        nav(QUESTION_EDIT_PATHNAME + `/${id}`)
        break
      case 'stat':
        nav(QUESTION_STAT_PATHNAME + `/${id}`)
        break
    }
  }, [])

  const handleCopy = useCallback(() => {
    success({
      content: '复制成功!',
      duration: 100,
    })
  }, [])

  const handleDelete = useCallback(() => {
    confirm({
      title: '确定删除问卷?',
      icon: <WarningOutlined />,
      okText: '确定',
      cancelText: '取消',
      onOk() {
        success('删除成功!')
      },
    })
  }, [])

  return (
    <div className={style['q-c__container']}>
      {/* Top */}
      <div className={style['q-c__title']}>
        <div className={style['q-c__title__left']}>
          <Button
            type={'link'}
            icon={isPublished ? <StarTwoTone twoToneColor={token.colorError} /> : ''}
            onClick={() =>
              isPublished ? handleLeftButton('stat', _id) : handleLeftButton('edit', _id)
            }>
            {title}
          </Button>
        </div>

        <div className={style['q-c__title__right']}>
          <Space>
            {isPublished ? (
              <Tag icon={<CheckCircleOutlined />} color={token.colorPrimary}>
                已发布
              </Tag>
            ) : (
              <Tag icon={<ClockCircleOutlined />}>未发布</Tag>
            )}
            <span className={style['q-c__title__right-count']}>答卷 {answerCount}</span>
            <span className={style['q-c__title__right-time']}>{createdAt}</span>
          </Space>
        </div>
      </div>

      <Divider className={style['q-c__divider']} />

      {/* Bottom */}
      <div className={style['q-c__bottom']}>
        <div className={style['q-c__bottom__left']}>
          <Space>
            <Button
              type={'text'}
              icon={<EditTwoTone twoToneColor={token.colorPrimary} />}
              onClick={() => handleLeftButton('edit', _id)}>
              编辑问卷
            </Button>
            <Button
              type={'text'}
              icon={<FundTwoTone twoToneColor={token.colorPrimary} />}
              onClick={() => handleLeftButton('stat', _id)}
              disabled={!isPublished}>
              问卷统计
            </Button>
          </Space>
        </div>
        <div className={style['q-c__bottom__right']}>
          <Space>
            <Button type={'text'} icon={<StarTwoTone twoToneColor={token.colorWarning} />}>
              {isStar ? '取消星标' : '星标'}
            </Button>
            <Popconfirm
              placement={'bottom'}
              title={'确定复制问卷?'}
              onConfirm={handleCopy}
              okText='确定'
              cancelText='取消'>
              <Button type={'text'} icon={<CopyTwoTone />}>
                复制
              </Button>
            </Popconfirm>

            <Button
              type={'text'}
              icon={<DeleteTwoTone twoToneColor={token.colorError} />}
              onClick={handleDelete}>
              删除
            </Button>
          </Space>
        </div>
      </div>
    </div>
  )
}

export default QuestionCard
