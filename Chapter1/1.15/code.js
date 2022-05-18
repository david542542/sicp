// See scm for O(n) guesses
const cube = x => x*x*x;
const p = x => 3*x - 4*cube(x);
const sine = angle => Math.abs(angle) <= 0.1 ? angle : p(sine(angle/3));
console.log(sine(12.15));
// see description of process in .scm file