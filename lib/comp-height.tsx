import {ReactNode, useEffect, useRef, useState} from 'react';


export default function CompHeight({children, onHeightReady}: {children: ReactNode, onHeightReady: (height: number) => void}) {
    const ref = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (ref.current) {
            setHeight(ref.current.offsetHeight + ref.current.clientHeight);
        }
    }, [ref.current]);

    useEffect(() => {
        if (height > 0) {
            onHeightReady(height);
        }
    }, [height]);

    return (
        <div ref={ref}>
            {children}
        </div>
    );
}
