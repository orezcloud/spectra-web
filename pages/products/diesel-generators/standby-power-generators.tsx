import DefaultPostLayout from '../../../layouts/default-post-layout';
import ProductList from '../../../widgets/list/product-list';


export default function Solutions() {
    return (
        <DefaultPostLayout
            name={'standby-power-generator'}
            heroProps={{
                title: 'Standby',
                subtitle: 'Diesel Generators',
                image: '/images/hero/hero-3.jpg',
                topTitle: 'Product',
            }}
            isPreFooter={true}
            Elements={[
                () => (
                    <div>
                        <h2>Standby Power Generator</h2>
                        <ProductList products={[
                            {
                                title: 'Open Set',
                                image: '/images/products/open-type.jpg',
                                description: 'Spectra open type diesel standby generators are perfect to perform in both prime mode and standby mode, with a power range from 6KVA, up to 3250KVA at prime power rating. The design of Spectra open type gensets are typically for projects with generator rooms with noise isolation materials built in. Past projects for open types consist of but not limited to factories, shopping centres, commercial buildings, hotels, airports, and power stations to grid supply.',
                            },
                            {
                                title: 'Soundproof Set',
                                image: '/images/products/silent-type.jpg',
                                description: 'Spectra soundproof diesel generators are perfect to run under prime and continuous mode to offer users with stable and reliable power supply in peak or continuous operation, and provide an overall power range from 6KVA to 810KVA. The low fuel consumption and maintenance costs enhances return over initial investment, resulting in a shorter payback period. These gensets are perfect to be used in outdoor conditions as the canopy offers the comprehensive feature of being weather-proof.',
                            },
                            {
                                title: 'Super Silent Set',
                                image: '/images/products/super-silent-type.jpg',
                                description: 'Spectra diesel generator set, designed to meet the super quiet application environment, uses a unique exhaust air silencing channel, so that the noise value of the unit is greatly reduced. It can be used as the main power supply, and can be used as standby power supply to provide emergency power protection when power failure or temporary power failure occurs. The investment cost is low and the payback time is short. It is mainly used in leasing, power plants, mines, construction, industry, emergency power supply and other industries.',
                            },
                            {
                                title: 'Rental Set',
                                image: '/images/products/rentl-generators.jpg',
                                description: 'Spectra open type diesel standby generators are perfect to perform in both prime mode and standby mode, with a power range from 6KVA, up to 3250KVA at prime power rating. The design of Spectra open type gensets are typically for projects with generator rooms with noise isolation materials built in. Past projects for open types consist of but not limited to factories, shopping centres, commercial buildings, hotels, airports, and power stations to grid supply.',
                            },
                            {
                                title: 'Mobile Generator',
                                image: '/images/products/mobile-generator.jpg',
                                description: 'The Spectra Mobile Generator engine and is engineered for ease of operation and maintenance. The rental ready machine features wide-opening removable doors for maximum serviceability. The rugged steel design and construction allow for operation for a variety of applications, regardless of weather conditions. Engine is designed to prevent wet stacking by monitoring and regulating engine exhaust temperatures and providing supplemental heat, as needed.',
                            },
                        ]}/>
                    </div>
                ),
            ]}
        />
    );
}
