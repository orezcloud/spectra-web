import {ReactNode} from 'react';
import ModalContainer from './modal-container';
import ModalSlick from './modal-slick';
import {modalMenuLinks} from '../../lib/consts';
import {COLORS} from '../../styles/consts';
import {getMobileMediaQuery} from '../../styles/breakpoints';
import AnimLink from '../../lib/anim-link';


function Menu({icon, label, href, onClick}: {icon: string, label: string, href?: string, onClick?: () => void}) {
    return (
        <a className={'d-inline-flex align-items-center opacity-50'} href={onClick ? '' : href} onClick={e => {
            if (onClick) {
                e.preventDefault();
                onClick();
            }
        }}>
            <span className={'me-2 d-inline-block'}>
                <img className={'svg img'} src={icon} alt="icon" height={'23'}/>
            </span>
            <span className={'d-inline-block'}>{label}</span>
        </a>
    );
}

function SlickItem({
                       image,
                       links,
                       name,
                       url,
                   }: {image: string, url?: string, name: string, links: readonly {label: string, href: string}[]}) {
    return (
        <div className={'modal-slick-item px-7'}>
            <div className={'modal-slick-item-image'}>
                {
                    url ? (
                        <AnimLink href={url}>
                            <img src={image} alt={'image'}/>
                        </AnimLink>
                    ) : (
                        <img src={image} alt={'image'}/>
                    )
                }
            </div>
            <div className={'modal-slick-item-links d-flex flex-column align-items-center'}>
                <AnimLink href={url || ""}>
                    {
                        name && (
                            <div className={'title text-center fw-semibold text-uppercase mb-4 mt-5'}>{name}</div>
                        )
                    }
                </AnimLink>
                {
                    links.map((value, index) =>
                        <a key={index} href={value.href} className={''}>
                            <span>{value.label}</span>
                        </a>)
                }
            </div>
            <style jsx>{`

              @media (${getMobileMediaQuery()}) {
                img {
                  width: 80%;
                  margin: 0 auto;
                }
              }
            `}</style>
        </div>
    );
}

export default function ModalContent() {

    const MenuWrapper = ({children}: {children: ReactNode}) => {
        return (
            <div className={'p-3 px-6 d-inline-block text-uppercase fw-normal'}>
                {children}
            </div>
        );
    };

    return (
        <ModalContainer className={'pb-3 pb-0 pb-md-7 h-100 d-flex justify-content-center align-items-center'}>
            <div className={'w-100'}>
                <div className={'d-flex justify-content-center mb-6'}>
                    <MenuWrapper>
                        <Menu label={'LinkedIn'} icon={'/icons/linkedin-black.png'} href={'/'}/>
                    </MenuWrapper>
                    <MenuWrapper>
                        <Menu label={'Facebook'} icon={'/icons/facebook-black.png'} href={'/'}/>
                    </MenuWrapper>
                    <MenuWrapper>
                        <Menu label={'Instagram'} icon={'/icons/instagram-black.png'} href={'/'}/>
                    </MenuWrapper>
                </div>

                <div>
                    <ModalSlick items={
                        modalMenuLinks.map((value, index) =>
                            <SlickItem
                                url={value?.url}
                                key={index} name={value.name} image={value.image} links={
                                value.links.map((value, index) => ({
                                    label: value['label'],
                                    href: value['url'],
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
                background-color: ${COLORS.darkest};
                right: ${left ? '-20px' : '60px'};

              }

              :global(.slick-arrow) {
                z-index: 1;
              }

              :global(.slick-arrow::before) {
                display: none;
              }
            `}</style>
        </div>
    );
}
