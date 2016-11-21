// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('codebreaker.app');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.spec.test');
goog.require('cljs.spec.impl.gen');
goog.require('cljs.pprint');
goog.require('cljs.spec');
codebreaker.app.color_map = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$r,"red",cljs.core.cst$kw$y,"yellow",cljs.core.cst$kw$g,"green",cljs.core.cst$kw$c,"cyan",cljs.core.cst$kw$b,"black",cljs.core.cst$kw$w,"white"], null);
codebreaker.app.color_seq = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.keys(codebreaker.app.color_map));
codebreaker.app.peg_QMARK_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.keys(codebreaker.app.color_map));
cljs.spec.def_impl(cljs.core.cst$kw$codebreaker$app_SLASH_code,cljs.core.list(cljs.core.cst$sym$cljs$spec_SLASH_coll_DASH_of,cljs.core.cst$sym$codebreaker$app_SLASH_peg_QMARK_,cljs.core.cst$kw$min_DASH_count,(4),cljs.core.cst$kw$max_DASH_count,(6)),cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$peg_QMARK_,codebreaker.app.peg_QMARK_,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$cljs$spec_SLASH_conform_DASH_all,true,cljs.core.cst$kw$min_DASH_count,(4),cljs.core.cst$kw$cljs$spec_SLASH_kind_DASH_form,null,cljs.core.cst$kw$max_DASH_count,(6)], null),null));
cljs.spec.def_impl(cljs.core.cst$kw$codebreaker$app_SLASH_exact_DASH_matches,cljs.core.cst$sym$cljs$core_SLASH_nat_DASH_int_QMARK_,cljs.core.nat_int_QMARK_);
cljs.spec.def_impl(cljs.core.cst$kw$codebreaker$app_SLASH_loose_DASH_matches,cljs.core.cst$sym$cljs$core_SLASH_nat_DASH_int_QMARK_,cljs.core.nat_int_QMARK_);
cljs.spec.def_impl(cljs.core.cst$kw$codebreaker$app_SLASH_secret_DASH_and_DASH_guess,cljs.core.list(cljs.core.cst$sym$cljs$spec_SLASH_and,cljs.core.list(cljs.core.cst$sym$cljs$spec_SLASH_cat,cljs.core.cst$kw$secret,cljs.core.cst$kw$codebreaker$app_SLASH_code,cljs.core.cst$kw$guess,cljs.core.cst$kw$codebreaker$app_SLASH_code),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$secret,cljs.core.cst$sym$guess], null)], null)], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__EQ_,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_count,cljs.core.cst$sym$secret),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_count,cljs.core.cst$sym$guess)))),cljs.spec.and_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$spec_SLASH_cat,cljs.core.cst$kw$secret,cljs.core.cst$kw$codebreaker$app_SLASH_code,cljs.core.cst$kw$guess,cljs.core.cst$kw$codebreaker$app_SLASH_code),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$secret,cljs.core.cst$sym$guess], null)], null)], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__EQ_,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_count,cljs.core.cst$sym$secret),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_count,cljs.core.cst$sym$guess)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$secret,cljs.core.cst$kw$guess], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$codebreaker$app_SLASH_code,cljs.core.cst$kw$codebreaker$app_SLASH_code], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$codebreaker$app_SLASH_code,cljs.core.cst$kw$codebreaker$app_SLASH_code], null)),(function (p__19082){
var map__19083 = p__19082;
var map__19083__$1 = ((((!((map__19083 == null)))?((((map__19083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19083.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19083):map__19083);
var secret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19083__$1,cljs.core.cst$kw$secret);
var guess = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19083__$1,cljs.core.cst$kw$guess);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(secret),cljs.core.count(guess));
})], null),null));
cljs.spec.def_impl(cljs.core.cst$sym$codebreaker$app_SLASH_score,cljs.core.list(cljs.core.cst$sym$cljs$spec_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.cst$kw$codebreaker$app_SLASH_secret_DASH_and_DASH_guess,cljs.core.cst$kw$ret,cljs.core.list(cljs.core.cst$sym$cljs$spec_SLASH_keys,cljs.core.cst$kw$req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$codebreaker$app_SLASH_exact_DASH_matches,cljs.core.cst$kw$codebreaker$app_SLASH_loose_DASH_matches], null)),cljs.core.cst$kw$fn,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$secret,cljs.core.cst$kw$secret], null),cljs.core.cst$kw$args,cljs.core.cst$sym$ret,cljs.core.cst$kw$ret], true, false)], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__LT__EQ_,(0),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_apply,cljs.core.cst$sym$cljs$core_SLASH__PLUS_,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_vals,cljs.core.cst$sym$ret)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_count,cljs.core.cst$sym$secret)))),cljs.spec.fspec_impl(cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$codebreaker$app_SLASH_secret_DASH_and_DASH_guess,cljs.core.cst$kw$codebreaker$app_SLASH_secret_DASH_and_DASH_guess,null,null),cljs.core.cst$kw$codebreaker$app_SLASH_secret_DASH_and_DASH_guess,cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec_SLASH_keys,cljs.core.cst$kw$req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$codebreaker$app_SLASH_exact_DASH_matches,cljs.core.cst$kw$codebreaker$app_SLASH_loose_DASH_matches], null)),cljs.spec.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$req_DASH_un,cljs.core.cst$kw$opt_DASH_un,cljs.core.cst$kw$gfn,cljs.core.cst$kw$pred_DASH_exprs,cljs.core.cst$kw$opt_DASH_keys,cljs.core.cst$kw$req_DASH_specs,cljs.core.cst$kw$req,cljs.core.cst$kw$req_DASH_keys,cljs.core.cst$kw$opt_DASH_specs,cljs.core.cst$kw$pred_DASH_forms,cljs.core.cst$kw$opt],[null,null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_QMARK_,(function (p1__17762__17763__auto__){
return cljs.core.contains_QMARK_(p1__17762__17763__auto__,cljs.core.cst$kw$codebreaker$app_SLASH_exact_DASH_matches);
}),(function (p1__17762__17763__auto__){
return cljs.core.contains_QMARK_(p1__17762__17763__auto__,cljs.core.cst$kw$codebreaker$app_SLASH_loose_DASH_matches);
})], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$codebreaker$app_SLASH_exact_DASH_matches,cljs.core.cst$kw$codebreaker$app_SLASH_loose_DASH_matches], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$codebreaker$app_SLASH_exact_DASH_matches,cljs.core.cst$kw$codebreaker$app_SLASH_loose_DASH_matches], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$codebreaker$app_SLASH_exact_DASH_matches,cljs.core.cst$kw$codebreaker$app_SLASH_loose_DASH_matches], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$codebreaker$app_SLASH_exact_DASH_matches)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$codebreaker$app_SLASH_loose_DASH_matches))], null),null])),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec_SLASH_keys,cljs.core.cst$kw$req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$codebreaker$app_SLASH_exact_DASH_matches,cljs.core.cst$kw$codebreaker$app_SLASH_loose_DASH_matches], null)),cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$secret,cljs.core.cst$kw$secret], null),cljs.core.cst$kw$args,cljs.core.cst$sym$ret,cljs.core.cst$kw$ret], true, false)], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__LT__EQ_,(0),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_apply,cljs.core.cst$sym$cljs$core_SLASH__PLUS_,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_vals,cljs.core.cst$sym$ret)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_count,cljs.core.cst$sym$secret))),(function (p__19085){
var map__19086 = p__19085;
var map__19086__$1 = ((((!((map__19086 == null)))?((((map__19086.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19086.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19086):map__19086);
var map__19087 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19086__$1,cljs.core.cst$kw$args);
var map__19087__$1 = ((((!((map__19087 == null)))?((((map__19087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19087.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19087):map__19087);
var secret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19087__$1,cljs.core.cst$kw$secret);
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19086__$1,cljs.core.cst$kw$ret);
return (((0) <= cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.vals(ret)))) && ((cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.vals(ret)) <= cljs.core.count(secret)));
}),null,null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$secret,cljs.core.cst$kw$secret], null),cljs.core.cst$kw$args,cljs.core.cst$sym$ret,cljs.core.cst$kw$ret], true, false)], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__LT__EQ_,(0),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_apply,cljs.core.cst$sym$cljs$core_SLASH__PLUS_,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_vals,cljs.core.cst$sym$ret)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_count,cljs.core.cst$sym$secret))),null));
cljs.spec.def_impl(cljs.core.cst$sym$codebreaker$app_SLASH_match_DASH_count,cljs.core.list(cljs.core.cst$sym$cljs$spec_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.cst$kw$codebreaker$app_SLASH_secret_DASH_and_DASH_guess,cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_nat_DASH_int_QMARK_,cljs.core.cst$kw$fn,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$secret,cljs.core.cst$kw$secret], null),cljs.core.cst$kw$args,cljs.core.cst$sym$ret,cljs.core.cst$kw$ret], true, false)], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__LT__EQ_,(0),cljs.core.cst$sym$ret,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_count,cljs.core.cst$sym$secret)))),cljs.spec.fspec_impl(cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$codebreaker$app_SLASH_secret_DASH_and_DASH_guess,cljs.core.cst$kw$codebreaker$app_SLASH_secret_DASH_and_DASH_guess,null,null),cljs.core.cst$kw$codebreaker$app_SLASH_secret_DASH_and_DASH_guess,cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_nat_DASH_int_QMARK_,cljs.core.nat_int_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_nat_DASH_int_QMARK_,cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$secret,cljs.core.cst$kw$secret], null),cljs.core.cst$kw$args,cljs.core.cst$sym$ret,cljs.core.cst$kw$ret], true, false)], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__LT__EQ_,(0),cljs.core.cst$sym$ret,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_count,cljs.core.cst$sym$secret))),(function (p__19090){
var map__19091 = p__19090;
var map__19091__$1 = ((((!((map__19091 == null)))?((((map__19091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19091.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19091):map__19091);
var map__19092 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19091__$1,cljs.core.cst$kw$args);
var map__19092__$1 = ((((!((map__19092 == null)))?((((map__19092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19092.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19092):map__19092);
var secret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19092__$1,cljs.core.cst$kw$secret);
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19091__$1,cljs.core.cst$kw$ret);
return (((0) <= ret)) && ((ret <= cljs.core.count(secret)));
}),null,null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$secret,cljs.core.cst$kw$secret], null),cljs.core.cst$kw$args,cljs.core.cst$sym$ret,cljs.core.cst$kw$ret], true, false)], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH__LT__EQ_,(0),cljs.core.cst$sym$ret,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_count,cljs.core.cst$sym$secret))),null));
codebreaker.app.exact_matches = (function codebreaker$app$exact_matches(secret,guess){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.true_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._EQ_,secret,guess)));
});
codebreaker.app.all_matches = (function codebreaker$app$all_matches(secret,guess){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.vals(cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.min,cljs.core.array_seq([cljs.core.select_keys(cljs.core.frequencies(secret),guess),cljs.core.select_keys(cljs.core.frequencies(guess),secret)], 0))));
});
codebreaker.app.score = (function codebreaker$app$score(secret,guess){
var exact = codebreaker.app.exact_matches(secret,guess);
var all = codebreaker.app.all_matches(secret,guess);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$codebreaker$app_SLASH_exact_DASH_matches,exact,cljs.core.cst$kw$codebreaker$app_SLASH_loose_DASH_matches,(all - exact)], null);
});
codebreaker.app.gen_code = (function codebreaker$app$gen_code(){
return cljs.spec.impl.gen.generate(cljs.spec.gen.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$codebreaker$app_SLASH_code));
});
codebreaker.app.initial_state = (function codebreaker$app$initial_state(){
var secret = codebreaker.app.gen_code();
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$score,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$codebreaker$app_SLASH_exact_DASH_matches,(0),cljs.core.cst$kw$codebreaker$app_SLASH_loose_DASH_matches,(0)], null),cljs.core.cst$kw$tries,(0),cljs.core.cst$kw$secret,secret,cljs.core.cst$kw$guess,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.constantly(cljs.core.cst$kw$c),secret)], null);
});
codebreaker.app.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(codebreaker.app.initial_state());
codebreaker.app.next_color = (function codebreaker$app$next_color(color){
return cljs.core.second(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__19095_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(color,p1__19095_SHARP_);
}),cljs.core.cycle(codebreaker.app.color_seq)));
});
codebreaker.app.color_component = (function codebreaker$app$color_component(state,index){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$guess,index], null),codebreaker.app.next_color);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,[cljs.core.str("circle"),cljs.core.str(" "),cljs.core.str(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$guess,index], null)).call(null,codebreaker.app.color_map))].join('')], null)], null)], null);
});
});
codebreaker.app.restart_BANG_ = (function codebreaker$app$restart_BANG_(){
var G__19098 = codebreaker.app.state;
var G__19099 = codebreaker.app.initial_state();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__19098,G__19099) : cljs.core.reset_BANG_.call(null,G__19098,G__19099));
});
codebreaker.app.score_BANG_ = (function codebreaker$app$score_BANG_(state){
var map__19104 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state));
var map__19104__$1 = ((((!((map__19104 == null)))?((((map__19104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19104.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19104):map__19104);
var old_score = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19104__$1,cljs.core.cst$kw$score);
var secret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19104__$1,cljs.core.cst$kw$secret);
var guess = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19104__$1,cljs.core.cst$kw$guess);
var map__19105 = codebreaker.app.score(secret,guess);
var map__19105__$1 = ((((!((map__19105 == null)))?((((map__19105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19105.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19105):map__19105);
var new_score = map__19105__$1;
var exact = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19105__$1,cljs.core.cst$kw$codebreaker$app_SLASH_exact_DASH_matches);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(secret),exact)){
alert("You Win!");

return codebreaker.app.restart_BANG_();
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,((function (map__19104,map__19104__$1,old_score,secret,guess,map__19105,map__19105__$1,new_score,exact){
return (function (state__$1){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,cljs.core.cst$kw$score,new_score),cljs.core.cst$kw$tries,cljs.core.inc);
});})(map__19104,map__19104__$1,old_score,secret,guess,map__19105,map__19105__$1,new_score,exact))
);
}
});
codebreaker.app.code_component = (function codebreaker$app$code_component(state){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"code"], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,_){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [codebreaker.app.color_component,state,idx], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,idx], null));
}),cljs.core.cst$kw$secret.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state))))], null)], null);
});
});
codebreaker.app.score_component = (function codebreaker$app$score_component(state){
return (function (){
var map__19112 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state));
var map__19112__$1 = ((((!((map__19112 == null)))?((((map__19112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19112.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19112):map__19112);
var map__19113 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19112__$1,cljs.core.cst$kw$score);
var map__19113__$1 = ((((!((map__19113 == null)))?((((map__19113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19113.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19113):map__19113);
var exact = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19113__$1,cljs.core.cst$kw$codebreaker$app_SLASH_exact_DASH_matches);
var loose = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19113__$1,cljs.core.cst$kw$codebreaker$app_SLASH_loose_DASH_matches);
var tries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19112__$1,cljs.core.cst$kw$tries);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,[cljs.core.str("Exact-matches: "),cljs.core.str(exact)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,[cljs.core.str("Loose-matches: "),cljs.core.str(loose)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,[cljs.core.str("Tries: "),cljs.core.str(tries)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (map__19112,map__19112__$1,map__19113,map__19113__$1,exact,loose,tries){
return (function (){
return codebreaker.app.score_BANG_(state);
});})(map__19112,map__19112__$1,map__19113,map__19113__$1,exact,loose,tries))
], null),"Guess"], null)], null)], null);
});
});
codebreaker.app.code_and_score = (function codebreaker$app$code_and_score(state){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [codebreaker.app.code_component,state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [codebreaker.app.score_component,state], null)], null);
});
codebreaker.app.debug = (function codebreaker$app$debug(state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pre,(function (){var sb__8480__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_19118_19120 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_19119_19121 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_19118_19120,_STAR_print_fn_STAR_19119_19121,sb__8480__auto__){
return (function (x__8481__auto__){
return sb__8480__auto__.append(x__8481__auto__);
});})(_STAR_print_newline_STAR_19118_19120,_STAR_print_fn_STAR_19119_19121,sb__8480__auto__))
;

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_19119_19121;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_19118_19120;
}
return [cljs.core.str(sb__8480__auto__)].join('');
})()], null);
});
codebreaker.app.init = (function codebreaker$app$init(){
var G__19124_19126 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [codebreaker.app.code_and_score,codebreaker.app.state], null);
var G__19125_19127 = document.getElementById("container");
(reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__19124_19126,G__19125_19127) : reagent.core.render_component.call(null,G__19124_19126,G__19125_19127));

return null;
});
