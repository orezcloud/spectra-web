import DefaultPostLayout from '../layouts/default-post-layout';
import {H2, H3, P} from '../widgets/comps/text';


export default function About() {
    return (
        <DefaultPostLayout
            Elements={[
                () => (
                    <div>
                        <title>
                            After Sales - Spectra Power Solutions
                        </title>
                        <H2>SPECTRA AFTER SALES</H2>
                        <P>We are always by your side and provide our customer with the best experience in sales,
                            services and
                            support whether you are a first-time buyer for Spectra units or a return client for
                            replacement units,
                            engine, parts or other type of goods, our expertise in the industry will provide you with
                            the best support.</P>

                        <br/><br/>
                        <H3>GENERATOR SET MAINTENANCE PLAN</H3>
                        <P>Through our industry-leading maintenance plan, we provide customised service packages for
                            each generator
                            which can reduce the risk of downtime and loss of revenue. There are many choices in
                            planning, including
                            a standardised or customised package, with the available maintenance plan starting monthly,
                            quarterly,
                            or annually, this will prevent unforeseen failures and ensure that your generator set can
                            complete the
                            task when you need power. You can also count on our national quality support and expert
                            assurance.
                            We are on call for emergency maintenance, and we can provide rental equipment to handle your
                            load
                            during planned or unexpected downtime.</P>
                    </div>
                ),
            ]}
            name={'after-sales'}
            heroProps={{
                title: 'After Sales',
                subtitle: 'We are here to help you',
                image: '/images/hero/hero-3.jpg',
            }}
        />
    );
}
