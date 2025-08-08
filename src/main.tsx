import { createRoot } from 'react-dom/client'
import routes from '@/routes/routes.ts'
import './index.css'
import { RouterProvider } from 'react-router'

const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)
root.render(<RouterProvider router={routes} />)
