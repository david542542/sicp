/*
byo jquery
https://stackoverflow.com/a/42985138/633183

vanilla todo
https://stackoverflow.com/a/63969322/633183

vanilla war
https://stackoverflow.com/a/66908003/633183

vanilla calc
https://stackoverflow.com/a/66683995/633183

vanilla dice betting
https://stackoverflow.com/a/58327112/633183
*/


import { Table, Data } from "./Table.js"

const initialData = [
	Data("fruits", new Set(["🍉","🍋","🥑"])),
	Data("vegetables", new Set(["🥦","🌶","🌽","🧄"]))
]

const t = new Table(document.querySelector("#app"), initialData)
t.render()
