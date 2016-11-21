// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__16015__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__16015 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16016__i = 0, G__16016__a = new Array(arguments.length -  0);
while (G__16016__i < G__16016__a.length) {G__16016__a[G__16016__i] = arguments[G__16016__i + 0]; ++G__16016__i;}
  args = new cljs.core.IndexedSeq(G__16016__a,0);
} 
return G__16015__delegate.call(this,args);};
G__16015.cljs$lang$maxFixedArity = 0;
G__16015.cljs$lang$applyTo = (function (arglist__16017){
var args = cljs.core.seq(arglist__16017);
return G__16015__delegate(args);
});
G__16015.cljs$core$IFn$_invoke$arity$variadic = G__16015__delegate;
return G__16015;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__16018__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__16018 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16019__i = 0, G__16019__a = new Array(arguments.length -  0);
while (G__16019__i < G__16019__a.length) {G__16019__a[G__16019__i] = arguments[G__16019__i + 0]; ++G__16019__i;}
  args = new cljs.core.IndexedSeq(G__16019__a,0);
} 
return G__16018__delegate.call(this,args);};
G__16018.cljs$lang$maxFixedArity = 0;
G__16018.cljs$lang$applyTo = (function (arglist__16020){
var args = cljs.core.seq(arglist__16020);
return G__16018__delegate(args);
});
G__16018.cljs$core$IFn$_invoke$arity$variadic = G__16018__delegate;
return G__16018;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.debug.warnings,null) : cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null));

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reagent.debug.warnings) : cljs.core.deref.call(null,reagent.debug.warnings));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.debug.warnings,null) : cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null));

reagent.debug.tracking = false;

return warns;
});
