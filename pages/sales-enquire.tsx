import DefaultPostLayout from '../layouts/default-post-layout';
import {ContactFormSimple} from '../sections/contact/contact-form';
import {urls} from '../lib/consts';


export default function ContactMail() {


    return (
        <DefaultPostLayout
            Elements={[
                () => (
                    <div>
                        <title>
                            Sales Enquire - Spectra Power Solutions
                        </title>
                        <ContactFormSimple
                            tabs={[
                                {
                                    title: 'General Enquire',
                                    isSelect: false,
                                    href: urls.contactMail,
                                },
                                {
                                    title: 'Sales Enquire',
                                    isSelect: true,
                                    href: urls.salesEnquire,
                                },
                            ]}
                            content={
                                {
                                    submitText: 'Send',
                                    onSubmit: (data) => {
                                        console.log(data);
                                    },
                                    fieldGroups: [
                                        {
                                            groupTitle: 'Contact Information',
                                            fields: [
                                                {
                                                    name: 'name',
                                                    fieldType: 'text',
                                                    label: 'Name',
                                                    type: 'text',
                                                    placeholder: 'e.g. John Doe',
                                                },
                                                {
                                                    name: 'email',
                                                    fieldType: 'text',
                                                    label: 'Email',
                                                    type: 'email',
                                                    placeholder: 'e.g. info@example.com',
                                                },
                                                {
                                                    name: 'phone',
                                                    fieldType: 'text',
                                                    label: 'Phone',
                                                    type: 'text',
                                                    placeholder: 'e.g. +1 234 567 890',
                                                },
                                                {
                                                    name: 'company',
                                                    fieldType: 'text',
                                                    label: 'Company',
                                                    type: 'text',
                                                    placeholder: 'e.g. Google',
                                                },
                                                {
                                                    name: 'country',
                                                    fieldType: 'text',
                                                    label: 'Country',
                                                    type: 'text',
                                                    placeholder: 'e.g. United States',
                                                },
                                                {
                                                    name: 'message',
                                                    fieldType: 'textarea',
                                                    label: 'Message',
                                                    type: 'text',
                                                    placeholder: 'e.g. Hello, I would like to...',
                                                }
                                            ],
                                        },
                                    ],
                                }
                            }
                        />
                    </div>
                ),
            ]}
            name={'contact'}
            heroProps={{
                title: 'Sales Enquire',
                subtitle: 'We are here to help you',
                image: '/images/hero/hero-3.jpg',
            }}
        />
    );
}
