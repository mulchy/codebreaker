// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('cljs.spec.test');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('cljs.stacktrace');
goog.require('goog.object');
goog.require('clojure.test.check');
goog.require('cljs.spec.impl.gen');
goog.require('cljs.pprint');
goog.require('cljs.spec');
goog.require('clojure.string');
goog.require('clojure.test.check.properties');
cljs.spec.test.distinct_by = (function cljs$spec$test$distinct_by(f,coll){
var step = (function cljs$spec$test$distinct_by_$_step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
return (function (p__18998,seen__$1){
while(true){
var vec__18999 = p__18998;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18999,(0),null);
var xs__$1 = vec__18999;
var temp__6753__auto__ = cljs.core.seq(xs__$1);
if(temp__6753__auto__){
var s = temp__6753__auto__;
var v = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
if(cljs.core.contains_QMARK_(seen__$1,v)){
var G__19002 = cljs.core.rest(s);
var G__19003 = seen__$1;
p__18998 = G__19002;
seen__$1 = G__19003;
continue;
} else {
return cljs.core.cons(x,cljs$spec$test$distinct_by_$_step(cljs.core.rest(s),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,v)));
}
} else {
return null;
}
break;
}
}).call(null,xs,seen);
}),null,null));
});
return step(coll,cljs.core.PersistentHashSet.EMPTY);
});
cljs.spec.test.__GT_sym = (function cljs$spec$test$__GT_sym(x){
return (function (){var G__19005 = new cljs.core.Var(function(){return cljs.spec.__GT_sym;},cljs.core.cst$sym$cljs$spec_SLASH__DASH__GT_sym,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$cljs$spec,cljs.core.cst$sym$_DASH__GT_sym,"/Users/ryan.mulcahy/.boot/cache/tmp/Users/ryan.mulcahy/codebreaker/1q17/-45cce1/js/app.out/cljs/spec.cljs",13,1,271,271,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$x], null)),"Returns a symbol from a symbol or var",(cljs.core.truth_(cljs.spec.__GT_sym)?cljs.spec.__GT_sym.cljs$lang$test:null)]));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19005) : cljs.core.deref.call(null,G__19005));
})().call(null,x);
});
/**
 * if false, instrumented fns call straight through
 */
cljs.spec.test._STAR_instrument_enabled_STAR_ = true;
cljs.spec.test.get_host_port = (function cljs$spec$test$get_host_port(){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("browser",cljs.core._STAR_target_STAR_)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$host,window.location.host,cljs.core.cst$kw$port,window.location.port], null);
}
});
cljs.spec.test.get_ua_product = (function cljs$spec$test$get_ua_product(){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("browser",cljs.core._STAR_target_STAR_)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_target_STAR_);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return cljs.core.cst$kw$safari;
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return cljs.core.cst$kw$chrome;
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return cljs.core.cst$kw$firefox;
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return cljs.core.cst$kw$ie;
} else {
return null;
}
}
}
}
}
});
cljs.spec.test.get_env = (function cljs$spec$test$get_env(){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ua_DASH_product,cljs.spec.test.get_ua_product()], null);
});
/**
 * Fn-spec must include at least :args or :ret specs.
 */
