import Navbar from "./Navbar";
import Head from 'next/head';
import {useEffect} from 'react';
import {useRouter} from 'next/router'
import Nprogress from 'nprogress';
import Classnames from 'classnames';

  
const Layout = ({children, title, footer = true, light = false}) => {

    const router = useRouter();

    useEffect(() => {

        const handleRouteChange = url => {
          console.log(url);
          Nprogress.start();
        }
        router.events.on('routeChangeStart', handleRouteChange)

        router.events.on('routeChangeStart', () => Nprogress.done())

        return () => {
          router.events.off('routeChangeStart', handleRouteChange)
        }
    }, [])

    return (
      <div className={Classnames({'bg-light': light})}>
        <Head>
          <title>My portfolio</title>
        </Head>

        <Navbar />

        <main className="container py-4">

          {title && (
              <h1 className={Classnames('text-center',{'text-dark': light})}>
                {title}
              </h1>
          )}

          {children}
        </main>

        {
          footer && (
            <footer className="bg-primary text-light text-center">
                <div className="container p-4">
                    <h1>&copy; Camilo Galvis Portfolio</h1>
                    <p>2000 - {new Date().getFullYear()}</p>
                    <p>All right reserved.</p>
                </div>
            </footer>
          )
        }
      </div>
    )
  }

export default Layout;
