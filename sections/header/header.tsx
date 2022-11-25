import {DefaultSection} from '../../layouts/section-layouts';
import {useIsMobileOrTablet} from '../../styles/breakpoints';
import {useSnapshot} from 'valtio';
import {globalActions, globalState} from '../../state/global';
import {ReactNode} from 'react';
import zIndex from '../../styles/zIndex';
import {defaultHeaderMenu} from '../../lib/consts';
import AnimLink from '../../lib/anim-link';
import Hamburger from './Hamburger';
import MenuItem from './MenuItem';


export function HeaderSection() {

    const isMobileOrTablet = useIsMobileOrTablet();
    const {sticked, bgMenuActive} = useSnapshot(globalState);

    if (isMobileOrTablet) {
        return (
            <DefaultSection name={
                'header header-static'
                + (sticked ? ' sticked' : '')
                + (!bgMenuActive ? ' off' : '')
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
            + (!bgMenuActive ? ' off' : '')
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
            <AnimLink href="/">
                <img src="/logo-black.png" alt="logo"/>
            </AnimLink>
        </div>
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
                <Hamburger/>
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

    const {bgMenuActive} = useSnapshot(globalState);

    return (
        <>
            <div className="header-wrap wrap-top">
                <HeaderSection/>
            </div>
            <div className="header-wrap wrap" style={{
                display: bgMenuActive ? 'block' : 'none',
            }}>
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
                    //border-bottom: #00000026 0.6px solid;
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

