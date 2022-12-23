import {ReactNode} from 'react';


export function P({children, className, style}: {children: ReactNode, className?: string, style?: any}) {
    return (
        <p className={'js-anim u-fade u-short'
            + (className ? ' ' + className : '')}

           style={style}
        >
            {children}
        </p>
    );
}

export function H1({children}: {children: string}) {
    return (
        <h1 className={'js-anim u-fade u-short'}>
            {children}
        </h1>
    );
}

export function H2({children, style}: {children: ReactNode,  style?: any}) {
    return (
        <h2 className={'js-anim u-fade u-short'}
            style={style}
        >
            {children}
        </h2>
    );
}

export function H3({children}: {children: string}) {
    return (
        <h3 className={'js-anim u-fade u-short'}>
            {children}
        </h3>
    );
}

export function H4({children}: {children: string}) {
    return (
        <h4 className={'js-anim u-fade u-short'}>
            {children}
        </h4>
    );
}

export function H5({children}: {children: string}) {
    return (
        <h5 className={'js-anim u-fade u-short'}>
            {children}
        </h5>
    );
}

export function H6({children}: {children: string}) {
    return (
        <h6 className={'js-anim u-fade u-short'}>
            {children}
        </h6>
    );
}
