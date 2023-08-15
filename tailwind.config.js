/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      { light: { ...require("daisyui/src/theming/themes")["[data-theme=winter]"] } },
      { dark: { ...require("daisyui/src/theming/themes")["[data-theme=night]"] } }
    ]
  }
}

