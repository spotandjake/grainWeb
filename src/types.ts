export type Option<a> = undefined | a;
export type Result<ok, err> = 
  | { tag: 'ok', val: ok } 
  | { tag: 'err', val: err };