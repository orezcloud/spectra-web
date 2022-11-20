import HomeHero from '../sections/home/hero';
import Footer from '../sections/footer/footer';
import Page from '../layouts/page';
import HeaderTransparent from '../sections/header/header-transparent';


export default function Home() {


    return (
        <Page>
            <HeaderTransparent/>
            <HomeHero/>
            <Footer/>
        </Page>
    );
}
