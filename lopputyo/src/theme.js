import { extendTheme } from "@chakra-ui/react";
import "@fontsource/inter"
import "@fontsource/inter/700.css";
import '@fontsource-variable/roboto-mono';


const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const colors = {

  kuplassa: {
    background: "#f6f3f0",
    kupla1: "#CEDFE6",
    kupla2: "#ADD1E0",
    kupla3: "98B6CA"

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
  mono: "'Roboto Mono Variable', monospace"
};

const components = {

  Avatar: {
    baseStyle: {
      borderColor: "gray.200",
      borderWidth: "2px",
    },
  },
  Text: {
    baseStyle: {
      color: "#000000",
      fontSize: "13px",
      letterSpacing: "-0.1px"
    },
  },
};

const breakpoints = {
  sm: "320px",    // Small mobile
  md: "768px",    // Tablet
  lg: "1024px",   // Laptop
  xl: "1280px",   // Desktop
  "2xl": "1670px" // Large desktop
};

const textStyles = {
    data: {
        fontSize: "14px",
        fontWeight: "700",
        lineHeight: "1.5",
        letterSpacing: "-0.5px"
    },
}


const styles = {
  global: {
    'html, body': {
      backgroundColor: 'kuplassa.background', // Using your custom color
    },
  },
};

const theme = extendTheme({ config, colors, fonts, components, textStyles, styles, breakpoints});

export default theme;
