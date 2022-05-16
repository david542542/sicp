import { Data } from "./Data.js"

const t = Data.of("fruits", new Set).add("🥑").add("🍋")

console.log("\n\n== oop ==")
console.log(t.name(), t.elements(), t.size())