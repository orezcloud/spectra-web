import DefaultPostLayout from '../../layouts/default-post-layout';
import ProductList from '../../widgets/list/product-list';
import {H1} from '../../widgets/comps/text';


export default function GasGenerators() {
    return (
        <DefaultPostLayout
            Elements={[
                () => (
                    <div>
                        <H1>Gas Generators</H1>

                        <ProductList products={[
                            {
                                title: 'Oil and Gas Generator',
                                image: '/images/products/oil-gas-generators.jpg',
                                description: 'Spcetra Oil and Gas generator sets, ranging from 10KW – 2000KW, are built with Spectra engines, alternators as well as MAN and MWM engines. Our generator sets are the result of integrated design and manufacturing intended to meet your requirements for reliability, power quality, rated performance, and efficient operation.',
                            },
                            {
                                title: 'Liquefied Petroleum Gas',
                                image: '/images/products/petrolium-generator.jpg',
                                description: 'With petroleum industry development, liquefied petroleum gas, as a basic raw material for chemical industry and new fuel, has become more and more important.',
                            },
                        ]}/>
                    </div>
                ),
            ]}
            name={'gas-generator'}
            heroProps={{
                title: 'Gas Generators',
                subtitle: 'Ranging from 10KW – 2000KW',
                image: '/images/hero/hero-3.jpg',
            }}
            isPreFooter={true}
        />
    )
}
