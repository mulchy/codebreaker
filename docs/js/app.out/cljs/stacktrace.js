// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('cljs.stacktrace');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('clojure.string');
if(typeof cljs.stacktrace.parse_stacktrace !== 'undefined'){
} else {
/**
 * Parse a JavaScript stacktrace string into a canonical data form. The
 *   arguments:
 * 
 *   repl-env - the repl environment, an optional map with :host and :port keys
 *           if the stacktrace includes url, not file references
 *   st       - the original stacktrace string to parse
 *   err      - an error map. :ua-product key defines the type of stacktrace parser
 *           to use, for example :chrome
 *   opts     - additional options. :output-dir maybe given in this argument if
 *           :host and :port do not apply, for example, a file path
 * 
 *   The canonical stacktrace representation can easily be mapped to a
 *   ClojureScript one see mapped-stacktrace and mapped-stacktrace-str
 */
cljs.stacktrace.parse_stacktrace = (function (){var method_table__8419__auto__ = (function (){var G__16692 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16692) : cljs.core.atom.call(null,G__16692));
})();
var prefer_table__8420__auto__ = (function (){var G__16693 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16693) : cljs.core.atom.call(null,G__16693));
})();
var method_cache__8421__auto__ = (function (){var G__16694 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16694) : cljs.core.atom.call(null,G__16694));
})();
var cached_hierarchy__8422__auto__ = (function (){var G__16695 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16695) : cljs.core.atom.call(null,G__16695));
})();
var hierarchy__8423__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.stacktrace","parse-stacktrace"),((function (method_table__8419__auto__,prefer_table__8420__auto__,method_cache__8421__auto__,cached_hierarchy__8422__auto__,hierarchy__8423__auto__){
return (function (repl_env,st,err,opts){
return cljs.core.cst$kw$ua_DASH_product.cljs$core$IFn$_invoke$arity$1(err);
});})(method_table__8419__auto__,prefer_table__8420__auto__,method_cache__8421__auto__,cached_hierarchy__8422__auto__,hierarchy__8423__auto__))
,cljs.core.cst$kw$default,hierarchy__8423__auto__,method_table__8419__auto__,prefer_table__8420__auto__,method_cache__8421__auto__,cached_hierarchy__8422__auto__));
})();
}
cljs.stacktrace.parse_int = (function cljs$stacktrace$parse_int(s){
return parseInt(s,(10));
});
cljs.stacktrace.starts_with_QMARK_ = (function cljs$stacktrace$starts_with_QMARK_(s0,s1){
return goog.string.startsWith(s0,s1);
});
cljs.stacktrace.ends_with_QMARK_ = (function cljs$stacktrace$ends_with_QMARK_(s0,s1){
return goog.string.endsWith(s0,s1);
});
cljs.stacktrace.string__GT_regex = (function cljs$stacktrace$string__GT_regex(s){
return (new RegExp(s));
});
cljs.stacktrace.output_directory = (function cljs$stacktrace$output_directory(opts){
var or__7393__auto__ = cljs.core.cst$kw$output_DASH_dir.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__7393__auto__)){
return or__7393__auto__;
} else {
return "out";
}
});
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (repl_env,st,err,opts){
return st;
}));
cljs.stacktrace.parse_file_line_column = (function cljs$stacktrace$parse_file_line_column(flc){
if(cljs.core.not(cljs.core.re_find(/:/,flc))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [flc,null,null], null);
} else {
var xs = clojure.string.split.cljs$core$IFn$_invoke$arity$2(flc,/:/);
var vec__16713 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (xs){
return (function (p__16719,p__16720){
var vec__16721 = p__16719;
var pre = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16721,(0),null);
var post = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16721,(1),null);
var vec__16724 = p__16720;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16724,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16724,(1),null);
if((i <= (2))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(post,x)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(pre,x),post], null);
}
});})(xs))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,xs,cljs.core.range.cljs$core$IFn$_invoke$arity$3(cljs.core.count(xs),(0),(-1))));
var pre = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16713,(0),null);
var vec__16716 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16713,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16716,(0),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16716,(1),null);
var file = clojure.string.join.cljs$core$IFn$_invoke$arity$2(":",pre);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__16727 = file;
if(cljs.stacktrace.starts_with_QMARK_(file,"(")){
return clojure.string.replace(G__16727,"(","");
} else {
return G__16727;
}
})(),cljs.stacktrace.parse_int((function (){var G__16728 = line;
if(cljs.stacktrace.ends_with_QMARK_(line,")")){
return clojure.string.replace(G__16728,")","");
} else {
return G__16728;
}
})()),cljs.stacktrace.parse_int((function (){var G__16729 = column;
if(cljs.stacktrace.ends_with_QMARK_(column,")")){
return clojure.string.replace(G__16729,")","");
} else {
return G__16729;
}
})())], null);
}
});
/**
 * Given a browser file url convert it into a relative path that can be used
 * to locate the original source.
 */
