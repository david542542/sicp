// block scope
const square = x => x*x;
const average = (x,y) => x*y/2;
function sqrt(x) {
    const improve = guess => average(guess, x/guess);
    const good_enough = guess => Math.abs(square(guess) - x) < 0.001;
    const sqrt_iter = (guess=1.0) => good_enough(guess) ? guess : sqrt_iter(improve(guess));
    return sqrt_iter();
}
console.log(sqrt(4));

const inc = x => ++x;
const dec = x => --x;
const plus = (a,b) => a===0 ? b : inc(plus(dec(a),b));
console.log(plus(4,2));

const plus2 = (a,b) => a===0 ? b : plus2(dec(a), inc(b));

console.log(plus(4,5));
console.log(plus2(4,5));
// VSCode: option-click to select multiple cursor positions.
//         shift-option click to select all positions between ('box editing')
console.log(
    plus(4,5),
    inc(plus(3,5)),
    inc(inc(plus(2,5))),
    inc(inc(inc(plus(1,5)))),
    inc(inc(inc(inc(plus(0,5))))),
    inc(inc(inc(inc(5)))),
    inc(inc(inc(6))),
    inc(inc(7)),
    inc(8),
    9,
)
console.log(
    plus2(4,5),
    plus2(3,6),
    plus2(2,7),
    plus2(1,8),
    plus2(0,9),
    9,
)
