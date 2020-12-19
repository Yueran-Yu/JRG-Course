// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
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
      localRequire.cache = {};

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

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
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
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var str = ".skin * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n.skin *::before .skin *::after{\n    box-sizing:border-box;\n}\n\n.skin {\n    position: relative;\n    background-color: #ffee51;\n    min-height: 50vh;\n}\n\n.nose {\n    position: relative;\n    width: 10px;\n    height: 10px;\n    background-color: black;\n    border-radius: 90% 0 0 0;\n    transform: rotate(45deg);\n    left: 50%;\n    margin-left: -5px;\n    top: 140px;\n    z-index: 3;\n}\n\n@keyframes sway {\n   0%{\n       transform: rotate(45deg);\n   }\n\n    32%{\n        transform: rotate(50deg);\n    }\n\n    58%{\n        transform: rotate(45deg);\n    }\n\n    82%{\n        transform: rotate(40deg);\n    }\n\n    100%{\n        transform: rotate(45deg);\n    }\n}\n\n.nose:hover{\n    animation:sway 400ms infinite;\n}\n\n.eye {\n    border: 2px solid black;\n    width: 64px;\n    height: 64px;\n    position: absolute;\n    left: 50%;\n    top: 100px;\n    margin-left: -32px;\n    background-color: #2e2e2e;\n    border-radius: 50%;\n}\n\n.eye.left {\n    transform: translateX(-100px);\n}\n\n.eye.right {\n    transform: translateX(100px);\n}\n\n.eye::before {\n    content: '';\n    display: block;\n    width: 28px;\n    height: 28px;\n    border: 3px solid #000;\n    background-color: #fff;\n    border-radius: 50%;\n    position: relative;\n    left: 10px;\n}\n\n.mouth {\n    /*border: 1px solid red;*/\n    width: 200px;\n    height: 200px;\n    position: absolute;\n    left: 50%;\n    top: 160px;\n    margin-left: -100px;\n}\n\n.mouth .up {\n    display: flex;\n    justify-content: center;\n    position: relative;\n    z-index: 1;\n}\n\n.mouth .up .lip {\n    height: 30px;\n    width: 90px;\n    border: 3px solid black;\n    border-right: transparent;\n    border-top: transparent;\n    border-left: transparent;\n    background-color: #ffee51;\n}\n\n.mouth .up .lip.left {\n    border-radius: 0 0 0 45px;\n    transform: rotate(-25deg);\n}\n\n.mouth .up .lip.right {\n    border-radius: 0 0 45px 0;\n    transform: rotate(25deg);\n}\n\n.mouth .down {\n    height: 180px;\n    position: absolute;\n    width: 100%;\n    top: 10px;\n    overflow: hidden;\n}\n\n.mouth .down .tongue {\n    border: 3px solid black;\n    position: absolute;\n    width: 90%;\n    height: 1000px;\n    position: absolute;\n    margin-left: 5%;\n    bottom: 0;\n    left: 0;\n    border-radius: 0 0 100% 100%;\n    background-color: #a91b2a;\n    display: flex;\n    justify-content: center;\n    overflow:hidden;\n}\n\n.mouth .down .tongue .tongue-red{\n    position: absolute;\n    height: 150px;\n    width: 150px;\n    background-color: #f87f70;\n    bottom: 0;\n    border-radius: 50% 50%  0 0 ;\n}\n\n.face{\n    position: absolute;\n    left: 50%;\n    border:3px solid black;\n    width:88px;\n    height:88px;\n    background-color: #ff0a1d;\n    top:220px;\n    border-radius: 50%;\n    z-index: 4;\n    margin-left: -44px;\n}\n\n.face.left{\n    transform: translateX(-150px);\n}\n\n.face.right{\n    transform: translateX(150px);\n}";
var _default = str;
exports.default = _default;
},{}],"test.js":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var demo = document.querySelector('#demo');
var demo2 = document.querySelector('#demo2');
var id;
var player = {
  id: undefined,
  n: 1,
  time: 0,
  init: function init() {
    demo.innerText = _css.default.substr(0, player.n);
    demo2.innerHTML = _css.default.substr(0, player.n);
    player.play();
    player.bindEvents();
  },
  events: {
    '#pauseBtn': 'pause',
    '#playBtn': 'play',
    '#btnSlow': 'slow',
    '#btnMedium': 'medium',
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
  printContent: function printContent() {
    player.n += 1;

    if (player.n > _css.default.length) {
      player.pause();
      return;
    }

    demo.innerText = _css.default.substr(0, player.n);
    demo2.innerHTML = _css.default.substr(0, player.n);
    demo.scrollTop = demo.scrollHeight;
  },
  play: function play() {
    player.id = setInterval(player.printContent, player.time);
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  slow: function slow() {
    player.pause();
    player.time = 800;
    player.play();
  },
  medium: function medium() {
    player.pause();
    player.time = 200;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.time = 0;
    player.play();
  }
};
player.init();

var here = function here(a) {
  console.log("This is result I want. + ".concat(a));
};

var y = function y(a) {
  here(a);
};

console.log("y==================");
console.log(y("s")); // y==================
// This is result I want. + s

console.log("here===============");
console.log(here("s")); // test.js:69 here===============
// This is result I want. + s

/*
* Here is the result: y function is equal to here function
* */
},{"./css":"css.js"}],"../../../../../.config/yarn/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59803" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../.config/yarn/global/node_modules/parcel/src/builtins/hmr-runtime.js","test.js"], null)
//# sourceMappingURL=/test.e98b79dd.js.map