/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: { 
 
    extend: {
      spacing:{
        992:'62rem',
        120:'30rem',
        132:'33rem',
        160:'40rem',
        176:'44rem',
        184:'46rem',
        192:'48rem',
        200:'50rem',
        208:'52rem',
        216:'54rem',
        224:'56rem',
        '11/20': '55%',
        '9/20': '45%',
        
      },

      fontFamily:{
        mw:['Merriweather','serif']
      },
      colors:{
        'laci': '#1e00d7'
            },


    },
  },
  plugins: [],
}

