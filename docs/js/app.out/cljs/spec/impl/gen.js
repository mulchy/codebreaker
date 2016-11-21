// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = (self__.f.cljs$core$IFn$_invoke$arity$0 ? self__.f.cljs$core$IFn$_invoke$arity$0() : self__.f.call(null));
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.with_meta(cljs.core.cst$sym$cached,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__8045__auto__,writer__8046__auto__,opt__8047__auto__){
return cljs.core._write(writer__8046__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check_SLASH_quick_DASH_check),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check_SLASH_quick_DASH_check)),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__8616__auto__ = [];
var len__8609__auto___17490 = arguments.length;
var i__8610__auto___17491 = (0);
while(true){
if((i__8610__auto___17491 < len__8609__auto___17490)){
args__8616__auto__.push((arguments[i__8610__auto___17491]));

var G__17492 = (i__8610__auto___17491 + (1));
i__8610__auto___17491 = G__17492;
continue;
} else {
}
break;
}

var argseq__8617__auto__ = ((((0) < args__8616__auto__.length))?(new cljs.core.IndexedSeq(args__8616__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__8617__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.spec.impl.gen.quick_check_ref) : cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref)),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq17489){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17489));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$properties_SLASH_for_DASH_all_STAR_),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$properties_SLASH_for_DASH_all_STAR_)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__8616__auto__ = [];
var len__8609__auto___17494 = arguments.length;
var i__8610__auto___17495 = (0);
while(true){
if((i__8610__auto___17495 < len__8609__auto___17494)){
args__8616__auto__.push((arguments[i__8610__auto___17495]));

var G__17496 = (i__8610__auto___17495 + (1));
i__8610__auto___17495 = G__17496;
continue;
} else {
}
break;
}

var argseq__8617__auto__ = ((((0) < args__8616__auto__.length))?(new cljs.core.IndexedSeq(args__8616__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8617__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.spec.impl.gen.for_all_STAR__ref) : cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref)),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq17493){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17493));
});

var g_QMARK__17497 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_generator_QMARK_),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_generator_QMARK_)),cljs.core.str(" never required")].join('')));
}
}),null));
var g_17498 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__17497){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_generate),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_generate)),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__17497))
,null));
var mkg_17499 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__17497,g_17498){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH__DASH__GT_Generator),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH__DASH__GT_Generator)),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__17497,g_17498))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__17497,g_17498,mkg_17499){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g_QMARK__17497) : cljs.core.deref.call(null,g_QMARK__17497)).call(null,x);
});})(g_QMARK__17497,g_17498,mkg_17499))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__17497,g_17498,mkg_17499){
return (function cljs$spec$impl$gen$generator(gfn){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mkg_17499) : cljs.core.deref.call(null,mkg_17499)).call(null,gfn);
});})(g_QMARK__17497,g_17498,mkg_17499))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__17497,g_17498,mkg_17499){
return (function cljs$spec$impl$gen$generate(generator){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g_17498) : cljs.core.deref.call(null,g_17498)).call(null,generator);
});})(g_QMARK__17497,g_17498,mkg_17499))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator((function (rnd,size){
return cljs.core.cst$kw$gen.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(gfnd) : cljs.core.deref.call(null,gfnd))).call(null,rnd,size);
}));
});
var g__17461__auto___17518 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_hash_DASH_map),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_hash_DASH_map)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__17461__auto___17518){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__8616__auto__ = [];
var len__8609__auto___17519 = arguments.length;
var i__8610__auto___17520 = (0);
while(true){
if((i__8610__auto___17520 < len__8609__auto___17519)){
args__8616__auto__.push((arguments[i__8610__auto___17520]));

var G__17521 = (i__8610__auto___17520 + (1));
i__8610__auto___17520 = G__17521;
continue;
} else {
}
break;
}

var argseq__8617__auto__ = ((((0) < args__8616__auto__.length))?(new cljs.core.IndexedSeq(args__8616__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__8617__auto__);
});})(g__17461__auto___17518))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17461__auto___17518){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__17461__auto___17518) : cljs.core.deref.call(null,g__17461__auto___17518)),args);
});})(g__17461__auto___17518))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__17461__auto___17518){
return (function (seq17500){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17500));
});})(g__17461__auto___17518))
;


var g__17461__auto___17522 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_list),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_list)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__17461__auto___17522){
return (function cljs$spec$impl$gen$list(var_args){
var args__8616__auto__ = [];
var len__8609__auto___17523 = arguments.length;
var i__8610__auto___17524 = (0);
while(true){
if((i__8610__auto___17524 < len__8609__auto___17523)){
args__8616__auto__.push((arguments[i__8610__auto___17524]));

var G__17525 = (i__8610__auto___17524 + (1));
i__8610__auto___17524 = G__17525;
continue;
} else {
}
break;
}

var argseq__8617__auto__ = ((((0) < args__8616__auto__.length))?(new cljs.core.IndexedSeq(args__8616__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__8617__auto__);
});})(g__17461__auto___17522))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17461__auto___17522){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__17461__auto___17522) : cljs.core.deref.call(null,g__17461__auto___17522)),args);
});})(g__17461__auto___17522))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__17461__auto___17522){
return (function (seq17501){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17501));
});})(g__17461__auto___17522))
;


