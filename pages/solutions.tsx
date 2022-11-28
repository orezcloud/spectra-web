import DefaultPostLayout from '../layouts/default-post-layout';
import ServiceList from '../widgets/list/service-list';


export default function Solutions() {

    return (
        <DefaultPostLayout
            Elements={[
                () => (
                    <div>
                        <h2>All power solutions under one roof</h2>
                        <ServiceList services={[
                            {
                                title: 'Construction',
                                description: 'Spectra Diesel generators are applied in a range of buildings, including office buildings, including office buildings, skyscrapers, residential, hotels, restaurants, shopping malls, schools and etc.',
                                image: '/images/solutions/solution (5).jpg',
                            },
                            {
                                title: 'Hospital',
                                description: 'Hospitals have lots of demand for power supply. The power for hospitals allows absolutely no interruption and must be provided in a super silent way.',
                                image: '/images/solutions/solution (8).jpg',
                            },
                            {
                                title: 'Rail Station',
                                description: 'Train stations have a lot of demand for power supply. The power for train station allows absolutely no interruption and must be provided in a super silent way.',
                                image: '/images/solutions/solution (1).jpg',
                            },
                            {
                                title: 'Bank',
                                description: 'Bank have lots of demand for power supply. The power for bank allows absolutely no interruption and must be provided in a super silent way and not damage to the institution\'s reputation.',
                                image: '/images/solutions/solution (11).jpg',
                            },
                            {
                                title: 'Telecommunication',
                                description: 'Telecommunication have a lot of demand for power supply. The power for Telecom allows absolutely no interruption and must be provided in a super silent way and not functioning communication error.',
                                image: '/images/solutions/solution (4).jpg',
                            },
                            {
                                title: 'Oil Field ',
                                description: 'Oil fields have a lot of demand for power supply. The power for oil fields allows absolutely no interruption and must be provided in a super silent way.',
                                image: '/images/solutions/solution (6).jpg',
                            },

                            {
                                title: 'Outdoor engineering',
                                description: 'Many outdoor projects which have strictly requirement are using Spectra power solutions, it has proved the high reliability of Spectra units.',
                                image: '/images/solutions/solution (10).jpg',
                            },
                            {
                                title: 'Mine',
                                description: 'The Spectra increases mine and smelting plant construction operations efficiency. The gen-set is usually used for life electricity, engineering electricity and drilling rig transformation in the mine. It is usually as prime power.',
                                image: '/images/solutions/solution (2).jpg',
                            },
                            {
                                title: 'Power Plant',
                                description: 'The power plant mainly includes automatic oil supply system, power generation system, power distribution system, intelligent control system, lightning protection system, lighting system and fire protection system.',
                                image: '/images/solutions/solution (1).jpg',
                            },
                            {
                                title: 'Military',
                                description: 'Spectra Diesel generators are applied in a range of buildings, including office buildings, skyscrapers, residential, hotels, restaurants, shopping malls, schools and etc.',
                                image: '/images/solutions/solution (3).jpg',
                            },
                        ]}/>
                    </div>
                ),
            ]}
            name={'solutions'}
            heroProps={{
                title: 'Solutions',
                subtitle: 'Power solutions for all industries',
                image: '/images/hero/hero-3.jpg',
            }}
            isPreFooter={true}
        />
    );
}
