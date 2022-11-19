import Body from '../layouts/body';
import Header from '../sections/header/header';
import Hero from '../sections/common/hero';
import {DefaultSection} from '../layouts/section-layouts';
import SectionCard from '../layouts/section-card';
import CardsSection from '../layouts/cards-section';
import Footer from '../sections/footer/footer';
import DefaultPostLayout from '../layouts/default-post-layout';


export default function About() {
    return (
        <DefaultPostLayout Elements={[
            () => (
                <div>
                    <h1>About</h1>
                </div>
            ),
        ]} name={'about'}/>
    );
}
