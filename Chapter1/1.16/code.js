const fast2 = (num, pow, total=1) => 
    pow===0   ? total : 
    pow%2===0 ? fast2(num, pow/2, total*total) : 
                fast2(num, pow-1, total*num);
console.log(fast2(7,3));
console.log(fast2(4,2));