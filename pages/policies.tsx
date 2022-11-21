import DefaultPostLayout from '../layouts/default-post-layout';


export default function About() {
    return (
        <DefaultPostLayout
            Elements={[
                () => (
                    <div>
                         <h2>OUR COMMITMENT</h2>


<p>Spectra are committed to working proactively to reduce modern slavery within our supply chain and operations. Our Ethical Sourcing & Social Responsibility Policy outlines how we endeavour to operate in ways that meet, or exceed ethical, legal, commercial and public expectations.</p>
<h2>ETHICAL SOURCING & SOCIAL RESPONSIBILITY POLICY </h2>
<p>At Spectra, we are committed to enhancing our business operations to reflect the morals and values of the society in which we operate. Our policies and procedures are developed in accordance with these morals and values in mind.</p>
<h2>RECONCILIATION ACTION PLAN - REFLECT</h2>
<p>Spectra vision for reconciliation is an Australia in which Aboriginal and Torres Strait Islander cultures are celebrated and embraced as part of a national identity. Our Reconciliation Action Plan provides a framework  for Spectra to support the national reconciliation movement.</p>








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