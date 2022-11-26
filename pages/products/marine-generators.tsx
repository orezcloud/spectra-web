
import DefaultPostLayout from '../../layouts/default-post-layout';
import ProductList from '../../widgets/list/product-list';
import {H1} from '../../widgets/comps/text';


export default function MarineGenerators() {
    return (
        <DefaultPostLayout
            Elements={[
                () => (
                    <div>
                        <H1>Marine Generators</H1>

                        <ProductList products={[
                            {
                                title: 'Open type Generator',
                                image: '/images/products/open-type-marine-generator.jpg',
                                description: 'Spectra Marine open type generator, also called dynamo, any machine that converts mechanical energy to electricity for transmission and distribution over power lines to domestic, commercial, and industrial customers. The design of Spectra open type gensets are typically for projects with generator rooms with noise isolation materials built in. Generators also produce the electrical power required for automobiles, aircraft, ships, and trains.',
                            },
                            {
                                title: 'Canopy type Generator',
                                image: '/images/products/sound-proof-marine-generator.jpg',
                                description: 'Spectra Marine canopy type generator, also called dynamo, any machine that converts mechanical energy to electricity for transmission and distribution over power lines to domestic, commercial, and industrial customers. Generators also produce the electrical power required for automobiles, aircraft, ships, and trains.',
                            },
                        ]}/>
                    </div>
                ),
            ]}
            name={'marine-generator'}
            heroProps={{
                title: 'Marine Generators',
                subtitle: 'automobiles, aircraft, ships and trains.',
                image: '/images/hero/hero-3.jpg',
            }}
            isPreFooter={true}
        />
    )
}

