const VOID_ELEMENTS = new Set([
  "area", "base", "br", "col", "embed", "hr", "img", "input",
  "link", "meta", "param", "source", "track", "wbr"
])

function e(tag, attributes = {}, ...children) {
  // tag
  const elem = document.createElement(tag)
  // attributes
  for (const [attr, value] of Object.entries(attributes))
    setAttribute(elem, attr, value)
  // void element?
  if (VOID_ELEMENTS.has(tag)) return elem
  //children
  for (const child of eFromChildren(children))
    elem.appendChild(child)
  // done
  return elem
}

function setAttribute(elem, attr, value) {
  if (attr.startsWith("on"))
    addEventListener(elem, attr, value)
  else
    elem.setAttribute(attr, value)
}

function addEventListener(elem, eventType, listener) {
  const [_, event] = eventType.split(/^on/)
  elem.addEventListener(event.toLowerCase(), listener)
}

function* eFromChildren(children) {
  for (const child of children.flat(Infinity))
    switch (child?.constructor) {
      case undefined:
        continue
      case String: case Number:
        yield document.createTextNode(child)
        continue
      default:
        yield child
    }
}

function clear(elem) {
  while(elem.hasChildNodes())
    elem.removeChild(elem.lastChild)
}

export { e, clear }
