import {DefaultSection} from '../../layouts/section-layouts';
import {useIsMobileOrTablet} from '../../styles/breakpoints';
import {ReactNode} from 'react';
import Link from 'next/link';
import {globalActions} from '../../state/global';
import zIndex from '../../styles/zIndex';
import {transparentHeaderMenu} from '../../lib/consts';


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

            <style jsx>
                {`
                  :global(.header-transparent) {
                    z-index: ${zIndex.header};
                  }
                `}
            </style>
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

function MenuItem({
                      href,
                      children,
                      className,
                      onClick,
                  }: {href?: string, children: ReactNode, className?: string, onClick?: () => void}) {

    return (
        <>
            {
                !href ?
                    <li className={'menu-item' + (className ? ' ' + className : '')}
                        onClick={onClick}>{children}</li> :
                    <li className={'menu-item' + (className ? ' ' + className : '')}>
                        <Link href={href}>{children}</Link>
                    </li>
            }

            <style jsx>
                {`
                  .menu-item :global(*) {
                    color: #fff;
                    text-transform: uppercase;
                    font-weight:  300;
                    cursor: pointer;
                  }
                `}
            </style>
        </>
    );
}


function Menu() {
    return (
        <div className="menu nobullet">
            <ul>
                {
                    transparentHeaderMenu.map((item, index) => (
                        <MenuItem href={item.url} key={index}>
                            {item.name}
                        </MenuItem>
                    ))
                }
                <MenuItem href={'#'}>QUICK LINKS</MenuItem>
                {/*<MenuItem className={'icon'}>*/}
                {/*    <img className={'svg-img'} src="/icons/search-white.svg" alt="search"/>*/}
                {/*</MenuItem>*/}
                <MenuItem className={'icon'} onClick={() => globalActions.toggleMenu()}>
                    <span className={'me-4'}>MENU</span>
                    <img className={'svg-img'} src="/icons/menu-white.svg" alt="menu" style={{
                        transform: 'scale(1.22)',
                    }}/>
                </MenuItem>
            </ul>

        </div>
    );
}
