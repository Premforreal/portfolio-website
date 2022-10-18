module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      signature: ["Great Vibes"],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'wooden':'#e9d5a1',
      'lightgrey':'#353239',
      'grey':'#6c757d',
      'lightergrey':'#6d6d6d',
      'darkmode':'#212529',
      'linkedin':'#0072b1',
      "apple-red":"#FF605C",
      "apple-yellow":"#FFBD44",
      "apple-green":"#00CA4E",
      "whitesmoke":"#F5F5F5",
      "css":"#2563eb",
      "html":"#fb923c",
      "js":"#facc15",
      "python":"#fde047",
      "react":"#22d3ee",
      "mongodb":"#22c55e",
      "mysql":"#0284c7",
      "node":"#65a30d",
    }
  },
  plugins: [require("daisyui")],
};