var g__17461__auto___17526 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_map),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_map)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__17461__auto___17526){
return (function cljs$spec$impl$gen$map(var_args){
var args__8616__auto__ = [];
var len__8609__auto___17527 = arguments.length;
var i__8610__auto___17528 = (0);
while(true){
if((i__8610__auto___17528 < len__8609__auto___17527)){
args__8616__auto__.push((arguments[i__8610__auto___17528]));

var G__17529 = (i__8610__auto___17528 + (1));
i__8610__auto___17528 = G__17529;
continue;
} else {
}
break;
}

var argseq__8617__auto__ = ((((0) < args__8616__auto__.length))?(new cljs.core.IndexedSeq(args__8616__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__8617__auto__);
});})(g__17461__auto___17526))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17461__auto___17526){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__17461__auto___17526) : cljs.core.deref.call(null,g__17461__auto___17526)),args);
});})(g__17461__auto___17526))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__17461__auto___17526){
return (function (seq17502){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17502));
});})(g__17461__auto___17526))
;


var g__17461__auto___17530 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_not_DASH_empty),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_not_DASH_empty)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__17461__auto___17530){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__8616__auto__ = [];
var len__8609__auto___17531 = arguments.length;
var i__8610__auto___17532 = (0);
while(true){
if((i__8610__auto___17532 < len__8609__auto___17531)){
args__8616__auto__.push((arguments[i__8610__auto___17532]));

var G__17533 = (i__8610__auto___17532 + (1));
i__8610__auto___17532 = G__17533;
continue;
} else {
}
break;
}

var argseq__8617__auto__ = ((((0) < args__8616__auto__.length))?(new cljs.core.IndexedSeq(args__8616__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__8617__auto__);
});})(g__17461__auto___17530))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17461__auto___17530){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__17461__auto___17530) : cljs.core.deref.call(null,g__17461__auto___17530)),args);
});})(g__17461__auto___17530))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__17461__auto___17530){
return (function (seq17503){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17503));
});})(g__17461__auto___17530))
;


var g__17461__auto___17534 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_set),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_set)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__17461__auto___17534){
return (function cljs$spec$impl$gen$set(var_args){
var args__8616__auto__ = [];
var len__8609__auto___17535 = arguments.length;
var i__8610__auto___17536 = (0);
while(true){
if((i__8610__auto___17536 < len__8609__auto___17535)){
args__8616__auto__.push((arguments[i__8610__auto___17536]));

var G__17537 = (i__8610__auto___17536 + (1));
i__8610__auto___17536 = G__17537;
continue;
} else {
}
break;
}

var argseq__8617__auto__ = ((((0) < args__8616__auto__.length))?(new cljs.core.IndexedSeq(args__8616__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__8617__auto__);
});})(g__17461__auto___17534))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17461__auto___17534){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__17461__auto___17534) : cljs.core.deref.call(null,g__17461__auto___17534)),args);
});})(g__17461__auto___17534))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__17461__auto___17534){
return (function (seq17504){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17504));
});})(g__17461__auto___17534))
;


var g__17461__auto___17538 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_vector),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_vector)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__17461__auto___17538){
return (function cljs$spec$impl$gen$vector(var_args){
var args__8616__auto__ = [];
var len__8609__auto___17539 = arguments.length;
var i__8610__auto___17540 = (0);
while(true){
if((i__8610__auto___17540 < len__8609__auto___17539)){
args__8616__auto__.push((arguments[i__8610__auto___17540]));

var G__17541 = (i__8610__auto___17540 + (1));
i__8610__auto___17540 = G__17541;
continue;
} else {
}
break;
}

var argseq__8617__auto__ = ((((0) < args__8616__auto__.length))?(new cljs.core.IndexedSeq(args__8616__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__8617__auto__);
});})(g__17461__auto___17538))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17461__auto___17538){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__17461__auto___17538) : cljs.core.deref.call(null,g__17461__auto___17538)),args);
});})(g__17461__auto___17538))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__17461__auto___17538){
return (function (seq17505){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17505));
});})(g__17461__auto___17538))
;


var g__17461__auto___17542 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_vector_DASH_distinct),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_vector_DASH_distinct)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__17461__auto___17542){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__8616__auto__ = [];
var len__8609__auto___17543 = arguments.length;
var i__8610__auto___17544 = (0);
while(true){
if((i__8610__auto___17544 < len__8609__auto___17543)){
args__8616__auto__.push((arguments[i__8610__auto___17544]));

var G__17545 = (i__8610__auto___17544 + (1));
i__8610__auto___17544 = G__17545;
continue;
} else {
}
break;
}

var argseq__8617__auto__ = ((((0) < args__8616__auto__.length))?(new cljs.core.IndexedSeq(args__8616__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__8617__auto__);
});})(g__17461__auto___17542))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17461__auto___17542){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__17461__auto___17542) : cljs.core.deref.call(null,g__17461__auto___17542)),args);
});})(g__17461__auto___17542))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__17461__auto___17542){
return (function (seq17506){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17506));
});})(g__17461__auto___17542))
;


var g__17461__auto___17546 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_fmap),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_fmap)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__17461__auto___17546){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__8616__auto__ = [];
var len__8609__auto___17547 = arguments.length;
var i__8610__auto___17548 = (0);
while(true){
if((i__8610__auto___17548 < len__8609__auto___17547)){
args__8616__auto__.push((arguments[i__8610__auto___17548]));

var G__17549 = (i__8610__auto___17548 + (1));
i__8610__auto___17548 = G__17549;
continue;
} else {
}
break;
}

var argseq__8617__auto__ = ((((0) < args__8616__auto__.length))?(new cljs.core.IndexedSeq(args__8616__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__8617__auto__);
});})(g__17461__auto___17546))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17461__auto___17546){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__17461__auto___17546) : cljs.core.deref.call(null,g__17461__auto___17546)),args);
});})(g__17461__auto___17546))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__17461__auto___17546){
return (function (seq17507){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17507));
});})(g__17461__auto___17546))
;


