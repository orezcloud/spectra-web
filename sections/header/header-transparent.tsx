import {DefaultSection} from '../../layouts/section-layouts';
import {useIsMobileOrTablet} from '../../styles/breakpoints';
import {ReactNode} from 'react';
import Link from 'next/link';
import {globalActions, useGlobalState} from '../../state/global';
import zIndex from '../../styles/zIndex';
import {transparentHeaderMenu} from '../../lib/consts';
import AnimLink from '../../lib/anim-link';


export default function HeaderTransparent({showMenu = true}: { showMenu?: boolean }) {

    const isMobileOrTablet = useIsMobileOrTablet('desktop');
    const {transMenu} =  useGlobalState();

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

                <style jsx>
                    {`
                  :global(.header-transparent) {
                    z-index: ${zIndex.header + 1};
                    opacity: ${ !transMenu ? 0 : showMenu ? 1 : 0};
                    transition: ${ !transMenu ? 'opacity .4s' : 'opacity 1s'};
                  }
                `}
                </style>
            </DefaultSection>
        );
    }

    return (
        <DefaultSection name={'header header-transparent'} padding={'none'} >
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
                    z-index: ${zIndex.header + 1};
                    opacity: ${ !transMenu ? 0 : showMenu ? 1 : 0};
                    transition: ${ !transMenu ? 'opacity .4s' : 'opacity 1s'};
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
                        <AnimLink href={href}>{children}</AnimLink>
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
