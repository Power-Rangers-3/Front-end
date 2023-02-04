import { FontWeight } from './fontWeight';

export const TYPOGRAPHY = {
  desktop: {
    heading1: {
      fontSize: '3rem',
      fontWeight: FontWeight.Bold,
      lineHeight: '3.9rem',
    },
    heading2: {
      fontSize: '2.5rem',
      fontWeight: FontWeight.Bold,
      lineHeight: '3.25rem',
    },
    heading3: {
      fontSize: '2rem',
      fontWeight: FontWeight.Bold,
      lineHeight: '2.6rem',
    },
    heading4: {
      fontSize: '1.75rem',
      fontWeight: FontWeight.Bold,
      lineHeight: '2.45rem',
    },
    heading5: {
      fontSize: '1.5rem',
      fontWeight: FontWeight.Bold,
      lineHeight: '1.95rem',
    },
    heading6: {
      fontSize: '1rem',
      fontWeight: FontWeight.Bold,
      lineHeight: '1.3rem',
    },
    extraLargeBold: {
      fontSize: '1.25rem',
      fontWeight: FontWeight.Bold,
      lineHeight: '1.875rem',
    },
    extraLargeRegular: {
      fontSize: '1.25rem',
      fontWeight: FontWeight.Regular,
      lineHeight: '1.875rem',
    },
    largeBold: {
      fontSize: '1.125rem',
      fontWeight: FontWeight.Bold,
      lineHeight: '1.63rem',
    },
    largeRegular: {
      fontSize: '1.125rem',
      fontWeight: FontWeight.Regular,
      lineHeight: '1.875rem',
    },
    normalBold: {
      fontSize: '1rem',
      fontWeight: FontWeight.Bold,
      lineHeight: '1.45rem',
    },
    normalRegular: {
      fontSize: '0.875rem',
      fontWeight: FontWeight.Regular,
      lineHeight: '1.138rem',
    },
  },

  tablet: {},

  mobile: {},
};

export const SPACING = {
  desktop: {
    L1: '4rem',
    L2: '3.5rem',
    L3: '3rem',
    L4: '2.5rem',
    L5: '2rem',
    L6: '1.5rem',
    L7: '1rem',
    L8: '0.75rem',
    L9: '0.5rem',
    L10: '0.25rem',
  },

  tablet: {
    L1: '3.5rem',
    L2: '3rem',
    L3: '2.5rem',
    L4: '2rem',
    L5: '1.5rem',
    L6: '1.25rem',
    L7: '1rem',
    L8: '0.75rem',
    L9: '0.5rem',
    L10: '0.25rem',
  },

  mobile: {
    L1: '3rem',
    L2: '2.5rem',
    L3: '2rem',
    L4: '1.75rem',
    L5: '1.5rem',
    L6: '1.25rem',
    L7: '1rem',
    L8: '0.75rem',
    L9: '0.5rem',
    L10: '0.25rem',
  },
};

const darkTheme = {
  colors: {
    fontBase: '#fff',
    fontHover: '#4C4C4C',
    fontDisable: '##666666',
    fontInvert: '#000',
    fontSecond: '#3C42BD',
    fontError: '#ee204d',
    background: '#fff',
    backgroundInvert: '#000',
    backgroundBright: '#E16455',
    backgroundButton: '#000',
    backgroundFields: '#F2F2F2',
    backgroundWarning: '#F8F1E4',
    backgroundButtonHover: '#B3B3B3',
    backgroundButtonDisabled: '#666666',
    borderBase: '#000',
    borderHover: '#B3B3B3',
    borderFocused: '#556EFE',
    borderDisable: '#666666',
    additional: '#556EFE',
  },
};

const lightTheme = {
  colors: {
    fontBase: '#000',
    fontHover: '#4C4C4C',
    fontDisable: '#B3B3B3',
    fontInvert: '#fff',
    fontSecond: '#3C42BD',
    fontError: '#ee204d',
    background: '#161616',
    backgroundInvert: '#000',
    backgroundBright: '#E16455',
    backgroundButton: '#fff',
    backgroundFields: '#F2F2F2',
    backgroundWarning: '#F8F1E4',
    backgroundButtonHover: '#4C4C4C',
    backgroundButtonDisabled: '#B3B3B3',
    borderBase: '#000',
    borderHover: '#4C4C4C',
    borderFocused: '#556EFE',
    borderWarning: '#FFAA00',
    borderDisable: '#B3B3B3',
    additional: '#556EFE',
  },
};

export const appTheme = {
  Dark: darkTheme,
  Light: lightTheme,
};
