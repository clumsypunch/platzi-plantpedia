import clsx from 'clsx'
import { Grid } from '@ui/Grid'
import { Typography } from '@ui/Typography'

export const Footer = ({ className }: { className?: string }) => {
  return (
    <footer
      className={clsx(
        'pt-20 pb-6 bg-black text-gray-300 overflow-hidden',
        className
      )}
    >
      <div className="max-w-screen-xl mx-auto w-95">
        <Grid container spacing={4}>
          <Grid
            item
            xs={12}
            sm={5}
            className="text-center sm:text-left relative"
          >
            <PlantpediaLogo />
            <Typography variant="h5" component="a" href="/" title="Go home">
              Andrea Becerra Concejala
            </Typography>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Typography variant="h5" className="mb-4">
              Paginas
            </Typography>
            <ul className="p0">
              <li className="pb-1">
                <a href="/getting-started">Empezar</a>
              </li>
              <li className="pb-1">
                <a href="/search">Buscar</a>
              </li>
              <li className="pb-1">
                <a href="/top-stories">Mejores Historias</a>
              </li>
            </ul>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography variant="h5" className="mb-4">
              About
            </Typography>
            <p>
              <a href="/">Rodrigo's web development</a>{' '}
              <a href="/">@clumsypunch</a>
            </p>
            <div className="mt-3">
              <a
                href="https://facebook.com/andreaconcejala"
                title="Follow @andreaconcejala on Facebook"
                className="pr-4"
              >
                FB
              </a>
              <a
                href="https://instagram.com/andreaconcejala"
                title="Follow @andreaconcejala on Instagram"
              >
                IG
              </a>
            </div>
          </Grid>
        </Grid>
        <div className="mt-20 border-t-2 border-gray-600 text-gray-600 pt-6 flex justify-between">
          <p>
            Partido Republicano de Chile - 2024 todos los derechos reservados ©
            <a target="_blank" href="https://www.partidorepublicanodechile.com" title="PR">
              PR Chile
            </a>
          </p>
          <p>
            <a target="_blank" href="https://andreacocejala.cl">
              andreacocejala.cl
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

function PlantpediaLogo() {
  return (
    <>
      <div className="absolute" />
      <style jsx>
        {`
          div {
            width: 205px;
            height: 216px;
            background: url(/leaf.png) center center no-repeat;
            opacity: 0.2;
            bottom: 0;
            left: -40px;
            transform: rotate(120deg);
          }

          @media screen and (min-width: 600px) {
            div {
              bottom: 17px;
            }
          }
        `}
      </style>
    </>
  )
}
