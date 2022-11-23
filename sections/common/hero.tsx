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
            <DefaultSection name={'hero p-child__top js-anim'} padding={'none'}
                            TopElement={
                                <div className="image-wrapper">
                                    <img src={image} alt="hero image" className={'m-moveGallery'}/>
                                </div>
                            }
            >
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
                  :global(.hero) {
                    position: relative;
                  }

                  :global(.image-wrapper) {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                  }

                  :global(.image-wrapper img) {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                  }

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

                    .title-card-wrapper {
                      margin-bottom: -${height / 4}px;
                      padding: 0;
                      position: absolute;
                      max-width: 95%;
                      min-width: unset;
                      overflow: hidden;
                    }

                  }
                `}
            </style>
        </>
    );
}

