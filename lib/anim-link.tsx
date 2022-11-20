import {ReactNode, MouseEvent} from 'react';
import {useRouter} from 'next/router';
import {sleep} from './utils';
import {globalActions} from '../state/global';


interface Props {
    children: ReactNode;
    href: string;
}

export default function AnimLink({children, href, ...props}: Props) {

    const router = useRouter();

    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
        (async () => {
            e.preventDefault();
            globalActions.transOut();
            await sleep(500);
            await router.push(href);
            globalActions.resetTrans();
            globalActions.transIn();
            await sleep(500);
            globalActions.resetTrans();
        })()
    }

    return (
        <a href={href} {...props} onClick={handleClick}>
            {
                typeof children === 'string' ? (
                    <a href={href} {...props} onClick={handleClick}>
                        {children}
                    </a>
                ) : (
                    children
                )
            }
        </a>
    );
}
