import { useState } from "preact/hooks"
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

// Table
function Table({ rows:initRows = [] }) {
	const [rows, setRows] = useState(initRows)
	const [nameText, setNameText] = useState("")
	const onInput = event => setNameText(event.target.value)
	const onCreate = event => setRows([...rows, Data(nameText, new Set)])
	const splice = key => func => setRows(Arr.splice(rows, key, func))
	return <table>
		<thead>
			<th>Name</th>
			<th>Size</th>
			<th>Elements</th>
			<th>Actions</th>
		</thead>
		<tbody>
			{rows.map((data, key) =>
				<Row key={key} data={data} splice={splice(key)} />
			)}
			<tr>
				<td></td>
				<td></td>
				<td></td>
				<td>
					<input value={nameText} onInput={onInput} placeholder="New set name..." />
					<button children="create set" onClick={onCreate} />
				</td>
			</tr>
		</tbody>
	</table>
}

function Row({ data, splice }) {
	const [elemText, setElemText] = useState("")
	const onInput = event => setElemText(event.target.value)
	const onAdd = event => splice(data => [data.add(elemText)])
	const onClear = event => splice(data => [data.clear()])
	const onRemove = event => splice(data => [])
	return <tr>
		<td><Name name={data.name} splice={splice} /></td>
		<td>{data.size}</td>
		<td>{`{ ${Array.from(data.elements).join(" ")} }`}</td>
		<td>
			<input value={elemText} onInput={onInput} placeholder="Element to add..." />
			<button children="add" onClick={onAdd} />
			<button children="clear" onClick={onClear} />
			<button children="remove" onClick={onRemove} />
		</td>
	</tr>
}

function Name({ name, splice }) {
	const [editing, setEditing] = useState(false)
	const [nameText, setNameText] = useState(name)
	const onInput = event => { setNameText(event.target.value) }
	const onEdit = event => { setEditing(true); setNameText(name) }
	const onCancel = event => { setEditing(false); setNameText(name) }
	const onCommit = event => { setEditing(false); splice(data => [data.setName(nameText)]) }
	return editing
	  ? <>
				<input value={nameText} onInput={onInput} placeholder="Enter new name..." />
				<button children="✅" onClick={onCommit} />
				<button children="❌" onClick={onCancel} />
			</>
		: <span children={name} onClick={onEdit} style={{color: "blue", cursor: "pointer"}} />
}

export { Table, Data }
