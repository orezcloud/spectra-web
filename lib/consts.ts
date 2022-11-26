export const isServer = typeof window === 'undefined';

export const urls = {
    home: '/',
    about: '/about',
    products: '/products',
    solutions: '/solutions',
    support: '/support',
    contact: '/contact-mail',
    salesEnquire: '/sales-enquire',
};

export const defaultHeaderMenu = [
    {
        name: 'Home',
        url: '/',
    },
    {
        name: 'About',
        url: urls.about,
    },
    {
        name: 'Produts',
        url: urls.products,
    },
    {
        name: 'Solutions',
        url: urls.solutions,
    },
    {
        name: 'Support',
        url: urls.support,
    },
    {
        name: 'Contact us',
        url: urls.contact,
    },
];

export const transparentHeaderMenu = [
    {
        name: 'Products',
        url: urls.products,
    },
    {
        name: 'Contact',
        url: urls.contact,
    },
];

const productCategoryBase = '/products';

export const productCategories = [
    {
        name: 'Diesel Generators',
        image: '/images/products/cat (1).jpg',
        description: 'Reliable and efficient diesel generators for all your power needs.',
        url: productCategoryBase + '/diesel-generators',
    },
    {
        name: 'Hybrid Generator',
        image: '/images/products/cat (2).jpg',
        description: 'A combination of diesel and gas for increased efficiency.',
        url: productCategoryBase + '/hybrid-generator',
    },
    {
        name: 'Gas Generators',
        image: '/images/products/cat (3).jpg',
        description: 'Portable power for when you need it most.',
        url: productCategoryBase + '/gas-generators',
    },
    {
        name: 'Marine Generators',
        image: '/images/products/cat (4).jpg',
        description: 'Power your boat with a reliable generator.',
        url: productCategoryBase + '/marine-generators',
    },
    {
        name: 'Light Towers',
        image: '/images/products/cat (5).jpg',
        description: 'Get the job done with a portable light tower.',
        url: productCategoryBase + '/light-towers',
    },
    {
        name: 'Portable Generators',
        image: '/images/products/cat (6).jpg',
        description: 'Take power with you wherever you go.',
        url: productCategoryBase + '/portable-generators',
    },
    {
        name: 'Distribution Solutions',
        image: '/images/products/cat (7).jpg',
        description: 'Keep your business running with a reliable power distribution system.',
        url: productCategoryBase + '/distribution-solutions',
    },
];

const dieselGeneratorBase = '/products/diesel-generators';

export const dieselGeneratorCategories = [
    {
        name: 'Prime Power Generators',
        image: '/images/products/cat (1).jpg',
        description: 'Reliable power for your business.',
        url: dieselGeneratorBase + '/prime-power-generators',
    },
    {
        name: 'Standby Power Generators',
        image: '/images/products/cat (2).jpg',
        description: 'Backup power for when you need it most.',
        url: dieselGeneratorBase + '/standby-power-generators',
    },
    {
        name: 'Continuous Power Generators',
        image: '/images/products/cat (3).jpg',
        description: 'Power for your business 24/7.',
        url: dieselGeneratorBase + '/continuous-power-generators',
    },
    {
        name: 'Special Generators',
        image: '/images/products/cat (4).jpg',
        description: 'Customized generators for your unique needs',
        url: dieselGeneratorBase + '/special-generators',
    },
];

export const modalMenuLinks = [
    {
        image: '/images/products/cat (1).jpg',
        name: 'Prime Power Generators',
        links: [
            {
                label: 'Prime Power Generators',
                url: dieselGeneratorBase + '/prime-power-generators',
            },
            {
                label: 'Standby Power Generators',
                url: dieselGeneratorBase + '/standby-power-generators',
            },
            {
                label: 'Continuous Power Generators',
                url: dieselGeneratorBase + '/continuous-power-generators',
            },
            {
                label: 'Special Generators',
                url: dieselGeneratorBase + '/special-generators',
            },
        ],
    },
    {
        image: '/images/products/cat (1).jpg',
        name: 'Prime Power Generators',
        links: [
            {
                label: 'Prime Power Generators',
                url: dieselGeneratorBase + '/prime-power-generators',
            },
            {
                label: 'Standby Power Generators',
                url: dieselGeneratorBase + '/standby-power-generators',
            },
            {
                label: 'Continuous Power Generators',
                url: dieselGeneratorBase + '/continuous-power-generators',
            },
            {
                label: 'Special Generators',
                url: dieselGeneratorBase + '/special-generators',
            },
        ],
    },
    {
        image: '/images/products/cat (1).jpg',
        name: 'Prime Power Generators',
        links: [
            {
                label: 'Prime Power Generators',
                url: dieselGeneratorBase + '/prime-power-generators',
            },
            {
                label: 'Standby Power Generators',
                url: dieselGeneratorBase + '/standby-power-generators',
            },
            {
                label: 'Continuous Power Generators',
                url: dieselGeneratorBase + '/continuous-power-generators',
            },
            {
                label: 'Special Generators',
                url: dieselGeneratorBase + '/special-generators',
            },
        ],
    },
    {
        image: '/images/products/cat (1).jpg',
        name: 'Prime Power Generators',
        links: [
            {
                label: 'Prime Power Generators',
                url: dieselGeneratorBase + '/prime-power-generators',
            },
            {
                label: 'Standby Power Generators',
                url: dieselGeneratorBase + '/standby-power-generators',
            },
            {
                label: 'Continuous Power Generators',
                url: dieselGeneratorBase + '/continuous-power-generators',
            },
            {
                label: 'Special Generators',
                url: dieselGeneratorBase + '/special-generators',
            },
        ],
    },
    {
        image: '/images/products/cat (1).jpg',
        name: 'Prime Power Generators',
        links: [
            {
                label: 'Prime Power Generators',
                url: dieselGeneratorBase + '/prime-power-generators',
            },
            {
                label: 'Standby Power Generators',
                url: dieselGeneratorBase + '/standby-power-generators',
            },
            {
                label: 'Continuous Power Generators',
                url: dieselGeneratorBase + '/continuous-power-generators',
            },
            {
                label: 'Special Generators',
                url: dieselGeneratorBase + '/special-generators',
            },
        ],
    },
];

