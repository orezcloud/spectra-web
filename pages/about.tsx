import DefaultPostLayout from '../layouts/default-post-layout';
import {H2, H3, P} from '../widgets/comps/text';
import UlList from '../widgets/list/ul-list';
import PostImage from '../widgets/post-image';


export default function About() {
    return (
        <DefaultPostLayout
            Elements={[
                () => (
                    <div>
                        <title>
                            About Us - Spectra Power Solutions
                        </title>
                        <div className={'row'}>
                            <div className={'col-12 col-md-7'}>
                                <H2>About Spectra Generators</H2>
                                <P>A Corporation of Vision, Quality, Innovation, Stability and Financial Strength.</P>
                                <P>Our reputation is built on the principle of being a world leader in the engine driven energy
                                    equipment industry for more than 20 years, applying these technologies and experience to
                                    energy equipment equipped with petrol, diesel and other any Generators.</P>
                            </div>
                            <div className={'col-12 col-md-4 ms-md-4'}>
                                <PostImage src={'/images/about2/about (1).jpg'} noMargin={true}/>
                            </div>
                        </div>

                        <H3>Our Capabilities</H3>
                        <P>Spectra has been working hard in the mobile energy industry for 20 years. Spectra focuses on
                            the long-term reputation of enterprise stability, product quality and financial
                            strength.</P>
                        <P>We insist on manufacturing high quality products, as well as environmental protection
                            products to serve global users. We have used Kubota, Cummins, and Perkins, which allows us
                            to work with customers to design a Spectra Generator which is suited to their needs.</P>
                        <P>We are 100% committed to helping our agents grow their business and bring them higher
                            profits.</P>
                        <PostImage src={'/images/about2/about (4).png'}/>

                        <H3>Manufacture Possiblility</H3>
                        <UlList list={[
                            'High tech machines and advanced technology provide excellent quality.',
                            'With the help of CNC machine, we can always surpass the strict requirements of market.',
                            'CNC laser cutting equipment',
                            'CNC parts forming equipment',
                            'CNC surface grinding equipment',
                            'Robot welding equipment',
                            'All kinds of engine production equipment',
                            'Automatic control system production line',
                            'Flexible assembly line',
                            '10MW–load test equipment',
                            'Gas and gas turbine test system',
                            'Low concentration methane mixer system',
                            'Parallel connection test system',
                            'Spectra  has been looking for ways to improve its products and processes and invests in the latest and best technology available.',
                        ]}/>
                        <PostImage src={'/images/about2/about (2).jpg'}/>

                        <H3>Maintenance Management</H3>
                        <UlList list={[
                            'Everyone knows that quality means reliability.',
                            'The company’s strong growth is due to customer loyalty, which is because of the reliability of our products – the quality of which is stable every time.',
                            'Committed to Customer Satisfaction',
                            'If you happen to have trouble with one of our devices, you can find another aspect of our reliability through our Warranty department, as well as our love of quality and customer satisfaction.',
                            'The system of special parts management department records the information of each part we sold. According to the replacement cycle table of each part, they can quickly send the parts to you. This is a huge information management system we have built, in order to ensure our efficient work and customer satisfaction.',
                        ]}/>
                        <PostImage src={'/images/about2/about (3).jpg'}/>

                    </div>
                ),
            ]}
            name={'about'}
            heroProps={{
                title: 'About',
                subtitle: 'We are here to help you',
                image: '/images/hero/hero-3.jpg',
            }}
        />
    );
}
