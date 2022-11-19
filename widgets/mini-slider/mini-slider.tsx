import {useEffect} from 'react';
import {preloadImage, sleep} from '../../lib/utils';
import {proxy, useSnapshot} from 'valtio';


export default function MiniSlider({size, imageUrls}: {size?: 'full', imageUrls: string[]}) {
    const {heroImage} = useSnapshot(state);

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

        // preload images
        imageUrls.forEach(async (url, index) => {
            if (index === 0) {
                return;
            }
            await preloadImage(url);
        });

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
    }[]
}

const state = proxy<State>({
    heroImage: [],
    currentIndex: 0,
    images: [],
});

let startLoop = 0;
let initialized = false;
