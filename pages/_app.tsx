import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Container } from '@material-ui/core'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';

import { store } from '../redux/store'

function MyApp({ Component, pageProps }: AppProps) {
  return <Container fixed>
    <Provider store={store}>
      <Component {...pageProps} />
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Provider>
  </Container>
}
export default MyApp
