
import { Data } from "./Data.js"
const app = document.getElementById('app');
const initialData = [
    new Data("Fruits", new Set(["🍉","🍋","🥑"]))
];

// simulate application loading
setTimeout(() => app.innerHTML=`${initialData[0].name} (${initialData[0].size})`, 1000); 








// const simulateAppLoaded = () => {
//     // this will insert a rule into the style sheet, but it'd probably be better
//     // just to add a new class into the DOM or so and not change the style sheet
//     // document.styleSheets[0].insertRule('#app { color: green }', 0);
//     app.innerText = "Done!"
// }
// document.styleSheets[0].insertRule(
//     document.styleSheets[0].cssRules.length // puts it at the end, defaults to start
// );

// various ways to set the style
// These will all run asynchronously though, need to manage it
// setTimeout(() => app.style['background'] = 'red', 300);
// setTimeout(() => app.style.setProperty('border', '4px solid yellow'), 500);
// setTimeout(() => app.setAttribute("style", "background-color: lightgray; width: 500px; height: 300px;"), 700);


// Array.from(document.styleSheets[0].cssRules).forEach((elem, idx) => 
//     console.log(elem.selectorText, '-->', elem.style.cssText)
// );

// app.innerHTML
// app.innerText
// console.log(document.styleSheets[1].href);

// function getSpreadsheetByTitle(title) {
//     for (const sheet of document.styleSheets) {
//         if (title === sheet.title) {
//             console.log('*****', title);
//             return sheet;
//         }
//     }
// }
// console.log(getSpreadsheetByTitle('hello'));