const add = (a,b) => a+b,
      subtract = (a,b) => a-b;
    
// 
const a_plus_abs_b = (a, b) =>
    // we parenthesize because function binds higher precedent than ternary
    ( (b > 0) ? add : subtract ) ( a,b ); 

console.log(a_plus_abs_b(2, -4));
console.log(a_plus_abs_b(2, 4));
