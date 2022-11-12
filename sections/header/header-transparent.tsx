import {DefaultSection} from '../../layouts/section-layouts';


export default function HeaderTransparent() {
    return (
        <DefaultSection name={'header header-transparent'} padding={'none'}>
            <div className="row">

                <div className="col-auto">
                    <div className="logo">
                        <a href="index.html">
                            <img src="/logo.png" alt="logo"/>
                        </a>
                    </div>
                </div>

                <div className="col-auto ms-auto">
                    <Menu/>
                </div>

            </div>

        </DefaultSection>
    );
}

function Menu() {
    return (
        <div className="menu nobullet">
            <ul>
                <li>EN</li>
                <li>CONTACTS</li>
                <li>QUICK LINKS</li>
                <li className={'icon'}>
                    <img className={'svg-img'} src="/icons/search-white.svg" alt="search"/>
                </li>
                <li className={'icon'}>
                    <img className={'svg-img'} src="/icons/menu-white.svg" alt="search"/>
                </li>
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
