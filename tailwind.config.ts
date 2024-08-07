import type { Config } from 'tailwindcss'

const colors = {
  black: 'var(--black)',
  'black-secondary': 'var(--black-secondary)',
  gray: 'var(--gray)',
  'gray-secondary': 'var(--gray-secondary)',
  'light-gray': 'var(--light-gray)',
  white: 'var(--white)',
}

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
      gridTemplateColumns: {
        '16': 'repeat(16, minmax(0, 1fr))',
      },
    },
    colors,
  },
  plugins: [],
}
export default config
