// data: (string, 'v set) -> 'v data
function data(name, elements) {
    return [name, elements] // array
  }
  
  // name: 'v data -> string
  function name(t) {
    return t[0] // select first element
  }
  
  // elements: 'v data -> 'v set
  function elements(t) {
    return t[1] // select second element
  }
  
  // add : ('v data, 'v) -> 'v data
  function add(t, elem) {
    return data(
      name(t),
      new Set(elements(t)).add(elem)
    )
  }
  
  // size: 'v data -> number
  function size(t) {
    return elements(t).size
  }
  
  class Data {
    constructor(t) { this.t = t }
    add(elem) { return new Data(add(this.t, elem)) }
    name() { return name(this.t) }
    elements() { return elements(this.t) }
    size() { return size(this.t) }
    static of (name, elem) { return new Data(data(name, elem)) }
  }
  
  export { Data, data, add, name, elements, size }