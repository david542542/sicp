#lang sicp
(define (gcd a b)
  (if (= b 0)
      a
      (gcd b (remainder a b))))

; applicative order
(gcd 206 40)
(gcd b (remainder a b))
(gcd 40 (remainder 206 40)) ; one remainder operation done
(gcd 40 6)
(gcd b (remainder a b))
(gcd 6 (remainder 40 6)) ; second remainder operation done
(gcd 6 4)
(gcd b (remainder a b))
(gcd 4 (remainder 6 4)) ; third remainder operation done
(gcd 4 2)
(gcd b (remainder a b))
(gcd 2 (remainder 4 2)) ; fourth remainder operation done
(gcd 2 0)
2
; 1 + 1 + 1 + 1 = 4 calls

; normal order
(gcd 206 40)
(gcd b (remainder a b))
(gcd 40 (remainder 206 40))
(gcd b (remainder a b))
(gcd (remainder 206 40) (remainder 40 (remainder 206 40))) ; 1 call
(gcd b (remainder a b))
(gcd 
  (remainder 40 (remainder 206 40))  ; 2 calls
  (remainder (remainder 206 40) (remainder 40 (remainder 206 40))))
(gcd b (remainder a b))
(gcd 
  (remainder (remainder 206 40) (remainder 40 (remainder 206 40)))  ; 4 calls
  (remainder (remainder 40 (remainder 206 40)) (remainder (remainder 206 40) (remainder 40 (remainder 206 40)))))
(gcd b (remainder a b))
(gcd ; 7 times
    (remainder (remainder 40 (remainder 206 40)) (remainder (remainder 206 40) (remainder 40 (remainder 206 40))))
    ; --> a: (remainder (remainder 206 40) (remainder 40 (remainder 206 40))) ; 4 calls
  ; 1 + 2 + 4 + 7 + 4 =1 8 calls
