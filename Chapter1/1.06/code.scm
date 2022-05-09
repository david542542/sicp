#lang sicp
(define (square x) (* x x))
(define (average x y) (/ (+ x y) 2))
(define (improve guess x)
   (average guess (/ x guess)))

(define (good-enough? guess x)
   (< (abs (- (square guess) x)) 0.001 ))

(define (sqrt-iter guess x)
   (if (good-enough? guess x)
      guess
      (sqrt-iter (improve guess x) x)))

(define (sqrtx x)
   (sqrt-iter 1.0 x))

(sqrtx 2)

;; 
(define (new-if predicate then-clause else-clause)
   (cond (predicate then-clause)
         (else else-clause)
   )
)
(new-if (= 2 3) 0 5);
(new-if (= 1 1) 0 5);

(define (sqrt-iter2 guess x)
   (new-if (good-enough? guess x)
      guess
      (sqrt-iter2 (improve guess x) x)
   )
)
(define (sqrt x) (sqrt-iter2 1.0 x))
;; the issue here has nothing to do with `if` vs. `cond`
;; but the function call itself which is applicative-order
;; it would be the same if forexample we had

(define (if2 pred yes no) (if pred yes no));
(define (infinite-loop) (infinite-loop))
(if2 (= 1 1) 1 (infinite-loop))
; note, however, we can pass the function without calling it as a way
; to get around this.

