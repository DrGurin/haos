(function(t){function s(s){for(var e,n,h=s[0],a=s[1],p=s[2],l=0,c=[];l<h.length;l++)n=h[l],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&c.push(o[n][0]),o[n]=0;for(e in a)Object.prototype.hasOwnProperty.call(a,e)&&(t[e]=a[e]);d&&d(s);while(c.length)c.shift()();return r.push.apply(r,p||[]),i()}function i(){for(var t,s=0;s<r.length;s++){for(var i=r[s],e=!0,h=1;h<i.length;h++){var a=i[h];0!==o[a]&&(e=!1)}e&&(r.splice(s--,1),t=n(n.s=i[0]))}return t}var e={},o={app:0},r=[];function n(s){if(e[s])return e[s].exports;var i=e[s]={i:s,l:!1,exports:{}};return t[s].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,s,i){n.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:i})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,s){if(1&s&&(t=n(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var e in t)n.d(i,e,function(s){return t[s]}.bind(null,e));return i},n.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(s,"a",s),s},n.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},n.p="";var h=window["webpackJsonp"]=window["webpackJsonp"]||[],a=h.push.bind(h);h.push=s,h=h.slice();for(var p=0;p<h.length;p++)s(h[p]);var d=a;r.push([0,"chunk-vendors"]),i()})({0:function(t,s,i){t.exports=i("56d7")},"034f":function(t,s,i){"use strict";var e=i("64a9"),o=i.n(e);o.a},"56d7":function(t,s,i){"use strict";i.r(s);var e=i("2b0e"),o=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"app"}},[i("div",{staticClass:"content_up",on:{mousemove:t.getCoordinate,click:t.stopDrag}},[i("button",{staticClass:"pa button open-controlls open-controlls-fake",attrs:{id:"show-controlls"},on:{click:function(s){return t.showControlls()}}},[t._v(t._s(t.statusOfControls[0])+" controlls")]),t.showFirstTop?i("div",{staticClass:"top pa top_first",style:t.getPositionFirstTop}):t._e(),t.showSecondTop?i("div",{staticClass:"top pa top_second",style:t.getPositionSecondTop}):t._e(),t.showThirdTop?i("div",{staticClass:"top pa top_third",style:t.getPositionThirdTop}):t._e(),t.showStartTop?i("div",{staticClass:"top pa top_start",style:t.getPositionStartTop}):t._e(),t._l(t.dots,(function(t,s){return i("div",{key:s,staticClass:"it-dot pa",style:t})})),t.showFirstTop&&t.showSecondTop&&t.showThirdTop?i("div",{staticClass:"line pa line_first",style:t.getWidthFirst}):t._e(),t.showFirstTop&&t.showSecondTop&&t.showThirdTop?i("div",{staticClass:"line pa line_second",style:t.getWidthSecond}):t._e(),t.showFirstTop&&t.showSecondTop&&t.showThirdTop?i("div",{staticClass:"line pa line_third",style:t.getWidthThird}):t._e()],2),i("div",{staticClass:"content_down",class:[t.isControllsOpened?"content_down-show":"content_down-hide",""]},[i("button",{staticClass:"pa button open-controlls",attrs:{id:"show-controlls"},on:{click:function(s){return t.showControlls()}}},[t._v(t._s(t.statusOfControls[0])+" controlls")]),i("div",{staticClass:"data_status"},[i("p",{staticClass:"iterator"},[t._v("Quantity of iterations: "+t._s(t.dots.length))])]),i("div",{staticClass:"button_wrapper"},[i("div",{staticClass:"subwrapper set_tops"},[i("button",{staticClass:"button set_top set_top_first",attrs:{id:"setTopFirst"},on:{click:function(s){return t.setTopFirst()}}},[t._v("Set first top")]),i("button",{staticClass:"button set_top set_top_second",attrs:{id:"setTopSecond"},on:{click:function(s){return t.setSecondTop()}}},[t._v("Set second top")]),i("button",{staticClass:"button set_top set_top_third",attrs:{id:"setTopThird"},on:{click:function(s){return t.setThirdTop()}}},[t._v("Set third top")]),i("button",{staticClass:"button set_top set_top_start",attrs:{id:"setTopStart"},on:{click:function(s){return t.setStartTop()}}},[t._v("Set start top")]),i("br"),i("button",{staticClass:"button reset_top",on:{click:function(s){return t.resetTops()}}},[t._v("RESET")]),i("button",{staticClass:"button create_triangle",on:{click:function(s){return t.createTriangle()}}},[t._v("Create triangle")]),i("button",{staticClass:"button stop_interval",attrs:{id:"stopInterval"},on:{click:function(s){return t.startInterval()}}},[t._v("Start iteration")]),i("br"),i("button",{staticClass:"button stop_interval",attrs:{id:"stopInterval"},on:{click:function(s){return t.stopInterval()}}},[t._v("Stop iteration")]),i("br")])])])])},r=[],n=(i("3022"),{name:"app",data(){return{isControllsOpened:!1,statusOfControls:["Show"],showFirstTop:!1,dragableFirst:!1,showSecondTop:!1,dragableSecond:!1,showThirdTop:!1,dragableThird:!1,showStartTop:!1,dragableStart:!1,firstTop:0,firstLeft:0,secondTop:0,secondLeft:0,thirdTop:0,thirdLeft:0,lengthFirst:0,firstAngle:0,lengthSecond:0,secondAngle:0,lengthThird:0,thirdAngle:0,dots:[],newDot:null,newTop:0,newLeft:0}},methods:{showControlls(){this.isControllsOpened=!this.isControllsOpened,this.statusOfControls.splice(1,1),this.isControllsOpened?this.statusOfControls.unshift("Hide"):this.statusOfControls.unshift("Show")},randomTop(){let t=.5+3*Math.random();return Math.round(t)},setCoordinates(){let t=this.randomTop();1==t?(this.newTop=.5*(this.firstTop+this.newTop),this.newLeft=.5*(this.firstLeft+this.newLeft),this.newDot=`top: ${this.newTop}px; left: ${this.newLeft}px`,this.dots.push(this.newDot)):2==t?(this.newTop=.5*(this.secondTop+this.newTop),this.newLeft=.5*(this.secondLeft+this.newLeft),this.newDot=`top: ${this.newTop}px; left: ${this.newLeft}px`,this.dots.push(this.newDot)):3==t&&(this.newTop=.5*(this.thirdTop+this.newTop),this.newLeft=.5*(this.thirdLeft+this.newLeft),this.newDot=`top: ${this.newTop}px; left: ${this.newLeft}px`,this.dots.push(this.newDot))},stopDrag(t){1==this.dragableFirst?(this.dragableFirst=!1,this.dragableSecond=!1,this.dragableThird=!1,this.dragableStart=!1,this.firstTop=t.clientY,this.firstLeft=t.clientX):1==this.dragableSecond?(this.dragableFirst=!1,this.dragableSecond=!1,this.dragableThird=!1,this.dragableStart=!1,this.secondTop=t.clientY,this.secondLeft=t.clientX):1==this.dragableThird?(this.dragableFirst=!1,this.dragableSecond=!1,this.dragableThird=!1,this.dragableStart=!1,this.thirdTop=t.clientY,this.thirdLeft=t.clientX):1==this.dragableStart&&(this.dragableFirst=!1,this.dragableSecond=!1,this.dragableThird=!1,this.dragableStart=!1,this.newTop=t.clientY,this.newLeft=t.clientX)},getCoordinate(t){this.dragableFirst&&this.showFirstTop?(this.firstTop=t.clientY,this.firstLeft=t.clientX):this.dragableSecond&&this.showSecondTop?(this.secondTop=t.clientY,this.secondLeft=t.clientX):this.dragableThird&&this.showThirdTop?(this.thirdTop=t.clientY,this.thirdLeft=t.clientX):this.dragableStart&&this.showStartTop&&(this.newTop=t.clientY,this.newLeft=t.clientX)},setTopFirst(t){this.showFirstTop=!0,this.dragableFirst=!0},setSecondTop(t){this.showSecondTop=!0,this.dragableSecond=!0},setThirdTop(t){this.showThirdTop=!0,this.dragableThird=!0},setStartTop(t){this.showStartTop=!0,this.dragableStart=!0},resetTops(){this.showFirstTop=!1,this.showSecondTop=!1,this.showThirdTop=!1,this.showStartTop=!1},createTriangle(){this.showFirstTop&&this.showSecondTop&&this.showThirdTop?(this.lengthFirst=Math.sqrt((this.firstTop-this.secondTop)*(this.firstTop-this.secondTop)+(this.firstLeft-this.secondLeft)*(this.firstLeft-this.secondLeft)),this.firstAngle=180*Math.atan2(this.secondTop-this.firstTop,this.secondLeft-this.firstLeft)/Math.PI,this.lengthSecond=Math.sqrt((this.secondTop-this.thirdTop)*(this.secondTop-this.thirdTop)+(this.secondLeft-this.thirdLeft)*(this.secondLeft-this.thirdLeft)),this.secondAngle=180*Math.atan2(this.thirdTop-this.secondTop,this.thirdLeft-this.secondLeft)/Math.PI,this.lengthThird=Math.sqrt((this.firstTop-this.thirdTop)*(this.firstTop-this.thirdTop)+(this.firstLeft-this.thirdLeft)*(this.firstLeft-this.thirdLeft)),this.thirdAngle=180*Math.atan2(this.firstTop-this.thirdTop,this.firstLeft-this.thirdLeft)/Math.PI):alert("Установите три вершины, для Вашего треугольника")},startInterval(){setInterval(this.setCoordinates,.1)},stopInterval(){clearInterval(this.startInterval)}},computed:{getPositionFirstTop(){return this.dragableFirst,`top:${this.firstTop}px;left:${this.firstLeft}px`},getPositionSecondTop(){return this.dragableSecond,`top:${this.secondTop}px;left:${this.secondLeft}px`},getPositionThirdTop(){return this.dragableThird,`top:${this.thirdTop}px;left:${this.thirdLeft}px`},getPositionStartTop(){return this.dragableStart,`top:${this.newTop}px;left:${this.newLeft}px`},getWidthFirst(){return`width: ${this.lengthFirst}px; top:${this.firstTop+3}px; left:${this.firstLeft+5}px; transform: rotate(${this.firstAngle}deg); transformOrigin: 0 0`},getWidthSecond(){return`width: ${this.lengthSecond}px; top:${this.secondTop+3}px; left:${this.secondLeft+5}px; transform: rotate(${this.secondAngle}deg); transformOrigin: 0 0`},getWidthThird(){return`width: ${this.lengthThird}px; top:${this.thirdTop+3}px; left:${this.thirdLeft+5}px; transform: rotate(${this.thirdAngle}deg); transformOrigin: 0 0`}}}),h=n,a=(i("034f"),i("2877")),p=Object(a["a"])(h,o,r,!1,null,null,null),d=p.exports;e["a"].config.productionTip=!1,new e["a"]({render:function(t){return t(d)}}).$mount("#app")},"64a9":function(t,s,i){}});
//# sourceMappingURL=app.2964e5ac.js.map