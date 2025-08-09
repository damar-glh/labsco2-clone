import { Link } from 'react-router'
import { Cta } from '@/components/header/cta'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { menuItems, ourServices } from '@/data/services'

export const Desktop = () => {
  return (
    <>
      <NavigationMenu className="flex items-center">
        <NavigationMenuList className="flex items-center gap-2">
          <NavigationMenuItem>
            <NavigationMenuTrigger className={`${navigationMenuTriggerStyle()} cursor-pointer`}>
              Our Services
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[800px]">
                {ourServices.map((service) => {
                  return (
                    <Link
                      key={service.title}
                      to={service.to}
                      className="flex items-center gap-5 p-2 hover:bg-gray-50">
                      <div
                        className={`w-16 h-16 flex justify-center rounded-md items-center ${service.backgroundColor}`}
                        style={{
                          minWidth: '4rem',
                          minHeight: '4rem',
                          width: '4rem',
                          height: '4rem',
                        }}>
                        <service.icon />
                      </div>
                      <div className="flex flex-col">
                        <h5 className="font-generalsans-semibold text-xl">{service.title}</h5>
                        <p className="font-generalsans-medium text-xs w-60">
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
      <Cta />
    </>
  )
}
