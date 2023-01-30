module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.js'],
  theme: {
    extend: {
      backgroundImage: () => ({
        home: "url('/Homebackground.png')",
      }),
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
