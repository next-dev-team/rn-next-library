import tokens from '@shopify/polaris-tokens';
import { helpers } from 'rn-next-dev';
const { pxToNum, px } = helpers;

export const spacingTheme = {
  none: tokens.spacingNone,
  xxs: pxToNum(tokens.spacingExtraTight),
  xs: pxToNum(tokens.spacingTight),
  s: pxToNum(tokens.spacingBaseTight),
  m: pxToNum(tokens.spacingBase),
  l: pxToNum(tokens.spacingLoose),
  xl: pxToNum(tokens.spacingExtraLoose),
  xxl: px(2) * pxToNum(tokens.spacingExtraLoose),
};

export type SpacingTheme = keyof typeof spacingTheme;
