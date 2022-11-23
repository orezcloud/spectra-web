import HomeHero from '../sections/home/hero';
import Footer from '../sections/footer/footer';
import Page from '../layouts/page';
import HeaderTransparent from '../sections/header/header-transparent';
import Header from '../sections/header/header';
import Body from '../layouts/body';
import {useEffect, useState} from 'react';
import {useIsMobileOrTablet} from '../styles/breakpoints';
import {isServer} from '../lib/consts';


export default function Home() {

    const [showMenu, setShowMenu] = useState(
        !isServer && window.innerWidth < 991,
    );

    useEffect(() => {
        setTimeout(() => {
            setShowMenu(true);
        }, 1000);
    }, []);

    return (
        <Page>
            <HeaderTransparent showMenu={isServer ? false : showMenu}/>
            <Header/>
            <Body>
                <HomeHero/>
            </Body>
            <Footer/>
        </Page>
    );
}
