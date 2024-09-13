/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "{./index.html,./login.html,./register.html,./aboutPage.html,./contactPage.html,./downloadPage.html}",
    "./src/components/**/*.{html,js}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '375px',    // Extra small devices (phones)
      'md': '768px',    // Medium devices (tablet)
      'lg': '1024px',   // Large devices (small desktops)
      'xl': '1280px',   // Extra large devices (large desktops)
      '2xl': '1440px',  // 2x Extra large devices (larger screens)
    },
    container: {
      center: true,  // Center container by default
      padding: {
        DEFAULT: '1rem', // Padding default
        sm: '1.5rem',  // Padding for small screens
        md: '2rem',    // Padding for medium screens
        lg: '2.5rem',  // Padding for large screens
        xl: '3rem',    // Padding for extra large screens
      },
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/bg-hero.png')",
        'hero-pattern-download': "url('/background_contact.png')",
        'hero-pattern-download-mobile': "url('/backgroundContactMobile.png')",
        'login' : "url('/bg-login.png')",
        'feedback1' : "url('/bg-feed.png')",
        'feedback2' : "url('/bg-feedback2.png')",
      },
      colors: {
        'biru': '#0761FD',
        'line': '#E3E3E3',
        'btn' : '#3CF14E',
        'bg'  : '#F5F5F5',
        'textGray' : '#8C8C8C',
        'iconGray' : '#BDBDBD',
        'backgroundFeedbback': '#EBF2FF',
        'grayFinance' : '#F7F7F7',
        'mobileText' : '#9ABFFE',
        'blueFooter' : '#024BCA',
        'team' : '#F5F9FF',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'sevillana': ['Sevillana'],
      },
    },
  },
  plugins: [],
}

