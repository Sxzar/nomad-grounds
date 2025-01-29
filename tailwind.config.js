/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  prefix: 'tw-',
  content: [
     "./src/**/*.{njk,html,js}","./src/**/*.{njk,html,js}"
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      fontFamily: {
        nothing: ['Nothing You Could Do', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
  
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        'barbershop': {
          "primary": "#2e2e2e",
          "secondary": "#754E1A",
          "accent": "#CBA35C",
          "base-100": "#fbfbfb",
          "success": "#81c784",
          "warning": "#ffb74d",
          "error": "#e57373",
          "info": "#4fc3f7"
        },
      }
    ]
  }
}

