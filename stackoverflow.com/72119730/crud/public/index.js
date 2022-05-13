import { render } from "preact";
import { Table, Data } from "./Table.js"

const initialData = [
  Data("fruits", new Set(["🍉","🍋","🥑"])),
  Data("vegetables", new Set(["🥦","🌶","🌽","🧄"]))
]

render(<Table rows={initialData} />, document.querySelector("#app"))
