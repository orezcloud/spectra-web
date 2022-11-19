import {ReactNode} from 'react';
import {
    getDesktopMediaQuery,
    getLaptopMediaQuery,
    getMobileOnlyMediaQuery, getMobileOrTabletOnlyMediaQuery,
    getTabletMediaQuery,
} from '../styles/breakpoints';


export default function SectionCard({children, minusMargin}: {children: ReactNode, minusMargin?: boolean}) {
    return (
        <div className={'section-card'}>
            <div className={'content-container'}>
                <div className="content-wrapper">
                    {children}
                </div>
            </div>
            <style jsx>
                {`
                  .section-card {
                    background-color: #fff;
                    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.5);
                    //${minusMargin ? 'margin-top: -120px;' : ''}
                    ${minusMargin ? 'margin-top: -60px;' : ''}
                  }

                  @media (${getMobileOrTabletOnlyMediaQuery()}) {
                    .section-card {
                      box-shadow: none;
                      margin-top: 0px;
                    }
                  }

                  .content-container {
                    background-color: #fff;
                    margin-bottom: 32px;
                    padding: 48px 17px 80px;
                  }

                  @media (${getTabletMediaQuery()}) {
                    .content-container {
                      padding: 72px 50px 152px;
                      margin-bottom: 48px;

                    }

                    .content-wrapper {
                      max-width: 83%;
                      margin-left: 8.5%;
                    }
                  }

                  @media (${getLaptopMediaQuery()}) {
                    .content-container {
                      padding-top: 152px;
                    }
                  }

                  @media (${getDesktopMediaQuery()}) {
                    .content-container {
                      padding-left: 100px;
                      padding-right: 100px;
                    }
                  }

                `}
            </style>
        </div>
    );
}
