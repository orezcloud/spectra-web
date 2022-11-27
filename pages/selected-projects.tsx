import DefaultPostLayout from '../layouts/default-post-layout';
import {H2, P} from '../widgets/comps/text';


export default function About() {
    return (
        <DefaultPostLayout
            Elements={[
                () => (
                    <div>
                        <H2>Selected Projects</H2>
                        <P>We are dedicated to providing our customers with high quality products and excellent engineering work.</P>
                        <P>Here we have selected some representative projects from around the world, with our generators being used for different applications. When you receive our generators and see where they are located, you will find excellence performance both in products and service.</P>
                    </div>
                ),
            ]}
            name={'selected-projects'}
            heroProps={{
                title: 'Selected Projects',
                subtitle: 'We are here to help you',
                image: '/images/hero/hero-3.jpg',
            }}
        />
    );
}
