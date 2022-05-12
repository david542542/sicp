import { e, clear } from "./Dom.js"
import * as Arr from "./Arr.js"

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

	splice(key) {
		return func => {
			this.rows = Arr.splice(this.rows, key, func)  // ⚠️
			this.render() // ⚠️
		}
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
          this.rows.map((data, key) => new Row(data, this.splice(key)).render()),
					e("tr", {},
						e("td", {}, null),
						e("td", {}, null),
						e("td", {}, null),
						e("td", {},
							e("input", {value: this.nameText, onInput: e => this.onInput(e)}),
							e("button", {onClick: e => this.onCreate(e)}, "create set")
						)
					)
				)
			)
		)
	}
}

class Row {
  constructor(data, splice) {
    this.data = data
		this.splice = splice
		this.elemText = ""
  }
	onInput(event) {
		this.elemText = event.target.value // ⚠️
	}
	onAdd(event) {
		this.splice(d => [d.add(this.elemText)]) // ⚠️
	}
	onClear(event) {
		this.splice(d => [d.clear()]) // ⚠️
	}
	onRemove(event) {
		this.splice(d => []) // ⚠️
	}
  render() {
    return e("tr", {},
      e("td", {}, this.data.name),
      e("td", {}, this.data.size),
      e("td", {}, `{ ${Array.from(this.data.elements).join(" ")} }`),
      e("td", {},
				e("input", {value: this.elemText, onInput: e => this.onInput(e)}),

				e("button", {onClick: e => this.onAdd(e)}, "add"),
				e("button", {onClick: e => this.onClear(e)}, "clear"),
				e("button", {onClick: e => this.onRemove(e)}, "remove")
			)
    )
  }
}

export { Table, Data }
