import '../styles/fonts.css';
import 'normalize.css/normalize.css';
import '../styles/bootstrap.scss';
import '../styles/global.scss';
import '../styles/animation.scss';

// page styles
import '../sections/header/header.scss';

import type {AppProps} from 'next/app';
import init from '../lib/init';

import '../widgets/mini-slider/style.scss';
import {COLORS} from '../styles/consts';
import {useRouter} from 'next/router';
import {useEffect} from 'react';
import $ from 'jquery';


init();

export default function App({Component, pageProps}: AppProps) {

    const router = useRouter();

    useEffect(() => {
        const handleRouteComplete = () => {
            let i = 0;
            while (i < 2) {
                i++;
                $('.js-anim:not(.is-active)').addClass('is-active');
            }
        };
        router.events.on('routeChangeComplete', handleRouteComplete);
        return () => {
            router.events.off('routeChangeComplete', handleRouteComplete);
        };
    }, []);

    return <>
        <Component {...pageProps} />
        <style jsx global>
            {`
              // Colors
              p, ul, li {
                  //color: ${COLORS.littleDark};
              }

              h1, h2, h3, h4, h5, h6, a {
                  //color: ${COLORS.darkest};
              }

              a:hover {
                  //color: ${COLORS.darkBlue};
              }
            `}
        </style>
    </>;
}
