; p is a function that takes zero arguments, similar to
; function p() { return p; }
; it will call itself in an infinite loop
(define (p) (p))
(define (test x y)
   (if (= x 0) 0 y))

; for a normal order, we would defer evaluation
; and since x=0, we would get 0.
; However since applicative-order evaluates parameters first
; before calling the function, (p) will recurse inifinitely
; and the program won't work
(test 0 (p))

