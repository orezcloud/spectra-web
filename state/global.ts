import {proxy, useSnapshot} from 'valtio';


interface Global {
    sticked: boolean;
    menuOpen: boolean;
    transOut: boolean;
    transIn: boolean;
    transZero: boolean;
    bgMenuActive: boolean;
    transMenu: boolean;
}

export const globalState = proxy<Global>({
    sticked: false,
    menuOpen: false,
    transOut: false,
    transIn: false,
    transZero: false,
    bgMenuActive: false,
    transMenu: false,
});

export function useIsMenuOpen() {
    const state = useSnapshot(globalState);
    return state.menuOpen;
}

export function useIsSticked() {
    const state = useSnapshot(globalState);
    return state.sticked;
}

export function useIsTransOut() {
    const state = useSnapshot(globalState);
    return state.transOut;
}

export function useIsTransIn() {
    const state = useSnapshot(globalState);
    return state.transIn;
}

export function useIsTransZero() {
    const state = useSnapshot(globalState);
    return state.transZero;
}

export function useIsBgMenuActive() {
    const state = useSnapshot(globalState);
    return state.bgMenuActive;
}

export function useGlobalState() {
    return useSnapshot(globalState);
}

export const globalActions = {
    toggleMenu: () => {
        globalState.menuOpen = !globalState.menuOpen;
    },
    transOut: () => {
        globalState.transOut = true;
    },
    transIn: () => {
        globalState.transIn = true;
    },
    transZero: () => {
        globalState.transZero = true;
    },
    resetTransOut: () => {
        globalState.transOut = false;
    },
    resetTransIn: () => {
        globalState.transIn = false;
    },
    resetTransZero: () => {
        globalState.transZero = false;
    },
};
