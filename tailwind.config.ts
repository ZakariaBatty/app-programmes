/** @type {import('tailwindcss').Config} */
module.exports = {
   darkMode: ['class'],
   content: [
      './pages/**/*.{ts,tsx}',
      './components/**/*.{ts,tsx}',
      './app/**/*.{ts,tsx}',
      './src/**/*.{ts,tsx}',
   ],
   theme: {
      extend: {
         colors: {
            border: 'hsl(var(--border))',
            input: 'hsl(var(--input))',
            ring: 'hsl(var(--ring))',
            background: 'hsl(var(--background))',
            foreground: 'hsl(var(--foreground))',
            primary: {
               DEFAULT: '#0066B3',
               foreground: 'hsl(var(--primary-foreground))',
            },
            secondary: {
               DEFAULT: '#54BFDE',
               foreground: 'hsl(var(--secondary-foreground))',
            },
         },
         screens: {
            '4k': '2160px',
         },
      },
   },
   plugins: [require('tailwindcss-animate')],
};
