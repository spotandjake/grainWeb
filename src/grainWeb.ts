/**
 * This module contains the interface exposed to grain via the wit bindings generated through jco.
 */
import { type Option } from './types';
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
  // Children
  // Debug
  public print() {
    console.log(this.element);
  }
}

export const query = (selector: string): Option<WebElement> => {
  const queryElement = Dom.query(document, selector);
  return mapOption(queryElement, (v) => new WebElement(v));
}