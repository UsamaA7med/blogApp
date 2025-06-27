import '@/styles/globals.css'
import { Metadata, Viewport } from 'next'
import clsx from 'clsx'

import { Providers } from './providers'

import { siteConfig } from '@/config/site'
import { fontSans } from '@/config/fonts'
import { Navbar } from '@/components/navbar'
import AppPagination from '@/components/pagination'
import { Divider } from '@heroui/react'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          'min-h-screen text-foreground bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <Providers themeProps={{ defaultTheme: 'light' }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-8xl pt-16 px-6 flex-grow">
              {children}
            </main>
            <footer className="w-full container flex flex-col max-w-8xl px-6 mx-auto items-center justify-center">
              <Divider className="my-5" />
              <AppPagination />
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  )
}
