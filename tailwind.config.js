/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        council: "url(./assets/konsey.png)",
      },
      colors: {
        darkBlue: "#00253b",
        antiqueWhite: "#f0ecec",
        bg: "#ffebcd",
        docHeader: "#d6955d",
        docAside: "#e8c9ae",
        docMain: "#ffebcd",
        docCode: "#ffebbc",
      },
      keyframes: {
        rotate: {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(360deg)" },
        },
        reverseRotate: {
          "0%": { transform: "rotateY(360deg)" },
          "100%": { transform: "rotateY(0deg)" },
        },
        fadeInOut: {
          "0%,100%": "opacity(0)",
          "50%": "opacity(1)",
        },
        colorChange: {
          "0%": { "border-color": "#ff0000" },
          "25%": { "border-color": "#00ff00" },
          "50%": { "border-color": "#0000ff" },
          "75%": { "border-color": "#ffff00" },
          "100%": { "border-color": "#ff00ff" },
        },
      },
      animation: {
        rotate: "rotate 10s linear infinite",
        reverseRotate: "reverseRotate 10s linear infinite",
        fadeInOut: "fadeInOut 2s  infinite",
        colorChange: "colorChange 10s infinite",
      },
    },
  },
  plugins: [],
};
