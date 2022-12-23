import DefaultPostLayout from '../../layouts/default-post-layout';
import ProductList from '../../widgets/list/product-list';
import {H1} from '../../widgets/comps/text';
import Certs from '../../widgets/comps/certs';


export default function LightTowers() {
    return (
        <DefaultPostLayout
            Elements={[
                () => (
                    <div>
                        <H1>Light Towers</H1>

                        <ProductList products={[
                            {
                                title: 'Gasoline Light Tower Generators',
                                image: '/images/products/gasoline-power-light.jpg',
                                description: 'The Spectra lighting tower powered by the gasoline generator and is suitable for a wide range of applications including large outdoor events, sports fields, construction and work sites, workshop, farming, logistics, rural and hard to reach areas and temporary public lighting. Sprectra Light Tower provides a flexible lighting solution by allowing users to easily plug into any power source including auxiliary power, portable generators or directly into the mains power supply.',
                            },
                            {
                                title: 'Diesel Light Tower Generators',
                                image: '/images/products/diseal-power-light.jpg',
                                description: [
                                    'The Spectra Light Towers are Ideal brightness partners for lighting requirements. They are reliable, durable and cost effective. They provide seemless lighting for long hours and in difficult conditions.',
                                    'Some of our customer Industries - Manufacturing, Process, Infrastructure, Construction, Railways, Defense, Retail, & Government etc.',
                                ],
                            },
                            {
                                title: 'Super Silent Light Tower Generators',
                                image: '/images/products/super-silent-power-light.jpg',
                                description: 'Spectra Silent Light Tower, designed to meet the super quiet application environment, uses a unique exhaust air silencing channel, so that the noise value of the unit is greatly reduced Sprectra Light Tower provides a flexible lighting solution by allowing users to easily plug into any power source including auxiliary power, portable generators or directly into the mains power supply.',
                            },
                        ]}/>
                        <Certs/>
                    </div>
                ),
            ]}
            name={'light-generator'}
            heroProps={{
                title: 'Light Towers',
                subtitle: 'Reliable, Durable & Cost Effective',
                image: '/bg/light-tower-generator-background-2.jpg',
            }}
            isPreFooter={true}
        />
    );
}

