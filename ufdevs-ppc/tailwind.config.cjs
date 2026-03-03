/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                'dark-900': '#121212',
                'dark-800': '#1a1a1a',
                'dark-700': '#222222',
                'dark-600': '#2c2c2c',
            },
        },
    },
    plugins: [],
}; 