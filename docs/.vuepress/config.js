module.exports = {
    title: 'ግዕዝ',
    head: [
        'script',
        {
            'data-ad-client': 'ca-pub-602158075121396',
            async: true,
            src: 'https://pagead2.googlesyndication.com/js/adsbygoogle.js',
        },
    ],
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
                link: 'https://geez.ariob.studio',
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
