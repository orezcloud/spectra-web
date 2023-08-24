import {useEffect, useState} from 'react';
import {preloadImage, sleep} from '../../lib/utils';
import {proxy, useSnapshot} from 'valtio';
import {AnimatedText} from '../comps/animated-string';


const dd = [
    {
        title: 'Excellence Power Solutions',
        color: 'white',
        subtitle: 'Powering the future of healthcare',
    },
    {
        title: 'No Powercut at Home',
        color: 'white',
        subtitle: 'Powering the future of construction',
    },
    {
        title: 'Capacity Does Not Interfere with Your Enjoyment',
        color: 'white',
        subtitle: 'Powering the future of mining',
    },
    {
        title: 'No More Worries About Power',
        color: 'white',
        subtitle: 'Powering the future of mining',
    },
    {
        title: 'Installation & Services',
        color: 'white',
        subtitle: 'Powering the future of mining',
    },
];

export default function MiniSlider({size, imageUrls}: {size?: 'full', imageUrls: string[]}) {
    const {heroImage, currentIndex} = useSnapshot(state);
    const [text, setText] = useState('');
    const [color, setColor] = useState('white');
    const [subText, setSubText] = useState('');

    useEffect(() => {

        if (state.currentIndex === 0) {
            setTimeout(() => {
                if (state.images && state.images.length > 0) {
                    preloadImage(imageUrls[1]);
                }
            }, 800);
        } else {
            if (currentIndex < imageUrls.length - 1) {
                preloadImage(imageUrls[state.currentIndex + 1]);
            }
        }

    }, [currentIndex, heroImage]);

    const init = async () => {

        if (initialized) {
            return;
        }
        initialized = true;

        // set images
        let images = imageUrls.map((image, index) => ({
            url: image,
            id: String(index + 1),
        }));

        state.images = images;
        state.heroImage = [{
            url: images[0].url,
            className: ' zoom-in',
            id: images[0].id,
        }];
        state.currentIndex = 0;

        setText(dd[state.currentIndex].title);
        setSubText(dd[state.currentIndex].subtitle);

        while (true) {
            await sleep(3200);
            if (startLoop) {
                await loopFunc();
            }
            if (!startLoop) {
                initialized = false;
                break;
            }
        }
    };

    const loopFunc = async () => {
        // push next id image
        if (state.currentIndex < state.images.length - 1) {
            state.heroImage = [
                ...state.heroImage,
                {
                    url: state.images[state.currentIndex + 1].url,
                    className: '',
                    id: state.images[state.currentIndex + 1].id,
                }];
            state.currentIndex = (state.currentIndex + 1);
        } else {
            state.heroImage = [
                ...state.heroImage,
                {
                    url: state.images[0].url,
                    className: '',
                    id: state.images[0].id,
                }];
            state.currentIndex = 0;
        }

        await sleep(1300);

        state.heroImage = state.heroImage.map((image, index) => {
            // add class leave to first image
            if (index === 0) {
                return {
                    ...image,
                    className: image.className + ' leave',
                };
            }
            // add class zoom-in to second image
            if (index === 1) {
                return {
                    ...image,
                    className: image.className + ' zoom-in',
                };
            }
            return image;
        });

        setText(dd[state.currentIndex].title);
        setSubText(dd[state.currentIndex].subtitle);
        setColor(dd[state.currentIndex].color);

        await sleep(1800);

        // remove first image
        state.heroImage = state.heroImage.filter((image, index) => index !== 0);
    };

    useEffect(() => {
        init();
        startLoop++;
        return () => {
            startLoop--;
        };
    }, []);


    return (
        <div style={{
            position: 'relative',
            width: size === 'full' ? '100vw' : '100%',
            height: size === 'full' ? '100vh' : '100%',
            maxWidth: '100%',
            overflow: 'hidden',
        }}>

            {
                text &&
                <div className={'anim-text'} style={{
                    position: 'absolute',
                    zIndex: 100,
                    color: color || 'white',
                }}>
                    <div className={'text'}>
                        <AnimatedText text={text}/>
                    </div>
                    <div className="bg"/>
                    <div className="bg2"/>
                </div>
            }
            {
                heroImage.map((image) => {
                    return (
                        <img
                            key={image.id}
                            src={image.url}
                            className={'slider' + image.className}
                        />
                    );
                })
            }

            <style jsx>
                {`
                  .anim-text {
                    bottom: 45px;
                    left: 55px;
                    font-size: 1.9rem;
                    font-family: Spectral, Noto Sans, serif;
                    font-weight: 400;
                    text-transform: uppercase;
                    :global(.animated-string) {
                      text-shadow: -1px 1px 1px rgba(7, 7, 7, 0.36);
                    }
                    //.text {
                    //  z-index: 100;
                    //}
                    //.bg {
                    //  z-index: 99;
                    //  position: absolute;
                    //  top: -5%;
                    //  left: -1%;
                    //  width: 103%;
                    //  height: 110%;
                    //  -webkit-backdrop-filter: blur(10px);
                    //  backdrop-filter: blur(10px);
                    //  -webkit-text-fill-color: transparent;
                    //  -webkit-background-clip: text;
                    //  background-clip: text;
                    //  -webkit-box-decoration-break: clone;
                    //  box-decoration-break: clone;
                    //}
                    //.bg2 {
                    //    z-index: 98;
                    //    position: absolute;
                    //    top: -5%;
                    //    left: -1%;
                    //    width: 103%;
                    //    height: 110%;
                    //    background-color:  #00000033;
                    //}
                    @media (max-width: 768px) {
                      font-size: 1.5rem;
                      left: 30px;
                    }
                    @media (max-width: 480px) {
                      font-size: 1.2rem;
                      left: 25px;
                    }
                  }
                  .preload {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 1%;
                    height: 1%;
                    opacity: 0;
                    z-index: -1;
                  }
                `}
            </style>

        </div>
    );
}

interface State {
    heroImage: {
        url: string
        className: string
        id: string
    }[],
    currentIndex: number,
    images: {
        url: string
        id: string
        text?: string
    }[],

}

const state = proxy<State>({
    heroImage: [],
    currentIndex: 0,
    images: [],
});

let startLoop = 0;
let initialized = false;