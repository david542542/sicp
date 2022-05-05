#lang sicp
(define (square x) (* x x))
(define (lte x y) (or (= x y) (< x y)))
(define (sum-of-two-largest-squares x y z)
   (cond
      ((and (lte x y) (lte x z)) (+ (square y) (square z)))
      ((and (lte y x) (lte y z)) (+ (square x) (square z)))
      (else                  (+ (square x) (square y)))
   )
)
(sum-of-two-largest-squares 3 4 5)
(sum-of-two-largest-squares 1 1 4)