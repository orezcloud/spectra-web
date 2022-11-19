import {DefaultSection} from '../../layouts/section-layouts';
import {useIsMobileOrTablet} from '../../styles/breakpoints';
import {useSnapshot} from 'valtio';
import {globalState} from '../../state/global';
import {ReactNode} from 'react';
import Link from 'next/link';
import zIndex from '../../styles/zIndex';
import {defaultHeaderMenu} from '../../lib/consts';


export function HeaderSection() {

    const isMobileOrTablet = useIsMobileOrTablet();
    const {sticked} = useSnapshot(globalState);

    if (isMobileOrTablet) {
        return (
            <DefaultSection name={
                'header header-static'
                + (sticked ? ' sticked' : '')
            } padding={'none'}>
                <div className="row m-0">
                    <div className="col-auto">
                        <img className={'svg-img'} src="/icons/menu-black.svg" alt="menu"/>
                    </div>
                    <div className="col text-center">
                        <Logo/>
                    </div>
                    <div className="col-auto">
                        <img className={'svg-img'} src="/icons/search-black.svg" alt="search"/>
                    </div>
                </div>
            </DefaultSection>
        );
    }

    return (
        <DefaultSection name={
            'header header-static'
            + (sticked ? ' sticked' : '')
        } padding={'none'}>
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
                <img src="/logo-black.png" alt="logo"/>
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
                {
                    defaultHeaderMenu.map((item, index) => {
                        return (
                            <MenuItem key={index} href={item.url}>{item.name}</MenuItem>
                        );
                    })
                }
                <MenuItem className={'icon'}>
                    <img className={'svg-img'} src="/icons/search-black.svg" alt="search"/>
                </MenuItem>
                <MenuItem className={'icon'}>
                    <img className={'svg-img'} src="/icons/menu-black.svg" alt="menu"/>
                </MenuItem>
            </ul>

            <style jsx>
                {`
                  .menu {
                    color: #fff;
                  }

                  .menu :global(.menu-item) {
                    text-transform: uppercase;
                  }
                `}
            </style>
        </div>
    );
}

export default function Header() {
    return (
        <>
            <div className="header-wrap wrap-top">
                <HeaderSection/>
            </div>
            <div className="header-wrap wrap">
                <HeaderSection/>
            </div>

            <style jsx>
                {`
                  .wrap-top {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: ${zIndex.header};
                    border-bottom: #00000026 0.6px solid;
                  }

                  .wrap {
                    position: relative;
                    z-index: ${zIndex.page};
                    opacity: 0;
                  }
                `}
            </style>
        </>
    );
}
