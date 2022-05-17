// data: (string, 'v set) -> 'v data
function data(name, elements) {
    return [name, elements] // array
  }
  
// name: 'v data -> string
function name(dataObject) {
  return dataObject[0] // select first element -- the name
}

// elements: 'v data -> 'v set
function elements(dataObject) {
  return dataObject[1] // select second element -- the set
}
  
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