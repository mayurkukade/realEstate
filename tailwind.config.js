const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
        'cursive': ['Brush Script MT', 'cursive'],
        'roboto': ['Roboto', 'Arial', 'sans-serif'],
        'montserrat': ['Montserrat', 'Helvetica', 'Arial', 'sans-serif'],
        'lato': ['Lato', 'Helvetica', 'Arial', 'sans-serif'],
        'opensans': ['Open Sans', 'Helvetica', 'Arial', 'sans-serif'],
        'playfair': ['Playfair Display', 'Georgia', 'serif'],
        'poppins': ['Poppins', 'Arial', 'sans-serif'],
        'raleway': ['Raleway', 'Arial', 'sans-serif'],
        'ubuntu': ['Ubuntu', 'Arial', 'sans-serif'],
        'ar-decode': ['"AR DECODE"', 'serif'],
      },
    },
  },
  plugins: [],
});
