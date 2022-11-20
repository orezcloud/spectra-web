import {DefaultSection} from '../../layouts/section-layouts';
import {
    getLaptopOrDesktopMediaQuery,
    getMobileOrTabletOnlyMediaQuery,
    useIsMobileOrTablet,
} from '../../styles/breakpoints';
import CompHeight from '../../lib/comp-height';
import {useState} from 'react';
import TitleCard from './_title-card';


export interface HeroProps {
    title: string,
    subtitle?: string,
    topTitle?: string,
    image: string
}

export default function Hero({
                                 title,
                                 subtitle,
                                 topTitle,
                                 image,
                             }: HeroProps) {

    const [height, setHeight] = useState(50);
    const isMobileOrTablet = useIsMobileOrTablet();

    return (
        <>
            <DefaultSection name={'hero'} sectionBackground={image} padding={'none'}>
                <div className={'hero-content'}>
                    <div className={'title-card-wrapper'}>
                        <CompHeight onHeightReady={(height) => {
                            setHeight(height);
                        }}>
                            <TitleCard title={title} subtitle={subtitle} topTitle={topTitle}/>
                        </CompHeight>
                    </div>
                </div>
            </DefaultSection>

            {
                isMobileOrTablet &&
                <div style={{
                    height: height / 4,
                }}/>
            }

            <style jsx>
                {`
                  .hero-content {
                    min-height: 500px;
                    display: flex;
                    align-items: center;
                  }


                  @media (${getLaptopOrDesktopMediaQuery()}) {
                    .title-card-wrapper {
                      padding-left: 45px;
                    }
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

