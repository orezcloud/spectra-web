import Body from '../layouts/body';
import Hero from '../sections/common/hero';
import Header from '../sections/header/header';
import {DefaultSection} from '../layouts/section-layouts';
import SectionCard from '../layouts/section-card';
import CardsSection from '../layouts/cards-section';
import Footer from '../sections/footer/footer';
import {CategorySection} from '../sections/products/category-section';
import {COLORS} from '../styles/consts';


export default function Products() {
    return (
        <Body backgroundColor={COLORS.lightBlue}>
            <Header/>
            <Hero/>
            <CategorySection/>
            <Footer/>
        </Body>
    );
}
