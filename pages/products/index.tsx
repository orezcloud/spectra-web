import Body from '../../layouts/body';
import Hero from '../../sections/common/hero';
import Header from '../../sections/header/header';
import Footer from '../../sections/footer/footer';
import {CategorySection} from '../../sections/products/category-section';
import {COLORS} from '../../styles/consts';
import {productCategories} from '../../lib/consts';


export default function Products() {
    return (
        <Body backgroundColor={COLORS.lightBlue}>
            <Header/>
            <Hero/>
            <CategorySection categoryCards={productCategories}/>
            <Footer/>
        </Body>
    );
}
