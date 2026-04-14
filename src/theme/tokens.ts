export const tokens = {
  color: {
    bg: {
      page: '#F5F8FD',
      card: '#FFFFFF',
    },
    text: {
      primary: '#111416',
      secondary: '#57626F',
      inverse: '#FFFFFF',
    },
    brand: {
      primary: '#6115CD',
    },
    like: {
      active: '#FF2B75',
      textActive: '#FFEAF1',
    },
    action: {
      bg: '#EFF2F7',
    },
    overlay: 'rgba(0,0,0,0.5)',
    skeleton: 'rgba(238,239,241,0.8)',
    coverFade: '#FFFFFF',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    xxl: 32,
  },
  radii: {
    card: 12,
    button: 14,
    action: 9999,
    avatar: 9999,
  },
  typography: {
    title: {
      fontFamily: 'Manrope_700Bold',
      fontSize: 18,
      lineHeight: 26,
    },
    author: {
      fontFamily: 'Manrope_700Bold',
      fontSize: 15,
      lineHeight: 20,
    },
    body: {
      fontFamily: 'Manrope_500Medium',
      fontSize: 15,
      lineHeight: 20,
    },
    action: {
      fontFamily: 'Manrope_700Bold',
      fontSize: 13,
      lineHeight: 18,
    },
    button: {
      fontFamily: 'Manrope_600SemiBold',
      fontSize: 15,
      lineHeight: 26,
    },
  },
  size: {
    avatar: 40,
    actionIcon: 24,
    buttonHeight: 42,
  },
} as const;

export type Tokens = typeof tokens;
