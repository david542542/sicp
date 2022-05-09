const p = () => p();
const test = (x, y) => 
    (x === 0) ? 0 : y;

// notice the p() invocation will happen immediately so the test function
// will never even be called with applicative order.
test(0, p());
