// ❓ Can we write reduceRight​ or foldRight​ to have O(n) behavior without mutating or copying the input list?
const car = iter => iter[0];
const cdr = iter => iter.slice(1);
const concatFunc = (a,b) => a+b

function foldRight(iter, myFunc, acc) { ; // reduce is a fold Left-to-Right so a leftFold.
    if (iter.length === 0) return acc;
    return reduce(cdr(iter), myFunc, myFunc(acc, car(iter)));
}

reduce(["a", "b", "c"], concatFunc, "x");
reduce(["b", "c"], concatFunc, concatFunc("x", "a"))
reduce(["b", "c"], concatFunc, "xa")
reduce(["c"], concatFunc, concatFunc("xa", "b"))
reduce(["c"], concatFunc, "xab")
reduce([], concatFunc, concatFunc("xab", "c"))
reduce([], concatFunc, "xabc")
"xabc"


function rRight(iter, myFunc, acc) {
    if (iter.length === 0) return acc;
    return myFunc(rRight(iter.slice(1), myFunc, acc), iter[0])
}
// fold-right use cases: 
// "foo.bar.hello"  100   {foo: {bar: {hello: 100}}}
// {hello: 100}
// {bar: <acc>}
// {foo: <acc>}

// makeNestedObj("foo.bar.hello", 100, null)
function makeNestedObj(keys, value) {
    return (keys.length === 0) ? 
        value : 
        {[keys[0]]: makeNestedObj(keys.slice(1), value)};
    // const createObj = (value, key) => ({[key]: value});
    // return createObj(makeNestedObj(keys.slice(1), value), keys[0]);
}
console.log(makeNestedObj("foo.bar.hello".split("."), 100, null));



const concatFunc = (a,b) => a+b
rRight(["a", "b", "c"], concatFunc, "x");
concatFunc(rRight(["a", "b", "c"].slice(1), concatFunc, "x"), ["a", "b", "c"][0])
concatFunc(rRight(["b", "c"], concatFunc, "x"), "a")
concatFunc(myFunc(rRight(iter.slice(1), myFunc, acc), iter[0]), "a")
concatFunc(concatFunc(rRight(["b", "c"].slice(1), concatFunc, "x"), ["b", "c"][0]), "a")
concatFunc(concatFunc(rRight(["c"], concatFunc, "x"), "b"), "a")
concatFunc(concatFunc(concatFunc(rRight([], concatFunc, "x"), "c"), "b"), "a")
concatFunc(concatFunc(concatFunc("x", "c"), "b"), "a")
concatFunc(concatFunc("xc", "b"), "a")
concatFunc("xcb", "a")
"xcba"







// [1,[2,[3,[4,[5,null]]]]]     0     myFunc(0,5)
function reduceRight(iter, myFunc, acc, idx=0) {
    if (iter.length === idx) return acc;
    let elem = iter[iter.length-1-idx];
    console.log(`idx: ${idx} | elem: ${elem}`);
    let nextAcc = myFunc(acc, elem);
    return reduceRight(iter, myFunc, nextAcc, idx+1);
}
console.log(reduceRight(["a", "b", "c"], (a,b) => a+b, "x"));



function reduceRight(iter, myFunc, acc, idx=iter.length) {
    if (!idx) return acc;
    let elem = iter[idx-1];
    let nextAcc = myFunc(acc, elem);
    return reduceRight(iter, myFunc, nextAcc, idx-1);
}
// function reduceLeft(iter, myFunc, acc, idx=0) {
//     if (iter.length === idx) return acc;
//     let elem = iter[idx];
//     console.log(idx, elem);
//     let nextAcc = myFunc(acc, elem);
//     return reduceLeft(iter, myFunc, nextAcc, idx+1);
// }

console.log(
    reduceRight([1,2], (a,b) => a+b, 0),
    '-----',
    // reduceLeft([1,2], (a,b) => a/b, 0)
);


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
