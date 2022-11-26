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
                            'Engine overhaul spare parts',
                            'Engine accessories',
                            'Engine filters',
                            'Engine lubricants',
                        ]}/>
                        <P>We purchase all of our spare parts directly from the manufactures we deal with to ensure all
                            our parts are 100% genuine.</P>

                        <ProductList products={[
                            {
                                image: '/images/spare (1).jpg',
                                title: 'Product 1',
                                description: 'Spectra provides almost all the engine parts from a complete cylinder to small gaskets for all the generators we put into the market. Main engine parts list includes: Major Engine Parts, Engine Overhaul gaskets and other engine parts and components.',
                            },
                            {
                                image: '/images/spare (2).jpg',
                                title: 'Product 1',
                                description: 'Spectra provides almost all the engine parts from a complete cylinder to small gaskets for all the generators we put into the market. Main engine parts list includes: Major Engine Parts, Engine Overhaul gaskets and other engine parts and components.',
                            },
                            {
                                image: '/images/spare (3).jpg',
                                title: 'Product 1',
                                description: 'Spectra provides almost all the engine parts from a complete cylinder to small gaskets for all the generators we put into the market. Main engine parts list includes: Major Engine Parts, Engine Overhaul gaskets and other engine parts and components.',
                            },
                            {
                                image: '/images/spare (4).jpg',
                                title: 'Product 1',
                                description: 'Spectra provides almost all the engine parts from a complete cylinder to small gaskets for all the generators we put into the market. Main engine parts list includes: Major Engine Parts, Engine Overhaul gaskets and other engine parts and components.',
                            },
                        ]}/>
                    </div>
                ),
            ]}
            name={'about'}
            heroProps={{
                image: '/images/hero/hero-2.jpg',
                title: 'Support',
                subtitle: 'We are here to help you',
            }}
        />
    );
}
