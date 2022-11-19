import Body from '../../../layouts/body';
import Hero from '../../../sections/common/hero';
import Header from '../../../sections/header/header';
import Footer from '../../../sections/footer/footer';
import {CategorySection} from '../../../sections/products/category-section';
import {COLORS} from '../../../styles/consts';
import {dieselGeneratorCategories } from '../../../lib/consts';


export default function DieselGenerators() {
    return (
        <Body backgroundColor={COLORS.lightBlue}>
            <Header/>
            <Hero
                title={'Diesel Generators'}
                subtitle={'We have a wide range of products'}
                image={'/images/hero/hero-1.jpg'}
            />
            <CategorySection categoryCards={dieselGeneratorCategories}/>
            <Footer/>
        </Body>
    );
}
