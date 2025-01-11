export const theme = {
    colors: {
      dark: {
        primary: '#000000',
        secondary: '#121212',
        tertiary: '#080808',
      },
      white: {
        primary: '#ffffff',
        secondary: '#f8f8f8',
        tertiary: '#f2f2f2',
      },
      red: {
        primary: '#ff2626',
        secondary: '#f23333',
        tertiary: '#e92626',
      }
    },
    spacing: {
      xs: 4,
      sm: 8,
      md: 16,
      lg: 24,
      xl: 32,
    },
    borderRadius: {
      sm: 4,
      md: 8,
      lg: 12,
      xl: 16,
    }
  };
  

export type Theme = typeof theme;  