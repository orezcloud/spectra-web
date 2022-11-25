import {ReactNode, MouseEvent, Fragment, cloneElement} from 'react';
import {useRouter} from 'next/router';
import {sleep} from './utils';
import {globalActions, globalState} from '../state/global';
import $ from 'jquery';
import ReactDevOverlay from 'next/dist/client/components/react-dev-overlay/internal/ReactDevOverlay';


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

            if (href === router.pathname) {
                window.scrollTo(0, 0);
                animating = false;
                return;
            }

            const d = $('body, html');
            if (href !== '/') {
                globalState.transMenu = false;
            } else {
                globalState.bgMenuActive = false;
            }

            globalActions.transOut();
            await sleep(500);
            // d.css({height: '100%', overflow: 'hidden'});
            d.css({height: '100.1%'});
            await sleep(1);
            window.scroll(0, 0);
            d.animate({scrollTop: '0px'}, 1);
            await sleep(1);
            d.css({overflow: 'auto', height: 'auto'});
            await sleep(50);


            await router.push(href);

            globalActions.transZero();
            globalActions.resetTransOut();
            globalActions.transIn();

            await sleep(12);
            globalActions.resetTransZero();
            globalActions.resetTransIn();
            animating = false;
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
