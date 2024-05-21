"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3146],{3905:function(e,t,n){n.d(t,{Zo:function(){return i},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(f,l(l({ref:t},i),{},{components:n})):a.createElement(f,l({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7294);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7462),r=n(7294),o=n(2389),l=n(5450),s=n(6010),c="tabItem_LplD";function u(e){var t,n,o,u=e.lazy,i=e.block,p=e.defaultValue,d=e.values,m=e.groupId,f=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=d?d:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,l.lx)(k,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===p?p:null!=(t=null!=p?p:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=b[0])?void 0:o.props.value;if(null!==y&&!k.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,l.UB)(),g=h.tabGroupChoices,N=h.setTabGroupChoices,T=(0,r.useState)(y),w=T[0],x=T[1],E=[],O=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var C=g[m];null!=C&&C!==w&&k.some((function(e){return e.value===C}))&&x(C)}var P=function(e){var t=e.currentTarget,n=E.indexOf(t),a=k[n].value;a!==w&&(O(t),x(a),null!=m&&N(m,a))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=E.indexOf(e.currentTarget)+1;n=E[a]||E[0];break;case"ArrowLeft":var r=E.indexOf(e.currentTarget)-1;n=E[r]||E[E.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":i},f)},k.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return E.push(e)},onKeyDown:j,onFocus:P,onClick:P},o,{className:(0,s.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),u?(0,r.cloneElement)(b.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function i(e){var t=(0,o.Z)();return r.createElement(u,(0,a.Z)({key:String(t)},e))}},9680:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return i},metadata:function(){return p},assets:function(){return d},toc:function(){return m},default:function(){return b}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=n(9877),s=n(8215),c=["components"],u={sidebar_position:6,title:"Tokens"},i=void 0,p={unversionedId:"Bitlayer Scan APIs/Tokens",id:"Bitlayer Scan APIs/Tokens",title:"Tokens",description:"Get ERC20-Token TotalSupply (aka MaxSupply) by ContractAddress",source:"@site/docs/Bitlayer Scan APIs/Tokens.mdx",sourceDirName:"Bitlayer Scan APIs",slug:"/Bitlayer Scan APIs/Tokens",permalink:"/docs/Bitlayer Scan APIs/Tokens",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Tokens"},sidebar:"docs",previous:{title:"Logs",permalink:"/docs/Bitlayer Scan APIs/Logs"},next:{title:"Developer Resources",permalink:"/docs/category/developer-resources"}},d={},m=[{value:"Get ERC20-Token TotalSupply (aka MaxSupply) by ContractAddress",id:"get-erc20-token-totalsupply-aka-maxsupply-by-contractaddress",level:2},{value:"Get ERC20-Token Account Balance for TokenContractAddress",id:"get-erc20-token-account-balance-for-tokencontractaddress",level:2}],f={toc:m};function b(e){var t=e.components,n=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"get-erc20-token-totalsupply-aka-maxsupply-by-contractaddress"},"Get ERC20-Token TotalSupply (aka MaxSupply) by ContractAddress"),(0,o.kt)("p",null,"Returns the current amount of an ERC-20 token in circulation."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},"https://api.btrscan.com/scan/api\n?module=token\n&action=tokensupply\n&contractaddress=0xfe9f969faf8ad72a83b761138bf25de87eff9dd2\n")),(0,o.kt)("p",null,"Try this endpoint in your ",(0,o.kt)("a",{parentName:"p",href:"https://api.btrscan.com/scan/api?module=token&action=tokensupply&contractaddress=0xfe9f969faf8ad72a83b761138bf25de87eff9dd2"},"browser")," \ud83d\udd17"),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"request",label:"Request",default:!0,mdxType:"TabItem"},"Query Parameters",(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"contractaddress"),(0,o.kt)("td",{parentName:"tr",align:null},"the ",(0,o.kt)("inlineCode",{parentName:"td"},"contract address")," of the ERC-20 token"))))),(0,o.kt)(s.Z,{value:"response",label:"Response",mdxType:"TabItem"},(0,o.kt)("p",null,"  Sample Response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": "1",\n  "message": "OK",\n  "result": "20000000000"\n}\n')),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"The result is returned in the token's smallest decimal representation")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"  Eg. a token with a balance of 215.241526476136819398 and 18 decimal places will be returned as 215241526476136819398"))))),(0,o.kt)("h2",{id:"get-erc20-token-account-balance-for-tokencontractaddress"},"Get ERC20-Token Account Balance for TokenContractAddress"),(0,o.kt)("p",null,"Returns the current balance of an ERC-20 token of an address."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},"https://api.btrscan.com/scan/api\n?module=account\n&action=tokenbalance\n&contractaddress=0xfe9f969faf8ad72a83b761138bf25de87eff9dd2\n&address=0x718e5b4f5b007bceb7ad6ce8c2629cea767fc4ec\n&tag=latest\n")),(0,o.kt)("p",null,"Try this endpoint in your ",(0,o.kt)("a",{parentName:"p",href:"https://api.btrscan.com/scan/api?module=account&action=tokenbalance&contractaddress=0xfe9f969faf8ad72a83b761138bf25de87eff9dd2&address=0x718e5b4f5b007bceb7ad6ce8c2629cea767fc4ec&tag=latest"},"browser")," \ud83d\udd17"),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"request",label:"Request",default:!0,mdxType:"TabItem"},"Query Parameters",(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"contractaddress"),(0,o.kt)("td",{parentName:"tr",align:null},"the ",(0,o.kt)("inlineCode",{parentName:"td"},"contract address")," of the ERC-20 token")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"address"),(0,o.kt)("td",{parentName:"tr",align:null},"the ",(0,o.kt)("inlineCode",{parentName:"td"},"string")," representing the address to check for token balance"))))),(0,o.kt)(s.Z,{value:"response",label:"Response",mdxType:"TabItem"},(0,o.kt)("p",null,"  Sample Response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": "1",\n  "message": "OK",\n  "result": 0\n}\n')))))}b.isMDXComponent=!0}}]);