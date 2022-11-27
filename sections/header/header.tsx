import {DefaultSection} from '../../layouts/section-layouts';
import {useIsMobileOrTablet} from '../../styles/breakpoints';
import {useSnapshot} from 'valtio';
import {globalState} from '../../state/global';
import {defaultHeaderMenu} from '../../lib/consts';
import AnimLink from '../../lib/anim-link';
import Hamburger from './hamburger';
import MenuItem from './menu-item';


export function HeaderSection() {

    const isMobileOrTablet = useIsMobileOrTablet();
    const {sticked, bgMenuActive, headerAnimFast} = useSnapshot(globalState);

    if (isMobileOrTablet) {
        return (
            <DefaultSection name={
                'header header-static'
                + (sticked ? ' sticked' : '')
                + (!bgMenuActive ? ' off' : '')
            } padding={'none'}>
                <div className="row m-0 px-4">
                    <div className="col">
                        <Logo/>
                    </div>
                    <div className="col-auto nobullet">
                        <Hamburger noborder={true}/>
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
            + (headerAnimFast ? ' fast' : '')
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
        </>
    );
}

