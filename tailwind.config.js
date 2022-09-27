/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        'hero-mobile':"url('../images/mobile/image-hero.jpg')",
        // 'hero-':"url('../images/desktop/image-hero.jpg')",
        'hero':"url('../images/hero.jpg')",
      },
      fontFamily: {
        body:['Nunito','Poppins','Sora'],
        weird:['Cherry Cream Soda','Nunito','Poppins','Sora']
      }
    },
  },
  plugins: [],
}