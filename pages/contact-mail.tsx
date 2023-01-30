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
                            General Enquire - Spectra Power Solutions
                        </title>
                        <ContactFormSimple
                            tabs={[
                                {
                                    title: 'General Enquire',
                                    isSelect: true,
                                    href: urls.contact,
                                },
                                {
                                    title: 'Sales Enquire',
                                    isSelect: false,
                                    href: urls.salesEnquire,
                                },
                            ]}
                            content={
                                {
                                    submitText: 'Send',
                                    onSubmit: (data) => {
                                        // todo: send data to server
                                        console.log(data);
                                    },
                                    fieldGroups: [
                                        {
                                            groupTitle: 'Contact Information',
                                            fields: [
                                                {
                                                    name: 'name',
                                                    fieldType: 'text',
                                                    type: 'text',
                                                    placeholder: 'e.g. John Doe',
                                                    label: 'Name',
                                                },
                                                {
                                                    name: 'phone',
                                                    fieldType: 'text',
                                                    type: 'phone',
                                                    placeholder: 'e.g. 0123456789',
                                                    label: 'Phone',
                                                },
                                                {
                                                    name: 'email',
                                                    fieldType: 'text',
                                                    type: 'email',
                                                    placeholder: 'e.g. mail@google.com',
                                                    label: 'Name',
                                                },
                                                {
                                                    name: 'how-did',
                                                    fieldType: 'select',
                                                    label: 'How did you hear about us?',
                                                    placeholder: '',
                                                    options: [
                                                        {
                                                            label: 'Select',
                                                            value: '',
                                                        },
                                                        {
                                                            label: 'Google',
                                                            value: 'google',
                                                        },
                                                        {
                                                            label: 'Facebook',
                                                            value: 'facebook',
                                                        },
                                                        {
                                                            label: 'Twitter',
                                                            value: 'twitter',
                                                        },
                                                        {
                                                            label: 'Instagram',
                                                            value: 'instagram',
                                                        },
                                                        {
                                                            label: 'Other',
                                                            value: 'other',
                                                        },
                                                    ],
                                                },
                                                {
                                                    name: 'message',
                                                    fieldType: 'textarea',
                                                    placeholder: 'e.g. Hello, I am interested in your product',
                                                    label: 'Message',
                                                },
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
                title: 'Contact',
                subtitle: 'Get in touch with us',
                image: '/images/hero/hero-3.jpg',
            }}
        />
    );
}
