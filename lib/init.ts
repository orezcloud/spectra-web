import {globalState} from '../state/global';
import {isServer} from './consts';
import {preloadImage, sleep} from './utils';


function initScrollState() {
    // on scroll
    if (!isServer) {
        window.addEventListener('scroll', () => {
            if (!globalState.animating) {
                const scrollPosition = window.scrollY;
                globalState.sticked = scrollPosition > 20;
            }
        });
    }
}

export default function init() {
    initScrollState();
    if (isServer) return;
    preloadImages();
}

const loadImages = [
    '/images/hero/hero-1.jpg',
    '/images/hero/hero-2.jpg',
    '/images/hero/hero-3.jpg',
    '/images/hero/hero-4.jpg',
    '/images/hero/hero-5.jpg',
    '/images/hero/hero-6.jpg',
    '/bg/gas-generator-background.jpg',
    '/bg/distribution solutions background.jpg',
    '/bg/heading-prime-power.jpg',
    '/bg/hybrid-generator-background.jpg',
    '/bg/light-tower-generator-background-2.jpg',
    '/bg/marine-generator-background-2.jpg',
    '/bg/portable-generator-background.jpg',
];

async function preloadImages() {
    for (let i = 0; i < loadImages.length; i++) {
        await preloadImage(loadImages[i]);
        await sleep(400);
    }
}
