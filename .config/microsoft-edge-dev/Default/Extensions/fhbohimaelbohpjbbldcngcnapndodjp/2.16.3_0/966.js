"use strict";(self.webpackChunk_bnb_chain_extension_wallet=self.webpackChunk_bnb_chain_extension_wallet||[]).push([[966],{60966:function(e,t,n){n.r(t),n.d(t,{PrivateKey:function(){return f}});var a=n(70655),r=n(67294),i=n(44012),o=n(5977),u=n(1639),c=n(71396),l=n(35831),s=n(96436),d=n(21050),f=function(){var e=(0,u.xQ)({id:"import-account.private-key"}).buildTestId,t=(0,o.k6)().goBack,n=(0,s.k)({testId:e()}),f=(0,r.useState)(""),p=f[0],m=f[1],v=(0,r.useCallback)((function(e){return m(e.target.value)}),[]),y=function(e){var t=e.privateKey,n=(0,r.useState)(!1),a=n[0],o=n[1],u=(0,r.useState)([]),c=u[0],l=u[1],s=function(){o(!1)};(0,r.useEffect)((function(){if(t)try{var e=(0,d.Ky)({privateKey:t});e&&(l(e),o(!0))}catch(e){s()}else s()}),[t]);var f=(0,r.useMemo)((function(){return a?void 0:"danger"}),[a]),p=(0,r.useMemo)((function(){var e=[];return a||e.push({label:r.createElement(i.Z,{id:"import-account.private-key-input.validation"}),state:"danger"}),e.length>0?[e[0]]:void 0}),[a]);return{isValid:a,state:f,validationMessages:p,data:c}}({privateKey:p}),b=y.data,h=(0,a._T)(y,["data"]),k=(0,r.useCallback)((function(){return(0,a.mG)(void 0,void 0,void 0,(function(){return(0,a.Jh)(this,(function(e){switch(e.label){case 0:return 0===b.length?[2]:[4,n({addresses:b})];case 1:return e.sent()&&t(),[2]}}))}))}),[b,t,n]);return r.createElement(r.Fragment,null,r.createElement(c.u.Card,{snap:"both",position:"top"},r.createElement(c.u.Content,{size:"fill",align:"center",justify:"stretch"},r.createElement(u.WU,(0,a.pi)({},h,{spellCheck:!1,label:r.createElement(i.Z,{id:"import-account.private-key-input.label"}),onChange:v,value:p,"data-testid":e("private-key-input"),autoComplete:"off"})))),r.createElement(l.f,{variant:"accent"},r.createElement(c.u.Footer,null,r.createElement(u.zx,{variant:"primary",onClick:k,disabled:!h.isValid,"data-testid":e("import-btn")},r.createElement(i.Z,{id:"import-account.import"})))))}},96436:function(e,t,n){n.d(t,{k:function(){return s}});var a=n(70655),r=n(1639),i=n(67294),o=n(44012),u=n(58527),c=n(82625);function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}var s=function(e){var t=e.testId,n=(0,r.xQ)({id:t}).buildTestId,s=(0,u.xe)(),d=(0,u.VV)().password,f=(0,u.Rk)();return(0,i.useCallback)((function(e){var t=e.addresses;return(0,a.mG)(void 0,void 0,void 0,(function(){var e,u,p,m;return(0,a.Jh)(this,(function(a){switch(a.label){case 0:for(e=function(e){var a=t[e],u=a.address,c=a.type;if(s.map((function(e){return e.addresses.filter((function(e){return e.type===c})).map((function(e){return e.address}))})).flat().find((function(e){return e===u})))return(0,r.Yz)(i.createElement(r.FN,{icon:i.createElement(r.FN.Icon.Danger,null),"data-testid":n("duplicate-private-key-toast")},i.createElement(o.Z,{id:"import-account.duplicate-private-key-toast"}))),{value:null}},u=0;u<t.length;u++)if("object"===l(p=e(u)))return[2,p.value];a.label=1;case 1:return a.trys.push([1,3,,4]),[4,f({password:d,addresses:t})];case 2:return[2,a.sent()];case 3:return m=a.sent(),c.k.error(m),(0,r.Yz)(i.createElement(r.FN,{icon:i.createElement(r.FN.Icon.Danger,null),"data-testid":n("fail-toast")},i.createElement(o.Z,{id:"import-account.import-fail-toast"}))),[2,null];case 4:return[2]}}))}))}),[s,n,f,d])}}}]);