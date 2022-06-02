const gcd = (a,b) => b===0? a : gcd(b, a%b);

console.log(gcd(10,6));