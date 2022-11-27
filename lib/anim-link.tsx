import {cloneElement, Fragment, MouseEvent, ReactNode} from 'react';
import {useRouter} from 'next/router';
import {sleep} from './utils';
import {globalActions, globalState} from '../state/global';
import $ from 'jquery';


interface Props {
    children: ReactNode;
    href: string;
    className?: string;
}

let animating = false;

export default function AnimLink({children, href, ...props}: Props) {

    const router = useRouter();

    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        if (animating) {
            return;
        }
        animating = true;
        (async () => {

            if (href === router.pathname || href === '#') {
                window.scrollTo(0, 0);
                animating = false;
                return;
            }

            const d = $('body, html');
            globalState.animating = true;
            if (globalState.menuOpen) {
                globalState.isNoSlide = true;
                globalState.menuOpen = false;
                globalState.transZero = true;
            }

            globalActions.transOut();
            await sleep(320);
            if (href !== '/') {
                globalState.sticked = false;
                globalState.headerAnimFast = true;
            }
            await sleep(170);
            if (href !== '/') {
                globalState.transMenu = false;
            } else {
                globalState.bgMenuActive = false;
            }
            globalState.isNoSlide = false;
            // d.css({height: '100%', overflow: 'hidden'});
            d.css({height: '100.1%'});
            window.scroll(0, 0);
            d.animate({scrollTop: '0px'}, 1);
            await sleep(20);
            d.css({overflow: 'auto', height: 'auto'});
            await sleep(60);


            await router.push(href);

            globalActions.transZero();
            globalActions.resetTransOut();
            globalActions.transIn();

            await sleep(12);
            globalActions.resetTransZero();
            globalActions.resetTransIn();
            animating = false;
            await sleep(60);
            globalState.headerAnimFast = false;
            globalState.animating = false;
            globalState.isNoSlide = false;
        })();
    };

    return typeof children === 'string' ? (
        <a href={href} {...props} onClick={handleClick}>
            {children}
        </a>
    ) : (
        <Fragment>
            {cloneElement(children as any, {onClick: handleClick, style: {cursor: 'pointer'}})}
        </Fragment>
    );
}
