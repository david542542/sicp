// data: (string, 'v set) -> 'v data
function data(name, elements) {
  // here we use a function closure to wrap the data object with positional arguments, like an array
  // we define positional accessors name(first), elements(second) below
  // renaming the function parameters so easier to keep track of
    const wraps = ignoreMe => ignoreMe(name, elements);
    return wraps;
    // return k => k(name, elements) // lambda
  }
  
  // name: 'v data -> string
  function name(functionEnclosingDataObject) {
    // console.log(functionEnclosingDataObject);
    return functionEnclosingDataObject((name, elements) => name) // selector -- const first = (a,b) => a;
  }
  
  // elements: 'v data -> 'v set
  function elements(functionEnclosingDataObject) {
    return functionEnclosingDataObject((name, elements) => elements) // selector -- const second = (a,b) => b;
  }
  
  /* EVERYTHING BELOW THIS LINE IS IDENTICAL TO Data.js */
  
  // add : ('v data, 'v) -> 'v data
  function add(dataObject, elem) {
    return data(name(dataObject), new Set(elements(dataObject)).add(elem))
  }
  
  // size: 'v data -> number
  function size(dataObject) {
    return elements(dataObject).size
  }
  
  class Data {
    constructor(t) { this.t = t }
    add(elem) { return new Data(add(this.t, elem)) }
    get name() { return name(this.t) }
    get elements() { return elements(this.t) }
    get size() { return size(this.t) }
    static of (name, elem) { return new Data(data(name, elem)) }
  }
  
  export { Data, data, add, name, elements, size }