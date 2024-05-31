import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      transparent: 'transparent',
      white: 'white',
      black: 'black',
      gray: {
        '100': '#f3f4f6',
        '200': '#e5e7eb',
      },
      maincolor: '#0085ff',
      'maincolor-light': '#0085ff33',
    },
  },
  plugins: [],
};
export default config;
