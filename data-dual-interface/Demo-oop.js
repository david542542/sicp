import { Data } from "./LambdaData.js"

const dataObj = Data.of("fruits", new Set).add("🥑").add("🍋")

console.log("\n\n== oop ==")
console.log(dataObj.name, dataObj.elements, dataObj.size);