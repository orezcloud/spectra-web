import DefaultPostLayout from '../layouts/default-post-layout';
import {H2, H3, P} from '../widgets/comps/text';


export default function About() {
    return (
        <DefaultPostLayout
            Elements={[
                () => (
                    <div>
                        <H2>OUR COMMITMENT</H2>


                        <P>Spectra are committed to working proactively to reduce modern slavery within our supply chain
                            and operations. Our Ethical Sourcing & Social Responsibility Policy outlines how we
                            endeavour to operate in ways that meet, or exceed ethical, legal, commercial and public
                            expectations.</P>
                        <H3>ETHICAL SOURCING & SOCIAL RESPONSIBILITY POLICY </H3>
                        <P>At Spectra, we are committed to enhancing our business operations to reflect the morals and
                            values of the society in which we operate. Our policies and procedures are developed in
                            accordance with these morals and values in mind.</P>
                        <H3>RECONCILIATION ACTION PLAN - REFLECT</H3>
                        <P>Spectra vision for reconciliation is an Australia in which Aboriginal and Torres Strait
                            Islander cultures are celebrated and embraced as part of a national identity. Our
                            Reconciliation Action Plan provides a framework for Spectra to support the national
                            reconciliation movement.</P>


                    </div>
                ),
            ]}
            name={'policies'}
            heroProps={{
                title: 'Policies & Procedures',
                subtitle: 'We are Zere to help you',
                image: '/images/hero/hero-3.jpg',
            }}
        />
    );
}
