/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                main: '#6957E9',
            },
            fontFamily: {
                Anton: 'Anton',
                Montserrat: 'Montserrat',
            },
        },
    },
    plugins: [],
};
