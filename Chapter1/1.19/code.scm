#lang sicp
; skipped, mainly a math item, related to definition of
; a <- bq + aq + ap
; b <- bp + aq
; -->
; a <- (b)q       + (a)q            + (a)p
; a <- (bp + aq)q + (bq + aq + ap)q + (bq + aq + ap)p
; a <- bpq + aqq + bqq + aqq + apq + bqp + aqp + app
; b <- (b)p       + (a)q
; b <- (bp + aq)p + (bq + aq + ap)q
; b <- bpp + aqp + bqq + aqq + apq
; b <- b(pp + qq) + a(qp + qq + pq)
; b <- bp' + aq'
; so p' = pp + pq, q' = qp + qq + pq

(define (fib n)
  (fib-iter 1 0 0 1 n))

(define (fib-iter a b p q count)
  (cond ((= count 0) b)
        ((even? count)
          (fib-iter 
            a 
            b
            (+ (* p p) (* p q)) ; p'
            (+ (* q q) (* 2 p q)) ; q'
            (/ count 2)))
          (else (fib-iter (+ (* b q) (* a q) (* a p))
                          (+ (* b p) (* a q))
                          p
                          q
                          (- count 1)))
))
