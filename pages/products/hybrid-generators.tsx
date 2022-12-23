import DefaultPostLayout from '../../layouts/default-post-layout';
import {H2} from '../../widgets/comps/text';
import ProductList from '../../widgets/list/product-list';
import Certs from '../../widgets/comps/certs';


export default function HybridGenerators() {
    return (
        <DefaultPostLayout
            Elements={[
                () => (
                    <div>
                        <H2>Hybrid Generators</H2>

                        <ProductList products={[
                            {
                                title: 'Diesel Hybrid Generator',
                                image: '/images/products/hybrid-generator.jpg',
                                description: 'The concept of a Spectra hybrid generator is the only solution to a green future on remoted places, or yards with lack of grid power. A combination of a lipo4 battery + auxiliary engine supervised by a heavy-duty UPS system. Ensures that energy is stored in a way the energy requirement can be met at any time, independently of grid connection and at any desired location. This hybrid genset have CE, ISO 9001 and VCA ** certificates. Huge reduction in CO² up to + 90% & saving fuel .',
                            },
                        ]}/>
                        <Certs/>
                    </div>
                ),
            ]}
            name={'hybrid-generators'}
            heroProps={{
                title: 'Hybrid Generators',
                subtitle: 'Huge reduction in CO² up to + 90%',
                image: '/bg/hybrid-generator-background.jpg',
            }}
            isPreFooter={true}
        />
    );
}
