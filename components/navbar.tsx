import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from '@heroui/navbar'
import { Link } from '@heroui/link'
import { link as linkStyles } from '@heroui/theme'
import NextLink from 'next/link'
import clsx from 'clsx'

import { siteConfig } from '@/config/site'
import { ThemeSwitch } from '@/components/theme-switch'

export const Navbar = () => {
  return (
    <HeroUINavbar maxWidth="2xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <p className="font-bold text-inherit">Your Name</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex items-center gap-10">
          <ul className="hidden sm:flex gap-4 justify-start ml-2">
            {siteConfig.navItems.map((item) => (
              <NavbarItem key={item.href}>
                <NextLink
                  className={clsx(
                    linkStyles({ color: 'foreground' }),
                    'data-[active=true]:text-primary data-[active=true]:font-medium'
                  )}
                  color="foreground"
                  href={item.href}
                >
                  {item.label}
                </NextLink>
              </NavbarItem>
            ))}
          </ul>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu className="fixed inset-0 z-40 bg-background  flex flex-col items-center justify-center">
        <div className="flex flex-col h-screen mt-56 items-center  py-5 justify-between gap-5">
          <div className="flex flex-col gap-5  justify-center items-center">
            <p className="text-2xl font-bold mb-5">Your Name</p>
            {siteConfig.navItems.map((item, index) => (
              <NavbarMenuItem key={`${item.label}-${index}`}>
                <Link
                  color="foreground"
                  href={item.href}
                  size="lg"
                  className="text-xl"
                >
                  {item.label}
                </Link>
              </NavbarMenuItem>
            ))}
            <NavbarMenuItem>
              <ThemeSwitch />
            </NavbarMenuItem>
          </div>
          <NavbarMenuItem className="mb-5">
            <NavbarMenuToggle />
          </NavbarMenuItem>
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  )
}
