#lang sicp
; linear-time, recursive process
(define (times-linear-recursive a b)
  (if (= b 0)
      0
      (+ a 
        (times-linear-recursive a (- b 1)))))

(times-linear-recursive 4 7)


; linear-time iterative process
(define (times-linear-iterative a b acc)
  (if (= b 0)
      acc
      (times-linear-iterative a (- b 1) (+ b acc))))

(times-linear-iterative 4 7 0)

; log-time, recursive process
(define (even? n) (= (remainder n 2) 0))
(define (odd? n) (not (even? n)))
(define (times-log-recursive a b)
  (cond 
    ((= b 0) 0)
    ((odd? b) (+ a (times-log-recursive a (- b 1))))
     (else    (* 2 (times-log-recursive a (/ b 2))))))

(times-linear-recursive 4 7)

; log-time, iterative process
(define (times-log-iterative a b acc)
  (cond 
    ((= b 0) 0)
    ((odd? b) ((times-log-iterative a (- b 1) (+ acc a))))  ; a*b = a+a(b-1) Ex: 4*3 = 4*2 + 3 = 12
     (else    (times-log-iterative (* a 2) (/ b 2) acc)))   ; a*b = 2a*1/2b  Ex: 6*4 = 4*6 = 24
)
(times-linear-iterative 4 7 0)

; log-time, iterative process, maintaining a stack of operations
; write foldLeft in scheme
(define (times-stack a b)
  (define (double num) (* num 2))
  (define (plus_a num) (+ num a))
  (define (loop a b stack)
    (cond 
      ((= b 0) stack)
      ((odd? b) (loop a (- b 1) (cons plus_a stack)))
       (else    (loop a (/ b 2) (cons double stack)))))
  (define (evaluate-stack stack acc)
    ; foldLeft(cdr(stack), car(stack)(acc), acc) // car(stack) is the function
    ; [double, plus_a, plus_a, double]
    (fold-left 
      stack
      ; myFunc
      (lambda (acc plus) (op acc))
      acc
    )
    (if (null? stack) acc
         (evaluate-stack (cdr stack) ((car stack) acc))))
  (evaluate-stack (loop a b '()) 0)
)

(times-stack 4 7)




; (define (double a) (* a 2))
; (define (halve a) (/ a 2))
; (define (even? n) (= (remainder n 2) 0))
; (define (odd? n) (not (even? n)))


; ; Takes logarithmic steps
; ; Notice we push the addition **outside** the doubling steps

; ; times(4,7) => 28
; ; if b is odd --> + a,  times(4,7) -->   times(4,6)                + 4
; ; if b is even --> double(previous)      double(times(4,3)) +4

; ; is b is odd  times(a,b) --> times(a,b-1) + a      --> times(4,7-1) + 4 --> times(4,6) + 4
; ; is b is even times(a,b) --> 2*(times(a,b/2))      --> 2*(times(4,6/2)) + 4   --> (2*(times(4,3))) +4
; ; (2*(    times(4,2) + 4       )) +4
; ; (2*(    2*(times(4,1)) + 4       )) +4

; ; 4 * 7
; ; 4 + 4 + 4 + 4 + 4 + 4 + 4
; ; 4 + (4*6)
; ; 4 + (double(4) * 3)
; ; 4 + (double()

; ; (times2 a b)
; ; (times2 4 7)
; ; ; ((odd? b) (+ a (times2 a (- b 1))))
; ; (+ 4 (times2 4 (- 7 1)))
; ; (+ 4 (times2 4 6))
; ; ; (else     (+ (double (times2 a (halve b)))))
; ; (+ 4 (+ (double (times2 4 (halve 6)))))
; ; (+ 4 (+ (double (times2 4 3))))
; ; ; ((odd? b) (+ a (times2 a (- b 1))))
; ; (+ 4 (+ (double (+ 4 (times2 4 (- 3 1))))))
; ; (+ 4 (+ (double (+ 4 (times2 4 2)))))
; ; ; (else     (+ (double (times2 a (halve b)))))
; ; (+ 4 (+ (double (+ 4 (+ (double (times2 4 (halve 2))))))))
; ; (+ 4 (+ (double (+ 4 (+ (double (times2 4 1)))))))        (+ * + * 4)
; ; ; ((= b 1) a)
; ; (+ 4 (+ (double (+ 4 (+ (double 4)))))
; ; (+ 4 (+ (double (+ 4 (+ 8))))
; ; (+ 4 (+ (double (+ 4 8)))
; ; (+ 4 (+ (double 12))
; ; (+ 4 24)
; ; 28

; ; (define (today) (
; ;   getSysTime();   ; Potentially the I/O monad; -- concurrency + tons of side-effects (?) -- Rust+Go leaders in parallelism
; ;                   ; web-Scraper as an expanding recursive process -- pagination / functional technique
; ; )


; ; recursive
; (define (times2 a b)
;   (cond 
;     ((= b 0) 0)
;     ((= b 1) a)
;     ((odd? b) (+ a (times2 a (- b 1))))      ; plus is the tail call here, not times2
;     (else     (double (times2 a (halve b)))) ; tail is not the recursive call here
;   )
; )
; (times2 2 5)
; (times2 3 2)
; (times2 8 4)

; ; iterative
; ; times3(a,b,total)
; ; times3(5,11,0)
; ; odd -> add a to total, b-1
; ; times3(5, 10, 5)
; ; even --> double a, halve b
; ; times3(10, 5, 5)
; ; times3(10, 4, 15)
; ; times3(20, 2, 15)
; ; times3(40, 1, 15)
; ; times3(40, 0, 55)
; ; 3 8 
; ; (3*1) * (2*2*2)
; ; (3*1*2) * (2*2)
; ; (3*1*2*2) * (2)
; ; (3*2*2*2*2)

; ; 3 11 0 --> 33
; ; (3*1) * 11 0
; ; (3*1) * (2*5) 3
; ; (3*1*2) * 5   3
; ; (3*1*2) * (2*2) 9
; ; (3*1*2*2) * 2 9
; ; (3*1*2*2*2)   9
; ; 33

; ; iterative recursion is synonymous with tail recursion, creates constant space computation
; ; tail recursion -- doesnt cause the stack to grow (minus any data structure we may have)
; (times  a      b    operations)
; times(3,11,())
; times(3,10,(+))
; times(3,5,(+,*))
; times(3,4,(+,*,+))
; times(3,2,(+,*,+,*))
; times(3,1,(+,*,+,*,*,3))  ; (cons op stack) ; -- times needs to be in tail position


; (define (times3 a b)
;   (cond 
;     ((= b 0) 0)
;     ((= b 1) a)
;     ((odd? b) (+ a (times3 a (- b 1))))
;     (else     (double (times3 a (halve b))))
;   )
; )


; (times3 8 4)
; (times3 4 9)
; (times3 9 7)

; ; ; (times2 4 7)