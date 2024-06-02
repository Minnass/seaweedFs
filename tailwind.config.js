/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        geist: ['Geist', 'sans-serif'],
      },
      spacing: {
        '4.6rem': '4.6rem',
      },
      fontSize: {
        '4em': '4em',
        '3em': '3em',
        '3.5em': '3.5em',
        '1.5em': '1.5em',
        '2em': '2em',
        '1.17em': '1.17em',
        '1em': '1em',
        '0.83em': '0.83em',
        '0.67em': '0.67em',
      },
      width: {
        '1/3': '33.333333%',
      },
      zIndex: {
        navbar: '1498',
        sidebar: '1499',
        popup: '1500',
        9: '9',
        8: '8',
        7: '7',
        6: '6',
        5: '5',
      },
      screens: {
        xs: '375px',
        sm: '640px',
        sm_o: '304px',
        smL: '700px',
        md: '768px',
        md_o: '432px',
        mdL: '850px',
        lg: '1024px',
        lg_o: '688px',
        xl: '1280px',
        xl_o: '944px',
        '2xl': '1536px',
        '2xl_o': '1100px',
      },
      colors: {
        'content-bg': '#F8FAFD',
        'search-bg': '#E9EEF6',
        'icons-color-light': '#444746',
        'file-bg': '#F0F4F9',
        'content-bg-dark': '#071A2B',
        'dashboard-dark': '#031525',
        'search-bg-dark': '#10263C',
        'icons-color-dark': '#95a5bd',
        primary: '#216487',
        surfaceTint: '#216487',
        onPrimary: '#FFFFFF',
        primaryContainer: '#C7E7FF',
        onPrimaryContainer: '#001E2E',
        secondary: '#4F616E',
        onSecondary: '#FFFFFF',
        secondaryContainer: '#D2E5F5',
        onSecondaryContainer: '#0B1D29',
        tertiary: '#62597C',
        onTertiary: '#FFFFFF',
        tertiaryContainer: '#E8DDFF',
        onTertiaryContainer: '#1E1635',
        error: '#BA1A1A',
        onError: '#FFFFFF',
        errorContainer: '#FFDAD6',
        onErrorContainer: '#410002',
        background: '#F6FAFE',
        onBackground: '#181C20',
        surface: '#F6FAFE',
        onSurface: '#181C20',
        surfaceVariant: '#DDE3EA',
        onSurfaceVariant: '#41484D',
        outline: '#71787E',
        outlineVariant: '#C1C7CE',
        shadow: '#000000',
        scrim: '#000000',
        inverseSurface: '#2D3135',
        inverseOnSurface: '#EEF1F6',
        inversePrimary: '#92CEF5',
        primaryFixed: '#C7E7FF',
        onPrimaryFixed: '#001E2E',
        primaryFixedDim: '#92CEF5',
        onPrimaryFixedVariant: '#004C6C',
        secondaryFixed: '#D2E5F5',
        onSecondaryFixed: '#0B1D29',
        secondaryFixedDim: '#B6C9D8',
        onSecondaryFixedVariant: '#374955',
        tertiaryFixed: '#E8DDFF',
        onTertiaryFixed: '#1E1635',
        tertiaryFixedDim: '#CCC1E9',
        onTertiaryFixedVariant: '#4A4263',
        surfaceDim: '#D7DADF',
        surfaceBright: '#F6FAFE',
        surfaceContainerLowest: '#FFFFFF',
        surfaceContainerLow: '#F0F4F9',
        surfaceContainer: '#EBEEF3',
        surfaceContainerHigh: '#E5E8ED',
        surfaceContainerHighest: '#DFE3E7',
      },
    },
  },
  plugins: [],
};