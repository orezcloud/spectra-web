import {proxy, useSnapshot} from 'valtio';


interface Global {
    sticked: boolean;
    menuOpen: boolean;
}

export const globalState = proxy<Global>({
    sticked: false,
    menuOpen: false,
})

export function useIsMenuOpen() {
    const state = useSnapshot(globalState);
    return state.menuOpen;
}

export function useIsSticked() {
    const state = useSnapshot(globalState);
    return state.sticked;
}

export const globalActions = {
    toggleMenu: () => {
        globalState.menuOpen = !globalState.menuOpen;
    }
}
