class Data {
    #name;
    #elements;

    constructor(name, elements = new Set) {
        this.#name = name;
        this.#elements = elements;
    }
    get name()     { return this.#name };
    get elements() { return this.#elements };
    get size()     { return this.#elements.size };

    setName(newName) {
        // the elements don't change,
        // so we can just pass those back as-is
        return new Data(newName, this.#elements);
    }
    clear() {
        // pass back the same name, but create a new empty set to pass
        return new Data(this.#name, new Set);
    }
    add(newElement) {
        // name stays the same but we do pass back
        // a NEW set of elements with the new element added
        //                          >> or new Set(elements).add(newElement) ?
        return new Data(this.#name, Set([...this.#elements, newElement])); 
    }
    remove(oldElement) {
        // We create a new set copied from the existing elements, then
        // remove the element we don't want and return that set
        // note it is mutating the set **within** this function.
        return new Data(this.#name, new Set(this.#elements).remove(oldElement));
    }
    delete() { 
        // Not sure about this -- what is the point of having a dcelete here?
        return undefined; 
    } 
}
export { Data };


