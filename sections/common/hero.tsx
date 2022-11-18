import {DefaultSection} from '../../layouts/section-layouts';
import {getMobileOrTabletOnlyMediaQuery} from '../../styles/breakpoints';
import CompHeight from '../../lib/comp-height';
import {useState} from 'react';


export default function Hero() {

    const [height, setHeight] = useState(50);

    return (
        <>
            <DefaultSection name={'hero'} sectionBackground={'/hero/hero1.jpg'} padding={'none'}>
                <div className={'hero-content'}>
                    <div className={'title-card-wrapper'}>
                        <CompHeight onHeightReady={(height) => {
                            setHeight(height);
                        }}>
                            <TitleCard title={'The best way to learn'} subtitle={'Learn from the best'}/>
                        </CompHeight>
                    </div>
                </div>
            </DefaultSection>

            <div style={{
                height: height/4,
            }}/>

            <style jsx>
                {`
                      .hero-content {
                        min-height: 400px;
                        display: flex;
                        align-items: center;
                      }

                      @media (${getMobileOrTabletOnlyMediaQuery()}) {
                        .hero-content {
                          min-height: 300px;
                          justify-content: center;
                          align-items: end;
                        }

                        .hero-content .title-card-wrapper {
                          margin-bottom: -${height / 4}px;
                          position: absolute;
                        }
                      }
                    `}
            </style>
        </>
    );
}

function TitleCard({title, subtitle, topTitle}: {
    title: string,
    subtitle?: string,
    topTitle?: string,
}) {
    return (
        <div className={'title-card'}>
            {topTitle && <h5 className={'top-title'}>{topTitle}</h5>}
            <h2 className={'title'}>{title}</h2>
            {
                subtitle &&
                <h5 className={'subtitle'}>{subtitle}</h5>
            }

            <style jsx>
                {`
                  .title-card {
                    color: white;
                    padding: 20px;
                    max-width: 500px;
                    background-image: linear-gradient(0deg, #323030, #111 29%);
                    z-index: 10;
                  }
                `}
            </style>
        </div>
    );
}
