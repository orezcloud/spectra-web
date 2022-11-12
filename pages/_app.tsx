import '../styles/fonts.css';
import 'normalize.css/normalize.css';
import '../styles/bootstrap.scss';
import '../styles/global.scss';

// page styles
import '../sections/header/header.scss'

import type { AppProps } from 'next/app'



export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
