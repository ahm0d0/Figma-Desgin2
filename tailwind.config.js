// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "1280px", // تأكد من تعيين md هنا
      },
      colors: {
        customBlack: "#1F1F1F",
        aqua: "aqua",
      },
      spacing: {
        "30px": "30px",
        "100px": "100px",
        customPostion: "310px",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".relative-before": {
            position: "relative",
          },
          ".relative-before::before": {
            content: '"."',
            position: "absolute",
            zIndex: "-10",
            backgroundColor: "white",
            width: "200px",
            height: "196px",
            border: "2px solid black",
            top: "-21px",
            left: "110px",
          },
        },
        ["responsive", "hover"]
      );
    },
  ],
};
