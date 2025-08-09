import { createBrowserRouter } from 'react-router'
import lazyLoading from '@/routes/lazy-loading'

const PublicLayout = lazyLoading(() => import('@/layouts/public'))
const Home = lazyLoading(() => import('@/pages/home'))
const Service = lazyLoading(() => import('@/pages/service.tsx'))
const NotFound = lazyLoading(() => import('@/pages/not-found'))

export default createBrowserRouter([
  {
    path: '/',
    Component: PublicLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'service/:serviceId',
        Component: Service,
      },
    ],
  },
  {
    path: '*',
    Component: NotFound,
  },
])
