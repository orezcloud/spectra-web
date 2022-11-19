import Body from './body';
import Header from '../sections/header/header';
import Hero from '../sections/common/hero';
import CardsSection from './cards-section';
import Footer from '../sections/footer/footer';
import {FC} from 'react';


export default function DefaultPostLayout({Elements, name, isPreFooter}: {Elements: FC<{index?: number}>[], name: string, isPreFooter?: boolean}) {
    return (
        <Body>
            <Header/>
            <Hero/>
            <CardsSection Elements={Elements} name={name}/>
            <Footer/>
        </Body>
    )
}