cljs.stacktrace.parse_file = (function cljs$stacktrace$parse_file(p__16730,file,p__16731){
var map__16736 = p__16730;
var map__16736__$1 = ((((!((map__16736 == null)))?((((map__16736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16736.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16736):map__16736);
var repl_env = map__16736__$1;
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16736__$1,cljs.core.cst$kw$host);
var host_port = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16736__$1,cljs.core.cst$kw$host_DASH_port);
var port = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16736__$1,cljs.core.cst$kw$port);
var map__16737 = p__16731;
var map__16737__$1 = ((((!((map__16737 == null)))?((((map__16737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16737.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16737):map__16737);
var opts = map__16737__$1;
var asset_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16737__$1,cljs.core.cst$kw$asset_DASH_path);
var urlpat = (cljs.core.truth_(host)?cljs.stacktrace.string__GT_regex([cljs.core.str("http://"),cljs.core.str(host),cljs.core.str(":"),cljs.core.str((function (){var or__7393__auto__ = host_port;
if(cljs.core.truth_(or__7393__auto__)){
return or__7393__auto__;
} else {
return port;
}
})()),cljs.core.str("/")].join('')):"");
var match = (cljs.core.truth_(host)?cljs.core.re_find(urlpat,file):cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$output_DASH_dir));
if(cljs.core.truth_(match)){
return clojure.string.replace(clojure.string.replace(file,urlpat,""),cljs.stacktrace.string__GT_regex([cljs.core.str("^"),cljs.core.str((function (){var or__7393__auto__ = (function (){var and__7381__auto__ = asset_path;
if(cljs.core.truth_(and__7381__auto__)){
return clojure.string.replace(asset_path,/^\//,"");
} else {
return and__7381__auto__;
}
})();
if(cljs.core.truth_(or__7393__auto__)){
return or__7393__auto__;
} else {
return cljs.stacktrace.output_directory(opts);
}
})()),cljs.core.str("/")].join('')),"");
} else {
var temp__6751__auto__ = cljs.core.cst$kw$asset_DASH_root.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__6751__auto__)){
var asset_root = temp__6751__auto__;
return clojure.string.replace(file,asset_root,"");
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Could not relativize URL "),cljs.core.str(file)].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$parse_DASH_stacktrace,cljs.core.cst$kw$reason,cljs.core.cst$kw$relativize_DASH_url], null));
}
}
});
cljs.stacktrace.chrome_st_el__GT_frame = (function cljs$stacktrace$chrome_st_el__GT_frame(repl_env,st_el,opts){
var xs = clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.replace(st_el,/\s+at\s+/,""),/\s+/);
var vec__16746 = ((((1) === cljs.core.count(xs)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.first(xs)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(xs),cljs.core.last(xs)], null));
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16746,(0),null);
var flc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16746,(1),null);
var vec__16749 = cljs.stacktrace.parse_file_line_column(flc);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16749,(0),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16749,(1),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16749,(2),null);
if(cljs.core.truth_((function (){var and__7381__auto__ = file;
if(cljs.core.truth_(and__7381__auto__)){
var and__7381__auto____$1 = function$;
if(cljs.core.truth_(and__7381__auto____$1)){
var and__7381__auto____$2 = line;
if(cljs.core.truth_(and__7381__auto____$2)){
return column;
} else {
return and__7381__auto____$2;
}
} else {
return and__7381__auto____$1;
}
} else {
return and__7381__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$file,cljs.stacktrace.parse_file(repl_env,file,opts),cljs.core.cst$kw$function,clojure.string.replace(function$,/Object\./,""),cljs.core.cst$kw$line,line,cljs.core.cst$kw$column,column], null);
} else {
if(clojure.string.blank_QMARK_(function$)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$file,null,cljs.core.cst$kw$function,clojure.string.replace(function$,/Object\./,""),cljs.core.cst$kw$line,null,cljs.core.cst$kw$column,null], null);
}
}
});
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$chrome,(function (repl_env,st,err,opts){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16754_SHARP_){
return cljs.stacktrace.chrome_st_el__GT_frame(repl_env,p1__16754_SHARP_,opts);
}),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__16753_SHARP_){
return !(cljs.stacktrace.starts_with_QMARK_(p1__16753_SHARP_,"    at eval"));
}),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__16752_SHARP_){
return cljs.stacktrace.starts_with_QMARK_(p1__16752_SHARP_,"Error");
}),clojure.string.split_lines(st))))));
}));
cljs.stacktrace.safari_st_el__GT_frame = (function cljs$stacktrace$safari_st_el__GT_frame(repl_env,st_el,opts){
var vec__16761 = (cljs.core.truth_(cljs.core.re_find(/@/,st_el))?clojure.string.split.cljs$core$IFn$_invoke$arity$2(st_el,/@/):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,st_el], null));
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16761,(0),null);
var flc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16761,(1),null);
var vec__16764 = cljs.stacktrace.parse_file_line_column(flc);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16764,(0),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16764,(1),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16764,(2),null);
if(cljs.core.truth_((function (){var and__7381__auto__ = file;
if(cljs.core.truth_(and__7381__auto__)){
var and__7381__auto____$1 = function$;
if(cljs.core.truth_(and__7381__auto____$1)){
var and__7381__auto____$2 = line;
if(cljs.core.truth_(and__7381__auto____$2)){
return column;
} else {
return and__7381__auto____$2;
}
} else {
return and__7381__auto____$1;
}
} else {
return and__7381__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$file,cljs.stacktrace.parse_file(repl_env,file,opts),cljs.core.cst$kw$function,clojure.string.trim(function$),cljs.core.cst$kw$line,line,cljs.core.cst$kw$column,column], null);
} else {
if(clojure.string.blank_QMARK_(function$)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$file,null,cljs.core.cst$kw$function,clojure.string.trim(function$),cljs.core.cst$kw$line,null,cljs.core.cst$kw$column,null], null);
}
}
});
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$safari,(function (repl_env,st,err,opts){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16769_SHARP_){
return cljs.stacktrace.safari_st_el__GT_frame(repl_env,p1__16769_SHARP_,opts);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__16768_SHARP_){
return !(cljs.stacktrace.starts_with_QMARK_(p1__16768_SHARP_,"eval code"));
}),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__16767_SHARP_){
return cljs.stacktrace.starts_with_QMARK_(p1__16767_SHARP_,"Error");
}),clojure.string.split_lines(st)))))));
}));
cljs.stacktrace.firefox_clean_function = (function cljs$stacktrace$firefox_clean_function(f){
var f__$1 = f;
var f__$2 = ((clojure.string.blank_QMARK_(f__$1))?null:((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(f__$1.indexOf("</"),(-1)))?(function (){var idx = f__$1.indexOf("</");
return f__$1.substring((idx + (2)));
})():f__$1
));
return clojure.string.replace(clojure.string.replace(f__$2,/</,""),(new RegExp("\\/")),"");
});
cljs.stacktrace.firefox_st_el__GT_frame = (function cljs$stacktrace$firefox_st_el__GT_frame(repl_env,st_el,opts){
var vec__16776 = (cljs.core.truth_(cljs.core.re_find(/@/,st_el))?clojure.string.split.cljs$core$IFn$_invoke$arity$2(st_el,/@/):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,st_el], null));
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16776,(0),null);
var flc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16776,(1),null);
var vec__16779 = cljs.stacktrace.parse_file_line_column(flc);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16779,(0),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16779,(1),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16779,(2),null);
if(cljs.core.truth_((function (){var and__7381__auto__ = file;
if(cljs.core.truth_(and__7381__auto__)){
var and__7381__auto____$1 = function$;
if(cljs.core.truth_(and__7381__auto____$1)){
var and__7381__auto____$2 = line;
if(cljs.core.truth_(and__7381__auto____$2)){
return column;
} else {
return and__7381__auto____$2;
}
} else {
return and__7381__auto____$1;
}
} else {
return and__7381__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$file,cljs.stacktrace.parse_file(repl_env,file,opts),cljs.core.cst$kw$function,cljs.stacktrace.firefox_clean_function(function$),cljs.core.cst$kw$line,line,cljs.core.cst$kw$column,column], null);
} else {
if(clojure.string.blank_QMARK_(function$)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$file,null,cljs.core.cst$kw$function,cljs.stacktrace.firefox_clean_function(function$),cljs.core.cst$kw$line,null,cljs.core.cst$kw$column,null], null);
}
}
});
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$firefox,(function (repl_env,st,err,opts){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16784_SHARP_){
return cljs.stacktrace.firefox_st_el__GT_frame(repl_env,p1__16784_SHARP_,opts);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__16783_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__16783_SHARP_.indexOf("> eval"),(-1));
}),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__16782_SHARP_){
return cljs.stacktrace.starts_with_QMARK_(p1__16782_SHARP_,"Error");
}),clojure.string.split_lines(st)))))));
}));
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$rhino,(function (repl_env,st,err,p__16785){
var map__16786 = p__16785;
var map__16786__$1 = ((((!((map__16786 == null)))?((((map__16786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16786.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16786):map__16786);
var opts = map__16786__$1;
var output_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16786__$1,cljs.core.cst$kw$output_DASH_dir);
var process_frame = ((function (map__16786,map__16786__$1,opts,output_dir){
return (function cljs$stacktrace$process_frame(frame_str){
if((clojure.string.blank_QMARK_(frame_str)) || (((-1) === frame_str.indexOf("\tat")))){
return null;
} else {
var vec__16806 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(frame_str,/:/);
var file_side = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16806,(0),null);
var line_fn_side = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16806,(1),null);
var file = clojure.string.replace(file_side,/\s+at\s+/,"");
var vec__16809 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(line_fn_side,/\s+/);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16809,(0),null);
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16809,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$file,clojure.string.replace(file,[cljs.core.str(output_dir),cljs.core.str("/")].join(''),""),cljs.core.cst$kw$function,(cljs.core.truth_(function$)?clojure.string.replace(clojure.string.replace(function$,"(",""),")",""):null),cljs.core.cst$kw$line,(cljs.core.truth_((function (){var and__7381__auto__ = line;
if(cljs.core.truth_(and__7381__auto__)){
return !(clojure.string.blank_QMARK_(line));
} else {
return and__7381__auto__;
}
})())?cljs.stacktrace.parse_int(line):null),cljs.core.cst$kw$column,(0)], null);
}
});})(map__16786,map__16786__$1,opts,output_dir))
;
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(process_frame,clojure.string.split.cljs$core$IFn$_invoke$arity$2(st,/\n/))));
}));
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$nashorn,(function (repl_env,st,err,p__16812){
var map__16813 = p__16812;
var map__16813__$1 = ((((!((map__16813 == null)))?((((map__16813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16813.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16813):map__16813);
var opts = map__16813__$1;
var output_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16813__$1,cljs.core.cst$kw$output_DASH_dir);
var process_frame = ((function (map__16813,map__16813__$1,opts,output_dir){
return (function cljs$stacktrace$process_frame(frame_str){
if((clojure.string.blank_QMARK_(frame_str)) || (((-1) === frame_str.indexOf("\tat")))){
return null;
} else {
var frame_str__$1 = clojure.string.replace(frame_str,/\s+at\s+/,"");
var vec__16833 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(frame_str__$1,/\s+/);
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16833,(0),null);
var file_and_line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16833,(1),null);
var vec__16836 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(file_and_line,/:/);
var file_part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16836,(0),null);
var line_part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16836,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$file,clojure.string.replace(file_part.substring((1)),[cljs.core.str(output_dir),cljs.core.str("/")].join(''),""),cljs.core.cst$kw$function,function$,cljs.core.cst$kw$line,(cljs.core.truth_((function (){var and__7381__auto__ = line_part;
if(cljs.core.truth_(and__7381__auto__)){
return !(clojure.string.blank_QMARK_(line_part));
} else {
return and__7381__auto__;
}
})())?cljs.stacktrace.parse_int(line_part.substring((0),(cljs.core.count(line_part) - (1)))):null),cljs.core.cst$kw$column,(0)], null);
}
});})(map__16813,map__16813__$1,opts,output_dir))
;
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(process_frame,clojure.string.split.cljs$core$IFn$_invoke$arity$2(st,/\n/))));
}));
cljs.stacktrace.parse_stacktrace.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$nodejs,(function (repl_env,st,err,p__16839){
var map__16840 = p__16839;
var map__16840__$1 = ((((!((map__16840 == null)))?((((map__16840.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16840.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16840):map__16840);
var opts = map__16840__$1;
var output_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16840__$1,cljs.core.cst$kw$output_DASH_dir);
var parse_source_loc_info = ((function (map__16840,map__16840__$1,opts,output_dir){
return (function cljs$stacktrace$parse_source_loc_info(x){
if(cljs.core.truth_((function (){var and__7381__auto__ = x;
if(cljs.core.truth_(and__7381__auto__)){
return !(clojure.string.blank_QMARK_(x));
} else {
return and__7381__auto__;
}
})())){
return cljs.stacktrace.parse_int(x);
} else {
return null;
}
});})(map__16840,map__16840__$1,opts,output_dir))
;
var process_frame = ((function (map__16840,map__16840__$1,opts,output_dir){
return (function cljs$stacktrace$process_frame(frame_str){
if((clojure.string.blank_QMARK_(frame_str)) || ((cljs.core.re_find(/^\s+at/,frame_str) == null))){
return null;
} else {
var frame_str__$1 = clojure.string.replace(frame_str,/\s+at\s+/,"");
if(clojure.string.starts_with_QMARK_(frame_str__$1,"repl:")){
return null;
} else {
var parts = clojure.string.split.cljs$core$IFn$_invoke$arity$2(frame_str__$1,/\s+/);
var vec__16863 = ((((2) === cljs.core.count(parts)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(parts),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(cljs.core.second(parts),(1),(cljs.core.count(cljs.core.second(parts)) - (1)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.first(parts)], null));
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16863,(0),null);
var file_AMPERSAND_line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16863,(1),null);
var vec__16866 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(file_AMPERSAND_line,/:/);
var file_part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16866,(0),null);
var line_part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16866,(1),null);
var col_part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16866,(2),null);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$file,(cljs.core.truth_(function$)?(function (){var G__16869 = file_part;
if(cljs.core.truth_(output_dir)){
return clojure.string.replace(G__16869,[cljs.core.str(output_dir),cljs.core.str("/")].join(''),"");
} else {
return G__16869;
}
})():file_part),cljs.core.cst$kw$function,function$,cljs.core.cst$kw$line,parse_source_loc_info(line_part),cljs.core.cst$kw$column,parse_source_loc_info(col_part)], null);
}
}
});})(map__16840,map__16840__$1,opts,output_dir))
;
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(process_frame,clojure.string.split.cljs$core$IFn$_invoke$arity$2(st,/\n/))));
}));
cljs.stacktrace.remove_ext = (function cljs$stacktrace$remove_ext(file){
return clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(file,/\.js$/,""),/\.cljs$/,""),/\.cljc$/,""),/\.clj$/,"");
});
/**
 * Given a cljs.source-map source map data structure map a generated line
 * and column back to the original line, column, and function called.
 */
