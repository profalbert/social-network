(this["webpackJsonpreact-kabzda-1"]=this["webpackJsonpreact-kabzda-1"]||[]).push([[7],{228:function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"a",(function(){return u})),a.d(t,"c",(function(){return f}));var r=a(230),o=a(0),n=a.n(o),c=a(229),m=a.n(c),l=a(111),i=function(e){var t=e.meta,a=e.individerror,r=e.children,o=null;return o="onSubmit"===a?t.error&&t.submitFailed:t.error&&t.touched,n.a.createElement("div",{className:m.a.formControl+" "+(o?m.a.error:"")},n.a.createElement("div",null,r),o&&n.a.createElement("span",null,t.error))},s=function(e){var t=e.input,a=(e.meta,Object(r.a)(e,["input","meta"]));return n.a.createElement(i,e,n.a.createElement("textarea",Object.assign({},t,a)))},u=function(e){var t=e.input,a=(e.meta,e.className,Object(r.a)(e,["input","meta","className"]));return n.a.createElement(i,e,n.a.createElement("input",Object.assign({},t,a)))},f=function(e,t,a,r,o){var c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{};return n.a.createElement("div",null,n.a.createElement(l.a,Object.assign({validate:a,name:t,type:o,component:r,placeholder:e},c)))}},229:function(e,t,a){e.exports={formControl:"FormControls_formControl__3IXMz",error:"FormControls_error__3E5dj",formSummaryError:"FormControls_formSummaryError__3P5bD",formSummaryErrorWrap:"FormControls_formSummaryErrorWrap__38Pki",formSummaryErrorLoginBlock:"FormControls_formSummaryErrorLoginBlock__1YgxW",formTitle:"FormControls_formTitle__3_-M5",formInput:"FormControls_formInput__2BV47",formMiniBlock:"FormControls_formMiniBlock__2YIh3",formMiniBlockCheckbox:"FormControls_formMiniBlockCheckbox__3uvHG",formCheckbox:"FormControls_formCheckbox__VxbrM",formButtonLogin:"FormControls_formButtonLogin__2Z-E2",captchaImg:"FormControls_captchaImg__r4E-Y",captchaInput:"FormControls_captchaInput__2gvhJ",formLogin:"FormControls_formLogin__KL1id",LoginWrapperGlobal:"FormControls_LoginWrapperGlobal__M4yOr",LoginH1:"FormControls_LoginH1__3uBaE",testAccountWrapper:"FormControls_testAccountWrapper__38leW",testAccountTitle:"FormControls_testAccountTitle__3B183",testAccountDescr:"FormControls_testAccountDescr__2rhWd",testAccountMiniBlock:"FormControls_testAccountMiniBlock__3ZYX2",testAccountMiniBlockWrap:"FormControls_testAccountMiniBlockWrap__1m69t",testAccountAttention:"FormControls_testAccountAttention__2wZP8"}},232:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return n}));var r=function(e){return function(t){return t&&t.length>e?"Max length is ".concat(e," symbols"):void 0}},o=function(e){return e?void 0:"Field is required"},n=function(e){return e?e.replace(/\s/g,"")?void 0:"You entered only spaces":void 0}},300:function(e,t,a){"use strict";a.r(t);var r=a(0),o=a.n(r),n=a(112),c=a(228),m=a(232),l=a(25),i=a(19),s=a(8),u=a(229),f=a.n(u),_=Object(m.a)(50),p=Object(n.a)({form:"login"})((function(e){var t=e.handleSubmit,a=e.error,r=e.captchaUrl;return o.a.createElement("form",{className:f.a.formLogin,onSubmit:t},o.a.createElement("div",{className:f.a.formMiniBlock},o.a.createElement("div",{className:f.a.formTitle},"Email:"),o.a.createElement("div",{className:f.a.formInput},Object(c.c)("Email","email",[m.b,_,m.c],c.a,"text",{}))),o.a.createElement("div",{className:f.a.formMiniBlock},o.a.createElement("div",{className:f.a.formTitle},"Password:"),o.a.createElement("div",{className:f.a.formInput},Object(c.c)("Password","password",[m.b,_,m.c],c.a,"password",{}))),o.a.createElement("div",{className:f.a.formMiniBlockCheckbox},o.a.createElement("div",{className:f.a.formTitle},"Remember me:"),o.a.createElement("div",{className:f.a.formCheckbox},Object(c.c)("","rememberMe",[],c.a,"checkbox",{}))),r&&o.a.createElement("div",{className:f.a.captchaWrap+" "+f.a.formMiniBlock},o.a.createElement("div",{className:f.a.captchaDescr},"Enter the characters from the image:"),o.a.createElement("div",{className:f.a.captchaImg+" "+f.a.formInput},o.a.createElement("img",{src:r,alt:"Captcha"})),o.a.createElement("div",{className:f.a.captchaInput+" "+f.a.formInput},Object(c.c)("Symbols from image","captcha",[m.b,m.c],c.a,"text",{}))),a&&o.a.createElement("div",{className:f.a.formSummaryErrorLoginBlock},o.a.createElement("div",{className:f.a.formSummaryError},a)),o.a.createElement("div",null,o.a.createElement("button",{className:f.a.formButtonLogin},"Login")))})),d={login:i.b};t.default=Object(l.b)((function(e){return{isAuth:e.auth.isAuth,captchaUrl:e.auth.captchaUrl,authorizedUserId:e.auth.userId}}),d)((function(e){var t=e.captchaUrl;return e.isAuth?o.a.createElement(s.a,{to:"/profile"}):o.a.createElement("div",null,o.a.createElement("h1",{className:f.a.LoginH1},"LOGIN"),o.a.createElement("div",{className:f.a.LoginWrapperGlobal},o.a.createElement(p,{captchaUrl:t,onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captcha)}}),o.a.createElement("div",{className:f.a.testAccountWrapper},o.a.createElement("div",{className:f.a.testAccountTitle},"Test account"),o.a.createElement("div",{className:f.a.testAccountDescr},"if you are an employer, you can use a test account to log in."),o.a.createElement("div",{className:f.a.testAccountMiniBlockWrap},o.a.createElement("div",{className:f.a.testAccountMiniBlock},o.a.createElement("b",null,"Email: "),"siseros589@mailhub.pro"),o.a.createElement("div",{className:f.a.testAccountMiniBlock},o.a.createElement("b",null,"Password: "),"free")),o.a.createElement("div",{className:f.a.testAccountAttention},"Attention! This account has a limit on server requests"))))}))}}]);
//# sourceMappingURL=7.c83908b0.chunk.js.map