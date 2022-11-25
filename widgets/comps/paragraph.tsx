export function P({children}: {children: string}) {
    return (
        <p className={'js-anim u-fade u-short'}>
            {children}
        </p>
    );
}
