(ns codebreaker.app
  (:require
   [cljs.spec :as s]
   [cljs.spec.test :as stest]
   [cljs.spec.impl.gen :as gen]
   [reagent.core :as r]
   [clojure.pprint :refer [pprint]]))

(def color-map {:r "red" :y "yellow" :g "green" :c "cyan" :b "black" :w "white"})
(def color-seq (into [] (keys color-map)))
(def peg? (into #{} (keys color-map)))

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

;;TODO tests

(defn gen-code
  []
  (gen/generate (s/gen ::code)))

(defn initial-state
  []
  (let [secret (gen-code)]
    {:score    {::exact-matches 0
                ::loose-matches 0}
     :tries    0
     :secret   secret
     :guess    (mapv (constantly :c) secret)}))

(def state
  (r/atom (initial-state)))

(defn next-color
  [color]
  (second (drop-while #(not= color %) (cycle color-seq))))

(defn color-component
  [state index]
  (fn []
    [:li
     {:on-click #(swap! state update-in [:guess index] next-color)}
     [:div
      {:class (str "circle"
                   " "
                   ((get-in @state [:guess index]) color-map))}]]))

(defn restart!
  []
  (reset! state (initial-state)))

(defn score!
  [state]
  (let [{:keys [secret guess] old-score :score}            @state
        {exact ::exact-matches :as new-score}              (score secret guess)]
    (if (= (count secret) exact)
      (do
        (js/alert "You Win!")
        (restart!))
      (swap! state (fn [state]
                     (-> state
                         (assoc :score new-score)
                         (update :tries inc)))))))

(defn code-component
  [state]
  (fn []
    [:div
     [:ul
      {:class "code"}
      (map-indexed (fn [idx _]
                     ^{:key idx} [color-component state idx])
                   (:secret @state))]
     ]))

(defn score-component
  [state]
  (fn []
    (let [{{exact ::exact-matches
             loose ::loose-matches} :score
            tries                   :tries}   @state]
      [:div
       [:p (str "Exact-matches: " exact)]
       [:p (str "Loose-matches: " loose)]
       [:p (str "Tries: "         tries)]
       [:div [:button {:on-click #(score! state)} "Guess"]]])))

(defn code-and-score
  [state]
  [:div
   [code-component state]
   [score-component state]])

(defn debug
  [state]
  [:pre
   (with-out-str
     (pprint @state))])

(defn init []
  (r/render-component [code-and-score state]
                      (.. js/document (getElementById "container")))

  (comment
    (r/render-component [debug state]
                        (.. js/document (getElementById "debug")))))
