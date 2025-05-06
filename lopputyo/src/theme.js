// theme.js
import { extendTheme } from "@chakra-ui/react";
import "@fontsource/inter"
import "@fontsource/inter/700.css";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const colors = {
  brand: {
    500: "#db145d", // Instagram-like pink
  },
  gray: {
    50: "#ffffff",
    100: "#f7f7f7",
    200: "#e1e1e1",
    300: "#cfcfcf",
    400: "#b1b1b1",
    500: "#9e9e9e",
    600: "#7e7e7e",
    700: "#626262",
    800: "#515151",
    900: "#3b3b3b",
  },
};

const fonts = {
  heading: "'Inter', sans-serif",
  body: "'Inter', sans-serif",
};

const components = {
  Button: {
    baseStyle: {
      borderRadius: "md",
      fontWeight: "medium",
    },
    variants: {
      solid: {
        bg: "brand.500",
        color: "white",
        _hover: {
          bg: "brand.600",
        },
      },
    },
  },
  Avatar: {
    baseStyle: {
      borderColor: "gray.200",
      borderWidth: "2px",
    },
  },
  Text: {
    baseStyle: {
      color: "#000000",
    },
  },
};

const textStyles = {
    data: {
        fontSize: "14px",
        fontWeight: "700",
        lineHeight: "1.5",
        letterSpacing: "-0.5px"
    }
}

const theme = extendTheme({ config, colors, fonts, components, textStyles });

export default theme;
