module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'woods': "url('/src/resources/images/woodsbg.jpg')",
        'closet': "url('/src/resources/images/unnamed.jpg')",
        'florest': "url('/src/resources/images/74728.jpg')", 
       }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      animation: ['motion-safe'],
    },
  },
  plugins: [],
  
}
