import {proxy} from 'valtio';


interface Global {
    sticked: boolean;
}

export const globalState = proxy<Global>({
    sticked: false,
})

