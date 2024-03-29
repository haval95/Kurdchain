/* eslint-disable no-undef */

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      Primary: '#60D394',
      PrimaryHover: '#50c283',
      PrimaryLight: '#17C3B2',
      PrimaryLightHover: '#06b2a1',
      Secondary: '#227C9D',

      SecondaryLight: '#F3F8F9',
      SecondaryHover: '#116b8e',
      SecondaryOpacity: '#227C9DB3',
      Light: '#FFFFFF',
      Dark: '#1e1e1e',
      Danger: '#BA1E12',
      DangerHover: '#A90C01',
      Info: '#EEF5F8',
      InfoHover: '#dde4e7',
      Warning: '#FFCB77',
      WarningHover: '#FFDC88',
      GrayBorder: '#E0E0E0',
      LightGray: '#F7F7F7',
      Gray: '#6c757d',
      CurrencyBorder: '#E1E5EA',
    },
    extend: {},
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '770px',
      // => @media (min-width: 768px) { ... }
      nav_break: '845px',
      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1650px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  variants: {
    extend: { grayscale: ['hover', 'focus'] },
  },
  plugins: [],
}
