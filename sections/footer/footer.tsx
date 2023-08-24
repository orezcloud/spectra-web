import {DefaultSection} from '../../layouts/section-layouts';
import {
    getLaptopOrTabletOrMobileMediaQuery,
    getMobileOrTabletOnlyMediaQuery,
    useIsMobileOrTablet,
} from '../../styles/breakpoints';
import {base} from '../../styles/consts';
import {footerLinks} from '../../lib/consts';
import {FooterBottomDesktop, FooterBottomMobile} from './footer-bottom';
import AnimLink from '../../lib/anim-link';


export default function Footer() {
    const isMobileOrTablet = useIsMobileOrTablet();

    return (
        <DefaultSection name={'footer'} padding={'none'} className={'noslide'}>
            <div className="footer-main nobullet overflow-hidden mx-auto">
                <div className="row justify-content-between justify-content-md-start justify-content-lg-between">
                    {
                        footerLinks.map((link, index) => (
                            <div className="col-lg-auto col-6 col-md-4 mb-7 mb-lg-0" key={index}>
                                <div className="footer-widget">
                                    <h3 className="footer-title mb-4 mb-lg-6">{link.title}</h3>
                                    <ul className="footer-links">
                                        {
                                            link.links.map((item, index) => (
                                                <li key={index}>
                                                    <AnimLink href={item.path}>{item.name}</AnimLink>
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
            <div style={{
                marginTop: base(2.4),
            }}/>

            <Note/>

            {/*<div className={'position-relative'}>*/}
            {/*    <AnimatedString text={'Hello World'} opacity={.4} delay={0}/>*/}
            {/*    <div className={'position-absolute'} style={{top: 0}}>*/}
            {/*        <AnimatedString text={'Hello World'} opacity={1} delay={200}/>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*<Links/>*/}
            <div className={'pt-5'}/>
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
                    overflow: hidden;
                    //max-width: 100%;
                  }

                  :global(.footer a), :global(.footer p), :global(.footer h3) {
                    color: #fff;
                  }

                  .footer-main {
                    max-width: 90%;
                    @media (${getLaptopOrTabletOrMobileMediaQuery()}) {
                      max-width: 100% !important;
                    }
                    @media (${getMobileOrTabletOnlyMediaQuery()}) {
                      max-width: 95% !important;
                    }
                  }

                  .footer-main .col-lg-2 {
                    //width: 20%;
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
                Spectra have more than 20 years history, we are not only dedicated to provide standard power generators
                sets and customized generator sets, but also integrated system solutions and project service in
                compliance with clients' demands
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

            <div className={'row justify-content-center text-center justify-content-md-between'}>
                <div className={'col-12 col-md-4 mb-6 mb-md-0'}>
                    <a href="tel:+94112745745">
                        <span className={'me-2'}>
                            <img src="/icons/phone.png" alt="phone"
                                 width={20} height={20}/>
                        </span><span>+94 11 2 745 745</span>
                    </a> / <a href="tel:+94777420728">
                    <span>+94 777 420 728</span>
                </a>
                </div>
                <div className={'col-12 col-md-4 mb-6 mb-md-0'}>
                    <span className={'me-2'}>
                            <img src="/icons/envelope.png" alt="phone"
                                 width={20} height={20}/>
                        </span><a href="mailto:powermart@sisara.lk">
                    <span>powermart@sisara.lk</span>
                </a>
                </div>

                <div className={'col-12 col-md-4 mb-6 mb-md-0'}>
                    <span className={'me-2'}>
                            <img className={'mb-1'} src="/icons/tele.png" alt="phone"
                                 width={20} height={20}/>
                        </span>
                    <a href="tel:+94112745746">
                        <span>+94 11 2 745 746</span>
                    </a>
                </div>
            </div>

            <style jsx>
                {`
                  .links {
                    max-width: 90%;
                    margin: 0 auto;
                    padding-top: 20px;
                    font-size: ${base(1.3)}px;
                  }
                `}
            </style>
        </div>
    );
}