cljs.stacktrace.mapped_line_column_call = (function cljs$stacktrace$mapped_line_column_call(sms,file,line,column){
var source_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(sms,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(cljs.stacktrace.remove_ext(file),"/",".")));
var get_best_column = ((function (source_map){
return (function cljs$stacktrace$mapped_line_column_call_$_get_best_column(columns,column__$1){
return cljs.core.last((function (){var or__7393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(columns,cljs.core.last(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (source_map){
return (function (p1__16870_SHARP_){
return (p1__16870_SHARP_ <= (column__$1 - (1)));
});})(source_map))
,cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.keys(columns)))));
if(cljs.core.truth_(or__7393__auto__)){
return or__7393__auto__;
} else {
return cljs.core.second(cljs.core.first(columns));
}
})());
});})(source_map))
;
var adjust = ((function (source_map){
return (function cljs$stacktrace$mapped_line_column_call_$_adjust(mapped){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (source_map){
return (function (p1__16871_SHARP_,p2__16872_SHARP_){
return (p1__16871_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16871_SHARP_.cljs$core$IFn$_invoke$arity$1(p2__16872_SHARP_) : p1__16871_SHARP_.call(null,p2__16872_SHARP_));
});})(source_map))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.inc,cljs.core.inc,cljs.core.identity], null),mapped));
});})(source_map))
;
var default$ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,column,null], null);
var temp__6751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(source_map,(line - (1)));
if(cljs.core.truth_(temp__6751__auto__)){
var columns = temp__6751__auto__;
return adjust(cljs.core.map.cljs$core$IFn$_invoke$arity$2(get_best_column(columns,column),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,cljs.core.cst$kw$col,cljs.core.cst$kw$name], null)));
} else {
return default$;
}
});
/**
 * Given opts and a canonicalized JavaScript stacktrace frame, return the
 *   ClojureScript frame.
 */
