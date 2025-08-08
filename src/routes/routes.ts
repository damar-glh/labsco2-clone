import { createBrowserRouter } from 'react-router'
import lazyLoading from '@/routes/lazy-loading'

const PublicLayout = lazyLoading(() => import('@/layouts/public'))
const Home = lazyLoading(() => import('@/pages/home'))
const Service = lazyLoading(() => import('@/pages/service/service'))

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
])
