import {ReactNode} from 'react';


export default function AnimImageWrap({children}: {children: ReactNode}) {
    return (
        <div className={'an-img u-hoverImg js-anim u-clipAnimImg u-fade'}>
            {children}
        </div>
    )
}
