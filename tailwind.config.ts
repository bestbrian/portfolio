import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    fontFamily: {
      subway: "var(--font-subway)",
      satoshi: "var(--font-satoshi)",
      mono: "var(--font-mono)",
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: "720px",
        lg: "1120px",
      },
    },
    extend: {
      fontSize: {
        "heading-xl": "3.16rem", // For desktop or larger breakpoints (h1)
        "heading-lg": "2.37rem", // For mobile or as a default heading size (h2)
        "heading-md": "1.33rem", // Additional size if needed (h4)
        base: "1rem", // Body text (p/h3)
        caption: "0.75rem", // Captions or legal text
      },
      // lineHeight: {
      //   paragraph: "1.5rem",
      //   heading: "1.2rem",
      // },
      // spacing: {
      //   xs: "0.75rem",
      //   sm: "1rem",
      //   md: "1.33rem",
      //   lg: "1.77rem",
      //   xl: "2.37rem",
      //   "2xl": "3.15rem",
      //   "3xl": "4.12rem",
      //   "4xl": "5.5rem",
      //   "section-padding": "2.37rem",
      //   "heading-body": "1.33rem",
      //   paragraph: "1rem",
      //   profile: "5rem",
      //   icon: "1rem",
      //   feature: "70rem",
      // },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "background-position-spin": {
          "0%": { backgroundPosition: "top center" },
          "100%": { backgroundPosition: "bottom center" },
        },
        squiggle: {
          from: {
            transform: "translateY(-20px)",
          },
          to: {
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "background-position-spin":
          "background-position-spin 3000ms infinite alternate",
        "squiggle-line": "squiggle 0.3s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;

export default config;
