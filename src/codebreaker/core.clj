(ns codebreaker.core
  (:gen-class)
  (:require [clojure.spec :as s]
            [clojure.spec.test :as stest]
            [clojure.spec.gen :as gen]))

(def peg? #{:y :g :r :c :w :b})

(s/def ::code (s/coll-of peg? :min-count 4 :max-count 6))
(s/def ::exact-matches nat-int?)
(s/def ::loose-matches nat-int?)
(s/def ::secret-and-guess (s/and (s/cat :secret ::code :guess ::code)
                          (fn [{:keys [secret guess]}]
                            (= (count secret) (count guess)))))

(s/fdef score
        :args ::secret-and-guess
        :ret (s/keys :req [::exact-matches ::loose-matches])
        :fn (fn [{{secret :secret} :args ret :ret}]
              (<= 0 (apply + (vals ret)) (count secret))))

(s/fdef match-count
        :args ::secret-and-guess
        :ret nat-int?
        :fn (fn [{{secret :secret} :args ret :ret}]
              (<= 0 ret (count secret))))

(defn exact-matches [secret guess]
  (count (filter true? (map = secret guess))))


(defn all-matches [secret guess]
  (apply + (vals (merge-with min
                             (select-keys (frequencies secret) guess)
                             (select-keys (frequencies guess) secret)))))

(defn score [secret guess]
  (let [exact (exact-matches secret guess)
        all   (all-matches secret guess)]
    {::exact-matches exact
     ::loose-matches (- all exact)}))

(defn wait-for-guess
  []
  (println "Guess?")
  (read-string (read-line)))

(defn game
  [secret]
  (fn []
    (let [guess  (wait-for-guess)
          {:keys [::exact-matches ::loose-matches]} (score secret guess)]
      (if (= (count secret) exact-matches)
        (println "You win!")
        (do
          (println "Close, exact matches: " exact-matches "loose-matches: " loose-matches)
          (recur))))))

(defn -main
  [& args]
  (let [secret (gen/generate (s/gen ::code))]
    (println "The code has " (count  secret) "colors")
    ((game secret))))
