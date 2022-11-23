import Page from '../layouts/page';
import Hero from '../sections/common/hero';
import Header from '../sections/header/header';
import Footer from '../sections/footer/footer';
import {CategorySection} from '../sections/products/category-section';
import {COLORS} from '../styles/consts';
import {productCategories} from '../lib/consts';
import Body from '../layouts/body';


export default function Products() {
    return (
        // <Page backgroundColor={COLORS.bodyBackground}>
        <Page>
            <Header/>
            <Body>
                <Hero
                    title={'Products'}
                    subtitle={'We have a wide range of products'}
                    image={'/images/hero/hero-1.jpg'}
                />
                <div style={{backgroundColor: COLORS.bodyBackground}}>
                    <CategorySection categoryCards={productCategories}/>
                </div>
            </Body>
            <Footer/>
        </Page>
    );
}
