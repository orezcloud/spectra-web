
export default function UlList({list}: {list: string[]}) {
    return (
        <ul className={'js-anim u-fade u-short'}>
            {
                list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))
            }
        </ul>
    );
}

export function OlList({list}: {list: string[]}) {
    return (
        <ol className={'js-anim u-fade u-short'}>
            {
                list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))
            }
        </ol>
    );
}