cljs.stacktrace.mapped_frame = (function cljs$stacktrace$mapped_frame(p__16873,sms,opts){
var map__16879 = p__16873;
var map__16879__$1 = ((((!((map__16879 == null)))?((((map__16879.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16879.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16879):map__16879);
var function$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16879__$1,cljs.core.cst$kw$function);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16879__$1,cljs.core.cst$kw$file);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16879__$1,cljs.core.cst$kw$line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16879__$1,cljs.core.cst$kw$column);
var no_source_file_QMARK_ = ((cljs.core.not(file))?true:cljs.stacktrace.starts_with_QMARK_(file,"<"));
var vec__16881 = ((no_source_file_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,column,null], null):cljs.stacktrace.mapped_line_column_call(sms,file,line,column));
var line_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16881,(0),null);
var column_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16881,(1),null);
var call = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16881,(2),null);
var file_SINGLEQUOTE_ = ((no_source_file_QMARK_)?null:((cljs.stacktrace.ends_with_QMARK_(file,".js"))?[cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(file,(0),(cljs.core.count(file) - (3)))),cljs.core.str(".cljs")].join(''):file));
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$function,function$,cljs.core.cst$kw$call,call,cljs.core.cst$kw$file,((no_source_file_QMARK_)?[cljs.core.str("NO_SOURCE_FILE"),cljs.core.str((cljs.core.truth_(file)?[cljs.core.str(" "),cljs.core.str(file)].join(''):null))].join(''):file_SINGLEQUOTE_),cljs.core.cst$kw$line,line_SINGLEQUOTE_,cljs.core.cst$kw$column,column_SINGLEQUOTE_], null);
});
/**
 * Given a vector representing the canonicalized JavaScript stacktrace
 * return the ClojureScript stacktrace. The canonical stacktrace must be
 * in the form:
 * 
 *  [{:file <string>
 *    :function <string>
 *    :line <integer>
 *    :column <integer>}*]
 * 
 * :file must be a URL path (without protocol) relative to :output-dir or a
 * identifier delimited by angle brackets. The returned mapped stacktrace will
 * also contain :url entries to the original sources if it can be determined
 * from the classpath.
 */
