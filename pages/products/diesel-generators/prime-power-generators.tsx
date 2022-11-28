import DefaultPostLayout from '../../../layouts/default-post-layout';
import PostImage from '../../../widgets/post-image';
import UlList from '../../../widgets/list/ul-list';
import ProductList from '../../../widgets/list/product-list';
import {H2, H3, P} from '../../../widgets/comps/text';


export default function PrimePowerGenerators() {
    return (
        <DefaultPostLayout
            name={'prime-power-generators'}
            heroProps={{
                title: 'Prime Power',
                subtitle: 'Diesel Generators',
                image: '/bg/heading-prime-power.jpg',
                topTitle: 'Product',
            }}
            isPreFooter={true}
            Elements={[
                () => (
                    <div>
                        <H2>Prime Power Generators</H2>
                        <P>The Spectra generating set is used as the main power supply instead of the municipal power.
                            which funs continuously and uses it spontaneously. providing uninterrupted power supply to
                            all kinds of power equipment. The investment cost is low and the payback time is short. It
                            is mainly used in residential areas with imperfect power mountains. and mines and so
                            on. </P>
                        <PostImage src={'/images/page/1.jpg'} footnote={'Image are for illustrative purpose only.'}/>
                        <H3>Main Features</H3>
                        <UlList list={[
                            'Power range from 5KW to 2000KW. suitable for all kinds of civil and industrial power equipment.',
                            'The main components are selected from the top international brands. with high reliability and stable performance.',
                            'The flexible grid connected control system can make the power unit supplement and peak load when the main unit is used for power supply so as to achieve the best economic benefits. ',
                            'Intelligent parallel machine control system can realize parallel operation of multiple units to meet the power demand of larger load.',
                            'Large capacity daily oil tank, automatic refueling system, ensure continuous operation, provide uninterrupted power supply. The maintanence space is big. the operation is simple and convenient.',
                            'The whole machine is highly rain-proof and dust-proof. and the control cabinet\'s protection level is IP54.',
                        ]}/>
                    </div>
                ),
                () => (
                    <div>
                        <h2>Prime Power Diesel Generators</h2>
                        <ProductList products={[
                            {
                                title: 'Mobile Generator',
                                image: '/images/products/prime/Mobile Generator.jpg',
                                description: 'The Spectra Mobile Generator engine and is engineered for ease of operation and maintenance. The rental ready machine features wide-opening removable doors for maximum serviceability. The rugged steel design and construction allow for operation for a variety of applications, regardless of weather conditions. Engine is designed to prevent wet stacking by monitoring and regulating engine exhaust temperatures and providing supplemental heat, as needed.',
                            },
                            {
                                title: 'Open Set',
                                image: '/images/products/prime/open Type.jpg',
                                description: 'Spectra open type diesel standby generators are perfect to perform in both prime mode and standby mode, with a power range from 6KVA, up to 3250KVA at prime power rating. The design of Spectra open type gensets are typically for projects with generator rooms with noise isolation materials built in. Past projects for open types consist of but not limited to factories, shopping centres, commercial buildings, hotels, airports, and power stations to grid supply.',
                            },
                            {
                                title: 'Rental Generators',
                                image: '/images/products/prime/rentl Generators.jpg',
                                description: 'Spectra Ultra-quiet units are tailored for the ultra-quiet industry and are mainly used in hospitals, supermarkets, municipalities, banks, telecommunications, mining, power stations, and large construction sites. Ultra-low noise will not affect the surrounding environment and strive to achieve harmony in the environment. ',
                            },
                            {
                                title: 'Soundproof',
                                image: '/images/products/prime/Slient Type 2.jpg',
                                description: 'Spectra soundproof diesel generators are perfect to run under prime and continuous mode to offer users with stable and reliable power supply in peak or continuous operation, and provide an overall power range from 6KVA to 810KVA. The low fuel consumption and maintenance costs enhances return over initial investment, resulting in a shorter payback period. These gensets are perfect to be used in outdoor conditions as the canopy offers the comprehensive feature of being weather-proof.',
                            },
                            {
                                title: 'Super Silent Type',
                                image: '/images/products/prime/Super Slient Type.jpg',
                                description: 'Spectra diesel generator set, designed to meet the super quiet application environment, uses a unique exhaust air silencing channel, so that the noise value of the unit is greatly reduced. It can be used as the main power supply, and can be used as standby power supply to provide emergency power protection when power failure or temporary power failure occurs. The investment cost is low and the payback time is short. It is mainly used in leasing, power plants, mines, construction, industry, emergency power supply and other industries.',
                            },
                        ]}/>
                    </div>
                ),
            ]}
        />
    );
}
