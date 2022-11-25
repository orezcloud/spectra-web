import DefaultPostLayout from '../layouts/default-post-layout';
import {ContactFormSimple} from '../sections/contact/contact-form';
import {urls} from '../lib/consts';


export default function ContactMail() {


    return (
        <DefaultPostLayout
            Elements={[
                () => (
                    <div>
                        <ContactFormSimple
                            tabs={[
                                {
                                    title: 'General Enquire',
                                    isSelect: false,
                                    href: urls.contact,
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
                                                    type: 'text',
                                                    placeholder: 'Name',
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
                title: 'Sales Enquire',
                subtitle: 'We are here to help you',
                image: '/images/hero/hero-3.jpg',
            }}
        />
    );
}
