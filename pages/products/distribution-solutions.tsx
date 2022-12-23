
import DefaultPostLayout from '../../layouts/default-post-layout';
import ProductList from '../../widgets/list/product-list';
import {H1} from '../../widgets/comps/text';
import Certs from '../../widgets/comps/certs';


export default function DistributionSolutions() {
    return (
        <DefaultPostLayout
            Elements={[
                () => (
                    <div>
                        <H1>Distribution Solutions</H1>

                        <ProductList products={[
                            {
                                title: 'Engine & Alternator Parts',
                                image: '/images/products/open-type-marine-generator.jpg',
                                description: 'Spectra Marine open type generator, also called dynamo, any machine that converts mechanical energy to electricity for transmission and distribution over power lines to domestic, commercial, and industrial customers. The design of Spectra open type gensets are typically for projects with generator rooms with noise isolation materials built in. Generators also produce the electrical power required for automobiles, aircraft, ships, and trains.',
                            },
                            {
                                title: 'Service & Maintenance',
                                image: '/images/products/sound-proof-marine-generator.jpg',
                                description: 'Spectra Marine canopy type generator, also called dynamo, any machine that converts mechanical energy to electricity for transmission and distribution over power lines to domestic, commercial, and industrial customers. Generators also produce the electrical power required for automobiles, aircraft, ships, and trains.',
                            },
                            {
                                title: 'Control Modules',
                                image: '/images/products/sound-proof-marine-generator.jpg',
                                description: 'Spectra Marine canopy type generator, also called dynamo, any machine that converts mechanical energy to electricity for transmission and distribution over power lines to domestic, commercial, and industrial customers. Generators also produce the electrical power required for automobiles, aircraft, ships, and trains.',
                            },
                            {
                                title: 'Automatic Transfer Switches',
                                image: '/images/products/sound-proof-marine-generator.jpg',
                                description: 'Spectra Marine canopy type generator, also called dynamo, any machine that converts mechanical energy to electricity for transmission and distribution over power lines to domestic, commercial, and industrial customers. Generators also produce the electrical power required for automobiles, aircraft, ships, and trains.',
                            },
                            {
                                title: 'Load Banks',
                                image: '/images/products/sound-proof-marine-generator.jpg',
                                description: 'Spectra Marine canopy type generator, also called dynamo, any machine that converts mechanical energy to electricity for transmission and distribution over power lines to domestic, commercial, and industrial customers. Generators also produce the electrical power required for automobiles, aircraft, ships, and trains.',
                            },
                        ]}/>
                        <Certs/>
                    </div>
                ),
            ]}
            name={'distribution-solutions'}
            heroProps={{
                title: 'Distribution Solutions',
                subtitle: 'Wide range of services',
                image: '/bg/distribution solutions background.jpg',
            }}
            isPreFooter={true}
        />
    )
}

