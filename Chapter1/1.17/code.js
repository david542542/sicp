function times2(a,b) {
    if (b === 0)
        return 0;
    if (b === 1) 
        return a;
    if (b%2 === 1)
        return a + times2(a, b-1);
    else
        return 2 * times2(a, b/2);
}


console.log(times2(4,1));

console.log(times2(1,4));
console.log(times2(0,9));
console.log(times2(9,0));
console.log(times2(2,5));
console.log(times2(3,2));
console.log(times2(8,4));
console.log(times2(4,9));
console.log(times2(9,7));