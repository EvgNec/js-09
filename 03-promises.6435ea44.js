!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var i=r("ejkSG");function u(e,n){var t=Math.random()>.5;return new Promise((function(o,r){return t?o({position:e,newDelay:n}):r({position:e,newDelay:n})}))}({delayInp:document.querySelector("input[name=delay]"),stepInp:document.querySelector("input[name=step]"),amountInp:document.querySelector("input[name=amount]"),form:document.querySelector(".form")}).form.addEventListener("submit",(function(n){n.preventDefault();for(var t=n.currentTarget,o=+t.delay.value,r=+t.amount.value,a=+t.step.value,c=1;c<=r;c+=1){var l=o;o+=a;u(c,l).then((function(n){var t=n.position,o=n.newDelay;setTimeout((function(){e(i).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms"))}),o)})).catch((function(n){var t=n.position,o=n.newDelay;setTimeout((function(){e(i).Notify.warning("❌ Rejected promise ".concat(t," in ").concat(o,"ms"))}),o)}))}}))}();
//# sourceMappingURL=03-promises.6435ea44.js.map
