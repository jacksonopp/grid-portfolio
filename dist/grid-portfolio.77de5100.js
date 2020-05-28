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
})({"assets/ts/openCloseMenu.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openCloseMenu = void 0;
var menu = document.querySelector('.menu');
var burger = document.querySelector('.hamburger');
var menuNodeList = menu.childNodes;
var menuX = menuNodeList[1];
var menuLs = menuNodeList[3];
var links = [menuLs.childNodes[1], menuLs.childNodes[3], menuLs.childNodes[5]];
var isOpen = true;

function openCloseMenu() {
  document.querySelector('#close').addEventListener('click', function (e) {
    return toggleMenu();
  });
  burger.addEventListener('click', function () {
    return toggleMenu();
  });
  window.addEventListener('resize', function () {
    return toggleMenuFromSize(window.innerWidth);
  });
  links.forEach(function (link) {
    return link.addEventListener('click', function () {
      console.log(window.innerWidth);

      if (window.innerWidth < 1058) {
        console.log('triggered');
        closeMenu();
        isOpen = false;
      }
    });
  });
  toggleMenuFromSize(window.innerWidth);
}

exports.openCloseMenu = openCloseMenu;

function toggleMenu() {
  if (isOpen) {
    closeMenu();
  } else {
    openMenu();
  }

  isOpen = !isOpen;
}

function openMenu() {
  setTimeout(function () {
    menuLs.classList.remove('hide-text');
  }, 200);
  menu.classList.remove('close');
  burger.classList.add('close');
}

function closeMenu() {
  menuLs.classList.add('hide-text');
  menu.classList.add('close');
  setTimeout(function () {
    return burger.classList.remove('close');
  }, 200);
}

function toggleMenuFromSize(size) {
  console.log(size);

  if (size < 888) {
    closeMenu();
    isOpen = false;
  } else if (size > 888) {
    openMenu();
    isOpen = true;
  }
}
},{}],"assets/ts/portfolioItem.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPortfolioItem = exports.PortfolioItem = void 0;

var PortfolioItem =
/** @class */
function () {
  function PortfolioItem(photoUrl, title, githubUrl, appUrl) {
    this.photoUrl = photoUrl;
    this.title = title;
    this.githubUrl = githubUrl;
    this.appUrl = appUrl;
  }

  return PortfolioItem;
}();

exports.PortfolioItem = PortfolioItem;

function createPortfolioItem(portfolioItem) {
  return "\n  <img src=\"" + portfolioItem.photoUrl + "\" alt=\"" + portfolioItem.title + "\" class=\"lazy\"/>\n  <a href=\"" + portfolioItem.appUrl + "\" class=\"portfolio-title\">\n    <h3>" + portfolioItem.title + "</h3>\n  </a>\n  <div class=\"links\">\n    <a href=\"" + portfolioItem.githubUrl + "\" class=\"link-btn\">View Code</a>\n    <a href=\"" + portfolioItem.appUrl + "\" class=\"link-btn\">View App</a>\n  </div>\n  ";
}

exports.createPortfolioItem = createPortfolioItem;
},{}],"assets/ts/createPortfolio.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPortfolio = void 0;

var portfolioItem_1 = require("./portfolioItem");

var portfolioDiv = document.getElementById('portfolio-container');
var portfolio = [new portfolioItem_1.PortfolioItem('/img/gifTastic.png', 'GifTastic', '#', '#'), new portfolioItem_1.PortfolioItem('/img/newsScrape.png', 'News Scraper', '#', '#'), new portfolioItem_1.PortfolioItem('/img/nytSearch.png', 'NYT Search', '#', '#'), new portfolioItem_1.PortfolioItem('/img/rlgl.png', 'Red Light Green Light', '#', '#'), new portfolioItem_1.PortfolioItem('/img/shyband.png', 'Shy Band', '#', '#')];

function createPortfolio() {
  portfolio.forEach(function (item) {
    var itemDiv = document.createElement('div');
    itemDiv.classList.add('portfolio-item');
    itemDiv.innerHTML = portfolioItem_1.createPortfolioItem(item);
    portfolioDiv.append(itemDiv);
  });
}

exports.createPortfolio = createPortfolio;
},{"./portfolioItem":"assets/ts/portfolioItem.ts"}],"assets/ts/main.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var openCloseMenu_1 = require("./openCloseMenu");

Object.defineProperty(exports, "openCloseMenu", {
  enumerable: true,
  get: function get() {
    return openCloseMenu_1.openCloseMenu;
  }
});

var createPortfolio_1 = require("./createPortfolio");

Object.defineProperty(exports, "createPortfolio", {
  enumerable: true,
  get: function get() {
    return createPortfolio_1.createPortfolio;
  }
});
},{"./openCloseMenu":"assets/ts/openCloseMenu.ts","./createPortfolio":"assets/ts/createPortfolio.ts"}],"index.ts":[function(require,module,exports) {
"use strict";

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var main = __importStar(require("./assets/ts/main"));

for (var method in main) {
  main[method]();
}
},{"./assets/ts/main":"assets/ts/main.ts"}],"../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57454" + '/');

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
},{}]},{},["../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.ts"], null)
//# sourceMappingURL=/grid-portfolio.77de5100.js.map