
export default function UlList({list}: {list: string[]}) {
    return (
        <ul>
            {
                list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))
            }
        </ul>
    );
}