cljs.stacktrace.mapped_stacktrace = (function cljs$stacktrace$mapped_stacktrace(var_args){
var args16886 = [];
var len__8609__auto___16889 = arguments.length;
var i__8610__auto___16890 = (0);
while(true){
if((i__8610__auto___16890 < len__8609__auto___16889)){
args16886.push((arguments[i__8610__auto___16890]));

var G__16891 = (i__8610__auto___16890 + (1));
i__8610__auto___16890 = G__16891;
continue;
} else {
}
break;
}

var G__16888 = args16886.length;
switch (G__16888) {
case 2:
return cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16886.length)].join('')));

}
});

cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$2 = (function (stacktrace,sms){
return cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$3(stacktrace,sms,null);
});

cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$3 = (function (stacktrace,sms,opts){
var call__GT_function = (function cljs$stacktrace$call__GT_function(x){
if(cljs.core.truth_(cljs.core.cst$kw$call.cljs$core$IFn$_invoke$arity$1(x))){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$function],[cljs.core.cst$kw$call.cljs$core$IFn$_invoke$arity$1(x)]);
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
var call_merge = (function cljs$stacktrace$call_merge(function$,call){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic((function (munged_fn_name,unmunged_call_name){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(munged_fn_name,clojure.string.replace(cljs.core.munge(unmunged_call_name),".","$"))){
return unmunged_call_name;
} else {
return munged_fn_name;
}
}),cljs.core.array_seq([function$,call], 0));
});
var mapped_frames = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.memoize((function (p1__16884_SHARP_){
return cljs.stacktrace.mapped_frame(p1__16884_SHARP_,sms,opts);
})),stacktrace);
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$3(call_merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (mapped_frames){
return (function (p1__16885_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__16885_SHARP_,cljs.core.cst$kw$call);
});})(mapped_frames))
,mapped_frames),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(cljs.core.map.cljs$core$IFn$_invoke$arity$2(call__GT_function,mapped_frames)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null))));
});

