import zIndex from '../../styles/zIndex';
import {getLaptopOnlyMediaQuery, getMobileOrTabletOnlyMediaQuery} from '../../styles/breakpoints';


export default function TitleCard({title, subtitle, topTitle}: {
    title: string,
    subtitle?: string,
    topTitle?: string,
}) {
    return (
        <div className={'title-card js-anim u-fade'}>
            {topTitle && <h5 className={'top-title'}>{topTitle}</h5>}
            <h1 className={'title'}>{title}</h1>
            {
                subtitle &&
                <h3 className={'subtitle'}>{subtitle}</h3>
            }

            <style jsx>
                {`
                  .title-card {
                    color: white;
                    padding: 32px 45px;
                    max-width: 800px;
                    min-width: 400px;
                    background-image: linear-gradient(0deg, #323030, #111 29%);
                    //background: linear-gradient(180deg, #0E0E10 0%, #252536 100%);
                    z-index: ${zIndex.page};

                  }


                  @media (${getMobileOrTabletOnlyMediaQuery()}) {
                    .title-card {
                      min-width: unset;
                      padding: 15px 25px;
                    }
                  }

                  h1, h3, h5 {
                    color: white;
                    text-transform: uppercase;
                    opacity: .9;
                    margin: 0;
                    font-family: Spectral, Noto Sans, serif;
                    font-weight: 400;
                  }


                  .top-title {
                    font-size: 13px;
                  }

                  .title {
                    font-size: 44px;
                    margin-bottom: 4px;

                    @media (${getLaptopOnlyMediaQuery()}) {
                      font-size: 36px;
                    }
                    @media (${getMobileOrTabletOnlyMediaQuery()}) {
                      font-size: 28px;
                    }
                  }

                  .subtitle {
                    font-size: 15px;
                    font-family: 'Noto Serif', serif;
                    letter-spacing: .3px;
                  }

                  @media (${getMobileOrTabletOnlyMediaQuery()}) {
                    .title {
                      line-height: 1;
                      margin-bottom: 15px;
                    }

                    .subtitle, .top-title {
                      line-height: 1.4;
                    }
                  }

                `}
            </style>
        </div>
    );
}
