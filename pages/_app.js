import '../styles/globals.css'
import Layout from '../components/Layout/Layout'
import configureStore from '../hooks/hooks-store/lecture-store'



configureStore()
function MyApp({ Component, pageProps }) {
  return (
<Layout>
<Component {...pageProps} />
</Layout>

  )
  
}

export default MyApp