var g__17461__auto___17550 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_elements),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_elements)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__17461__auto___17550){
return (function cljs$spec$impl$gen$elements(var_args){
var args__8616__auto__ = [];
var len__8609__auto___17551 = arguments.length;
var i__8610__auto___17552 = (0);
while(true){
if((i__8610__auto___17552 < len__8609__auto___17551)){
args__8616__auto__.push((arguments[i__8610__auto___17552]));

var G__17553 = (i__8610__auto___17552 + (1));
i__8610__auto___17552 = G__17553;
continue;
} else {
}
break;
}

var argseq__8617__auto__ = ((((0) < args__8616__auto__.length))?(new cljs.core.IndexedSeq(args__8616__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__8617__auto__);
});})(g__17461__auto___17550))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17461__auto___17550){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__17461__auto___17550) : cljs.core.deref.call(null,g__17461__auto___17550)),args);
});})(g__17461__auto___17550))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__17461__auto___17550){
return (function (seq17508){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17508));
});})(g__17461__auto___17550))
;


var g__17461__auto___17554 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_bind),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_bind)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__17461__auto___17554){
return (function cljs$spec$impl$gen$bind(var_args){
var args__8616__auto__ = [];
var len__8609__auto___17555 = arguments.length;
var i__8610__auto___17556 = (0);
while(true){
if((i__8610__auto___17556 < len__8609__auto___17555)){
args__8616__auto__.push((arguments[i__8610__auto___17556]));

var G__17557 = (i__8610__auto___17556 + (1));
i__8610__auto___17556 = G__17557;
continue;
} else {
}
break;
}

var argseq__8617__auto__ = ((((0) < args__8616__auto__.length))?(new cljs.core.IndexedSeq(args__8616__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__8617__auto__);
});})(g__17461__auto___17554))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17461__auto___17554){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__17461__auto___17554) : cljs.core.deref.call(null,g__17461__auto___17554)),args);
});})(g__17461__auto___17554))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__17461__auto___17554){
return (function (seq17509){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17509));
});})(g__17461__auto___17554))
;


var g__17461__auto___17558 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_choose),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_choose)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__17461__auto___17558){
return (function cljs$spec$impl$gen$choose(var_args){
var args__8616__auto__ = [];
var len__8609__auto___17559 = arguments.length;
var i__8610__auto___17560 = (0);
while(true){
if((i__8610__auto___17560 < len__8609__auto___17559)){
args__8616__auto__.push((arguments[i__8610__auto___17560]));

var G__17561 = (i__8610__auto___17560 + (1));
i__8610__auto___17560 = G__17561;
continue;
} else {
}
break;
}

var argseq__8617__auto__ = ((((0) < args__8616__auto__.length))?(new cljs.core.IndexedSeq(args__8616__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__8617__auto__);
});})(g__17461__auto___17558))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17461__auto___17558){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__17461__auto___17558) : cljs.core.deref.call(null,g__17461__auto___17558)),args);
});})(g__17461__auto___17558))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__17461__auto___17558){
return (function (seq17510){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17510));
});})(g__17461__auto___17558))
;


var g__17461__auto___17562 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_one_DASH_of),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_one_DASH_of)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__17461__auto___17562){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__8616__auto__ = [];
var len__8609__auto___17563 = arguments.length;
var i__8610__auto___17564 = (0);
while(true){
if((i__8610__auto___17564 < len__8609__auto___17563)){
args__8616__auto__.push((arguments[i__8610__auto___17564]));

var G__17565 = (i__8610__auto___17564 + (1));
i__8610__auto___17564 = G__17565;
continue;
} else {
}
break;
}

var argseq__8617__auto__ = ((((0) < args__8616__auto__.length))?(new cljs.core.IndexedSeq(args__8616__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__8617__auto__);
});})(g__17461__auto___17562))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17461__auto___17562){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__17461__auto___17562) : cljs.core.deref.call(null,g__17461__auto___17562)),args);
});})(g__17461__auto___17562))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__17461__auto___17562){
return (function (seq17511){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17511));
});})(g__17461__auto___17562))
;


var g__17461__auto___17566 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_such_DASH_that),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_such_DASH_that)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__17461__auto___17566){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__8616__auto__ = [];
var len__8609__auto___17567 = arguments.length;
var i__8610__auto___17568 = (0);
while(true){
if((i__8610__auto___17568 < len__8609__auto___17567)){
args__8616__auto__.push((arguments[i__8610__auto___17568]));

var G__17569 = (i__8610__auto___17568 + (1));
i__8610__auto___17568 = G__17569;
continue;
} else {
}
break;
}

var argseq__8617__auto__ = ((((0) < args__8616__auto__.length))?(new cljs.core.IndexedSeq(args__8616__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__8617__auto__);
});})(g__17461__auto___17566))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17461__auto___17566){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__17461__auto___17566) : cljs.core.deref.call(null,g__17461__auto___17566)),args);
});})(g__17461__auto___17566))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__17461__auto___17566){
return (function (seq17512){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17512));
});})(g__17461__auto___17566))
;


