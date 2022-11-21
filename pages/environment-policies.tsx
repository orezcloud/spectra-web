import DefaultPostLayout from '../layouts/default-post-layout';


export default function About() {
    return (
        <DefaultPostLayout
            Elements={[
                () => (
                    <div>
                        <h2>ENVIRONMENT IS THE TOP PRIORITY</h2>
                        <ul>
                         <li>
                         Spectra pursues excellence in environmental protection.
                         </li>
                         <li>
                         At Spectra, environmental protection is the primary management responsibility, and also for every employee.
                         </li>
                         <li>
                         Reducing or eliminating waste generation is a major consideration in process design and operation.
                         </li>
                         <li>
                         ISO 14001 certification focuses on environmental issues and the company’s management of environmental issues.
                         </li>
                         <li>
                         Environmental protection is an integral part of the Spectra business. ISO 14001 certification demonstrates our commitment and management of important environmental issues. Spectra is committed to protecting the environment through continuous improvement and compliance with environmental laws and regulations.
                         </li>
                        </ul>

                        
                    </div>
                ),
            ]}
            name={'environment-policies'}
            heroProps={{
                title: 'Environment policies',
                subtitle: 'We are here to help you',
                image: '/images/hero/hero-3.jpg',
            }}
        />
    );
}