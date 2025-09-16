import type { ReactElement } from 'react'
import Home from '../components/pages/Home'
import Posts from '../components/pages/Posts'
import Users from '../components/pages/Users'
import Todos from '../components/pages/Todos'
import Products from '../components/pages/Products'

export interface RouteConfig {
  id: string
  path: string
  element: ReactElement
  label?: string
  showInNavigation?: boolean
}

export const routesConfig: RouteConfig[] = [
  {
    id: 'home',
    path: '/',
    element: <Home />,
    label: 'Main',
    showInNavigation: true
  },
  {
    id: 'products',
    path: '/products',
    element: <Products />,
    label: 'Products',
    showInNavigation: true
  },
  {
    id: 'posts',
    path: '/posts',
    element: <Posts />,
    label: 'Posts',
    showInNavigation: true
  },
  {
    id: 'users',
    path: '/users',
    element: <Users />,
    label: 'Users',
    showInNavigation: true
  },
  {
    id: 'todos',
    path: '/todos',
    element: <Todos />,
    label: 'Todo',
    showInNavigation: true
  },
]

export const navigationRoutes = routesConfig.filter(route => route.showInNavigation)