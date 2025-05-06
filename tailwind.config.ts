import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            screens: {
                lg: '1535px'
            },
            fontFamily: {
                sans: ['var(--font-space-mono)'],
                lexend: ['var(--font-lexend-deca)']
            },
            fontSize: {
                'h1': ['56px', {lineHeight: '56px', letterSpacing: '-2.5px', fontWeight: '1000'}],
                'h2': ['48px', {lineHeight: '48px', letterSpacing: '-2.14px', fontWeight: '700'}],
                'h3': ['40px', {lineHeight: '48px', letterSpacing: '-1.79px', fontWeight: '700'}],
                'h4': ['24px', {lineHeight: '28px', letterSpacing: '-1.07px', fontWeight: '700'}],
                'body1': ['15px', {lineHeight: '25px', fontWeight: '400'}],
            },
            colors: {
                'yellow': '#FCB72B',
                'steel': '#333A44',
                'dark-navy': '#495567',
                'dim-grey': '#939CAA',
                'light-grey': '#E5ECF4',
                'light-grey-transparent': '#E5ECF41A',
                'snow': '#F2F5F9',
                'light-yellow': '#FFF4DF'
            }
        },
    },
    plugins: [],
};
export default config;
