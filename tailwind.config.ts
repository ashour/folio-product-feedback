import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#FFFFFF",
      black: "#000000",
      slate: {
        50: "#F7F8FD",
        100: "#F2F4FF",
        500: "#647196",
        600: "#3A4374",
        hover: "#656EA3",
      },
      purple: {
        DEFAULT: "#AD1FEA",
        400: "#AD1FEA",
        hover: "#C75AF6",
      },
      blue: {
        DEFAULT: "#4661E6",
        400: "#4661E6",
        hover: "#7C91F9",
      },
      peach: {
        DEFAULT: "#F49F85",
        200: "#F49F85",
      },
      sky: {
        DEFAULT: "#62BCFA",
        300: "#62BCFA",
      },
      danger: {
        DEFAULT: "#D73737",
        400: "#D73737",
        hover: "#E98888",
      },
    },
    fontSize: {
      base: ["1rem", "1.4375"],
      "body-1": ["1rem", "1.4375"],
      "body-2": ["0.9375rem", "1.4667"],
      "body-3": [
        "0.8125rem",
        {
          lineHeight: "1.4615",
          fontWeight: "500",
        },
      ],
      h1: [
        "1.5rem",
        {
          lineHeight: "1.4583",
          letterSpacing: "-0.01375em",
          fontWeight: "700",
        },
      ],
      h2: [
        "1.25rem",
        {
          lineHeight: "1.45",
          letterSpacing: "-0.0125em",
          fontWeight: "700",
        },
      ],
      h3: [
        "1.125rem",
        {
          lineHeight: "1.4444",
          letterSpacing: " -0.0139em",
          fontWeight: "700",
        },
      ],
      h4: [
        "0.875rem",
        {
          lineHeight: "1.4286",
          letterSpacing: "-0.01429em",
          fontWeight: "700",
        },
      ],
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-jost)", "sans-serif"],
      },
      borderRadius: {
        "10px": "10px",
        "5px": "5px",
      },
      boxShadow: {
        listbox: "0px 10px 40px -7px rgba(55, 63, 104, 0.350492)",
      },
    },
  },
  plugins: [],
};
export default config;