var g__17461__auto___17570 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_tuple),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_tuple)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__17461__auto___17570){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__8616__auto__ = [];
var len__8609__auto___17571 = arguments.length;
var i__8610__auto___17572 = (0);
while(true){
if((i__8610__auto___17572 < len__8609__auto___17571)){
args__8616__auto__.push((arguments[i__8610__auto___17572]));

var G__17573 = (i__8610__auto___17572 + (1));
i__8610__auto___17572 = G__17573;
continue;
} else {
}
break;
}

var argseq__8617__auto__ = ((((0) < args__8616__auto__.length))?(new cljs.core.IndexedSeq(args__8616__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__8617__auto__);
});})(g__17461__auto___17570))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17461__auto___17570){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__17461__auto___17570) : cljs.core.deref.call(null,g__17461__auto___17570)),args);
});})(g__17461__auto___17570))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__17461__auto___17570){
return (function (seq17513){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17513));
});})(g__17461__auto___17570))
;


var g__17461__auto___17574 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_sample),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_sample)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__17461__auto___17574){
return (function cljs$spec$impl$gen$sample(var_args){
var args__8616__auto__ = [];
var len__8609__auto___17575 = arguments.length;
var i__8610__auto___17576 = (0);
while(true){
if((i__8610__auto___17576 < len__8609__auto___17575)){
args__8616__auto__.push((arguments[i__8610__auto___17576]));

var G__17577 = (i__8610__auto___17576 + (1));
i__8610__auto___17576 = G__17577;
continue;
} else {
}
break;
}

var argseq__8617__auto__ = ((((0) < args__8616__auto__.length))?(new cljs.core.IndexedSeq(args__8616__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__8617__auto__);
});})(g__17461__auto___17574))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17461__auto___17574){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__17461__auto___17574) : cljs.core.deref.call(null,g__17461__auto___17574)),args);
});})(g__17461__auto___17574))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__17461__auto___17574){
return (function (seq17514){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17514));
});})(g__17461__auto___17574))
;


var g__17461__auto___17578 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_return),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_return)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__17461__auto___17578){
return (function cljs$spec$impl$gen$return(var_args){
var args__8616__auto__ = [];
var len__8609__auto___17579 = arguments.length;
var i__8610__auto___17580 = (0);
while(true){
if((i__8610__auto___17580 < len__8609__auto___17579)){
args__8616__auto__.push((arguments[i__8610__auto___17580]));

var G__17581 = (i__8610__auto___17580 + (1));
i__8610__auto___17580 = G__17581;
continue;
} else {
}
break;
}

var argseq__8617__auto__ = ((((0) < args__8616__auto__.length))?(new cljs.core.IndexedSeq(args__8616__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__8617__auto__);
});})(g__17461__auto___17578))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17461__auto___17578){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__17461__auto___17578) : cljs.core.deref.call(null,g__17461__auto___17578)),args);
});})(g__17461__auto___17578))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__17461__auto___17578){
return (function (seq17515){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17515));
});})(g__17461__auto___17578))
;


var g__17461__auto___17582 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_large_DASH_integer_STAR_),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_large_DASH_integer_STAR_)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__17461__auto___17582){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__8616__auto__ = [];
var len__8609__auto___17583 = arguments.length;
var i__8610__auto___17584 = (0);
while(true){
if((i__8610__auto___17584 < len__8609__auto___17583)){
args__8616__auto__.push((arguments[i__8610__auto___17584]));

var G__17585 = (i__8610__auto___17584 + (1));
i__8610__auto___17584 = G__17585;
continue;
} else {
}
break;
}

var argseq__8617__auto__ = ((((0) < args__8616__auto__.length))?(new cljs.core.IndexedSeq(args__8616__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8617__auto__);
});})(g__17461__auto___17582))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17461__auto___17582){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__17461__auto___17582) : cljs.core.deref.call(null,g__17461__auto___17582)),args);
});})(g__17461__auto___17582))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__17461__auto___17582){
return (function (seq17516){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17516));
});})(g__17461__auto___17582))
;


var g__17461__auto___17586 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_double_STAR_),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_double_STAR_)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__17461__auto___17586){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__8616__auto__ = [];
var len__8609__auto___17587 = arguments.length;
var i__8610__auto___17588 = (0);
while(true){
if((i__8610__auto___17588 < len__8609__auto___17587)){
args__8616__auto__.push((arguments[i__8610__auto___17588]));

var G__17589 = (i__8610__auto___17588 + (1));
i__8610__auto___17588 = G__17589;
continue;
} else {
}
break;
}

var argseq__8617__auto__ = ((((0) < args__8616__auto__.length))?(new cljs.core.IndexedSeq(args__8616__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8617__auto__);
});})(g__17461__auto___17586))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17461__auto___17586){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__17461__auto___17586) : cljs.core.deref.call(null,g__17461__auto___17586)),args);
});})(g__17461__auto___17586))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__17461__auto___17586){
return (function (seq17517){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17517));
});})(g__17461__auto___17586))
;

var g__17474__auto___17611 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_any),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_any)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__17474__auto___17611){
return (function cljs$spec$impl$gen$any(var_args){
var args__8616__auto__ = [];
var len__8609__auto___17612 = arguments.length;
var i__8610__auto___17613 = (0);
while(true){
if((i__8610__auto___17613 < len__8609__auto___17612)){
args__8616__auto__.push((arguments[i__8610__auto___17613]));

var G__17614 = (i__8610__auto___17613 + (1));
i__8610__auto___17613 = G__17614;
continue;
} else {
}
break;
}

var argseq__8617__auto__ = ((((0) < args__8616__auto__.length))?(new cljs.core.IndexedSeq(args__8616__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__8617__auto__);
});})(g__17474__auto___17611))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17474__auto___17611){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__17474__auto___17611) : cljs.core.deref.call(null,g__17474__auto___17611));
});})(g__17474__auto___17611))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__17474__auto___17611){
return (function (seq17590){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17590));
});})(g__17474__auto___17611))
;


