import DefaultPostLayout from '../../layouts/default-post-layout';
import {H2} from '../../widgets/comps/text';
import ProductList from '../../widgets/list/product-list';


export default function HybridGenerator() {
    return (
        <DefaultPostLayout
            Elements={[
                () => (
                    <div>
                        <H2>Hybrid Generator</H2>

                        <ProductList products={[
                            {
                                title: 'Diesel Hybrid Generator',
                                image: '/images/products/hybrid-generator.jpg',
                                description: 'The concept of a Spectra hybrid generator is the only solution to a green future on remoted places, or yards with lack of grid power. A combination of a lipo4 battery + auxiliary engine supervised by a heavy-duty UPS system. Ensures that energy is stored in a way the energy requirement can be met at any time, independently of grid connection and at any desired location. This hybrid genset have CE, ISO 9001 and VCA ** certificates. Huge reduction in CO² up to + 90% & saving fuel .',
                            },
                        ]}/>
                    </div>
                ),
            ]}
            name={'hybrid-generator'}
            heroProps={{
                title: 'Hybrid Generator',
                subtitle: 'We are here to help you',
                image: '/images/hero/hero-3.jpg',
            }}
            isPreFooter={true}
        />
    );
}
