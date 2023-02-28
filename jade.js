function createElement(type, props, ...children) {
  if (typeof type === "function") return type();
  const childElements = children.reduce((acc, child) => {
    if (typeof child === "object") acc.push(child);
    else if (typeof child === "string")
      acc.push(createElement("text", { content: child }));
    return acc;
  }, []);

  return {
    type,
    props: {
      ...props,
      children: childElements,
    },
  };
}

function render(element, container) {
  let currElement;
  if (element.type === "text")
    currElement = document.createTextNode(element.props.content);
  else {
    currElement = document.createElement(element.type);
    // recursively render children
    element.props.children.forEach((childElem) => {
      render(childElem, currElement);
    });
    // add props
    Object.keys(element.props).forEach((prop) => {
      if (prop === "children") return;
      currElement.setAttribute(parseProp(prop), element.props[prop]);
    });
  }

  container.appendChild(currElement);
}

function parseProp(prop) {
  switch (prop) {
    case "className":
      return "class";
    default:
      return prop;
  }
}

export { createElement, render };