var g__17474__auto___17615 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_any_DASH_printable),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_any_DASH_printable)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__17474__auto___17615){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__8616__auto__ = [];
var len__8609__auto___17616 = arguments.length;
var i__8610__auto___17617 = (0);
while(true){
if((i__8610__auto___17617 < len__8609__auto___17616)){
args__8616__auto__.push((arguments[i__8610__auto___17617]));

var G__17618 = (i__8610__auto___17617 + (1));
i__8610__auto___17617 = G__17618;
continue;
} else {
}
break;
}

var argseq__8617__auto__ = ((((0) < args__8616__auto__.length))?(new cljs.core.IndexedSeq(args__8616__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__8617__auto__);
});})(g__17474__auto___17615))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17474__auto___17615){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__17474__auto___17615) : cljs.core.deref.call(null,g__17474__auto___17615));
});})(g__17474__auto___17615))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__17474__auto___17615){
return (function (seq17591){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17591));
});})(g__17474__auto___17615))
;


var g__17474__auto___17619 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_boolean),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_boolean)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__17474__auto___17619){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__8616__auto__ = [];
var len__8609__auto___17620 = arguments.length;
var i__8610__auto___17621 = (0);
while(true){
if((i__8610__auto___17621 < len__8609__auto___17620)){
args__8616__auto__.push((arguments[i__8610__auto___17621]));

var G__17622 = (i__8610__auto___17621 + (1));
i__8610__auto___17621 = G__17622;
continue;
} else {
}
break;
}

var argseq__8617__auto__ = ((((0) < args__8616__auto__.length))?(new cljs.core.IndexedSeq(args__8616__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__8617__auto__);
});})(g__17474__auto___17619))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17474__auto___17619){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__17474__auto___17619) : cljs.core.deref.call(null,g__17474__auto___17619));
});})(g__17474__auto___17619))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__17474__auto___17619){
return (function (seq17592){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17592));
});})(g__17474__auto___17619))
;


var g__17474__auto___17623 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__17474__auto___17623){
return (function cljs$spec$impl$gen$char(var_args){
var args__8616__auto__ = [];
var len__8609__auto___17624 = arguments.length;
var i__8610__auto___17625 = (0);
while(true){
if((i__8610__auto___17625 < len__8609__auto___17624)){
args__8616__auto__.push((arguments[i__8610__auto___17625]));

var G__17626 = (i__8610__auto___17625 + (1));
i__8610__auto___17625 = G__17626;
continue;
} else {
}
break;
}

var argseq__8617__auto__ = ((((0) < args__8616__auto__.length))?(new cljs.core.IndexedSeq(args__8616__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__8617__auto__);
});})(g__17474__auto___17623))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17474__auto___17623){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__17474__auto___17623) : cljs.core.deref.call(null,g__17474__auto___17623));
});})(g__17474__auto___17623))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__17474__auto___17623){
return (function (seq17593){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17593));
});})(g__17474__auto___17623))
;


var g__17474__auto___17627 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_alpha),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_alpha)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__17474__auto___17627){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__8616__auto__ = [];
var len__8609__auto___17628 = arguments.length;
var i__8610__auto___17629 = (0);
while(true){
if((i__8610__auto___17629 < len__8609__auto___17628)){
args__8616__auto__.push((arguments[i__8610__auto___17629]));

var G__17630 = (i__8610__auto___17629 + (1));
i__8610__auto___17629 = G__17630;
continue;
} else {
}
break;
}

var argseq__8617__auto__ = ((((0) < args__8616__auto__.length))?(new cljs.core.IndexedSeq(args__8616__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__8617__auto__);
});})(g__17474__auto___17627))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17474__auto___17627){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__17474__auto___17627) : cljs.core.deref.call(null,g__17474__auto___17627));
});})(g__17474__auto___17627))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__17474__auto___17627){
return (function (seq17594){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17594));
});})(g__17474__auto___17627))
;


var g__17474__auto___17631 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_alphanumeric),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_alphanumeric)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__17474__auto___17631){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__8616__auto__ = [];
var len__8609__auto___17632 = arguments.length;
var i__8610__auto___17633 = (0);
while(true){
if((i__8610__auto___17633 < len__8609__auto___17632)){
args__8616__auto__.push((arguments[i__8610__auto___17633]));

var G__17634 = (i__8610__auto___17633 + (1));
i__8610__auto___17633 = G__17634;
continue;
} else {
}
break;
}

var argseq__8617__auto__ = ((((0) < args__8616__auto__.length))?(new cljs.core.IndexedSeq(args__8616__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__8617__auto__);
});})(g__17474__auto___17631))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17474__auto___17631){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__17474__auto___17631) : cljs.core.deref.call(null,g__17474__auto___17631));
});})(g__17474__auto___17631))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__17474__auto___17631){
return (function (seq17595){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17595));
});})(g__17474__auto___17631))
;


var g__17474__auto___17635 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_ascii),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_ascii)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__17474__auto___17635){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__8616__auto__ = [];
var len__8609__auto___17636 = arguments.length;
var i__8610__auto___17637 = (0);
while(true){
if((i__8610__auto___17637 < len__8609__auto___17636)){
args__8616__auto__.push((arguments[i__8610__auto___17637]));

var G__17638 = (i__8610__auto___17637 + (1));
i__8610__auto___17637 = G__17638;
continue;
} else {
}
break;
}

var argseq__8617__auto__ = ((((0) < args__8616__auto__.length))?(new cljs.core.IndexedSeq(args__8616__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__8617__auto__);
});})(g__17474__auto___17635))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17474__auto___17635){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__17474__auto___17635) : cljs.core.deref.call(null,g__17474__auto___17635));
});})(g__17474__auto___17635))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__17474__auto___17635){
return (function (seq17596){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17596));
});})(g__17474__auto___17635))
;


