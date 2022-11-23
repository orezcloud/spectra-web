import {DefaultSection} from '../../layouts/section-layouts';
import {useIsMobileOrTablet} from '../../styles/breakpoints';
import {base} from '../../styles/consts';
import {footerLinks} from '../../lib/consts';
import {FooterBottomDesktop, FooterBottomMobile} from './footer-bottom';
import AnimLink from '../../lib/anim-link';


export default function Footer() {
    const isMobileOrTablet = useIsMobileOrTablet();

    return (
        <DefaultSection name={'footer'} padding={'none'}>
            <div className="footer-main nobullet overflow-hidden mx-auto">
                <div className="row justify-content-between">
                    {
                        footerLinks.map((link, index) => (
                            <div className="col-lg-auto col-md-6" key={index}>
                                <div className="footer-widget">
                                    <h3 className="footer-title">{link.title}</h3>
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
                    overflow: hidden;
                    //max-width: 100%;
                  }

                  :global(.footer a), :global(.footer p), :global(.footer h3) {
                    color: #fff;
                  }

                  .footer-main {
                    max-width: 90%;
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
                    font-size: ${base(1.3)}px;
                  }
                `}
            </style>
        </div>
    );
}

