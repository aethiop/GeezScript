module.exports = {
    title: "ግዕዝ / Ge'ez",
    description: 'An amharic syntax programming language',
    theme: 'yuu',
    themeConfig: {
        logo: '/images/geez.svg',
        nav: [
            {
                text: 'Home',
                link: '/',
            },
            {
                text: 'Guide',
                link: '/guide/',
            },
            {
                text: 'Editor',
                link: 'http://localhost:3001',
                target: '_self',
                rel: false,
            },
        ],
        sidebar: 'auto',
        smoothScroll: true,
    },
    markdown: {
        lineNumbers: false,
    },
}
