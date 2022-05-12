import { e, clear } from "./Dom.js"

// Data, persistent data structure, tailored to meet our app's needs
function Data(name = "", elements = new Set) {
	return {
		name,                // state
		elements,            // state
		size: elements.size, // derived state
		setName: (newName = "") => Data(newName, elements),     // immutable update name
		add: (elem) => Data(name, new Set(elements).add(elem)), // immutable add element
		clear: () => Data(name, new Set)                        // immutable clear
	}
}

class Table {
	constructor(elem, rows = []) {
    this.elem = elem
		this.rows = rows
		this.nameText = ""
	}

	onInput(event) {
		this.nameText = event.target.value // ⚠️
	}

	onCreate(event) {
		this.rows.push(Data(this.nameText, new Set)) // ⚠️
    this.nameText = "" // ⚠️
		this.render() // ⚠️
	}

	render() {
		clear(this.elem) // ⚠️
		this.elem.appendChild(
			e("table", {},
				e("thead", {},
					e("tr", {},
						e("td", {}, "Name"),
						e("td", {}, "Size"),
						e("td", {}, "Elements"),
						e("td", {}, "Actions")
					)
				),
				e("tbody", {},
          this.rows.map(data => new Row(data).render()),
					e("tr", {},
						e("td", {}, null),
						e("td", {}, null),
						e("td", {}, null),
						e("td", {},
							e("input", {value: this.nameText, onInput: e => this.onInput(e) }),
							e("button", {onClick: e => this.onCreate(e)}, "create set")
						)
					)
				)
			)
		)
	}
}

class Row {
  constructor(data) {
    this.data = data
  }
  render() {
    return e("tr", {},
      e("td", {}, this.data.name),
      e("td", {}, this.data.size),
      e("td", {}, `{ ${Array.from(this.data.elements).join(" ")} }`),
      e("td", {}, "...")
    )
  }
}

export { Table, Data }
