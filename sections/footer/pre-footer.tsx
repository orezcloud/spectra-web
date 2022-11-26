import {DefaultSection} from '../../layouts/section-layouts';
import AnimLink from '../../lib/anim-link';
import {preFooterLinks} from '../../lib/consts';
import {COLORS} from '../../styles/consts';
import {
    getLaptopMediaQuery,
    getLaptopOrDesktopMediaQuery,
    getLaptopOrTabletOrMobileMediaQuery, getMobileOrTabletOnlyMediaQuery,
    getTabletOnlyMediaQuery,
} from '../../styles/breakpoints';


export default function PreFooter() {
    return (
        <DefaultSection name={'pre-footer'} sectionBackground={COLORS.dark} className={'text-light nobullet'}>
            <div className={'row'}>
                {
                    preFooterLinks.map((column, index) => (
                        <div className={'col-6 col-md-3 mb-6'} key={index}>
                            <Column {...column}/>
                        </div>
                    ))
                }
            </div>
            <style jsx>{`
              .row {
                > div {
                  @media (${getLaptopOrDesktopMediaQuery()}) {
                    width: 20% !important;
                  }

                  @media (${getTabletOnlyMediaQuery()}) {
                    width: 25% !important;
                  }
                }

                max-width: 90%;
                @media (${getLaptopOrTabletOrMobileMediaQuery()}) {
                  max-width: 100% !important;
                }
                @media (${getMobileOrTabletOnlyMediaQuery()}) {
                  max-width: 95% !important;
                }
                margin: 0 auto;
              }
            `}</style>
        </DefaultSection>
    );
}


interface ColumnProps {
    title: string;
    links: {
        name: string;
        href: string;
    }[];
}

function Column({title, links}: ColumnProps) {
    return (
        <div className={'column'}>
            <h4 className={'mb-4 d-inline-block'}>{title}</h4>
            <ul className={'w-auto'}>
                {links.map((link, index) => (
                    <li key={index} className={''}>
                        <AnimLink href={link.href}>
                            <a href={link.href} className={'fw-normal opacity-75'}>{link.name}</a>
                        </AnimLink>
                    </li>
                ))}
            </ul>
            <style jsx>{`
            `}</style>
        </div>
    );
}
