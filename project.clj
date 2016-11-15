(defproject codebreaker "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojure "1.9.0-alpha14"]
                 [org.clojure/test.check "0.9.0"]]
  :main ^:skip-aot codebreaker.core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}}
  :monkeypatch-clojure-test false)
