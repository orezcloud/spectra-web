export function FooterBottomDesktop() {
    return (
        <div className={'footer-bottom'}>
            <div className={'footer-container'}>
                <div className={'mid-links d-inline-flex justify-content-center text-center position-absolute mx-auto'}
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
                            Copyright © 2021 SISARA. All rights reserved.
                        </span>
                    </div>
                    <div className={'col-auto'}>
                        <a href={'#'} className={'ms-6'}>
                            <img width={25} src={'/icons/facebook.svg'} alt={'facebook'}/>
                        </a>
                        <a href={'#'} className={'ms-6'}>
                            <img width={25} src={'/icons/instagram.svg'} alt={'facebook'}/>
                        </a>
                        <a href={'#'} className={'ms-6'}>
                            <img width={25} src={'/icons/twitter.svg'} alt={'facebook'}/>
                        </a>
                    </div>
                </div>
            </div>
            <style jsx>
                {`
                  .footer-container {
                    max-width: 95%;
                    margin: 0 auto;
                  }

                  .mid-links {
                    left: 0;
                    right: 0;
                    margin-left: auto;
                    margin-right: auto;
                    max-width: 50%;
                    //width: 100px;
                  }

                  .footer-bottom {
                    opacity: 0.7;
                    font-size: 14px;
                    //max-width: 80%;
                    margin: 20px auto 0;
                    padding-top: 20px;
                    border-top: 1px solid rgba(75, 75, 75, 0.74);
                  }
                `}
            </style>
        </div>
    );
}

export function FooterBottomMobile() {
    return (
        <div className={'footer-bottom'}>


            <div className={'text-center mt-4 mb-5 d-flex justify-content-center'}
                 style={{zIndex: 3}}>
                <div className={'col-auto mx-5'}>
                    <a href={'#'}>Privacy Policy</a>
                </div>
                <div className={'col-auto mx-5'}>
                    <a href={'#'}>Terms & Conditions</a>
                </div>
            </div>


            <div className={'text-center mb-4'}>
                <a href={'#'} className={'ms-6'}>
                    <img width={25} src={'/icons/facebook.svg'} alt={'facebook'}/>
                </a>
                <a href={'#'} className={'ms-6'}>
                    <img width={25} src={'/icons/instagram.svg'} alt={'facebook'}/>
                </a>
                <a href={'#'} className={'ms-6'}>
                    <img width={25} src={'/icons/twitter.svg'} alt={'facebook'}/>
                </a>
            </div>

            <div className={'text-center copy'}>
                <span>Copyright © 2021 SISARA. All rights reserved.</span>
            </div>

            <style jsx>
                {`
                  .mid-links {
                    left: 0;
                    right: 0;
                    margin-left: auto;
                    margin-right: auto;
                    max-width: 50%;
                    //width: 100px;
                  }

                  .copy {
                    font-size: 12px;
                    font-weight: 400;
                  }

                  .footer-bottom {
                    font-weight: 400;
                    opacity: 0.7;
                    font-size: 14px;
                    //max-width: 80%;
                    margin: 15px auto 0;
                    padding-top: 20px;
                    border-top: 1px solid rgba(75, 75, 75, 0.74);
                  }
                `}
            </style>
        </div>
    );
}

