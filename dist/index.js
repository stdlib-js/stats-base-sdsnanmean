"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var t=n(function(g,i){
var p=require('@stdlib/stats-base-sdsnanmeanors/dist');function y(e,r,a){return p(e,r,a)}i.exports=y
});var v=n(function(h,u){
var x=require('@stdlib/stats-base-sdsnanmeanors/dist').ndarray;function f(e,r,a,c){return x(e,r,a,c)}u.exports=f
});var q=n(function(k,o){
var j=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=t(),l=v();j(d,"ndarray",l);o.exports=d
});var R=require("path").join,_=require('@stdlib/utils-try-require/dist'),E=require('@stdlib/assert-is-error/dist'),O=q(),s,m=_(R(__dirname,"./native.js"));E(m)?s=O:s=m;module.exports=s;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
