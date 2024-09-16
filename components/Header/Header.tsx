import { PropsWithChildren } from 'react'
import Link, { LinkProps } from 'next/link'
import { NavBar } from '@ui/NavBar'
import { Button } from '@ui/Button'

import { PreviewModeBanner } from './PreviewModeBanner'

export function Header() {
  return (
    <div className="sticky top-0 z-50 bg-white">
      <PreviewModeBanner />
      <div className="mx-auto" style={{ maxWidth: '98%' }}>
        <NavBar title="Andrea Becerra">
          <NavLink href="/top-stories">Mejores Historias</NavLink>
        </NavBar>
      </div>
    </div>
  )
}

type NavLinkProps = PropsWithChildren<LinkProps>

function NavLink({ children, href, ...linkProps }: NavLinkProps) {
  return (
    <Link href={href} {...linkProps} passHref>
      <Button color="inherit" variant="text">
        {children}
      </Button>
    </Link>
  )
}
