import {ReactNode} from 'react';
import AnimLink from '../../lib/anim-link';


export default function MenuItem({
                                     href,
                                     children,
                                     className,
                                     onClick,
                                 }: {href?: string, children: ReactNode, className?: string, onClick?: () => void}) {

    if (!href) {
        return (
            <li className={'menu-item' + (className ? ' ' + className : '')} onClick={onClick}>
                {children}
                <style jsx>{`
                  .menu-item {
                    cursor: pointer;
                    font-weight: 400;
                  }
                `}</style>
            </li>
        );
    }

    return (
        <li className={'menu-item' + (className ? ' ' + className : '')}>
            <AnimLink href={href}>{children}</AnimLink>
            <style jsx>{`
              .menu-item {
                cursor: pointer;
                font-weight: 400;
              }
            `}</style>
        </li>
    );
}