cljs.spec.test.fn_spec_QMARK_ = (function cljs$spec$test$fn_spec_QMARK_(m){
var or__7393__auto__ = cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__7393__auto__)){
return or__7393__auto__;
} else {
return cljs.core.cst$kw$ret.cljs$core$IFn$_invoke$arity$1(m);
}
});
cljs.spec.test.explain_data_STAR_ = (function cljs$spec$test$explain_data_STAR_(spec,v){
if(cljs.core.truth_(cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$3(spec,v,null))){
return null;
} else {
return cljs.spec.explain_data(spec,v);
}
});
cljs.spec.test.find_caller = (function cljs$spec$test$find_caller(st){
var search_spec_fn = (function cljs$spec$test$find_caller_$_search_spec_fn(frame){
if(cljs.core.truth_(frame)){
var s = cljs.core.cst$kw$function.cljs$core$IFn$_invoke$arity$1(frame);
var and__7381__auto__ = typeof s === 'string';
if(and__7381__auto__){
var and__7381__auto____$1 = !(clojure.string.blank_QMARK_(s));
if(and__7381__auto____$1){
return cljs.core.re_find(/cljs\.spec\.test\.spec_checking_fn/,s);
} else {
return and__7381__auto____$1;
}
} else {
return and__7381__auto__;
}
} else {
return null;
}
});
return cljs.core.first(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(search_spec_fn,cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__19006_SHARP_){
return cljs.core.not(search_spec_fn(p1__19006_SHARP_));
}),st)));
});
cljs.spec.test.spec_checking_fn = (function cljs$spec$test$spec_checking_fn(v,f,fn_spec){
var fn_spec__$1 = (function (){var G__19017 = new cljs.core.Var(function(){return cljs.spec.maybe_spec;},cljs.core.cst$sym$cljs$spec_SLASH_maybe_DASH_spec,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$cljs$spec,cljs.core.cst$sym$maybe_DASH_spec,"/Users/ryan.mulcahy/.boot/cache/tmp/Users/ryan.mulcahy/codebreaker/1q17/-45cce1/js/app.out/cljs/spec.cljs",18,1,94,94,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$spec_DASH_or_DASH_k], null)),"spec-or-k must be a spec, regex or resolvable kw/sym, else returns nil.",(cljs.core.truth_(cljs.spec.maybe_spec)?cljs.spec.maybe_spec.cljs$lang$test:null)]));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19017) : cljs.core.deref.call(null,G__19017));
})().call(null,fn_spec);
var conform_BANG_ = ((function (fn_spec__$1){
return (function (v__$1,role,spec,data,args){
var conformed = cljs.spec.conform(spec,data);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_invalid,conformed)){
var caller = cljs.spec.test.find_caller((function (){var G__19018 = cljs.spec.test.get_host_port();
var G__19019 = (new Error()).stack;
var G__19020 = cljs.spec.test.get_env();
var G__19021 = null;
return (cljs.stacktrace.parse_stacktrace.cljs$core$IFn$_invoke$arity$4 ? cljs.stacktrace.parse_stacktrace.cljs$core$IFn$_invoke$arity$4(G__19018,G__19019,G__19020,G__19021) : cljs.stacktrace.parse_stacktrace.call(null,G__19018,G__19019,G__19020,G__19021));
})());
var ed = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.spec.explain_data_STAR_(spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [role], null),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,data),cljs.core.cst$kw$cljs$spec_SLASH_args,args,cljs.core.array_seq([cljs.core.cst$kw$cljs$spec_SLASH_failure,cljs.core.cst$kw$instrument], 0)),(cljs.core.truth_(caller)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$spec$test_SLASH_caller,caller], null):null)], 0));
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Call to "),cljs.core.str(v__$1),cljs.core.str(" did not conform to spec:\n"),cljs.core.str((function (){var sb__8480__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_19022_19027 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_19023_19028 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_19022_19027,_STAR_print_fn_STAR_19023_19028,sb__8480__auto__,caller,ed,conformed,fn_spec__$1){
return (function (x__8481__auto__){
return sb__8480__auto__.append(x__8481__auto__);
});})(_STAR_print_newline_STAR_19022_19027,_STAR_print_fn_STAR_19023_19028,sb__8480__auto__,caller,ed,conformed,fn_spec__$1))
;

