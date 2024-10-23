export class HtmlElement {
  constructor(node) {
    this.node = node;
  }

  setText(text) {
    this.node.innerText = text;
  }
}

export const createParagraph = (text) => {
  console.log("Creating Paragraph");
  const node = document.createElement('p');
  node.innerText = text;
  return new HtmlElement(node);
}
export const addDomNode = (parent, htmlElement) => {
  console.log(parent);
  console.log(htmlElement);
  document.querySelector(parent).appendChild(htmlElement.node);
}

export const add = (a, b) => {
  return a + b;
}