var g__17474__auto___17639 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_double),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_double)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__17474__auto___17639){
return (function cljs$spec$impl$gen$double(var_args){
var args__8616__auto__ = [];
var len__8609__auto___17640 = arguments.length;
var i__8610__auto___17641 = (0);
while(true){
if((i__8610__auto___17641 < len__8609__auto___17640)){
args__8616__auto__.push((arguments[i__8610__auto___17641]));

var G__17642 = (i__8610__auto___17641 + (1));
i__8610__auto___17641 = G__17642;
continue;
} else {
}
break;
}

var argseq__8617__auto__ = ((((0) < args__8616__auto__.length))?(new cljs.core.IndexedSeq(args__8616__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__8617__auto__);
});})(g__17474__auto___17639))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17474__auto___17639){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__17474__auto___17639) : cljs.core.deref.call(null,g__17474__auto___17639));
});})(g__17474__auto___17639))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__17474__auto___17639){
return (function (seq17597){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17597));
});})(g__17474__auto___17639))
;


var g__17474__auto___17643 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_int),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_int)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__17474__auto___17643){
return (function cljs$spec$impl$gen$int(var_args){
var args__8616__auto__ = [];
var len__8609__auto___17644 = arguments.length;
var i__8610__auto___17645 = (0);
while(true){
if((i__8610__auto___17645 < len__8609__auto___17644)){
args__8616__auto__.push((arguments[i__8610__auto___17645]));

var G__17646 = (i__8610__auto___17645 + (1));
i__8610__auto___17645 = G__17646;
continue;
} else {
}
break;
}

var argseq__8617__auto__ = ((((0) < args__8616__auto__.length))?(new cljs.core.IndexedSeq(args__8616__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__8617__auto__);
});})(g__17474__auto___17643))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17474__auto___17643){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__17474__auto___17643) : cljs.core.deref.call(null,g__17474__auto___17643));
});})(g__17474__auto___17643))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__17474__auto___17643){
return (function (seq17598){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17598));
});})(g__17474__auto___17643))
;


var g__17474__auto___17647 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_keyword),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_keyword)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__17474__auto___17647){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__8616__auto__ = [];
var len__8609__auto___17648 = arguments.length;
var i__8610__auto___17649 = (0);
while(true){
if((i__8610__auto___17649 < len__8609__auto___17648)){
args__8616__auto__.push((arguments[i__8610__auto___17649]));

var G__17650 = (i__8610__auto___17649 + (1));
i__8610__auto___17649 = G__17650;
continue;
} else {
}
break;
}

var argseq__8617__auto__ = ((((0) < args__8616__auto__.length))?(new cljs.core.IndexedSeq(args__8616__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__8617__auto__);
});})(g__17474__auto___17647))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17474__auto___17647){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__17474__auto___17647) : cljs.core.deref.call(null,g__17474__auto___17647));
});})(g__17474__auto___17647))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__17474__auto___17647){
return (function (seq17599){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17599));
});})(g__17474__auto___17647))
;


var g__17474__auto___17651 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_keyword_DASH_ns),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_keyword_DASH_ns)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__17474__auto___17651){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__8616__auto__ = [];
var len__8609__auto___17652 = arguments.length;
var i__8610__auto___17653 = (0);
while(true){
if((i__8610__auto___17653 < len__8609__auto___17652)){
args__8616__auto__.push((arguments[i__8610__auto___17653]));

var G__17654 = (i__8610__auto___17653 + (1));
i__8610__auto___17653 = G__17654;
continue;
} else {
}
break;
}

var argseq__8617__auto__ = ((((0) < args__8616__auto__.length))?(new cljs.core.IndexedSeq(args__8616__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__8617__auto__);
});})(g__17474__auto___17651))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17474__auto___17651){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__17474__auto___17651) : cljs.core.deref.call(null,g__17474__auto___17651));
});})(g__17474__auto___17651))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__17474__auto___17651){
return (function (seq17600){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17600));
});})(g__17474__auto___17651))
;


var g__17474__auto___17655 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_large_DASH_integer),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_large_DASH_integer)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__17474__auto___17655){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__8616__auto__ = [];
var len__8609__auto___17656 = arguments.length;
var i__8610__auto___17657 = (0);
while(true){
if((i__8610__auto___17657 < len__8609__auto___17656)){
args__8616__auto__.push((arguments[i__8610__auto___17657]));

var G__17658 = (i__8610__auto___17657 + (1));
i__8610__auto___17657 = G__17658;
continue;
} else {
}
break;
}

var argseq__8617__auto__ = ((((0) < args__8616__auto__.length))?(new cljs.core.IndexedSeq(args__8616__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__8617__auto__);
});})(g__17474__auto___17655))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17474__auto___17655){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__17474__auto___17655) : cljs.core.deref.call(null,g__17474__auto___17655));
});})(g__17474__auto___17655))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__17474__auto___17655){
return (function (seq17601){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17601));
});})(g__17474__auto___17655))
;


