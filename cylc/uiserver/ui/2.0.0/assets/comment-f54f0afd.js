import{Y}from"./index-4d6c7840.js";import{a as q}from"./codemirror-ab5992a1.js";function w(A,_){for(var v=0;v<_.length;v++){const b=_[v];if(typeof b!="string"&&!Array.isArray(b)){for(const s in b)if(s!=="default"&&!(s in A)){const r=Object.getOwnPropertyDescriptor(b,s);r&&Object.defineProperty(A,s,r.get?r:{enumerable:!0,get:()=>b[s]})}}}return Object.freeze(Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}))}var G={exports:{}};(function(A,_){(function(v){v(q)})(function(v){var b={},s=/[^\s\u00a0]/,r=v.Pos,B=v.cmpPos;function D(t){var l=t.search(s);return l==-1?0:l}v.commands.toggleComment=function(t){t.toggleComment()},v.defineExtension("toggleComment",function(t){t||(t=b);for(var l=this,n=1/0,e=this.listSelections(),g=null,m=e.length-1;m>=0;m--){var a=e[m].from(),i=e[m].to();a.line>=n||(i.line>=n&&(i=r(n,0)),n=a.line,g==null?l.uncomment(a,i,t)?g="un":(l.lineComment(a,i,t),g="line"):g=="un"?l.uncomment(a,i,t):l.lineComment(a,i,t))}});function F(t,l,n){return/\bstring\b/.test(t.getTokenTypeAt(r(l.line,0)))&&!/^[\'\"\`]/.test(n)}function M(t,l){var n=t.getMode();return n.useInnerComments===!1||!n.innerMode?n:t.getModeAt(l)}v.defineExtension("lineComment",function(t,l,n){n||(n=b);var e=this,g=M(e,t),m=e.getLine(t.line);if(!(m==null||F(e,t,m))){var a=n.lineComment||g.lineComment;if(!a){(n.blockCommentStart||g.blockCommentStart)&&(n.fullLines=!0,e.blockComment(t,l,n));return}var i=Math.min(l.ch!=0||l.line==t.line?l.line+1:l.line,e.lastLine()+1),C=n.padding==null?" ":n.padding,f=n.commentBlankLines||t.line==l.line;e.operation(function(){if(n.indent){for(var d=null,c=t.line;c<i;++c){var u=e.getLine(c),h=u.search(s)===-1?u:u.slice(0,D(u));(d==null||d.length>h.length)&&(d=h)}for(var c=t.line;c<i;++c){var u=e.getLine(c),o=d.length;!f&&!s.test(u)||(u.slice(0,o)!=d&&(o=D(u)),e.replaceRange(d+a+C,r(c,0),r(c,o)))}}else for(var c=t.line;c<i;++c)(f||s.test(e.getLine(c)))&&e.replaceRange(a+C,r(c,0))})}}),v.defineExtension("blockComment",function(t,l,n){n||(n=b);var e=this,g=M(e,t),m=n.blockCommentStart||g.blockCommentStart,a=n.blockCommentEnd||g.blockCommentEnd;if(!m||!a){(n.lineComment||g.lineComment)&&n.fullLines!=!1&&e.lineComment(t,l,n);return}if(!/\bcomment\b/.test(e.getTokenTypeAt(r(t.line,0)))){var i=Math.min(l.line,e.lastLine());i!=t.line&&l.ch==0&&s.test(e.getLine(i))&&--i;var C=n.padding==null?" ":n.padding;t.line>i||e.operation(function(){if(n.fullLines!=!1){var f=s.test(e.getLine(i));e.replaceRange(C+a,r(i)),e.replaceRange(m+C,r(t.line,0));var d=n.blockCommentLead||g.blockCommentLead;if(d!=null)for(var c=t.line+1;c<=i;++c)(c!=i||f)&&e.replaceRange(d+C,r(c,0))}else{var u=B(e.getCursor("to"),l)==0,h=!e.somethingSelected();e.replaceRange(a,l),u&&e.setSelection(h?l:e.getCursor("from"),l),e.replaceRange(m,t)}})}}),v.defineExtension("uncomment",function(t,l,n){n||(n=b);var e=this,g=M(e,t),m=Math.min(l.ch!=0||l.line==t.line?l.line:l.line-1,e.lastLine()),a=Math.min(t.line,m),i=n.lineComment||g.lineComment,C=[],f=n.padding==null?" ":n.padding,d;e:{if(!i)break e;for(var c=a;c<=m;++c){var u=e.getLine(c),h=u.indexOf(i);if(h>-1&&!/comment/.test(e.getTokenTypeAt(r(c,h+1)))&&(h=-1),h==-1&&s.test(u)||h>-1&&s.test(u.slice(0,h)))break e;C.push(u)}if(e.operation(function(){for(var k=a;k<=m;++k){var x=C[k-a],p=x.indexOf(i),L=p+i.length;p<0||(x.slice(L,L+f.length)==f&&(L+=f.length),d=!0,e.replaceRange("",r(k,p),r(k,L)))}}),d)return!0}var o=n.blockCommentStart||g.blockCommentStart,S=n.blockCommentEnd||g.blockCommentEnd;if(!o||!S)return!1;var P=n.blockCommentLead||g.blockCommentLead,E=e.getLine(a),T=E.indexOf(o);if(T==-1)return!1;var j=m==a?E:e.getLine(m),O=j.indexOf(S,m==a?T+o.length:0),N=r(a,T+1),W=r(m,O+1);if(O==-1||!/comment/.test(e.getTokenTypeAt(N))||!/comment/.test(e.getTokenTypeAt(W))||e.getRange(N,W,`
`).indexOf(S)>-1)return!1;var y=E.lastIndexOf(o,t.ch),R=y==-1?-1:E.slice(0,t.ch).indexOf(S,y+o.length);if(y!=-1&&R!=-1&&R+S.length!=t.ch)return!1;R=j.indexOf(S,l.ch);var $=j.slice(l.ch).lastIndexOf(o,R-l.ch);return y=R==-1||$==-1?-1:l.ch+$,R!=-1&&y!=-1&&y!=l.ch?!1:(e.operation(function(){e.replaceRange("",r(m,O-(f&&j.slice(O-f.length,O)==f?f.length:0)),r(m,O+S.length));var k=T+o.length;if(f&&E.slice(k,k+f.length)==f&&(k+=f.length),e.replaceRange("",r(a,T),r(a,k)),P)for(var x=a+1;x<=m;++x){var p=e.getLine(x),L=p.indexOf(P);if(!(L==-1||s.test(p.slice(0,L)))){var I=L+P.length;f&&p.slice(I,I+f.length)==f&&(I+=f.length),e.replaceRange("",r(x,L),r(x,I))}}}),!0)})})})();var z=G.exports;const H=Y(z),Q=w({__proto__:null,default:H},[z]);export{Q as c};
