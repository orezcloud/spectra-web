import {DefaultSection} from '../../layouts/section-layouts';
import {useIsMobileOrTablet} from '../../styles/breakpoints';
import {ReactNode} from 'react';
import Link from 'next/link';
import {globalActions, useGlobalState} from '../../state/global';
import zIndex from '../../styles/zIndex';
import {defaultHeaderMenu} from '../../lib/consts';
import AnimLink from '../../lib/anim-link';


export default function HeaderTransparent({showMenu = true}: {showMenu?: boolean}) {

    const isMobileOrTablet = useIsMobileOrTablet('desktop');
    const {transMenu, sticked} = useGlobalState();

    if (isMobileOrTablet) {
        return (
            <DefaultSection name={
                'header header-transparent'
            } padding={'none'}>
                <div className="row m-0 px-4">
                    <div className="col">
                        <Logo/>
                    </div>
                    <div className="col-auto">
                        <HamMenu notext={true}/>
                    </div>
                </div>

                <style jsx>
                    {`
                      :global(.header-transparent) {
                        z-index: ${zIndex.header + 1};
                        opacity: ${!transMenu ? 0 : showMenu ? 1 : 0};
                        transition: ${!transMenu ? 'opacity .4s' : 'opacity 1s'};
                      }
                    `}
                </style>
            </DefaultSection>
        );
    }

    return (
        <DefaultSection name={
            'header header-transparent'
            + (sticked ? ' sticked' : '')
        } padding={'none'} width={'header'}>


            <div className="row">
                <div className="col-auto">
                    <Logo white={true}/>
                </div>
                <div className="col-auto ms-auto">
                    <Menu/>
                </div>
            </div>

            <style jsx>
                {`
                  :global(.header-transparent) {
                    z-index: ${zIndex.header + 1};
                    opacity: ${!transMenu ? 0 : showMenu ? 1 : 0};
                    transition: ${!transMenu ? 'opacity .4s' : 'opacity 1.7s'};

                    &::after {
                      content: '';
                      position: fixed;
                      z-index: -1;
                      top: 0;
                      left: 0;
                      width: 100%;
                      height: 100px;
                      background: linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0.4) 100%);
                      opacity: ${!transMenu ? 0 : showMenu ? 1 : 0};
                      transition: opacity .4s ease;
                    }

                  }

                  :global(.header-transparent.sticked::after) {
                    opacity: 0;
                  }
                `}
            </style>
        </DefaultSection>
    );
}

function Logo({white = false}: {white?: boolean}) {
    return (
        <div className="logo">
            <Link href="/">
                {
                    !white ?
                        <img src="/logo.png" alt="logo"/>:
                        <img src="/logo-white.png" alt="logo"/>
                }
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
                  .menu-item {
                    color: #fff;
                  }

                  .menu-item :global(*) {
                    color: #fff;
                    text-transform: uppercase;
                    font-weight: 400;
                    cursor: pointer;
                    font-family: Lato, sans-serif;

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
                    defaultHeaderMenu.map((item, index) => (
                        <MenuItem href={item.url} key={index}>
                            {item.name}
                        </MenuItem>
                    ))
                }
                {/*<HamMenu/>*/}
                {/*<MenuItem href={'#'}>QUICK LINKS</MenuItem>*/}
                {/*<MenuItem className={'icon'} onClick={() => globalActions.toggleMenu()}>*/}
                {/*    <span className={'me-4'}>MENU</span>*/}
                {/*    <img className={'svg-img'} src="/icons/menu-white.svg" alt="menu" style={{*/}
                {/*        transform: 'scale(1.22)',*/}
                {/*    }}/>*/}
                {/*</MenuItem>*/}
            </ul>

        </div>
    );
}

function HamMenu({notext = false}: {notext?: boolean}) {
    return (
        <MenuItem className={'icon'} onClick={() => globalActions.toggleMenu()}>
            {
                !notext &&
                <span className={'me-4'}>MENU</span>
            }
            <img className={'svg-img'} src="/icons/menu-white.svg" alt="menu" style={{
                transform: 'scale(1.22)',
            }}/>
        </MenuItem>
    );
}
