import Addform from '@/Addform'
import ListTodo from '@/todo'

const routes = [

  {
    path: '/new',
    component: Addform
  },
  {
    path: '/todo',
    component: ListTodo,
    props: {whatToDisplay:"all"}
  },
  {
    path: '/done',
    component: ListTodo,
    props: {whatToDisplay:"done"}
  },
  {
    path:'/',
    component: ListTodo,
    props: {whatToDisplay:"todo"}
  }
]
export default routes;
