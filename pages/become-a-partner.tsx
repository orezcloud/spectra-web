import DefaultPostLayout from '../layouts/default-post-layout';
import {H3, P} from '../widgets/comps/text';
import {Form} from '../sections/contact/form';
import {ContactFormSimple} from '../sections/contact/contact-form';
import {urls} from '../lib/consts';


export default function BecomeAPartner() {
    return (
        <DefaultPostLayout
            Elements={[
                () => (
                    <div>
                        <title>
                            Become a Partner - Spectra Power Solutions
                        </title>
                        <H3>Exclusive Platforms</H3>
                        <P>
                            Spectra Business Network Platform gives our partners support to perform at the top level in
                            their markets. Through our platform we provide Marketing Tools, Pre-Sales and After-Sales
                            support, R & D and Special Project Support, Training, Access to our Knowledge Management base,
                            Warranty, and Spare Parts support. In other words, we give access to a world-class
                            manufacturer back-office to our partners so they can concentrate on what they do best,
                            taking care of their clients.
                        </P>

                        {/*<div className={'row'}>*/}
                        {/*    <Form*/}
                        {/*        fieldGroups={[*/}
                        {/*            {*/}
                        {/*                groupTitle: 'Contact Information',*/}
                        {/*                fields: [*/}
                        {/*                    {*/}
                        {/*                        name: 'name',*/}
                        {/*                        fieldType: 'text',*/}
                        {/*                        type: 'text',*/}
                        {/*                        placeholder: 'e.g. John Doe',*/}
                        {/*                        label: 'Name',*/}
                        {/*                    },*/}
                        {/*                ],*/}
                        {/*            },*/}
                        {/*        ]}*/}
                        {/*    />*/}
                        {/*</div>*/}


                        <div className={'mt-9'}></div>
                        {/*<div className={'row'}>*/}
                        {/*  <div className={'col'}>*/}
                        {/*  </div>*/}
                        {/*    <div className={'col-7'}>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        <ContactFormSimple
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


                        <style>{`
                        
                        `}</style>
                    </div>
                ),
            ]}
            name={'become-a-partner'}
            heroProps={{
                title: 'Become a Partner',
                subtitle: 'Spectra Power Solutions',
                image: '/images/hero/hero-3.jpg',
            }}
        />
    );
}
