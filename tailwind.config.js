/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // All Container
      maxWidth: {
        container: '1170px',
      },
      // All Container
      
      // All Font Family
      fontFamily: {
        open: ['Open Sans'],
        papri: ['Paprika'],
        robo: ['Roboto'],
        work: ['Work Sans'],
        nun: ['Nunito'],
      },
      // All Font Family

      // All Colors 
      colors: {
        buttonHover: '#FF7628',
        buttonHover1: 'rgba(255, 120, 41, 0.2)',
        menuTextColor: '#192239',
        paraTextColor: '#6C7D93',
        serviceTextColor: '#202427',
        strategyHover: '#EBF7E9',
        socialHover: '#D8EAFF',
        contentHover: '#FBF1EC',
        blogHtext: '#413F45',
        blogPtext: '#474747',
      },
      // All Colors 

    },
  },
  plugins: [],
}

