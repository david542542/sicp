#lang sicp
(define (a-plus-abs-b a b)
   (  
      (if (> b 0) + -) ; will return operator + or -
      a b              ; depending on sign on b
   )  ; extra function application will invoke operator on a b
)
(a-plus-abs-b 2 -3)
(a-plus-abs-b 2 3)
