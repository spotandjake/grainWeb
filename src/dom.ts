/**
 * This modules contains all dom related helper functions to provide a minimal interface for the project.
 */
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
export const getHtml = (element: Element): string => {
  return element.innerHTML;
}
export const setHtmlUnsafe = (element: Element, html: string): void => {
  element.innerHTML = html;
}