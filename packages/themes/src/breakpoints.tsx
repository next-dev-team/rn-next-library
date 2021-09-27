import { helpers } from 'rn-next-dev';

export const breakpoints = {
  phone: 0,
  tablet: helpers.px(768),
};
export type Breakpoints = typeof breakpoints;
