/**
 * This module contains the interface exposed to grain via the wit bindings generated through jco.
 */
import { type Option, type Result } from './types';
import { mapOption } from './utils';
import * as Dom from './dom';

export class WebElement {
  private element: Element;
  constructor(element: Element) {
    this.element = element;
  }
  // Queries
  public query(selector: string): Option<WebElement> {
    const queryElement = Dom.query(this.element, selector);
    return mapOption(queryElement, (v) => new WebElement(v));
  }
  // Content
  public getText(): Option<string> {
    return Dom.getText(this.element);
  }
  public setText(text: string): this {
    Dom.setText(this.element, text);
    return this;
  }
  public getHtml(): string {
    return Dom.getHtml(this.element);
  }
  public setHtmlUnsafe(html: string): this {
    Dom.setHtmlUnsafe(this.element, html);
    return this;
  }
  public getValue(): Option<string> {
    return Dom.getValue(this.element);
  }
  public setValue(value: string): Result<undefined, undefined> {
    return Dom.setValue(this.element, value);
  }
  // Nodes
  public parent(): Option<WebElement> {
    const parent = Dom.getParent(this.element);
    return mapOption(parent, (v) => new WebElement(v))
  }
  public children(): Array<WebElement> {
    return Dom.getChildren(this.element).map((v: Element) => new WebElement(v));
  }
  public nextSibling(): Option<WebElement> {
    const nextSibling = Dom.getNextSibling(this.element);
    return mapOption(nextSibling, (v) => new WebElement(v));
  }
  public previousSibling(): Option<WebElement> {
    const previousSibling = Dom.getPreviousSibling(this.element);
    return mapOption(previousSibling, (v) => new WebElement(v));
  }
  public appendChild(child: WebElement): this {
    Dom.appendChild(this.element, child.element);
    return this;
  }
  public prependChild(child: WebElement): this {
    Dom.prependChild(this.element, child.element);
    return this;
  }
  public removeChild(child: WebElement): this {
    Dom.removeChild(this.element, child.element);
    return this;
  }
  public insertAfter(sibling: WebElement): boolean {
    return Dom.insertAfter(this.element, sibling.element);
  }
  public insertBefore(sibling: WebElement): boolean {
    return Dom.insertBefore(this.element, sibling.element);
  }
  // Css
  public addClass(className: string): this {
    Dom.addClass(this.element, className);
    return this;
  }
  public removeClass(className: string): this {
    Dom.removeClass(this.element, className);
    return this;
  }
  public toggleClass(className: string): boolean {
    return Dom.toggleClass(this.element, className);
  }
  public hasClass(className: string): boolean {
    return Dom.hasClass(this.element, className);
  }
  public getClassList(): Array<string> {
    return Dom.getClassList(this.element);
  }
  // Style
  public setStyleProperty(property: string, value: string): boolean {
    return Dom.setStyleProperty(this.element, property, value);
  }
  // Attributes
  public getHref(): Option<string> {
    return Dom.getHref(this.element);
  }
  public setHref(href: string): boolean {
    return Dom.setHref(this.element, href);
  }
  public getAttribute(name: string): Option<string> {
    return Dom.getAttribute(this.element, name);
  }
  public setAttribute(name: string, value: string): void {
    Dom.setAttribute(this.element, name, value);
  }
  // Generic
  public getTagName(): string {
    return this.element.tagName;
  }
  public print(): void {
    console.log(this.element);
  }
}

// Creation
export const createNode = (tag: string): WebElement => {
  return new WebElement(document.createElement(tag));
}
// Queries
export const query = (selector: string): Option<WebElement> => {
  const queryElement = Dom.query(document, selector);
  return mapOption(queryElement, (v) => new WebElement(v));
}