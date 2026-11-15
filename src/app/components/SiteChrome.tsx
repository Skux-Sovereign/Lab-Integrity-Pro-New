'use client'

import { usePathname } from 'next/navigation'

// Routes that render without the site navigation and footer.
const BARE_ROUTES = ['/styleguide']

export default function SiteChrome({
  nav,
  footer,
  children,
}: {
  nav: React.ReactNode
  footer: React.ReactNode
  children: React.ReactNode
}) {
  const pathname = usePathname() ?? ''
  const bare = BARE_ROUTES.some((r) => pathname === r || pathname.startsWith(`${r}/`))

  return (
    <>
      {!bare && nav}
      <main>{children}</main>
      {!bare && footer}
    </>
  )
}