var g__17474__auto___17659 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_ratio),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_ratio)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__17474__auto___17659){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__8616__auto__ = [];
var len__8609__auto___17660 = arguments.length;
var i__8610__auto___17661 = (0);
while(true){
if((i__8610__auto___17661 < len__8609__auto___17660)){
args__8616__auto__.push((arguments[i__8610__auto___17661]));

var G__17662 = (i__8610__auto___17661 + (1));
i__8610__auto___17661 = G__17662;
continue;
} else {
}
break;
}

var argseq__8617__auto__ = ((((0) < args__8616__auto__.length))?(new cljs.core.IndexedSeq(args__8616__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__8617__auto__);
});})(g__17474__auto___17659))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17474__auto___17659){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__17474__auto___17659) : cljs.core.deref.call(null,g__17474__auto___17659));
});})(g__17474__auto___17659))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__17474__auto___17659){
return (function (seq17602){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17602));
});})(g__17474__auto___17659))
;


var g__17474__auto___17663 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_simple_DASH_type),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_simple_DASH_type)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__17474__auto___17663){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__8616__auto__ = [];
var len__8609__auto___17664 = arguments.length;
var i__8610__auto___17665 = (0);
while(true){
if((i__8610__auto___17665 < len__8609__auto___17664)){
args__8616__auto__.push((arguments[i__8610__auto___17665]));

var G__17666 = (i__8610__auto___17665 + (1));
i__8610__auto___17665 = G__17666;
continue;
} else {
}
break;
}

var argseq__8617__auto__ = ((((0) < args__8616__auto__.length))?(new cljs.core.IndexedSeq(args__8616__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__8617__auto__);
});})(g__17474__auto___17663))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17474__auto___17663){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__17474__auto___17663) : cljs.core.deref.call(null,g__17474__auto___17663));
});})(g__17474__auto___17663))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__17474__auto___17663){
return (function (seq17603){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17603));
});})(g__17474__auto___17663))
;


var g__17474__auto___17667 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_simple_DASH_type_DASH_printable),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_simple_DASH_type_DASH_printable)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__17474__auto___17667){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__8616__auto__ = [];
var len__8609__auto___17668 = arguments.length;
var i__8610__auto___17669 = (0);
while(true){
if((i__8610__auto___17669 < len__8609__auto___17668)){
args__8616__auto__.push((arguments[i__8610__auto___17669]));

var G__17670 = (i__8610__auto___17669 + (1));
i__8610__auto___17669 = G__17670;
continue;
} else {
}
break;
}

var argseq__8617__auto__ = ((((0) < args__8616__auto__.length))?(new cljs.core.IndexedSeq(args__8616__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__8617__auto__);
});})(g__17474__auto___17667))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17474__auto___17667){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__17474__auto___17667) : cljs.core.deref.call(null,g__17474__auto___17667));
});})(g__17474__auto___17667))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__17474__auto___17667){
return (function (seq17604){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17604));
});})(g__17474__auto___17667))
;


var g__17474__auto___17671 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__17474__auto___17671){
return (function cljs$spec$impl$gen$string(var_args){
var args__8616__auto__ = [];
var len__8609__auto___17672 = arguments.length;
var i__8610__auto___17673 = (0);
while(true){
if((i__8610__auto___17673 < len__8609__auto___17672)){
args__8616__auto__.push((arguments[i__8610__auto___17673]));

var G__17674 = (i__8610__auto___17673 + (1));
i__8610__auto___17673 = G__17674;
continue;
} else {
}
break;
}

var argseq__8617__auto__ = ((((0) < args__8616__auto__.length))?(new cljs.core.IndexedSeq(args__8616__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__8617__auto__);
});})(g__17474__auto___17671))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17474__auto___17671){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__17474__auto___17671) : cljs.core.deref.call(null,g__17474__auto___17671));
});})(g__17474__auto___17671))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__17474__auto___17671){
return (function (seq17605){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17605));
});})(g__17474__auto___17671))
;


var g__17474__auto___17675 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string_DASH_ascii),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string_DASH_ascii)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__17474__auto___17675){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__8616__auto__ = [];
var len__8609__auto___17676 = arguments.length;
var i__8610__auto___17677 = (0);
while(true){
if((i__8610__auto___17677 < len__8609__auto___17676)){
args__8616__auto__.push((arguments[i__8610__auto___17677]));

var G__17678 = (i__8610__auto___17677 + (1));
i__8610__auto___17677 = G__17678;
continue;
} else {
}
break;
}

var argseq__8617__auto__ = ((((0) < args__8616__auto__.length))?(new cljs.core.IndexedSeq(args__8616__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__8617__auto__);
});})(g__17474__auto___17675))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17474__auto___17675){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__17474__auto___17675) : cljs.core.deref.call(null,g__17474__auto___17675));
});})(g__17474__auto___17675))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__17474__auto___17675){
return (function (seq17606){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17606));
});})(g__17474__auto___17675))
;


var g__17474__auto___17679 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string_DASH_alphanumeric),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string_DASH_alphanumeric)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__17474__auto___17679){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__8616__auto__ = [];
var len__8609__auto___17680 = arguments.length;
var i__8610__auto___17681 = (0);
while(true){
if((i__8610__auto___17681 < len__8609__auto___17680)){
args__8616__auto__.push((arguments[i__8610__auto___17681]));

var G__17682 = (i__8610__auto___17681 + (1));
i__8610__auto___17681 = G__17682;
continue;
} else {
}
break;
}

var argseq__8617__auto__ = ((((0) < args__8616__auto__.length))?(new cljs.core.IndexedSeq(args__8616__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__8617__auto__);
});})(g__17474__auto___17679))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17474__auto___17679){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__17474__auto___17679) : cljs.core.deref.call(null,g__17474__auto___17679));
});})(g__17474__auto___17679))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__17474__auto___17679){
return (function (seq17607){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17607));
});})(g__17474__auto___17679))
;


