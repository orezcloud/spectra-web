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

export const productCategories = [
    {
        name: 'Category 1',
        image: '/images/products/cat (1).jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        url: '/products/category-1',
    },
    {
        name: 'Category 1',
        image: '/images/products/cat (2).jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        url: '/products/category-1',
    },
    {
        name: 'Category 1',
        image: '/images/products/cat (3).jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        url: '/products/category-1',
    },
    {
        name: 'Category 1',
        image: '/images/products/cat (4).jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        url: '/products/category-1',
    },
    {
        name: 'Category 1',
        image: '/images/products/cat (5).jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        url: '/products/category-1',
    },
    {
        name: 'Category 1',
        image: '/images/products/cat (6).jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        url: '/products/category-1',
    },
    {
        name: 'Category 1',
        image: '/images/products/cat (7).jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        url: '/products/category-1',
    },
]
