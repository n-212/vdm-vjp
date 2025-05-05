import { createSystem, defaultBaseConfig, defineConfig } from "@chakra-ui/react"

const customConfig = defineConfig({
  theme: {
    colors: {
      brand: {
        50: "#f0f2f5",
        100: "#e4e6eb",
        200: "#d8dade",
        300: "#ccd0d5",
        400: "#bec3c9",
        500: "#8e8e93", // Neutral gray tone like Instagram
        600: "#606770",
        700: "#444950",
        800: "#1c1e21",
        900: "#050505",
      },
      accent: {
        500: "#3897f0", // Instagram blue
      },
    },
    fonts: {
      heading: "'Helvetica Neue', sans-serif",
      body: "'Helvetica Neue', sans-serif",
    },
    components: {
      Button: {
        baseStyle: {
          fontWeight: "medium",
          borderRadius: "full",
        },
        variants: {
          solid: {
            bg: "accent.500",
            color: "white",
            _hover: {
              bg: "accent.600",
            },
          },
        },
      },
    },
  },
})

export const system = createSystem(defaultBaseConfig, customConfig)
