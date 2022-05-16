function makeChange(amount, coins, verbose) {
    console.log(`Changing ${amount}...`);
    return (function _makeChange(amount, coins, verbose, debugLevel=0, debugCoinsUsed=[]) {
        if (verbose || amount===0)
            console.log(`${' '.repeat(debugLevel)}Amount: ${amount}, AvailableCoins: ${coins}${ amount===0? ' ==> ['+ debugCoinsUsed + ']' :''}`);
        return (amount === 0)  ? 1 :
           (amount < 0)    ? 0 :
           (!coins.length) ? 0 :
                             _makeChange(amount-coins[0], coins, verbose, debugLevel+1, [...debugCoinsUsed, coins[0]]) 
                           + _makeChange(amount, coins.slice(1), verbose, debugLevel+1, [...debugCoinsUsed]);
    })(amount, coins, verbose);
}
// console.log(
//     makeChange(10, [5,1], false)
// );


const fRecursive = n => (function fIterative(a, b, c, n) {
    return (n===0) ? c : fIterative(a+2*b+3*c, a, b, n-1)
})(2,1,0,n);

console.log(fRecursive(5));








// function fnWrapper(fn, verbosity=false) {
//     return function(...rest) {
//         if (verbosity) console.log(`Calling "${fn.name}(${rest})"`);
//         console.log(arguments);
//         const res = fn(...rest); // possible to add debugging **within** this wrapped function?
//         if (verbosity) console.log('==>', res)
//         return res;
//     }
// }
// // const add = (x,y) => x===0 ? y : add(x-1, y+1);
// const add = (x,y) => {
//     console.log(arguments);
//     x===0 ? y : add(x-1, y+1);
// }
// const add2 = fnWrapper(add, true);
// add2(2,3);


// const inc = x => x+1;
// const inc2 = fnWrapper(inc, true);
// inc2(3);