export const footerLinks = [
    {
        title: 'PowerMart',
        links: [
            {
                name: 'Discover PowerMart',
                path: '/',
            },
            {
                name: 'PowerMart for Business',
                path: '/about',
            },
            {
                name: 'Careers',
                path: '/careers',
            },
            {
                name: 'Policies & Procedures',
                path: '/policies',
            },
            {
                name: 'Environment policies',
                path: '/environment-policies',
            },
        ],
    },
    {
        title: 'Services',
        links: [
            {
                name: 'After Sales Service',
                path: '/after-sales',
            },
            {
                name: 'Spare Parts',
                path: '/about',
            },
        ],
    },
    {
        title: 'Resources',
        links: [
            {
                name: 'FAQs',
                path: '/faq',
            },
            {
                name: 'Warranties',
                path: '/warranty-policy',
            },
            {
                name: 'Selected Projects',
                path: '/selected-projects',
            },
            {
                name: 'Downloads',
                path: '/downloads',
            },
        ],
    },
    {
        title: 'Case Studies',
        links: [
            {
                name: 'Diesel to Power',
                path: '/',
            },
            {
                name: 'Gas to Power',
                path: '/about',
            },
        ],
    },
    {
        title: 'Contact',
        links: [
            {
                name: 'Become a Partner',
                path: '/',
            },
            {
                name: 'Sales Enquiries',
                path: '/about',
            },
            {
                name: 'General Enquiries',
                path: '/contact',
            },
        ],
    },
];

export const preFooterLinks = [
    {
        title: 'Diesel Generators',
        links: [
            {
                name: 'Prime Power Generators',
                href: dieselGeneratorBase + '/prime-power-generators',
            },
            {
                name: 'Standby Power Generators',
                href: dieselGeneratorBase + '/standby-power-generators',
            },
            {
                name: 'Continuous Power Generators',
                href: dieselGeneratorBase + '/continuous-power-generators',
            },
            {
                name: 'Special Generators',
                href: dieselGeneratorBase + '/special-generators',
            },
        ],
    },
    {
        title: 'Gas Generators',
        links: [
            {
                name: 'Oil & Gas Generators',
                href: productCategoryBase + '/oil-and-gas-generators',
            },
            {
                name: 'Liquefied Petroleum Gas Generators',
                href: productCategoryBase + '/liquefied-petroleum-gas-generators',
            },
        ],
    },
    {
        title: 'Light Towers',
        links: [
            {
                name: 'Gasoline Power Light Towers',
                href: productCategoryBase + '/gasoline-power-light-towers',
            },
            {
                name: 'Diesel Power Light Towers',
                href: productCategoryBase + '/diesel-power-light-towers',
            },
            {
                name: 'Super Silent Power Light Towers',
                href: productCategoryBase + '/super-silent-power-light-towers',
            },
        ],
    },
    {
        title: 'Distribution Solutions',
        links: [
            {
                name: 'Engine and alternator parts',
                href: '/engine-and-alternator-parts',
            },
            {
                name: 'Service kits',
                href: '/service-kits',
            },
            {
                name: 'Control Modules',
                href: '/control-modules',
            },
            {
                name: 'Automatic Transfer Switches',
                href: '/automatic-transfer-switches',
            },
            {
                name: 'Load Banks',
                href: '/load-banks',
            },
        ],
    },
    {
        title: 'Hybrid Generators',
        links: [
            {
                name: 'Diesel Hybrid Generators',
                href: productCategoryBase + '/diesel-hybrid-generators',
            },
        ],
    },
    {
        title: 'Mariine Generators',
        links: [
            {
                name: 'Open Type Marine Generators',
                href: productCategoryBase + '/open-type-marine-generators',
            },
            {
                name: 'Soundproof Type Marine Generators',
                href: productCategoryBase + '/soundproof-type-marine-generators',
            },
        ],
    },
    {
        title: 'Portable Generators',
        links: [
            {
                name: 'Gasoline Power Portable Generators',
                href: productCategoryBase + '/gasoline-power-portable-generators',
            },
            {
                name: 'Open Type Generators',
                href: productCategoryBase + '/open-type-generators',
            },
            {
                name: 'Sound Olded Type Generators',
                href: productCategoryBase + '/sound-olded-type-generators',
            },
        ],
    },
];
