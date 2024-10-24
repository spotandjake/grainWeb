/**
 * This modules contains all dom related helper functions to provide a minimal interface for the project.
 */
import { type Option, type Result } from './types';
import { toOption, ok, err } from './utils';

export const query = (
  parent: ParentNode,
  selector: string
): Option<Element> => {
  return toOption(parent.querySelector(selector));
};
export const getText = (element: Element): Option<string> => {
  return toOption(element.textContent);
};
export const setText = (element: Element, text: string): void => {
  element.textContent = text;
};
export const getHtml = (element: Element): string => {
  return element.innerHTML;
};
export const setHtmlUnsafe = (element: Element, html: string): void => {
  element.innerHTML = html;
};
export const getValue = (element: Element): Option<string> => {
  if (element instanceof HTMLInputElement) return element.value;
  else return undefined;
};
export const setValue = (
  element: Element,
  value: string
): Result<undefined, undefined> => {
  if (element instanceof HTMLInputElement) {
    element.value = value;
    return ok(undefined);
  } else {
    return err(undefined);
  }
};
export const getParent = (element: Element): Option<Element> => {
  return toOption(element.parentElement);
};
export const getChildren = (element: Element): Element[] => {
  return Array.from(element.children);
};
export const getNextSibling = (element: Element): Option<Element> => {
  return toOption(element.nextElementSibling);
};
export const getPreviousSibling = (element: Element): Option<Element> => {
  return toOption(element.previousElementSibling);
};
export const appendChild = (element: Element, child: Element): void => {
  element.append(child);
};
export const prependChild = (element: Element, child: Element): void => {
  element.prepend(child);
};
export const removeChild = (element: Element, child: Element): void => {
  element.removeChild(child);
};
export const insertAfter = (element: Element, sibling: Element): boolean => {
  try {
    element.after(sibling);
    return true;
  } catch (e) {
    return false;
  }
};
export const insertBefore = (element: Element, sibling: Element): boolean => {
  try {
    element.before(sibling);
    return true;
  } catch (e) {
    return false;
  }
};
export const addClass = (element: Element, className: string): void => {
  element.classList.add(className);
};
export const removeClass = (element: Element, className: string): void => {
  element.classList.remove(className);
};
export const toggleClass = (element: Element, className: string): boolean => {
  return element.classList.toggle(className);
};
export const hasClass = (element: Element, className: string): boolean => {
  return element.classList.contains(className);
};
export const getClassList = (element: Element): string[] => {
  return Array.from(element.classList);
};
export const setStyleProperty = (
  element: Element,
  propertyName: string,
  value: string
): boolean => {
  if (element instanceof HTMLElement) {
    element.style.setProperty(propertyName, value);
    return true;
  } else {
    return false;
  }
};
export const getHref = (element: Element): Option<string> => {
  if (element instanceof HTMLAnchorElement) return element.href;
  else return undefined;
};
export const setHref = (element: Element, href: string): boolean => {
  if (element instanceof HTMLAnchorElement) {
    element.href = href;
    return true;
  } else {
    return false;
  }
};
export const getAttribute = (
  element: Element,
  attr: string
): Option<string> => {
  return toOption(element.getAttribute(attr));
};
export const setAttribute = (
  element: Element,
  attr: string,
  value: string
): void => {
  element.setAttribute(attr, value);
};
