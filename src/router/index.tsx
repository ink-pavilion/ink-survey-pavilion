import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import { MainLayout, ManageLayout, QuestionLayout } from '@/layouts'
import Home from '@/pages/Home/Home'
import Login from '@/pages/Login/Login'
import Register from '@/pages/Register/Register'
import NotFound from '@/pages/NotFound/NotFound'
import { QuestionList, QuestionStar, QuestionTrash } from '@/pages/Manage'
import { QuestionEdit, QuestionStat } from '@/pages/Question'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
      {
        path: 'manage',
        element: <ManageLayout />,
        children: [
          {
            path: 'list',
            element: <QuestionList />,
          },
          {
            path: 'star',
            element: <QuestionStar />,
          },
          {
            path: 'trash',
            element: <QuestionTrash />,
          },
        ],
      },
    ],
  },
  {
    path: 'question',
    element: <QuestionLayout />,
    children: [
      {
        path: 'edit/:id',
        element: <QuestionEdit />,
      },
      {
        path: 'stat/:id',
        element: <QuestionStat />,
      },
    ],
  },
])

export default router

// Const
export const HOME_PATHNAME = '/'
export const LOGIN_PATHNAME = '/login'
export const REGISTER_PATHNAME = '/register'
export const MANAGE_LIST_PATHNAME = '/manage/list'
export const MANAGE_STAR_PATHNAME = '/manage/star'
export const MANAGE_TRASH_PATHNAME = '/manage/trash'
export const QUESTION_EDIT_PATHNAME = '/question/edit'
export const QUESTION_STAT_PATHNAME = '/question/stat'
