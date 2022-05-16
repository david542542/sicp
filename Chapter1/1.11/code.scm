#lang sicp

; Change coins -- using a list here so can change denoms easily
; Counts = [0.50, 0.25, 0.10, 0.5, 0.1]
(define (makeChange amount coins)
   ;(for-each display (list amount " " coins "\n"))
   (cond ((= amount 0) 1)
         ((< amount 0) 0)
         ((equal? coins '()) 0)
         (else (+ (makeChange amount (cdr coins)) 
                  (makeChange (- amount (car coins)) coins))))
)
(makeChange 100 '(50 25 10 5 1))
(makeChange 11 '(7 3 1))

; f(n) = n --> n < 3
; f(n) = f(n-1) + 2f(n-2) + 3f(n-3) if n >= 3
(define (fRecursive n)
   (if (< n 3) 
         n
         (+ (* 1 (fRecursive (- n 1)))
            (* 2 (fRecursive (- n 2)))
            (* 3 (fRecursive (- n 3)))
         )))
(fRecursive 3)
(fRecursive 4)
(fRecursive 5)


; 0 --> 0
; 1 --> 1
; 2 --> 2
; 3 --> 4  ; 1*2 + 2*1 + 3*0 = 4
; 4 --> 11 ; 1*4 + 2*2 + 3*1 = 11
; 5 --> 25 ; 1*11 + 2*4 + 3*2 = 25

; Example:
(define (fib n)
   (fib-iter 1 0 n))

(define (fib-iter a b count)
   (if (= count 0)
      b          ; f(a) + f(a-1) --> f(a) + f(b)
      (fib-iter (+ a b) a (- count 1))))
(fib 7)

(define (f n)
   (f-iter 2 1 0 n))
(define (f-iter a b c count)
   (if (= count 0)
      c ; c is basically the "now" one. b is now+1, a is now+2
        ; so for n=0    --> c=0, b=1, a=2
        ; shift for n=1 --> c=1, b=2, a=2+(2*1)+(3*0) = 4
        ; shift for n=2 --> c=2, b=4, a=4+(2*2)+(3*1) = 11
        ; shift for n=3 --> c=4, b=11,a=11+(2*4)+(3*2)= 25 -- note we're always storing the "two next ones"
      (f-iter (+ a (* 2 b) (* 3 c)) a b (- count 1))))
(display "***\n")
(f 5)
