module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
   
    extend: {
      screens: {
        'tablet': '860px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1084px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
      fontFamily: {
        segoe: ['Segoeui', 'sans-serif'],
      },
      colors:{
        primary:"#d50032"
      }
    },
  },
  plugins: [],
}