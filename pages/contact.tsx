import DefaultPostLayout from '../layouts/default-post-layout';
import {ContactFormSimple} from '../sections/contact/contact-form';
import {urls} from '../lib/consts';
import AnimLink from '../lib/anim-link';


export default function ContactMail() {


    return (
        <DefaultPostLayout
            name={'contact'}
            heroProps={{
                title: 'Contact',
                subtitle: 'Get in touch with us',
                image: '/images/hero/hero-3.jpg',
            }}
            Elements={[
                () => (
                    <div>
                        <title>
                            Contact - Spectra Power Solutions
                        </title>
                        <div className="flex-cont d-flex justify-content-between">
                            <div className="btn-cont">
                                <AnimLink className={'mt-8'} href={urls.contactMail}>
                                    <a>
                                    <span>
                                        General Enquire
                                    </span>
                                    </a>
                                </AnimLink>
                            </div>

                            <div className="btn-cont">
                                <AnimLink className={'mt-8'} href={urls.salesEnquire}>
                                    <a>
                                        <span>
                                            Sales Enquire
                                        </span>
                                    </a>
                                </AnimLink>
                            </div>
                        </div>
                        <style jsx>{`
                          a {
                            line-height: 71px;
                            height: 80px;
                            width: 100%;
                            -webkit-appearance: none;
                            -moz-appearance: none;
                            appearance: none;
                            border: 0;
                            font-size: .9375rem;
                            font-weight: 700;
                            cursor: pointer;
                            display: flex;
                            font-family: Lato, Noto Sans, Yu Gothic, YuGothic, Meiryo, sans-serif;
                            color: #fff;
                            background-color: #111;
                            align-items: center;
                            padding-left: 20px;
                            letter-spacing: .05em;
                            transition: all .5s ease-in-out;
                            border-radius: 2px;

                            span {
                              min-width: 100px;
                              text-align: left;
                            }


                            span::after {
                              content: "";
                              display: block;
                              position: absolute;
                              top: 50%;
                              margin-top: -3px;
                              right: -34px;
                              width: 26px;
                              height: 6px;
                              background-image: url(/icons/icon-arrow-white@2x.png);
                              background-position: 50%;
                              background-size: contain;
                              background-repeat: no-repeat;
                              transition: transform .5s ease-in-out;
                            }

                            &:hover {
                              opacity: .5;
                              box-shadow: 0 1px 8px rgb(94 99 97 / 50%);

                              span::after {
                                transform: translateX(20px);
                              }
                            }
                          }

                          .flex-cont {
                            max-width: 900px;
                            margin: 0 auto;
                          }

                          .box {
                            border: 1px solid #000;
                          }

                          .btn-cont {
                            width: 45%
                          }
                        `}</style>
                    </div>
                ),
            ]}
        />
    );
}
