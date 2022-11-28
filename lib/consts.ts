export const isServer = typeof window === 'undefined';

export const urls = {
    home: '/',
    about: '/about',
    products: '/products',
    solutions: '/solutions',
    support: '/support',
    contact: '/contact-mail',
    salesEnquire: '/sales-enquire',
    faq: '/faq',
    warrantyPolicy: '/warranty-policy',
    selectedProjects: '/selected-projects',
    afterSales: '/after-sales',
    policiesProcedures: '/policies-procedures',
    environmentPolicies: '/environment-policies',
    hash: '#',
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
        name: 'Products',
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
        name: 'About',
        url: urls.about,
    },
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
        image: '/images/products/prime/open type.jpg',
        description: 'Reliable and efficient diesel generators for all your power needs.',
        url: productCategoryBase + '/diesel-generators',
    },
    {
        name: 'Hybrid Generator',
        image: '/images/products/hybrid-generator.jpg',
        description: 'A combination of diesel and gas for increased efficiency.',
        url: productCategoryBase + '/hybrid-generators',
    },
    {
        name: 'Gas Generators',
        image: '/images/products/oil-gas-generators.jpg',
        description: 'Portable power for when you need it most.',
        url: productCategoryBase + '/gas-generators',
    },
    {
        name: 'Marine Generators',
        image: '/images/products/open-type-marine-generator.jpg',
        description: 'Power your boat with a reliable generator.',
        url: productCategoryBase + '/marine-generators',
    },
    {
        name: 'Light Towers',
        image: '/images/products/diseal-power-light.jpg',
        description: 'Get the job done with a portable light tower.',
        url: productCategoryBase + '/light-towers',
    },
    {
        name: 'Portable Generators',
        image: '/images/products/portable/Diseal open Generator.png',
        description: 'Take power with you wherever you go.',
        url: productCategoryBase + '/portable-generators',
    },
    {
        name: 'Distribution Solutions',
        image: '/images/products/mobile-generator.jpg',
        description: 'Keep your business running with a reliable power distribution system.',
        url: productCategoryBase + '/distribution-solutions',
    },
];

const dieselGeneratorBase = '/products/diesel-generators';

export const dieselGeneratorCategories = [
    {
        name: 'Prime Power Generators',
        image: '/images/products/prime/open type.jpg',
        description: 'Reliable power for your business.',
        url: dieselGeneratorBase + '/prime-power-generators',
    },
    {
        name: 'Standby Power Generators',
        image: '/images/products/sound-proof-marine-generator.jpg',
        description: 'Backup power for when you need it most.',
        url: dieselGeneratorBase + '/standby-power-generators',
    },
    {
        name: 'Continuous Power Generators',
        image: '/images/products/diesel/continuous/open type.jpg',
        description: 'Power for your business 24/7.',
        url: dieselGeneratorBase + '/continuous-power-generators',
    },
    {
        name: 'Special Generators',
        image: '/images/products/special/milltary.jpg',
        description: 'Customized generators for your unique needs',
        url: dieselGeneratorBase + '/special-generators',
    },
];

export const modalMenuLinks = [
    {
        image: '/images/menu/about-us.jpg',
        name: 'About us',
        url: urls.about,
        links: [
            // {
            //     label: 'Prime Power Generators',
            //     url: dieselGeneratorBase + '/prime-power-generators',
            // },
        ],
    },
    {
        name: 'Contact us',
        url: urls.contact,
        image: '/images/menu/Contact-us.jpg',
        links: [
        ],
    },
    {
        name: 'Get it more',
        url: urls.salesEnquire,
        image: '/images/menu/Get-it-more.jpg',
        links: [],
    },
    {
        name: 'Products',
        image: '/images/menu/Products.jpg',
        url: urls.products,
        links: [
        ],
    },
    {
        name: 'Services',
        image: '/images/menu/Service.jpg',
        url: urls.solutions,
        links: [
        ],
    },
    {
        name: 'Solutions',
        image: '/images/menu/Solution.jpg',
        url: urls.solutions,
        links: [
        ],
    },
    {
        name: 'Support',
        image: '/images/menu/Support.jpg',
        url: urls.support,
        links: [
        ],
    },
];

