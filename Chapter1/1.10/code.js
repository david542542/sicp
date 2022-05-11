function Ackerman(x,y) {
    return y === 0 ? 0   :
           x === 0 ? 2*y :
           y === 1 ? 2   :
                     Ackerman(x-1, Ackerman(x, y-1));
}
console.log(Ackerman(1,10));
// processes and evaluations shown in Scheme file