cljs.stacktrace.mapped_stacktrace.cljs$lang$maxFixedArity = 3;

/**
 * Given a vector representing the canonicalized JavaScript stacktrace and a map
 *   of library names to decoded source maps, print the ClojureScript stacktrace .
 *   See mapped-stacktrace.
 */
cljs.stacktrace.mapped_stacktrace_str = (function cljs$stacktrace$mapped_stacktrace_str(var_args){
var args16893 = [];
var len__8609__auto___16906 = arguments.length;
var i__8610__auto___16907 = (0);
while(true){
if((i__8610__auto___16907 < len__8609__auto___16906)){
args16893.push((arguments[i__8610__auto___16907]));

var G__16908 = (i__8610__auto___16907 + (1));
i__8610__auto___16907 = G__16908;
continue;
} else {
}
break;
}

var G__16895 = args16893.length;
switch (G__16895) {
case 2:
return cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16893.length)].join('')));

}
});

cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$2 = (function (stacktrace,sms){
return cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$3(stacktrace,sms,null);
});

cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$3 = (function (stacktrace,sms,opts){
var sb__8480__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_16896_16910 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_16897_16911 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_16896_16910,_STAR_print_fn_STAR_16897_16911,sb__8480__auto__){
return (function (x__8481__auto__){
return sb__8480__auto__.append(x__8481__auto__);
});})(_STAR_print_newline_STAR_16896_16910,_STAR_print_fn_STAR_16897_16911,sb__8480__auto__))
;

