#lang sicp
(define (square x) (* x x))
(define (cube x) (* x x x))
(define (good-enough? guess x) 
   (< (abs (- (cube guess) x)) 0.001 ))

(define (improve guess x)
   (/ (+ (/ x 
            (square guess)) 
         (* 2 guess))
      3))

(define count 0)
(define (cubrt-iter guess x)
   (set! count (+ count 1)) ; return of this is void, so cannot use it directly
   (for-each display (list count " " guess "\n"))
   (if (good-enough? guess x) 
        guess 
        (cubrt-iter (improve guess x) x)))

(define (cubrt x) (cubrt-iter 1.0 x))

(cubrt 8)