try{cljs.spec.explain_out(ed);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_19023_19028;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_19022_19027;
}
return [cljs.core.str(sb__8480__auto__)].join('');
})())].join(''),ed);
} else {
return conformed;
}
});})(fn_spec__$1))
;
var G__19024 = ((function (fn_spec__$1,conform_BANG_){
return (function() { 
var G__19029__delegate = function (args){
if(cljs.core.truth_(cljs.spec.test._STAR_instrument_enabled_STAR_)){
var _STAR_instrument_enabled_STAR_19025 = cljs.spec.test._STAR_instrument_enabled_STAR_;
cljs.spec.test._STAR_instrument_enabled_STAR_ = null;

try{if(cljs.core.truth_(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(fn_spec__$1))){
conform_BANG_(v,cljs.core.cst$kw$args,cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(fn_spec__$1),args,args);
} else {
}

var _STAR_instrument_enabled_STAR_19026 = cljs.spec.test._STAR_instrument_enabled_STAR_;
cljs.spec.test._STAR_instrument_enabled_STAR_ = true;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}finally {cljs.spec.test._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR_19026;
}}finally {cljs.spec.test._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR_19025;
}} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}
};
var G__19029 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19030__i = 0, G__19030__a = new Array(arguments.length -  0);
while (G__19030__i < G__19030__a.length) {G__19030__a[G__19030__i] = arguments[G__19030__i + 0]; ++G__19030__i;}
  args = new cljs.core.IndexedSeq(G__19030__a,0);
} 
return G__19029__delegate.call(this,args);};
G__19029.cljs$lang$maxFixedArity = 0;
G__19029.cljs$lang$applyTo = (function (arglist__19031){
var args = cljs.core.seq(arglist__19031);
return G__19029__delegate(args);
});
G__19029.cljs$core$IFn$_invoke$arity$variadic = G__19029__delegate;
return G__19029;
})()
;})(fn_spec__$1,conform_BANG_))
;
goog.object.extend(G__19024,f);

return G__19024;
});
cljs.spec.test.no_fspec = (function cljs$spec$test$no_fspec(v,spec){
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Fn at "),cljs.core.str(v),cljs.core.str(" is not spec'ed.")].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$var,v,cljs.core.cst$kw$spec,spec,cljs.core.cst$kw$cljs$spec_SLASH_failure,cljs.core.cst$kw$no_DASH_fspec], null));
});
if(typeof cljs.spec.test.instrumented_vars !== 'undefined'){
} else {
cljs.spec.test.instrumented_vars = (function (){var G__19032 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19032) : cljs.core.atom.call(null,G__19032));
})();
}
/**
 * Helper for instrument.
 */
cljs.spec.test.instrument_choose_fn = (function cljs$spec$test$instrument_choose_fn(f,spec,sym,p__19033){
var map__19036 = p__19033;
var map__19036__$1 = ((((!((map__19036 == null)))?((((map__19036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19036.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19036):map__19036);
var over = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19036__$1,cljs.core.cst$kw$gen);
var stub = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19036__$1,cljs.core.cst$kw$stub);
var replace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19036__$1,cljs.core.cst$kw$replace);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.fromArray([sym], true),stub))){
return cljs.spec.impl.gen.generate(cljs.spec.gen.cljs$core$IFn$_invoke$arity$2(spec,over));
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(replace,sym,f);
}
});
/**
 * Helper for instrument
 */
cljs.spec.test.instrument_choose_spec = (function cljs$spec$test$instrument_choose_spec(spec,sym,p__19038){
var map__19041 = p__19038;
var map__19041__$1 = ((((!((map__19041 == null)))?((((map__19041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19041.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19041):map__19041);
var overrides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19041__$1,cljs.core.cst$kw$spec);
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(overrides,sym,spec);
});
cljs.spec.test.instrument_1_STAR_ = (function cljs$spec$test$instrument_1_STAR_(s,v,opts){
var spec = cljs.spec.get_spec(v);
var map__19045 = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.spec.test.instrumented_vars) : cljs.core.deref.call(null,cljs.spec.test.instrumented_vars)),v);
var map__19045__$1 = ((((!((map__19045 == null)))?((((map__19045.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19045.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19045):map__19045);
var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19045__$1,cljs.core.cst$kw$raw);
var wrapped = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19045__$1,cljs.core.cst$kw$wrapped);
var current = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(v) : cljs.core.deref.call(null,v));
var to_wrap = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(wrapped,current))?raw:current);
var ospec = (function (){var or__7393__auto__ = cljs.spec.test.instrument_choose_spec(spec,s,opts);
if(cljs.core.truth_(or__7393__auto__)){
return or__7393__auto__;
} else {
throw cljs.spec.test.no_fspec(v,spec);
}
})();
var ofn = cljs.spec.test.instrument_choose_fn(to_wrap,ospec,s,opts);
var checked = cljs.spec.test.spec_checking_fn(v,ofn,ospec);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.spec.test.instrumented_vars,cljs.core.assoc,v,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$raw,to_wrap,cljs.core.cst$kw$wrapped,checked], null));

