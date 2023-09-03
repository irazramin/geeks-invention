import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      zIndex: {
        '1': '1',
        '2': '2',
        '3': '3',
        '6': '6',
        '7': '7'
      },
      colors: {
        tag: 'rgba(255, 255, 255, 0.11)'
      }
    },
  },
  plugins: [],
}
export default config
