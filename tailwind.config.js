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
      Secondary: '#227C9D',
      SecondaryHover: '#116b8e',
      SecondaryOpacity: '#227C9DB3',
      Light: '#FFFFFF',
      Dark: '#FAFAFA',
      Danger: '#BA1E12',
      DangerHover: '#A90C01',
      Info: '#EEF5F8',
      InfoHover: '#dde4e7',
      Warning: '#FFCB77',
      WarningHover: '#FFDC88',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