export const footerLinks = [
    {
        title: 'PowerMart',
        links: [
            {
                name: 'Discover PowerMart',
                path: urls.hash,
            },
            {
                name: 'PowerMart for Business',
                path: urls.hash,
            },
            {
                name: 'Careers',
                path: urls.hash,
            },
            {
                name: 'Policies & Procedures',
                path: urls.policiesProcedures,
            },
            {
                name: 'Environment policies',
                path: urls.environmentPolicies,
            },
        ],
    },
    {
        title: 'Services',
        links: [
            {
                name: 'After Sales Service',
                path: urls.afterSales,
            },
            {
                name: 'Spare Parts',
                path: urls.hash,
            },
        ],
    },
    {
        title: 'Resources',
        links: [
            {
                name: 'FAQs',
                path: urls.faq,
            },
            {
                name: 'Warranties',
                path: urls.warrantyPolicy,
            },
            {
                name: 'Selected Projects',
                path: urls.selectedProjects,
            },
            {
                name: 'Downloads',
                path: urls.hash,
            },
        ],
    },
    {
        title: 'Case Studies',
        links: [
            {
                name: 'Diesel to Power',
                path: urls.hash,
            },
            {
                name: 'Gas to Power',
                path: urls.hash,
            },
        ],
    },
    {
        title: 'Contact',
        links: [
            {
                name: 'Become a Partner',
                path: urls.hash,
            },
            {
                name: 'Sales Enquiries',
                path: urls.salesEnquire,
            },
            {
                name: 'General Enquiries',
                path: urls.contact,
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
                href: productCategoryBase + '/gas-generators',
            },
            {
                name: 'Liquefied Petroleum Gas Generators',
                href: productCategoryBase + '/gas-generators',
            },
        ],
    },
    {
        title: 'Light Towers',
        links: [
            {
                name: 'Gasoline Power Light Towers',
                href: productCategoryBase + '/light-towers',
            },
            {
                name: 'Diesel Power Light Towers',
                href: productCategoryBase + '/light-towers',
            },
            {
                name: 'Super Silent Power Light Towers',
                href: productCategoryBase + '/light-towers',
            },
        ],
    },
    {
        title: 'Distribution Solutions',
        links: [
            {
                name: 'Engine and alternator parts',
                href: productCategoryBase + '/distribution-solutions',
            },
            {
                name: 'Service kits',
                href: productCategoryBase + '/distribution-solutions',
            },
            {
                name: 'Control Modules',
                href: productCategoryBase + '/distribution-solutions',
            },
            {
                name: 'Automatic Transfer Switches',
                href: productCategoryBase + '/distribution-solutions',
            },
            {
                name: 'Load Banks',
                href: productCategoryBase + '/distribution-solutions',
            },
        ],
    },
    {
        title: 'Hybrid Generators',
        links: [
            {
                name: 'Diesel Hybrid Generators',
                href: productCategoryBase + '/hybrid-generators',
            },
        ],
    },
    {
        title: 'Marine Generators',
        links: [
            {
                name: 'Open Type Marine Generators',
                href: productCategoryBase + '/marine-generators',
            },
            {
                name: 'Soundproof Type Marine Generators',
                href: productCategoryBase + '/marine-generators',
            },
        ],
    },
    {
        title: 'Portable Generators',
        links: [
            {
                name: 'Gasoline Power Portable Generators',
                href: productCategoryBase + '/portable-generators',
            },
            {
                name: 'Open Type Generators',
                href: productCategoryBase + '/portable-generators',
            },
            {
                name: 'Sound Olded Type Generators',
                href: productCategoryBase + '/portable-generators',
            },
        ],
    },
];
