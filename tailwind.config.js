module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                dark: '#1A1A1A',
                light: '#263338',
                'dracula-border': '#313131',
                'geez-yellow': '#EDC63B',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
