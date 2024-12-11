/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],

  /* Vil du overskrive eller extende tailwinds indstillinger?  */

  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      bordeaux: {
        700: "#81221A",
      },

      brown: {
        50: "#FBF6F4",
        100: "#E8DACF",
        800: "#452C1C",
      },

      green: {
        700: "#5D5F47",
      },
    },

    /* Tilføj din egen spacing nedenfor */
    spacing: {
      xxs: "8px",
      xs: "16px",
      s: "24px",
      sm: "32px",
      m: "40px",
      lg: "64px",
      xl: "80px",
      "2xl": "96px",
      "3xl": "112px",
      "4xl": "144px",
      "5xl": "176px",
      "6xl": "192px",
      "7xl": "288px",
      "8xl": "360px",
      "9xl": "424px",
    },

    /* Tilføj fonte herunder - husk også at tilføje webfonte i head-sektionen i MainLayout  */
    fontFamily: {
      body: ["Open Sans", "serif"],
      display: [".New York", "serif"] /* eksempel på ekstra font */,
    },

    /* Tilføj dit typografiske hierarki herunder */
    fontSize: {
      "2xl": ["17.5rem"],
      xl: ["11.25rem"],
      l: ["4.375rem"],
      m: ["3.125rem"],
      s: ["2.1875rem"],
      xs: ["1.5625rem"],
      xxs: ["1.125rem"],
      base: ["1.25rem"],
      base_s: ["1.0625rem"],
      base_xs: ["0.9375rem"],
    },

    /* Tilføj dit fontvægt-hierarki nedenfor */
    fontWeight: {
      regular: "400",
      semibold: "600",
      bold: "700",
    },

    /* Borders - borderstørrelser herunder */
    borderWidth: {
      none: "0px",
      xs: "1px",
      s: "2px",
      m: "3px",
      lg: "4px",
    },

    /* Border radius størrelser herunder */
    borderRadius: {
      DEFAULT: "0.25rem",
      none: "0px",
      xs: "10px",
      sm: "20px",
      md: "30px",
      lg: "40px",
      full: "180px",
    },

    /* Box shadows herunder */
    boxShadow: {
      drop25: "0px 6px 8px -6px rgba(0, 0, 0, 0.50), 0px 8px 16px -6px rgba(0, 0, 0, 0.50);" /* x y blur spread farve / opacity */,
    },

    extend: {
      /* Tilføj din egen farvepalette nedenfor */
      // colors: {
      //     transparent: 'transparent',
      //     current: 'currentColor',
      //     'farvenavn': {
      //         50: '#hexkode',
      //         100: '#hexkode',
      //         200: '#hexkode',
      //         300: '#hexkode',
      //         400: '#hexkode',
      //         500: '#hexkode',
      //         600: '#hexkode',
      //         700: '#hexkode',
      //         800: '#hexkode',
      //         900: '#hexkode',
      //     },
      //     'white': '#fff',
      //     'black': '#000',
      // },
      /* Tilføj din egen spacing nedenfor */
      // spacing: {
      //     'm': '40px',
      // },
      /* Tilføj fonte herunder - husk også at tilføje webfonte i head-sektionen i MainLayout  */
      // fontFamily: {
      //     sans: ['Prompt', 'sans-serif'],
      //     'display': ['Courier', 'monospace'], /* eksempel på ekstra font */
      // },
      /* Tilføj dit typografiske hierarki herunder */
      // fontSize: {
      //     base: ['1rem', { lineHeight: '1.5rem' }],
      //     large: ['2.5rem', { lineHeight: '3.75rem' }],
      //   },
      /* Tilføj dit fontvægt-hierarki nedenfor */
      //   fontWeight: {
      //     regular: '400',
      //   },
      /* Borders - borderstørrelser herunder */
      // borderWidth: {
      //     DEFAULT: '1px',
      //     0: '0px',
      //     2: '2px',
      // },
      /* Border radius størrelser herunder */
      // borderRadius: {
      //     DEFAULT: '1.25rem',
      //     none: '0px',
      // },
      /* Box shadows herunder */
      // boxShadow: {
      //     drop25: '4px 4px 4px 0 rgb(0 0 0 / 0.25)', /* x y blur spread farve / opacity */
      // },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/container-queries")],
};
