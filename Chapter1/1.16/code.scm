#lang sicp

; recursive exponentiation
; b^n = 1 when b=0, else b*b^(n-1)
(define (exp num pow)
  (if (= pow 0) 1 (* num (exp num (- pow 1)))))
(exp 2 3)

; make it an iterative process
(define (exp2 num pow)
  (exp2-iter num pow 1)
)
(define (exp2-iter num pow total) ; total should start with the multiplicative identity, 1, not zero
  (if (= pow 0) 
    total 
    (exp2-iter num (- pow 1) (* num total))
  ))

(exp2 3 3)

; 'fast-exponentiation' -- b^n=1 when b=0, b*b^(n-1) when n%2!=0, (b^(n/2))^2
(define (even? n) (= (remainder n 2) 0))
(define (square n) (* n n))
(define (fast num pow)
  (cond ((= pow 0) 1)
        ((even? pow) (square (fast num (/ pow 2))))
        (else (* num (fast num (- pow 1))))))
(fast 3 2)
(fast 4 2)

; using an iterative process instead
(define (fast2 num pow)
  (fast2-iter num pow 1)
)
(define (fast2-iter num pow total)
  (cond 
      ((= pow 0)    total)
      ((even? pow)  (fast2-iter num (/ pow 2) (square total)))
      (else         (fast2-iter num (- pow 1) (* num total)))))

(fast2 4 2)
(fast 3 2)
