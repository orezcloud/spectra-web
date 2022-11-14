import {DefaultSection} from '../../layouts/section-layouts';
import {useIsMobileOrTablet} from '../../styles/breakpoints';
import {ReactNode} from 'react';
import Link from 'next/link';


export default function HeaderTransparent() {

    const isMobileOrTablet = useIsMobileOrTablet();

    if (isMobileOrTablet) {
        return (
            <DefaultSection name={'header header-transparent'} padding={'none'}>
                <div className="row m-0">
                    <div className="col-auto">
                        <img className={'svg-img'} src="/icons/menu-white.svg" alt="menu"/>
                    </div>
                    <div className="col text-center">
                        <Logo/>
                    </div>
                    <div className="col-auto">
                        <img className={'svg-img'} src="/icons/search-white.svg" alt="search"/>
                    </div>
                </div>
            </DefaultSection>
        );
    }

    return (
        <DefaultSection name={'header header-transparent'} padding={'none'}>
            <div className="row">
                <div className="col-auto">
                    <Logo/>
                </div>
                <div className="col-auto ms-auto">
                    <Menu/>
                </div>
            </div>
        </DefaultSection>
    );
}

function Logo() {
    return (
        <div className="logo">
            <Link href="/">
                <img src="/logo-white.png" alt="logo"/>
            </Link>
        </div>
    );
}

function MenuItem({href, children, className}: {href?: string, children: ReactNode, className?: string}) {

    if (!href) {
        return (
            <li className={'menu-item' + (className ? ' ' + className : '')}>
                {children}
            </li>
        );
    }

    return (
        <li className={'menu-item' + (className ? ' ' + className : '')}>
            <Link href={href}>{children}</Link>
        </li>
    );
}


function Menu() {
    return (
        <div className="menu nobullet">
            <ul>
                <MenuItem href={'#'}>EN</MenuItem>
                <MenuItem href={'/contact'}>CONTACT</MenuItem>
                <MenuItem href={'#'}>QUICK LINKS</MenuItem>
                {/*<MenuItem className={'icon'}>*/}
                {/*    <img className={'svg-img'} src="/icons/search-white.svg" alt="search"/>*/}
                {/*</MenuItem>*/}
                <MenuItem className={'icon'}>
                    <span className={'me-4'}>MENU</span>
                    <img className={'svg-img'} src="/icons/menu-white.svg" alt="menu" style={{
                        transform: 'scale(1.22)'
                    }} />
                </MenuItem>
            </ul>

            <style jsx>
                {`
                  .menu {
                    color: #fff;
                  }
                `}
            </style>
        </div>
    );
}