return checked;
});
cljs.spec.test.unstrument_1_STAR_ = (function cljs$spec$test$unstrument_1_STAR_(s,v){
if(cljs.core.truth_(v)){
var temp__6753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.spec.test.instrumented_vars) : cljs.core.deref.call(null,cljs.spec.test.instrumented_vars)),v);
if(cljs.core.truth_(temp__6753__auto__)){
var map__19049 = temp__6753__auto__;
var map__19049__$1 = ((((!((map__19049 == null)))?((((map__19049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19049.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19049):map__19049);
var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19049__$1,cljs.core.cst$kw$raw);
var wrapped = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19049__$1,cljs.core.cst$kw$wrapped);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.spec.test.instrumented_vars,cljs.core.dissoc,v);

var current = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(v) : cljs.core.deref.call(null,v));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(wrapped,current)){
return raw;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
cljs.spec.test.fn_spec_name_QMARK_ = (function cljs$spec$test$fn_spec_name_QMARK_(s){
return (s instanceof cljs.core.Symbol);
});
cljs.spec.test.collectionize = (function cljs$spec$test$collectionize(x){
if((x instanceof cljs.core.Symbol)){
var x__8322__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__8322__auto__);
} else {
return x;
}
});
/**
 * Given an opts map as per instrument, returns the set of syms
 * that can be instrumented.
 */
cljs.spec.test.instrumentable_syms = (function cljs$spec$test$instrumentable_syms(var_args){
var args19051 = [];
var len__8609__auto___19054 = arguments.length;
var i__8610__auto___19055 = (0);
while(true){
if((i__8610__auto___19055 < len__8609__auto___19054)){
args19051.push((arguments[i__8610__auto___19055]));

var G__19056 = (i__8610__auto___19055 + (1));
i__8610__auto___19055 = G__19056;
continue;
} else {
}
break;
}

var G__19053 = args19051.length;
switch (G__19053) {
case 0:
return cljs.spec.test.instrumentable_syms.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.spec.test.instrumentable_syms.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19051.length)].join('')));

}
});

cljs.spec.test.instrumentable_syms.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.spec.test.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.spec.test.instrumentable_syms.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if(cljs.core.every_QMARK_(cljs.core.ident_QMARK_,cljs.core.keys(cljs.core.cst$kw$gen.cljs$core$IFn$_invoke$arity$1(opts)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("instrument :gen expects ident keys"),cljs.core.str("\n"),cljs.core.str("(every? ident? (keys (:gen opts)))")].join('')));
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.PersistentHashSet.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.spec.test.fn_spec_name_QMARK_,cljs.core.keys(cljs.spec.registry())),cljs.core.keys(cljs.core.cst$kw$spec.cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.cst$kw$stub.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.keys(cljs.core.cst$kw$replace.cljs$core$IFn$_invoke$arity$1(opts))], null));
});

cljs.spec.test.instrumentable_syms.cljs$lang$maxFixedArity = 1;

cljs.spec.test.explain_check = (function cljs$spec$test$explain_check(args,spec,v,role){
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Specification-based check failed",(cljs.core.truth_(cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$3(spec,v,null))?null:cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.spec.explain_data_STAR_(spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [role], null),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,v),cljs.core.cst$kw$cljs$spec$test_SLASH_args,args,cljs.core.array_seq([cljs.core.cst$kw$cljs$spec$test_SLASH_val,v,cljs.core.cst$kw$cljs$spec_SLASH_failure,cljs.core.cst$kw$check_DASH_failed], 0))));
});
/**
 * Returns true if call passes specs, otherwise *returns* an exception
 * with explain-data + ::s/failure.
 */
