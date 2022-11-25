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
                                description: 'Spectra Diesel generators are applied in a range of buildings, including office buildings, skyscrapers, residential, hotels, restaurants, shopping malls, schools and etc. Non-stop power supply is needed for the operation of computers, lighting, electric appliance, and elevators in these premises. Spectra generators usually act as standby power supply, standing by main power. ',
                                image: '/images/solution (1).jpg',
                            },
                            {
                                title: 'Construction',
                                description: 'Spectra Diesel generators are applied in a range of buildings, including office buildings, skyscrapers, residential, hotels, restaurants, shopping malls, schools and etc. Non-stop power supply is needed for the operation of computers, lighting, electric appliance, and elevators in these premises. Spectra generators usually act as standby power supply, standing by main power. ',
                                image: '/images/solution (2).jpg',
                            },
                            {
                                title: 'Construction',
                                description: 'Spectra Diesel generators are applied in a range of buildings, including office buildings, skyscrapers, residential, hotels, restaurants, shopping malls, schools and etc. Non-stop power supply is needed for the operation of computers, lighting, electric appliance, and elevators in these premises. Spectra generators usually act as standby power supply, standing by main power. ',
                                image: '/images/solution (3).jpg',
                            },
                            {
                                title: 'Construction',
                                description: 'Spectra Diesel generators are applied in a range of buildings, including office buildings, skyscrapers, residential, hotels, restaurants, shopping malls, schools and etc. Non-stop power supply is needed for the operation of computers, lighting, electric appliance, and elevators in these premises. Spectra generators usually act as standby power supply, standing by main power. ',
                                image: '/images/solution (4).jpg',
                            },
                            {
                                title: 'Construction',
                                description: 'Spectra Diesel generators are applied in a range of buildings, including office buildings, skyscrapers, residential, hotels, restaurants, shopping malls, schools and etc. Non-stop power supply is needed for the operation of computers, lighting, electric appliance, and elevators in these premises. Spectra generators usually act as standby power supply, standing by main power. ',
                                image: '/images/solution (5).jpg',
                            },
                            {
                                title: 'Construction',
                                description: 'Spectra Diesel generators are applied in a range of buildings, including office buildings, skyscrapers, residential, hotels, restaurants, shopping malls, schools and etc. Non-stop power supply is needed for the operation of computers, lighting, electric appliance, and elevators in these premises. Spectra generators usually act as standby power supply, standing by main power. ',
                                image: '/images/solution (6).jpg',
                            },
                        ]}/>
                    </div>
                ),
            ]}
            name={'solutions'}
            heroProps={{
                title: 'Solutions',
                subtitle: 'We are here to help you',
                image: '/images/hero/hero-3.jpg',
            }}
            isPreFooter={true}
        />
    );
}
