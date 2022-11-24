import {globalActions, useIsMenuOpen} from '../state/global';
import zIndex from '../styles/zIndex';
import {ReactNode, useEffect, useState} from 'react';
import {sleep} from '../lib/utils';


export default function MenuLayout({children}: { children: ReactNode }) {
    const isMenuOpen = useIsMenuOpen();
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [isMenuActive, setIsMenuActive] = useState(false);

    const menuOpen = async () => {
        setIsMenuActive(true);
        await sleep(100);
        setIsMenuVisible(true);
        await sleep(1000);
    };

    const menuClose = async () => {
        setIsMenuVisible(false);
        await sleep(1000);
        setIsMenuActive(false);
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
            {/*<div onClick={() => globalActions.toggleMenu()}>*/}
            {/*    close*/}
            {/*</div>*/}
            {/*<h1>Under Construction</h1>*/}
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
                    transition: opacity .4s;
                  }

                  .menu:not(.menu-visible) {
                    opacity: 0;
                  }

                  .menu:not(.menu-active) {
                    display: none;
                  }
                `}
            </style>
        </div>
    );
}
