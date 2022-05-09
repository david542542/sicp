const square = x => x*x;
const average = (x,y) => (x+y)/2;
const improve = (guess, x) => average(guess, x/guess);
const good_enough = (guess, x) =>
    Math.abs(square(guess) - x) < 0.001;

const sqrt_iter = (guess, x) =>
    good_enough(guess, x) ? guess : sqrt_iter(improve(guess, x), x);
const sqrt = x => sqrt_iter(1.0, x);

console.log(sqrt(100));
console.log(sqrt(2));

function iff(predicate, yes, no) {
    return predicate? yes : no;
}
console.log(iff(1===1, 3, 5));
console.log("***");
sqrt2_iter = (guess, x) =>
    iff(good_enough(guess, x), guess, sqrt2_iter(improve(guess, x), x));
sqrt2 = x => sqrt2_iter(1.0, x);
// this will recurse since sqrt2_iter(...) will keep evaluating since it is applicative order
// and will never exit-early from the special form if/cond statement.