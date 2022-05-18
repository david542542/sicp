#lang sicp

(define (repeatDisplay char num)
      (if (> num 0) 
            (begin (display char) (repeatDisplay char (- num 1))))

(define (makeChange amount coins)
   (for-each display (list amount " " coins "\n"))
   (cond ((= amount 0) 1)
         ((< amount 0) 0)
         ((equal? coins '()) 0)
         (else (+ (makeChange amount (cdr coins)) 
                  (makeChange (- amount (car coins)) coins))))
)
; Order of space will be similar to the amount needed to change with pennis so O(n)-ish
; Order of steps seems something like O(n!) but probably more complex than that...
(makeChange 20 '(50 25 10 5 1))

;    ()
;   /  \
; ()    ()
;      /  \
;    ()    ()
;         /  \
;       ()    ()
   
