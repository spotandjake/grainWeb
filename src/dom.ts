import { type Option } from './types';
import { toOption } from './utils';

export const query = (parent: ParentNode, selector: string): Option<Element> => {
  return toOption(parent.querySelector(selector));
}
export const getText = (element: Element): Option<string> => {
  return toOption(element.textContent);
}
export const setText = (element: Element, text: string): void => {
  element.textContent = text;
}