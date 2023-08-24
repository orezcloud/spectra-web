import DefaultPostLayout from '../../layouts/default-post-layout';
import ProductList from '../../widgets/list/product-list';
import {H2} from '../../widgets/comps/text';
import Certs from '../../widgets/comps/certs';


export default function MarineGenerators() {
    return (
        <DefaultPostLayout
            Elements={[
                () => (
                    <div>
                        <H2>Portable Generators</H2>

                        <ProductList products={[
                            {
                                title: 'Gasloine Power',
                                image: '/images/products/portable/gasoline power generator.png',
                                description: 'Spectra Gasoline portal generator safety and portable, silent, reliable, low failure rate，Short circuit protection device with electronic control technology to make sure safety home…',
                            },
                            {
                                title: 'Diseal Power',
                                image: '/images/products/portable/diseal-open-generator.png',
                                description: 'Spectra Diseal portal generator safety and portable, silent, reliable, low failure rate，Short circuit protection device with electronic control technology to make sure safety home…',
                            },
                            {
                                title: 'Canopy type',
                                image: '/images/products/portable/canopy generator.png',
                                description: 'Spectra silent diesel generators are characterized by excellent noise reduction design, offer you a better green production and quiet life.',
                            },
                        ]}/>
                        <Certs/>
                    </div>
                ),
            ]}
            name={'portable-generator'}
            heroProps={{
                title: 'Portable Generators',
                subtitle: 'excellent noise reduction design',
                image: '/bg/portable-generator-background.jpg',
            }}
            isPreFooter={true}
        />
    )
}

