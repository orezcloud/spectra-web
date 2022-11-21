import HomeHero from '../sections/home/hero';
import Footer from '../sections/footer/footer';
import Page from '../layouts/page';
import HeaderTransparent from '../sections/header/header-transparent';
import Header from '../sections/header/header';
import Body from '../layouts/body';


export default function Home() {


    return (
        <Page>
            <HeaderTransparent/>
            <Header/>
            <Body>
                <HomeHero/>
            </Body>
            <Footer/>
        </Page>
    );
}
