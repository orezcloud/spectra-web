import {DefaultSection} from '../../layouts/section-layouts';
import {useIsMobileOrTablet} from '../../styles/breakpoints';


export default function Footer() {
    const isMobileOrTablet = useIsMobileOrTablet();

    return (
        <DefaultSection name={'footer'} padding={'none'}>
            <div className="footer-main nobullet overflow-hidden">
                <div className="row justify-content-center">
                    {
                        footerLinks.map((link, index) => (
                            <div className="col-lg-2 col-md-6" key={index}>
                                <div className="footer-widget">
                                    <h3 className="footer-title">{link.title}</h3>
                                    <ul className="footer-links">
                                        {
                                            link.links.map((item, index) => (
                                                <li key={index}>
                                                    <a href={item.path}>{item.name}</a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <Note/>
            <Links/>
            {
                !isMobileOrTablet ? <FooterBottomDesktop/> :
                    <FooterBottomMobile/>
            }

            <style jsx>
                {`
                  :global(.footer) {
                    color: #fff;
                    background: #080808;
                    padding: 60px 0 20px;
                  }

                  .footer-main .col-lg-2 {
                    width: 20%;
                  }
                `}
            </style>
        </DefaultSection>
    );
}

function Note() {
    return (
        <div className={'note'}>
            <p className={'text-center'}>
                Spectra acknowledges and pays respect to the past, present and future Traditional Sri Lanka this nation
                and the continuation of cultural, spritual and educational practices of indian ocean Islander peoples
            </p>

            <style jsx>
                {`
                  .note {
                    padding-top: 40px;
                    max-width: 80%;
                    margin: 0 auto;
                  }
                `}
            </style>
        </div>
    );
}

function Links() {
    return (
        <div className={'links'}>

            <div className={'d-flex justify-content-between'}>
                <div className={'col-auto'}>
                    <a href="tel:+9411123456789">
                        <span>+94 11 123 456 789</span>
                    </a>
                </div>
                <div className={'col-auto'}>
                    <a href="mailto:powermart@sisara.lk">
                        <span>powermart@sisara.lk</span>
                    </a>
                </div>

                <div className={'col-auto'}>
                    <a href="tel:+9411123456789">
                        <span>+94 11 123 456 789</span>
                    </a>
                </div>
            </div>

            <style jsx>
                {`
                  .links {
                    max-width: 80%;
                    margin: 0 auto;
                    padding-top: 20px;
                  }
                `}
            </style>
        </div>
    );
}

function FooterBottomDesktop() {
    return (
        <div className={'footer-bottom'}>
            <div className={'d-flex justify-content-center text-center position-absolute container-fluid'}
                 style={{zIndex: 3}}>
                <div className={'col-auto mx-5'}>
                    <a href={'#'}>Privacy Policy</a>
                </div>
                <div className={'col-auto mx-5'}>
                    <a href={'#'}>Terms & Conditions</a>
                </div>
            </div>
            <div className={'d-flex justify-content-between'}>
                <div className={'col-auto'}>
                        <span>
                            Copyright © 2021 Sisara. All rights reserved.
                        </span>
                </div>
                <div className={'col-auto'}>
                    <a href={'#'}>
                        <img src={'/images/linkedin.svg'} alt={'linkedin'}/>
                    </a>
                </div>
            </div>

            <style jsx>
                {`
                  .footer-bottom {
                    //max-width: 80%;
                    margin: 20px auto 0;
                    padding-top: 20px;
                    border-top: 1px solid #fff;
                  }
                `}
            </style>
        </div>
    );
}

function FooterBottomMobile() {
    return (
        <div>

        </div>
    );
}

const footerLinks = [
    {
        title: 'PowerMart',
        links: [
            {
                name: 'Discover PowerMart',
                path: '/',
            },
            {
                name: 'PowerMart for Business',
                path: '/about',
            },
            {
                name: 'Careers',
                path: '/careers',
            },
            {
                name: 'Policies & Procedures',
                path: '/policies',
            },
        ],
    },
    {
        title: 'Services',
        links: [
            {
                name: 'After Sales Service',
                path: '/',
            },
            {
                name: 'Spare Parts',
                path: '/about',
            },
        ],
    },
    {
        title: 'Resources',
        links: [
            {
                name: 'FAQs',
                path: '/',
            },
            {
                name: 'Warranties',
                path: '/about',
            },
            {
                name: 'Selected Projects',
                path: '/careers',
            },
            {
                name: 'Downloads',
                path: '/downloads',
            },
        ],
    },
    {
        title: 'Case Studies',
        links: [
            {
                name: 'Diesel to Power',
                path: '/',
            },
            {
                name: 'Gas to Power',
                path: '/about',
            },
        ],
    },
    {
        title: 'Contact',
        links: [
            {
                name: 'Become a Partner',
                path: '/',
            },
            {
                name: 'Sales Enquiries',
                path: '/about',
            },
            {
                name: 'General Enquiries',
                path: '/contact',
            },
        ],
    },
];
