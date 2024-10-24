import { type Option, type Result } from './types';
export const toOption = <A>(value: null | A): Option<A> => {
  if (value == null) return undefined;
  else return value;
};
export const mapOption = <A, B>(
  value: Option<A>,
  map: (v: A) => B
): Option<B> => {
  if (value != undefined) return map(value);
  else return undefined;
};
export const ok = <Ok, Err>(ok: Ok): Result<Ok, Err> => {
  return { tag: 'ok', val: ok };
};
export const err = <Ok, Err>(err: Err): Result<Ok, Err> => {
  return { tag: 'err', val: err };
};