var g__17474__auto___17683 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_symbol),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_symbol)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__17474__auto___17683){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__8616__auto__ = [];
var len__8609__auto___17684 = arguments.length;
var i__8610__auto___17685 = (0);
while(true){
if((i__8610__auto___17685 < len__8609__auto___17684)){
args__8616__auto__.push((arguments[i__8610__auto___17685]));

var G__17686 = (i__8610__auto___17685 + (1));
i__8610__auto___17685 = G__17686;
continue;
} else {
}
break;
}

var argseq__8617__auto__ = ((((0) < args__8616__auto__.length))?(new cljs.core.IndexedSeq(args__8616__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__8617__auto__);
});})(g__17474__auto___17683))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17474__auto___17683){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__17474__auto___17683) : cljs.core.deref.call(null,g__17474__auto___17683));
});})(g__17474__auto___17683))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__17474__auto___17683){
return (function (seq17608){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17608));
});})(g__17474__auto___17683))
;


var g__17474__auto___17687 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_symbol_DASH_ns),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_symbol_DASH_ns)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__17474__auto___17687){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__8616__auto__ = [];
var len__8609__auto___17688 = arguments.length;
var i__8610__auto___17689 = (0);
while(true){
if((i__8610__auto___17689 < len__8609__auto___17688)){
args__8616__auto__.push((arguments[i__8610__auto___17689]));

var G__17690 = (i__8610__auto___17689 + (1));
i__8610__auto___17689 = G__17690;
continue;
} else {
}
break;
}

var argseq__8617__auto__ = ((((0) < args__8616__auto__.length))?(new cljs.core.IndexedSeq(args__8616__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__8617__auto__);
});})(g__17474__auto___17687))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17474__auto___17687){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__17474__auto___17687) : cljs.core.deref.call(null,g__17474__auto___17687));
});})(g__17474__auto___17687))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__17474__auto___17687){
return (function (seq17609){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17609));
});})(g__17474__auto___17687))
;


var g__17474__auto___17691 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_uuid),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_uuid)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__17474__auto___17691){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__8616__auto__ = [];
var len__8609__auto___17692 = arguments.length;
var i__8610__auto___17693 = (0);
while(true){
if((i__8610__auto___17693 < len__8609__auto___17692)){
args__8616__auto__.push((arguments[i__8610__auto___17693]));

var G__17694 = (i__8610__auto___17693 + (1));
i__8610__auto___17693 = G__17694;
continue;
} else {
}
break;
}

var argseq__8617__auto__ = ((((0) < args__8616__auto__.length))?(new cljs.core.IndexedSeq(args__8616__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__8617__auto__);
});})(g__17474__auto___17691))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17474__auto___17691){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__17474__auto___17691) : cljs.core.deref.call(null,g__17474__auto___17691));
});})(g__17474__auto___17691))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__17474__auto___17691){
return (function (seq17610){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17610));
});})(g__17474__auto___17691))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__8616__auto__ = [];
var len__8609__auto___17697 = arguments.length;
var i__8610__auto___17698 = (0);
while(true){
if((i__8610__auto___17698 < len__8609__auto___17697)){
args__8616__auto__.push((arguments[i__8610__auto___17698]));

var G__17699 = (i__8610__auto___17698 + (1));
i__8610__auto___17698 = G__17699;
continue;
} else {
}
break;
}

var argseq__8617__auto__ = ((((0) < args__8616__auto__.length))?(new cljs.core.IndexedSeq(args__8616__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__8617__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (p1__17695_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,p1__17695_SHARP_);
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.impl.gen.tuple,gens)], 0));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq17696){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17696));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace(ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable();
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns()], 0)),cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0)),cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0)),cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)),cljs.spec.impl.gen.any_printable()], null)], 0)),cljs.spec.impl.gen.boolean$(),cljs.spec.impl.gen.char$(),cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((function (simple){
return (function (p1__17700_SHARP_){
return (new Date(p1__17700_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer()], 0)),cljs.spec.impl.gen.symbol(),cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0)),cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0))], null)], 0)),cljs.spec.impl.gen.double$(),cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0)),cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple,simple], 0)),cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)], 0)),cljs.spec.impl.gen.string_alphanumeric(),cljs.spec.impl.gen.double$(),cljs.spec.impl.gen.large_integer(),cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple,simple], 0)),cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0))], null)], 0)),cljs.spec.impl.gen.keyword_ns(),cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0)),cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(0)], 0)),cljs.spec.impl.gen.keyword(),cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$max,(-1)], null)], 0)),cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)),cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns(),cljs.spec.impl.gen.symbol_ns()], null)], 0)),cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns(),cljs.spec.impl.gen.symbol_ns()], null)], 0))], 0)),cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([true], 0)),cljs.spec.impl.gen.large_integer(),cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$min,(0)], null)], 0)),cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$min,(1)], null)], 0)),cljs.spec.impl.gen.uuid(),cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([false], 0)),cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0)),cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword(),cljs.spec.impl.gen.symbol()], null)], 0)),cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer(),cljs.spec.impl.gen.double$()], null)], 0)),cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns()], 0)),cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)),cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0)),cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0)),cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple,simple], 0)),cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0)),cljs.spec.impl.gen.string_alphanumeric()], null)], 0)),cljs.spec.impl.gen.symbol_ns(),cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple,simple], 0)),cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0)),cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0)),cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0))], null)], 0))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_(pred)){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([pred], 0));
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.spec.impl.gen.gen_builtins) : cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins)),pred);
}
});
