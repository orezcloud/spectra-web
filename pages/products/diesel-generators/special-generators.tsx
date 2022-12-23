import DefaultPostLayout from '../../../layouts/default-post-layout';
import ProductList from '../../../widgets/list/product-list';


export default function SpecialGenerators() {
    return (
        <DefaultPostLayout
            name={'Special Generators'}
            heroProps={{
                title: 'Special Generators',
                subtitle: 'Power Generators',
                image: '/images/hero/hero-3.jpg',
                topTitle: 'Product',
            }}
            isPreFooter={true}
            Elements={[
                () => (
                    <div>
                        <h2>
                            Continuous Power Generators
                        </h2>
                        <ProductList products={[
                            {
                                title: 'Agricultural Generators',
                                image: '/images/products/special/agriculture.jpg',
                                description: [
                                    'Power cuts and damaged lines can have an even more severe impact on rural farms and agricultural businesses, especially those located farther north. The more rural and isolated the setting is, the more miles of vulnerable cable stand between the farms and the nearest power station, and the longer it can take for power to be restored.',
                                    'Farms and agriculture-based businesses of all kinds need reliable, efficient and inexpensive backup power solutions that they can depend on in a pinch. A good Spectra Generator can turn a disaster into a minor inconvenience. It isn\'t an expensive luxury, but rather an absolute economic necessity.',
                                ],
                            },
                            {
                                title: 'Oil & Gas',
                                image: '/images/products/special/oil and gas.jpg',
                                description: 'Spectra gas generators provide uninterrupted power supply for all kinds of mining equipment in the oil field, run continuously and output safely. The investment cost is low and the payback time is short.',
                            },
                            {
                                title: 'Telecommunication',
                                image: '/images/products/special/telecom generators.jpg',
                                description: 'The Spectra diesel generating set provides an uninterrupted power supply for the telecommunication base station and the related power equipment. It can also be used as a standby power supply. It provides emergency power protection in the case of city power failure or temporary power outage. The investment cost is low and the payback time is short.',
                            },
                            {
                                title: 'Railway Generator',
                                image: '/images/products/special/railway generators.jpg',
                                description: 'The Spectra diesel generating set provides an uninterrupted power supply for the Railway stations and the related power equipment. The power for train station allows absolutely no interruption and must be provided in a super silent way. To meet the demanding requirements, the Spectra generators must have excellent performance',
                            },
                            {
                                title: 'Military Generator',
                                image: '/images/products/special/milltary.jpg',
                                description: [
                                    'Our power generation experience ensures that we offer the most robust and reliable power solutions for your defense needs. All aspects of Cummins Power System solutions (generator set design, manufacturing, installation and service) have been brought together under one company. All the major components – the engine, alternator, integrated and external control systems, and enclosures – are manufactured, built, and tested by Cummins.',
                                    'This integrated approach means each element of a generator set is matched to work in harmony from the start.',
                                ],
                            },
                            {
                                title: 'Solar Generator',
                                image: '/images/products/special/solar generator.jpg',
                                description: 'Spectra Solar generators use solar panels to capture photons from the sun and charge a battery in the generator. Before the power is extracted, an inverter changes it to alternating current electricity, which is what most appliances use today. From there, the generator can power anything that “regular” fossil-fuel electricity can.',
                            },
                        ]}/>
                    </div>
                ),
            ]}
        />
    );
}
