



const square = x => x*x;
const average = (x,y) => (x+y)/2;
const improve = (guess, x) => average(guess, x/guess);
const good_enough = (guess, x) =>  Math.abs(square(guess) - x) < 0.001;
var count = 1;
const sqrt_iter = (guess, x) => {
    console.log(count++, guess, improve(guess, x), square(guess) - x);
    return good_enough(guess, x) ? guess : sqrt_iter(improve(guess, x), x);
}
const sqrt = x => sqrt_iter(1.0, x);

console.log(sqrt(0.000000003)); // look at how inaccurate this is
// console.log(sqrt(1000000112334234));
// floating point cannot get close enough when a sufficiently large number
// 1388 31622778.37784394 31622778.37784394 0.125
// 1389 31622778.37784394 31622778.37784394 0.125
// 1390 31622778.37784394 31622778.37784394 0.125
// 1391 31622778.37784394 31622778.37784394 0.125
// 1392 31622778.37784394 31622778.37784394 0.125
// 1393 31622778.37784394 31622778.37784394 0.125
// This is because with numbers of this order magnitude, 
// the distance between two consecutive floating point numbers is larger than 0.001.
// function iff(predicate, yes, no) {
//     return predicate? yes : no;


const good_enough2 = (prev, cur) => Math.abs(prev-cur)/cur < 0.001;
const sqrt_iter2 = (guess, x) =>
    good_enough2(guess, improve(guess, x)) ? guess : sqrt_iter2(improve(guess, x), x);
const sqrt2 = x => sqrt_iter2(1.0, x);

console.log(sqrt (0.000000003));
console.log(sqrt2(0.000000003)); // much more precise
console.log(sqrt2(1000000112334234)); // much faster