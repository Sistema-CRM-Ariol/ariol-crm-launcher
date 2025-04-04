import { heroui } from "@heroui/react";
import type { Config } from "tailwindcss";

import { lightTheme } from "./src/config";


const config: Config = {
  content: [
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'athens-gray': "#f5f7fa",
      }
    }
  },
  darkMode: "class",

  plugins: [
    heroui({
      defaultTheme: 'light',

      layout: {
        boxShadow: {
          small: 'rgba(58,101,247,0.1) 0px 0px 16px;',
          medium: 'rgba(58,101,247, 0.2) 0px 4px 16px, rgba(58,101,247, 0.01) 0px 8px 32px;'
        },
        radius: {
          small: '3px',
          large: '9px',
          medium: '6px',
        },
      },

      themes: {
        light: {
          colors: {
            focus: "#000",
            overlay: "#fff",
            background: '#f5f7fa',
            primary: {
              DEFAULT: '#3a65f7',
              '50': '#eff4ff',
              '100': '#dbe5fe',
              '200': '#bfd1fe',
              '300': '#92b5fe',
              '400': '#5f8dfb',
              '500': '#3a65f7',
              '600': '#2445ec',
              '700': '#1c31d9',
              '800': '#1d2ab0',
              '900': '#1d298b',
            },
            secondary: {
              DEFAULT: '#615ffb',
              '50': '#edf0ff',
              '100': '#dee5ff',
              '200': '#c3ceff',
              '300': '#9fadff',
              '400': '#7980ff',
              '500': '#615ffb',
              '600': '#4b3bf0',
              '700': '#402ed4',
              '800': '#3428ab',
              '900': '#2f2887',
            },
          }
        }
      }
    })
  ]
};
export default config;
