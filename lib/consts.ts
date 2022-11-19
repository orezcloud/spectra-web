export const isServer = typeof window === 'undefined';

export const urls = {
    home: '/',
    about: '/about',
    products: '/products',
    solutions: '/solutions',
    support: '/support',
    contact: '/contact',
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

const productCategoryBase = '/products';

export const productCategories = [
    {
        name: 'Diesel Generators',
        image: '/images/products/cat (1).jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        url: productCategoryBase + '/diesel-generators',
    },
    {
        name: 'Hybrid Generator',
        image: '/images/products/cat (2).jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        url: productCategoryBase + '/hybrid-generator',
    },
    {
        name: 'Gas Generators',
        image: '/images/products/cat (3).jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        url: productCategoryBase + '/gas-generators',
    },
    {
        name: 'Marine Generators',
        image: '/images/products/cat (4).jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        url: productCategoryBase + '/marine-generators',
    },
    {
        name: 'Light Towers',
        image: '/images/products/cat (5).jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        url: productCategoryBase + '/light-towers',
    },
    {
        name: 'Portable Generators',
        image: '/images/products/cat (6).jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        url: productCategoryBase + '/portable-generators',
    },
    {
        name: 'Distribution Solutions',
        image: '/images/products/cat (7).jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        url: productCategoryBase + '/distribution-solutions',
    },
];

const dieselGeneratorBase = '/products/diesel-generators';

export const dieselGeneratorCategories = [
    {
        name: 'Prime Power Generators',
        image: '/images/products/cat (1).jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        url: dieselGeneratorBase + '/prime-power-generators',
    },
    {
        name: 'Standby Power Generators',
        image: '/images/products/cat (2).jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        url: dieselGeneratorBase + '/standby-power-generators',
    },
    {
        name: 'Continuous Power Generators',
        image: '/images/products/cat (3).jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        url: dieselGeneratorBase + '/continuous-power-generators',
    },
    {
        name: 'Special Generators',
        image: '/images/products/cat (4).jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        url: dieselGeneratorBase + '/special-generators',
    },
];
