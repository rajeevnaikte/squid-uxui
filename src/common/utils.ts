import { UXCode } from '../types';
import { kebabCase } from 'lodash';

export const getCustomElementName = (ux: UXCode | string) => {
  if (typeof ux === 'string') return kebabCase(ux);
  return kebabCase(ux.name);
}