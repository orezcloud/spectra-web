import Hero from '../sections/home/hero';
import Footer from '../sections/footer/footer';
import Body from '../layouts/body';
import HeaderTransparent from '../sections/header/header-transparent';


export default function Home() {

    return (
        <Body>
            <HeaderTransparent/>
            <Hero/>
            <Footer/>
        </Body>
    );
}
