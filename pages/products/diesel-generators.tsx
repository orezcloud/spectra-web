import Page from '../../layouts/page';
import Hero from '../../sections/common/hero';
import Header from '../../sections/header/header';
import Footer from '../../sections/footer/footer';
import {CategorySection} from '../../sections/products/category-section';
import {COLORS} from '../../styles/consts';
import {dieselGeneratorCategories} from '../../lib/consts';
import Body from '../../layouts/body';
import PreFooter from '../../sections/footer/pre-footer';


export default function DieselGenerators() {
    return (
        <Page backgroundColor={COLORS.bodyBackground}>
            <Header/>
            <Body>
                <Hero
                    title={'Diesel Generators'}
                    subtitle={'We have a wide range of products'}
                    image={'/images/hero/hero-1.jpg'}
                />
                <CategorySection categoryCards={dieselGeneratorCategories}/>
                <PreFooter/>
                <Footer/>
            </Body>
        </Page>
    );
}
