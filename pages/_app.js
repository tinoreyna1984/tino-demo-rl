import Footer from '../layout/footer'
import Header from '../layout/header'
import '../styles/globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css"; /** Font Awesome */
import { config } from "@fortawesome/fontawesome-svg-core"; /** Font Awesome */
import ScrollToTop from '@/components/scroll-to-top';
config.autoAddCss = false; /** Font Awesome */

export default function App({ Component, pageProps }) {
  return (<>
    <Header />
    <Component {...pageProps} />
    <Footer />
    <ScrollToTop />
  </>)
}
