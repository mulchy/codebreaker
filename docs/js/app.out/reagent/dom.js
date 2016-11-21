// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.debug');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(cljs.core.some_QMARK_(reagent.dom.imported)){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__7393__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__7393__auto__)){
return or__7393__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = (function (){var G__16561 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16561) : cljs.core.atom.call(null,G__16561));
})();
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module()["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_16564 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module()["render"])((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,((function (_STAR_always_update_STAR_16564){
return (function (){
var _STAR_always_update_STAR_16565 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render();

if(cljs.core.some_QMARK_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_16565;
}});})(_STAR_always_update_STAR_16564))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_16564;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args16566 = [];
var len__8609__auto___16569 = arguments.length;
var i__8610__auto___16570 = (0);
while(true){
if((i__8610__auto___16570 < len__8609__auto___16569)){
args16566.push((arguments[i__8610__auto___16570]));

var G__16571 = (i__8610__auto___16570 + (1));
i__8610__auto___16570 = G__16571;
continue;
} else {
}
break;
}

var G__16568 = args16566.length;
switch (G__16568) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16566.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_();

var f = (function (){
return reagent.impl.template.as_element(((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module()["findDOMNode"])(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__16577_16581 = cljs.core.seq(cljs.core.vals((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reagent.dom.roots) : cljs.core.deref.call(null,reagent.dom.roots))));
var chunk__16578_16582 = null;
var count__16579_16583 = (0);
var i__16580_16584 = (0);
while(true){
if((i__16580_16584 < count__16579_16583)){
var v_16585 = chunk__16578_16582.cljs$core$IIndexed$_nth$arity$2(null,i__16580_16584);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_16585);

var G__16586 = seq__16577_16581;
var G__16587 = chunk__16578_16582;
var G__16588 = count__16579_16583;
var G__16589 = (i__16580_16584 + (1));
seq__16577_16581 = G__16586;
chunk__16578_16582 = G__16587;
count__16579_16583 = G__16588;
i__16580_16584 = G__16589;
continue;
} else {
var temp__6753__auto___16590 = cljs.core.seq(seq__16577_16581);
if(temp__6753__auto___16590){
var seq__16577_16591__$1 = temp__6753__auto___16590;
if(cljs.core.chunked_seq_QMARK_(seq__16577_16591__$1)){
var c__8299__auto___16592 = cljs.core.chunk_first(seq__16577_16591__$1);
var G__16593 = cljs.core.chunk_rest(seq__16577_16591__$1);
var G__16594 = c__8299__auto___16592;
var G__16595 = cljs.core.count(c__8299__auto___16592);
var G__16596 = (0);
seq__16577_16581 = G__16593;
chunk__16578_16582 = G__16594;
count__16579_16583 = G__16595;
i__16580_16584 = G__16596;
continue;
} else {
var v_16597 = cljs.core.first(seq__16577_16591__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_16597);

var G__16598 = cljs.core.next(seq__16577_16591__$1);
var G__16599 = null;
var G__16600 = (0);
var G__16601 = (0);
seq__16577_16581 = G__16598;
chunk__16578_16582 = G__16599;
count__16579_16583 = G__16600;
i__16580_16584 = G__16601;
continue;
}
} else {
}
}
break;
}

return "Updated";
});
