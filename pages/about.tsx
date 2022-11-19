import Body from '../layouts/body';
import Header from '../sections/header/header';
import Hero from '../sections/common/hero';
import {DefaultSection} from '../layouts/section-layouts';
import SectionCard from '../layouts/section-card';


export default function About() {
    return(
        <Body>
            <Header/>
            <Hero/>
            <DefaultSection name={'products'} padding={'none'}>
                <SectionCard minusMargin={true}>
                    <h1>Under Construction</h1>
                </SectionCard>
            </DefaultSection>
        </Body>
    )
}
