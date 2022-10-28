module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "450px"
        // => @media (min-width: 992px) { ... }
      },
      colors: {
        sunglo: {
          DEFAULT: "#E87272",
          50: "#FFFFFF",
          100: "#FFFEFE",
          200: "#F9DBDB",
          300: "#F3B8B8",
          400: "#EE9595",
          500: "#E87272",
          600: "#E04242",
          700: "#C92121",
          800: "#991919",
          900: "#691111"
        },
        "sandy-brown": {
          DEFAULT: "#F3A358",
          50: "#FFFFFF",
          100: "#FEF7F0",
          200: "#FBE2CA",
          300: "#F8CDA4",
          400: "#F6B87E",
          500: "#F3A358",
          600: "#EF8624",
          700: "#CC6A0F",
          800: "#984F0B",
          900: "#633407"
        },
        macaroni: {
          DEFAULT: "#FFBE81",
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#FFFDFB",
          300: "#FFE8D3",
          400: "#FFD3AA",
          500: "#FFBE81",
          600: "#FFA149",
          700: "#FF8411",
          800: "#D86800",
          900: "#A04D00"
        }
      }
    }
  },
  plugins: []
}
