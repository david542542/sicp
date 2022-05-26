// see Scheme code for implementation of various processes for times

class Abstract {
    constructor() {
        throw Error("Must implement in child");
    }
    method1() {
        throw Error("Must implement in child");
    }
}
class Something extends Abstract { // conform to typeclass / interface
    constructor() {
        //
    }
    method1() {
        //
    }
}
function reduce(iter, myFunc, acc) { ; // reduce is a fold Left-to-Right so a leftFold.
    if (iter.length === 0) return acc;
    let nextAcc = myFunc(acc, iter[0]); // this is the initialization
    return reduce(iter.slice(1,), myFunc, nextAcc);
}
const foldLeft =  reduce;
const foldRight = reduce([...iter].reverse(), myFunc, acc)


console.log(foldLeft([1,2,3], (a,b) => a+b, 47));

// function unfold(func_of_two_vars, start) {

// }
let arr = [1,2,3];
console.log(arr.reduce((a,b) => a+b, 200));
if loopNum == 0 ? a = 200 : a=arr[0]
let a = 200, b=1, 200+1 
// function times2(a,b) {
//     if (b === 0)
//         return 0;
//     if (b === 1) 
//         return a;
//     if (b%2 === 1)
//         return a + times2(a, b-1);
//     else
//         return 2 * times2(a, b/2);
// }
// function ourSetTimeOut(f, timeout) {
//     const t0 = Date.now();
//     while (Date.now() - t0 < timeout) {
//         continue;
//     }
//     return f();
// }
// setTimeout(() => console.log("Hello"), 4000);
// // console.log(times2(4,1));

// // console.log(times2(1,4));
// // console.log(times2(0,9));
// // console.log(times2(9,0));
// // console.log(times2(2,5));
// // console.log(times2(3,2));
// // console.log(times2(8,4));
// // console.log(times2(4,9));
// // console.log(times2(9,7));

// console.log("111...");
// ourSetTimeOut(() => console.log(times2(1,4)), 2000);
// console.log("222...");
// // setTimeout(
// //     () => console.log(times2(1,4)),
// //     5000
// // ); // runs synchronously, but the evaluation
// // console.log("333...");
