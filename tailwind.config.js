/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html','./script.js'],
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
      },
      animation:{
        marquee:'marquee 10s linear infinite'
      },
      keyframes:{
        marquee:{
          '0%':{transform:'translateX(0%)'},
          '100%':{transform:'translateX(-100%)'},
        }
      }
    },
  },
  plugins: [],
}