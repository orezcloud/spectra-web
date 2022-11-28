import {ReactNode, useState} from 'react';
import {Form, IFormProps} from './form';
import {COLORS} from '../../styles/consts';
import AnimLink from '../../lib/anim-link';


interface HeaderTabsProps {
    tabs: {
        title: string;
        href?: string
    }[];
    activeTab: number;
    setActiveTab: (index: number) => void;
}

function HeaderTabs(props: HeaderTabsProps) {
    const {tabs, activeTab, setActiveTab} = props;

    return (
        <div className="header-tabs d-flex ">
            {tabs.map((tab, index) => (
                <div
                    className={`header-tab w-100 text-center ${activeTab === index ? 'selected' : ''}`}
                    key={index}
                    onClick={() => setActiveTab(index)}
                >
                    {(!tab.href || (activeTab === index)) ? (
                        <span className={'py-6'}>
                            {tab.title}
                        </span>
                    ) : (
                        <AnimLink href={tab.href}>
                            <a className={'py-6'}>
                                {tab.title}
                            </a>
                        </AnimLink>
                    )}
                </div>
            ))}

            <style jsx>{`
              .header-tab {
                transition: all 0.2s ease-in-out;

                a, span {
                  display: block;
                  height: 100%;
                  padding: 0;
                }

                a:hover {
                  opacity: 0.8;
                  color: inherit;
                }
              }

              .header-tab:hover {
                //border: 2px solid #000;
              }

              .header-tab.selected {
                border: 1px solid #000;
                background: #fff !important;
                opacity: .6;
              }

              .header-tab:not(.selected) {
                background-color: ${COLORS.dark};
                color: #fff;
              }
            `}</style>
        </div>
    );
}

function TabContent(props: {children: ReactNode}) {
    return (
        <div className="tab-content-container">
            <div className={'opacity-0'} style={{height: 0}}>.</div>


            <div className={'d-flex justify-content-center py-8 pb-10'}>
                <div className={'tab-content'}>
                    {props.children}
                </div>
            </div>
            <style jsx>{`
              .tab-content-container {
                border-bottom: 1px solid #000;
                border-left: 1px solid #000;
                border-right: 1px solid #000;
              }

              .tab-content {
                width: 80%;
              }
            `}</style>
        </div>
    );
}

interface ITabbedFormProps {
    forms: {
        title: string;
        form: IFormProps;
    }[];
}

function Container({children, className}: {children: ReactNode, className?: string}) {
    return (
        <div className="contact-container">
            {children}
            <style jsx>{`
              .contact-container {
                width: 100%;
                max-width: 800px;
                margin: 0 auto;
                background-color: #F4F4F4;
              }
            `}</style>
        </div>
    );
}

function ContentContainer({children, className}: {children: ReactNode, className?: string}) {
    return (
        <div className="container">
            {children}
            <style jsx>{`
              .container {
                width: 100%;
                max-width: 800px;
                margin: 0 auto;
                background-color: #F4F4F4;
              }
            `}</style>
        </div>
    );
}

export default function ContactForm(props: ITabbedFormProps) {
    const [activeTab, setActiveTab] = useState(0);
    if (props.forms.length === 0) {
        return null;
    }
    return (
        <Container className="contact-form">
            <HeaderTabs
                tabs={props.forms.map(form => ({
                    title: form.title,
                }))}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
            <TabContent>
                {
                    props.forms.length > 0 &&
                    <Form
                        fieldGroups={props.forms[activeTab].form.fieldGroups}
                        onSubmit={props.forms[activeTab].form.onSubmit}
                        submitText={props.forms[activeTab].form.submitText}
                    />
                }
            </TabContent>
        </Container>
    );
}

interface IContactFormSimpleProps {
    tabs: {
        title: string;
        isSelect?: boolean;
        href: string;
    }[];
    content: IFormProps;
}

export function ContactFormSimple(props: IContactFormSimpleProps) {

    return (
        <Container className="contact-form">
            <HeaderTabs
                tabs={props.tabs.map(tab => (
                    {
                        title: tab.title,
                        href: tab.href,
                    }
                ))}
                activeTab={props.tabs.findIndex(tab => tab.isSelect)}
                setActiveTab={
                    (_) => {
                    }
                }
            />
            <TabContent>
                {
                    props.tabs.length > 0 &&
                    <Form
                        fieldGroups={props.content.fieldGroups}
                        onSubmit={props.content.onSubmit}
                        submitText={props.content.submitText}
                    />
                }
            </TabContent>
        </Container>
    );
}