cljs.spec.test.check_call = (function cljs$spec$test$check_call(f,specs,args){
var cargs = (cljs.core.truth_(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(specs))?cljs.spec.conform(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(specs),args):null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cargs,cljs.core.cst$kw$cljs$spec_SLASH_invalid)){
return cljs.spec.test.explain_check(args,cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(specs),args,cljs.core.cst$kw$args);
} else {
var ret = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
var cret = (cljs.core.truth_(cljs.core.cst$kw$ret.cljs$core$IFn$_invoke$arity$1(specs))?cljs.spec.conform(cljs.core.cst$kw$ret.cljs$core$IFn$_invoke$arity$1(specs),ret):null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cret,cljs.core.cst$kw$cljs$spec_SLASH_invalid)){
return cljs.spec.test.explain_check(args,cljs.core.cst$kw$ret.cljs$core$IFn$_invoke$arity$1(specs),ret,cljs.core.cst$kw$ret);
} else {
if(cljs.core.truth_((function (){var and__7381__auto__ = cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(specs);
if(cljs.core.truth_(and__7381__auto__)){
var and__7381__auto____$1 = cljs.core.cst$kw$ret.cljs$core$IFn$_invoke$arity$1(specs);
if(cljs.core.truth_(and__7381__auto____$1)){
return cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(specs);
} else {
return and__7381__auto____$1;
}
} else {
return and__7381__auto__;
}
})())){
if(cljs.core.truth_(cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(specs),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$args,cargs,cljs.core.cst$kw$ret,cret], null)))){
return true;
} else {
return cljs.spec.test.explain_check(args,cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(specs),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$args,cargs,cljs.core.cst$kw$ret,cret], null),cljs.core.cst$kw$fn);
}
} else {
return true;
}
}
}
});
cljs.spec.test.quick_check = (function cljs$spec$test$quick_check(f,specs,p__19059){
var map__19065 = p__19059;
var map__19065__$1 = ((((!((map__19065 == null)))?((((map__19065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19065.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19065):map__19065);
var gen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19065__$1,cljs.core.cst$kw$gen);
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19065__$1,cljs.core.cst$kw$clojure$test$check_SLASH_opts);
var map__19067 = opts;
var map__19067__$1 = ((((!((map__19067 == null)))?((((map__19067.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19067.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19067):map__19067);
var num_tests = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19067__$1,cljs.core.cst$kw$num_DASH_tests,(1000));
var g = (function (){try{return cljs.spec.gen.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(specs),gen);
}catch (e19069){if((e19069 instanceof Error)){
var t = e19069;
return t;
} else {
throw e19069;

}
}})();
if((g instanceof Error)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$result,g], null);
} else {
var prop = cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [g], null),((function (map__19067,map__19067__$1,num_tests,g,map__19065,map__19065__$1,gen,opts){
return (function (p1__19058_SHARP_){
return cljs.spec.test.check_call(f,specs,p1__19058_SHARP_);
});})(map__19067,map__19067__$1,num_tests,g,map__19065,map__19065__$1,gen,opts))
], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.spec.impl.gen.quick_check,num_tests,prop,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.array_seq([opts], 0)));
}
});
/**
 * Builds spec result map.
 */
