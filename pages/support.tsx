import DefaultPostLayout from '../layouts/default-post-layout';
import ProductList from '../widgets/list/product-list';
import UlList from '../widgets/list/ul-list';
import {H2, P} from '../widgets/comps/text';


export default function Support() {
    return (
        <DefaultPostLayout
            Elements={[
                () => (
                    <div>
                        <H2>Get support for our products and services</H2>
                        <P>Spectra has large stock of spare parts, which are packaged and stored in our modernized
                            warehouse constantly being monitored by our advanced management system.</P>
                        <P>With this attention to detail, we can ensure you a prompt response to your needs with
                            improved lead times on all our spare parts. Spectra online parts solution platform allows
                            users freedom of being able to access the spare parts division in order to provide you with
                            the best spare parts solutions in the most efficient manner.</P>
                        <P>For all year round, the following parts are regularly stocked for your convenience: </P>
                        <UlList list={[
                            'Engine maintenance spare parts',
                            'Alternator spares',
                            'Control modules',
                            'ATS\'s',
                            'Geset parts and maintenance tools',
                        ]}/>
                        <P>We purchase all of our spare parts directly from the manufactures we deal with to ensure all
                            our parts are 100% genuine.</P>

                        <ProductList products={[
                            {
                                image: '/images/spare (4).jpg',
                                title: 'Engine Parts',
                                description: 'Spectra provides almost all the engine parts from a complete cylinder to small gaskets for all the generators we put into the market. Main engine parts list includes: Major Engine Parts, Engine Overhaul gaskets and other engine parts and components.',
                            },
                            {
                                image: '/images/spare (3).jpg',
                                title: 'Oil Filters',
                                description: 'Standardized production of oil filters ensures long life and reliability of the engine and minimizes wear on the core components.',
                            },
                            {
                                image: '/images/spare (1).jpg',
                                title: 'Air Filters',
                                description: 'Provides an engine-matched air filter, which has high filtration accuracy, effectively protects the intake air of the engine, and ensures stable operation of the generator set and prolongs its service life.',
                            },
                            {
                                image: '/images/spare (2).jpg',
                                title: 'Fuel Filters',
                                description: 'Poor fuel filtration / water separation causes the majority of fuel injection pump failure. 99 percent of fuel injection pumps that require replacing have suffered from fuel contamination. Dirt and water in fuel could cause the following damage to your engine:',
                            },
                        ]}/>
                    </div>
                ),
            ]}
            name={'support'}
            heroProps={{
                image: '/images/hero/hero-2.jpg',
                title: 'Support',
                subtitle: 'Get Help & Support',
            }}
        />
    );
}
