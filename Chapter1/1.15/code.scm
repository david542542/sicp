#lang sicp
(define (cube x) (* x x x))
(define (p x) (- (* 3 x) (* 4 (cube x))))
(define (sine angle numEval)
      (for-each display (list numEval " -- " angle "\n"))
      (if (not (> (abs angle) 0.1))
            angle
            (p (sine (/ angle 3.0) (+ numEval 1)))
      )
)
; this procedure runs 6 times
(sine 12.15 1) ; 6
(sine 15 1) ; 6
(sine 50 1) ; 7
(sine 100 1) ; 8
(sine 300 1) ; 9
(sine 800 1) ; 9
(sine 2400 1) ;
(sine 2400 1) ;
; Looks like it grows logarithmically, with base 3 ?
; in other words, multiplying it by about 3 will increase the number of steps by 1
