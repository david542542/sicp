#lang sicp

; Ack's function
(define (Ack x y)
   (cond ((= y 0) 0)
         ((= x 0) (* 2 y))
         ((= y 1) 2)
         (
            else (Ack (- x 1) (Ack x (- y 1)))
         )
         ))
(Ack 1 10)
(Ack 0 (Ack 1 9))
(Ack 0 (Ack 0 (Ack 1 8)))
(Ack 0 (Ack 0 (Ack 0 (Ack 1 7))))
(Ack 0 (Ack 0 (Ack 0 (Ack 0 (Ack 1 6)))))
(Ack 0 (Ack 0 (Ack 0 (Ack 0 (Ack 0 (Ack 1 5))))))
(Ack 0 (Ack 0 (Ack 0 (Ack 0 (Ack 0 (Ack 0 (Ack 1 4)))))))
(Ack 0 (Ack 0 (Ack 0 (Ack 0 (Ack 0 (Ack 0 (Ack 0 (Ack 1 3))))))))
(Ack 0 (Ack 0 (Ack 0 (Ack 0 (Ack 0 (Ack 0 (Ack 0 (Ack 0 (Ack 1 2)))))))))
(Ack 0 (Ack 0 (Ack 0 (Ack 0 (Ack 0 (Ack 0 (Ack 0 (Ack 0 (Ack 0 (Ack 1 1))))))))))
(Ack 0 (Ack 0 (Ack 0 (Ack 0 (Ack 0 (Ack 0 (Ack 0 (Ack 0 (Ack 0 2)))))))))
(Ack 0 (Ack 0 (Ack 0 (Ack 0 (Ack 0 (Ack 0 (Ack 0 (Ack 0 4))))))))
(Ack 0 (Ack 0 (Ack 0 (Ack 0 (Ack 0 (Ack 0 (Ack 0 8)))))))
(Ack 0 (Ack 0 (Ack 0 (Ack 0 (Ack 0 (Ack 0 16))))))
(Ack 0 (Ack 0 (Ack 0 (Ack 0 (Ack 0 32)))))
(Ack 0 (Ack 0 (Ack 0 (Ack 0 64))))
(Ack 0 (Ack 0 (Ack 0 128)))
(Ack 0 (Ack 0 256))
(Ack 0 512)
1024

(Ack 2 4)
(Ack 1 (Ack 2 3))
(Ack 1 (Ack 1 (Ack 2 2)))
(Ack 1 (Ack 1 (Ack 1 (Ack 2 1))))
(Ack 1 (Ack 1 (Ack 1 2)))
(Ack 1 (Ack 1 (Ack 0 (Ack 1 1))))
(Ack 1 (Ack 1 (Ack 0 2)))
(Ack 1 (Ack 0 (Ack 1 3)))
(Ack 1 (Ack 0 (Ack 0 (Ack 1 2))))
(Ack 1 (Ack 0 (Ack 0 (Ack 0 (Ack 1 1)))))
(Ack 1 (Ack 0 (Ack 0 4)))
(Ack 1 16) ;; Notice this is (Ack 1 (Ack 2 3)), so (Ack 2 3) --> 16
(Ack 0 (Ack 1 15))
(Ack 0 (Ack 0 (Ack 1 14)))
65536
; ... etc

(Ack 3 3)


;Give concise mathematical definitions for the functions computed
; by the procedures f, g, and h for positive integer values of n.
; For example, (k n) computes 5n2.

(define (f n) (Ack 0 n)) ; -->  (= x 0) (* 2 y), so 2n
(define (g n) (Ack 1 n)) ; --> 2**n
(define (h n) (Ack 2 n)) ; not sure what this would be?
(f 3)
(g 3)
(display "***\n")
(h 1) ;2
(h 2) ; 2**2
(h 3) ; 2**2**2
(h 4) ; 2**2**2**2 --> properly 2**h(n-1)





