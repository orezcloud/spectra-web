import {ReactNode} from 'react';


export default function Body({children}: {children: ReactNode}) {
    return (
        <div className={'body wrapper-main'}>
            {children}
        </div>
    );

}
