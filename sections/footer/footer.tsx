import {DefaultSection} from '../../layouts/section-layouts';


export default function Footer() {
    return (
        <DefaultSection name={'footer'}>
            <div className="footer-main nobullet">
                <div className="row justify-content-center">
                    {
                        footerLinks.map((link, index) => (
                            <div className="col-lg-2 col-md-6" key={index}>
                                <div className="footer-widget">
                                    <h3 className="footer-title">{link.title}</h3>
                                    <ul className="footer-links">
                                        {
                                            link.links.map((item, index) => (
                                                <li key={index}>
                                                    <a href={item.path}>{item.name}</a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <style jsx>
                {`
                  :global(.footer) {
                    padding: 60px 0 30px;
                    color: #fff;
                    background: #080808;
                  }

                  .footer-main .col-lg-2 {
                    width: 20%;
                  }
                `}
            </style>
        </DefaultSection>
    );
}

const footerLinks = [
    {
        title: 'PowerMart',
        links: [
            {
                name: 'Home',
                path: '/',
            },
            {
                name: 'About Us',
                path: '/about',
            },
        ],
    },
    {
        title: 'PowerMart',
        links: [
            {
                name: 'Home',
                path: '/',
            },
            {
                name: 'About Us',
                path: '/about',
            },
        ],
    },
    {
        title: 'PowerMart',
        links: [
            {
                name: 'Home',
                path: '/',
            },
            {
                name: 'About Us',
                path: '/about',
            },
        ],
    },
    {
        title: 'PowerMart',
        links: [
            {
                name: 'Home',
                path: '/',
            },
            {
                name: 'About Us',
                path: '/about',
            },
        ],
    },
    {
        title: 'PowerMart',
        links: [
            {
                name: 'Home',
                path: '/',
            },
            {
                name: 'About Us',
                path: '/about',
            },
        ],
    },
];
