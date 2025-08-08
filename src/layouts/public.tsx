import { Outlet } from 'react-router'
import Footer from '@/components/footer/footer.tsx'
import Header from '@/components/header/header.tsx'

const PublicLayout = () => (
  <div className="flex min-h-screen w-full flex-col items-center">
    <Header />
    <main className="flex w-full flex-1 flex-col items-center justify-center px-4 py-8">
      <Outlet />
    </main>
    <Footer />
  </div>
)

export default PublicLayout
