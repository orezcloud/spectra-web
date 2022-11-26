import DefaultPostLayout from '../../layouts/default-post-layout';
import ProductList from '../../widgets/list/product-list';
import {H2} from '../../widgets/comps/text';


export default function MarineGenerators() {
    return (
        <DefaultPostLayout
            Elements={[
                () => (
                    <div>
                        <H2>Portable Generators</H2>

                        <ProductList products={[
                            {
                                title: 'Gasloine Power Generator',
                                image: '/images/products/portable/Gasoline Power Generator.png',
                                description: 'Spectra Gasoline portal generator safety and portable, silent, reliable, low failure rate，Short circuit protection device with electronic control technology to make sure safety home…',
                            },
                            {
                                title: 'Diseal Power Generator',
                                image: '/images/products/portable/Diseal open Generator.png',
                                description: 'Spectra Diseal portal generator safety and portable, silent, reliable, low failure rate，Short circuit protection device with electronic control technology to make sure safety home…',
                            },
                            {
                                title: 'Canopy type Generator',
                                image: '/images/products/portable/Canopy Generator.png',
                                description: 'Spectra silent diesel generators are characterized by excellent noise reduction design, offer you a better green production and quiet life.',
                            },
                        ]}/>
                    </div>
                ),
            ]}
            name={'portable-generator'}
            heroProps={{
                title: 'Portable Generators',
                subtitle: 'excellent noise reduction design',
                image: '/images/hero/hero-3.jpg',
            }}
            isPreFooter={true}
        />
    )
}

