#lang sicp
(define (square x) (* x x))
(define (average x y) (/ (+ x y) 2))


; using block scope
(define (sqrt x)
   ; x is always the same -- "4" or whatever we pass to it, so we don't need that
   ; in every single function that we define, we can just inherit it from above.
   (define (improve guess) (average guess (/ x guess)))
   (define (good-enough? guess) (< (abs (- (square guess) x)) 0.001 ))
   (define (sqrt-iter guess) (if (good-enough? guess) guess (sqrt-iter (improve guess))))
   (sqrt-iter 1.0)
)
(sqrt 4)

(define (inc x) (+ x 1))
(define (dec x) (- x 1))
(define (plus a b)
  (if (= a 0) b (inc (plus (dec a) b))))
; obviously a recursive process since it looks like a triangle
(plus 4 5)
(inc (plus 3 5))
(inc (inc (plus 2 5)))
(inc (inc (inc (plus 1 5))))
(inc (inc (inc (inc (plus 0 5)))))
(inc (inc (inc (inc 5))))
(inc (inc (inc 6)))
(inc (inc 7))
(inc 8)
9

(define (plus2 a b)
   (if (= a 0)
      b
      (plus2 (dec a) (inc b))))
; obviously an interative process
(plus2 4 5)
(plus2 (dec 4) (inc 5))
(plus2 3 6)
(plus2 (dec 3) (inc 6))
(plus2 2 7)
(plus2 (dec 2) (inc 7))
(plus2 1 8)
(plus2 0 9)
9


