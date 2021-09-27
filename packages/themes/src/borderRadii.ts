import tokens from '@shopify/polaris-tokens';
import { helpers } from 'rn-next-dev';
const { px, pxToNum } = helpers;

export const borderRadii = {
  none: 0,
  s: px(pxToNum(tokens.spacingBaseTight)),
  m: px(pxToNum(tokens.spacingBase)),
  l: px(pxToNum(tokens.spacingLoose)),
  xl: px(pxToNum(tokens.spacingExtraLoose)),
  full: 300,
};