try{var seq__16898_16912 = cljs.core.seq(cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$3(stacktrace,sms,opts));
var chunk__16899_16913 = null;
var count__16900_16914 = (0);
var i__16901_16915 = (0);
while(true){
if((i__16901_16915 < count__16900_16914)){
var map__16902_16916 = chunk__16899_16913.cljs$core$IIndexed$_nth$arity$2(null,i__16901_16915);
var map__16902_16917__$1 = ((((!((map__16902_16916 == null)))?((((map__16902_16916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16902_16916.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16902_16916):map__16902_16916);
var function_16918 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16902_16917__$1,cljs.core.cst$kw$function);
var file_16919 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16902_16917__$1,cljs.core.cst$kw$file);
var line_16920 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16902_16917__$1,cljs.core.cst$kw$line);
var column_16921 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16902_16917__$1,cljs.core.cst$kw$column);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\t",[cljs.core.str((cljs.core.truth_(function_16918)?[cljs.core.str(function_16918),cljs.core.str(" ")].join(''):null)),cljs.core.str("("),cljs.core.str(file_16919),cljs.core.str((cljs.core.truth_(line_16920)?[cljs.core.str(":"),cljs.core.str(line_16920)].join(''):null)),cljs.core.str((cljs.core.truth_(column_16921)?[cljs.core.str(":"),cljs.core.str(column_16921)].join(''):null)),cljs.core.str(")")].join('')], 0));

var G__16922 = seq__16898_16912;
var G__16923 = chunk__16899_16913;
var G__16924 = count__16900_16914;
var G__16925 = (i__16901_16915 + (1));
seq__16898_16912 = G__16922;
chunk__16899_16913 = G__16923;
count__16900_16914 = G__16924;
i__16901_16915 = G__16925;
continue;
} else {
var temp__6753__auto___16926 = cljs.core.seq(seq__16898_16912);
if(temp__6753__auto___16926){
var seq__16898_16927__$1 = temp__6753__auto___16926;
if(cljs.core.chunked_seq_QMARK_(seq__16898_16927__$1)){
var c__8299__auto___16928 = cljs.core.chunk_first(seq__16898_16927__$1);
var G__16929 = cljs.core.chunk_rest(seq__16898_16927__$1);
var G__16930 = c__8299__auto___16928;
var G__16931 = cljs.core.count(c__8299__auto___16928);
var G__16932 = (0);
seq__16898_16912 = G__16929;
chunk__16899_16913 = G__16930;
count__16900_16914 = G__16931;
i__16901_16915 = G__16932;
continue;
} else {
var map__16904_16933 = cljs.core.first(seq__16898_16927__$1);
var map__16904_16934__$1 = ((((!((map__16904_16933 == null)))?((((map__16904_16933.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16904_16933.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16904_16933):map__16904_16933);
var function_16935 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16904_16934__$1,cljs.core.cst$kw$function);
var file_16936 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16904_16934__$1,cljs.core.cst$kw$file);
var line_16937 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16904_16934__$1,cljs.core.cst$kw$line);
var column_16938 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16904_16934__$1,cljs.core.cst$kw$column);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\t",[cljs.core.str((cljs.core.truth_(function_16935)?[cljs.core.str(function_16935),cljs.core.str(" ")].join(''):null)),cljs.core.str("("),cljs.core.str(file_16936),cljs.core.str((cljs.core.truth_(line_16937)?[cljs.core.str(":"),cljs.core.str(line_16937)].join(''):null)),cljs.core.str((cljs.core.truth_(column_16938)?[cljs.core.str(":"),cljs.core.str(column_16938)].join(''):null)),cljs.core.str(")")].join('')], 0));

var G__16939 = cljs.core.next(seq__16898_16927__$1);
var G__16940 = null;
var G__16941 = (0);
var G__16942 = (0);
seq__16898_16912 = G__16939;
chunk__16899_16913 = G__16940;
count__16900_16914 = G__16941;
i__16901_16915 = G__16942;
continue;
}
} else {
}
}
break;
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_16897_16911;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_16896_16910;
}
return [cljs.core.str(sb__8480__auto__)].join('');
});

cljs.stacktrace.mapped_stacktrace_str.cljs$lang$maxFixedArity = 3;

