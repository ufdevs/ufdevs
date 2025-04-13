/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    safelist: [
        'p-2',
        'p-4',
        'p-6',
        'px-2',
        'px-4',
        'px-6',
        'py-2',
        'py-4',
        'py-6',
        'bg-primary',
        'bg-secondary',
        'bg-accent',
        'text-primary',
        'text-secondary',
        'text-accent',
        'bg-dark-800',
        'bg-dark-900',
        'bg-emerald-400',
        'bg-emerald-500',
        'bg-emerald-600',
        'bg-emerald-700',
        'bg-emerald-800',
        'bg-emerald-900',
        'hover:bg-emerald-500',
        'hover:bg-emerald-600',
        'hover:bg-emerald-700',
        'hover:bg-emerald-800',
        'text-emerald-100',
        'text-emerald-200',
        'text-emerald-300',
        'text-emerald-400',
        'text-emerald-500',
        'text-gray-200',
        'text-gray-300',
        'text-gray-400',
        'border-emerald-500',
        'border-emerald-600',
        'border-emerald-700',
        'focus:ring-emerald-500',
        'focus:border-emerald-500'
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: 'var(--primary-color)',
                    hover: '#059669', // Emerald 600
                },
                secondary: {
                    DEFAULT: 'var(--secondary-color)',
                    hover: '#111827', // Darker gray
                },
                accent: {
                    DEFAULT: 'var(--accent-color)',
                },
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                card: 'var(--card-bg)',
                muted: 'var(--muted)',
                border: 'var(--border-color)',
                dark: {
                    800: '#1a1a1a',
                    900: '#121212',
                },
                emerald: {
                    300: '#6ee7b7',
                    400: '#34d399',
                    500: '#10b981',
                    600: '#059669',
                    700: '#047857',
                }
            },
        },
    },
    plugins: [],
}; 