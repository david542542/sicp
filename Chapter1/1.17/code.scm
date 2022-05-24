#lang sicp

(define (times a b)
  (if (= b 0)
    0
    (+ a (times a (- b 1)))
))

; (times 3 2)
(define (double a) (* a 2))
(define (halve a) (/ a 2))
(define (even? n) (= (remainder n 2) 0))
(define (odd? n) (not (even? n)))

; fast-times -- num multiplicand 
; -- num=0       --> 0
; -- num=1       --> 1
; -- num is odd  --> a+(times(a,b-1))
; -- num is even --> double(a)+times(a,halve(b))



; Takes logarithmic steps
; Notice we push the addition **outside** the doubling steps  
(define (times2 a b)
  (cond 
    ((= b 0) 0)
    ((= b 1) a)
    ((odd? b) (+ a (times2 a (- b 1))))
    (else     (+ (double (times2 a (halve b)))))
  )
)



(times2 4 1)
(times2 1 4)
(times2 0 9)
(times2 9 0)
(times2 2 5)
(times2 3 2)
(times2 8 4)
(times2 4 9)
(times2 9 7)

; (times2 4 7)