cljs.spec.test.make_check_result = (function cljs$spec$test$make_check_result(check_sym,spec,test_check_ret){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$spec,spec,cljs.core.cst$kw$clojure$test$check_SLASH_ret,test_check_ret], null),(cljs.core.truth_(check_sym)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$sym,check_sym], null):null),(function (){var temp__6753__auto__ = cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1(test_check_ret);
if(cljs.core.truth_(temp__6753__auto__)){
var result = temp__6753__auto__;
if(result === true){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$failure,result], null);
}
} else {
return null;
}
})(),(function (){var temp__6753__auto__ = cljs.core.cst$kw$shrunk.cljs$core$IFn$_invoke$arity$1(test_check_ret);
if(cljs.core.truth_(temp__6753__auto__)){
var shrunk = temp__6753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$failure,cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1(shrunk)], null);
} else {
return null;
}
})()], 0));
});
cljs.spec.test.validate_check_opts = (function cljs$spec$test$validate_check_opts(opts){
if(cljs.core.every_QMARK_(cljs.core.ident_QMARK_,cljs.core.keys(cljs.core.cst$kw$gen.cljs$core$IFn$_invoke$arity$1(opts)))){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("check :gen expects ident keys"),cljs.core.str("\n"),cljs.core.str("(every? ident? (keys (:gen opts)))")].join('')));
}
});
cljs.spec.test.failure_type = (function cljs$spec$test$failure_type(x){
return cljs.core.cst$kw$cljs$spec_SLASH_failure.cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(x));
});
cljs.spec.test.unwrap_failure = (function cljs$spec$test$unwrap_failure(x){
if(cljs.core.truth_(cljs.spec.test.failure_type(x))){
return cljs.core.ex_data(x);
} else {
return x;
}
});
/**
 * Returns the type of the check result. This can be any of the
 * ::s/failure keywords documented in 'check', or:
 * 
 *   :check-passed   all checked fn returns conformed
 *   :check-threw    checked fn threw an exception
 */
cljs.spec.test.result_type = (function cljs$spec$test$result_type(ret){
var failure = cljs.core.cst$kw$failure.cljs$core$IFn$_invoke$arity$1(ret);
if((failure == null)){
return cljs.core.cst$kw$check_DASH_passed;
} else {
if(cljs.core.truth_(cljs.spec.test.failure_type(failure))){
return cljs.spec.test.failure_type(failure);
} else {
return cljs.core.cst$kw$check_DASH_threw;

}
}
});
/**
 * Given a check result, returns an abbreviated version
 * suitable for summary use.
 */
cljs.spec.test.abbrev_result = (function cljs$spec$test$abbrev_result(x){
if(cljs.core.truth_(cljs.core.cst$kw$failure.cljs$core$IFn$_invoke$arity$1(x))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(x,cljs.core.cst$kw$clojure$test$check_SLASH_ret),cljs.core.cst$kw$spec,cljs.spec.describe),cljs.core.cst$kw$failure,cljs.spec.test.unwrap_failure);
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.cst$kw$spec,cljs.core.array_seq([cljs.core.cst$kw$clojure$test$check_SLASH_ret], 0));
}
});
/**
 * Given a collection of check-results, e.g. from 'check', pretty
 * prints the summary-result (default abbrev-result) of each.
 * 
 * Returns a map with :total, the total number of results, plus a
 * key with a count for each different :type of result.
 */
cljs.spec.test.summarize_results = (function cljs$spec$test$summarize_results(var_args){
var args19070 = [];
var len__8609__auto___19073 = arguments.length;
var i__8610__auto___19074 = (0);
while(true){
if((i__8610__auto___19074 < len__8609__auto___19073)){
args19070.push((arguments[i__8610__auto___19074]));

var G__19075 = (i__8610__auto___19074 + (1));
i__8610__auto___19074 = G__19075;
continue;
} else {
}
break;
}

var G__19072 = args19070.length;
switch (G__19072) {
case 1:
return cljs.spec.test.summarize_results.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.test.summarize_results.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19070.length)].join('')));

}
});

cljs.spec.test.summarize_results.cljs$core$IFn$_invoke$arity$1 = (function (check_results){
return cljs.spec.test.summarize_results.cljs$core$IFn$_invoke$arity$2(check_results,cljs.spec.test.abbrev_result);
});

cljs.spec.test.summarize_results.cljs$core$IFn$_invoke$arity$2 = (function (check_results,summary_result){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (summary,result){
cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1((summary_result.cljs$core$IFn$_invoke$arity$1 ? summary_result.cljs$core$IFn$_invoke$arity$1(result) : summary_result.call(null,result)));

return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(summary,cljs.core.cst$kw$total,cljs.core.inc),cljs.spec.test.result_type(result),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0)));
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$total,(0)], null),check_results);
});

cljs.spec.test.summarize_results.cljs$lang$maxFixedArity = 2;

