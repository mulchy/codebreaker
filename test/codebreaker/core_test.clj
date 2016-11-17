(ns codebreaker.core-test
  (:require [cljs.test :refer :all]
            [codebreaker.core :refer :all]
            [cljs.spec.test :as stest]))

(deftest score-test
  (testing "Properties of the score function"
    (is (#(= (:total %) (:check-passed %))
         (stest/summarize-results (stest/check 'codebreaker.core/score))))))
