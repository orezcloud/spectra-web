import {globalState, useIsMenuOpen} from '../state/global';
import zIndex from '../styles/zIndex';
import {ReactNode, useEffect, useState} from 'react';
import {sleep} from '../lib/utils';


export default function ModalLayout({children}: {children: ReactNode}) {
    const isMenuOpen = useIsMenuOpen();
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [isMenuActive, setIsMenuActive] = useState(false);
    const [animating, setAnimating] = useState(false);
    const [dontRender, setDontRender] = useState(false);

    const menuOpen = async () => {
        if (dontRender) {
            return;
        }
        if (!animating) {
            setAnimating(true);
            setIsMenuActive(true);
            await sleep(150);
            setIsMenuVisible(true);
            await sleep(700);
            setAnimating(false);
        } else {
            setDontRender(true);
            await sleep(200);
            globalState.menuOpen = true;
            await sleep(400);
            setDontRender(false);
        }
    };

    const menuClose = async () => {
        if (dontRender) {
            return;
        }
        if (!animating) {
            setAnimating(true);
            setIsMenuVisible(false);
            await sleep(1000);
            setIsMenuActive(false);
            await sleep(150);
            setAnimating(false);
        } else {
            setDontRender(true);
            await sleep(200);
            globalState.menuOpen = true;
            await sleep(400);
            setDontRender(false);
        }
    };

    useEffect(() => {
        if (isMenuOpen) {
            menuOpen();
        } else {
            menuClose();
        }
    }, [isMenuOpen]);

    return (
        <div
            className={
                'menu'
                + (isMenuVisible ? ' menu-visible' : '')
                + (isMenuActive ? ' menu-active' : '')
            }>
            {children}
            <style jsx>
                {`
                  .menu {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: #ffffff;
                    z-index: ${zIndex.menu};
                    opacity: 1;
                    transition: opacity .3s ease !important;
                  }

                  .menu:not(.menu-visible) {
                    opacity: 0;
                  }

                  .menu:not(.menu-active) {
                    height: 0;
                    display: none !important;
                  }
                `}
            </style>
        </div>
    );
}
