import {globalActions, useIsMenuOpen} from '../state/global';
import zIndex from '../styles/zIndex';
import {useEffect, useState} from 'react';
import {sleep} from '../lib/utils';


export default function MenuLayout() {
    const isMenuOpen = useIsMenuOpen();
    const [menuVisible, setMenuVisible] = useState(false);

    const menuOpen = async () => {
        await sleep(100);
        setMenuVisible(true);
    };

    const menuClose = async () => {
        setMenuVisible(false);
    };

    useEffect(() => {
        if (menuVisible) {
            menuOpen();
        } else {
            menuClose();
        }
    }, [isMenuOpen]);

    return (
        <div
            className={
                'menu'
                + (isMenuOpen ? ' menu-open' : '')
            }>
            <div onClick={() => globalActions.toggleMenu()}>
                close
            </div>
            <h1>Under Construction</h1>

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
                  }

                  .menu:not(.menu-open) {
                    display: none;
                  }
                `}
            </style>
        </div>
    );
}
