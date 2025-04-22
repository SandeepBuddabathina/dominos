module.exports = {
  content: ['./src/**/*.{html,ts}'], // or wherever your files are
  theme: {
    extend: {
      colors: {
        customBlue: '#006491', // now you can use bg-customBlue, text-customBlue, etc.
      },

    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
