import { createTheme } from '@shopify/restyle';
import { borderRadii } from './borderRadii';
import { breakpoints } from './breakpoints';
import { cardVariants } from './cardVariants';
import { colorsTheme, ColorsTheme } from './colors';
import { spacingTheme, SpacingTheme } from './spacing';
import { textVariants } from './textVariants';
import { zIndices } from './zIndices';

// https://github.com/Shopify/polaris-react/blob/main/documentation/Color%20system.md
// https://shopify.github.io/polaris-tokens/

const lightTheme = createTheme({
  spacing: spacingTheme,
  colors: colorsTheme,
  breakpoints,
  borderRadii,
  cardVariants,
  textVariants,
  zIndices,
});

type AppTheme = typeof lightTheme;

const darkTheme: AppTheme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
  },
};

export { darkTheme, lightTheme, spacingTheme };
export type { ColorsTheme, AppTheme, SpacingTheme };
