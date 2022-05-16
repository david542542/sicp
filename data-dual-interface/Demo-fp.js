import { data, add, name, elements, size } from "./Data.js"

const t = add(add(data("fruits", new Set), "🥑"), "🍋")

console.log("\n\n== fp ==")
console.log(name(t), elements(t), size(t))