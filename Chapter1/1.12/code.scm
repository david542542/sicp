#lang sicp
; Pascal's triangle

;    1
;   1 1
;  1 2 1
; 1 3 3 1

; 1-indexed, ignore error checking, for example (pascal 720 -50) or (pascal 2 70)
(define (pascal row col)
   (if (or (= col 1) (= col row))
      1
      ; gets the two items in the above row -- same col and col-1
      (+ (pascal (- row 1) col)
         (pascal (- row 1) (- col 1)))))
         
(pascal 1 1)
(pascal 2 1)
(pascal 2 2)
(pascal 3 1)
(pascal 3 2)
(pascal 3 3)
(pascal 5 3)

