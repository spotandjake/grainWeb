import { type Option } from './types';
export const toOption = <A>(value: null | A): Option<A> => {
  if (value == null) return undefined;
  else return value;
}
export const mapOption = <A, B>(value: Option<A>, map: (v: A) => B): Option<B> => {
  if (value != undefined) return map(value);
  else return undefined;
}