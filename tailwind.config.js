  /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary colors - Dark theme
        primary: {
          900: '#101211',  // Main background
          800: '#171918',  // Secondary background
          700: '#202221',  // Darker elements
          600: '#2e3130',  // Border colors
          300: '#ebebeb',  // Light text
          200: '#f7f7f7',  // Lighter text
          100: '#ffffff',  // White text
        },
        // Accent colors - Gold
        accent: {
          light: '#fff0d1',    // Lightest accent
          medium: '#ffda8f',   // Medium accent
          DEFAULT: '#ffc44d',  // Main accent color
        },
        // Text colors
        text: {
          primary: '#ffffff',    // Main text
          secondary: '#ebebeb',  // Secondary text
          muted: '#dbdbdb',     // Muted text
        },
        // Background colors
        background: {
          dark: '#101211',     // Main background
          card: '#171918',     // Card background
          elevated: '#202221', // Elevated elements
        },
        // Border colors
        border: '#2e3130',
      },
      // Font settings
      fontFamily: {
        sans: ['Switzer', 'Inter', 'system-ui'],  // Updated to use Switzer as primary font
        display: ['Switzer', 'system-ui'],
      },
      // Custom spacing
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      // Custom animations
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      // Border radius
      borderRadius: {
        '4xl': '2rem',
      },
      // Box shadow for dark theme
      boxShadow: {
        'soft': '0 2px 15px 0 rgba(0, 0, 0, 0.3)',
        'medium': '0 4px 25px 0 rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
};
