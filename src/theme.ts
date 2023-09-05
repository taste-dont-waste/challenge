import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    challenge: {
      corporate: string;
      primary: string;
      secondary: string;
      accent: string;
      error: string;
      info: string;
      warning: string;
      success: string;
      darkGreen: string;
      darkInfo: string;
      lightSuccess: string;
      background: string;
      black42: string;
      black: string;
      lightYellow: string;
    };
  }

  // allow configuration using `createTheme`
  interface ThemeOptions {
    challenge?: {
      corporate?: string;
      primary?: string;
      secondary?: string;
      accent?: string;
      error?: string;
      info?: string;
      warning?: string;
      success?: string;
      darkGreen?: string;
      darkInfo?: string;
      lightSuccess?: string;
      background?: string;
      black42?: string;
      black?: string;
      lightYellow?: string;
    };
  }
}

const CHALLENGE_COLORS = {
  corporate: "#0072C6",
  primary: "#009EDC",
  secondary: "#5BC0DE",
  accent: "#82B1FF",
  error: "#D9534F",
  info: "#E5F6FD",
  warning: "#FFD300",
  success: "#2ECC71",
  darkGreen: "#1E4620",
  darkInfo: "#014361",
  lightSuccess: "#EDF7ED",
  lightYellow: "#FFF7CC",
  background: "#F7F7F7",
  black42: "#8F8F8F",
  black: "#333333",
};

export const appTheme = createTheme({
  challenge: CHALLENGE_COLORS,
  typography: {
    fontFamily: "Lato",
  },
  palette: {
    primary: {
      light: CHALLENGE_COLORS.accent,
      main: CHALLENGE_COLORS.primary,
      dark: CHALLENGE_COLORS.corporate,
    },
    success: {
      light: CHALLENGE_COLORS.lightSuccess,
      main: CHALLENGE_COLORS.success,
      dark: CHALLENGE_COLORS.darkGreen,
    },
    info: {
      main: CHALLENGE_COLORS.info,
      dark: CHALLENGE_COLORS.darkInfo,
    },
    error: {
      main: CHALLENGE_COLORS.error,
    },
    warning: {
      main: CHALLENGE_COLORS.warning,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderColor: CHALLENGE_COLORS.black42,
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        outlinedSuccess: {
          backgroundColor: CHALLENGE_COLORS.lightSuccess,
          borderColor: CHALLENGE_COLORS.darkGreen,
        },
        outlinedInfo: {
          backgroundColor: CHALLENGE_COLORS.info,
          borderColor: CHALLENGE_COLORS.darkInfo,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: CHALLENGE_COLORS.success,
          fontPalette: "light",
        },
        colorSecondary: {
          backgroundColor: CHALLENGE_COLORS.accent,
          fontPalette: "light",
        },
      },
    },
  },
});
