import type { Config } from "tailwindcss"
import defaultTheme from "tailwindcss/defaultTheme"

export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
        stratford: ['"Stratford Std Roman"', '"Times New Roman"', "Times", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config

