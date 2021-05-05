module.exports = {
    title: 'ግዕዝ',
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
                link: 'https://code.marda.studio',
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
