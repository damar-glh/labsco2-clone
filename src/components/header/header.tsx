import { Link } from 'react-router'
import { Button } from '@/components/ui/button.tsx'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu.tsx'
import { menuItems, ourServices } from '@/data/services.ts'
import logo from '../../assets/logo.webp'

const Header = () => {
  return (
    <header className="flex lg:flex-row items-center justify-between top-0 z-20 lg:px-28 px-10 py-2 fixed w-full bg-bg-primary">
      <Link to="/">
        <img src={logo} alt="Logo" className="w-16" />
      </Link>
      <NavigationMenu className="flex items-center gap-10">
        <NavigationMenuList className="flex items-center gap-2">
          <NavigationMenuItem>
            <NavigationMenuTrigger className={navigationMenuTriggerStyle()}>
              Our Services
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[800px] p-4">
                {ourServices.map((service) => {
                  const IconComponent = service.icon as any
                  return (
                    <Link
                      key={service.title}
                      to={service.to}
                      className="flex items-center gap-5 p-2 hover:bg-bg-dark/10">
                      <div
                        className={`w-16 h-16 rounded-md flex justify-center items-center ${service.backgroundColor}`}
                        style={{
                          minWidth: '4rem',
                          minHeight: '4rem',
                          width: '4rem',
                          height: '4rem',
                        }}>
                        {IconComponent && <IconComponent className="size-6" />}
                      </div>
                      <div className="flex flex-col">
                        <h5 className="font-family text-xl font-semibold">{service.title}</h5>
                        <p className="font-family font-medium text-xs w-60">
                          {service.description}
                        </p>
                      </div>
                    </Link>
                  )
                })}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {menuItems.map((item) => (
            <NavigationMenuItem key={item.title}>
              <NavigationMenuLink href={item.to || '#'} className={navigationMenuTriggerStyle()}>
                {item.title}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex items-center">
        <a
          href="https://api.whatsapp.com/send/?phone=6581181595&text=Hi+Co2%2C+I+would+like+ask+about+your+services.&type=phone_number&app_absent=0"
          target="_self"
          rel="noopener noreferrer">
          <Button
            variant="default"
            className="cursor-pointer bg-primary text-base text-bg-primary rounded-md py-0 px-4 font-medium order-3 lg:block hidden hover:scale-110 transition-all hover:shadow-bg-primary hover:shadow-md">
            Get Started Today!
          </Button>
        </a>
      </div>
    </header>
  )
}

export default Header
