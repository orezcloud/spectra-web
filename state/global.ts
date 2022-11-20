import {proxy, useSnapshot} from 'valtio';


interface Global {
    sticked: boolean;
    menuOpen: boolean;
    transOut: boolean;
    transIn: boolean;
}

export const globalState = proxy<Global>({
    sticked: false,
    menuOpen: false,
    transOut: false,
    transIn: false,
})

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
    resetTrans: () => {
        globalState.transOut = false;
        globalState.transIn = false;
    }
}
