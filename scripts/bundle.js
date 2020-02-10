(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
gsap.to(".rec-1", 1, {scaleY: 1, height: "100vh", transformOrigin: "bottom",duration:3, ease: "power4.in"})
gsap.to(".rec-2", 1, {scaleY: 1, height: "100vh", transformOrigin: "bottom",duration:3, ease: "power4.in", delay: 0.2})
gsap.to(".rec-3", 1, {scaleY: 1, height: "100vh", transformOrigin: "bottom",duration:3, ease: "power4.in", delay: 0.4})
gsap.to(".rec-4", 1, {scaleY: 1, height: "100vh", transformOrigin: "bottom",duration:3, ease: "power4.in", delay:0.6})

gsap.fromTo(".text-1", 1, {opacity: "0", top:"-10%"},{opacity: "100", top:"30%", delay:2, duration:1, ease: "power4.in"})
gsap.fromTo(".text-2", 1, {opacity: "0", top:"-10%"},{opacity: "100", top:"30%", delay:2.6, duration:1, ease: "power4.in"})
gsap.fromTo(".text-3", 1, {opacity: "0", top:"-10%"},{opacity: "100", top:"30%", delay:3.2, duration:1, ease: "power4.in"})

gsap.to(".rec-1", 1, {scaleY: 0, height: "100vh", transformOrigin: "bottom",duration:3, ease: "power4", delay: 5})
gsap.to(".rec-2", 1, {scaleY: 0, height: "100vh", transformOrigin: "bottom",duration:3, ease: "power4", delay: 5.3})
gsap.to(".rec-3", 1, {scaleY: 0, height: "100vh", transformOrigin: "bottom",duration:3, ease: "power4", delay: 5.6})
gsap.to(".rec-4", 1, {scaleY: 0, height: "100vh", transformOrigin: "bottom",duration:3, ease: "power4", delay: 5.9})

window.setTimeout(() => {
  document.querySelector('.animation').style.display = "none"
},7000);

window.setTimeout(() => {
  document.querySelector('.main').style.display = "block"
},7000);

// fullpage_api.setAllowScrolling(false)
},{}]},{},[1]);
