import {ReactNode} from 'react';


export default function ModalContainer({children, className}: {children: ReactNode,  className?: string}) {
    return (
        <div style={{
            width: '95%',
            margin: '0 auto',
        }} className={className}>
            {children}
        </div>
    );
}
