(this["webpackJsonpdmbook-frontend"]=this["webpackJsonpdmbook-frontend"]||[]).push([[10],{222:function(e,t,n){"use strict";n.r(t),n.d(t,"amplify_s3_image_picker",(function(){return h}));var r=n(11),o=n(25),i=n(5),a=n(84),c=n(6),u=(n(20),n(70),n(257)),s=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{u(r.next(e))}catch(t){i(t)}}function c(e){try{u(r.throw(e))}catch(t){i(t)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}u((r=r.apply(e,t||[])).next())}))},l=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(c){i=[6,c],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},f=new o.a("S3ImagePicker"),h=function(){function e(e){var t=this;Object(r.k)(this,e),this.contentType="binary/octet-stream",this.level=a.a.Public,this.headerTitle=c.a.IMAGE_PICKER_TITLE,this.headerHint=c.a.IMAGE_PICKER_HINT,this.placeholderHint=c.a.IMAGE_PICKER_PLACEHOLDER_HINT,this.buttonText=c.a.IMAGE_PICKER_BUTTON_TEXT,this.handlePick=function(e){return s(t,void 0,void 0,(function(){var t,n,r,o,i,a,c,s,h,p;return l(this,(function(l){switch(l.label){case 0:n=(t=this).path,r=void 0===n?"":n,o=t.level,i=t.track,a=t.identityId,c=t.fileToKey,s=r+Object(u.b)(e,c),l.label=1;case 1:return l.trys.push([1,4,,5]),[4,Object(u.e)(s,e,o,i,e.type,f)];case 2:return l.sent(),h=this,[4,Object(u.c)(s,o,i,a,f)];case 3:return h.src=l.sent(),[3,5];case 4:throw p=l.sent(),f.error(p),new Error(p);case 5:return[2]}}))}))}}return e.prototype.render=function(){return Object(r.i)(r.b,null,Object(r.i)("slot",{name:"photo-picker"},Object(r.i)("amplify-photo-picker",{previewSrc:this.src,handleClick:this.handlePick,headerTitle:i.a.get(this.headerTitle),headerHint:i.a.get(this.headerHint),placeholderHint:i.a.get(this.placeholderHint),buttonText:i.a.get(this.buttonText)})))},e}()},257:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return c})),n.d(t,"e",(function(){return f}));var r=n(20),o=n(70),i=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{u(r.next(e))}catch(t){i(t)}}function c(e){try{u(r.throw(e))}catch(t){i(t)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}u((r=r.apply(e,t||[])).next())}))},a=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(c){i=[6,c],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},c=new Set(["apng","bmp","gif","ico","cur","jpg","jpeg","jfif","pjpeg","pjp","png","svg","tif","tiff","webp"]),u=function(e,t){var n=e.name,r=e.size,o=e.type,i=encodeURI(n);return t&&((i="string"===typeof t?t:"function"===typeof t?t({name:n,size:r,type:o}):encodeURI(JSON.stringify(t)))||(i="empty_key")),i.replace(/\s/g,"_")},s=function(e,t,n,c,u){return i(void 0,void 0,void 0,(function(){var i,s;return a(this,(function(a){switch(a.label){case 0:if(!o.a||"function"!==typeof o.a.get)throw new Error(r.k);a.label=1;case 1:return a.trys.push([1,3,,4]),[4,o.a.get(e,{level:t,track:n,identityId:c})];case 2:return i=a.sent(),u.debug("Storage image get",i),[2,i];case 3:throw s=a.sent(),new Error(s);case 4:return[2]}}))}))},l=function(e,t,n,c,u){return i(void 0,void 0,void 0,(function(){var i,s;return a(this,(function(a){switch(a.label){case 0:if(!o.a||"function"!==typeof o.a.get)throw new Error(r.k);a.label=1;case 1:return a.trys.push([1,4,,5]),[4,o.a.get(e,{download:!0,level:t,track:n,identityId:c})];case 2:return i=a.sent(),u.debug(i),[4,(l=i.Body,new Promise((function(e,t){var n=new FileReader;n.onload=function(){e(n.result)},n.onerror=function(){t("Failed to read file!"),n.abort()},n.readAsText(l)})))];case 3:return[2,a.sent()];case 4:throw s=a.sent(),new Error(s);case 5:return[2]}var l}))}))},f=function(e,t,n,c,u,s){return i(void 0,void 0,void 0,(function(){var i,l;return a(this,(function(a){switch(a.label){case 0:if(!o.a||"function"!==typeof o.a.put)throw new Error(r.k);a.label=1;case 1:return a.trys.push([1,3,,4]),[4,o.a.put(e,t,{contentType:u,level:n,track:c})];case 2:return i=a.sent(),s.debug("Upload data",i),[3,4];case 3:throw l=a.sent(),new Error(l);case 4:return[2]}}))}))}}}]);
//# sourceMappingURL=10.463051ff.chunk.js.map