module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'woods': "url('/src/resources/images/woodsbg.jpg')",
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
