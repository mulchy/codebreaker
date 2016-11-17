(ns codebreaker.app
  (:require
   [cljs.spec :as s]
   [cljs.spec.test :as stest]
   [cljs.spec.impl.gen :as gen]
   [reagent.core :as r]))

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

;; todo figure out how to represent the HTML/reagent? this returns
(s/fdef render
        :args ::code)

(defn code-component
  [code]
  [:div (map-indexed (fn [idx thing]
               ^{:key idx} [:div (str thing)])
             code)])

(defn gen-code
  []
  (gen/generate (s/gen ::code)))

(defn init []
  (enable-console-print!)
  (r/render-component [code-component (gen-code)]
                      (.. js/document (getElementById "container"))))
