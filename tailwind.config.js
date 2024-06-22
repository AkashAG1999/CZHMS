/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js"
  ],

  theme: {
    extend: {
      colors: {
        //Colors Used
        NavBg: '#164D92',
        TopNavBg: '#164289',
        Button: '#FF414D',
        Hover: '#00B48D',
        backgroundcolor: '#F4F4F2',
        
      },
        fontWeight: {
          normal: '400',
          medium: '500',
          semibold: '600',
          bold: '700',
          extrabold: '800',
          black: '900',
        }
      
    },
  },
  plugins: [
   
  ],
}

