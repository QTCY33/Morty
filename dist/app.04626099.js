// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"A2T1":[function(require,module,exports) {
var string = '\n.face {\n  border: 2px solid black;\n  height: 250px;\n  width: 250px;\n  border-radius: 50%;\n  background: rgb(236, 195, 162);\n  position: absolute;\n  left: 50%;\n  margin-left: -125px;\n  top: 113px;\n}\n.hair {\n  position: relative;\n  width: 280px;\n  height: 260px;\n  top: -41px;\n  border-radius: 50%;\n  margin-left: -21px;\n  background: rgb(135, 75, 39);\n  z-index: -2;\n}\n.hair::before {\n  content: "";\n  position: absolute;\n  background: rgb(135, 75, 39);\n  width: 30px;\n  height: 30px;\n  left: -1px;\n  top: 130px;\n  border-radius: 0 0 0 5px;\n  transform: rotate(69deg);\n}\n.hair::after {\n  content: "";\n  position: absolute;\n  background: rgb(135, 75, 39);\n  width: 5px;\n  height: 30px;\n  left: -2px;\n  top: 112px;\n  border-top-color: transparent;\n  border-radius: 0 0 0 5px;\n  transform: rotate(15deg);\n}\n.hair .hair1 {\n  position: absolute;\n  width: 50px;\n  height: 100px;\n  background: rgb(37, 42, 56);\n  left: 275px;\n  top: 58px;\n  border-radius: 50px 0 0 50px;\n}\n.hair .hair2 {\n  position: absolute;\n  width: 130px;\n  height: 130px;\n  background: rgb(37, 42, 56);\n  left: -89px;\n  top: -48px;\n  transform: rotate(36deg);\n}\n.hair .hair3 {\n  position: absolute;\n  width: 50px;\n  height: 50px;\n  background: rgb(37, 42, 56);\n  border-radius: 40%;\n  transform: rotate(31deg);\n}\n.hair .hair4 {\n  position: absolute;\n  width: 70px;\n  height: 130px;\n  background: rgb(37, 42, 56);\n  left: 220px;\n  top: -72px;\n  border-radius: 50px 0 0 50px;\n}\n.hair .hair5 {\n  position: absolute;\n  width: 100px;\n  height: 10px;\n  background: rgb(37, 42, 56);\n  left: 25px;\n  top: 6px;\n  transform: rotate(-20deg);\n}\n.eye {\n  border: 2px solid black;\n  height: 90px;\n  width: 90px;\n  position: absolute;\n  border-radius: 50%;\n  background: white;\n  top: 40px;\n}\n  .eye.left {\n  margin-left: 20px;\n}\n  .eye .eyeball {\n  border: 2px solid black;\n  height: 9px;\n  width: 9px;\n  position: relative;\n  background: black;\n  border-radius: 50%;\n  left: 40px;\n  top: 30px;\n}\n  .eye.right {\n  margin-left: 135px;\n}\n  .eyebrow {\n  position: absolute;\n  border: 2px solid black;\n  width: 50px;\n  height: 20px;\n  border-radius: 50%;\n  border-bottom-color: transparent;\n  border-right-color: transparent;\n  border-left-color: transparent;\n}\n.eyebrow.left {\n  left: 50px;\n  top: 25px;\n  transform: rotate(-10deg);\n}\n.eyebrow.right {\n  left: 145px;\n  top: 25px;\n  transform: rotate(10deg);\n}\n.nose {\n  position: absolute;\n  border: 2px solid black;\n  width: 35px;\n  height: 18px;\n  border-radius: 0 20px 30px 0px;\n  border-left-color: transparent;\n  background-size: 20%;\n  left: 110px;\n  top: 127px;\n  transform: rotate(25deg);\n  z-index: 10;\n}\n.nose::before {\n  content: "";\n  position: absolute;\n  height: 20px;\n  width: 20px;\n  background: rgb(236, 195, 162);\n  transform: rotate(45deg) translateX(-15px);\n}\n.ear {\n  border: 2px solid black;\n  position: absolute;\n  height: 60px;\n  width: 60px;\n  border-radius: 50%;\n  background: rgb(236, 195, 162);\n  z-index: -1;\n}\n.ear.left {\n  left: -20px;\n  top: 140px;\n}\n.ear.right {\n  left: 205px;\n  top: 140px;\n}\n.mouth {\n  border: 2px solid black;\n  width: 100px;\n  height: 55px;\n  position: absolute;\n  left: 50%;\n  margin-left: -50px;\n  top: 170px;\n  border-radius: 50%;\n  background: rgb(126, 38, 37);\n}\n.rainbow {\n  position: relative;\n  height: 160px;\n  width: 80px;\n  left: 50%;\n  margin-left: -40px;\n  top: 253px;\n  display: flex;\n  transform: perspective(2em) rotateX(20deg);\n}\n.rainbowColor {\n  width: 20px;\n}\n.rainbowColor.purple {\n  background: rgb(170, 140, 197);\n  border-radius: 10px 0 0 0px;\n}\n.rainbowColor.blue {\n  background-color: aqua;\n}\n.rainbowColor.yellow {\n  background: rgb(238, 220, 60);\n}\n.rainbowColor.red {\n  background: rgb(207, 36, 61);\n  border-radius: 0 10px 0 0px;\n}\ninput[type="checkbox"] {\n  height: 0;\n  width: 0;\n  visibility: hidden;\n}\nlabel {\n  background: #eee;\n  border: 6px solid rgb(177, 63, 63);\n  width: 160px;\n  height: 75px;\n  border-radius: 80px;\n  display: inline-block;\n  margin: 4em auto;\n  position: absolute;\n  cursor: pointer;\n  right: 10px;\n  top: -60px;\n}\nlabel span {\n  position: absolute;\n  top: 2px;\n  left: 4px;\n  width: 60px;\n  height: 60px;\n  background: white;\n  border-radius: 50%;\n  transition: 0.5s;\n  border: 2px solid #222;\n}\n .icon {\n        position: absolute;\n        top: -45px;\n        left: 3px;\n        width: 50px;\n        display: block;\n      }\n';

var player = {
  id: undefined,
  n: 1,
  time: 20,
  ui: {
    demo: document.querySelector('#demo'),
    demo2: document.querySelector('#demo2')
  },
  init: function init() {
    player.ui.demo.innerText = string.substr(0, player.n);
    player.ui.demo2.innerHTML = string.substr(0, player.n);
    player.play();
    player.bindEvents();
  },
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast'
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key];
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: function run() {
    player.n += 1;
    if (player.n > string.length) {
      window.clearInterval(player.id);
      return;
    }
    player.ui.demo.innerText = string.substr(0, player.n);
    player.ui.demo2.innerHTML = string.substr(0, player.n);
    player.ui.demo.scrollTop = demo.scrollHeight;
  },
  play: function play() {
    player.id = setInterval(player.run, player.time);
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  slow: function slow() {
    player.pause();
    player.time = 20;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.time = 10;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.time = 0;
    player.play();
  }
};
player.init();
},{}]},{},["A2T1"], null)
//# sourceMappingURL=app.04626099.map