

import DefaultPostLayout from '../../layouts/default-post-layout';
import ProductList from '../../widgets/list/product-list';
import {H1} from '../../widgets/comps/text';


export default function MarineGenerators() {
    return (
        <DefaultPostLayout
            Elements={[
                () => (
                    <div>
                        <H1>Portable Generators</H1>

                        <ProductList products={[
                            {
                                title: 'Gasloine Power Generator',
                                image: '/images/products/open-type-marine-generator.jpg',
                                description: 'Spectra Gasoline portal generator safety and portable, silent, reliable, low failure rate，Short circuit protection device with electronic control technology to make sure safety home…',
                            },
                            {
                                title: 'Diseal Power Generator',
                                image: '/images/products/sound-proof-marine-generator.jpg',
                                description: 'Spectra Diseal portal generator safety and portable, silent, reliable, low failure rate，Short circuit protection device with electronic control technology to make sure safety home…',
                            },
                            {
                                title: 'Canopy type Generator',
                                image: '/images/products/sound-proof-marine-generator.jpg',
                                description: 'Spectra silent diesel generators are characterized by excellent noise reduction design, offer you a better green production and quiet life.',
                            },
                        ]}/>
                    </div>
                ),
            ]}
            name={'portable-generator'}
            heroProps={{
                title: 'Portable Generator',
                subtitle: 'We are here to help you',
                image: '/images/hero/hero-3.jpg',
            }}
            isPreFooter={true}
        />
    )
}

