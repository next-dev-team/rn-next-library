import omit from 'lodash/omit';
import * as dimension from './dimension';
import * as object from './object';
import * as string from './string';

export const helpers = {
  ...dimension,
  ...object,
  ...string,
  omit,
};
