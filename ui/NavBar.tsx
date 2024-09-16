import { AppBar, Toolbar } from '@material-ui/core'
import Head from 'next/head'
import { Typography } from './Typography'

type Props = {
  title: string
  children: React.ReactNode
}

export function NavBar({ title, children }: Props) {
  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      className="border-b-2 border-t-2 border-grey-200"
    >
      <Toolbar>
        <PlantpediaLogo title={title} />
        {children}
      </Toolbar>
    </AppBar>
  )
}

function PlantpediaLogo({ title }: { title: string }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/escudopr.png" type="image/png" />
      </Head>
      <Typography variant="h4" className="flex-grow" component="h1">
        <a href="/">{title}</a>
      </Typography>
    </>
  )
}
