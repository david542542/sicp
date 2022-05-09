#lang sicp
(define (square x) (* x x))
(define (average x y) (/ (+ x y) 2))
(define (improve guess x) (average guess (/ x guess)))
(define (good-enough? guess x) (< (abs (- (square guess) x)) 0.001 ))
(define (sqrt-iter guess x) (if (good-enough? guess x) guess (sqrt-iter (improve guess x) x)))
(define (sqrtx x) (sqrt-iter 1.0 x))

(sqrtx 2)
; Small numbers -- because precision is limited, a number smaller than
; that precision would likely be very imprecise, as it would probably quit after the first iteration
(sqrtx 0.000001)
; large numbers -- will never have enough precision to get under threshold (sometimes)
; (sqrtx 10000000000000);


(define (good-enough2? previous-guess guess)
   (< (/ (abs (- previous-guess guess)) guess) 0.01))

(define (sqrt-iter2 guess x)
   (if (good-enough2? guess (improve guess x))
         guess
         (sqrt-iter2 (improve guess x) x)))
(define (sqrt2 x) (sqrt-iter2 1.0 x))
(sqrt2 10012333313131)
; (sqrt2 0.000003)

