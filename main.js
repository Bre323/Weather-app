(()=>{"use strict";var n={208:(n,t,e)=>{e.d(t,{A:()=>s});var r=e(354),a=e.n(r),o=e(314),i=e.n(o)()(a());i.push([n.id,'* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --bg-color-light: rgb(189, 203, 255);\n  --bg-color-dark: rgb(75, 75, 205);\n  --button-color: rgb(120, 120, 250);\n  --font-color: rgb(245, 245, 245);\n  --info-div-color: rgb(10, 10, 179);\n}\n\ninput[type="search"]::-webkit-search-decoration,\ninput[type="search"]::-webkit-search-cancel-button,\ninput[type="search"]::-webkit-search-results-button,\ninput[type="search"]::-webkit-search-results-decoration { \n  display: none; \n}\n\nbody {\n  background: linear-gradient(180deg, var(--bg-color-light), var(--bg-color-dark));\n  background-size: cover;\n  background-repeat: no-repeat;\n  min-height: 100vh;\n  font-family: \'Open sans\', sans-serif;\n}\n\n.wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nheader {\n  text-align: center;\n}\n\nheader > h1 {\n  color: var(--font-color);\n  text-shadow: 1px 1px 2px black;\n  margin: 20px 0 30px;\n}\n\nheader > .search {\n  display: flex;\n}\n\n.search-input, .search-submit {\n  border: none;\n  height: 30px;\n}\n\n.search-input {\n  border-radius: 25px 0 0 25px;\n  padding-left: 15px;\n  outline: none;\n}\n\n.search-submit {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--button-color);\n  border-radius: 0 25px 25px 0;\n  width: 35px;\n  cursor: pointer;\n  transition: 0.2s;\n}\n\n.search-submit:hover {\n  background-color: var(--bg-color-light);\n}\n\n.search-submit:active {\n  background-color: var(--button-color);\n}\n\n.weather-info {\n  margin: 50px 0;\n  min-width: 480px;\n}\n\n.city {\n  color: var(--font-color);\n  text-shadow: 1px 1px 2px black;\n  text-align: center;\n  margin-bottom: 25px;\n}\n\n.city > p {\n  font-size: 2.5rem;\n}\n\n.info-grid {\n  display: grid;\n  grid-template: repeat(2, 1fr) / repeat(3, 1fr);\n  background-color: var(--info-div-color);\n  color: var(--font-color);\n  padding: 15px;\n  font-weight: 700;\n  border-radius: 25px;\n  gap: 30px 10px;\n  box-shadow: 2px 2px 4px black;\n}\n\n.info {\n  text-align: center;\n  padding: 10px;\n  text-shadow: 1px 1px 2px black;\n}\n\n.week-forecast {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  min-width: 500px;\n  margin-bottom: 50px;\n  color: var(--font-color);\n  text-shadow: 1px 1px 2px black;\n}\n\n.week-forecast > h2 {\n  text-align: center;\n  margin-bottom: 25px;\n}\n\n.week {\n  background-color: var(--info-div-color);\n  border-radius: 25px;\n  padding: 15px;\n  font-weight: 700;\n  box-shadow: 2px 2px 4px black;\n  width: 250px;\n}\n\n.week > ul {\n  list-style: none;\n}\n\n.forecast {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  margin-bottom: 20px;\n}\n\n.forecast-info, footer {\n  text-align: center;\n}\n\nfooter {\n  margin-bottom: 20px;\n  color: var(--font-color);\n}\n\nfooter > p > a {\n  text-decoration: none;\n  color: var(--font-color);\n}\n',"",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,oCAAoC;EACpC,iCAAiC;EACjC,kCAAkC;EAClC,gCAAgC;EAChC,kCAAkC;AACpC;;AAEA;;;;EAIE,aAAa;AACf;;AAEA;EACE,gFAAgF;EAChF,sBAAsB;EACtB,4BAA4B;EAC5B,iBAAiB;EACjB,oCAAoC;AACtC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,wBAAwB;EACxB,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,4BAA4B;EAC5B,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,qCAAqC;EACrC,4BAA4B;EAC5B,WAAW;EACX,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,qCAAqC;AACvC;;AAEA;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,wBAAwB;EACxB,8BAA8B;EAC9B,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,8CAA8C;EAC9C,uCAAuC;EACvC,wBAAwB;EACxB,aAAa;EACb,gBAAgB;EAChB,mBAAmB;EACnB,cAAc;EACd,6BAA6B;AAC/B;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,gBAAgB;EAChB,mBAAmB;EACnB,wBAAwB;EACxB,8BAA8B;AAChC;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,uCAAuC;EACvC,mBAAmB;EACnB,aAAa;EACb,gBAAgB;EAChB,6BAA6B;EAC7B,YAAY;AACd;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;EACnB,wBAAwB;AAC1B;;AAEA;EACE,qBAAqB;EACrB,wBAAwB;AAC1B",sourcesContent:['* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n:root {\r\n  --bg-color-light: rgb(189, 203, 255);\r\n  --bg-color-dark: rgb(75, 75, 205);\r\n  --button-color: rgb(120, 120, 250);\r\n  --font-color: rgb(245, 245, 245);\r\n  --info-div-color: rgb(10, 10, 179);\r\n}\r\n\r\ninput[type="search"]::-webkit-search-decoration,\r\ninput[type="search"]::-webkit-search-cancel-button,\r\ninput[type="search"]::-webkit-search-results-button,\r\ninput[type="search"]::-webkit-search-results-decoration { \r\n  display: none; \r\n}\r\n\r\nbody {\r\n  background: linear-gradient(180deg, var(--bg-color-light), var(--bg-color-dark));\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  min-height: 100vh;\r\n  font-family: \'Open sans\', sans-serif;\r\n}\r\n\r\n.wrapper {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\nheader {\r\n  text-align: center;\r\n}\r\n\r\nheader > h1 {\r\n  color: var(--font-color);\r\n  text-shadow: 1px 1px 2px black;\r\n  margin: 20px 0 30px;\r\n}\r\n\r\nheader > .search {\r\n  display: flex;\r\n}\r\n\r\n.search-input, .search-submit {\r\n  border: none;\r\n  height: 30px;\r\n}\r\n\r\n.search-input {\r\n  border-radius: 25px 0 0 25px;\r\n  padding-left: 15px;\r\n  outline: none;\r\n}\r\n\r\n.search-submit {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: var(--button-color);\r\n  border-radius: 0 25px 25px 0;\r\n  width: 35px;\r\n  cursor: pointer;\r\n  transition: 0.2s;\r\n}\r\n\r\n.search-submit:hover {\r\n  background-color: var(--bg-color-light);\r\n}\r\n\r\n.search-submit:active {\r\n  background-color: var(--button-color);\r\n}\r\n\r\n.weather-info {\r\n  margin: 50px 0;\r\n  min-width: 480px;\r\n}\r\n\r\n.city {\r\n  color: var(--font-color);\r\n  text-shadow: 1px 1px 2px black;\r\n  text-align: center;\r\n  margin-bottom: 25px;\r\n}\r\n\r\n.city > p {\r\n  font-size: 2.5rem;\r\n}\r\n\r\n.info-grid {\r\n  display: grid;\r\n  grid-template: repeat(2, 1fr) / repeat(3, 1fr);\r\n  background-color: var(--info-div-color);\r\n  color: var(--font-color);\r\n  padding: 15px;\r\n  font-weight: 700;\r\n  border-radius: 25px;\r\n  gap: 30px 10px;\r\n  box-shadow: 2px 2px 4px black;\r\n}\r\n\r\n.info {\r\n  text-align: center;\r\n  padding: 10px;\r\n  text-shadow: 1px 1px 2px black;\r\n}\r\n\r\n.week-forecast {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  min-width: 500px;\r\n  margin-bottom: 50px;\r\n  color: var(--font-color);\r\n  text-shadow: 1px 1px 2px black;\r\n}\r\n\r\n.week-forecast > h2 {\r\n  text-align: center;\r\n  margin-bottom: 25px;\r\n}\r\n\r\n.week {\r\n  background-color: var(--info-div-color);\r\n  border-radius: 25px;\r\n  padding: 15px;\r\n  font-weight: 700;\r\n  box-shadow: 2px 2px 4px black;\r\n  width: 250px;\r\n}\r\n\r\n.week > ul {\r\n  list-style: none;\r\n}\r\n\r\n.forecast {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.forecast-info, footer {\r\n  text-align: center;\r\n}\r\n\r\nfooter {\r\n  margin-bottom: 20px;\r\n  color: var(--font-color);\r\n}\r\n\r\nfooter > p > a {\r\n  text-decoration: none;\r\n  color: var(--font-color);\r\n}\r\n'],sourceRoot:""}]);const s=i},314:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",r=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),r&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),r&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,r,a,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var u=0;u<n.length;u++){var d=[].concat(n[u]);r&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),t.push(d))}},t}},354:n=>{n.exports=function(n){var t=n[1],e=n[3];if(!e)return t;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),o="/*# ".concat(a," */");return[t].concat([o]).join("\n")}return[t].join("\n")}},72:n=>{var t=[];function e(n){for(var e=-1,r=0;r<t.length;r++)if(t[r].identifier===n){e=r;break}return e}function r(n,r){for(var o={},i=[],s=0;s<n.length;s++){var c=n[s],u=r.base?c[0]+r.base:c[0],d=o[u]||0,l="".concat(u," ").concat(d);o[u]=d+1;var f=e(l),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)t[f].references++,t[f].updater(h);else{var m=a(h,r);r.byIndex=s,t.splice(s,0,{identifier:l,updater:m,references:1})}i.push(l)}return i}function a(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,a){var o=r(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var s=e(o[i]);t[s].references--}for(var c=r(n,a),u=0;u<o.length;u++){var d=e(o[u]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}o=c}}},659:n=>{var t={};n.exports=function(n,e){var r=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},540:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},56:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var a=void 0!==e.layer;a&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,a&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var o=e.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},113:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}},t={};function e(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return n[r](o,o.exports,e),o.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),e.nc=void 0;var r=e(72),a=e.n(r),o=e(825),i=e.n(o),s=e(659),c=e.n(s),u=e(56),d=e.n(u),l=e(540),f=e.n(l),h=e(113),m=e.n(h),A=e(208),p={};p.styleTagTransform=m(),p.setAttributes=d(),p.insert=c().bind(null,"head"),p.domAPI=i(),p.insertStyleElement=f(),a()(A.A,p),A.A&&A.A.locals&&A.A.locals;const g={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function b(n){return(t={})=>{const e=t.width?String(t.width):n.defaultWidth;return n.formats[e]||n.formats[n.defaultWidth]}}const w={date:b({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:b({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:b({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},C={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function x(n){return(t,e)=>{let r;if("formatting"===(e?.context?String(e.context):"standalone")&&n.formattingValues){const t=n.defaultFormattingWidth||n.defaultWidth,a=e?.width?String(e.width):t;r=n.formattingValues[a]||n.formattingValues[t]}else{const t=n.defaultWidth,a=e?.width?String(e.width):n.defaultWidth;r=n.values[a]||n.values[t]}return r[n.argumentCallback?n.argumentCallback(t):t]}}const y={ordinalNumber:(n,t)=>{const e=Number(n),r=e%100;if(r>20||r<10)switch(r%10){case 1:return e+"st";case 2:return e+"nd";case 3:return e+"rd"}return e+"th"},era:x({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:x({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:n=>n-1}),month:x({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:x({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:x({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function v(n){return(t,e={})=>{const r=e.width,a=r&&n.matchPatterns[r]||n.matchPatterns[n.defaultMatchWidth],o=t.match(a);if(!o)return null;const i=o[0],s=r&&n.parsePatterns[r]||n.parsePatterns[n.defaultParseWidth],c=Array.isArray(s)?function(n){for(let t=0;t<n.length;t++)if(n[t].test(i))return t}(s):function(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t)&&n[t].test(i))return t}(s);let u;return u=n.valueCallback?n.valueCallback(c):c,u=e.valueCallback?e.valueCallback(u):u,{value:u,rest:t.slice(i.length)}}}const E={ordinalNumber:(B={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:n=>parseInt(n,10)},(n,t={})=>{const e=n.match(B.matchPattern);if(!e)return null;const r=e[0],a=n.match(B.parsePattern);if(!a)return null;let o=B.valueCallback?B.valueCallback(a[0]):a[0];return o=t.valueCallback?t.valueCallback(o):o,{value:o,rest:n.slice(r.length)}}),era:v({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:v({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:n=>n+1}),month:v({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:v({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:v({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};var B;const k={code:"en-US",formatDistance:(n,t,e)=>{let r;const a=g[n];return r="string"==typeof a?a:1===t?a.one:a.other.replace("{{count}}",t.toString()),e?.addSuffix?e.comparison&&e.comparison>0?"in "+r:r+" ago":r},formatLong:w,formatRelative:(n,t,e,r)=>C[n],localize:y,match:E,options:{weekStartsOn:0,firstWeekContainsDate:1}};let M={};function S(){return M}Math.pow(10,8);const D=6048e5,T=36e5,P=Symbol.for("constructDateFrom");function W(n,t){return"function"==typeof n?n(t):n&&"object"==typeof n&&P in n?n[P](t):n instanceof Date?new n.constructor(t):new Date(t)}function N(n,t){return W(t||n,n)}function Y(n){const t=N(n),e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),+n-+e}function q(n,t){const e=N(n,t?.in);return e.setHours(0,0,0,0),e}function F(n,t){const e=N(n,t?.in);return function(n,t,e){const[r,a]=function(n,...t){const e=W.bind(null,n||t.find((n=>"object"==typeof n)));return t.map(e)}(e?.in,n,t),o=q(r),i=q(a),s=+o-Y(o),c=+i-Y(i);return Math.round((s-c)/864e5)}(e,function(n,t){const e=N(n,t?.in);return e.setFullYear(e.getFullYear(),0,1),e.setHours(0,0,0,0),e}(e))+1}function j(n,t){const e=S(),r=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??e.weekStartsOn??e.locale?.options?.weekStartsOn??0,a=N(n,t?.in),o=a.getDay(),i=(o<r?7:0)+o-r;return a.setDate(a.getDate()-i),a.setHours(0,0,0,0),a}function O(n,t){return j(n,{...t,weekStartsOn:1})}function H(n,t){const e=N(n,t?.in),r=e.getFullYear(),a=W(e,0);a.setFullYear(r+1,0,4),a.setHours(0,0,0,0);const o=O(a),i=W(e,0);i.setFullYear(r,0,4),i.setHours(0,0,0,0);const s=O(i);return e.getTime()>=o.getTime()?r+1:e.getTime()>=s.getTime()?r:r-1}function z(n,t){const e=N(n,t?.in),r=+O(e)-+function(n,t){const e=H(n,t),r=W(t?.in||n,0);return r.setFullYear(e,0,4),r.setHours(0,0,0,0),O(r)}(e);return Math.round(r/D)+1}function $(n,t){const e=N(n,t?.in),r=e.getFullYear(),a=S(),o=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??a.firstWeekContainsDate??a.locale?.options?.firstWeekContainsDate??1,i=W(t?.in||n,0);i.setFullYear(r+1,0,o),i.setHours(0,0,0,0);const s=j(i,t),c=W(t?.in||n,0);c.setFullYear(r,0,o),c.setHours(0,0,0,0);const u=j(c,t);return+e>=+s?r+1:+e>=+u?r:r-1}function L(n,t){const e=N(n,t?.in),r=+j(e,t)-+function(n,t){const e=S(),r=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??e.firstWeekContainsDate??e.locale?.options?.firstWeekContainsDate??1,a=$(n,t),o=W(t?.in||n,0);return o.setFullYear(a,0,r),o.setHours(0,0,0,0),j(o,t)}(e,t);return Math.round(r/D)+1}function U(n,t){return(n<0?"-":"")+Math.abs(n).toString().padStart(t,"0")}const I={y(n,t){const e=n.getFullYear(),r=e>0?e:1-e;return U("yy"===t?r%100:r,t.length)},M(n,t){const e=n.getMonth();return"M"===t?String(e+1):U(e+1,2)},d:(n,t)=>U(n.getDate(),t.length),a(n,t){const e=n.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return e.toUpperCase();case"aaa":return e;case"aaaaa":return e[0];default:return"am"===e?"a.m.":"p.m."}},h:(n,t)=>U(n.getHours()%12||12,t.length),H:(n,t)=>U(n.getHours(),t.length),m:(n,t)=>U(n.getMinutes(),t.length),s:(n,t)=>U(n.getSeconds(),t.length),S(n,t){const e=t.length,r=n.getMilliseconds();return U(Math.trunc(r*Math.pow(10,e-3)),t.length)}},Q={G:function(n,t,e){const r=n.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return e.era(r,{width:"abbreviated"});case"GGGGG":return e.era(r,{width:"narrow"});default:return e.era(r,{width:"wide"})}},y:function(n,t,e){if("yo"===t){const t=n.getFullYear(),r=t>0?t:1-t;return e.ordinalNumber(r,{unit:"year"})}return I.y(n,t)},Y:function(n,t,e,r){const a=$(n,r),o=a>0?a:1-a;return"YY"===t?U(o%100,2):"Yo"===t?e.ordinalNumber(o,{unit:"year"}):U(o,t.length)},R:function(n,t){return U(H(n),t.length)},u:function(n,t){return U(n.getFullYear(),t.length)},Q:function(n,t,e){const r=Math.ceil((n.getMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return U(r,2);case"Qo":return e.ordinalNumber(r,{unit:"quarter"});case"QQQ":return e.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return e.quarter(r,{width:"narrow",context:"formatting"});default:return e.quarter(r,{width:"wide",context:"formatting"})}},q:function(n,t,e){const r=Math.ceil((n.getMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return U(r,2);case"qo":return e.ordinalNumber(r,{unit:"quarter"});case"qqq":return e.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return e.quarter(r,{width:"narrow",context:"standalone"});default:return e.quarter(r,{width:"wide",context:"standalone"})}},M:function(n,t,e){const r=n.getMonth();switch(t){case"M":case"MM":return I.M(n,t);case"Mo":return e.ordinalNumber(r+1,{unit:"month"});case"MMM":return e.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return e.month(r,{width:"narrow",context:"formatting"});default:return e.month(r,{width:"wide",context:"formatting"})}},L:function(n,t,e){const r=n.getMonth();switch(t){case"L":return String(r+1);case"LL":return U(r+1,2);case"Lo":return e.ordinalNumber(r+1,{unit:"month"});case"LLL":return e.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return e.month(r,{width:"narrow",context:"standalone"});default:return e.month(r,{width:"wide",context:"standalone"})}},w:function(n,t,e,r){const a=L(n,r);return"wo"===t?e.ordinalNumber(a,{unit:"week"}):U(a,t.length)},I:function(n,t,e){const r=z(n);return"Io"===t?e.ordinalNumber(r,{unit:"week"}):U(r,t.length)},d:function(n,t,e){return"do"===t?e.ordinalNumber(n.getDate(),{unit:"date"}):I.d(n,t)},D:function(n,t,e){const r=F(n);return"Do"===t?e.ordinalNumber(r,{unit:"dayOfYear"}):U(r,t.length)},E:function(n,t,e){const r=n.getDay();switch(t){case"E":case"EE":case"EEE":return e.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return e.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return e.day(r,{width:"short",context:"formatting"});default:return e.day(r,{width:"wide",context:"formatting"})}},e:function(n,t,e,r){const a=n.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(o);case"ee":return U(o,2);case"eo":return e.ordinalNumber(o,{unit:"day"});case"eee":return e.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return e.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return e.day(a,{width:"short",context:"formatting"});default:return e.day(a,{width:"wide",context:"formatting"})}},c:function(n,t,e,r){const a=n.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(o);case"cc":return U(o,t.length);case"co":return e.ordinalNumber(o,{unit:"day"});case"ccc":return e.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return e.day(a,{width:"narrow",context:"standalone"});case"cccccc":return e.day(a,{width:"short",context:"standalone"});default:return e.day(a,{width:"wide",context:"standalone"})}},i:function(n,t,e){const r=n.getDay(),a=0===r?7:r;switch(t){case"i":return String(a);case"ii":return U(a,t.length);case"io":return e.ordinalNumber(a,{unit:"day"});case"iii":return e.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return e.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return e.day(r,{width:"short",context:"formatting"});default:return e.day(r,{width:"wide",context:"formatting"})}},a:function(n,t,e){const r=n.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return e.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return e.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return e.dayPeriod(r,{width:"narrow",context:"formatting"});default:return e.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(n,t,e){const r=n.getHours();let a;switch(a=12===r?"noon":0===r?"midnight":r/12>=1?"pm":"am",t){case"b":case"bb":return e.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return e.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return e.dayPeriod(a,{width:"narrow",context:"formatting"});default:return e.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(n,t,e){const r=n.getHours();let a;switch(a=r>=17?"evening":r>=12?"afternoon":r>=4?"morning":"night",t){case"B":case"BB":case"BBB":return e.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return e.dayPeriod(a,{width:"narrow",context:"formatting"});default:return e.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(n,t,e){if("ho"===t){let t=n.getHours()%12;return 0===t&&(t=12),e.ordinalNumber(t,{unit:"hour"})}return I.h(n,t)},H:function(n,t,e){return"Ho"===t?e.ordinalNumber(n.getHours(),{unit:"hour"}):I.H(n,t)},K:function(n,t,e){const r=n.getHours()%12;return"Ko"===t?e.ordinalNumber(r,{unit:"hour"}):U(r,t.length)},k:function(n,t,e){let r=n.getHours();return 0===r&&(r=24),"ko"===t?e.ordinalNumber(r,{unit:"hour"}):U(r,t.length)},m:function(n,t,e){return"mo"===t?e.ordinalNumber(n.getMinutes(),{unit:"minute"}):I.m(n,t)},s:function(n,t,e){return"so"===t?e.ordinalNumber(n.getSeconds(),{unit:"second"}):I.s(n,t)},S:function(n,t){return I.S(n,t)},X:function(n,t,e){const r=n.getTimezoneOffset();if(0===r)return"Z";switch(t){case"X":return X(r);case"XXXX":case"XX":return J(r);default:return J(r,":")}},x:function(n,t,e){const r=n.getTimezoneOffset();switch(t){case"x":return X(r);case"xxxx":case"xx":return J(r);default:return J(r,":")}},O:function(n,t,e){const r=n.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+G(r,":");default:return"GMT"+J(r,":")}},z:function(n,t,e){const r=n.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+G(r,":");default:return"GMT"+J(r,":")}},t:function(n,t,e){return U(Math.trunc(+n/1e3),t.length)},T:function(n,t,e){return U(+n,t.length)}};function G(n,t=""){const e=n>0?"-":"+",r=Math.abs(n),a=Math.trunc(r/60),o=r%60;return 0===o?e+String(a):e+String(a)+t+U(o,2)}function X(n,t){return n%60==0?(n>0?"-":"+")+U(Math.abs(n)/60,2):J(n,t)}function J(n,t=""){const e=n>0?"-":"+",r=Math.abs(n);return e+U(Math.trunc(r/60),2)+t+U(r%60,2)}const R=(n,t)=>{switch(n){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});default:return t.date({width:"full"})}},Z=(n,t)=>{switch(n){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});default:return t.time({width:"full"})}},V={p:Z,P:(n,t)=>{const e=n.match(/(P+)(p+)?/)||[],r=e[1],a=e[2];if(!a)return R(n,t);let o;switch(r){case"P":o=t.dateTime({width:"short"});break;case"PP":o=t.dateTime({width:"medium"});break;case"PPP":o=t.dateTime({width:"long"});break;default:o=t.dateTime({width:"full"})}return o.replace("{{date}}",R(r,t)).replace("{{time}}",Z(a,t))}},K=/^D+$/,_=/^Y+$/,nn=["D","DD","YY","YYYY"];function tn(n){return!(!((t=n)instanceof Date||"object"==typeof t&&"[object Date]"===Object.prototype.toString.call(t))&&"number"!=typeof n||isNaN(+N(n)));var t}const en=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,rn=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,an=/^'([^]*?)'?$/,on=/''/g,sn=/[a-zA-Z]/;function cn(n,t,e){const r=S(),a=e?.locale??r.locale??k,o=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,i=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,s=N(n,e?.in);if(!tn(s))throw new RangeError("Invalid time value");let c=t.match(rn).map((n=>{const t=n[0];return"p"===t||"P"===t?(0,V[t])(n,a.formatLong):n})).join("").match(en).map((n=>{if("''"===n)return{isToken:!1,value:"'"};const t=n[0];if("'"===t)return{isToken:!1,value:un(n)};if(Q[t])return{isToken:!0,value:n};if(t.match(sn))throw new RangeError("Format string contains an unescaped latin alphabet character `"+t+"`");return{isToken:!1,value:n}}));a.localize.preprocessor&&(c=a.localize.preprocessor(s,c));const u={firstWeekContainsDate:o,weekStartsOn:i,locale:a};return c.map((r=>{if(!r.isToken)return r.value;const o=r.value;return(!e?.useAdditionalWeekYearTokens&&function(n){return _.test(n)}(o)||!e?.useAdditionalDayOfYearTokens&&function(n){return K.test(n)}(o))&&function(n,t,e){const r=function(n,t,e){const r="Y"===n[0]?"years":"days of the month";return`Use \`${n.toLowerCase()}\` instead of \`${n}\` (in \`${t}\`) for formatting ${r} to the input \`${e}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}(n,t,e);if(console.warn(r),nn.includes(n))throw new RangeError(r)}(o,t,String(n)),(0,Q[o[0]])(s,o,a.localize,u)})).join("")}function un(n){const t=n.match(an);return t?t[1].replace(on,"'"):n}const dn={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},ln=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,fn=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,hn=/^([+-])(\d{2})(?::?(\d{2}))?$/;function mn(n){return n?parseInt(n):1}function An(n){return n&&parseFloat(n.replace(",","."))||0}const pn=[31,null,31,30,31,30,31,31,30,31,30,31];function gn(n){return n%400==0||n%4==0&&n%100!=0}function bn(n){return cn(function(n,t){const e=()=>W(t?.in,NaN),r=t?.additionalDigits??2,a=function(n){const t={},e=n.split(dn.dateTimeDelimiter);let r;if(e.length>2)return t;if(/:/.test(e[0])?r=e[0]:(t.date=e[0],r=e[1],dn.timeZoneDelimiter.test(t.date)&&(t.date=n.split(dn.timeZoneDelimiter)[0],r=n.substr(t.date.length,n.length))),r){const n=dn.timezone.exec(r);n?(t.time=r.replace(n[1],""),t.timezone=n[1]):t.time=r}return t}(n);let o;if(a.date){const n=function(n,t){const e=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),r=n.match(e);if(!r)return{year:NaN,restDateString:""};const a=r[1]?parseInt(r[1]):null,o=r[2]?parseInt(r[2]):null;return{year:null===o?a:100*o,restDateString:n.slice((r[1]||r[2]).length)}}(a.date,r);o=function(n,t){if(null===t)return new Date(NaN);const e=n.match(ln);if(!e)return new Date(NaN);const r=!!e[4],a=mn(e[1]),o=mn(e[2])-1,i=mn(e[3]),s=mn(e[4]),c=mn(e[5])-1;if(r)return function(n,t,e){return t>=1&&t<=53&&e>=0&&e<=6}(0,s,c)?function(n,t,e){const r=new Date(0);r.setUTCFullYear(n,0,4);const a=7*(t-1)+e+1-(r.getUTCDay()||7);return r.setUTCDate(r.getUTCDate()+a),r}(t,s,c):new Date(NaN);{const n=new Date(0);return function(n,t,e){return t>=0&&t<=11&&e>=1&&e<=(pn[t]||(gn(n)?29:28))}(t,o,i)&&function(n,t){return t>=1&&t<=(gn(n)?366:365)}(t,a)?(n.setUTCFullYear(t,o,Math.max(a,i)),n):new Date(NaN)}}(n.restDateString,n.year)}if(!o||isNaN(+o))return e();const i=+o;let s,c=0;if(a.time&&(c=function(n){const t=n.match(fn);if(!t)return NaN;const e=An(t[1]),r=An(t[2]),a=An(t[3]);return function(n,t,e){return 24===n?0===t&&0===e:e>=0&&e<60&&t>=0&&t<60&&n>=0&&n<25}(e,r,a)?e*T+6e4*r+1e3*a:NaN}(a.time),isNaN(c)))return e();if(!a.timezone){const n=new Date(i+c),e=N(0,t?.in);return e.setFullYear(n.getUTCFullYear(),n.getUTCMonth(),n.getUTCDate()),e.setHours(n.getUTCHours(),n.getUTCMinutes(),n.getUTCSeconds(),n.getUTCMilliseconds()),e}return s=function(n){if("Z"===n)return 0;const t=n.match(hn);if(!t)return 0;const e="+"===t[1]?-1:1,r=parseInt(t[2]),a=t[3]&&parseInt(t[3])||0;return function(n,t){return t>=0&&t<=59}(0,a)?e*(r*T+6e4*a):NaN}(a.timezone),isNaN(s)?e():N(i+c+s,t?.in)}(n),"dd / MMM")}function wn(n){return`${n.toFixed(0)} °C`}function Cn(n,t){return cn(`${n} ${t}`,"H:mm")}let xn=document.querySelector(".weather-info"),yn=document.querySelector(".week-forecast");let vn=document.querySelector(".search-input");document.querySelector(".search-submit").addEventListener("click",(async n=>{n.preventDefault();let t=await async function(n){let t=`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${n}?unitGroup=metric&key=JKDS7FWSASJL9PLZSBU39ZSDE&contentType=json`,e=await fetch(t),r=e.json();if(e.ok)return console.log(n),console.log(await r),r;alert("The location is wrong or do not exist!")}(vn.value);var e;t&&(function(n){let t=n.resolvedAddress,e=`${n.currentConditions.temp} °C`,r=`${n.currentConditions.humidity}%`,a=`${n.currentConditions.windspeed} km/h`,o=`${n.currentConditions.precipprob}%`,i=n.currentConditions.sunrise,s=n.currentConditions.feelslike,c=n.currentConditions.sunset,u=n.days[0].datetime;xn.innerHTML="",xn.insertAdjacentHTML("beforeend",`\n      <div class="city">\n        <h2>${t}</h2>\n        <p class="temperature">${e}</p>\n      </div>\n\n      <div class="info-grid">\n        <div class="info">\n          <p>Humidity</p>\n          <p>${r}</p>\n        </div>\n\n        <div class="info">\n          <p>Wind</p>\n          <p>${a}</p>\n        </div>\n\n        <div class="info">\n          <p>Chance of rain</p>\n          <p>${o}</p>\n        </div>\n\n        <div class="info">\n          <p>Sunrise</p>\n          <p>${Cn(u,i)}</p>\n        </div>\n\n        <div class="info">\n          <p>Feels like</p>\n          <p>${wn(s)}</p>\n        </div>\n\n        <div class="info">\n          <p>Sunset</p>\n          <p>${Cn(u,c)}</p>\n        </div>\n      </div>\n    `)}(t),e=t,yn.innerHTML="",yn.insertAdjacentHTML("beforeend",'\n    <h2>Week Forecast</h2>\n      \n    <div class="week">\n      <ul></ul>\n    </div>\n    '),function(n){let t=document.querySelector(".week > ul");for(let e=0;e<7;e++)t.insertAdjacentHTML("beforeend",`\n        <li class="forecast">\n          <p>${bn(n.days[e].datetime)}</p>\n\n          <div class="forecast-info">\n            <p>${wn(n.days[e].temp)}</p>\n          </div>\n        </li>\n      `)}(e))}))})();
//# sourceMappingURL=main.js.map