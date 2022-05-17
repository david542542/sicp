import { data, add, name, elements, size } from "./LambdaData.js"

const dataObj = add(add(data("fruits", new Set), "🥑"), "🍋");

console.log("\n\n== fp** ==");
console.log(name(dataObj), elements(dataObj), size(dataObj));