import {ReactNode} from 'react';
import {useIsTransIn, useIsTransOut} from '../state/global';


export default function Body({children}: {children: ReactNode}) {
    const isTransIn = useIsTransIn();
    const isTransOut = useIsTransOut();
    return (
        <div className={'body wrapper-main'
            // + (isTransIn ? ' trans-in' : '')
            // + (isTransOut ? ' trans-out' : '')
        }>
            {children}
        </div>
    );

}
