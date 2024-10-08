import Page from './page';
import Header from '../sections/header/header';
import Hero, {HeroProps} from '../sections/common/hero';
import CardsSection from './cards-section';
import Footer from '../sections/footer/footer';
import {FC} from 'react';
import PreFooter from '../sections/footer/pre-footer';
import Body from './body';


export default function DefaultPostLayout({
                                              Elements,
                                              name,
                                              isPreFooter,
                                              heroProps,
                                          }: {Elements: FC<{index?: number}>[] , name: string, isPreFooter?: boolean, heroProps: HeroProps}) {
    return (
        <Page>
            <Header/>
            <Body>
                <Hero {...heroProps} />
                <CardsSection Elements={Elements} name={name}/>
                {
                    isPreFooter &&
                    <PreFooter/>
                }
                <Footer/>
            </Body>
        </Page>
    );
}
