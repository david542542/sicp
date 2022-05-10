const THRESHOLD = 0.001;
var count=0;

const square = x => x*x;
const cube = x => x*x*x;
const good_enough = (guess, x) => Math.abs(cube(guess) - x) < THRESHOLD;
const improve = (guess, x) => (x/square(guess) + 2*guess) / 3;

function cubrt_iter(guess, x) {
    console.log(count++, guess);
    return good_enough(guess, x) ? guess : cubrt_iter(improve(guess, x), x);
}
const cubrt = x => cubrt_iter(1.0, x);
console.log(cubrt(8), cubrt(20), cubrt(27));