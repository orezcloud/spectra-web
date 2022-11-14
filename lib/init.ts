import {globalState} from '../state/global';
import {isServer} from './consts';


function initScrollState() {
    // on scroll
    if (!isServer) {
        window.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY;
            globalState.sticked = scrollPosition > 20;
        });
    }
}

export default function init() {
    initScrollState();
}
