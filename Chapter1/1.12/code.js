const pascal = (x,y) => 
    (y===1 || y===x) ? 1 : pascal(x-1, y) + pascal(x-1, y-1);

console.log(pascal(5,3));
