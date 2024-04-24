/** @type {import('tailwindcss').Config} */
export default {
  daisyui: {
    themes: [
      { light: { ...require("daisyui/src/theming/themes")["autumn"] } },
      { dark: { ...require("daisyui/src/theming/themes")["sunset"] } }
    ]
  }
}
