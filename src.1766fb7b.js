parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"D9Nj":[function(require,module,exports) {

},{}],"rIHc":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.createAccountFormBtn=exports.createAccountFormPassword=exports.createAccountFormUserName=exports.createAccountForm=void 0;var e=document.createElement("form");exports.createAccountForm=e;var t=document.createElement("input");exports.createAccountFormUserName=t;var r=document.createElement("input");exports.createAccountFormPassword=r;var o=document.createElement("button");exports.createAccountFormBtn=o,e.setAttribute("id","create-user-form"),t.setAttribute("id","create-user-name-form"),t.setAttribute("type","text"),t.setAttribute("placeholder","Enter your name"),r.setAttribute("id","create-user-password-form"),r.setAttribute("name","create-user-password-form"),r.setAttribute("type","password"),r.setAttribute("placeholder","Enter your password"),o.setAttribute("id","createAccountBtn"),o.textContent="Create Account";
},{}],"cpAD":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.loginFormBtn=exports.loginFormUserPassword=exports.loginFormUserName=exports.loginForm=void 0;var e=document.createElement("form");exports.loginForm=e;var t=document.createElement("input");exports.loginFormUserName=t;var r=document.createElement("input");exports.loginFormUserPassword=r;var o=document.createElement("button");exports.loginFormBtn=o,e.setAttribute("id","loginForm"),t.setAttribute("name","login-user-name"),t.setAttribute("id","login-user-name"),r.setAttribute("type","text"),t.setAttribute("placeholder","Enter your name"),r.setAttribute("name","login-user-password"),r.setAttribute("id","login-user-password"),r.setAttribute("type","password"),r.setAttribute("placeholder","Enter your password"),o.setAttribute("id","loginFormBtn"),o.textContent="Login";
},{}],"H99C":[function(require,module,exports) {
"use strict";require("./styles.css");var e=require("./createAccountForm"),r=require("./loginAccountForm");function o(e,r){return prompt(e,r)}function a(e){var o=document.createElement("h2");o.textContent=e,o.style.fontsize="2rem",o.style.margin="1rem",s.append(o),r.loginForm.style.display="none"}var s=document.getElementById("app");e.createAccountForm.append(e.createAccountFormUserName),e.createAccountForm.append(e.createAccountFormPassword),e.createAccountForm.append(e.createAccountFormBtn),s.append(e.createAccountForm),e.createAccountForm.addEventListener("submit",function(n){n.preventDefault(),console.log("Account was Sucessfully created"),r.loginForm.append(r.loginFormUserName),r.loginForm.append(r.loginFormUserPassword),r.loginForm.append(r.loginFormBtn),e.createAccountForm.style.display="none",s.append(r.loginForm),r.loginForm.addEventListener("submit",function(n){if(n.preventDefault(),r.loginFormUserName.value===e.createAccountFormUserName.value&&r.loginFormUserPassword.value===e.createAccountFormPassword.value){!function n(){var t=o("~$","pwd");switch(t){case"pwd":r.loginForm.style.display="none",a("~$"),u();break;case"gUserName":o("Password","")==r.loginFormUserPassword.value?(a("User Name: ".concat(r.loginFormUserName.value)),u()):(a("Please Enter correct password"),u());break;case"gPassword":var c=o("Serect Code","");o("Serect Code Enter","")==c?(a("Password: ".concat(r.loginFormUserPassword.value)),u()):(a("Please Enter correct Serect Code"),u());break;case"sUserName":if(o("Password","")==r.loginFormUserPassword.value)if(o("Current User Name","")==r.loginFormUserName.value){var l=o("New User Name","");l!=r.loginFormUserName.value?(r.loginFormUserName.value=l,e.createAccountFormUserName.value=l,a("User Name Succesfully changed"),u()):(a("Please Enter new User Name"),u())}else a("Please enter current user name"),u();else a("Please Enter Password Correct"),u();break;case"sPassword":if(o("Password","")==r.loginFormUserPassword.value)if(o("Current Password","")==r.loginFormUserPassword.value){var m=o("New Password","");m!=r.loginFormUserPassword.value?(r.loginFormUserPassword.value=m,e.createAccountFormPassword.value=m,a("Password is Sucessfully changed"),u()):(a("Please Enter new Password"),u())}else a("Please enter current password"),u();else a("Please enter password correct"),u();break;case"time":var d=new Date;a("".concat(d));break;default:a("Command ".concat(t," not founded")),u()}function u(){var e=document.createElement("button");e.textContent="Open Terminal",e.style.border="none",e.style.padding="1rem",e.style.margin="1rem",e.style.background="red",e.style.color="white",e.addEventListener("click",n),s.append(e),r.loginForm.style.display="none"}console.log("terminal is oppend")}(),console.log("Logged in")}else console.log("please enter your user name and password correct")})});
},{"./styles.css":"D9Nj","./createAccountForm":"rIHc","./loginAccountForm":"cpAD"}]},{},["H99C"], null)
//# sourceMappingURL=/csb-xl246/src.1766fb7b.js.map