import { Menu } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router'
import logo from '@/assets/logo.webp'
import { Desktop } from '@/components/header/desktop.tsx'
import { Mobile } from '@/components/header/mobile.tsx'
import { Button } from '@/components/ui/button.tsx'
import { useIsMobile } from '@/hooks/use-is-mobile.ts'
import { useIsScroll } from '@/hooks/use-is-scroll.ts'

const Header = () => {
  const isMobile = useIsMobile()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isScrolled = useIsScroll(50)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <>
      <header
        className={`flex items-center justify-between top-0 z-20 lg:px-28 px-10 py-2 fixed w-full bg-bg-primary transition-shadow duration-300 ${isScrolled ? 'shadow-custom-drop' : ''}`}>
        <Link to="/" className="flex-shrink-0">
          <img src={logo} alt="Logo" className="w-16 h-auto" />
        </Link>
        {!isMobile && <Desktop />}
        {isMobile && (
          <Button
            className="bg-bg-primary border-none p-2 hover:bg-gray-100"
            onClick={toggleMenu}
            aria-label="Toggle Menu">
            <Menu className="text-bg-dark/80 size-8" />
          </Button>
        )}
      </header>
      <Mobile isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  )
}

export default Header
