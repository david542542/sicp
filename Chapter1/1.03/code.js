const sum_of_two_largest_squares = (x,y,z) => 
    (x <= y && x <= z) ? y*y+z*z :
    (y <= x && y <= z) ? x*x+z*z :
                         x*x+y*y;

console.log(sum_of_two_largest_squares(3, 4, 5));
console.log(sum_of_two_largest_squares(1,1,4));
