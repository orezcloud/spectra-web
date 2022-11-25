import {ReactNode} from 'react';
import ModalContainer from './modal-container';
import ModalSlick from './modal-slick';
import {modalMenuLinks} from '../../lib/consts';
import {COLORS} from '../../styles/consts';


function Menu({icon, label, href, onClick}: {icon: string, label: string, href?: string, onClick?: () => void}) {
    return (
        <a className={'d-inline-flex align-items-center'} href={onClick ? '' : href} onClick={e => {
            if (onClick) {
                e.preventDefault();
                onClick();
            }
        }}>
            <span className={'me-2 d-inline-block'}>
                <img className={'svg img'} src={icon} alt="icon" height={'27'}/>
            </span>
            <span>{label}</span>
        </a>
    );
}

function SlickItem({
                       image,
                       links,
                       name,
                   }: {image: string, name: string, links: readonly {label: string, href: string}[]}) {
    return (
        <div className={'modal-slick-item px-7'}>
            <div className={'modal-slick-item-image'}>
                <img src={image} alt={'image'}/>
            </div>
            <div className={'modal-slick-item-links d-flex flex-column align-items-center'}>
                <div className={'title text-center fw-semibold text-uppercase mb-4 mt-5'}>{name}</div>
                {
                    links.map((value, index) =>
                        <a key={index} href={value.href} className={''}>
                            <span>{value.label}</span>
                        </a>)
                }
            </div>
        </div>
    );
}

export default function ModalContent() {

    const MenuWrapper = ({children}: {children: ReactNode}) => {
        return (
            <div className={'p-3 px-6 d-inline-block text-uppercase'}>
                {children}
            </div>
        );
    };

    return (
        <ModalContainer className={'pb-3 pb-7 h-100 d-flex justify-content-center align-items-center'}>
            <div className={'w-100'}>
                <div className={'d-flex justify-content-center mb-6'}>
                    <MenuWrapper>
                        <Menu label={'Home'} icon={'/icons/facebook.svg'} href={'/'}/>
                    </MenuWrapper>
                    <MenuWrapper>
                        <Menu label={'Home'} icon={'/icons/facebook.svg'} href={'/'}/>
                    </MenuWrapper>
                    <MenuWrapper>
                        <Menu label={'Home'} icon={'/icons/facebook.svg'} href={'/'}/>
                    </MenuWrapper>
                </div>

                <div>
                    <ModalSlick items={
                        modalMenuLinks.map((value, index) =>
                            <SlickItem key={index} name={value.name} image={value.image} links={
                                value.links.map((value, index) => ({
                                    label: value.label,
                                    href: value.url,
                                }))
                            }/>,
                        )
                    }
                                prevArrow={<Arrow left={true}/>}
                                nextArrow={<Arrow left={false}/>}
                    />
                </div>
            </div>
        </ModalContainer>
    );
}

function Arrow({left}: {left: boolean}) {

    // const src = left ? '/icons/chev-arrow-left.png' : '/icons/chev-arrow-right.png';
    const src = left ? '/icons/chev-arrow-left-white.png' : '/icons/chev-arrow-right-white.png';

    return (
        <div className={''}>
            <img height={40} className={'svg-img'} src={src} alt="arrow"/>

            <style jsx>{`
              div {
                width: 54px;
                height: 54px;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: ${COLORS.darkBlue};
                right: ${left ? 'auto' : '40px'};
              }
              :global(.slick-arrow::before) {
                display: none;
              }
            `}</style>
        </div>
    );
}
