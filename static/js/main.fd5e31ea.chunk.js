(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e,t,a){e.exports={input:"ranges_input__3TySq",inputBar:"ranges_inputBar__3llJw",inputWrapper:"ranges_inputWrapper__3hpyM",label:"ranges_label__YgOl5",rangeWrapper:"ranges_rangeWrapper__cvaVL",wrapper:"ranges_wrapper__2D_ac"}},,,function(e,t,a){e.exports={form:"form_form__1mImT",input:"form_input__37aHz",label:"form_label__37Ija"}},,,,,,function(e,t,a){e.exports={blob:"blob_blob__12pzG",movingGradient:"blob_movingGradient__22OaC"}},,,function(e,t,a){e.exports=a(20)},,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(2),o=a(3),r=a(6),i=a(7),c=a(11),l=a(8),s=a(12),u=a(0),d=a.n(u),p=a(9),m=a.n(p),f=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function b(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var g=function(){return Math.floor(100*Math.random())},h={topLeftRadius:g(),topRightRadius:g(),bottomRightRadius:g(),bottomLeftRadius:g(),copyStatus:!1},v=(a(19),a(1)),y=a.n(v),w=function(e){var t=e.ranges,a=e.handleChange,n=t.map(function(e){return d.a.createElement("section",{key:e.id,className:y.a.rangeWrapper},d.a.createElement("label",{htmlFor:e.id,className:y.a.label},e.name),d.a.createElement("div",{className:y.a.inputWrapper},d.a.createElement("input",{type:"range",className:y.a.input,id:e.id,value:e.value,onChange:a}),d.a.createElement("div",{className:y.a.inputBar,style:{width:"".concat(e.value,"%")}})))});return d.a.createElement("section",{className:y.a.wrapper},n)},_=a(10),R=a.n(_),S=a(4),E=a.n(S),C=function(e){var t=e.value,a=e.status,n=e.handleSubmit,o=a?"Copied":"Copy";return d.a.createElement("form",{className:E.a.form},d.a.createElement("label",{htmlFor:"copyCSS",className:E.a.label},o," Border Radius CSS"),d.a.createElement("input",{type:"text",id:"copyCSS",className:E.a.input,readOnly:!0,value:"border-radius: ".concat(t,";"),onClick:n}))},j=function(e){var t=e.radius,a=e.copyStatus,n=e.copyToClipboard,r=[];t.forEach(function(e){return r.push("".concat(e.value,"%"))});var i=r.join(" "),c={borderRadius:i};return d.a.createElement(d.a.Fragment,null,d.a.createElement("div",{className:R.a.blob,style:Object(o.a)({},c)}),d.a.createElement(C,{value:i,status:a,handleSubmit:n}))},k=function(e){function t(){var e,a;Object(r.a)(this,t);for(var i=arguments.length,s=new Array(i),u=0;u<i;u++)s[u]=arguments[u];return(a=Object(c.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(s)))).state=Object(o.a)({},h),a.updateBorderValue=function(e){var t,o=e.target.id,r=Number(e.target.value);a.setState((t={},Object(n.a)(t,o,r),Object(n.a)(t,"copyStatus",!1),t))},a.copyToClipboard=function(e){e.preventDefault(),document.getElementById("copyCSS").select(),document.execCommand("copy"),a.setState({copyStatus:!0})},a}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.topLeftRadius,a=e.topRightRadius,n=e.bottomLeftRadius,o=e.bottomRightRadius,r=e.copyStatus,i=this.updateBorderValue,c=this.copyToClipboard,l=[{id:"topLeftRadius",value:t,name:"Top Left Radius"},{id:"topRightRadius",value:a,name:"Top Right Radius"},{id:"bottomRightRadius",value:o,name:"Bottom Right Radius"},{id:"bottomLeftRadius",value:n,name:"Bottom Left Radius"}];return d.a.createElement(d.a.Fragment,null,d.a.createElement(j,{radius:l,copyStatus:r,copyToClipboard:c}),d.a.createElement(w,{ranges:l,handleChange:i}))}}]),t}(u.Component);m.a.render(d.a.createElement(k,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/blob-playground",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/blob-playground","/service-worker.js");f?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):b(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):b(t,e)})}}()}],[[13,1,2]]]);
//# sourceMappingURL=main.fd5e31ea.chunk.js.map