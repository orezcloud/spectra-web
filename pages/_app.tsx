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
import {sleep, throttle} from '../lib/utils';
import {globalState} from '../state/global';


import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


init();

export default function App({Component, pageProps}: AppProps) {

    const router = useRouter();

    const runOnScroll = () => {
        $('.js-anim:not(.is-active)').each(function () {

            // @ts-ignore
            let bottom_of_object = $(this).offset()?.top + ($(this).outerHeight() * 0.18);
            // @ts-ignore
            let bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > bottom_of_object) {
                $(this).addClass('is-active');
            }
            // Check if the "show_quick" class exists and show the element at 10% of its outer height if it does
            if ($(this).hasClass('anim-quick')) {
                // @ts-ignore
                let top_of_object = $(this).offset().top + ($(this).outerHeight() * 0.1);
                let top_of_window = $(window).scrollTop();
                // @ts-ignore
                if (top_of_window < top_of_object) {
                    $(this).addClass('is-active');
                }
            }

        });
    };

    useEffect(() => {

        $(window).on('scroll', throttle(runOnScroll, 20));

        (async () => {
            while (true) {
                await sleep(1000 / 60);
                runOnScroll();
            }
        })();

        router.events.on('routeChangeComplete', runOnScroll);

        return () => {
            router.events.off('routeChangeComplete', runOnScroll);
        };

    }, []);

    useEffect(() => {
        if (router.pathname === '/') {
            globalState.bgMenuActive = false;
            globalState.transMenu = true;
        } else {
            globalState.bgMenuActive = true;
        }
    }, [router.pathname]);

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

