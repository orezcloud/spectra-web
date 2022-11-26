import {ReactNode} from 'react';
import {
    getDesktopMediaQuery,
    getLaptopMediaQuery,
    getMobileOrTabletOnlyMediaQuery,
    getTabletMediaQuery,
} from '../styles/breakpoints';


export default function SectionCard({children, minusMargin}: {children: ReactNode, minusMargin?: boolean}) {
    return (
        <div className={'section-card u-fade js-anim'}>
            <div className={'content-container'}>
                <div className="content-wrapper">
                    {children}
                </div>
            </div>
            <style jsx>
                {`
                  .section-card {
                    background-color: #fff;
                    margin-top: ${minusMargin ? '-60px;' : 'inherit'};
                    position: relative;

                    @media (${getMobileOrTabletOnlyMediaQuery()}) {
                      box-shadow: none;
                      margin-top: 0px;
                    }
                  }


                  .content-container {
                    background-color: #fff;
                    margin-bottom: 32px;
                    padding: 48px 17px 80px;

                    @media (${getTabletMediaQuery()}) {
                      padding: 72px 50px 152px;
                      margin-bottom: 48px;
                    }

                    @media (${getLaptopMediaQuery()}) {
                      padding-top: 115px;
                      padding-left: 20px;
                      padding-right: 20px;
                    }

                    @media (${getDesktopMediaQuery()}) {
                      padding-left: 100px;
                      padding-right: 100px;
                    }
                  }

                  @media (${getTabletMediaQuery()}) {
                    .content-wrapper {
                      max-width: 83%;
                      margin-left: 8.5%;
                    }
                  }
                `}
            </style>
        </div>
    );
}
