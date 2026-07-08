(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res, err) => function __init() {
    if (err) throw err[0];
    try {
      return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
    } catch (e) {
      throw err = [e], e;
    }
  };
  var __commonJS = (cb, mod) => function __require() {
    try {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    } catch (e) {
      throw mod = 0, e;
    }
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/jquery/dist-module/jquery.module.js
  function jQueryFactory(window2, noGlobal) {
    if (typeof window2 === "undefined" || !window2.document) {
      throw new Error("jQuery requires a window with a document");
    }
    var arr = [];
    var getProto = Object.getPrototypeOf;
    var slice = arr.slice;
    var flat = arr.flat ? function(array) {
      return arr.flat.call(array);
    } : function(array) {
      return arr.concat.apply([], array);
    };
    var push = arr.push;
    var indexOf = arr.indexOf;
    var class2type = {};
    var toString2 = class2type.toString;
    var hasOwn = class2type.hasOwnProperty;
    var fnToString = hasOwn.toString;
    var ObjectFunctionString = fnToString.call(Object);
    var support = {};
    function toType(obj) {
      if (obj == null) {
        return obj + "";
      }
      return typeof obj === "object" ? class2type[toString2.call(obj)] || "object" : typeof obj;
    }
    function isWindow(obj) {
      return obj != null && obj === obj.window;
    }
    function isArrayLike(obj) {
      var length = !!obj && obj.length, type = toType(obj);
      if (typeof obj === "function" || isWindow(obj)) {
        return false;
      }
      return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
    }
    var document$1 = window2.document;
    var preservedScriptAttributes = {
      type: true,
      src: true,
      nonce: true,
      noModule: true
    };
    function DOMEval(code, node, doc) {
      doc = doc || document$1;
      var i2, script = doc.createElement("script");
      script.text = code;
      for (i2 in preservedScriptAttributes) {
        if (node && node[i2]) {
          script[i2] = node[i2];
        }
      }
      if (doc.head.appendChild(script).parentNode) {
        script.parentNode.removeChild(script);
      }
    }
    var version = "4.0.0", rhtmlSuffix = /HTML$/i, jQuery2 = function(selector, context) {
      return new jQuery2.fn.init(selector, context);
    };
    jQuery2.fn = jQuery2.prototype = {
      // The current version of jQuery being used
      jquery: version,
      constructor: jQuery2,
      // The default length of a jQuery object is 0
      length: 0,
      toArray: function() {
        return slice.call(this);
      },
      // Get the Nth element in the matched element set OR
      // Get the whole matched element set as a clean array
      get: function(num) {
        if (num == null) {
          return slice.call(this);
        }
        return num < 0 ? this[num + this.length] : this[num];
      },
      // Take an array of elements and push it onto the stack
      // (returning the new matched element set)
      pushStack: function(elems) {
        var ret = jQuery2.merge(this.constructor(), elems);
        ret.prevObject = this;
        return ret;
      },
      // Execute a callback for every element in the matched set.
      each: function(callback) {
        return jQuery2.each(this, callback);
      },
      map: function(callback) {
        return this.pushStack(jQuery2.map(this, function(elem, i2) {
          return callback.call(elem, i2, elem);
        }));
      },
      slice: function() {
        return this.pushStack(slice.apply(this, arguments));
      },
      first: function() {
        return this.eq(0);
      },
      last: function() {
        return this.eq(-1);
      },
      even: function() {
        return this.pushStack(jQuery2.grep(this, function(_elem, i2) {
          return (i2 + 1) % 2;
        }));
      },
      odd: function() {
        return this.pushStack(jQuery2.grep(this, function(_elem, i2) {
          return i2 % 2;
        }));
      },
      eq: function(i2) {
        var len = this.length, j = +i2 + (i2 < 0 ? len : 0);
        return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
      },
      end: function() {
        return this.prevObject || this.constructor();
      }
    };
    jQuery2.extend = jQuery2.fn.extend = function() {
      var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i2 = 1, length = arguments.length, deep = false;
      if (typeof target === "boolean") {
        deep = target;
        target = arguments[i2] || {};
        i2++;
      }
      if (typeof target !== "object" && typeof target !== "function") {
        target = {};
      }
      if (i2 === length) {
        target = this;
        i2--;
      }
      for (; i2 < length; i2++) {
        if ((options = arguments[i2]) != null) {
          for (name in options) {
            copy = options[name];
            if (name === "__proto__" || target === copy) {
              continue;
            }
            if (deep && copy && (jQuery2.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
              src = target[name];
              if (copyIsArray && !Array.isArray(src)) {
                clone = [];
              } else if (!copyIsArray && !jQuery2.isPlainObject(src)) {
                clone = {};
              } else {
                clone = src;
              }
              copyIsArray = false;
              target[name] = jQuery2.extend(deep, clone, copy);
            } else if (copy !== void 0) {
              target[name] = copy;
            }
          }
        }
      }
      return target;
    };
    jQuery2.extend({
      // Unique for each copy of jQuery on the page
      expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
      // Assume jQuery is ready without the ready module
      isReady: true,
      error: function(msg) {
        throw new Error(msg);
      },
      noop: function() {
      },
      isPlainObject: function(obj) {
        var proto, Ctor;
        if (!obj || toString2.call(obj) !== "[object Object]") {
          return false;
        }
        proto = getProto(obj);
        if (!proto) {
          return true;
        }
        Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
        return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
      },
      isEmptyObject: function(obj) {
        var name;
        for (name in obj) {
          return false;
        }
        return true;
      },
      // Evaluates a script in a provided context; falls back to the global one
      // if not specified.
      globalEval: function(code, options, doc) {
        DOMEval(code, { nonce: options && options.nonce }, doc);
      },
      each: function(obj, callback) {
        var length, i2 = 0;
        if (isArrayLike(obj)) {
          length = obj.length;
          for (; i2 < length; i2++) {
            if (callback.call(obj[i2], i2, obj[i2]) === false) {
              break;
            }
          }
        } else {
          for (i2 in obj) {
            if (callback.call(obj[i2], i2, obj[i2]) === false) {
              break;
            }
          }
        }
        return obj;
      },
      // Retrieve the text value of an array of DOM nodes
      text: function(elem) {
        var node, ret = "", i2 = 0, nodeType = elem.nodeType;
        if (!nodeType) {
          while (node = elem[i2++]) {
            ret += jQuery2.text(node);
          }
        }
        if (nodeType === 1 || nodeType === 11) {
          return elem.textContent;
        }
        if (nodeType === 9) {
          return elem.documentElement.textContent;
        }
        if (nodeType === 3 || nodeType === 4) {
          return elem.nodeValue;
        }
        return ret;
      },
      // results is for internal usage only
      makeArray: function(arr2, results) {
        var ret = results || [];
        if (arr2 != null) {
          if (isArrayLike(Object(arr2))) {
            jQuery2.merge(
              ret,
              typeof arr2 === "string" ? [arr2] : arr2
            );
          } else {
            push.call(ret, arr2);
          }
        }
        return ret;
      },
      inArray: function(elem, arr2, i2) {
        return arr2 == null ? -1 : indexOf.call(arr2, elem, i2);
      },
      isXMLDoc: function(elem) {
        var namespace = elem && elem.namespaceURI, docElem = elem && (elem.ownerDocument || elem).documentElement;
        return !rhtmlSuffix.test(namespace || docElem && docElem.nodeName || "HTML");
      },
      // Note: an element does not contain itself
      contains: function(a, b) {
        var bup = b && b.parentNode;
        return a === bup || !!(bup && bup.nodeType === 1 && // Support: IE 9 - 11+
        // IE doesn't have `contains` on SVG.
        (a.contains ? a.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
      },
      merge: function(first, second) {
        var len = +second.length, j = 0, i2 = first.length;
        for (; j < len; j++) {
          first[i2++] = second[j];
        }
        first.length = i2;
        return first;
      },
      grep: function(elems, callback, invert) {
        var callbackInverse, matches2 = [], i2 = 0, length = elems.length, callbackExpect = !invert;
        for (; i2 < length; i2++) {
          callbackInverse = !callback(elems[i2], i2);
          if (callbackInverse !== callbackExpect) {
            matches2.push(elems[i2]);
          }
        }
        return matches2;
      },
      // arg is for internal usage only
      map: function(elems, callback, arg) {
        var length, value, i2 = 0, ret = [];
        if (isArrayLike(elems)) {
          length = elems.length;
          for (; i2 < length; i2++) {
            value = callback(elems[i2], i2, arg);
            if (value != null) {
              ret.push(value);
            }
          }
        } else {
          for (i2 in elems) {
            value = callback(elems[i2], i2, arg);
            if (value != null) {
              ret.push(value);
            }
          }
        }
        return flat(ret);
      },
      // A global GUID counter for objects
      guid: 1,
      // jQuery.support is not used in Core but other projects attach their
      // properties to it so it needs to exist.
      support
    });
    if (typeof Symbol === "function") {
      jQuery2.fn[Symbol.iterator] = arr[Symbol.iterator];
    }
    jQuery2.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
      function(_i, name) {
        class2type["[object " + name + "]"] = name.toLowerCase();
      }
    );
    function nodeName(elem, name) {
      return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
    }
    var pop = arr.pop;
    var whitespace = "[\\x20\\t\\r\\n\\f]";
    var isIE = document$1.documentMode;
    var rbuggyQSA = isIE && new RegExp(
      // Support: IE 9 - 11+
      // IE's :disabled selector does not pick up the children of disabled fieldsets
      ":enabled|:disabled|\\[" + whitespace + "*name" + whitespace + "*=" + whitespace + `*(?:''|"")`
    );
    var rtrimCSS = new RegExp(
      "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$",
      "g"
    );
    var identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+";
    var rleadingCombinator = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*");
    var rdescend = new RegExp(whitespace + "|>");
    var rsibling = /[+~]/;
    var documentElement$1 = document$1.documentElement;
    var matches = documentElement$1.matches || documentElement$1.msMatchesSelector;
    function createCache() {
      var keys = [];
      function cache(key, value) {
        if (keys.push(key + " ") > jQuery2.expr.cacheLength) {
          delete cache[keys.shift()];
        }
        return cache[key + " "] = value;
      }
      return cache;
    }
    function testContext(context) {
      return context && typeof context.getElementsByTagName !== "undefined" && context;
    }
    var attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + // Operator (capture 2)
    "*([*^$|!~]?=)" + whitespace + // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
    `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + identifier + "))|)" + whitespace + "*\\]";
    var pseudos = ":(" + identifier + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + attributes + ")*)|.*)\\)|)";
    var filterMatchExpr = {
      ID: new RegExp("^#(" + identifier + ")"),
      CLASS: new RegExp("^\\.(" + identifier + ")"),
      TAG: new RegExp("^(" + identifier + "|[*])"),
      ATTR: new RegExp("^" + attributes),
      PSEUDO: new RegExp("^" + pseudos),
      CHILD: new RegExp(
        "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)",
        "i"
      )
    };
    var rpseudo = new RegExp(pseudos);
    var runescape = new RegExp("\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g"), funescape = function(escape, nonHex) {
      var high = "0x" + escape.slice(1) - 65536;
      if (nonHex) {
        return nonHex;
      }
      return high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320);
    };
    function unescapeSelector(sel) {
      return sel.replace(runescape, funescape);
    }
    function selectorError(msg) {
      jQuery2.error("Syntax error, unrecognized expression: " + msg);
    }
    var rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*");
    var tokenCache = createCache();
    function tokenize(selector, parseOnly) {
      var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
      if (cached) {
        return parseOnly ? 0 : cached.slice(0);
      }
      soFar = selector;
      groups = [];
      preFilters = jQuery2.expr.preFilter;
      while (soFar) {
        if (!matched || (match = rcomma.exec(soFar))) {
          if (match) {
            soFar = soFar.slice(match[0].length) || soFar;
          }
          groups.push(tokens = []);
        }
        matched = false;
        if (match = rleadingCombinator.exec(soFar)) {
          matched = match.shift();
          tokens.push({
            value: matched,
            // Cast descendant combinators to space
            type: match[0].replace(rtrimCSS, " ")
          });
          soFar = soFar.slice(matched.length);
        }
        for (type in filterMatchExpr) {
          if ((match = jQuery2.expr.match[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
            matched = match.shift();
            tokens.push({
              value: matched,
              type,
              matches: match
            });
            soFar = soFar.slice(matched.length);
          }
        }
        if (!matched) {
          break;
        }
      }
      if (parseOnly) {
        return soFar.length;
      }
      return soFar ? selectorError(selector) : (
        // Cache the tokens
        tokenCache(selector, groups).slice(0)
      );
    }
    var preFilter = {
      ATTR: function(match) {
        match[1] = unescapeSelector(match[1]);
        match[3] = unescapeSelector(match[3] || match[4] || match[5] || "");
        if (match[2] === "~=") {
          match[3] = " " + match[3] + " ";
        }
        return match.slice(0, 4);
      },
      CHILD: function(match) {
        match[1] = match[1].toLowerCase();
        if (match[1].slice(0, 3) === "nth") {
          if (!match[3]) {
            selectorError(match[0]);
          }
          match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
          match[5] = +(match[7] + match[8] || match[3] === "odd");
        } else if (match[3]) {
          selectorError(match[0]);
        }
        return match;
      },
      PSEUDO: function(match) {
        var excess, unquoted = !match[6] && match[2];
        if (filterMatchExpr.CHILD.test(match[0])) {
          return null;
        }
        if (match[3]) {
          match[2] = match[4] || match[5] || "";
        } else if (unquoted && rpseudo.test(unquoted) && // Get excess from tokenize (recursively)
        (excess = tokenize(unquoted, true)) && // advance to the next closing parenthesis
        (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
          match[0] = match[0].slice(0, excess);
          match[2] = unquoted.slice(0, excess);
        }
        return match.slice(0, 3);
      }
    };
    function toSelector(tokens) {
      var i2 = 0, len = tokens.length, selector = "";
      for (; i2 < len; i2++) {
        selector += tokens[i2].value;
      }
      return selector;
    }
    function access(elems, fn, key, value, chainable, emptyGet, raw) {
      var i2 = 0, len = elems.length, bulk = key == null;
      if (toType(key) === "object") {
        chainable = true;
        for (i2 in key) {
          access(elems, fn, i2, key[i2], true, emptyGet, raw);
        }
      } else if (value !== void 0) {
        chainable = true;
        if (typeof value !== "function") {
          raw = true;
        }
        if (bulk) {
          if (raw) {
            fn.call(elems, value);
            fn = null;
          } else {
            bulk = fn;
            fn = function(elem, _key, value2) {
              return bulk.call(jQuery2(elem), value2);
            };
          }
        }
        if (fn) {
          for (; i2 < len; i2++) {
            fn(
              elems[i2],
              key,
              raw ? value : value.call(elems[i2], i2, fn(elems[i2], key))
            );
          }
        }
      }
      if (chainable) {
        return elems;
      }
      if (bulk) {
        return fn.call(elems);
      }
      return len ? fn(elems[0], key) : emptyGet;
    }
    var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;
    jQuery2.fn.extend({
      attr: function(name, value) {
        return access(this, jQuery2.attr, name, value, arguments.length > 1);
      },
      removeAttr: function(name) {
        return this.each(function() {
          jQuery2.removeAttr(this, name);
        });
      }
    });
    jQuery2.extend({
      attr: function(elem, name, value) {
        var ret, hooks, nType = elem.nodeType;
        if (nType === 3 || nType === 8 || nType === 2) {
          return;
        }
        if (typeof elem.getAttribute === "undefined") {
          return jQuery2.prop(elem, name, value);
        }
        if (nType !== 1 || !jQuery2.isXMLDoc(elem)) {
          hooks = jQuery2.attrHooks[name.toLowerCase()];
        }
        if (value !== void 0) {
          if (value === null || // For compat with previous handling of boolean attributes,
          // remove when `false` passed. For ARIA attributes -
          // many of which recognize a `"false"` value - continue to
          // set the `"false"` value as jQuery <4 did.
          value === false && name.toLowerCase().indexOf("aria-") !== 0) {
            jQuery2.removeAttr(elem, name);
            return;
          }
          if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) {
            return ret;
          }
          elem.setAttribute(name, value);
          return value;
        }
        if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
          return ret;
        }
        ret = elem.getAttribute(name);
        return ret == null ? void 0 : ret;
      },
      attrHooks: {},
      removeAttr: function(elem, value) {
        var name, i2 = 0, attrNames = value && value.match(rnothtmlwhite);
        if (attrNames && elem.nodeType === 1) {
          while (name = attrNames[i2++]) {
            elem.removeAttribute(name);
          }
        }
      }
    });
    if (isIE) {
      jQuery2.attrHooks.type = {
        set: function(elem, value) {
          if (value === "radio" && nodeName(elem, "input")) {
            var val = elem.value;
            elem.setAttribute("type", value);
            if (val) {
              elem.value = val;
            }
            return value;
          }
        }
      };
    }
    var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
    function fcssescape(ch, asCodePoint) {
      if (asCodePoint) {
        if (ch === "\0") {
          return "\uFFFD";
        }
        return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
      }
      return "\\" + ch;
    }
    jQuery2.escapeSelector = function(sel) {
      return (sel + "").replace(rcssescape, fcssescape);
    };
    var sort = arr.sort;
    var splice = arr.splice;
    var hasDuplicate;
    function sortOrder(a, b) {
      if (a === b) {
        hasDuplicate = true;
        return 0;
      }
      var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
      if (compare) {
        return compare;
      }
      compare = (a.ownerDocument || a) == (b.ownerDocument || b) ? a.compareDocumentPosition(b) : (
        // Otherwise we know they are disconnected
        1
      );
      if (compare & 1) {
        if (a == document$1 || a.ownerDocument == document$1 && jQuery2.contains(document$1, a)) {
          return -1;
        }
        if (b == document$1 || b.ownerDocument == document$1 && jQuery2.contains(document$1, b)) {
          return 1;
        }
        return 0;
      }
      return compare & 4 ? -1 : 1;
    }
    jQuery2.uniqueSort = function(results) {
      var elem, duplicates = [], j = 0, i2 = 0;
      hasDuplicate = false;
      sort.call(results, sortOrder);
      if (hasDuplicate) {
        while (elem = results[i2++]) {
          if (elem === results[i2]) {
            j = duplicates.push(i2);
          }
        }
        while (j--) {
          splice.call(results, duplicates[j], 1);
        }
      }
      return results;
    };
    jQuery2.fn.uniqueSort = function() {
      return this.pushStack(jQuery2.uniqueSort(slice.apply(this)));
    };
    var i, outermostContext, document2, documentElement, documentIsHTML, dirruns = 0, done = 0, classCache = createCache(), compilerCache = createCache(), nonnativeSelectorCache = createCache(), rwhitespace = new RegExp(whitespace + "+", "g"), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = jQuery2.extend({
      // For use in libraries implementing .is()
      // We use this for POS matching in `select`
      needsContext: new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
    }, filterMatchExpr), rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rquickExpr$1 = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, unloadHandler = function() {
      setDocument();
    }, inDisabledFieldset = addCombinator(
      function(elem) {
        return elem.disabled === true && nodeName(elem, "fieldset");
      },
      { dir: "parentNode", next: "legend" }
    );
    function find(selector, context, results, seed) {
      var m, i2, elem, nid, match, groups, newSelector, newContext = context && context.ownerDocument, nodeType = context ? context.nodeType : 9;
      results = results || [];
      if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
        return results;
      }
      if (!seed) {
        setDocument(context);
        context = context || document2;
        if (documentIsHTML) {
          if (nodeType !== 11 && (match = rquickExpr$1.exec(selector))) {
            if (m = match[1]) {
              if (nodeType === 9) {
                if (elem = context.getElementById(m)) {
                  push.call(results, elem);
                }
                return results;
              } else {
                if (newContext && (elem = newContext.getElementById(m)) && jQuery2.contains(context, elem)) {
                  push.call(results, elem);
                  return results;
                }
              }
            } else if (match[2]) {
              push.apply(results, context.getElementsByTagName(selector));
              return results;
            } else if ((m = match[3]) && context.getElementsByClassName) {
              push.apply(results, context.getElementsByClassName(m));
              return results;
            }
          }
          if (!nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
            newSelector = selector;
            newContext = context;
            if (nodeType === 1 && (rdescend.test(selector) || rleadingCombinator.test(selector))) {
              newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
              if (newContext != context || isIE) {
                if (nid = context.getAttribute("id")) {
                  nid = jQuery2.escapeSelector(nid);
                } else {
                  context.setAttribute("id", nid = jQuery2.expando);
                }
              }
              groups = tokenize(selector);
              i2 = groups.length;
              while (i2--) {
                groups[i2] = (nid ? "#" + nid : ":scope") + " " + toSelector(groups[i2]);
              }
              newSelector = groups.join(",");
            }
            try {
              push.apply(
                results,
                newContext.querySelectorAll(newSelector)
              );
              return results;
            } catch (qsaError) {
              nonnativeSelectorCache(selector, true);
            } finally {
              if (nid === jQuery2.expando) {
                context.removeAttribute("id");
              }
            }
          }
        }
      }
      return select(selector.replace(rtrimCSS, "$1"), context, results, seed);
    }
    function markFunction(fn) {
      fn[jQuery2.expando] = true;
      return fn;
    }
    function createInputPseudo(type) {
      return function(elem) {
        return nodeName(elem, "input") && elem.type === type;
      };
    }
    function createButtonPseudo(type) {
      return function(elem) {
        return (nodeName(elem, "input") || nodeName(elem, "button")) && elem.type === type;
      };
    }
    function createDisabledPseudo(disabled) {
      return function(elem) {
        if ("form" in elem) {
          if (elem.parentNode && elem.disabled === false) {
            if ("label" in elem) {
              if ("label" in elem.parentNode) {
                return elem.parentNode.disabled === disabled;
              } else {
                return elem.disabled === disabled;
              }
            }
            return elem.isDisabled === disabled || // Where there is no isDisabled, check manually
            elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled;
          }
          return elem.disabled === disabled;
        } else if ("label" in elem) {
          return elem.disabled === disabled;
        }
        return false;
      };
    }
    function createPositionalPseudo(fn) {
      return markFunction(function(argument) {
        argument = +argument;
        return markFunction(function(seed, matches2) {
          var j, matchIndexes = fn([], seed.length, argument), i2 = matchIndexes.length;
          while (i2--) {
            if (seed[j = matchIndexes[i2]]) {
              seed[j] = !(matches2[j] = seed[j]);
            }
          }
        });
      });
    }
    function setDocument(node) {
      var subWindow, doc = node ? node.ownerDocument || node : document$1;
      if (doc == document2 || doc.nodeType !== 9) {
        return;
      }
      document2 = doc;
      documentElement = document2.documentElement;
      documentIsHTML = !jQuery2.isXMLDoc(document2);
      if (isIE && document$1 != document2 && (subWindow = document2.defaultView) && subWindow.top !== subWindow) {
        subWindow.addEventListener("unload", unloadHandler);
      }
    }
    find.matches = function(expr, elements) {
      return find(expr, null, null, elements);
    };
    find.matchesSelector = function(elem, expr) {
      setDocument(elem);
      if (documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
        try {
          return matches.call(elem, expr);
        } catch (e) {
          nonnativeSelectorCache(expr, true);
        }
      }
      return find(expr, document2, null, [elem]).length > 0;
    };
    jQuery2.expr = {
      // Can be adjusted by the user
      cacheLength: 50,
      createPseudo: markFunction,
      match: matchExpr,
      find: {
        ID: function(id, context) {
          if (typeof context.getElementById !== "undefined" && documentIsHTML) {
            var elem = context.getElementById(id);
            return elem ? [elem] : [];
          }
        },
        TAG: function(tag, context) {
          if (typeof context.getElementsByTagName !== "undefined") {
            return context.getElementsByTagName(tag);
          } else {
            return context.querySelectorAll(tag);
          }
        },
        CLASS: function(className, context) {
          if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
            return context.getElementsByClassName(className);
          }
        }
      },
      relative: {
        ">": { dir: "parentNode", first: true },
        " ": { dir: "parentNode" },
        "+": { dir: "previousSibling", first: true },
        "~": { dir: "previousSibling" }
      },
      preFilter,
      filter: {
        ID: function(id) {
          var attrId = unescapeSelector(id);
          return function(elem) {
            return elem.getAttribute("id") === attrId;
          };
        },
        TAG: function(nodeNameSelector) {
          var expectedNodeName = unescapeSelector(nodeNameSelector).toLowerCase();
          return nodeNameSelector === "*" ? function() {
            return true;
          } : function(elem) {
            return nodeName(elem, expectedNodeName);
          };
        },
        CLASS: function(className) {
          var pattern = classCache[className + " "];
          return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {
            return pattern.test(
              typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || ""
            );
          });
        },
        ATTR: function(name, operator, check) {
          return function(elem) {
            var result = jQuery2.attr(elem, name);
            if (result == null) {
              return operator === "!=";
            }
            if (!operator) {
              return true;
            }
            result += "";
            if (operator === "=") {
              return result === check;
            }
            if (operator === "!=") {
              return result !== check;
            }
            if (operator === "^=") {
              return check && result.indexOf(check) === 0;
            }
            if (operator === "*=") {
              return check && result.indexOf(check) > -1;
            }
            if (operator === "$=") {
              return check && result.slice(-check.length) === check;
            }
            if (operator === "~=") {
              return (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1;
            }
            if (operator === "|=") {
              return result === check || result.slice(0, check.length + 1) === check + "-";
            }
            return false;
          };
        },
        CHILD: function(type, what, _argument, first, last) {
          var simple = type.slice(0, 3) !== "nth", forward = type.slice(-4) !== "last", ofType = what === "of-type";
          return first === 1 && last === 0 ? (
            // Shortcut for :nth-*(n)
            function(elem) {
              return !!elem.parentNode;
            }
          ) : function(elem, _context, xml) {
            var cache, outerCache, node, nodeIndex, start, dir2 = simple !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType, diff = false;
            if (parent) {
              if (simple) {
                while (dir2) {
                  node = elem;
                  while (node = node[dir2]) {
                    if (ofType ? nodeName(node, name) : node.nodeType === 1) {
                      return false;
                    }
                  }
                  start = dir2 = type === "only" && !start && "nextSibling";
                }
                return true;
              }
              start = [forward ? parent.firstChild : parent.lastChild];
              if (forward && useCache) {
                outerCache = parent[jQuery2.expando] || (parent[jQuery2.expando] = {});
                cache = outerCache[type] || [];
                nodeIndex = cache[0] === dirruns && cache[1];
                diff = nodeIndex && cache[2];
                node = nodeIndex && parent.childNodes[nodeIndex];
                while (node = ++nodeIndex && node && node[dir2] || // Fallback to seeking `elem` from the start
                (diff = nodeIndex = 0) || start.pop()) {
                  if (node.nodeType === 1 && ++diff && node === elem) {
                    outerCache[type] = [dirruns, nodeIndex, diff];
                    break;
                  }
                }
              } else {
                if (useCache) {
                  outerCache = elem[jQuery2.expando] || (elem[jQuery2.expando] = {});
                  cache = outerCache[type] || [];
                  nodeIndex = cache[0] === dirruns && cache[1];
                  diff = nodeIndex;
                }
                if (diff === false) {
                  while (node = ++nodeIndex && node && node[dir2] || (diff = nodeIndex = 0) || start.pop()) {
                    if ((ofType ? nodeName(node, name) : node.nodeType === 1) && ++diff) {
                      if (useCache) {
                        outerCache = node[jQuery2.expando] || (node[jQuery2.expando] = {});
                        outerCache[type] = [dirruns, diff];
                      }
                      if (node === elem) {
                        break;
                      }
                    }
                  }
                }
              }
              diff -= last;
              return diff === first || diff % first === 0 && diff / first >= 0;
            }
          };
        },
        PSEUDO: function(pseudo, argument) {
          var fn = jQuery2.expr.pseudos[pseudo] || jQuery2.expr.setFilters[pseudo.toLowerCase()] || selectorError("unsupported pseudo: " + pseudo);
          if (fn[jQuery2.expando]) {
            return fn(argument);
          }
          return fn;
        }
      },
      pseudos: {
        // Potentially complex pseudos
        not: markFunction(function(selector) {
          var input = [], results = [], matcher = compile(selector.replace(rtrimCSS, "$1"));
          return matcher[jQuery2.expando] ? markFunction(function(seed, matches2, _context, xml) {
            var elem, unmatched = matcher(seed, null, xml, []), i2 = seed.length;
            while (i2--) {
              if (elem = unmatched[i2]) {
                seed[i2] = !(matches2[i2] = elem);
              }
            }
          }) : function(elem, _context, xml) {
            input[0] = elem;
            matcher(input, null, xml, results);
            input[0] = null;
            return !results.pop();
          };
        }),
        has: markFunction(function(selector) {
          return function(elem) {
            return find(selector, elem).length > 0;
          };
        }),
        contains: markFunction(function(text) {
          text = unescapeSelector(text);
          return function(elem) {
            return (elem.textContent || jQuery2.text(elem)).indexOf(text) > -1;
          };
        }),
        // "Whether an element is represented by a :lang() selector
        // is based solely on the element's language value
        // being equal to the identifier C,
        // or beginning with the identifier C immediately followed by "-".
        // The matching of C against the element's language value is performed case-insensitively.
        // The identifier C does not have to be a valid language name."
        // https://www.w3.org/TR/selectors/#lang-pseudo
        lang: markFunction(function(lang) {
          if (!ridentifier.test(lang || "")) {
            selectorError("unsupported lang: " + lang);
          }
          lang = unescapeSelector(lang).toLowerCase();
          return function(elem) {
            var elemLang;
            do {
              if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                elemLang = elemLang.toLowerCase();
                return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
              }
            } while ((elem = elem.parentNode) && elem.nodeType === 1);
            return false;
          };
        }),
        // Miscellaneous
        target: function(elem) {
          var hash = window2.location && window2.location.hash;
          return hash && hash.slice(1) === elem.id;
        },
        root: function(elem) {
          return elem === documentElement;
        },
        focus: function(elem) {
          return elem === document2.activeElement && document2.hasFocus() && !!(elem.type || elem.href || ~elem.tabIndex);
        },
        // Boolean properties
        enabled: createDisabledPseudo(false),
        disabled: createDisabledPseudo(true),
        checked: function(elem) {
          return nodeName(elem, "input") && !!elem.checked || nodeName(elem, "option") && !!elem.selected;
        },
        selected: function(elem) {
          if (isIE && elem.parentNode) {
            elem.parentNode.selectedIndex;
          }
          return elem.selected === true;
        },
        // Contents
        empty: function(elem) {
          for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
            if (elem.nodeType < 6) {
              return false;
            }
          }
          return true;
        },
        parent: function(elem) {
          return !jQuery2.expr.pseudos.empty(elem);
        },
        // Element/input types
        header: function(elem) {
          return rheader.test(elem.nodeName);
        },
        input: function(elem) {
          return rinputs.test(elem.nodeName);
        },
        button: function(elem) {
          return nodeName(elem, "input") && elem.type === "button" || nodeName(elem, "button");
        },
        text: function(elem) {
          return nodeName(elem, "input") && elem.type === "text";
        },
        // Position-in-collection
        first: createPositionalPseudo(function() {
          return [0];
        }),
        last: createPositionalPseudo(function(_matchIndexes, length) {
          return [length - 1];
        }),
        eq: createPositionalPseudo(function(_matchIndexes, length, argument) {
          return [argument < 0 ? argument + length : argument];
        }),
        even: createPositionalPseudo(function(matchIndexes, length) {
          var i2 = 0;
          for (; i2 < length; i2 += 2) {
            matchIndexes.push(i2);
          }
          return matchIndexes;
        }),
        odd: createPositionalPseudo(function(matchIndexes, length) {
          var i2 = 1;
          for (; i2 < length; i2 += 2) {
            matchIndexes.push(i2);
          }
          return matchIndexes;
        }),
        lt: createPositionalPseudo(function(matchIndexes, length, argument) {
          var i2;
          if (argument < 0) {
            i2 = argument + length;
          } else if (argument > length) {
            i2 = length;
          } else {
            i2 = argument;
          }
          for (; --i2 >= 0; ) {
            matchIndexes.push(i2);
          }
          return matchIndexes;
        }),
        gt: createPositionalPseudo(function(matchIndexes, length, argument) {
          var i2 = argument < 0 ? argument + length : argument;
          for (; ++i2 < length; ) {
            matchIndexes.push(i2);
          }
          return matchIndexes;
        })
      }
    };
    jQuery2.expr.pseudos.nth = jQuery2.expr.pseudos.eq;
    for (i in { radio: true, checkbox: true, file: true, password: true, image: true }) {
      jQuery2.expr.pseudos[i] = createInputPseudo(i);
    }
    for (i in { submit: true, reset: true }) {
      jQuery2.expr.pseudos[i] = createButtonPseudo(i);
    }
    function setFilters() {
    }
    setFilters.prototype = jQuery2.expr.pseudos;
    jQuery2.expr.setFilters = new setFilters();
    function addCombinator(matcher, combinator, base) {
      var dir2 = combinator.dir, skip = combinator.next, key = skip || dir2, checkNonElements = base && key === "parentNode", doneName = done++;
      return combinator.first ? (
        // Check against closest ancestor/preceding element
        function(elem, context, xml) {
          while (elem = elem[dir2]) {
            if (elem.nodeType === 1 || checkNonElements) {
              return matcher(elem, context, xml);
            }
          }
          return false;
        }
      ) : (
        // Check against all ancestor/preceding elements
        function(elem, context, xml) {
          var oldCache, outerCache, newCache = [dirruns, doneName];
          if (xml) {
            while (elem = elem[dir2]) {
              if (elem.nodeType === 1 || checkNonElements) {
                if (matcher(elem, context, xml)) {
                  return true;
                }
              }
            }
          } else {
            while (elem = elem[dir2]) {
              if (elem.nodeType === 1 || checkNonElements) {
                outerCache = elem[jQuery2.expando] || (elem[jQuery2.expando] = {});
                if (skip && nodeName(elem, skip)) {
                  elem = elem[dir2] || elem;
                } else if ((oldCache = outerCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                  return newCache[2] = oldCache[2];
                } else {
                  outerCache[key] = newCache;
                  if (newCache[2] = matcher(elem, context, xml)) {
                    return true;
                  }
                }
              }
            }
          }
          return false;
        }
      );
    }
    function elementMatcher(matchers) {
      return matchers.length > 1 ? function(elem, context, xml) {
        var i2 = matchers.length;
        while (i2--) {
          if (!matchers[i2](elem, context, xml)) {
            return false;
          }
        }
        return true;
      } : matchers[0];
    }
    function multipleContexts(selector, contexts, results) {
      var i2 = 0, len = contexts.length;
      for (; i2 < len; i2++) {
        find(selector, contexts[i2], results);
      }
      return results;
    }
    function condense(unmatched, map, filter, context, xml) {
      var elem, newUnmatched = [], i2 = 0, len = unmatched.length, mapped = map != null;
      for (; i2 < len; i2++) {
        if (elem = unmatched[i2]) {
          if (!filter || filter(elem, context, xml)) {
            newUnmatched.push(elem);
            if (mapped) {
              map.push(i2);
            }
          }
        }
      }
      return newUnmatched;
    }
    function setMatcher(preFilter2, selector, matcher, postFilter, postFinder, postSelector) {
      if (postFilter && !postFilter[jQuery2.expando]) {
        postFilter = setMatcher(postFilter);
      }
      if (postFinder && !postFinder[jQuery2.expando]) {
        postFinder = setMatcher(postFinder, postSelector);
      }
      return markFunction(function(seed, results, context, xml) {
        var temp, i2, elem, matcherOut, preMap = [], postMap = [], preexisting = results.length, elems = seed || multipleContexts(
          selector || "*",
          context.nodeType ? [context] : context,
          []
        ), matcherIn = preFilter2 && (seed || !selector) ? condense(elems, preMap, preFilter2, context, xml) : elems;
        if (matcher) {
          matcherOut = postFinder || (seed ? preFilter2 : preexisting || postFilter) ? (
            // ...intermediate processing is necessary
            []
          ) : (
            // ...otherwise use results directly
            results
          );
          matcher(matcherIn, matcherOut, context, xml);
        } else {
          matcherOut = matcherIn;
        }
        if (postFilter) {
          temp = condense(matcherOut, postMap);
          postFilter(temp, [], context, xml);
          i2 = temp.length;
          while (i2--) {
            if (elem = temp[i2]) {
              matcherOut[postMap[i2]] = !(matcherIn[postMap[i2]] = elem);
            }
          }
        }
        if (seed) {
          if (postFinder || preFilter2) {
            if (postFinder) {
              temp = [];
              i2 = matcherOut.length;
              while (i2--) {
                if (elem = matcherOut[i2]) {
                  temp.push(matcherIn[i2] = elem);
                }
              }
              postFinder(null, matcherOut = [], temp, xml);
            }
            i2 = matcherOut.length;
            while (i2--) {
              if ((elem = matcherOut[i2]) && (temp = postFinder ? indexOf.call(seed, elem) : preMap[i2]) > -1) {
                seed[temp] = !(results[temp] = elem);
              }
            }
          }
        } else {
          matcherOut = condense(
            matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut
          );
          if (postFinder) {
            postFinder(null, results, matcherOut, xml);
          } else {
            push.apply(results, matcherOut);
          }
        }
      });
    }
    function matcherFromTokens(tokens) {
      var checkContext, matcher, j, len = tokens.length, leadingRelative = jQuery2.expr.relative[tokens[0].type], implicitRelative = leadingRelative || jQuery2.expr.relative[" "], i2 = leadingRelative ? 1 : 0, matchContext = addCombinator(function(elem) {
        return elem === checkContext;
      }, implicitRelative, true), matchAnyContext = addCombinator(function(elem) {
        return indexOf.call(checkContext, elem) > -1;
      }, implicitRelative, true), matchers = [function(elem, context, xml) {
        var ret = !leadingRelative && (xml || context != outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
        checkContext = null;
        return ret;
      }];
      for (; i2 < len; i2++) {
        if (matcher = jQuery2.expr.relative[tokens[i2].type]) {
          matchers = [addCombinator(elementMatcher(matchers), matcher)];
        } else {
          matcher = jQuery2.expr.filter[tokens[i2].type].apply(null, tokens[i2].matches);
          if (matcher[jQuery2.expando]) {
            j = ++i2;
            for (; j < len; j++) {
              if (jQuery2.expr.relative[tokens[j].type]) {
                break;
              }
            }
            return setMatcher(
              i2 > 1 && elementMatcher(matchers),
              i2 > 1 && toSelector(
                // If the preceding token was a descendant combinator, insert an implicit any-element `*`
                tokens.slice(0, i2 - 1).concat({ value: tokens[i2 - 2].type === " " ? "*" : "" })
              ).replace(rtrimCSS, "$1"),
              matcher,
              i2 < j && matcherFromTokens(tokens.slice(i2, j)),
              j < len && matcherFromTokens(tokens = tokens.slice(j)),
              j < len && toSelector(tokens)
            );
          }
          matchers.push(matcher);
        }
      }
      return elementMatcher(matchers);
    }
    function matcherFromGroupMatchers(elementMatchers, setMatchers) {
      var bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function(seed, context, xml, results, outermost) {
        var elem, j, matcher, matchedCount = 0, i2 = "0", unmatched = seed && [], setMatched = [], contextBackup = outermostContext, elems = seed || byElement && jQuery2.expr.find.TAG("*", outermost), dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1;
        if (outermost) {
          outermostContext = context == document2 || context || outermost;
        }
        for (; (elem = elems[i2]) != null; i2++) {
          if (byElement && elem) {
            j = 0;
            if (!context && elem.ownerDocument != document2) {
              setDocument(elem);
              xml = !documentIsHTML;
            }
            while (matcher = elementMatchers[j++]) {
              if (matcher(elem, context || document2, xml)) {
                push.call(results, elem);
                break;
              }
            }
            if (outermost) {
              dirruns = dirrunsUnique;
            }
          }
          if (bySet) {
            if (elem = !matcher && elem) {
              matchedCount--;
            }
            if (seed) {
              unmatched.push(elem);
            }
          }
        }
        matchedCount += i2;
        if (bySet && i2 !== matchedCount) {
          j = 0;
          while (matcher = setMatchers[j++]) {
            matcher(unmatched, setMatched, context, xml);
          }
          if (seed) {
            if (matchedCount > 0) {
              while (i2--) {
                if (!(unmatched[i2] || setMatched[i2])) {
                  setMatched[i2] = pop.call(results);
                }
              }
            }
            setMatched = condense(setMatched);
          }
          push.apply(results, setMatched);
          if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
            jQuery2.uniqueSort(results);
          }
        }
        if (outermost) {
          dirruns = dirrunsUnique;
          outermostContext = contextBackup;
        }
        return unmatched;
      };
      return bySet ? markFunction(superMatcher) : superMatcher;
    }
    function compile(selector, match) {
      var i2, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
      if (!cached) {
        if (!match) {
          match = tokenize(selector);
        }
        i2 = match.length;
        while (i2--) {
          cached = matcherFromTokens(match[i2]);
          if (cached[jQuery2.expando]) {
            setMatchers.push(cached);
          } else {
            elementMatchers.push(cached);
          }
        }
        cached = compilerCache(
          selector,
          matcherFromGroupMatchers(elementMatchers, setMatchers)
        );
        cached.selector = selector;
      }
      return cached;
    }
    function select(selector, context, results, seed) {
      var i2, tokens, token, type, find2, compiled = typeof selector === "function" && selector, match = !seed && tokenize(selector = compiled.selector || selector);
      results = results || [];
      if (match.length === 1) {
        tokens = match[0] = match[0].slice(0);
        if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && jQuery2.expr.relative[tokens[1].type]) {
          context = (jQuery2.expr.find.ID(
            unescapeSelector(token.matches[0]),
            context
          ) || [])[0];
          if (!context) {
            return results;
          } else if (compiled) {
            context = context.parentNode;
          }
          selector = selector.slice(tokens.shift().value.length);
        }
        i2 = matchExpr.needsContext.test(selector) ? 0 : tokens.length;
        while (i2--) {
          token = tokens[i2];
          if (jQuery2.expr.relative[type = token.type]) {
            break;
          }
          if (find2 = jQuery2.expr.find[type]) {
            if (seed = find2(
              unescapeSelector(token.matches[0]),
              rsibling.test(tokens[0].type) && testContext(context.parentNode) || context
            )) {
              tokens.splice(i2, 1);
              selector = seed.length && toSelector(tokens);
              if (!selector) {
                push.apply(results, seed);
                return results;
              }
              break;
            }
          }
        }
      }
      (compiled || compile(selector, match))(
        seed,
        context,
        !documentIsHTML,
        results,
        !context || rsibling.test(selector) && testContext(context.parentNode) || context
      );
      return results;
    }
    setDocument();
    jQuery2.find = find;
    find.compile = compile;
    find.select = select;
    find.setDocument = setDocument;
    find.tokenize = tokenize;
    function dir(elem, dir2, until) {
      var matched = [], truncate = until !== void 0;
      while ((elem = elem[dir2]) && elem.nodeType !== 9) {
        if (elem.nodeType === 1) {
          if (truncate && jQuery2(elem).is(until)) {
            break;
          }
          matched.push(elem);
        }
      }
      return matched;
    }
    function siblings(n, elem) {
      var matched = [];
      for (; n; n = n.nextSibling) {
        if (n.nodeType === 1 && n !== elem) {
          matched.push(n);
        }
      }
      return matched;
    }
    var rneedsContext = jQuery2.expr.match.needsContext;
    var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function isObviousHtml(input) {
      return input[0] === "<" && input[input.length - 1] === ">" && input.length >= 3;
    }
    function winnow(elements, qualifier, not) {
      if (typeof qualifier === "function") {
        return jQuery2.grep(elements, function(elem, i2) {
          return !!qualifier.call(elem, i2, elem) !== not;
        });
      }
      if (qualifier.nodeType) {
        return jQuery2.grep(elements, function(elem) {
          return elem === qualifier !== not;
        });
      }
      if (typeof qualifier !== "string") {
        return jQuery2.grep(elements, function(elem) {
          return indexOf.call(qualifier, elem) > -1 !== not;
        });
      }
      return jQuery2.filter(qualifier, elements, not);
    }
    jQuery2.filter = function(expr, elems, not) {
      var elem = elems[0];
      if (not) {
        expr = ":not(" + expr + ")";
      }
      if (elems.length === 1 && elem.nodeType === 1) {
        return jQuery2.find.matchesSelector(elem, expr) ? [elem] : [];
      }
      return jQuery2.find.matches(expr, jQuery2.grep(elems, function(elem2) {
        return elem2.nodeType === 1;
      }));
    };
    jQuery2.fn.extend({
      find: function(selector) {
        var i2, ret, len = this.length, self = this;
        if (typeof selector !== "string") {
          return this.pushStack(jQuery2(selector).filter(function() {
            for (i2 = 0; i2 < len; i2++) {
              if (jQuery2.contains(self[i2], this)) {
                return true;
              }
            }
          }));
        }
        ret = this.pushStack([]);
        for (i2 = 0; i2 < len; i2++) {
          jQuery2.find(selector, self[i2], ret);
        }
        return len > 1 ? jQuery2.uniqueSort(ret) : ret;
      },
      filter: function(selector) {
        return this.pushStack(winnow(this, selector || [], false));
      },
      not: function(selector) {
        return this.pushStack(winnow(this, selector || [], true));
      },
      is: function(selector) {
        return !!winnow(
          this,
          // If this is a positional/relative selector, check membership in the returned set
          // so $("p:first").is("p:last") won't return true for a doc with two "p".
          typeof selector === "string" && rneedsContext.test(selector) ? jQuery2(selector) : selector || [],
          false
        ).length;
      }
    });
    var rootjQuery, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, init = jQuery2.fn.init = function(selector, context) {
      var match, elem;
      if (!selector) {
        return this;
      }
      if (selector.nodeType) {
        this[0] = selector;
        this.length = 1;
        return this;
      } else if (typeof selector === "function") {
        return rootjQuery.ready !== void 0 ? rootjQuery.ready(selector) : (
          // Execute immediately if ready is not present
          selector(jQuery2)
        );
      } else {
        match = selector + "";
        if (isObviousHtml(match)) {
          match = [null, selector, null];
        } else if (typeof selector === "string") {
          match = rquickExpr.exec(selector);
        } else {
          return jQuery2.makeArray(selector, this);
        }
        if (match && (match[1] || !context)) {
          if (match[1]) {
            context = context instanceof jQuery2 ? context[0] : context;
            jQuery2.merge(this, jQuery2.parseHTML(
              match[1],
              context && context.nodeType ? context.ownerDocument || context : document$1,
              true
            ));
            if (rsingleTag.test(match[1]) && jQuery2.isPlainObject(context)) {
              for (match in context) {
                if (typeof this[match] === "function") {
                  this[match](context[match]);
                } else {
                  this.attr(match, context[match]);
                }
              }
            }
            return this;
          } else {
            elem = document$1.getElementById(match[2]);
            if (elem) {
              this[0] = elem;
              this.length = 1;
            }
            return this;
          }
        } else if (!context || context.jquery) {
          return (context || rootjQuery).find(selector);
        } else {
          return this.constructor(context).find(selector);
        }
      }
    };
    init.prototype = jQuery2.fn;
    rootjQuery = jQuery2(document$1);
    var rparentsprev = /^(?:parents|prev(?:Until|All))/, guaranteedUnique = {
      children: true,
      contents: true,
      next: true,
      prev: true
    };
    jQuery2.fn.extend({
      has: function(target) {
        var targets = jQuery2(target, this), l = targets.length;
        return this.filter(function() {
          var i2 = 0;
          for (; i2 < l; i2++) {
            if (jQuery2.contains(this, targets[i2])) {
              return true;
            }
          }
        });
      },
      closest: function(selectors, context) {
        var cur, i2 = 0, l = this.length, matched = [], targets = typeof selectors !== "string" && jQuery2(selectors);
        if (!rneedsContext.test(selectors)) {
          for (; i2 < l; i2++) {
            for (cur = this[i2]; cur && cur !== context; cur = cur.parentNode) {
              if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : (
                // Don't pass non-elements to jQuery#find
                cur.nodeType === 1 && jQuery2.find.matchesSelector(cur, selectors)
              ))) {
                matched.push(cur);
                break;
              }
            }
          }
        }
        return this.pushStack(matched.length > 1 ? jQuery2.uniqueSort(matched) : matched);
      },
      // Determine the position of an element within the set
      index: function(elem) {
        if (!elem) {
          return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        }
        if (typeof elem === "string") {
          return indexOf.call(jQuery2(elem), this[0]);
        }
        return indexOf.call(
          this,
          // If it receives a jQuery object, the first element is used
          elem.jquery ? elem[0] : elem
        );
      },
      add: function(selector, context) {
        return this.pushStack(
          jQuery2.uniqueSort(
            jQuery2.merge(this.get(), jQuery2(selector, context))
          )
        );
      },
      addBack: function(selector) {
        return this.add(
          selector == null ? this.prevObject : this.prevObject.filter(selector)
        );
      }
    });
    function sibling(cur, dir2) {
      while ((cur = cur[dir2]) && cur.nodeType !== 1) {
      }
      return cur;
    }
    jQuery2.each({
      parent: function(elem) {
        var parent = elem.parentNode;
        return parent && parent.nodeType !== 11 ? parent : null;
      },
      parents: function(elem) {
        return dir(elem, "parentNode");
      },
      parentsUntil: function(elem, _i, until) {
        return dir(elem, "parentNode", until);
      },
      next: function(elem) {
        return sibling(elem, "nextSibling");
      },
      prev: function(elem) {
        return sibling(elem, "previousSibling");
      },
      nextAll: function(elem) {
        return dir(elem, "nextSibling");
      },
      prevAll: function(elem) {
        return dir(elem, "previousSibling");
      },
      nextUntil: function(elem, _i, until) {
        return dir(elem, "nextSibling", until);
      },
      prevUntil: function(elem, _i, until) {
        return dir(elem, "previousSibling", until);
      },
      siblings: function(elem) {
        return siblings((elem.parentNode || {}).firstChild, elem);
      },
      children: function(elem) {
        return siblings(elem.firstChild);
      },
      contents: function(elem) {
        if (elem.contentDocument != null && // Support: IE 11+
        // <object> elements with no `data` attribute has an object
        // `contentDocument` with a `null` prototype.
        getProto(elem.contentDocument)) {
          return elem.contentDocument;
        }
        if (nodeName(elem, "template")) {
          elem = elem.content || elem;
        }
        return jQuery2.merge([], elem.childNodes);
      }
    }, function(name, fn) {
      jQuery2.fn[name] = function(until, selector) {
        var matched = jQuery2.map(this, fn, until);
        if (name.slice(-5) !== "Until") {
          selector = until;
        }
        if (selector && typeof selector === "string") {
          matched = jQuery2.filter(selector, matched);
        }
        if (this.length > 1) {
          if (!guaranteedUnique[name]) {
            jQuery2.uniqueSort(matched);
          }
          if (rparentsprev.test(name)) {
            matched.reverse();
          }
        }
        return this.pushStack(matched);
      };
    });
    function createOptions(options) {
      var object = {};
      jQuery2.each(options.match(rnothtmlwhite) || [], function(_, flag) {
        object[flag] = true;
      });
      return object;
    }
    jQuery2.Callbacks = function(options) {
      options = typeof options === "string" ? createOptions(options) : jQuery2.extend({}, options);
      var firing, memory, fired, locked, list = [], queue = [], firingIndex = -1, fire = function() {
        locked = locked || options.once;
        fired = firing = true;
        for (; queue.length; firingIndex = -1) {
          memory = queue.shift();
          while (++firingIndex < list.length) {
            if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
              firingIndex = list.length;
              memory = false;
            }
          }
        }
        if (!options.memory) {
          memory = false;
        }
        firing = false;
        if (locked) {
          if (memory) {
            list = [];
          } else {
            list = "";
          }
        }
      }, self = {
        // Add a callback or a collection of callbacks to the list
        add: function() {
          if (list) {
            if (memory && !firing) {
              firingIndex = list.length - 1;
              queue.push(memory);
            }
            (function add(args) {
              jQuery2.each(args, function(_, arg) {
                if (typeof arg === "function") {
                  if (!options.unique || !self.has(arg)) {
                    list.push(arg);
                  }
                } else if (arg && arg.length && toType(arg) !== "string") {
                  add(arg);
                }
              });
            })(arguments);
            if (memory && !firing) {
              fire();
            }
          }
          return this;
        },
        // Remove a callback from the list
        remove: function() {
          jQuery2.each(arguments, function(_, arg) {
            var index;
            while ((index = jQuery2.inArray(arg, list, index)) > -1) {
              list.splice(index, 1);
              if (index <= firingIndex) {
                firingIndex--;
              }
            }
          });
          return this;
        },
        // Check if a given callback is in the list.
        // If no argument is given, return whether or not list has callbacks attached.
        has: function(fn) {
          return fn ? jQuery2.inArray(fn, list) > -1 : list.length > 0;
        },
        // Remove all callbacks from the list
        empty: function() {
          if (list) {
            list = [];
          }
          return this;
        },
        // Disable .fire and .add
        // Abort any current/pending executions
        // Clear all callbacks and values
        disable: function() {
          locked = queue = [];
          list = memory = "";
          return this;
        },
        disabled: function() {
          return !list;
        },
        // Disable .fire
        // Also disable .add unless we have memory (since it would have no effect)
        // Abort any pending executions
        lock: function() {
          locked = queue = [];
          if (!memory && !firing) {
            list = memory = "";
          }
          return this;
        },
        locked: function() {
          return !!locked;
        },
        // Call all callbacks with the given context and arguments
        fireWith: function(context, args) {
          if (!locked) {
            args = args || [];
            args = [context, args.slice ? args.slice() : args];
            queue.push(args);
            if (!firing) {
              fire();
            }
          }
          return this;
        },
        // Call all the callbacks with the given arguments
        fire: function() {
          self.fireWith(this, arguments);
          return this;
        },
        // To know if the callbacks have already been called at least once
        fired: function() {
          return !!fired;
        }
      };
      return self;
    };
    function Identity(v) {
      return v;
    }
    function Thrower(ex) {
      throw ex;
    }
    function adoptValue(value, resolve, reject, noValue) {
      var method;
      try {
        if (value && typeof (method = value.promise) === "function") {
          method.call(value).done(resolve).fail(reject);
        } else if (value && typeof (method = value.then) === "function") {
          method.call(value, resolve, reject);
        } else {
          resolve.apply(void 0, [value].slice(noValue));
        }
      } catch (value2) {
        reject(value2);
      }
    }
    jQuery2.extend({
      Deferred: function(func) {
        var tuples = [
          // action, add listener, callbacks,
          // ... .then handlers, argument index, [final state]
          [
            "notify",
            "progress",
            jQuery2.Callbacks("memory"),
            jQuery2.Callbacks("memory"),
            2
          ],
          [
            "resolve",
            "done",
            jQuery2.Callbacks("once memory"),
            jQuery2.Callbacks("once memory"),
            0,
            "resolved"
          ],
          [
            "reject",
            "fail",
            jQuery2.Callbacks("once memory"),
            jQuery2.Callbacks("once memory"),
            1,
            "rejected"
          ]
        ], state = "pending", promise = {
          state: function() {
            return state;
          },
          always: function() {
            deferred.done(arguments).fail(arguments);
            return this;
          },
          catch: function(fn) {
            return promise.then(null, fn);
          },
          // Keep pipe for back-compat
          pipe: function() {
            var fns = arguments;
            return jQuery2.Deferred(function(newDefer) {
              jQuery2.each(tuples, function(_i, tuple) {
                var fn = typeof fns[tuple[4]] === "function" && fns[tuple[4]];
                deferred[tuple[1]](function() {
                  var returned = fn && fn.apply(this, arguments);
                  if (returned && typeof returned.promise === "function") {
                    returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                  } else {
                    newDefer[tuple[0] + "With"](
                      this,
                      fn ? [returned] : arguments
                    );
                  }
                });
              });
              fns = null;
            }).promise();
          },
          then: function(onFulfilled, onRejected, onProgress) {
            var maxDepth = 0;
            function resolve(depth, deferred2, handler, special) {
              return function() {
                var that = this, args = arguments, mightThrow = function() {
                  var returned, then;
                  if (depth < maxDepth) {
                    return;
                  }
                  returned = handler.apply(that, args);
                  if (returned === deferred2.promise()) {
                    throw new TypeError("Thenable self-resolution");
                  }
                  then = returned && // Support: Promises/A+ section 2.3.4
                  // https://promisesaplus.com/#point-64
                  // Only check objects and functions for thenability
                  (typeof returned === "object" || typeof returned === "function") && returned.then;
                  if (typeof then === "function") {
                    if (special) {
                      then.call(
                        returned,
                        resolve(maxDepth, deferred2, Identity, special),
                        resolve(maxDepth, deferred2, Thrower, special)
                      );
                    } else {
                      maxDepth++;
                      then.call(
                        returned,
                        resolve(maxDepth, deferred2, Identity, special),
                        resolve(maxDepth, deferred2, Thrower, special),
                        resolve(
                          maxDepth,
                          deferred2,
                          Identity,
                          deferred2.notifyWith
                        )
                      );
                    }
                  } else {
                    if (handler !== Identity) {
                      that = void 0;
                      args = [returned];
                    }
                    (special || deferred2.resolveWith)(that, args);
                  }
                }, process = special ? mightThrow : function() {
                  try {
                    mightThrow();
                  } catch (e) {
                    if (jQuery2.Deferred.exceptionHook) {
                      jQuery2.Deferred.exceptionHook(
                        e,
                        process.error
                      );
                    }
                    if (depth + 1 >= maxDepth) {
                      if (handler !== Thrower) {
                        that = void 0;
                        args = [e];
                      }
                      deferred2.rejectWith(that, args);
                    }
                  }
                };
                if (depth) {
                  process();
                } else {
                  if (jQuery2.Deferred.getErrorHook) {
                    process.error = jQuery2.Deferred.getErrorHook();
                  }
                  window2.setTimeout(process);
                }
              };
            }
            return jQuery2.Deferred(function(newDefer) {
              tuples[0][3].add(
                resolve(
                  0,
                  newDefer,
                  typeof onProgress === "function" ? onProgress : Identity,
                  newDefer.notifyWith
                )
              );
              tuples[1][3].add(
                resolve(
                  0,
                  newDefer,
                  typeof onFulfilled === "function" ? onFulfilled : Identity
                )
              );
              tuples[2][3].add(
                resolve(
                  0,
                  newDefer,
                  typeof onRejected === "function" ? onRejected : Thrower
                )
              );
            }).promise();
          },
          // Get a promise for this deferred
          // If obj is provided, the promise aspect is added to the object
          promise: function(obj) {
            return obj != null ? jQuery2.extend(obj, promise) : promise;
          }
        }, deferred = {};
        jQuery2.each(tuples, function(i2, tuple) {
          var list = tuple[2], stateString = tuple[5];
          promise[tuple[1]] = list.add;
          if (stateString) {
            list.add(
              function() {
                state = stateString;
              },
              // rejected_callbacks.disable
              // fulfilled_callbacks.disable
              tuples[3 - i2][2].disable,
              // rejected_handlers.disable
              // fulfilled_handlers.disable
              tuples[3 - i2][3].disable,
              // progress_callbacks.lock
              tuples[0][2].lock,
              // progress_handlers.lock
              tuples[0][3].lock
            );
          }
          list.add(tuple[3].fire);
          deferred[tuple[0]] = function() {
            deferred[tuple[0] + "With"](this === deferred ? void 0 : this, arguments);
            return this;
          };
          deferred[tuple[0] + "With"] = list.fireWith;
        });
        promise.promise(deferred);
        if (func) {
          func.call(deferred, deferred);
        }
        return deferred;
      },
      // Deferred helper
      when: function(singleValue) {
        var remaining = arguments.length, i2 = remaining, resolveContexts = Array(i2), resolveValues = slice.call(arguments), primary = jQuery2.Deferred(), updateFunc = function(i3) {
          return function(value) {
            resolveContexts[i3] = this;
            resolveValues[i3] = arguments.length > 1 ? slice.call(arguments) : value;
            if (!--remaining) {
              primary.resolveWith(resolveContexts, resolveValues);
            }
          };
        };
        if (remaining <= 1) {
          adoptValue(
            singleValue,
            primary.done(updateFunc(i2)).resolve,
            primary.reject,
            !remaining
          );
          if (primary.state() === "pending" || typeof (resolveValues[i2] && resolveValues[i2].then) === "function") {
            return primary.then();
          }
        }
        while (i2--) {
          adoptValue(resolveValues[i2], updateFunc(i2), primary.reject);
        }
        return primary.promise();
      }
    });
    var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    jQuery2.Deferred.exceptionHook = function(error, asyncError) {
      if (error && rerrorNames.test(error.name)) {
        window2.console.warn(
          "jQuery.Deferred exception",
          error,
          asyncError
        );
      }
    };
    jQuery2.readyException = function(error) {
      window2.setTimeout(function() {
        throw error;
      });
    };
    var readyList = jQuery2.Deferred();
    jQuery2.fn.ready = function(fn) {
      readyList.then(fn).catch(function(error) {
        jQuery2.readyException(error);
      });
      return this;
    };
    jQuery2.extend({
      // Is the DOM ready to be used? Set to true once it occurs.
      isReady: false,
      // A counter to track how many items to wait for before
      // the ready event fires. See trac-6781
      readyWait: 1,
      // Handle when the DOM is ready
      ready: function(wait) {
        if (wait === true ? --jQuery2.readyWait : jQuery2.isReady) {
          return;
        }
        jQuery2.isReady = true;
        if (wait !== true && --jQuery2.readyWait > 0) {
          return;
        }
        readyList.resolveWith(document$1, [jQuery2]);
      }
    });
    jQuery2.ready.then = readyList.then;
    function completed() {
      document$1.removeEventListener("DOMContentLoaded", completed);
      window2.removeEventListener("load", completed);
      jQuery2.ready();
    }
    if (document$1.readyState !== "loading") {
      window2.setTimeout(jQuery2.ready);
    } else {
      document$1.addEventListener("DOMContentLoaded", completed);
      window2.addEventListener("load", completed);
    }
    var rdashAlpha = /-([a-z])/g;
    function fcamelCase(_all, letter) {
      return letter.toUpperCase();
    }
    function camelCase(string) {
      return string.replace(rdashAlpha, fcamelCase);
    }
    function acceptData(owner) {
      return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
    }
    function Data() {
      this.expando = jQuery2.expando + Data.uid++;
    }
    Data.uid = 1;
    Data.prototype = {
      cache: function(owner) {
        var value = owner[this.expando];
        if (!value) {
          value = /* @__PURE__ */ Object.create(null);
          if (acceptData(owner)) {
            if (owner.nodeType) {
              owner[this.expando] = value;
            } else {
              Object.defineProperty(owner, this.expando, {
                value,
                configurable: true
              });
            }
          }
        }
        return value;
      },
      set: function(owner, data, value) {
        var prop, cache = this.cache(owner);
        if (typeof data === "string") {
          cache[camelCase(data)] = value;
        } else {
          for (prop in data) {
            cache[camelCase(prop)] = data[prop];
          }
        }
        return value;
      },
      get: function(owner, key) {
        return key === void 0 ? this.cache(owner) : (
          // Always use camelCase key (gh-2257)
          owner[this.expando] && owner[this.expando][camelCase(key)]
        );
      },
      access: function(owner, key, value) {
        if (key === void 0 || key && typeof key === "string" && value === void 0) {
          return this.get(owner, key);
        }
        this.set(owner, key, value);
        return value !== void 0 ? value : key;
      },
      remove: function(owner, key) {
        var i2, cache = owner[this.expando];
        if (cache === void 0) {
          return;
        }
        if (key !== void 0) {
          if (Array.isArray(key)) {
            key = key.map(camelCase);
          } else {
            key = camelCase(key);
            key = key in cache ? [key] : key.match(rnothtmlwhite) || [];
          }
          i2 = key.length;
          while (i2--) {
            delete cache[key[i2]];
          }
        }
        if (key === void 0 || jQuery2.isEmptyObject(cache)) {
          if (owner.nodeType) {
            owner[this.expando] = void 0;
          } else {
            delete owner[this.expando];
          }
        }
      },
      hasData: function(owner) {
        var cache = owner[this.expando];
        return cache !== void 0 && !jQuery2.isEmptyObject(cache);
      }
    };
    var dataPriv = new Data();
    var dataUser = new Data();
    var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, rmultiDash = /[A-Z]/g;
    function getData(data) {
      if (data === "true") {
        return true;
      }
      if (data === "false") {
        return false;
      }
      if (data === "null") {
        return null;
      }
      if (data === +data + "") {
        return +data;
      }
      if (rbrace.test(data)) {
        return JSON.parse(data);
      }
      return data;
    }
    function dataAttr(elem, key, data) {
      var name;
      if (data === void 0 && elem.nodeType === 1) {
        name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
        data = elem.getAttribute(name);
        if (typeof data === "string") {
          try {
            data = getData(data);
          } catch (e) {
          }
          dataUser.set(elem, key, data);
        } else {
          data = void 0;
        }
      }
      return data;
    }
    jQuery2.extend({
      hasData: function(elem) {
        return dataUser.hasData(elem) || dataPriv.hasData(elem);
      },
      data: function(elem, name, data) {
        return dataUser.access(elem, name, data);
      },
      removeData: function(elem, name) {
        dataUser.remove(elem, name);
      },
      // TODO: Now that all calls to _data and _removeData have been replaced
      // with direct calls to dataPriv methods, these can be deprecated.
      _data: function(elem, name, data) {
        return dataPriv.access(elem, name, data);
      },
      _removeData: function(elem, name) {
        dataPriv.remove(elem, name);
      }
    });
    jQuery2.fn.extend({
      data: function(key, value) {
        var i2, name, data, elem = this[0], attrs = elem && elem.attributes;
        if (key === void 0) {
          if (this.length) {
            data = dataUser.get(elem);
            if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
              i2 = attrs.length;
              while (i2--) {
                if (attrs[i2]) {
                  name = attrs[i2].name;
                  if (name.indexOf("data-") === 0) {
                    name = camelCase(name.slice(5));
                    dataAttr(elem, name, data[name]);
                  }
                }
              }
              dataPriv.set(elem, "hasDataAttrs", true);
            }
          }
          return data;
        }
        if (typeof key === "object") {
          return this.each(function() {
            dataUser.set(this, key);
          });
        }
        return access(this, function(value2) {
          var data2;
          if (elem && value2 === void 0) {
            data2 = dataUser.get(elem, key);
            if (data2 !== void 0) {
              return data2;
            }
            data2 = dataAttr(elem, key);
            if (data2 !== void 0) {
              return data2;
            }
            return;
          }
          this.each(function() {
            dataUser.set(this, key, value2);
          });
        }, null, value, arguments.length > 1, null, true);
      },
      removeData: function(key) {
        return this.each(function() {
          dataUser.remove(this, key);
        });
      }
    });
    jQuery2.extend({
      queue: function(elem, type, data) {
        var queue;
        if (elem) {
          type = (type || "fx") + "queue";
          queue = dataPriv.get(elem, type);
          if (data) {
            if (!queue || Array.isArray(data)) {
              queue = dataPriv.set(elem, type, jQuery2.makeArray(data));
            } else {
              queue.push(data);
            }
          }
          return queue || [];
        }
      },
      dequeue: function(elem, type) {
        type = type || "fx";
        var queue = jQuery2.queue(elem, type), startLength = queue.length, fn = queue.shift(), hooks = jQuery2._queueHooks(elem, type), next = function() {
          jQuery2.dequeue(elem, type);
        };
        if (fn === "inprogress") {
          fn = queue.shift();
          startLength--;
        }
        if (fn) {
          if (type === "fx") {
            queue.unshift("inprogress");
          }
          delete hooks.stop;
          fn.call(elem, next, hooks);
        }
        if (!startLength && hooks) {
          hooks.empty.fire();
        }
      },
      // Not public - generate a queueHooks object, or return the current one
      _queueHooks: function(elem, type) {
        var key = type + "queueHooks";
        return dataPriv.get(elem, key) || dataPriv.set(elem, key, {
          empty: jQuery2.Callbacks("once memory").add(function() {
            dataPriv.remove(elem, [type + "queue", key]);
          })
        });
      }
    });
    jQuery2.fn.extend({
      queue: function(type, data) {
        var setter = 2;
        if (typeof type !== "string") {
          data = type;
          type = "fx";
          setter--;
        }
        if (arguments.length < setter) {
          return jQuery2.queue(this[0], type);
        }
        return data === void 0 ? this : this.each(function() {
          var queue = jQuery2.queue(this, type, data);
          jQuery2._queueHooks(this, type);
          if (type === "fx" && queue[0] !== "inprogress") {
            jQuery2.dequeue(this, type);
          }
        });
      },
      dequeue: function(type) {
        return this.each(function() {
          jQuery2.dequeue(this, type);
        });
      },
      clearQueue: function(type) {
        return this.queue(type || "fx", []);
      },
      // Get a promise resolved when queues of a certain type
      // are emptied (fx is the type by default)
      promise: function(type, obj) {
        var tmp, count = 1, defer = jQuery2.Deferred(), elements = this, i2 = this.length, resolve = function() {
          if (!--count) {
            defer.resolveWith(elements, [elements]);
          }
        };
        if (typeof type !== "string") {
          obj = type;
          type = void 0;
        }
        type = type || "fx";
        while (i2--) {
          tmp = dataPriv.get(elements[i2], type + "queueHooks");
          if (tmp && tmp.empty) {
            count++;
            tmp.empty.add(resolve);
          }
        }
        resolve();
        return defer.promise(obj);
      }
    });
    var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
    var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
    var cssExpand = ["Top", "Right", "Bottom", "Left"];
    function isHiddenWithinTree(elem, el) {
      elem = el || elem;
      return elem.style.display === "none" || elem.style.display === "" && jQuery2.css(elem, "display") === "none";
    }
    var ralphaStart = /^[a-z]/, rautoPx = /^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;
    function isAutoPx(prop) {
      return ralphaStart.test(prop) && rautoPx.test(prop[0].toUpperCase() + prop.slice(1));
    }
    function adjustCSS(elem, prop, valueParts, tween) {
      var adjusted, scale, maxIterations = 20, currentValue = tween ? function() {
        return tween.cur();
      } : function() {
        return jQuery2.css(elem, prop, "");
      }, initial = currentValue(), unit = valueParts && valueParts[3] || (isAutoPx(prop) ? "px" : ""), initialInUnit = elem.nodeType && (!isAutoPx(prop) || unit !== "px" && +initial) && rcssNum.exec(jQuery2.css(elem, prop));
      if (initialInUnit && initialInUnit[3] !== unit) {
        initial = initial / 2;
        unit = unit || initialInUnit[3];
        initialInUnit = +initial || 1;
        while (maxIterations--) {
          jQuery2.style(elem, prop, initialInUnit + unit);
          if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) {
            maxIterations = 0;
          }
          initialInUnit = initialInUnit / scale;
        }
        initialInUnit = initialInUnit * 2;
        jQuery2.style(elem, prop, initialInUnit + unit);
        valueParts = valueParts || [];
      }
      if (valueParts) {
        initialInUnit = +initialInUnit || +initial || 0;
        adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
        if (tween) {
          tween.unit = unit;
          tween.start = initialInUnit;
          tween.end = adjusted;
        }
      }
      return adjusted;
    }
    var rmsPrefix = /^-ms-/;
    function cssCamelCase(string) {
      return camelCase(string.replace(rmsPrefix, "ms-"));
    }
    var defaultDisplayMap = {};
    function getDefaultDisplay(elem) {
      var temp, doc = elem.ownerDocument, nodeName2 = elem.nodeName, display = defaultDisplayMap[nodeName2];
      if (display) {
        return display;
      }
      temp = doc.body.appendChild(doc.createElement(nodeName2));
      display = jQuery2.css(temp, "display");
      temp.parentNode.removeChild(temp);
      if (display === "none") {
        display = "block";
      }
      defaultDisplayMap[nodeName2] = display;
      return display;
    }
    function showHide(elements, show) {
      var display, elem, values = [], index = 0, length = elements.length;
      for (; index < length; index++) {
        elem = elements[index];
        if (!elem.style) {
          continue;
        }
        display = elem.style.display;
        if (show) {
          if (display === "none") {
            values[index] = dataPriv.get(elem, "display") || null;
            if (!values[index]) {
              elem.style.display = "";
            }
          }
          if (elem.style.display === "" && isHiddenWithinTree(elem)) {
            values[index] = getDefaultDisplay(elem);
          }
        } else {
          if (display !== "none") {
            values[index] = "none";
            dataPriv.set(elem, "display", display);
          }
        }
      }
      for (index = 0; index < length; index++) {
        if (values[index] != null) {
          elements[index].style.display = values[index];
        }
      }
      return elements;
    }
    jQuery2.fn.extend({
      show: function() {
        return showHide(this, true);
      },
      hide: function() {
        return showHide(this);
      },
      toggle: function(state) {
        if (typeof state === "boolean") {
          return state ? this.show() : this.hide();
        }
        return this.each(function() {
          if (isHiddenWithinTree(this)) {
            jQuery2(this).show();
          } else {
            jQuery2(this).hide();
          }
        });
      }
    });
    var isAttached = function(elem) {
      return jQuery2.contains(elem.ownerDocument, elem) || elem.getRootNode(composed) === elem.ownerDocument;
    }, composed = { composed: true };
    if (!documentElement$1.getRootNode) {
      isAttached = function(elem) {
        return jQuery2.contains(elem.ownerDocument, elem);
      };
    }
    var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
    var wrapMap = {
      // Table parts need to be wrapped with `<table>` or they're
      // stripped to their contents when put in a div.
      // XHTML parsers do not magically insert elements in the
      // same way that tag soup parsers do, so we cannot shorten
      // this by omitting <tbody> or other required elements.
      thead: ["table"],
      col: ["colgroup", "table"],
      tr: ["tbody", "table"],
      td: ["tr", "tbody", "table"]
    };
    wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
    wrapMap.th = wrapMap.td;
    function getAll(context, tag) {
      var ret;
      if (typeof context.getElementsByTagName !== "undefined") {
        ret = arr.slice.call(context.getElementsByTagName(tag || "*"));
      } else if (typeof context.querySelectorAll !== "undefined") {
        ret = context.querySelectorAll(tag || "*");
      } else {
        ret = [];
      }
      if (tag === void 0 || tag && nodeName(context, tag)) {
        return jQuery2.merge([context], ret);
      }
      return ret;
    }
    var rscriptType = /^$|^module$|\/(?:java|ecma)script/i;
    function setGlobalEval(elems, refElements) {
      var i2 = 0, l = elems.length;
      for (; i2 < l; i2++) {
        dataPriv.set(
          elems[i2],
          "globalEval",
          !refElements || dataPriv.get(refElements[i2], "globalEval")
        );
      }
    }
    var rhtml = /<|&#?\w+;/;
    function buildFragment(elems, context, scripts, selection, ignored) {
      var elem, tmp, tag, wrap, attached, j, fragment = context.createDocumentFragment(), nodes = [], i2 = 0, l = elems.length;
      for (; i2 < l; i2++) {
        elem = elems[i2];
        if (elem || elem === 0) {
          if (toType(elem) === "object" && (elem.nodeType || isArrayLike(elem))) {
            jQuery2.merge(nodes, elem.nodeType ? [elem] : elem);
          } else if (!rhtml.test(elem)) {
            nodes.push(context.createTextNode(elem));
          } else {
            tmp = tmp || fragment.appendChild(context.createElement("div"));
            tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
            wrap = wrapMap[tag] || arr;
            j = wrap.length;
            while (--j > -1) {
              tmp = tmp.appendChild(context.createElement(wrap[j]));
            }
            tmp.innerHTML = jQuery2.htmlPrefilter(elem);
            jQuery2.merge(nodes, tmp.childNodes);
            tmp = fragment.firstChild;
            tmp.textContent = "";
          }
        }
      }
      fragment.textContent = "";
      i2 = 0;
      while (elem = nodes[i2++]) {
        if (selection && jQuery2.inArray(elem, selection) > -1) {
          if (ignored) {
            ignored.push(elem);
          }
          continue;
        }
        attached = isAttached(elem);
        tmp = getAll(fragment.appendChild(elem), "script");
        if (attached) {
          setGlobalEval(tmp);
        }
        if (scripts) {
          j = 0;
          while (elem = tmp[j++]) {
            if (rscriptType.test(elem.type || "")) {
              scripts.push(elem);
            }
          }
        }
      }
      return fragment;
    }
    function disableScript(elem) {
      elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
      return elem;
    }
    function restoreScript(elem) {
      if ((elem.type || "").slice(0, 5) === "true/") {
        elem.type = elem.type.slice(5);
      } else {
        elem.removeAttribute("type");
      }
      return elem;
    }
    function domManip(collection, args, callback, ignored) {
      args = flat(args);
      var fragment, first, scripts, hasScripts, node, doc, i2 = 0, l = collection.length, iNoClone = l - 1, value = args[0], valueIsFunction = typeof value === "function";
      if (valueIsFunction) {
        return collection.each(function(index) {
          var self = collection.eq(index);
          args[0] = value.call(this, index, self.html());
          domManip(self, args, callback, ignored);
        });
      }
      if (l) {
        fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
        first = fragment.firstChild;
        if (fragment.childNodes.length === 1) {
          fragment = first;
        }
        if (first || ignored) {
          scripts = jQuery2.map(getAll(fragment, "script"), disableScript);
          hasScripts = scripts.length;
          for (; i2 < l; i2++) {
            node = fragment;
            if (i2 !== iNoClone) {
              node = jQuery2.clone(node, true, true);
              if (hasScripts) {
                jQuery2.merge(scripts, getAll(node, "script"));
              }
            }
            callback.call(collection[i2], node, i2);
          }
          if (hasScripts) {
            doc = scripts[scripts.length - 1].ownerDocument;
            jQuery2.map(scripts, restoreScript);
            for (i2 = 0; i2 < hasScripts; i2++) {
              node = scripts[i2];
              if (rscriptType.test(node.type || "") && !dataPriv.get(node, "globalEval") && jQuery2.contains(doc, node)) {
                if (node.src && (node.type || "").toLowerCase() !== "module") {
                  if (jQuery2._evalUrl && !node.noModule) {
                    jQuery2._evalUrl(node.src, {
                      nonce: node.nonce,
                      crossOrigin: node.crossOrigin
                    }, doc);
                  }
                } else {
                  DOMEval(node.textContent, node, doc);
                }
              }
            }
          }
        }
      }
      return collection;
    }
    var rcheckableType = /^(?:checkbox|radio)$/i;
    var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
    function returnTrue() {
      return true;
    }
    function returnFalse() {
      return false;
    }
    function on(elem, types, selector, data, fn, one) {
      var origFn, type;
      if (typeof types === "object") {
        if (typeof selector !== "string") {
          data = data || selector;
          selector = void 0;
        }
        for (type in types) {
          on(elem, type, selector, data, types[type], one);
        }
        return elem;
      }
      if (data == null && fn == null) {
        fn = selector;
        data = selector = void 0;
      } else if (fn == null) {
        if (typeof selector === "string") {
          fn = data;
          data = void 0;
        } else {
          fn = data;
          data = selector;
          selector = void 0;
        }
      }
      if (fn === false) {
        fn = returnFalse;
      } else if (!fn) {
        return elem;
      }
      if (one === 1) {
        origFn = fn;
        fn = function(event) {
          jQuery2().off(event);
          return origFn.apply(this, arguments);
        };
        fn.guid = origFn.guid || (origFn.guid = jQuery2.guid++);
      }
      return elem.each(function() {
        jQuery2.event.add(this, types, fn, data, selector);
      });
    }
    jQuery2.event = {
      add: function(elem, types, handler, data, selector) {
        var handleObjIn, eventHandle, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.get(elem);
        if (!acceptData(elem)) {
          return;
        }
        if (handler.handler) {
          handleObjIn = handler;
          handler = handleObjIn.handler;
          selector = handleObjIn.selector;
        }
        if (selector) {
          jQuery2.find.matchesSelector(documentElement$1, selector);
        }
        if (!handler.guid) {
          handler.guid = jQuery2.guid++;
        }
        if (!(events = elemData.events)) {
          events = elemData.events = /* @__PURE__ */ Object.create(null);
        }
        if (!(eventHandle = elemData.handle)) {
          eventHandle = elemData.handle = function(e) {
            return typeof jQuery2 !== "undefined" && jQuery2.event.triggered !== e.type ? jQuery2.event.dispatch.apply(elem, arguments) : void 0;
          };
        }
        types = (types || "").match(rnothtmlwhite) || [""];
        t = types.length;
        while (t--) {
          tmp = rtypenamespace.exec(types[t]) || [];
          type = origType = tmp[1];
          namespaces = (tmp[2] || "").split(".").sort();
          if (!type) {
            continue;
          }
          special = jQuery2.event.special[type] || {};
          type = (selector ? special.delegateType : special.bindType) || type;
          special = jQuery2.event.special[type] || {};
          handleObj = jQuery2.extend({
            type,
            origType,
            data,
            handler,
            guid: handler.guid,
            selector,
            needsContext: selector && jQuery2.expr.match.needsContext.test(selector),
            namespace: namespaces.join(".")
          }, handleObjIn);
          if (!(handlers = events[type])) {
            handlers = events[type] = [];
            handlers.delegateCount = 0;
            if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
              if (elem.addEventListener) {
                elem.addEventListener(type, eventHandle);
              }
            }
          }
          if (special.add) {
            special.add.call(elem, handleObj);
            if (!handleObj.handler.guid) {
              handleObj.handler.guid = handler.guid;
            }
          }
          if (selector) {
            handlers.splice(handlers.delegateCount++, 0, handleObj);
          } else {
            handlers.push(handleObj);
          }
        }
      },
      // Detach an event or set of events from an element
      remove: function(elem, types, handler, selector, mappedTypes) {
        var j, origCount, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
        if (!elemData || !(events = elemData.events)) {
          return;
        }
        types = (types || "").match(rnothtmlwhite) || [""];
        t = types.length;
        while (t--) {
          tmp = rtypenamespace.exec(types[t]) || [];
          type = origType = tmp[1];
          namespaces = (tmp[2] || "").split(".").sort();
          if (!type) {
            for (type in events) {
              jQuery2.event.remove(elem, type + types[t], handler, selector, true);
            }
            continue;
          }
          special = jQuery2.event.special[type] || {};
          type = (selector ? special.delegateType : special.bindType) || type;
          handlers = events[type] || [];
          tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
          origCount = j = handlers.length;
          while (j--) {
            handleObj = handlers[j];
            if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
              handlers.splice(j, 1);
              if (handleObj.selector) {
                handlers.delegateCount--;
              }
              if (special.remove) {
                special.remove.call(elem, handleObj);
              }
            }
          }
          if (origCount && !handlers.length) {
            if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
              jQuery2.removeEvent(elem, type, elemData.handle);
            }
            delete events[type];
          }
        }
        if (jQuery2.isEmptyObject(events)) {
          dataPriv.remove(elem, "handle events");
        }
      },
      dispatch: function(nativeEvent) {
        var i2, j, ret, matched, handleObj, handlerQueue, args = new Array(arguments.length), event = jQuery2.event.fix(nativeEvent), handlers = (dataPriv.get(this, "events") || /* @__PURE__ */ Object.create(null))[event.type] || [], special = jQuery2.event.special[event.type] || {};
        args[0] = event;
        for (i2 = 1; i2 < arguments.length; i2++) {
          args[i2] = arguments[i2];
        }
        event.delegateTarget = this;
        if (special.preDispatch && special.preDispatch.call(this, event) === false) {
          return;
        }
        handlerQueue = jQuery2.event.handlers.call(this, event, handlers);
        i2 = 0;
        while ((matched = handlerQueue[i2++]) && !event.isPropagationStopped()) {
          event.currentTarget = matched.elem;
          j = 0;
          while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
            if (!event.rnamespace || handleObj.namespace === false || event.rnamespace.test(handleObj.namespace)) {
              event.handleObj = handleObj;
              event.data = handleObj.data;
              ret = ((jQuery2.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
              if (ret !== void 0) {
                if ((event.result = ret) === false) {
                  event.preventDefault();
                  event.stopPropagation();
                }
              }
            }
          }
        }
        if (special.postDispatch) {
          special.postDispatch.call(this, event);
        }
        return event.result;
      },
      handlers: function(event, handlers) {
        var i2, handleObj, sel, matchedHandlers, matchedSelectors, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
        if (delegateCount && // Support: Firefox <=42 - 66+
        // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
        // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
        // Support: IE 11+
        // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
        !(event.type === "click" && event.button >= 1)) {
          for (; cur !== this; cur = cur.parentNode || this) {
            if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
              matchedHandlers = [];
              matchedSelectors = {};
              for (i2 = 0; i2 < delegateCount; i2++) {
                handleObj = handlers[i2];
                sel = handleObj.selector + " ";
                if (matchedSelectors[sel] === void 0) {
                  matchedSelectors[sel] = handleObj.needsContext ? jQuery2(sel, this).index(cur) > -1 : jQuery2.find(sel, this, null, [cur]).length;
                }
                if (matchedSelectors[sel]) {
                  matchedHandlers.push(handleObj);
                }
              }
              if (matchedHandlers.length) {
                handlerQueue.push({ elem: cur, handlers: matchedHandlers });
              }
            }
          }
        }
        cur = this;
        if (delegateCount < handlers.length) {
          handlerQueue.push({ elem: cur, handlers: handlers.slice(delegateCount) });
        }
        return handlerQueue;
      },
      addProp: function(name, hook) {
        Object.defineProperty(jQuery2.Event.prototype, name, {
          enumerable: true,
          configurable: true,
          get: typeof hook === "function" ? function() {
            if (this.originalEvent) {
              return hook(this.originalEvent);
            }
          } : function() {
            if (this.originalEvent) {
              return this.originalEvent[name];
            }
          },
          set: function(value) {
            Object.defineProperty(this, name, {
              enumerable: true,
              configurable: true,
              writable: true,
              value
            });
          }
        });
      },
      fix: function(originalEvent) {
        return originalEvent[jQuery2.expando] ? originalEvent : new jQuery2.Event(originalEvent);
      },
      special: jQuery2.extend(/* @__PURE__ */ Object.create(null), {
        load: {
          // Prevent triggered image.load events from bubbling to window.load
          noBubble: true
        },
        click: {
          // Utilize native event to ensure correct state for checkable inputs
          setup: function(data) {
            var el = this || data;
            if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
              leverageNative(el, "click", true);
            }
            return false;
          },
          trigger: function(data) {
            var el = this || data;
            if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
              leverageNative(el, "click");
            }
            return true;
          },
          // For cross-browser consistency, suppress native .click() on links
          // Also prevent it if we're currently inside a leveraged native-event stack
          _default: function(event) {
            var target = event.target;
            return rcheckableType.test(target.type) && target.click && nodeName(target, "input") && dataPriv.get(target, "click") || nodeName(target, "a");
          }
        },
        beforeunload: {
          postDispatch: function(event) {
            if (event.result !== void 0) {
              event.preventDefault();
            }
          }
        }
      })
    };
    function leverageNative(el, type, isSetup) {
      if (!isSetup) {
        if (dataPriv.get(el, type) === void 0) {
          jQuery2.event.add(el, type, returnTrue);
        }
        return;
      }
      dataPriv.set(el, type, false);
      jQuery2.event.add(el, type, {
        namespace: false,
        handler: function(event) {
          var result, saved = dataPriv.get(this, type);
          if (event.isTrigger & 1 && this[type]) {
            if (!saved.length) {
              saved = slice.call(arguments);
              dataPriv.set(this, type, saved);
              this[type]();
              result = dataPriv.get(this, type);
              dataPriv.set(this, type, false);
              if (saved !== result) {
                event.stopImmediatePropagation();
                event.preventDefault();
                return result && result.value;
              }
            } else if ((jQuery2.event.special[type] || {}).delegateType) {
              event.stopPropagation();
            }
          } else if (saved.length) {
            dataPriv.set(this, type, {
              value: jQuery2.event.trigger(
                saved[0],
                saved.slice(1),
                this
              )
            });
            event.stopPropagation();
            event.isImmediatePropagationStopped = returnTrue;
          }
        }
      });
    }
    jQuery2.removeEvent = function(elem, type, handle) {
      if (elem.removeEventListener) {
        elem.removeEventListener(type, handle);
      }
    };
    jQuery2.Event = function(src, props) {
      if (!(this instanceof jQuery2.Event)) {
        return new jQuery2.Event(src, props);
      }
      if (src && src.type) {
        this.originalEvent = src;
        this.type = src.type;
        this.isDefaultPrevented = src.defaultPrevented ? returnTrue : returnFalse;
        this.target = src.target;
        this.currentTarget = src.currentTarget;
        this.relatedTarget = src.relatedTarget;
      } else {
        this.type = src;
      }
      if (props) {
        jQuery2.extend(this, props);
      }
      this.timeStamp = src && src.timeStamp || Date.now();
      this[jQuery2.expando] = true;
    };
    jQuery2.Event.prototype = {
      constructor: jQuery2.Event,
      isDefaultPrevented: returnFalse,
      isPropagationStopped: returnFalse,
      isImmediatePropagationStopped: returnFalse,
      isSimulated: false,
      preventDefault: function() {
        var e = this.originalEvent;
        this.isDefaultPrevented = returnTrue;
        if (e && !this.isSimulated) {
          e.preventDefault();
        }
      },
      stopPropagation: function() {
        var e = this.originalEvent;
        this.isPropagationStopped = returnTrue;
        if (e && !this.isSimulated) {
          e.stopPropagation();
        }
      },
      stopImmediatePropagation: function() {
        var e = this.originalEvent;
        this.isImmediatePropagationStopped = returnTrue;
        if (e && !this.isSimulated) {
          e.stopImmediatePropagation();
        }
        this.stopPropagation();
      }
    };
    jQuery2.each({
      altKey: true,
      bubbles: true,
      cancelable: true,
      changedTouches: true,
      ctrlKey: true,
      detail: true,
      eventPhase: true,
      metaKey: true,
      pageX: true,
      pageY: true,
      shiftKey: true,
      view: true,
      "char": true,
      code: true,
      charCode: true,
      key: true,
      keyCode: true,
      button: true,
      buttons: true,
      clientX: true,
      clientY: true,
      offsetX: true,
      offsetY: true,
      pointerId: true,
      pointerType: true,
      screenX: true,
      screenY: true,
      targetTouches: true,
      toElement: true,
      touches: true,
      which: true
    }, jQuery2.event.addProp);
    jQuery2.each({ focus: "focusin", blur: "focusout" }, function(type, delegateType) {
      function focusMappedHandler(nativeEvent) {
        var event = jQuery2.event.fix(nativeEvent);
        event.type = nativeEvent.type === "focusin" ? "focus" : "blur";
        event.isSimulated = true;
        if (event.target === event.currentTarget) {
          dataPriv.get(this, "handle")(event);
        }
      }
      jQuery2.event.special[type] = {
        // Utilize native event if possible so blur/focus sequence is correct
        setup: function() {
          leverageNative(this, type, true);
          if (isIE) {
            this.addEventListener(delegateType, focusMappedHandler);
          } else {
            return false;
          }
        },
        trigger: function() {
          leverageNative(this, type);
          return true;
        },
        teardown: function() {
          if (isIE) {
            this.removeEventListener(delegateType, focusMappedHandler);
          } else {
            return false;
          }
        },
        // Suppress native focus or blur if we're currently inside
        // a leveraged native-event stack
        _default: function(event) {
          return dataPriv.get(event.target, type);
        },
        delegateType
      };
    });
    jQuery2.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
    }, function(orig, fix) {
      jQuery2.event.special[orig] = {
        delegateType: fix,
        bindType: fix,
        handle: function(event) {
          var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
          if (!related || related !== target && !jQuery2.contains(target, related)) {
            event.type = handleObj.origType;
            ret = handleObj.handler.apply(this, arguments);
            event.type = fix;
          }
          return ret;
        }
      };
    });
    jQuery2.fn.extend({
      on: function(types, selector, data, fn) {
        return on(this, types, selector, data, fn);
      },
      one: function(types, selector, data, fn) {
        return on(this, types, selector, data, fn, 1);
      },
      off: function(types, selector, fn) {
        var handleObj, type;
        if (types && types.preventDefault && types.handleObj) {
          handleObj = types.handleObj;
          jQuery2(types.delegateTarget).off(
            handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
            handleObj.selector,
            handleObj.handler
          );
          return this;
        }
        if (typeof types === "object") {
          for (type in types) {
            this.off(type, selector, types[type]);
          }
          return this;
        }
        if (selector === false || typeof selector === "function") {
          fn = selector;
          selector = void 0;
        }
        if (fn === false) {
          fn = returnFalse;
        }
        return this.each(function() {
          jQuery2.event.remove(this, types, fn, selector);
        });
      }
    });
    var rnoInnerhtml = /<script|<style|<link/i;
    function manipulationTarget(elem, content) {
      if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {
        return jQuery2(elem).children("tbody")[0] || elem;
      }
      return elem;
    }
    function cloneCopyEvent(src, dest) {
      var type, i2, l, events = dataPriv.get(src, "events");
      if (dest.nodeType !== 1) {
        return;
      }
      if (events) {
        dataPriv.remove(dest, "handle events");
        for (type in events) {
          for (i2 = 0, l = events[type].length; i2 < l; i2++) {
            jQuery2.event.add(dest, type, events[type][i2]);
          }
        }
      }
      if (dataUser.hasData(src)) {
        dataUser.set(dest, jQuery2.extend({}, dataUser.get(src)));
      }
    }
    function remove(elem, selector, keepData) {
      var node, nodes = selector ? jQuery2.filter(selector, elem) : elem, i2 = 0;
      for (; (node = nodes[i2]) != null; i2++) {
        if (!keepData && node.nodeType === 1) {
          jQuery2.cleanData(getAll(node));
        }
        if (node.parentNode) {
          if (keepData && isAttached(node)) {
            setGlobalEval(getAll(node, "script"));
          }
          node.parentNode.removeChild(node);
        }
      }
      return elem;
    }
    jQuery2.extend({
      htmlPrefilter: function(html) {
        return html;
      },
      clone: function(elem, dataAndEvents, deepDataAndEvents) {
        var i2, l, srcElements, destElements, clone = elem.cloneNode(true), inPage = isAttached(elem);
        if (isIE && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery2.isXMLDoc(elem)) {
          destElements = getAll(clone);
          srcElements = getAll(elem);
          for (i2 = 0, l = srcElements.length; i2 < l; i2++) {
            if (nodeName(destElements[i2], "textarea")) {
              destElements[i2].defaultValue = srcElements[i2].defaultValue;
            }
          }
        }
        if (dataAndEvents) {
          if (deepDataAndEvents) {
            srcElements = srcElements || getAll(elem);
            destElements = destElements || getAll(clone);
            for (i2 = 0, l = srcElements.length; i2 < l; i2++) {
              cloneCopyEvent(srcElements[i2], destElements[i2]);
            }
          } else {
            cloneCopyEvent(elem, clone);
          }
        }
        destElements = getAll(clone, "script");
        if (destElements.length > 0) {
          setGlobalEval(destElements, !inPage && getAll(elem, "script"));
        }
        return clone;
      },
      cleanData: function(elems) {
        var data, elem, type, special = jQuery2.event.special, i2 = 0;
        for (; (elem = elems[i2]) !== void 0; i2++) {
          if (acceptData(elem)) {
            if (data = elem[dataPriv.expando]) {
              if (data.events) {
                for (type in data.events) {
                  if (special[type]) {
                    jQuery2.event.remove(elem, type);
                  } else {
                    jQuery2.removeEvent(elem, type, data.handle);
                  }
                }
              }
              elem[dataPriv.expando] = void 0;
            }
            if (elem[dataUser.expando]) {
              elem[dataUser.expando] = void 0;
            }
          }
        }
      }
    });
    jQuery2.fn.extend({
      detach: function(selector) {
        return remove(this, selector, true);
      },
      remove: function(selector) {
        return remove(this, selector);
      },
      text: function(value) {
        return access(this, function(value2) {
          return value2 === void 0 ? jQuery2.text(this) : this.empty().each(function() {
            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
              this.textContent = value2;
            }
          });
        }, null, value, arguments.length);
      },
      append: function() {
        return domManip(this, arguments, function(elem) {
          if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
            var target = manipulationTarget(this, elem);
            target.appendChild(elem);
          }
        });
      },
      prepend: function() {
        return domManip(this, arguments, function(elem) {
          if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
            var target = manipulationTarget(this, elem);
            target.insertBefore(elem, target.firstChild);
          }
        });
      },
      before: function() {
        return domManip(this, arguments, function(elem) {
          if (this.parentNode) {
            this.parentNode.insertBefore(elem, this);
          }
        });
      },
      after: function() {
        return domManip(this, arguments, function(elem) {
          if (this.parentNode) {
            this.parentNode.insertBefore(elem, this.nextSibling);
          }
        });
      },
      empty: function() {
        var elem, i2 = 0;
        for (; (elem = this[i2]) != null; i2++) {
          if (elem.nodeType === 1) {
            jQuery2.cleanData(getAll(elem, false));
            elem.textContent = "";
          }
        }
        return this;
      },
      clone: function(dataAndEvents, deepDataAndEvents) {
        dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
        deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
        return this.map(function() {
          return jQuery2.clone(this, dataAndEvents, deepDataAndEvents);
        });
      },
      html: function(value) {
        return access(this, function(value2) {
          var elem = this[0] || {}, i2 = 0, l = this.length;
          if (value2 === void 0 && elem.nodeType === 1) {
            return elem.innerHTML;
          }
          if (typeof value2 === "string" && !rnoInnerhtml.test(value2) && !wrapMap[(rtagName.exec(value2) || ["", ""])[1].toLowerCase()]) {
            value2 = jQuery2.htmlPrefilter(value2);
            try {
              for (; i2 < l; i2++) {
                elem = this[i2] || {};
                if (elem.nodeType === 1) {
                  jQuery2.cleanData(getAll(elem, false));
                  elem.innerHTML = value2;
                }
              }
              elem = 0;
            } catch (e) {
            }
          }
          if (elem) {
            this.empty().append(value2);
          }
        }, null, value, arguments.length);
      },
      replaceWith: function() {
        var ignored = [];
        return domManip(this, arguments, function(elem) {
          var parent = this.parentNode;
          if (jQuery2.inArray(this, ignored) < 0) {
            jQuery2.cleanData(getAll(this));
            if (parent) {
              parent.replaceChild(elem, this);
            }
          }
        }, ignored);
      }
    });
    jQuery2.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
    }, function(name, original) {
      jQuery2.fn[name] = function(selector) {
        var elems, ret = [], insert = jQuery2(selector), last = insert.length - 1, i2 = 0;
        for (; i2 <= last; i2++) {
          elems = i2 === last ? this : this.clone(true);
          jQuery2(insert[i2])[original](elems);
          push.apply(ret, elems);
        }
        return this.pushStack(ret);
      };
    });
    var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
    var rcustomProp = /^--/;
    function getStyles(elem) {
      var view = elem.ownerDocument.defaultView;
      if (!view) {
        view = window2;
      }
      return view.getComputedStyle(elem);
    }
    function swap(elem, options, callback) {
      var ret, name, old = {};
      for (name in options) {
        old[name] = elem.style[name];
        elem.style[name] = options[name];
      }
      ret = callback.call(elem);
      for (name in options) {
        elem.style[name] = old[name];
      }
      return ret;
    }
    function curCSS(elem, name, computed) {
      var ret, isCustomProp = rcustomProp.test(name);
      computed = computed || getStyles(elem);
      if (computed) {
        ret = computed.getPropertyValue(name) || computed[name];
        if (isCustomProp && ret) {
          ret = ret.replace(rtrimCSS, "$1") || void 0;
        }
        if (ret === "" && !isAttached(elem)) {
          ret = jQuery2.style(elem, name);
        }
      }
      return ret !== void 0 ? (
        // Support: IE <=9 - 11+
        // IE returns zIndex value as an integer.
        ret + ""
      ) : ret;
    }
    var cssPrefixes = ["Webkit", "Moz", "ms"], emptyStyle = document$1.createElement("div").style;
    function vendorPropName(name) {
      var capName = name[0].toUpperCase() + name.slice(1), i2 = cssPrefixes.length;
      while (i2--) {
        name = cssPrefixes[i2] + capName;
        if (name in emptyStyle) {
          return name;
        }
      }
    }
    function finalPropName(name) {
      if (name in emptyStyle) {
        return name;
      }
      return vendorPropName(name) || name;
    }
    var reliableTrDimensionsVal, reliableColDimensionsVal, table = document$1.createElement("table");
    function computeTableStyleTests() {
      if (
        // This is a singleton, we need to execute it only once
        !table || // Finish early in limited (non-browser) environments
        !table.style
      ) {
        return;
      }
      var trStyle, col = document$1.createElement("col"), tr = document$1.createElement("tr"), td = document$1.createElement("td");
      table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate;border-spacing:0";
      tr.style.cssText = "box-sizing:content-box;border:1px solid;height:1px";
      td.style.cssText = "height:9px;width:9px;padding:0";
      col.span = 2;
      documentElement$1.appendChild(table).appendChild(col).parentNode.appendChild(tr).appendChild(td).parentNode.appendChild(td.cloneNode(true));
      if (table.offsetWidth === 0) {
        documentElement$1.removeChild(table);
        return;
      }
      trStyle = window2.getComputedStyle(tr);
      reliableColDimensionsVal = isIE || Math.round(
        parseFloat(
          window2.getComputedStyle(col).width
        )
      ) === 18;
      reliableTrDimensionsVal = Math.round(parseFloat(trStyle.height) + parseFloat(trStyle.borderTopWidth) + parseFloat(trStyle.borderBottomWidth)) === tr.offsetHeight;
      documentElement$1.removeChild(table);
      table = null;
    }
    jQuery2.extend(support, {
      reliableTrDimensions: function() {
        computeTableStyleTests();
        return reliableTrDimensionsVal;
      },
      reliableColDimensions: function() {
        computeTableStyleTests();
        return reliableColDimensionsVal;
      }
    });
    var cssShow = { position: "absolute", visibility: "hidden", display: "block" }, cssNormalTransform = {
      letterSpacing: "0",
      fontWeight: "400"
    };
    function setPositiveNumber(_elem, value, subtract) {
      var matches2 = rcssNum.exec(value);
      return matches2 ? (
        // Guard against undefined "subtract", e.g., when used as in cssHooks
        Math.max(0, matches2[2] - (subtract || 0)) + (matches2[3] || "px")
      ) : value;
    }
    function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
      var i2 = dimension === "width" ? 1 : 0, extra = 0, delta = 0, marginDelta = 0;
      if (box === (isBorderBox ? "border" : "content")) {
        return 0;
      }
      for (; i2 < 4; i2 += 2) {
        if (box === "margin") {
          marginDelta += jQuery2.css(elem, box + cssExpand[i2], true, styles);
        }
        if (!isBorderBox) {
          delta += jQuery2.css(elem, "padding" + cssExpand[i2], true, styles);
          if (box !== "padding") {
            delta += jQuery2.css(elem, "border" + cssExpand[i2] + "Width", true, styles);
          } else {
            extra += jQuery2.css(elem, "border" + cssExpand[i2] + "Width", true, styles);
          }
        } else {
          if (box === "content") {
            delta -= jQuery2.css(elem, "padding" + cssExpand[i2], true, styles);
          }
          if (box !== "margin") {
            delta -= jQuery2.css(elem, "border" + cssExpand[i2] + "Width", true, styles);
          }
        }
      }
      if (!isBorderBox && computedVal >= 0) {
        delta += Math.max(0, Math.ceil(
          elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - 0.5
          // If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
          // Use an explicit zero to avoid NaN (gh-3964)
        )) || 0;
      }
      return delta + marginDelta;
    }
    function getWidthOrHeight(elem, dimension, extra) {
      var styles = getStyles(elem), boxSizingNeeded = isIE || extra, isBorderBox = boxSizingNeeded && jQuery2.css(elem, "boxSizing", false, styles) === "border-box", valueIsBorderBox = isBorderBox, val = curCSS(elem, dimension, styles), offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1);
      if (rnumnonpx.test(val)) {
        if (!extra) {
          return val;
        }
        val = "auto";
      }
      if (
        // Fall back to offsetWidth/offsetHeight when value is "auto"
        // This happens for inline elements with no explicit setting (gh-3571)
        (val === "auto" || // Support: IE 9 - 11+
        // Use offsetWidth/offsetHeight for when box sizing is unreliable.
        // In those cases, the computed value can be trusted to be border-box.
        isIE && isBorderBox || !support.reliableColDimensions() && nodeName(elem, "col") || !support.reliableTrDimensions() && nodeName(elem, "tr")) && // Make sure the element is visible & connected
        elem.getClientRects().length
      ) {
        isBorderBox = jQuery2.css(elem, "boxSizing", false, styles) === "border-box";
        valueIsBorderBox = offsetProp in elem;
        if (valueIsBorderBox) {
          val = elem[offsetProp];
        }
      }
      val = parseFloat(val) || 0;
      return val + boxModelAdjustment(
        elem,
        dimension,
        extra || (isBorderBox ? "border" : "content"),
        valueIsBorderBox,
        styles,
        // Provide the current computed size to request scroll gutter calculation (gh-3589)
        val
      ) + "px";
    }
    jQuery2.extend({
      // Add in style property hooks for overriding the default
      // behavior of getting and setting a style property
      cssHooks: {},
      // Get and set the style property on a DOM Node
      style: function(elem, name, value, extra) {
        if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
          return;
        }
        var ret, type, hooks, origName = cssCamelCase(name), isCustomProp = rcustomProp.test(name), style = elem.style;
        if (!isCustomProp) {
          name = finalPropName(origName);
        }
        hooks = jQuery2.cssHooks[name] || jQuery2.cssHooks[origName];
        if (value !== void 0) {
          type = typeof value;
          if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
            value = adjustCSS(elem, name, ret);
            type = "number";
          }
          if (value == null || value !== value) {
            return;
          }
          if (type === "number") {
            value += ret && ret[3] || (isAutoPx(origName) ? "px" : "");
          }
          if (isIE && value === "" && name.indexOf("background") === 0) {
            style[name] = "inherit";
          }
          if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== void 0) {
            if (isCustomProp) {
              style.setProperty(name, value);
            } else {
              style[name] = value;
            }
          }
        } else {
          if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== void 0) {
            return ret;
          }
          return style[name];
        }
      },
      css: function(elem, name, extra, styles) {
        var val, num, hooks, origName = cssCamelCase(name), isCustomProp = rcustomProp.test(name);
        if (!isCustomProp) {
          name = finalPropName(origName);
        }
        hooks = jQuery2.cssHooks[name] || jQuery2.cssHooks[origName];
        if (hooks && "get" in hooks) {
          val = hooks.get(elem, true, extra);
        }
        if (val === void 0) {
          val = curCSS(elem, name, styles);
        }
        if (val === "normal" && name in cssNormalTransform) {
          val = cssNormalTransform[name];
        }
        if (extra === "" || extra) {
          num = parseFloat(val);
          return extra === true || isFinite(num) ? num || 0 : val;
        }
        return val;
      }
    });
    jQuery2.each(["height", "width"], function(_i, dimension) {
      jQuery2.cssHooks[dimension] = {
        get: function(elem, computed, extra) {
          if (computed) {
            return jQuery2.css(elem, "display") === "none" ? swap(elem, cssShow, function() {
              return getWidthOrHeight(elem, dimension, extra);
            }) : getWidthOrHeight(elem, dimension, extra);
          }
        },
        set: function(elem, value, extra) {
          var matches2, styles = getStyles(elem), isBorderBox = extra && jQuery2.css(elem, "boxSizing", false, styles) === "border-box", subtract = extra ? boxModelAdjustment(
            elem,
            dimension,
            extra,
            isBorderBox,
            styles
          ) : 0;
          if (subtract && (matches2 = rcssNum.exec(value)) && (matches2[3] || "px") !== "px") {
            elem.style[dimension] = value;
            value = jQuery2.css(elem, dimension);
          }
          return setPositiveNumber(elem, value, subtract);
        }
      };
    });
    jQuery2.each({
      margin: "",
      padding: "",
      border: "Width"
    }, function(prefix, suffix) {
      jQuery2.cssHooks[prefix + suffix] = {
        expand: function(value) {
          var i2 = 0, expanded = {}, parts = typeof value === "string" ? value.split(" ") : [value];
          for (; i2 < 4; i2++) {
            expanded[prefix + cssExpand[i2] + suffix] = parts[i2] || parts[i2 - 2] || parts[0];
          }
          return expanded;
        }
      };
      if (prefix !== "margin") {
        jQuery2.cssHooks[prefix + suffix].set = setPositiveNumber;
      }
    });
    jQuery2.fn.extend({
      css: function(name, value) {
        return access(this, function(elem, name2, value2) {
          var styles, len, map = {}, i2 = 0;
          if (Array.isArray(name2)) {
            styles = getStyles(elem);
            len = name2.length;
            for (; i2 < len; i2++) {
              map[name2[i2]] = jQuery2.css(elem, name2[i2], false, styles);
            }
            return map;
          }
          return value2 !== void 0 ? jQuery2.style(elem, name2, value2) : jQuery2.css(elem, name2);
        }, name, value, arguments.length > 1);
      }
    });
    function Tween(elem, options, prop, end, easing) {
      return new Tween.prototype.init(elem, options, prop, end, easing);
    }
    jQuery2.Tween = Tween;
    Tween.prototype = {
      constructor: Tween,
      init: function(elem, options, prop, end, easing, unit) {
        this.elem = elem;
        this.prop = prop;
        this.easing = easing || jQuery2.easing._default;
        this.options = options;
        this.start = this.now = this.cur();
        this.end = end;
        this.unit = unit || (isAutoPx(prop) ? "px" : "");
      },
      cur: function() {
        var hooks = Tween.propHooks[this.prop];
        return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
      },
      run: function(percent) {
        var eased, hooks = Tween.propHooks[this.prop];
        if (this.options.duration) {
          this.pos = eased = jQuery2.easing[this.easing](
            percent,
            this.options.duration * percent,
            0,
            1,
            this.options.duration
          );
        } else {
          this.pos = eased = percent;
        }
        this.now = (this.end - this.start) * eased + this.start;
        if (this.options.step) {
          this.options.step.call(this.elem, this.now, this);
        }
        if (hooks && hooks.set) {
          hooks.set(this);
        } else {
          Tween.propHooks._default.set(this);
        }
        return this;
      }
    };
    Tween.prototype.init.prototype = Tween.prototype;
    Tween.propHooks = {
      _default: {
        get: function(tween) {
          var result;
          if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
            return tween.elem[tween.prop];
          }
          result = jQuery2.css(tween.elem, tween.prop, "");
          return !result || result === "auto" ? 0 : result;
        },
        set: function(tween) {
          if (jQuery2.fx.step[tween.prop]) {
            jQuery2.fx.step[tween.prop](tween);
          } else if (tween.elem.nodeType === 1 && (jQuery2.cssHooks[tween.prop] || tween.elem.style[finalPropName(tween.prop)] != null)) {
            jQuery2.style(tween.elem, tween.prop, tween.now + tween.unit);
          } else {
            tween.elem[tween.prop] = tween.now;
          }
        }
      }
    };
    jQuery2.easing = {
      linear: function(p) {
        return p;
      },
      swing: function(p) {
        return 0.5 - Math.cos(p * Math.PI) / 2;
      },
      _default: "swing"
    };
    jQuery2.fx = Tween.prototype.init;
    jQuery2.fx.step = {};
    var fxNow, inProgress, rfxtypes = /^(?:toggle|show|hide)$/, rrun = /queueHooks$/;
    function schedule() {
      if (inProgress) {
        if (document$1.hidden === false && window2.requestAnimationFrame) {
          window2.requestAnimationFrame(schedule);
        } else {
          window2.setTimeout(schedule, 13);
        }
        jQuery2.fx.tick();
      }
    }
    function createFxNow() {
      window2.setTimeout(function() {
        fxNow = void 0;
      });
      return fxNow = Date.now();
    }
    function genFx(type, includeWidth) {
      var which, i2 = 0, attrs = { height: type };
      includeWidth = includeWidth ? 1 : 0;
      for (; i2 < 4; i2 += 2 - includeWidth) {
        which = cssExpand[i2];
        attrs["margin" + which] = attrs["padding" + which] = type;
      }
      if (includeWidth) {
        attrs.opacity = attrs.width = type;
      }
      return attrs;
    }
    function createTween(value, prop, animation) {
      var tween, collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]), index = 0, length = collection.length;
      for (; index < length; index++) {
        if (tween = collection[index].call(animation, prop, value)) {
          return tween;
        }
      }
    }
    function defaultPrefilter(elem, props, opts) {
      var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display, isBox = "width" in props || "height" in props, anim = this, orig = {}, style = elem.style, hidden = elem.nodeType && isHiddenWithinTree(elem), dataShow = dataPriv.get(elem, "fxshow");
      if (!opts.queue) {
        hooks = jQuery2._queueHooks(elem, "fx");
        if (hooks.unqueued == null) {
          hooks.unqueued = 0;
          oldfire = hooks.empty.fire;
          hooks.empty.fire = function() {
            if (!hooks.unqueued) {
              oldfire();
            }
          };
        }
        hooks.unqueued++;
        anim.always(function() {
          anim.always(function() {
            hooks.unqueued--;
            if (!jQuery2.queue(elem, "fx").length) {
              hooks.empty.fire();
            }
          });
        });
      }
      for (prop in props) {
        value = props[prop];
        if (rfxtypes.test(value)) {
          delete props[prop];
          toggle = toggle || value === "toggle";
          if (value === (hidden ? "hide" : "show")) {
            if (value === "show" && dataShow && dataShow[prop] !== void 0) {
              hidden = true;
            } else {
              continue;
            }
          }
          orig[prop] = dataShow && dataShow[prop] || jQuery2.style(elem, prop);
        }
      }
      propTween = !jQuery2.isEmptyObject(props);
      if (!propTween && jQuery2.isEmptyObject(orig)) {
        return;
      }
      if (isBox && elem.nodeType === 1) {
        opts.overflow = [style.overflow, style.overflowX, style.overflowY];
        restoreDisplay = dataShow && dataShow.display;
        if (restoreDisplay == null) {
          restoreDisplay = dataPriv.get(elem, "display");
        }
        display = jQuery2.css(elem, "display");
        if (display === "none") {
          if (restoreDisplay) {
            display = restoreDisplay;
          } else {
            showHide([elem], true);
            restoreDisplay = elem.style.display || restoreDisplay;
            display = jQuery2.css(elem, "display");
            showHide([elem]);
          }
        }
        if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
          if (jQuery2.css(elem, "float") === "none") {
            if (!propTween) {
              anim.done(function() {
                style.display = restoreDisplay;
              });
              if (restoreDisplay == null) {
                display = style.display;
                restoreDisplay = display === "none" ? "" : display;
              }
            }
            style.display = "inline-block";
          }
        }
      }
      if (opts.overflow) {
        style.overflow = "hidden";
        anim.always(function() {
          style.overflow = opts.overflow[0];
          style.overflowX = opts.overflow[1];
          style.overflowY = opts.overflow[2];
        });
      }
      propTween = false;
      for (prop in orig) {
        if (!propTween) {
          if (dataShow) {
            if ("hidden" in dataShow) {
              hidden = dataShow.hidden;
            }
          } else {
            dataShow = dataPriv.set(elem, "fxshow", { display: restoreDisplay });
          }
          if (toggle) {
            dataShow.hidden = !hidden;
          }
          if (hidden) {
            showHide([elem], true);
          }
          anim.done(function() {
            if (!hidden) {
              showHide([elem]);
            }
            dataPriv.remove(elem, "fxshow");
            for (prop in orig) {
              jQuery2.style(elem, prop, orig[prop]);
            }
          });
        }
        propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
        if (!(prop in dataShow)) {
          dataShow[prop] = propTween.start;
          if (hidden) {
            propTween.end = propTween.start;
            propTween.start = 0;
          }
        }
      }
    }
    function propFilter(props, specialEasing) {
      var index, name, easing, value, hooks;
      for (index in props) {
        name = cssCamelCase(index);
        easing = specialEasing[name];
        value = props[index];
        if (Array.isArray(value)) {
          easing = value[1];
          value = props[index] = value[0];
        }
        if (index !== name) {
          props[name] = value;
          delete props[index];
        }
        hooks = jQuery2.cssHooks[name];
        if (hooks && "expand" in hooks) {
          value = hooks.expand(value);
          delete props[name];
          for (index in value) {
            if (!(index in props)) {
              props[index] = value[index];
              specialEasing[index] = easing;
            }
          }
        } else {
          specialEasing[name] = easing;
        }
      }
    }
    function Animation(elem, properties, options) {
      var result, stopped, index = 0, length = Animation.prefilters.length, deferred = jQuery2.Deferred().always(function() {
        delete tick.elem;
      }), tick = function() {
        if (stopped) {
          return false;
        }
        var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), percent = 1 - (remaining / animation.duration || 0), index2 = 0, length2 = animation.tweens.length;
        for (; index2 < length2; index2++) {
          animation.tweens[index2].run(percent);
        }
        deferred.notifyWith(elem, [animation, percent, remaining]);
        if (percent < 1 && length2) {
          return remaining;
        }
        if (!length2) {
          deferred.notifyWith(elem, [animation, 1, 0]);
        }
        deferred.resolveWith(elem, [animation]);
        return false;
      }, animation = deferred.promise({
        elem,
        props: jQuery2.extend({}, properties),
        opts: jQuery2.extend(true, {
          specialEasing: {},
          easing: jQuery2.easing._default
        }, options),
        originalProperties: properties,
        originalOptions: options,
        startTime: fxNow || createFxNow(),
        duration: options.duration,
        tweens: [],
        createTween: function(prop, end) {
          var tween = jQuery2.Tween(
            elem,
            animation.opts,
            prop,
            end,
            animation.opts.specialEasing[prop] || animation.opts.easing
          );
          animation.tweens.push(tween);
          return tween;
        },
        stop: function(gotoEnd) {
          var index2 = 0, length2 = gotoEnd ? animation.tweens.length : 0;
          if (stopped) {
            return this;
          }
          stopped = true;
          for (; index2 < length2; index2++) {
            animation.tweens[index2].run(1);
          }
          if (gotoEnd) {
            deferred.notifyWith(elem, [animation, 1, 0]);
            deferred.resolveWith(elem, [animation, gotoEnd]);
          } else {
            deferred.rejectWith(elem, [animation, gotoEnd]);
          }
          return this;
        }
      }), props = animation.props;
      propFilter(props, animation.opts.specialEasing);
      for (; index < length; index++) {
        result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
        if (result) {
          if (typeof result.stop === "function") {
            jQuery2._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
          }
          return result;
        }
      }
      jQuery2.map(props, createTween, animation);
      if (typeof animation.opts.start === "function") {
        animation.opts.start.call(elem, animation);
      }
      animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
      jQuery2.fx.timer(
        jQuery2.extend(tick, {
          elem,
          anim: animation,
          queue: animation.opts.queue
        })
      );
      return animation;
    }
    jQuery2.Animation = jQuery2.extend(Animation, {
      tweeners: {
        "*": [function(prop, value) {
          var tween = this.createTween(prop, value);
          adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
          return tween;
        }]
      },
      tweener: function(props, callback) {
        if (typeof props === "function") {
          callback = props;
          props = ["*"];
        } else {
          props = props.match(rnothtmlwhite);
        }
        var prop, index = 0, length = props.length;
        for (; index < length; index++) {
          prop = props[index];
          Animation.tweeners[prop] = Animation.tweeners[prop] || [];
          Animation.tweeners[prop].unshift(callback);
        }
      },
      prefilters: [defaultPrefilter],
      prefilter: function(callback, prepend) {
        if (prepend) {
          Animation.prefilters.unshift(callback);
        } else {
          Animation.prefilters.push(callback);
        }
      }
    });
    jQuery2.speed = function(speed, easing, fn) {
      var opt = speed && typeof speed === "object" ? jQuery2.extend({}, speed) : {
        complete: fn || easing || typeof speed === "function" && speed,
        duration: speed,
        easing: fn && easing || easing && typeof easing !== "function" && easing
      };
      if (jQuery2.fx.off) {
        opt.duration = 0;
      } else {
        if (typeof opt.duration !== "number") {
          if (opt.duration in jQuery2.fx.speeds) {
            opt.duration = jQuery2.fx.speeds[opt.duration];
          } else {
            opt.duration = jQuery2.fx.speeds._default;
          }
        }
      }
      if (opt.queue == null || opt.queue === true) {
        opt.queue = "fx";
      }
      opt.old = opt.complete;
      opt.complete = function() {
        if (typeof opt.old === "function") {
          opt.old.call(this);
        }
        if (opt.queue) {
          jQuery2.dequeue(this, opt.queue);
        }
      };
      return opt;
    };
    jQuery2.fn.extend({
      fadeTo: function(speed, to, easing, callback) {
        return this.filter(isHiddenWithinTree).css("opacity", 0).show().end().animate({ opacity: to }, speed, easing, callback);
      },
      animate: function(prop, speed, easing, callback) {
        var empty = jQuery2.isEmptyObject(prop), optall = jQuery2.speed(speed, easing, callback), doAnimation = function() {
          var anim = Animation(this, jQuery2.extend({}, prop), optall);
          if (empty || dataPriv.get(this, "finish")) {
            anim.stop(true);
          }
        };
        doAnimation.finish = doAnimation;
        return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
      },
      stop: function(type, clearQueue, gotoEnd) {
        var stopQueue = function(hooks) {
          var stop = hooks.stop;
          delete hooks.stop;
          stop(gotoEnd);
        };
        if (typeof type !== "string") {
          gotoEnd = clearQueue;
          clearQueue = type;
          type = void 0;
        }
        if (clearQueue) {
          this.queue(type || "fx", []);
        }
        return this.each(function() {
          var dequeue = true, index = type != null && type + "queueHooks", timers = jQuery2.timers, data = dataPriv.get(this);
          if (index) {
            if (data[index] && data[index].stop) {
              stopQueue(data[index]);
            }
          } else {
            for (index in data) {
              if (data[index] && data[index].stop && rrun.test(index)) {
                stopQueue(data[index]);
              }
            }
          }
          for (index = timers.length; index--; ) {
            if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
              timers[index].anim.stop(gotoEnd);
              dequeue = false;
              timers.splice(index, 1);
            }
          }
          if (dequeue || !gotoEnd) {
            jQuery2.dequeue(this, type);
          }
        });
      },
      finish: function(type) {
        if (type !== false) {
          type = type || "fx";
        }
        return this.each(function() {
          var index, data = dataPriv.get(this), queue = data[type + "queue"], hooks = data[type + "queueHooks"], timers = jQuery2.timers, length = queue ? queue.length : 0;
          data.finish = true;
          jQuery2.queue(this, type, []);
          if (hooks && hooks.stop) {
            hooks.stop.call(this, true);
          }
          for (index = timers.length; index--; ) {
            if (timers[index].elem === this && timers[index].queue === type) {
              timers[index].anim.stop(true);
              timers.splice(index, 1);
            }
          }
          for (index = 0; index < length; index++) {
            if (queue[index] && queue[index].finish) {
              queue[index].finish.call(this);
            }
          }
          delete data.finish;
        });
      }
    });
    jQuery2.each(["toggle", "show", "hide"], function(_i, name) {
      var cssFn = jQuery2.fn[name];
      jQuery2.fn[name] = function(speed, easing, callback) {
        return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
      };
    });
    jQuery2.each({
      slideDown: genFx("show"),
      slideUp: genFx("hide"),
      slideToggle: genFx("toggle"),
      fadeIn: { opacity: "show" },
      fadeOut: { opacity: "hide" },
      fadeToggle: { opacity: "toggle" }
    }, function(name, props) {
      jQuery2.fn[name] = function(speed, easing, callback) {
        return this.animate(props, speed, easing, callback);
      };
    });
    jQuery2.timers = [];
    jQuery2.fx.tick = function() {
      var timer, i2 = 0, timers = jQuery2.timers;
      fxNow = Date.now();
      for (; i2 < timers.length; i2++) {
        timer = timers[i2];
        if (!timer() && timers[i2] === timer) {
          timers.splice(i2--, 1);
        }
      }
      if (!timers.length) {
        jQuery2.fx.stop();
      }
      fxNow = void 0;
    };
    jQuery2.fx.timer = function(timer) {
      jQuery2.timers.push(timer);
      jQuery2.fx.start();
    };
    jQuery2.fx.start = function() {
      if (inProgress) {
        return;
      }
      inProgress = true;
      schedule();
    };
    jQuery2.fx.stop = function() {
      inProgress = null;
    };
    jQuery2.fx.speeds = {
      slow: 600,
      fast: 200,
      // Default speed
      _default: 400
    };
    jQuery2.fn.delay = function(time, type) {
      time = jQuery2.fx ? jQuery2.fx.speeds[time] || time : time;
      type = type || "fx";
      return this.queue(type, function(next, hooks) {
        var timeout = window2.setTimeout(next, time);
        hooks.stop = function() {
          window2.clearTimeout(timeout);
        };
      });
    };
    var rfocusable = /^(?:input|select|textarea|button)$/i, rclickable = /^(?:a|area)$/i;
    jQuery2.fn.extend({
      prop: function(name, value) {
        return access(this, jQuery2.prop, name, value, arguments.length > 1);
      },
      removeProp: function(name) {
        return this.each(function() {
          delete this[jQuery2.propFix[name] || name];
        });
      }
    });
    jQuery2.extend({
      prop: function(elem, name, value) {
        var ret, hooks, nType = elem.nodeType;
        if (nType === 3 || nType === 8 || nType === 2) {
          return;
        }
        if (nType !== 1 || !jQuery2.isXMLDoc(elem)) {
          name = jQuery2.propFix[name] || name;
          hooks = jQuery2.propHooks[name];
        }
        if (value !== void 0) {
          if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) {
            return ret;
          }
          return elem[name] = value;
        }
        if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
          return ret;
        }
        return elem[name];
      },
      propHooks: {
        tabIndex: {
          get: function(elem) {
            var tabindex = elem.getAttribute("tabindex");
            if (tabindex) {
              return parseInt(tabindex, 10);
            }
            if (rfocusable.test(elem.nodeName) || // href-less anchor's `tabIndex` property value is `0` and
            // the `tabindex` attribute value: `null`. We want `-1`.
            rclickable.test(elem.nodeName) && elem.href) {
              return 0;
            }
            return -1;
          }
        }
      },
      propFix: {
        "for": "htmlFor",
        "class": "className"
      }
    });
    if (isIE) {
      jQuery2.propHooks.selected = {
        get: function(elem) {
          var parent = elem.parentNode;
          if (parent && parent.parentNode) {
            parent.parentNode.selectedIndex;
          }
          return null;
        },
        set: function(elem) {
          var parent = elem.parentNode;
          if (parent) {
            parent.selectedIndex;
            if (parent.parentNode) {
              parent.parentNode.selectedIndex;
            }
          }
        }
      };
    }
    jQuery2.each([
      "tabIndex",
      "readOnly",
      "maxLength",
      "cellSpacing",
      "cellPadding",
      "rowSpan",
      "colSpan",
      "useMap",
      "frameBorder",
      "contentEditable"
    ], function() {
      jQuery2.propFix[this.toLowerCase()] = this;
    });
    function stripAndCollapse(value) {
      var tokens = value.match(rnothtmlwhite) || [];
      return tokens.join(" ");
    }
    function getClass(elem) {
      return elem.getAttribute && elem.getAttribute("class") || "";
    }
    function classesToArray(value) {
      if (Array.isArray(value)) {
        return value;
      }
      if (typeof value === "string") {
        return value.match(rnothtmlwhite) || [];
      }
      return [];
    }
    jQuery2.fn.extend({
      addClass: function(value) {
        var classNames, cur, curValue, className, i2, finalValue;
        if (typeof value === "function") {
          return this.each(function(j) {
            jQuery2(this).addClass(value.call(this, j, getClass(this)));
          });
        }
        classNames = classesToArray(value);
        if (classNames.length) {
          return this.each(function() {
            curValue = getClass(this);
            cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
            if (cur) {
              for (i2 = 0; i2 < classNames.length; i2++) {
                className = classNames[i2];
                if (cur.indexOf(" " + className + " ") < 0) {
                  cur += className + " ";
                }
              }
              finalValue = stripAndCollapse(cur);
              if (curValue !== finalValue) {
                this.setAttribute("class", finalValue);
              }
            }
          });
        }
        return this;
      },
      removeClass: function(value) {
        var classNames, cur, curValue, className, i2, finalValue;
        if (typeof value === "function") {
          return this.each(function(j) {
            jQuery2(this).removeClass(value.call(this, j, getClass(this)));
          });
        }
        if (!arguments.length) {
          return this.attr("class", "");
        }
        classNames = classesToArray(value);
        if (classNames.length) {
          return this.each(function() {
            curValue = getClass(this);
            cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
            if (cur) {
              for (i2 = 0; i2 < classNames.length; i2++) {
                className = classNames[i2];
                while (cur.indexOf(" " + className + " ") > -1) {
                  cur = cur.replace(" " + className + " ", " ");
                }
              }
              finalValue = stripAndCollapse(cur);
              if (curValue !== finalValue) {
                this.setAttribute("class", finalValue);
              }
            }
          });
        }
        return this;
      },
      toggleClass: function(value, stateVal) {
        var classNames, className, i2, self;
        if (typeof value === "function") {
          return this.each(function(i3) {
            jQuery2(this).toggleClass(
              value.call(this, i3, getClass(this), stateVal),
              stateVal
            );
          });
        }
        if (typeof stateVal === "boolean") {
          return stateVal ? this.addClass(value) : this.removeClass(value);
        }
        classNames = classesToArray(value);
        if (classNames.length) {
          return this.each(function() {
            self = jQuery2(this);
            for (i2 = 0; i2 < classNames.length; i2++) {
              className = classNames[i2];
              if (self.hasClass(className)) {
                self.removeClass(className);
              } else {
                self.addClass(className);
              }
            }
          });
        }
        return this;
      },
      hasClass: function(selector) {
        var className, elem, i2 = 0;
        className = " " + selector + " ";
        while (elem = this[i2++]) {
          if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
            return true;
          }
        }
        return false;
      }
    });
    jQuery2.fn.extend({
      val: function(value) {
        var hooks, ret, valueIsFunction, elem = this[0];
        if (!arguments.length) {
          if (elem) {
            hooks = jQuery2.valHooks[elem.type] || jQuery2.valHooks[elem.nodeName.toLowerCase()];
            if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== void 0) {
              return ret;
            }
            ret = elem.value;
            return ret == null ? "" : ret;
          }
          return;
        }
        valueIsFunction = typeof value === "function";
        return this.each(function(i2) {
          var val;
          if (this.nodeType !== 1) {
            return;
          }
          if (valueIsFunction) {
            val = value.call(this, i2, jQuery2(this).val());
          } else {
            val = value;
          }
          if (val == null) {
            val = "";
          } else if (typeof val === "number") {
            val += "";
          } else if (Array.isArray(val)) {
            val = jQuery2.map(val, function(value2) {
              return value2 == null ? "" : value2 + "";
            });
          }
          hooks = jQuery2.valHooks[this.type] || jQuery2.valHooks[this.nodeName.toLowerCase()];
          if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === void 0) {
            this.value = val;
          }
        });
      }
    });
    jQuery2.extend({
      valHooks: {
        select: {
          get: function(elem) {
            var value, option, i2, options = elem.options, index = elem.selectedIndex, one = elem.type === "select-one", values = one ? null : [], max = one ? index + 1 : options.length;
            if (index < 0) {
              i2 = max;
            } else {
              i2 = one ? index : 0;
            }
            for (; i2 < max; i2++) {
              option = options[i2];
              if (option.selected && // Don't return options that are disabled or in a disabled optgroup
              !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
                value = jQuery2(option).val();
                if (one) {
                  return value;
                }
                values.push(value);
              }
            }
            return values;
          },
          set: function(elem, value) {
            var optionSet, option, options = elem.options, values = jQuery2.makeArray(value), i2 = options.length;
            while (i2--) {
              option = options[i2];
              if (option.selected = jQuery2.inArray(jQuery2(option).val(), values) > -1) {
                optionSet = true;
              }
            }
            if (!optionSet) {
              elem.selectedIndex = -1;
            }
            return values;
          }
        }
      }
    });
    if (isIE) {
      jQuery2.valHooks.option = {
        get: function(elem) {
          var val = elem.getAttribute("value");
          return val != null ? val : (
            // Support: IE <=10 - 11+
            // option.text throws exceptions (trac-14686, trac-14858)
            // Strip and collapse whitespace
            // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
            stripAndCollapse(jQuery2.text(elem))
          );
        }
      };
    }
    jQuery2.each(["radio", "checkbox"], function() {
      jQuery2.valHooks[this] = {
        set: function(elem, value) {
          if (Array.isArray(value)) {
            return elem.checked = jQuery2.inArray(jQuery2(elem).val(), value) > -1;
          }
        }
      };
    });
    var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, stopPropagationCallback = function(e) {
      e.stopPropagation();
    };
    jQuery2.extend(jQuery2.event, {
      trigger: function(event, data, elem, onlyHandlers) {
        var i2, cur, tmp, bubbleType, ontype, handle, special, lastElement, eventPath = [elem || document$1], type = hasOwn.call(event, "type") ? event.type : event, namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
        cur = lastElement = tmp = elem = elem || document$1;
        if (elem.nodeType === 3 || elem.nodeType === 8) {
          return;
        }
        if (rfocusMorph.test(type + jQuery2.event.triggered)) {
          return;
        }
        if (type.indexOf(".") > -1) {
          namespaces = type.split(".");
          type = namespaces.shift();
          namespaces.sort();
        }
        ontype = type.indexOf(":") < 0 && "on" + type;
        event = event[jQuery2.expando] ? event : new jQuery2.Event(type, typeof event === "object" && event);
        event.isTrigger = onlyHandlers ? 2 : 3;
        event.namespace = namespaces.join(".");
        event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
        event.result = void 0;
        if (!event.target) {
          event.target = elem;
        }
        data = data == null ? [event] : jQuery2.makeArray(data, [event]);
        special = jQuery2.event.special[type] || {};
        if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
          return;
        }
        if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
          bubbleType = special.delegateType || type;
          if (!rfocusMorph.test(bubbleType + type)) {
            cur = cur.parentNode;
          }
          for (; cur; cur = cur.parentNode) {
            eventPath.push(cur);
            tmp = cur;
          }
          if (tmp === (elem.ownerDocument || document$1)) {
            eventPath.push(tmp.defaultView || tmp.parentWindow || window2);
          }
        }
        i2 = 0;
        while ((cur = eventPath[i2++]) && !event.isPropagationStopped()) {
          lastElement = cur;
          event.type = i2 > 1 ? bubbleType : special.bindType || type;
          handle = (dataPriv.get(cur, "events") || /* @__PURE__ */ Object.create(null))[event.type] && dataPriv.get(cur, "handle");
          if (handle) {
            handle.apply(cur, data);
          }
          handle = ontype && cur[ontype];
          if (handle && handle.apply && acceptData(cur)) {
            event.result = handle.apply(cur, data);
            if (event.result === false) {
              event.preventDefault();
            }
          }
        }
        event.type = type;
        if (!onlyHandlers && !event.isDefaultPrevented()) {
          if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {
            if (ontype && typeof elem[type] === "function" && !isWindow(elem)) {
              tmp = elem[ontype];
              if (tmp) {
                elem[ontype] = null;
              }
              jQuery2.event.triggered = type;
              if (event.isPropagationStopped()) {
                lastElement.addEventListener(type, stopPropagationCallback);
              }
              elem[type]();
              if (event.isPropagationStopped()) {
                lastElement.removeEventListener(type, stopPropagationCallback);
              }
              jQuery2.event.triggered = void 0;
              if (tmp) {
                elem[ontype] = tmp;
              }
            }
          }
        }
        return event.result;
      },
      // Piggyback on a donor event to simulate a different one
      // Used only for `focus(in | out)` events
      simulate: function(type, elem, event) {
        var e = jQuery2.extend(
          new jQuery2.Event(),
          event,
          {
            type,
            isSimulated: true
          }
        );
        jQuery2.event.trigger(e, null, elem);
      }
    });
    jQuery2.fn.extend({
      trigger: function(type, data) {
        return this.each(function() {
          jQuery2.event.trigger(type, data, this);
        });
      },
      triggerHandler: function(type, data) {
        var elem = this[0];
        if (elem) {
          return jQuery2.event.trigger(type, data, elem, true);
        }
      }
    });
    var location = window2.location;
    var nonce = { guid: Date.now() };
    var rquery = /\?/;
    jQuery2.parseXML = function(data) {
      var xml, parserErrorElem;
      if (!data || typeof data !== "string") {
        return null;
      }
      try {
        xml = new window2.DOMParser().parseFromString(data, "text/xml");
      } catch (e) {
      }
      parserErrorElem = xml && xml.getElementsByTagName("parsererror")[0];
      if (!xml || parserErrorElem) {
        jQuery2.error("Invalid XML: " + (parserErrorElem ? jQuery2.map(parserErrorElem.childNodes, function(el) {
          return el.textContent;
        }).join("\n") : data));
      }
      return xml;
    };
    var rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
    function buildParams(prefix, obj, traditional, add) {
      var name;
      if (Array.isArray(obj)) {
        jQuery2.each(obj, function(i2, v) {
          if (traditional || rbracket.test(prefix)) {
            add(prefix, v);
          } else {
            buildParams(
              prefix + "[" + (typeof v === "object" && v != null ? i2 : "") + "]",
              v,
              traditional,
              add
            );
          }
        });
      } else if (!traditional && toType(obj) === "object") {
        for (name in obj) {
          buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
        }
      } else {
        add(prefix, obj);
      }
    }
    jQuery2.param = function(a, traditional) {
      var prefix, s = [], add = function(key, valueOrFunction) {
        var value = typeof valueOrFunction === "function" ? valueOrFunction() : valueOrFunction;
        s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
      };
      if (a == null) {
        return "";
      }
      if (Array.isArray(a) || a.jquery && !jQuery2.isPlainObject(a)) {
        jQuery2.each(a, function() {
          add(this.name, this.value);
        });
      } else {
        for (prefix in a) {
          buildParams(prefix, a[prefix], traditional, add);
        }
      }
      return s.join("&");
    };
    jQuery2.fn.extend({
      serialize: function() {
        return jQuery2.param(this.serializeArray());
      },
      serializeArray: function() {
        return this.map(function() {
          var elements = jQuery2.prop(this, "elements");
          return elements ? jQuery2.makeArray(elements) : this;
        }).filter(function() {
          var type = this.type;
          return this.name && !jQuery2(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
        }).map(function(_i, elem) {
          var val = jQuery2(this).val();
          if (val == null) {
            return null;
          }
          if (Array.isArray(val)) {
            return jQuery2.map(val, function(val2) {
              return { name: elem.name, value: val2.replace(rCRLF, "\r\n") };
            });
          }
          return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
        }).get();
      }
    });
    var r20 = /%20/g, rhash = /#.*$/, rantiCache = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg, rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, prefilters = {}, transports = {}, allTypes = "*/".concat("*"), originAnchor = document$1.createElement("a");
    originAnchor.href = location.href;
    function addToPrefiltersOrTransports(structure) {
      return function(dataTypeExpression, func) {
        if (typeof dataTypeExpression !== "string") {
          func = dataTypeExpression;
          dataTypeExpression = "*";
        }
        var dataType, i2 = 0, dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];
        if (typeof func === "function") {
          while (dataType = dataTypes[i2++]) {
            if (dataType[0] === "+") {
              dataType = dataType.slice(1) || "*";
              (structure[dataType] = structure[dataType] || []).unshift(func);
            } else {
              (structure[dataType] = structure[dataType] || []).push(func);
            }
          }
        }
      };
    }
    function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
      var inspected = {}, seekingTransport = structure === transports;
      function inspect(dataType) {
        var selected;
        inspected[dataType] = true;
        jQuery2.each(structure[dataType] || [], function(_, prefilterOrFactory) {
          var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
          if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
            options.dataTypes.unshift(dataTypeOrTransport);
            inspect(dataTypeOrTransport);
            return false;
          } else if (seekingTransport) {
            return !(selected = dataTypeOrTransport);
          }
        });
        return selected;
      }
      return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
    }
    function ajaxExtend(target, src) {
      var key, deep, flatOptions = jQuery2.ajaxSettings.flatOptions || {};
      for (key in src) {
        if (src[key] !== void 0) {
          (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
        }
      }
      if (deep) {
        jQuery2.extend(true, target, deep);
      }
      return target;
    }
    function ajaxHandleResponses(s, jqXHR, responses) {
      var ct, type, finalDataType, firstDataType, contents = s.contents, dataTypes = s.dataTypes;
      while (dataTypes[0] === "*") {
        dataTypes.shift();
        if (ct === void 0) {
          ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
        }
      }
      if (ct) {
        for (type in contents) {
          if (contents[type] && contents[type].test(ct)) {
            dataTypes.unshift(type);
            break;
          }
        }
      }
      if (dataTypes[0] in responses) {
        finalDataType = dataTypes[0];
      } else {
        for (type in responses) {
          if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
            finalDataType = type;
            break;
          }
          if (!firstDataType) {
            firstDataType = type;
          }
        }
        finalDataType = finalDataType || firstDataType;
      }
      if (finalDataType) {
        if (finalDataType !== dataTypes[0]) {
          dataTypes.unshift(finalDataType);
        }
        return responses[finalDataType];
      }
    }
    function ajaxConvert(s, response, jqXHR, isSuccess) {
      var conv2, current, conv, tmp, prev, converters = {}, dataTypes = s.dataTypes.slice();
      if (dataTypes[1]) {
        for (conv in s.converters) {
          converters[conv.toLowerCase()] = s.converters[conv];
        }
      }
      current = dataTypes.shift();
      while (current) {
        if (s.responseFields[current]) {
          jqXHR[s.responseFields[current]] = response;
        }
        if (!prev && isSuccess && s.dataFilter) {
          response = s.dataFilter(response, s.dataType);
        }
        prev = current;
        current = dataTypes.shift();
        if (current) {
          if (current === "*") {
            current = prev;
          } else if (prev !== "*" && prev !== current) {
            conv = converters[prev + " " + current] || converters["* " + current];
            if (!conv) {
              for (conv2 in converters) {
                tmp = conv2.split(" ");
                if (tmp[1] === current) {
                  conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                  if (conv) {
                    if (conv === true) {
                      conv = converters[conv2];
                    } else if (converters[conv2] !== true) {
                      current = tmp[0];
                      dataTypes.unshift(tmp[1]);
                    }
                    break;
                  }
                }
              }
            }
            if (conv !== true) {
              if (conv && s.throws) {
                response = conv(response);
              } else {
                try {
                  response = conv(response);
                } catch (e) {
                  return {
                    state: "parsererror",
                    error: conv ? e : "No conversion from " + prev + " to " + current
                  };
                }
              }
            }
          }
        }
      }
      return { state: "success", data: response };
    }
    jQuery2.extend({
      // Counter for holding the number of active queries
      active: 0,
      // Last-Modified header cache for next request
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: location.href,
        type: "GET",
        isLocal: rlocalProtocol.test(location.protocol),
        global: true,
        processData: true,
        async: true,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        /*
        timeout: 0,
        data: null,
        dataType: null,
        username: null,
        password: null,
        cache: null,
        throws: false,
        traditional: false,
        headers: {},
        */
        accepts: {
          "*": allTypes,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript"
        },
        contents: {
          xml: /\bxml\b/,
          html: /\bhtml/,
          json: /\bjson\b/
        },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON"
        },
        // Data converters
        // Keys separate source (or catchall "*") and destination types with a single space
        converters: {
          // Convert anything to text
          "* text": String,
          // Text to html (true = no transformation)
          "text html": true,
          // Evaluate text as a json expression
          "text json": JSON.parse,
          // Parse text as xml
          "text xml": jQuery2.parseXML
        },
        // For options that shouldn't be deep extended:
        // you can add your own custom options here if
        // and when you create one that shouldn't be
        // deep extended (see ajaxExtend)
        flatOptions: {
          url: true,
          context: true
        }
      },
      // Creates a full fledged settings object into target
      // with both ajaxSettings and settings fields.
      // If target is omitted, writes into ajaxSettings.
      ajaxSetup: function(target, settings) {
        return settings ? (
          // Building a settings object
          ajaxExtend(ajaxExtend(target, jQuery2.ajaxSettings), settings)
        ) : (
          // Extending ajaxSettings
          ajaxExtend(jQuery2.ajaxSettings, target)
        );
      },
      ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
      ajaxTransport: addToPrefiltersOrTransports(transports),
      // Main method
      ajax: function(url, options) {
        if (typeof url === "object") {
          options = url;
          url = void 0;
        }
        options = options || {};
        var transport, cacheURL, responseHeadersString, responseHeaders, timeoutTimer, urlAnchor, completed2, fireGlobals, i2, uncached, s = jQuery2.ajaxSetup({}, options), callbackContext = s.context || s, globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery2(callbackContext) : jQuery2.event, deferred = jQuery2.Deferred(), completeDeferred = jQuery2.Callbacks("once memory"), statusCode = s.statusCode || {}, requestHeaders = {}, requestHeadersNames = {}, strAbort = "canceled", jqXHR = {
          readyState: 0,
          // Builds headers hashtable if needed
          getResponseHeader: function(key) {
            var match;
            if (completed2) {
              if (!responseHeaders) {
                responseHeaders = {};
                while (match = rheaders.exec(responseHeadersString)) {
                  responseHeaders[match[1].toLowerCase() + " "] = (responseHeaders[match[1].toLowerCase() + " "] || []).concat(match[2]);
                }
              }
              match = responseHeaders[key.toLowerCase() + " "];
            }
            return match == null ? null : match.join(", ");
          },
          // Raw string
          getAllResponseHeaders: function() {
            return completed2 ? responseHeadersString : null;
          },
          // Caches the header
          setRequestHeader: function(name, value) {
            if (completed2 == null) {
              name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
              requestHeaders[name] = value;
            }
            return this;
          },
          // Overrides response content-type header
          overrideMimeType: function(type) {
            if (completed2 == null) {
              s.mimeType = type;
            }
            return this;
          },
          // Status-dependent callbacks
          statusCode: function(map) {
            var code;
            if (map) {
              if (completed2) {
                jqXHR.always(map[jqXHR.status]);
              } else {
                for (code in map) {
                  statusCode[code] = [statusCode[code], map[code]];
                }
              }
            }
            return this;
          },
          // Cancel the request
          abort: function(statusText) {
            var finalText = statusText || strAbort;
            if (transport) {
              transport.abort(finalText);
            }
            done2(0, finalText);
            return this;
          }
        };
        deferred.promise(jqXHR);
        s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//");
        s.type = options.method || options.type || s.method || s.type;
        s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""];
        if (s.crossDomain == null) {
          urlAnchor = document$1.createElement("a");
          try {
            urlAnchor.href = s.url;
            urlAnchor.href = urlAnchor.href;
            s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
          } catch (e) {
            s.crossDomain = true;
          }
        }
        inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
        if (s.data && s.processData && typeof s.data !== "string") {
          s.data = jQuery2.param(s.data, s.traditional);
        }
        if (completed2) {
          return jqXHR;
        }
        fireGlobals = jQuery2.event && s.global;
        if (fireGlobals && jQuery2.active++ === 0) {
          jQuery2.event.trigger("ajaxStart");
        }
        s.type = s.type.toUpperCase();
        s.hasContent = !rnoContent.test(s.type);
        cacheURL = s.url.replace(rhash, "");
        if (!s.hasContent) {
          uncached = s.url.slice(cacheURL.length);
          if (s.data && (s.processData || typeof s.data === "string")) {
            cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;
            delete s.data;
          }
          if (s.cache === false) {
            cacheURL = cacheURL.replace(rantiCache, "$1");
            uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce.guid++ + uncached;
          }
          s.url = cacheURL + uncached;
        } else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
          s.data = s.data.replace(r20, "+");
        }
        if (s.ifModified) {
          if (jQuery2.lastModified[cacheURL]) {
            jqXHR.setRequestHeader("If-Modified-Since", jQuery2.lastModified[cacheURL]);
          }
          if (jQuery2.etag[cacheURL]) {
            jqXHR.setRequestHeader("If-None-Match", jQuery2.etag[cacheURL]);
          }
        }
        if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
          jqXHR.setRequestHeader("Content-Type", s.contentType);
        }
        jqXHR.setRequestHeader(
          "Accept",
          s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]
        );
        for (i2 in s.headers) {
          jqXHR.setRequestHeader(i2, s.headers[i2]);
        }
        if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed2)) {
          return jqXHR.abort();
        }
        strAbort = "abort";
        completeDeferred.add(s.complete);
        jqXHR.done(s.success);
        jqXHR.fail(s.error);
        transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
        if (!transport) {
          done2(-1, "No Transport");
        } else {
          jqXHR.readyState = 1;
          if (fireGlobals) {
            globalEventContext.trigger("ajaxSend", [jqXHR, s]);
          }
          if (completed2) {
            return jqXHR;
          }
          if (s.async && s.timeout > 0) {
            timeoutTimer = window2.setTimeout(function() {
              jqXHR.abort("timeout");
            }, s.timeout);
          }
          try {
            completed2 = false;
            transport.send(requestHeaders, done2);
          } catch (e) {
            if (completed2) {
              throw e;
            }
            done2(-1, e);
          }
        }
        function done2(status, nativeStatusText, responses, headers) {
          var isSuccess, success, error, response, modified, statusText = nativeStatusText;
          if (completed2) {
            return;
          }
          completed2 = true;
          if (timeoutTimer) {
            window2.clearTimeout(timeoutTimer);
          }
          transport = void 0;
          responseHeadersString = headers || "";
          jqXHR.readyState = status > 0 ? 4 : 0;
          isSuccess = status >= 200 && status < 300 || status === 304;
          if (responses) {
            response = ajaxHandleResponses(s, jqXHR, responses);
          }
          if (!isSuccess && jQuery2.inArray("script", s.dataTypes) > -1 && jQuery2.inArray("json", s.dataTypes) < 0) {
            s.converters["text script"] = function() {
            };
          }
          response = ajaxConvert(s, response, jqXHR, isSuccess);
          if (isSuccess) {
            if (s.ifModified) {
              modified = jqXHR.getResponseHeader("Last-Modified");
              if (modified) {
                jQuery2.lastModified[cacheURL] = modified;
              }
              modified = jqXHR.getResponseHeader("etag");
              if (modified) {
                jQuery2.etag[cacheURL] = modified;
              }
            }
            if (status === 204 || s.type === "HEAD") {
              statusText = "nocontent";
            } else if (status === 304) {
              statusText = "notmodified";
            } else {
              statusText = response.state;
              success = response.data;
              error = response.error;
              isSuccess = !error;
            }
          } else {
            error = statusText;
            if (status || !statusText) {
              statusText = "error";
              if (status < 0) {
                status = 0;
              }
            }
          }
          jqXHR.status = status;
          jqXHR.statusText = (nativeStatusText || statusText) + "";
          if (isSuccess) {
            deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
          } else {
            deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
          }
          jqXHR.statusCode(statusCode);
          statusCode = void 0;
          if (fireGlobals) {
            globalEventContext.trigger(
              isSuccess ? "ajaxSuccess" : "ajaxError",
              [jqXHR, s, isSuccess ? success : error]
            );
          }
          completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
          if (fireGlobals) {
            globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
            if (!--jQuery2.active) {
              jQuery2.event.trigger("ajaxStop");
            }
          }
        }
        return jqXHR;
      },
      getJSON: function(url, data, callback) {
        return jQuery2.get(url, data, callback, "json");
      },
      getScript: function(url, callback) {
        return jQuery2.get(url, void 0, callback, "script");
      }
    });
    jQuery2.each(["get", "post"], function(_i, method) {
      jQuery2[method] = function(url, data, callback, type) {
        if (typeof data === "function" || data === null) {
          type = type || callback;
          callback = data;
          data = void 0;
        }
        return jQuery2.ajax(jQuery2.extend({
          url,
          type: method,
          dataType: type,
          data,
          success: callback
        }, jQuery2.isPlainObject(url) && url));
      };
    });
    jQuery2.ajaxPrefilter(function(s) {
      var i2;
      for (i2 in s.headers) {
        if (i2.toLowerCase() === "content-type") {
          s.contentType = s.headers[i2] || "";
        }
      }
    });
    jQuery2._evalUrl = function(url, options, doc) {
      return jQuery2.ajax({
        url,
        // Make this explicit, since user can override this through ajaxSetup (trac-11264)
        type: "GET",
        dataType: "script",
        cache: true,
        async: false,
        global: false,
        scriptAttrs: options.crossOrigin ? { "crossOrigin": options.crossOrigin } : void 0,
        // Only evaluate the response if it is successful (gh-4126)
        // dataFilter is not invoked for failure responses, so using it instead
        // of the default converter is kludgy but it works.
        converters: {
          "text script": function() {
          }
        },
        dataFilter: function(response) {
          jQuery2.globalEval(response, options, doc);
        }
      });
    };
    jQuery2.fn.extend({
      wrapAll: function(html) {
        var wrap;
        if (this[0]) {
          if (typeof html === "function") {
            html = html.call(this[0]);
          }
          wrap = jQuery2(html, this[0].ownerDocument).eq(0).clone(true);
          if (this[0].parentNode) {
            wrap.insertBefore(this[0]);
          }
          wrap.map(function() {
            var elem = this;
            while (elem.firstElementChild) {
              elem = elem.firstElementChild;
            }
            return elem;
          }).append(this);
        }
        return this;
      },
      wrapInner: function(html) {
        if (typeof html === "function") {
          return this.each(function(i2) {
            jQuery2(this).wrapInner(html.call(this, i2));
          });
        }
        return this.each(function() {
          var self = jQuery2(this), contents = self.contents();
          if (contents.length) {
            contents.wrapAll(html);
          } else {
            self.append(html);
          }
        });
      },
      wrap: function(html) {
        var htmlIsFunction = typeof html === "function";
        return this.each(function(i2) {
          jQuery2(this).wrapAll(htmlIsFunction ? html.call(this, i2) : html);
        });
      },
      unwrap: function(selector) {
        this.parent(selector).not("body").each(function() {
          jQuery2(this).replaceWith(this.childNodes);
        });
        return this;
      }
    });
    jQuery2.expr.pseudos.hidden = function(elem) {
      return !jQuery2.expr.pseudos.visible(elem);
    };
    jQuery2.expr.pseudos.visible = function(elem) {
      return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
    };
    jQuery2.ajaxSettings.xhr = function() {
      return new window2.XMLHttpRequest();
    };
    var xhrSuccessStatus = {
      // File protocol always yields status code 0, assume 200
      0: 200
    };
    jQuery2.ajaxTransport(function(options) {
      var callback;
      return {
        send: function(headers, complete) {
          var i2, xhr = options.xhr();
          xhr.open(
            options.type,
            options.url,
            options.async,
            options.username,
            options.password
          );
          if (options.xhrFields) {
            for (i2 in options.xhrFields) {
              xhr[i2] = options.xhrFields[i2];
            }
          }
          if (options.mimeType && xhr.overrideMimeType) {
            xhr.overrideMimeType(options.mimeType);
          }
          if (!options.crossDomain && !headers["X-Requested-With"]) {
            headers["X-Requested-With"] = "XMLHttpRequest";
          }
          for (i2 in headers) {
            xhr.setRequestHeader(i2, headers[i2]);
          }
          callback = function(type) {
            return function() {
              if (callback) {
                callback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = null;
                if (type === "abort") {
                  xhr.abort();
                } else if (type === "error") {
                  complete(
                    // File: protocol always yields status 0; see trac-8605, trac-14207
                    xhr.status,
                    xhr.statusText
                  );
                } else {
                  complete(
                    xhrSuccessStatus[xhr.status] || xhr.status,
                    xhr.statusText,
                    // For XHR2 non-text, let the caller handle it (gh-2498)
                    (xhr.responseType || "text") === "text" ? { text: xhr.responseText } : { binary: xhr.response },
                    xhr.getAllResponseHeaders()
                  );
                }
              }
            };
          };
          xhr.onload = callback();
          xhr.onabort = xhr.onerror = xhr.ontimeout = callback("error");
          callback = callback("abort");
          try {
            xhr.send(options.hasContent && options.data || null);
          } catch (e) {
            if (callback) {
              throw e;
            }
          }
        },
        abort: function() {
          if (callback) {
            callback();
          }
        }
      };
    });
    function canUseScriptTag(s) {
      return s.scriptAttrs || !s.headers && (s.crossDomain || // When dealing with JSONP (`s.dataTypes` include "json" then)
      // don't use a script tag so that error responses still may have
      // `responseJSON` set. Continue using a script tag for JSONP requests that:
      //   * are cross-domain as AJAX requests won't work without a CORS setup
      //   * have `scriptAttrs` set as that's a script-only functionality
      // Note that this means JSONP requests violate strict CSP script-src settings.
      // A proper solution is to migrate from using JSONP to a CORS setup.
      s.async && jQuery2.inArray("json", s.dataTypes) < 0);
    }
    jQuery2.ajaxSetup({
      accepts: {
        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      converters: {
        "text script": function(text) {
          jQuery2.globalEval(text);
          return text;
        }
      }
    });
    jQuery2.ajaxPrefilter("script", function(s) {
      if (s.cache === void 0) {
        s.cache = false;
      }
      if (canUseScriptTag(s)) {
        s.type = "GET";
      }
    });
    jQuery2.ajaxTransport("script", function(s) {
      if (canUseScriptTag(s)) {
        var script, callback;
        return {
          send: function(_, complete) {
            script = jQuery2("<script>").attr(s.scriptAttrs || {}).prop({ charset: s.scriptCharset, src: s.url }).on("load error", callback = function(evt) {
              script.remove();
              callback = null;
              if (evt) {
                complete(evt.type === "error" ? 404 : 200, evt.type);
              }
            });
            document$1.head.appendChild(script[0]);
          },
          abort: function() {
            if (callback) {
              callback();
            }
          }
        };
      }
    });
    var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
    jQuery2.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function() {
        var callback = oldCallbacks.pop() || jQuery2.expando + "_" + nonce.guid++;
        this[callback] = true;
        return callback;
      }
    });
    jQuery2.ajaxPrefilter("jsonp", function(s, originalSettings, jqXHR) {
      var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");
      callbackName = s.jsonpCallback = typeof s.jsonpCallback === "function" ? s.jsonpCallback() : s.jsonpCallback;
      if (jsonProp) {
        s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
      } else if (s.jsonp !== false) {
        s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
      }
      s.converters["script json"] = function() {
        if (!responseContainer) {
          jQuery2.error(callbackName + " was not called");
        }
        return responseContainer[0];
      };
      s.dataTypes[0] = "json";
      overwritten = window2[callbackName];
      window2[callbackName] = function() {
        responseContainer = arguments;
      };
      jqXHR.always(function() {
        if (overwritten === void 0) {
          jQuery2(window2).removeProp(callbackName);
        } else {
          window2[callbackName] = overwritten;
        }
        if (s[callbackName]) {
          s.jsonpCallback = originalSettings.jsonpCallback;
          oldCallbacks.push(callbackName);
        }
        if (responseContainer && typeof overwritten === "function") {
          overwritten(responseContainer[0]);
        }
        responseContainer = overwritten = void 0;
      });
      return "script";
    });
    jQuery2.ajaxPrefilter(function(s, origOptions) {
      if (typeof s.data !== "string" && !jQuery2.isPlainObject(s.data) && !Array.isArray(s.data) && // Don't disable data processing if explicitly set by the user.
      !("processData" in origOptions)) {
        s.processData = false;
      }
      if (s.data instanceof window2.FormData) {
        s.contentType = false;
      }
    });
    jQuery2.parseHTML = function(data, context, keepScripts) {
      if (typeof data !== "string" && !isObviousHtml(data + "")) {
        return [];
      }
      if (typeof context === "boolean") {
        keepScripts = context;
        context = false;
      }
      var parsed, scripts;
      if (!context) {
        context = new window2.DOMParser().parseFromString("", "text/html");
      }
      parsed = rsingleTag.exec(data);
      scripts = !keepScripts && [];
      if (parsed) {
        return [context.createElement(parsed[1])];
      }
      parsed = buildFragment([data], context, scripts);
      if (scripts && scripts.length) {
        jQuery2(scripts).remove();
      }
      return jQuery2.merge([], parsed.childNodes);
    };
    jQuery2.fn.load = function(url, params, callback) {
      var selector, type, response, self = this, off = url.indexOf(" ");
      if (off > -1) {
        selector = stripAndCollapse(url.slice(off));
        url = url.slice(0, off);
      }
      if (typeof params === "function") {
        callback = params;
        params = void 0;
      } else if (params && typeof params === "object") {
        type = "POST";
      }
      if (self.length > 0) {
        jQuery2.ajax({
          url,
          // If "type" variable is undefined, then "GET" method will be used.
          // Make value of this field explicit since
          // user can override it through ajaxSetup method
          type: type || "GET",
          dataType: "html",
          data: params
        }).done(function(responseText) {
          response = arguments;
          self.html(selector ? (
            // If a selector was specified, locate the right elements in a dummy div
            // Exclude scripts to avoid IE 'Permission Denied' errors
            jQuery2("<div>").append(jQuery2.parseHTML(responseText)).find(selector)
          ) : (
            // Otherwise use the full result
            responseText
          ));
        }).always(callback && function(jqXHR, status) {
          self.each(function() {
            callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
          });
        });
      }
      return this;
    };
    jQuery2.expr.pseudos.animated = function(elem) {
      return jQuery2.grep(jQuery2.timers, function(fn) {
        return elem === fn.elem;
      }).length;
    };
    jQuery2.offset = {
      setOffset: function(elem, options, i2) {
        var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery2.css(elem, "position"), curElem = jQuery2(elem), props = {};
        if (position === "static") {
          elem.style.position = "relative";
        }
        curOffset = curElem.offset();
        curCSSTop = jQuery2.css(elem, "top");
        curCSSLeft = jQuery2.css(elem, "left");
        calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
        if (calculatePosition) {
          curPosition = curElem.position();
          curTop = curPosition.top;
          curLeft = curPosition.left;
        } else {
          curTop = parseFloat(curCSSTop) || 0;
          curLeft = parseFloat(curCSSLeft) || 0;
        }
        if (typeof options === "function") {
          options = options.call(elem, i2, jQuery2.extend({}, curOffset));
        }
        if (options.top != null) {
          props.top = options.top - curOffset.top + curTop;
        }
        if (options.left != null) {
          props.left = options.left - curOffset.left + curLeft;
        }
        if ("using" in options) {
          options.using.call(elem, props);
        } else {
          curElem.css(props);
        }
      }
    };
    jQuery2.fn.extend({
      // offset() relates an element's border box to the document origin
      offset: function(options) {
        if (arguments.length) {
          return options === void 0 ? this : this.each(function(i2) {
            jQuery2.offset.setOffset(this, options, i2);
          });
        }
        var rect, win, elem = this[0];
        if (!elem) {
          return;
        }
        if (!elem.getClientRects().length) {
          return { top: 0, left: 0 };
        }
        rect = elem.getBoundingClientRect();
        win = elem.ownerDocument.defaultView;
        return {
          top: rect.top + win.pageYOffset,
          left: rect.left + win.pageXOffset
        };
      },
      // position() relates an element's margin box to its offset parent's padding box
      // This corresponds to the behavior of CSS absolute positioning
      position: function() {
        if (!this[0]) {
          return;
        }
        var offsetParent, offset, doc, elem = this[0], parentOffset = { top: 0, left: 0 };
        if (jQuery2.css(elem, "position") === "fixed") {
          offset = elem.getBoundingClientRect();
        } else {
          offset = this.offset();
          doc = elem.ownerDocument;
          offsetParent = elem.offsetParent || doc.documentElement;
          while (offsetParent && offsetParent !== doc.documentElement && jQuery2.css(offsetParent, "position") === "static") {
            offsetParent = offsetParent.offsetParent || doc.documentElement;
          }
          if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 && jQuery2.css(offsetParent, "position") !== "static") {
            parentOffset = jQuery2(offsetParent).offset();
            parentOffset.top += jQuery2.css(offsetParent, "borderTopWidth", true);
            parentOffset.left += jQuery2.css(offsetParent, "borderLeftWidth", true);
          }
        }
        return {
          top: offset.top - parentOffset.top - jQuery2.css(elem, "marginTop", true),
          left: offset.left - parentOffset.left - jQuery2.css(elem, "marginLeft", true)
        };
      },
      // This method will return documentElement in the following cases:
      // 1) For the element inside the iframe without offsetParent, this method will return
      //    documentElement of the parent window
      // 2) For the hidden or detached element
      // 3) For body or html element, i.e. in case of the html node - it will return itself
      //
      // but those exceptions were never presented as a real life use-cases
      // and might be considered as more preferable results.
      //
      // This logic, however, is not guaranteed and can change at any point in the future
      offsetParent: function() {
        return this.map(function() {
          var offsetParent = this.offsetParent;
          while (offsetParent && jQuery2.css(offsetParent, "position") === "static") {
            offsetParent = offsetParent.offsetParent;
          }
          return offsetParent || documentElement$1;
        });
      }
    });
    jQuery2.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(method, prop) {
      var top = "pageYOffset" === prop;
      jQuery2.fn[method] = function(val) {
        return access(this, function(elem, method2, val2) {
          var win;
          if (isWindow(elem)) {
            win = elem;
          } else if (elem.nodeType === 9) {
            win = elem.defaultView;
          }
          if (val2 === void 0) {
            return win ? win[prop] : elem[method2];
          }
          if (win) {
            win.scrollTo(
              !top ? val2 : win.pageXOffset,
              top ? val2 : win.pageYOffset
            );
          } else {
            elem[method2] = val2;
          }
        }, method, val, arguments.length);
      };
    });
    jQuery2.each({ Height: "height", Width: "width" }, function(name, type) {
      jQuery2.each({
        padding: "inner" + name,
        content: type,
        "": "outer" + name
      }, function(defaultExtra, funcName) {
        jQuery2.fn[funcName] = function(margin, value) {
          var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"), extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
          return access(this, function(elem, type2, value2) {
            var doc;
            if (isWindow(elem)) {
              return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
            }
            if (elem.nodeType === 9) {
              doc = elem.documentElement;
              return Math.max(
                elem.body["scroll" + name],
                doc["scroll" + name],
                elem.body["offset" + name],
                doc["offset" + name],
                doc["client" + name]
              );
            }
            return value2 === void 0 ? (
              // Get width or height on the element, requesting but not forcing parseFloat
              jQuery2.css(elem, type2, extra)
            ) : (
              // Set width or height on the element
              jQuery2.style(elem, type2, value2, extra)
            );
          }, type, chainable ? margin : void 0, chainable);
        };
      });
    });
    jQuery2.each([
      "ajaxStart",
      "ajaxStop",
      "ajaxComplete",
      "ajaxError",
      "ajaxSuccess",
      "ajaxSend"
    ], function(_i, type) {
      jQuery2.fn[type] = function(fn) {
        return this.on(type, fn);
      };
    });
    jQuery2.fn.extend({
      bind: function(types, data, fn) {
        return this.on(types, null, data, fn);
      },
      unbind: function(types, fn) {
        return this.off(types, null, fn);
      },
      delegate: function(selector, types, data, fn) {
        return this.on(types, selector, data, fn);
      },
      undelegate: function(selector, types, fn) {
        return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
      },
      hover: function(fnOver, fnOut) {
        return this.on("mouseenter", fnOver).on("mouseleave", fnOut || fnOver);
      }
    });
    jQuery2.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),
      function(_i, name) {
        jQuery2.fn[name] = function(data, fn) {
          return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
        };
      }
    );
    jQuery2.proxy = function(fn, context) {
      var tmp, args, proxy;
      if (typeof context === "string") {
        tmp = fn[context];
        context = fn;
        fn = tmp;
      }
      if (typeof fn !== "function") {
        return void 0;
      }
      args = slice.call(arguments, 2);
      proxy = function() {
        return fn.apply(context || this, args.concat(slice.call(arguments)));
      };
      proxy.guid = fn.guid = fn.guid || jQuery2.guid++;
      return proxy;
    };
    jQuery2.holdReady = function(hold) {
      if (hold) {
        jQuery2.readyWait++;
      } else {
        jQuery2.ready(true);
      }
    };
    jQuery2.expr[":"] = jQuery2.expr.filters = jQuery2.expr.pseudos;
    if (typeof define === "function" && define.amd) {
      define("jquery", [], function() {
        return jQuery2;
      });
    }
    var _jQuery = window2.jQuery, _$ = window2.$;
    jQuery2.noConflict = function(deep) {
      if (window2.$ === jQuery2) {
        window2.$ = _$;
      }
      if (deep && window2.jQuery === jQuery2) {
        window2.jQuery = _jQuery;
      }
      return jQuery2;
    };
    if (typeof noGlobal === "undefined") {
      window2.jQuery = window2.$ = jQuery2;
    }
    return jQuery2;
  }
  var jQuery, jquery_module_default;
  var init_jquery_module = __esm({
    "node_modules/jquery/dist-module/jquery.module.js"() {
      jQuery = jQueryFactory(window, true);
      jquery_module_default = jQuery;
    }
  });

  // node_modules/matter-js/build/matter.js
  var require_matter = __commonJS({
    "node_modules/matter-js/build/matter.js"(exports, module) {
      (function webpackUniversalModuleDefinition(root, factory) {
        if (typeof exports === "object" && typeof module === "object")
          module.exports = factory();
        else if (typeof define === "function" && define.amd)
          define("Matter", [], factory);
        else if (typeof exports === "object")
          exports["Matter"] = factory();
        else
          root["Matter"] = factory();
      })(exports, function() {
        return (
          /******/
          (function(modules) {
            var installedModules = {};
            function __webpack_require__(moduleId) {
              if (installedModules[moduleId]) {
                return installedModules[moduleId].exports;
              }
              var module2 = installedModules[moduleId] = {
                /******/
                i: moduleId,
                /******/
                l: false,
                /******/
                exports: {}
                /******/
              };
              modules[moduleId].call(module2.exports, module2, module2.exports, __webpack_require__);
              module2.l = true;
              return module2.exports;
            }
            __webpack_require__.m = modules;
            __webpack_require__.c = installedModules;
            __webpack_require__.d = function(exports2, name, getter) {
              if (!__webpack_require__.o(exports2, name)) {
                Object.defineProperty(exports2, name, { enumerable: true, get: getter });
              }
            };
            __webpack_require__.r = function(exports2) {
              if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
                Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
              }
              Object.defineProperty(exports2, "__esModule", { value: true });
            };
            __webpack_require__.t = function(value, mode) {
              if (mode & 1) value = __webpack_require__(value);
              if (mode & 8) return value;
              if (mode & 4 && typeof value === "object" && value && value.__esModule) return value;
              var ns = /* @__PURE__ */ Object.create(null);
              __webpack_require__.r(ns);
              Object.defineProperty(ns, "default", { enumerable: true, value });
              if (mode & 2 && typeof value != "string") for (var key in value) __webpack_require__.d(ns, key, function(key2) {
                return value[key2];
              }.bind(null, key));
              return ns;
            };
            __webpack_require__.n = function(module2) {
              var getter = module2 && module2.__esModule ? (
                /******/
                function getDefault() {
                  return module2["default"];
                }
              ) : (
                /******/
                function getModuleExports() {
                  return module2;
                }
              );
              __webpack_require__.d(getter, "a", getter);
              return getter;
            };
            __webpack_require__.o = function(object, property) {
              return Object.prototype.hasOwnProperty.call(object, property);
            };
            __webpack_require__.p = "";
            return __webpack_require__(__webpack_require__.s = 20);
          })([
            /* 0 */
            /***/
            (function(module2, exports2) {
              var Common = {};
              module2.exports = Common;
              (function() {
                Common._baseDelta = 1e3 / 60;
                Common._nextId = 0;
                Common._seed = 0;
                Common._nowStartTime = +/* @__PURE__ */ new Date();
                Common._warnedOnce = {};
                Common._decomp = null;
                Common.extend = function(obj, deep) {
                  var argsStart, args, deepClone;
                  if (typeof deep === "boolean") {
                    argsStart = 2;
                    deepClone = deep;
                  } else {
                    argsStart = 1;
                    deepClone = true;
                  }
                  for (var i = argsStart; i < arguments.length; i++) {
                    var source = arguments[i];
                    if (source) {
                      for (var prop in source) {
                        if (deepClone && source[prop] && source[prop].constructor === Object) {
                          if (!obj[prop] || obj[prop].constructor === Object) {
                            obj[prop] = obj[prop] || {};
                            Common.extend(obj[prop], deepClone, source[prop]);
                          } else {
                            obj[prop] = source[prop];
                          }
                        } else {
                          obj[prop] = source[prop];
                        }
                      }
                    }
                  }
                  return obj;
                };
                Common.clone = function(obj, deep) {
                  return Common.extend({}, deep, obj);
                };
                Common.keys = function(obj) {
                  if (Object.keys)
                    return Object.keys(obj);
                  var keys = [];
                  for (var key in obj)
                    keys.push(key);
                  return keys;
                };
                Common.values = function(obj) {
                  var values = [];
                  if (Object.keys) {
                    var keys = Object.keys(obj);
                    for (var i = 0; i < keys.length; i++) {
                      values.push(obj[keys[i]]);
                    }
                    return values;
                  }
                  for (var key in obj)
                    values.push(obj[key]);
                  return values;
                };
                Common.get = function(obj, path, begin, end) {
                  path = path.split(".").slice(begin, end);
                  for (var i = 0; i < path.length; i += 1) {
                    obj = obj[path[i]];
                  }
                  return obj;
                };
                Common.set = function(obj, path, val, begin, end) {
                  var parts = path.split(".").slice(begin, end);
                  Common.get(obj, path, 0, -1)[parts[parts.length - 1]] = val;
                  return val;
                };
                Common.shuffle = function(array) {
                  for (var i = array.length - 1; i > 0; i--) {
                    var j = Math.floor(Common.random() * (i + 1));
                    var temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                  }
                  return array;
                };
                Common.choose = function(choices) {
                  return choices[Math.floor(Common.random() * choices.length)];
                };
                Common.isElement = function(obj) {
                  if (typeof HTMLElement !== "undefined") {
                    return obj instanceof HTMLElement;
                  }
                  return !!(obj && obj.nodeType && obj.nodeName);
                };
                Common.isArray = function(obj) {
                  return Object.prototype.toString.call(obj) === "[object Array]";
                };
                Common.isFunction = function(obj) {
                  return typeof obj === "function";
                };
                Common.isPlainObject = function(obj) {
                  return typeof obj === "object" && obj.constructor === Object;
                };
                Common.isString = function(obj) {
                  return toString.call(obj) === "[object String]";
                };
                Common.clamp = function(value, min, max) {
                  if (value < min)
                    return min;
                  if (value > max)
                    return max;
                  return value;
                };
                Common.sign = function(value) {
                  return value < 0 ? -1 : 1;
                };
                Common.now = function() {
                  if (typeof window !== "undefined" && window.performance) {
                    if (window.performance.now) {
                      return window.performance.now();
                    } else if (window.performance.webkitNow) {
                      return window.performance.webkitNow();
                    }
                  }
                  if (Date.now) {
                    return Date.now();
                  }
                  return /* @__PURE__ */ new Date() - Common._nowStartTime;
                };
                Common.random = function(min, max) {
                  min = typeof min !== "undefined" ? min : 0;
                  max = typeof max !== "undefined" ? max : 1;
                  return min + _seededRandom() * (max - min);
                };
                var _seededRandom = function() {
                  Common._seed = (Common._seed * 9301 + 49297) % 233280;
                  return Common._seed / 233280;
                };
                Common.colorToNumber = function(colorString) {
                  colorString = colorString.replace("#", "");
                  if (colorString.length == 3) {
                    colorString = colorString.charAt(0) + colorString.charAt(0) + colorString.charAt(1) + colorString.charAt(1) + colorString.charAt(2) + colorString.charAt(2);
                  }
                  return parseInt(colorString, 16);
                };
                Common.logLevel = 1;
                Common.log = function() {
                  if (console && Common.logLevel > 0 && Common.logLevel <= 3) {
                    console.log.apply(console, ["matter-js:"].concat(Array.prototype.slice.call(arguments)));
                  }
                };
                Common.info = function() {
                  if (console && Common.logLevel > 0 && Common.logLevel <= 2) {
                    console.info.apply(console, ["matter-js:"].concat(Array.prototype.slice.call(arguments)));
                  }
                };
                Common.warn = function() {
                  if (console && Common.logLevel > 0 && Common.logLevel <= 3) {
                    console.warn.apply(console, ["matter-js:"].concat(Array.prototype.slice.call(arguments)));
                  }
                };
                Common.warnOnce = function() {
                  var message = Array.prototype.slice.call(arguments).join(" ");
                  if (!Common._warnedOnce[message]) {
                    Common.warn(message);
                    Common._warnedOnce[message] = true;
                  }
                };
                Common.deprecated = function(obj, prop, warning) {
                  obj[prop] = Common.chain(function() {
                    Common.warnOnce("\u{1F505} deprecated \u{1F505}", warning);
                  }, obj[prop]);
                };
                Common.nextId = function() {
                  return Common._nextId++;
                };
                Common.indexOf = function(haystack, needle) {
                  if (haystack.indexOf)
                    return haystack.indexOf(needle);
                  for (var i = 0; i < haystack.length; i++) {
                    if (haystack[i] === needle)
                      return i;
                  }
                  return -1;
                };
                Common.map = function(list, func) {
                  if (list.map) {
                    return list.map(func);
                  }
                  var mapped = [];
                  for (var i = 0; i < list.length; i += 1) {
                    mapped.push(func(list[i]));
                  }
                  return mapped;
                };
                Common.topologicalSort = function(graph) {
                  var result = [], visited = [], temp = [];
                  for (var node in graph) {
                    if (!visited[node] && !temp[node]) {
                      Common._topologicalSort(node, visited, temp, graph, result);
                    }
                  }
                  return result;
                };
                Common._topologicalSort = function(node, visited, temp, graph, result) {
                  var neighbors = graph[node] || [];
                  temp[node] = true;
                  for (var i = 0; i < neighbors.length; i += 1) {
                    var neighbor = neighbors[i];
                    if (temp[neighbor]) {
                      continue;
                    }
                    if (!visited[neighbor]) {
                      Common._topologicalSort(neighbor, visited, temp, graph, result);
                    }
                  }
                  temp[node] = false;
                  visited[node] = true;
                  result.push(node);
                };
                Common.chain = function() {
                  var funcs = [];
                  for (var i = 0; i < arguments.length; i += 1) {
                    var func = arguments[i];
                    if (func._chained) {
                      funcs.push.apply(funcs, func._chained);
                    } else {
                      funcs.push(func);
                    }
                  }
                  var chain = function() {
                    var lastResult, args = new Array(arguments.length);
                    for (var i2 = 0, l = arguments.length; i2 < l; i2++) {
                      args[i2] = arguments[i2];
                    }
                    for (i2 = 0; i2 < funcs.length; i2 += 1) {
                      var result = funcs[i2].apply(lastResult, args);
                      if (typeof result !== "undefined") {
                        lastResult = result;
                      }
                    }
                    return lastResult;
                  };
                  chain._chained = funcs;
                  return chain;
                };
                Common.chainPathBefore = function(base, path, func) {
                  return Common.set(base, path, Common.chain(
                    func,
                    Common.get(base, path)
                  ));
                };
                Common.chainPathAfter = function(base, path, func) {
                  return Common.set(base, path, Common.chain(
                    Common.get(base, path),
                    func
                  ));
                };
                Common.setDecomp = function(decomp) {
                  Common._decomp = decomp;
                };
                Common.getDecomp = function() {
                  var decomp = Common._decomp;
                  try {
                    if (!decomp && typeof window !== "undefined") {
                      decomp = window.decomp;
                    }
                    if (!decomp && typeof global !== "undefined") {
                      decomp = global.decomp;
                    }
                  } catch (e) {
                    decomp = null;
                  }
                  return decomp;
                };
              })();
            }),
            /* 1 */
            /***/
            (function(module2, exports2) {
              var Bounds = {};
              module2.exports = Bounds;
              (function() {
                Bounds.create = function(vertices) {
                  var bounds = {
                    min: { x: 0, y: 0 },
                    max: { x: 0, y: 0 }
                  };
                  if (vertices)
                    Bounds.update(bounds, vertices);
                  return bounds;
                };
                Bounds.update = function(bounds, vertices, velocity) {
                  bounds.min.x = Infinity;
                  bounds.max.x = -Infinity;
                  bounds.min.y = Infinity;
                  bounds.max.y = -Infinity;
                  for (var i = 0; i < vertices.length; i++) {
                    var vertex = vertices[i];
                    if (vertex.x > bounds.max.x) bounds.max.x = vertex.x;
                    if (vertex.x < bounds.min.x) bounds.min.x = vertex.x;
                    if (vertex.y > bounds.max.y) bounds.max.y = vertex.y;
                    if (vertex.y < bounds.min.y) bounds.min.y = vertex.y;
                  }
                  if (velocity) {
                    if (velocity.x > 0) {
                      bounds.max.x += velocity.x;
                    } else {
                      bounds.min.x += velocity.x;
                    }
                    if (velocity.y > 0) {
                      bounds.max.y += velocity.y;
                    } else {
                      bounds.min.y += velocity.y;
                    }
                  }
                };
                Bounds.contains = function(bounds, point) {
                  return point.x >= bounds.min.x && point.x <= bounds.max.x && point.y >= bounds.min.y && point.y <= bounds.max.y;
                };
                Bounds.overlaps = function(boundsA, boundsB) {
                  return boundsA.min.x <= boundsB.max.x && boundsA.max.x >= boundsB.min.x && boundsA.max.y >= boundsB.min.y && boundsA.min.y <= boundsB.max.y;
                };
                Bounds.translate = function(bounds, vector) {
                  bounds.min.x += vector.x;
                  bounds.max.x += vector.x;
                  bounds.min.y += vector.y;
                  bounds.max.y += vector.y;
                };
                Bounds.shift = function(bounds, position) {
                  var deltaX = bounds.max.x - bounds.min.x, deltaY = bounds.max.y - bounds.min.y;
                  bounds.min.x = position.x;
                  bounds.max.x = position.x + deltaX;
                  bounds.min.y = position.y;
                  bounds.max.y = position.y + deltaY;
                };
              })();
            }),
            /* 2 */
            /***/
            (function(module2, exports2) {
              var Vector = {};
              module2.exports = Vector;
              (function() {
                Vector.create = function(x, y) {
                  return { x: x || 0, y: y || 0 };
                };
                Vector.clone = function(vector) {
                  return { x: vector.x, y: vector.y };
                };
                Vector.magnitude = function(vector) {
                  return Math.sqrt(vector.x * vector.x + vector.y * vector.y);
                };
                Vector.magnitudeSquared = function(vector) {
                  return vector.x * vector.x + vector.y * vector.y;
                };
                Vector.rotate = function(vector, angle, output) {
                  var cos = Math.cos(angle), sin = Math.sin(angle);
                  if (!output) output = {};
                  var x = vector.x * cos - vector.y * sin;
                  output.y = vector.x * sin + vector.y * cos;
                  output.x = x;
                  return output;
                };
                Vector.rotateAbout = function(vector, angle, point, output) {
                  var cos = Math.cos(angle), sin = Math.sin(angle);
                  if (!output) output = {};
                  var x = point.x + ((vector.x - point.x) * cos - (vector.y - point.y) * sin);
                  output.y = point.y + ((vector.x - point.x) * sin + (vector.y - point.y) * cos);
                  output.x = x;
                  return output;
                };
                Vector.normalise = function(vector) {
                  var magnitude = Vector.magnitude(vector);
                  if (magnitude === 0)
                    return { x: 0, y: 0 };
                  return { x: vector.x / magnitude, y: vector.y / magnitude };
                };
                Vector.dot = function(vectorA, vectorB) {
                  return vectorA.x * vectorB.x + vectorA.y * vectorB.y;
                };
                Vector.cross = function(vectorA, vectorB) {
                  return vectorA.x * vectorB.y - vectorA.y * vectorB.x;
                };
                Vector.cross3 = function(vectorA, vectorB, vectorC) {
                  return (vectorB.x - vectorA.x) * (vectorC.y - vectorA.y) - (vectorB.y - vectorA.y) * (vectorC.x - vectorA.x);
                };
                Vector.add = function(vectorA, vectorB, output) {
                  if (!output) output = {};
                  output.x = vectorA.x + vectorB.x;
                  output.y = vectorA.y + vectorB.y;
                  return output;
                };
                Vector.sub = function(vectorA, vectorB, output) {
                  if (!output) output = {};
                  output.x = vectorA.x - vectorB.x;
                  output.y = vectorA.y - vectorB.y;
                  return output;
                };
                Vector.mult = function(vector, scalar) {
                  return { x: vector.x * scalar, y: vector.y * scalar };
                };
                Vector.div = function(vector, scalar) {
                  return { x: vector.x / scalar, y: vector.y / scalar };
                };
                Vector.perp = function(vector, negate) {
                  negate = negate === true ? -1 : 1;
                  return { x: negate * -vector.y, y: negate * vector.x };
                };
                Vector.neg = function(vector) {
                  return { x: -vector.x, y: -vector.y };
                };
                Vector.angle = function(vectorA, vectorB) {
                  return Math.atan2(vectorB.y - vectorA.y, vectorB.x - vectorA.x);
                };
                Vector._temp = [
                  Vector.create(),
                  Vector.create(),
                  Vector.create(),
                  Vector.create(),
                  Vector.create(),
                  Vector.create()
                ];
              })();
            }),
            /* 3 */
            /***/
            (function(module2, exports2, __webpack_require__) {
              var Vertices = {};
              module2.exports = Vertices;
              var Vector = __webpack_require__(2);
              var Common = __webpack_require__(0);
              (function() {
                Vertices.create = function(points, body) {
                  var vertices = [];
                  for (var i = 0; i < points.length; i++) {
                    var point = points[i], vertex = {
                      x: point.x,
                      y: point.y,
                      index: i,
                      body,
                      isInternal: false
                    };
                    vertices.push(vertex);
                  }
                  return vertices;
                };
                Vertices.fromPath = function(path, body) {
                  var pathPattern = /L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/ig, points = [];
                  path.replace(pathPattern, function(match, x, y) {
                    points.push({ x: parseFloat(x), y: parseFloat(y) });
                  });
                  return Vertices.create(points, body);
                };
                Vertices.centre = function(vertices) {
                  var area = Vertices.area(vertices, true), centre = { x: 0, y: 0 }, cross, temp, j;
                  for (var i = 0; i < vertices.length; i++) {
                    j = (i + 1) % vertices.length;
                    cross = Vector.cross(vertices[i], vertices[j]);
                    temp = Vector.mult(Vector.add(vertices[i], vertices[j]), cross);
                    centre = Vector.add(centre, temp);
                  }
                  return Vector.div(centre, 6 * area);
                };
                Vertices.mean = function(vertices) {
                  var average = { x: 0, y: 0 };
                  for (var i = 0; i < vertices.length; i++) {
                    average.x += vertices[i].x;
                    average.y += vertices[i].y;
                  }
                  return Vector.div(average, vertices.length);
                };
                Vertices.area = function(vertices, signed) {
                  var area = 0, j = vertices.length - 1;
                  for (var i = 0; i < vertices.length; i++) {
                    area += (vertices[j].x - vertices[i].x) * (vertices[j].y + vertices[i].y);
                    j = i;
                  }
                  if (signed)
                    return area / 2;
                  return Math.abs(area) / 2;
                };
                Vertices.inertia = function(vertices, mass) {
                  var numerator = 0, denominator = 0, v = vertices, cross, j;
                  for (var n = 0; n < v.length; n++) {
                    j = (n + 1) % v.length;
                    cross = Math.abs(Vector.cross(v[j], v[n]));
                    numerator += cross * (Vector.dot(v[j], v[j]) + Vector.dot(v[j], v[n]) + Vector.dot(v[n], v[n]));
                    denominator += cross;
                  }
                  return mass / 6 * (numerator / denominator);
                };
                Vertices.translate = function(vertices, vector, scalar) {
                  scalar = typeof scalar !== "undefined" ? scalar : 1;
                  var verticesLength = vertices.length, translateX = vector.x * scalar, translateY = vector.y * scalar, i;
                  for (i = 0; i < verticesLength; i++) {
                    vertices[i].x += translateX;
                    vertices[i].y += translateY;
                  }
                  return vertices;
                };
                Vertices.rotate = function(vertices, angle, point) {
                  if (angle === 0)
                    return;
                  var cos = Math.cos(angle), sin = Math.sin(angle), pointX = point.x, pointY = point.y, verticesLength = vertices.length, vertex, dx, dy, i;
                  for (i = 0; i < verticesLength; i++) {
                    vertex = vertices[i];
                    dx = vertex.x - pointX;
                    dy = vertex.y - pointY;
                    vertex.x = pointX + (dx * cos - dy * sin);
                    vertex.y = pointY + (dx * sin + dy * cos);
                  }
                  return vertices;
                };
                Vertices.contains = function(vertices, point) {
                  var pointX = point.x, pointY = point.y, verticesLength = vertices.length, vertex = vertices[verticesLength - 1], nextVertex;
                  for (var i = 0; i < verticesLength; i++) {
                    nextVertex = vertices[i];
                    if ((pointX - vertex.x) * (nextVertex.y - vertex.y) + (pointY - vertex.y) * (vertex.x - nextVertex.x) > 0) {
                      return false;
                    }
                    vertex = nextVertex;
                  }
                  return true;
                };
                Vertices.scale = function(vertices, scaleX, scaleY, point) {
                  if (scaleX === 1 && scaleY === 1)
                    return vertices;
                  point = point || Vertices.centre(vertices);
                  var vertex, delta;
                  for (var i = 0; i < vertices.length; i++) {
                    vertex = vertices[i];
                    delta = Vector.sub(vertex, point);
                    vertices[i].x = point.x + delta.x * scaleX;
                    vertices[i].y = point.y + delta.y * scaleY;
                  }
                  return vertices;
                };
                Vertices.chamfer = function(vertices, radius, quality, qualityMin, qualityMax) {
                  if (typeof radius === "number") {
                    radius = [radius];
                  } else {
                    radius = radius || [8];
                  }
                  quality = typeof quality !== "undefined" ? quality : -1;
                  qualityMin = qualityMin || 2;
                  qualityMax = qualityMax || 14;
                  var newVertices = [];
                  for (var i = 0; i < vertices.length; i++) {
                    var prevVertex = vertices[i - 1 >= 0 ? i - 1 : vertices.length - 1], vertex = vertices[i], nextVertex = vertices[(i + 1) % vertices.length], currentRadius = radius[i < radius.length ? i : radius.length - 1];
                    if (currentRadius === 0) {
                      newVertices.push(vertex);
                      continue;
                    }
                    var prevNormal = Vector.normalise({
                      x: vertex.y - prevVertex.y,
                      y: prevVertex.x - vertex.x
                    });
                    var nextNormal = Vector.normalise({
                      x: nextVertex.y - vertex.y,
                      y: vertex.x - nextVertex.x
                    });
                    var diagonalRadius = Math.sqrt(2 * Math.pow(currentRadius, 2)), radiusVector = Vector.mult(Common.clone(prevNormal), currentRadius), midNormal = Vector.normalise(Vector.mult(Vector.add(prevNormal, nextNormal), 0.5)), scaledVertex = Vector.sub(vertex, Vector.mult(midNormal, diagonalRadius));
                    var precision = quality;
                    if (quality === -1) {
                      precision = Math.pow(currentRadius, 0.32) * 1.75;
                    }
                    precision = Common.clamp(precision, qualityMin, qualityMax);
                    if (precision % 2 === 1)
                      precision += 1;
                    var alpha = Math.acos(Vector.dot(prevNormal, nextNormal)), theta = alpha / precision;
                    for (var j = 0; j < precision; j++) {
                      newVertices.push(Vector.add(Vector.rotate(radiusVector, theta * j), scaledVertex));
                    }
                  }
                  return newVertices;
                };
                Vertices.clockwiseSort = function(vertices) {
                  var centre = Vertices.mean(vertices);
                  vertices.sort(function(vertexA, vertexB) {
                    return Vector.angle(centre, vertexA) - Vector.angle(centre, vertexB);
                  });
                  return vertices;
                };
                Vertices.isConvex = function(vertices) {
                  var flag = 0, n = vertices.length, i, j, k, z;
                  if (n < 3)
                    return null;
                  for (i = 0; i < n; i++) {
                    j = (i + 1) % n;
                    k = (i + 2) % n;
                    z = (vertices[j].x - vertices[i].x) * (vertices[k].y - vertices[j].y);
                    z -= (vertices[j].y - vertices[i].y) * (vertices[k].x - vertices[j].x);
                    if (z < 0) {
                      flag |= 1;
                    } else if (z > 0) {
                      flag |= 2;
                    }
                    if (flag === 3) {
                      return false;
                    }
                  }
                  if (flag !== 0) {
                    return true;
                  } else {
                    return null;
                  }
                };
                Vertices.hull = function(vertices) {
                  var upper = [], lower = [], vertex, i;
                  vertices = vertices.slice(0);
                  vertices.sort(function(vertexA, vertexB) {
                    var dx = vertexA.x - vertexB.x;
                    return dx !== 0 ? dx : vertexA.y - vertexB.y;
                  });
                  for (i = 0; i < vertices.length; i += 1) {
                    vertex = vertices[i];
                    while (lower.length >= 2 && Vector.cross3(lower[lower.length - 2], lower[lower.length - 1], vertex) <= 0) {
                      lower.pop();
                    }
                    lower.push(vertex);
                  }
                  for (i = vertices.length - 1; i >= 0; i -= 1) {
                    vertex = vertices[i];
                    while (upper.length >= 2 && Vector.cross3(upper[upper.length - 2], upper[upper.length - 1], vertex) <= 0) {
                      upper.pop();
                    }
                    upper.push(vertex);
                  }
                  upper.pop();
                  lower.pop();
                  return upper.concat(lower);
                };
              })();
            }),
            /* 4 */
            /***/
            (function(module2, exports2, __webpack_require__) {
              var Body = {};
              module2.exports = Body;
              var Vertices = __webpack_require__(3);
              var Vector = __webpack_require__(2);
              var Sleeping = __webpack_require__(7);
              var Common = __webpack_require__(0);
              var Bounds = __webpack_require__(1);
              var Axes = __webpack_require__(11);
              (function() {
                Body._timeCorrection = true;
                Body._inertiaScale = 4;
                Body._nextCollidingGroupId = 1;
                Body._nextNonCollidingGroupId = -1;
                Body._nextCategory = 1;
                Body._baseDelta = 1e3 / 60;
                Body.create = function(options) {
                  var defaults = {
                    id: Common.nextId(),
                    type: "body",
                    label: "Body",
                    parts: [],
                    plugin: {},
                    angle: 0,
                    vertices: Vertices.fromPath("L 0 0 L 40 0 L 40 40 L 0 40"),
                    position: { x: 0, y: 0 },
                    force: { x: 0, y: 0 },
                    torque: 0,
                    positionImpulse: { x: 0, y: 0 },
                    constraintImpulse: { x: 0, y: 0, angle: 0 },
                    totalContacts: 0,
                    speed: 0,
                    angularSpeed: 0,
                    velocity: { x: 0, y: 0 },
                    angularVelocity: 0,
                    isSensor: false,
                    isStatic: false,
                    isSleeping: false,
                    motion: 0,
                    sleepThreshold: 60,
                    density: 1e-3,
                    restitution: 0,
                    friction: 0.1,
                    frictionStatic: 0.5,
                    frictionAir: 0.01,
                    collisionFilter: {
                      category: 1,
                      mask: 4294967295,
                      group: 0
                    },
                    slop: 0.05,
                    timeScale: 1,
                    render: {
                      visible: true,
                      opacity: 1,
                      strokeStyle: null,
                      fillStyle: null,
                      lineWidth: null,
                      sprite: {
                        xScale: 1,
                        yScale: 1,
                        xOffset: 0,
                        yOffset: 0
                      }
                    },
                    events: null,
                    bounds: null,
                    chamfer: null,
                    circleRadius: 0,
                    positionPrev: null,
                    anglePrev: 0,
                    parent: null,
                    axes: null,
                    area: 0,
                    mass: 0,
                    inertia: 0,
                    deltaTime: 1e3 / 60,
                    _original: null
                  };
                  var body = Common.extend(defaults, options);
                  _initProperties(body, options);
                  return body;
                };
                Body.nextGroup = function(isNonColliding) {
                  if (isNonColliding)
                    return Body._nextNonCollidingGroupId--;
                  return Body._nextCollidingGroupId++;
                };
                Body.nextCategory = function() {
                  Body._nextCategory = Body._nextCategory << 1;
                  return Body._nextCategory;
                };
                var _initProperties = function(body, options) {
                  options = options || {};
                  Body.set(body, {
                    bounds: body.bounds || Bounds.create(body.vertices),
                    positionPrev: body.positionPrev || Vector.clone(body.position),
                    anglePrev: body.anglePrev || body.angle,
                    vertices: body.vertices,
                    parts: body.parts || [body],
                    isStatic: body.isStatic,
                    isSleeping: body.isSleeping,
                    parent: body.parent || body
                  });
                  Vertices.rotate(body.vertices, body.angle, body.position);
                  Axes.rotate(body.axes, body.angle);
                  Bounds.update(body.bounds, body.vertices, body.velocity);
                  Body.set(body, {
                    axes: options.axes || body.axes,
                    area: options.area || body.area,
                    mass: options.mass || body.mass,
                    inertia: options.inertia || body.inertia
                  });
                  var defaultFillStyle = body.isStatic ? "#14151f" : Common.choose(["#f19648", "#f5d259", "#f55a3c", "#063e7b", "#ececd1"]), defaultStrokeStyle = body.isStatic ? "#555" : "#ccc", defaultLineWidth = body.isStatic && body.render.fillStyle === null ? 1 : 0;
                  body.render.fillStyle = body.render.fillStyle || defaultFillStyle;
                  body.render.strokeStyle = body.render.strokeStyle || defaultStrokeStyle;
                  body.render.lineWidth = body.render.lineWidth || defaultLineWidth;
                  body.render.sprite.xOffset += -(body.bounds.min.x - body.position.x) / (body.bounds.max.x - body.bounds.min.x);
                  body.render.sprite.yOffset += -(body.bounds.min.y - body.position.y) / (body.bounds.max.y - body.bounds.min.y);
                };
                Body.set = function(body, settings, value) {
                  var property;
                  if (typeof settings === "string") {
                    property = settings;
                    settings = {};
                    settings[property] = value;
                  }
                  for (property in settings) {
                    if (!Object.prototype.hasOwnProperty.call(settings, property))
                      continue;
                    value = settings[property];
                    switch (property) {
                      case "isStatic":
                        Body.setStatic(body, value);
                        break;
                      case "isSleeping":
                        Sleeping.set(body, value);
                        break;
                      case "mass":
                        Body.setMass(body, value);
                        break;
                      case "density":
                        Body.setDensity(body, value);
                        break;
                      case "inertia":
                        Body.setInertia(body, value);
                        break;
                      case "vertices":
                        Body.setVertices(body, value);
                        break;
                      case "position":
                        Body.setPosition(body, value);
                        break;
                      case "angle":
                        Body.setAngle(body, value);
                        break;
                      case "velocity":
                        Body.setVelocity(body, value);
                        break;
                      case "angularVelocity":
                        Body.setAngularVelocity(body, value);
                        break;
                      case "speed":
                        Body.setSpeed(body, value);
                        break;
                      case "angularSpeed":
                        Body.setAngularSpeed(body, value);
                        break;
                      case "parts":
                        Body.setParts(body, value);
                        break;
                      case "centre":
                        Body.setCentre(body, value);
                        break;
                      default:
                        body[property] = value;
                    }
                  }
                };
                Body.setStatic = function(body, isStatic) {
                  for (var i = 0; i < body.parts.length; i++) {
                    var part = body.parts[i];
                    if (isStatic) {
                      if (!part.isStatic) {
                        part._original = {
                          restitution: part.restitution,
                          friction: part.friction,
                          mass: part.mass,
                          inertia: part.inertia,
                          density: part.density,
                          inverseMass: part.inverseMass,
                          inverseInertia: part.inverseInertia
                        };
                      }
                      part.restitution = 0;
                      part.friction = 1;
                      part.mass = part.inertia = part.density = Infinity;
                      part.inverseMass = part.inverseInertia = 0;
                      part.positionPrev.x = part.position.x;
                      part.positionPrev.y = part.position.y;
                      part.anglePrev = part.angle;
                      part.angularVelocity = 0;
                      part.speed = 0;
                      part.angularSpeed = 0;
                      part.motion = 0;
                    } else if (part._original) {
                      part.restitution = part._original.restitution;
                      part.friction = part._original.friction;
                      part.mass = part._original.mass;
                      part.inertia = part._original.inertia;
                      part.density = part._original.density;
                      part.inverseMass = part._original.inverseMass;
                      part.inverseInertia = part._original.inverseInertia;
                      part._original = null;
                    }
                    part.isStatic = isStatic;
                  }
                };
                Body.setMass = function(body, mass) {
                  var moment = body.inertia / (body.mass / 6);
                  body.inertia = moment * (mass / 6);
                  body.inverseInertia = 1 / body.inertia;
                  body.mass = mass;
                  body.inverseMass = 1 / body.mass;
                  body.density = body.mass / body.area;
                };
                Body.setDensity = function(body, density) {
                  Body.setMass(body, density * body.area);
                  body.density = density;
                };
                Body.setInertia = function(body, inertia) {
                  body.inertia = inertia;
                  body.inverseInertia = 1 / body.inertia;
                };
                Body.setVertices = function(body, vertices) {
                  if (vertices[0].body === body) {
                    body.vertices = vertices;
                  } else {
                    body.vertices = Vertices.create(vertices, body);
                  }
                  body.axes = Axes.fromVertices(body.vertices);
                  body.area = Vertices.area(body.vertices);
                  Body.setMass(body, body.density * body.area);
                  var centre = Vertices.centre(body.vertices);
                  Vertices.translate(body.vertices, centre, -1);
                  Body.setInertia(body, Body._inertiaScale * Vertices.inertia(body.vertices, body.mass));
                  Vertices.translate(body.vertices, body.position);
                  Bounds.update(body.bounds, body.vertices, body.velocity);
                };
                Body.setParts = function(body, parts, autoHull) {
                  var i;
                  parts = parts.slice(0);
                  body.parts.length = 0;
                  body.parts.push(body);
                  body.parent = body;
                  for (i = 0; i < parts.length; i++) {
                    var part = parts[i];
                    if (part !== body) {
                      part.parent = body;
                      body.parts.push(part);
                    }
                  }
                  if (body.parts.length === 1)
                    return;
                  autoHull = typeof autoHull !== "undefined" ? autoHull : true;
                  if (autoHull) {
                    var vertices = [];
                    for (i = 0; i < parts.length; i++) {
                      vertices = vertices.concat(parts[i].vertices);
                    }
                    Vertices.clockwiseSort(vertices);
                    var hull = Vertices.hull(vertices), hullCentre = Vertices.centre(hull);
                    Body.setVertices(body, hull);
                    Vertices.translate(body.vertices, hullCentre);
                  }
                  var total = Body._totalProperties(body);
                  body.area = total.area;
                  body.parent = body;
                  body.position.x = total.centre.x;
                  body.position.y = total.centre.y;
                  body.positionPrev.x = total.centre.x;
                  body.positionPrev.y = total.centre.y;
                  Body.setMass(body, total.mass);
                  Body.setInertia(body, total.inertia);
                  Body.setPosition(body, total.centre);
                };
                Body.setCentre = function(body, centre, relative) {
                  if (!relative) {
                    body.positionPrev.x = centre.x - (body.position.x - body.positionPrev.x);
                    body.positionPrev.y = centre.y - (body.position.y - body.positionPrev.y);
                    body.position.x = centre.x;
                    body.position.y = centre.y;
                  } else {
                    body.positionPrev.x += centre.x;
                    body.positionPrev.y += centre.y;
                    body.position.x += centre.x;
                    body.position.y += centre.y;
                  }
                };
                Body.setPosition = function(body, position, updateVelocity) {
                  var delta = Vector.sub(position, body.position);
                  if (updateVelocity) {
                    body.positionPrev.x = body.position.x;
                    body.positionPrev.y = body.position.y;
                    body.velocity.x = delta.x;
                    body.velocity.y = delta.y;
                    body.speed = Vector.magnitude(delta);
                  } else {
                    body.positionPrev.x += delta.x;
                    body.positionPrev.y += delta.y;
                  }
                  for (var i = 0; i < body.parts.length; i++) {
                    var part = body.parts[i];
                    part.position.x += delta.x;
                    part.position.y += delta.y;
                    Vertices.translate(part.vertices, delta);
                    Bounds.update(part.bounds, part.vertices, body.velocity);
                  }
                };
                Body.setAngle = function(body, angle, updateVelocity) {
                  var delta = angle - body.angle;
                  if (updateVelocity) {
                    body.anglePrev = body.angle;
                    body.angularVelocity = delta;
                    body.angularSpeed = Math.abs(delta);
                  } else {
                    body.anglePrev += delta;
                  }
                  for (var i = 0; i < body.parts.length; i++) {
                    var part = body.parts[i];
                    part.angle += delta;
                    Vertices.rotate(part.vertices, delta, body.position);
                    Axes.rotate(part.axes, delta);
                    Bounds.update(part.bounds, part.vertices, body.velocity);
                    if (i > 0) {
                      Vector.rotateAbout(part.position, delta, body.position, part.position);
                    }
                  }
                };
                Body.setVelocity = function(body, velocity) {
                  var timeScale = body.deltaTime / Body._baseDelta;
                  body.positionPrev.x = body.position.x - velocity.x * timeScale;
                  body.positionPrev.y = body.position.y - velocity.y * timeScale;
                  body.velocity.x = (body.position.x - body.positionPrev.x) / timeScale;
                  body.velocity.y = (body.position.y - body.positionPrev.y) / timeScale;
                  body.speed = Vector.magnitude(body.velocity);
                };
                Body.getVelocity = function(body) {
                  var timeScale = Body._baseDelta / body.deltaTime;
                  return {
                    x: (body.position.x - body.positionPrev.x) * timeScale,
                    y: (body.position.y - body.positionPrev.y) * timeScale
                  };
                };
                Body.getSpeed = function(body) {
                  return Vector.magnitude(Body.getVelocity(body));
                };
                Body.setSpeed = function(body, speed) {
                  Body.setVelocity(body, Vector.mult(Vector.normalise(Body.getVelocity(body)), speed));
                };
                Body.setAngularVelocity = function(body, velocity) {
                  var timeScale = body.deltaTime / Body._baseDelta;
                  body.anglePrev = body.angle - velocity * timeScale;
                  body.angularVelocity = (body.angle - body.anglePrev) / timeScale;
                  body.angularSpeed = Math.abs(body.angularVelocity);
                };
                Body.getAngularVelocity = function(body) {
                  return (body.angle - body.anglePrev) * Body._baseDelta / body.deltaTime;
                };
                Body.getAngularSpeed = function(body) {
                  return Math.abs(Body.getAngularVelocity(body));
                };
                Body.setAngularSpeed = function(body, speed) {
                  Body.setAngularVelocity(body, Common.sign(Body.getAngularVelocity(body)) * speed);
                };
                Body.translate = function(body, translation, updateVelocity) {
                  Body.setPosition(body, Vector.add(body.position, translation), updateVelocity);
                };
                Body.rotate = function(body, rotation, point, updateVelocity) {
                  if (!point) {
                    Body.setAngle(body, body.angle + rotation, updateVelocity);
                  } else {
                    var cos = Math.cos(rotation), sin = Math.sin(rotation), dx = body.position.x - point.x, dy = body.position.y - point.y;
                    Body.setPosition(body, {
                      x: point.x + (dx * cos - dy * sin),
                      y: point.y + (dx * sin + dy * cos)
                    }, updateVelocity);
                    Body.setAngle(body, body.angle + rotation, updateVelocity);
                  }
                };
                Body.scale = function(body, scaleX, scaleY, point) {
                  var totalArea = 0, totalInertia = 0;
                  point = point || body.position;
                  for (var i = 0; i < body.parts.length; i++) {
                    var part = body.parts[i];
                    Vertices.scale(part.vertices, scaleX, scaleY, point);
                    part.axes = Axes.fromVertices(part.vertices);
                    part.area = Vertices.area(part.vertices);
                    Body.setMass(part, body.density * part.area);
                    Vertices.translate(part.vertices, { x: -part.position.x, y: -part.position.y });
                    Body.setInertia(part, Body._inertiaScale * Vertices.inertia(part.vertices, part.mass));
                    Vertices.translate(part.vertices, { x: part.position.x, y: part.position.y });
                    if (i > 0) {
                      totalArea += part.area;
                      totalInertia += part.inertia;
                    }
                    part.position.x = point.x + (part.position.x - point.x) * scaleX;
                    part.position.y = point.y + (part.position.y - point.y) * scaleY;
                    Bounds.update(part.bounds, part.vertices, body.velocity);
                  }
                  if (body.parts.length > 1) {
                    body.area = totalArea;
                    if (!body.isStatic) {
                      Body.setMass(body, body.density * totalArea);
                      Body.setInertia(body, totalInertia);
                    }
                  }
                  if (body.circleRadius) {
                    if (scaleX === scaleY) {
                      body.circleRadius *= scaleX;
                    } else {
                      body.circleRadius = null;
                    }
                  }
                };
                Body.update = function(body, deltaTime) {
                  deltaTime = (typeof deltaTime !== "undefined" ? deltaTime : 1e3 / 60) * body.timeScale;
                  var deltaTimeSquared = deltaTime * deltaTime, correction = Body._timeCorrection ? deltaTime / (body.deltaTime || deltaTime) : 1;
                  var frictionAir = 1 - body.frictionAir * (deltaTime / Common._baseDelta), velocityPrevX = (body.position.x - body.positionPrev.x) * correction, velocityPrevY = (body.position.y - body.positionPrev.y) * correction;
                  body.velocity.x = velocityPrevX * frictionAir + body.force.x / body.mass * deltaTimeSquared;
                  body.velocity.y = velocityPrevY * frictionAir + body.force.y / body.mass * deltaTimeSquared;
                  body.positionPrev.x = body.position.x;
                  body.positionPrev.y = body.position.y;
                  body.position.x += body.velocity.x;
                  body.position.y += body.velocity.y;
                  body.deltaTime = deltaTime;
                  body.angularVelocity = (body.angle - body.anglePrev) * frictionAir * correction + body.torque / body.inertia * deltaTimeSquared;
                  body.anglePrev = body.angle;
                  body.angle += body.angularVelocity;
                  for (var i = 0; i < body.parts.length; i++) {
                    var part = body.parts[i];
                    Vertices.translate(part.vertices, body.velocity);
                    if (i > 0) {
                      part.position.x += body.velocity.x;
                      part.position.y += body.velocity.y;
                    }
                    if (body.angularVelocity !== 0) {
                      Vertices.rotate(part.vertices, body.angularVelocity, body.position);
                      Axes.rotate(part.axes, body.angularVelocity);
                      if (i > 0) {
                        Vector.rotateAbout(part.position, body.angularVelocity, body.position, part.position);
                      }
                    }
                    Bounds.update(part.bounds, part.vertices, body.velocity);
                  }
                };
                Body.updateVelocities = function(body) {
                  var timeScale = Body._baseDelta / body.deltaTime, bodyVelocity = body.velocity;
                  bodyVelocity.x = (body.position.x - body.positionPrev.x) * timeScale;
                  bodyVelocity.y = (body.position.y - body.positionPrev.y) * timeScale;
                  body.speed = Math.sqrt(bodyVelocity.x * bodyVelocity.x + bodyVelocity.y * bodyVelocity.y);
                  body.angularVelocity = (body.angle - body.anglePrev) * timeScale;
                  body.angularSpeed = Math.abs(body.angularVelocity);
                };
                Body.applyForce = function(body, position, force) {
                  var offset = { x: position.x - body.position.x, y: position.y - body.position.y };
                  body.force.x += force.x;
                  body.force.y += force.y;
                  body.torque += offset.x * force.y - offset.y * force.x;
                };
                Body._totalProperties = function(body) {
                  var properties = {
                    mass: 0,
                    area: 0,
                    inertia: 0,
                    centre: { x: 0, y: 0 }
                  };
                  for (var i = body.parts.length === 1 ? 0 : 1; i < body.parts.length; i++) {
                    var part = body.parts[i], mass = part.mass !== Infinity ? part.mass : 1;
                    properties.mass += mass;
                    properties.area += part.area;
                    properties.inertia += part.inertia;
                    properties.centre = Vector.add(properties.centre, Vector.mult(part.position, mass));
                  }
                  properties.centre = Vector.div(properties.centre, properties.mass);
                  return properties;
                };
              })();
            }),
            /* 5 */
            /***/
            (function(module2, exports2, __webpack_require__) {
              var Events = {};
              module2.exports = Events;
              var Common = __webpack_require__(0);
              (function() {
                Events.on = function(object, eventNames, callback) {
                  var names = eventNames.split(" "), name;
                  for (var i = 0; i < names.length; i++) {
                    name = names[i];
                    object.events = object.events || {};
                    object.events[name] = object.events[name] || [];
                    object.events[name].push(callback);
                  }
                  return callback;
                };
                Events.off = function(object, eventNames, callback) {
                  if (!eventNames) {
                    object.events = {};
                    return;
                  }
                  if (typeof eventNames === "function") {
                    callback = eventNames;
                    eventNames = Common.keys(object.events).join(" ");
                  }
                  var names = eventNames.split(" ");
                  for (var i = 0; i < names.length; i++) {
                    var callbacks = object.events[names[i]], newCallbacks = [];
                    if (callback && callbacks) {
                      for (var j = 0; j < callbacks.length; j++) {
                        if (callbacks[j] !== callback)
                          newCallbacks.push(callbacks[j]);
                      }
                    }
                    object.events[names[i]] = newCallbacks;
                  }
                };
                Events.trigger = function(object, eventNames, event) {
                  var names, name, callbacks, eventClone;
                  var events = object.events;
                  if (events && Common.keys(events).length > 0) {
                    if (!event)
                      event = {};
                    names = eventNames.split(" ");
                    for (var i = 0; i < names.length; i++) {
                      name = names[i];
                      callbacks = events[name];
                      if (callbacks) {
                        eventClone = Common.clone(event, false);
                        eventClone.name = name;
                        eventClone.source = object;
                        for (var j = 0; j < callbacks.length; j++) {
                          callbacks[j].apply(object, [eventClone]);
                        }
                      }
                    }
                  }
                };
              })();
            }),
            /* 6 */
            /***/
            (function(module2, exports2, __webpack_require__) {
              var Composite = {};
              module2.exports = Composite;
              var Events = __webpack_require__(5);
              var Common = __webpack_require__(0);
              var Bounds = __webpack_require__(1);
              var Body = __webpack_require__(4);
              (function() {
                Composite.create = function(options) {
                  return Common.extend({
                    id: Common.nextId(),
                    type: "composite",
                    parent: null,
                    isModified: false,
                    bodies: [],
                    constraints: [],
                    composites: [],
                    label: "Composite",
                    plugin: {},
                    cache: {
                      allBodies: null,
                      allConstraints: null,
                      allComposites: null
                    }
                  }, options);
                };
                Composite.setModified = function(composite, isModified, updateParents, updateChildren) {
                  composite.isModified = isModified;
                  if (isModified && composite.cache) {
                    composite.cache.allBodies = null;
                    composite.cache.allConstraints = null;
                    composite.cache.allComposites = null;
                  }
                  if (updateParents && composite.parent) {
                    Composite.setModified(composite.parent, isModified, updateParents, updateChildren);
                  }
                  if (updateChildren) {
                    for (var i = 0; i < composite.composites.length; i++) {
                      var childComposite = composite.composites[i];
                      Composite.setModified(childComposite, isModified, updateParents, updateChildren);
                    }
                  }
                };
                Composite.add = function(composite, object) {
                  var objects = [].concat(object);
                  Events.trigger(composite, "beforeAdd", { object });
                  for (var i = 0; i < objects.length; i++) {
                    var obj = objects[i];
                    switch (obj.type) {
                      case "body":
                        if (obj.parent !== obj) {
                          Common.warn("Composite.add: skipped adding a compound body part (you must add its parent instead)");
                          break;
                        }
                        Composite.addBody(composite, obj);
                        break;
                      case "constraint":
                        Composite.addConstraint(composite, obj);
                        break;
                      case "composite":
                        Composite.addComposite(composite, obj);
                        break;
                      case "mouseConstraint":
                        Composite.addConstraint(composite, obj.constraint);
                        break;
                    }
                  }
                  Events.trigger(composite, "afterAdd", { object });
                  return composite;
                };
                Composite.remove = function(composite, object, deep) {
                  var objects = [].concat(object);
                  Events.trigger(composite, "beforeRemove", { object });
                  for (var i = 0; i < objects.length; i++) {
                    var obj = objects[i];
                    switch (obj.type) {
                      case "body":
                        Composite.removeBody(composite, obj, deep);
                        break;
                      case "constraint":
                        Composite.removeConstraint(composite, obj, deep);
                        break;
                      case "composite":
                        Composite.removeComposite(composite, obj, deep);
                        break;
                      case "mouseConstraint":
                        Composite.removeConstraint(composite, obj.constraint);
                        break;
                    }
                  }
                  Events.trigger(composite, "afterRemove", { object });
                  return composite;
                };
                Composite.addComposite = function(compositeA, compositeB) {
                  compositeA.composites.push(compositeB);
                  compositeB.parent = compositeA;
                  Composite.setModified(compositeA, true, true, false);
                  return compositeA;
                };
                Composite.removeComposite = function(compositeA, compositeB, deep) {
                  var position = Common.indexOf(compositeA.composites, compositeB);
                  if (position !== -1) {
                    var bodies = Composite.allBodies(compositeB);
                    Composite.removeCompositeAt(compositeA, position);
                    for (var i = 0; i < bodies.length; i++) {
                      bodies[i].sleepCounter = 0;
                    }
                  }
                  if (deep) {
                    for (var i = 0; i < compositeA.composites.length; i++) {
                      Composite.removeComposite(compositeA.composites[i], compositeB, true);
                    }
                  }
                  return compositeA;
                };
                Composite.removeCompositeAt = function(composite, position) {
                  composite.composites.splice(position, 1);
                  Composite.setModified(composite, true, true, false);
                  return composite;
                };
                Composite.addBody = function(composite, body) {
                  composite.bodies.push(body);
                  Composite.setModified(composite, true, true, false);
                  return composite;
                };
                Composite.removeBody = function(composite, body, deep) {
                  var position = Common.indexOf(composite.bodies, body);
                  if (position !== -1) {
                    Composite.removeBodyAt(composite, position);
                    body.sleepCounter = 0;
                  }
                  if (deep) {
                    for (var i = 0; i < composite.composites.length; i++) {
                      Composite.removeBody(composite.composites[i], body, true);
                    }
                  }
                  return composite;
                };
                Composite.removeBodyAt = function(composite, position) {
                  composite.bodies.splice(position, 1);
                  Composite.setModified(composite, true, true, false);
                  return composite;
                };
                Composite.addConstraint = function(composite, constraint) {
                  composite.constraints.push(constraint);
                  Composite.setModified(composite, true, true, false);
                  return composite;
                };
                Composite.removeConstraint = function(composite, constraint, deep) {
                  var position = Common.indexOf(composite.constraints, constraint);
                  if (position !== -1) {
                    Composite.removeConstraintAt(composite, position);
                  }
                  if (deep) {
                    for (var i = 0; i < composite.composites.length; i++) {
                      Composite.removeConstraint(composite.composites[i], constraint, true);
                    }
                  }
                  return composite;
                };
                Composite.removeConstraintAt = function(composite, position) {
                  composite.constraints.splice(position, 1);
                  Composite.setModified(composite, true, true, false);
                  return composite;
                };
                Composite.clear = function(composite, keepStatic, deep) {
                  if (deep) {
                    for (var i = 0; i < composite.composites.length; i++) {
                      Composite.clear(composite.composites[i], keepStatic, true);
                    }
                  }
                  if (keepStatic) {
                    composite.bodies = composite.bodies.filter(function(body) {
                      return body.isStatic;
                    });
                  } else {
                    composite.bodies.length = 0;
                  }
                  composite.constraints.length = 0;
                  composite.composites.length = 0;
                  Composite.setModified(composite, true, true, false);
                  return composite;
                };
                Composite.allBodies = function(composite) {
                  if (composite.cache && composite.cache.allBodies) {
                    return composite.cache.allBodies;
                  }
                  var bodies = [].concat(composite.bodies);
                  for (var i = 0; i < composite.composites.length; i++)
                    bodies = bodies.concat(Composite.allBodies(composite.composites[i]));
                  if (composite.cache) {
                    composite.cache.allBodies = bodies;
                  }
                  return bodies;
                };
                Composite.allConstraints = function(composite) {
                  if (composite.cache && composite.cache.allConstraints) {
                    return composite.cache.allConstraints;
                  }
                  var constraints = [].concat(composite.constraints);
                  for (var i = 0; i < composite.composites.length; i++)
                    constraints = constraints.concat(Composite.allConstraints(composite.composites[i]));
                  if (composite.cache) {
                    composite.cache.allConstraints = constraints;
                  }
                  return constraints;
                };
                Composite.allComposites = function(composite) {
                  if (composite.cache && composite.cache.allComposites) {
                    return composite.cache.allComposites;
                  }
                  var composites = [].concat(composite.composites);
                  for (var i = 0; i < composite.composites.length; i++)
                    composites = composites.concat(Composite.allComposites(composite.composites[i]));
                  if (composite.cache) {
                    composite.cache.allComposites = composites;
                  }
                  return composites;
                };
                Composite.get = function(composite, id, type) {
                  var objects, object;
                  switch (type) {
                    case "body":
                      objects = Composite.allBodies(composite);
                      break;
                    case "constraint":
                      objects = Composite.allConstraints(composite);
                      break;
                    case "composite":
                      objects = Composite.allComposites(composite).concat(composite);
                      break;
                  }
                  if (!objects)
                    return null;
                  object = objects.filter(function(object2) {
                    return object2.id.toString() === id.toString();
                  });
                  return object.length === 0 ? null : object[0];
                };
                Composite.move = function(compositeA, objects, compositeB) {
                  Composite.remove(compositeA, objects);
                  Composite.add(compositeB, objects);
                  return compositeA;
                };
                Composite.rebase = function(composite) {
                  var objects = Composite.allBodies(composite).concat(Composite.allConstraints(composite)).concat(Composite.allComposites(composite));
                  for (var i = 0; i < objects.length; i++) {
                    objects[i].id = Common.nextId();
                  }
                  return composite;
                };
                Composite.translate = function(composite, translation, recursive) {
                  var bodies = recursive ? Composite.allBodies(composite) : composite.bodies;
                  for (var i = 0; i < bodies.length; i++) {
                    Body.translate(bodies[i], translation);
                  }
                  return composite;
                };
                Composite.rotate = function(composite, rotation, point, recursive) {
                  var cos = Math.cos(rotation), sin = Math.sin(rotation), bodies = recursive ? Composite.allBodies(composite) : composite.bodies;
                  for (var i = 0; i < bodies.length; i++) {
                    var body = bodies[i], dx = body.position.x - point.x, dy = body.position.y - point.y;
                    Body.setPosition(body, {
                      x: point.x + (dx * cos - dy * sin),
                      y: point.y + (dx * sin + dy * cos)
                    });
                    Body.rotate(body, rotation);
                  }
                  return composite;
                };
                Composite.scale = function(composite, scaleX, scaleY, point, recursive) {
                  var bodies = recursive ? Composite.allBodies(composite) : composite.bodies;
                  for (var i = 0; i < bodies.length; i++) {
                    var body = bodies[i], dx = body.position.x - point.x, dy = body.position.y - point.y;
                    Body.setPosition(body, {
                      x: point.x + dx * scaleX,
                      y: point.y + dy * scaleY
                    });
                    Body.scale(body, scaleX, scaleY);
                  }
                  return composite;
                };
                Composite.bounds = function(composite) {
                  var bodies = Composite.allBodies(composite), vertices = [];
                  for (var i = 0; i < bodies.length; i += 1) {
                    var body = bodies[i];
                    vertices.push(body.bounds.min, body.bounds.max);
                  }
                  return Bounds.create(vertices);
                };
              })();
            }),
            /* 7 */
            /***/
            (function(module2, exports2, __webpack_require__) {
              var Sleeping = {};
              module2.exports = Sleeping;
              var Body = __webpack_require__(4);
              var Events = __webpack_require__(5);
              var Common = __webpack_require__(0);
              (function() {
                Sleeping._motionWakeThreshold = 0.18;
                Sleeping._motionSleepThreshold = 0.08;
                Sleeping._minBias = 0.9;
                Sleeping.update = function(bodies, delta) {
                  var timeScale = delta / Common._baseDelta, motionSleepThreshold = Sleeping._motionSleepThreshold;
                  for (var i = 0; i < bodies.length; i++) {
                    var body = bodies[i], speed = Body.getSpeed(body), angularSpeed = Body.getAngularSpeed(body), motion = speed * speed + angularSpeed * angularSpeed;
                    if (body.force.x !== 0 || body.force.y !== 0) {
                      Sleeping.set(body, false);
                      continue;
                    }
                    var minMotion = Math.min(body.motion, motion), maxMotion = Math.max(body.motion, motion);
                    body.motion = Sleeping._minBias * minMotion + (1 - Sleeping._minBias) * maxMotion;
                    if (body.sleepThreshold > 0 && body.motion < motionSleepThreshold) {
                      body.sleepCounter += 1;
                      if (body.sleepCounter >= body.sleepThreshold / timeScale) {
                        Sleeping.set(body, true);
                      }
                    } else if (body.sleepCounter > 0) {
                      body.sleepCounter -= 1;
                    }
                  }
                };
                Sleeping.afterCollisions = function(pairs) {
                  var motionSleepThreshold = Sleeping._motionSleepThreshold;
                  for (var i = 0; i < pairs.length; i++) {
                    var pair = pairs[i];
                    if (!pair.isActive)
                      continue;
                    var collision = pair.collision, bodyA = collision.bodyA.parent, bodyB = collision.bodyB.parent;
                    if (bodyA.isSleeping && bodyB.isSleeping || bodyA.isStatic || bodyB.isStatic)
                      continue;
                    if (bodyA.isSleeping || bodyB.isSleeping) {
                      var sleepingBody = bodyA.isSleeping && !bodyA.isStatic ? bodyA : bodyB, movingBody = sleepingBody === bodyA ? bodyB : bodyA;
                      if (!sleepingBody.isStatic && movingBody.motion > motionSleepThreshold) {
                        Sleeping.set(sleepingBody, false);
                      }
                    }
                  }
                };
                Sleeping.set = function(body, isSleeping) {
                  var wasSleeping = body.isSleeping;
                  if (isSleeping) {
                    body.isSleeping = true;
                    body.sleepCounter = body.sleepThreshold;
                    body.positionImpulse.x = 0;
                    body.positionImpulse.y = 0;
                    body.positionPrev.x = body.position.x;
                    body.positionPrev.y = body.position.y;
                    body.anglePrev = body.angle;
                    body.speed = 0;
                    body.angularSpeed = 0;
                    body.motion = 0;
                    if (!wasSleeping) {
                      Events.trigger(body, "sleepStart");
                    }
                  } else {
                    body.isSleeping = false;
                    body.sleepCounter = 0;
                    if (wasSleeping) {
                      Events.trigger(body, "sleepEnd");
                    }
                  }
                };
              })();
            }),
            /* 8 */
            /***/
            (function(module2, exports2, __webpack_require__) {
              var Collision = {};
              module2.exports = Collision;
              var Vertices = __webpack_require__(3);
              var Pair = __webpack_require__(9);
              (function() {
                var _supports = [];
                var _overlapAB = {
                  overlap: 0,
                  axis: null
                };
                var _overlapBA = {
                  overlap: 0,
                  axis: null
                };
                Collision.create = function(bodyA, bodyB) {
                  return {
                    pair: null,
                    collided: false,
                    bodyA,
                    bodyB,
                    parentA: bodyA.parent,
                    parentB: bodyB.parent,
                    depth: 0,
                    normal: { x: 0, y: 0 },
                    tangent: { x: 0, y: 0 },
                    penetration: { x: 0, y: 0 },
                    supports: [null, null],
                    supportCount: 0
                  };
                };
                Collision.collides = function(bodyA, bodyB, pairs) {
                  Collision._overlapAxes(_overlapAB, bodyA.vertices, bodyB.vertices, bodyA.axes);
                  if (_overlapAB.overlap <= 0) {
                    return null;
                  }
                  Collision._overlapAxes(_overlapBA, bodyB.vertices, bodyA.vertices, bodyB.axes);
                  if (_overlapBA.overlap <= 0) {
                    return null;
                  }
                  var pair = pairs && pairs.table[Pair.id(bodyA, bodyB)], collision;
                  if (!pair) {
                    collision = Collision.create(bodyA, bodyB);
                    collision.collided = true;
                    collision.bodyA = bodyA.id < bodyB.id ? bodyA : bodyB;
                    collision.bodyB = bodyA.id < bodyB.id ? bodyB : bodyA;
                    collision.parentA = collision.bodyA.parent;
                    collision.parentB = collision.bodyB.parent;
                  } else {
                    collision = pair.collision;
                  }
                  bodyA = collision.bodyA;
                  bodyB = collision.bodyB;
                  var minOverlap;
                  if (_overlapAB.overlap < _overlapBA.overlap) {
                    minOverlap = _overlapAB;
                  } else {
                    minOverlap = _overlapBA;
                  }
                  var normal = collision.normal, tangent = collision.tangent, penetration = collision.penetration, supports = collision.supports, depth = minOverlap.overlap, minAxis = minOverlap.axis, normalX = minAxis.x, normalY = minAxis.y, deltaX = bodyB.position.x - bodyA.position.x, deltaY = bodyB.position.y - bodyA.position.y;
                  if (normalX * deltaX + normalY * deltaY >= 0) {
                    normalX = -normalX;
                    normalY = -normalY;
                  }
                  normal.x = normalX;
                  normal.y = normalY;
                  tangent.x = -normalY;
                  tangent.y = normalX;
                  penetration.x = normalX * depth;
                  penetration.y = normalY * depth;
                  collision.depth = depth;
                  var supportsB = Collision._findSupports(bodyA, bodyB, normal, 1), supportCount = 0;
                  if (Vertices.contains(bodyA.vertices, supportsB[0])) {
                    supports[supportCount++] = supportsB[0];
                  }
                  if (Vertices.contains(bodyA.vertices, supportsB[1])) {
                    supports[supportCount++] = supportsB[1];
                  }
                  if (supportCount < 2) {
                    var supportsA = Collision._findSupports(bodyB, bodyA, normal, -1);
                    if (Vertices.contains(bodyB.vertices, supportsA[0])) {
                      supports[supportCount++] = supportsA[0];
                    }
                    if (supportCount < 2 && Vertices.contains(bodyB.vertices, supportsA[1])) {
                      supports[supportCount++] = supportsA[1];
                    }
                  }
                  if (supportCount === 0) {
                    supports[supportCount++] = supportsB[0];
                  }
                  collision.supportCount = supportCount;
                  return collision;
                };
                Collision._overlapAxes = function(result, verticesA, verticesB, axes) {
                  var verticesALength = verticesA.length, verticesBLength = verticesB.length, verticesAX = verticesA[0].x, verticesAY = verticesA[0].y, verticesBX = verticesB[0].x, verticesBY = verticesB[0].y, axesLength = axes.length, overlapMin = Number.MAX_VALUE, overlapAxisNumber = 0, overlap, overlapAB, overlapBA, dot, i, j;
                  for (i = 0; i < axesLength; i++) {
                    var axis = axes[i], axisX = axis.x, axisY = axis.y, minA = verticesAX * axisX + verticesAY * axisY, minB = verticesBX * axisX + verticesBY * axisY, maxA = minA, maxB = minB;
                    for (j = 1; j < verticesALength; j += 1) {
                      dot = verticesA[j].x * axisX + verticesA[j].y * axisY;
                      if (dot > maxA) {
                        maxA = dot;
                      } else if (dot < minA) {
                        minA = dot;
                      }
                    }
                    for (j = 1; j < verticesBLength; j += 1) {
                      dot = verticesB[j].x * axisX + verticesB[j].y * axisY;
                      if (dot > maxB) {
                        maxB = dot;
                      } else if (dot < minB) {
                        minB = dot;
                      }
                    }
                    overlapAB = maxA - minB;
                    overlapBA = maxB - minA;
                    overlap = overlapAB < overlapBA ? overlapAB : overlapBA;
                    if (overlap < overlapMin) {
                      overlapMin = overlap;
                      overlapAxisNumber = i;
                      if (overlap <= 0) {
                        break;
                      }
                    }
                  }
                  result.axis = axes[overlapAxisNumber];
                  result.overlap = overlapMin;
                };
                Collision._findSupports = function(bodyA, bodyB, normal, direction) {
                  var vertices = bodyB.vertices, verticesLength = vertices.length, bodyAPositionX = bodyA.position.x, bodyAPositionY = bodyA.position.y, normalX = normal.x * direction, normalY = normal.y * direction, vertexA = vertices[0], vertexB = vertexA, nearestDistance = normalX * (bodyAPositionX - vertexB.x) + normalY * (bodyAPositionY - vertexB.y), vertexC, distance, j;
                  for (j = 1; j < verticesLength; j += 1) {
                    vertexB = vertices[j];
                    distance = normalX * (bodyAPositionX - vertexB.x) + normalY * (bodyAPositionY - vertexB.y);
                    if (distance < nearestDistance) {
                      nearestDistance = distance;
                      vertexA = vertexB;
                    }
                  }
                  vertexC = vertices[(verticesLength + vertexA.index - 1) % verticesLength];
                  nearestDistance = normalX * (bodyAPositionX - vertexC.x) + normalY * (bodyAPositionY - vertexC.y);
                  vertexB = vertices[(vertexA.index + 1) % verticesLength];
                  if (normalX * (bodyAPositionX - vertexB.x) + normalY * (bodyAPositionY - vertexB.y) < nearestDistance) {
                    _supports[0] = vertexA;
                    _supports[1] = vertexB;
                    return _supports;
                  }
                  _supports[0] = vertexA;
                  _supports[1] = vertexC;
                  return _supports;
                };
              })();
            }),
            /* 9 */
            /***/
            (function(module2, exports2, __webpack_require__) {
              var Pair = {};
              module2.exports = Pair;
              var Contact = __webpack_require__(16);
              (function() {
                Pair.create = function(collision, timestamp) {
                  var bodyA = collision.bodyA, bodyB = collision.bodyB;
                  var pair = {
                    id: Pair.id(bodyA, bodyB),
                    bodyA,
                    bodyB,
                    collision,
                    contacts: [Contact.create(), Contact.create()],
                    contactCount: 0,
                    separation: 0,
                    isActive: true,
                    isSensor: bodyA.isSensor || bodyB.isSensor,
                    timeCreated: timestamp,
                    timeUpdated: timestamp,
                    inverseMass: 0,
                    friction: 0,
                    frictionStatic: 0,
                    restitution: 0,
                    slop: 0
                  };
                  Pair.update(pair, collision, timestamp);
                  return pair;
                };
                Pair.update = function(pair, collision, timestamp) {
                  var supports = collision.supports, supportCount = collision.supportCount, contacts = pair.contacts, parentA = collision.parentA, parentB = collision.parentB;
                  pair.isActive = true;
                  pair.timeUpdated = timestamp;
                  pair.collision = collision;
                  pair.separation = collision.depth;
                  pair.inverseMass = parentA.inverseMass + parentB.inverseMass;
                  pair.friction = parentA.friction < parentB.friction ? parentA.friction : parentB.friction;
                  pair.frictionStatic = parentA.frictionStatic > parentB.frictionStatic ? parentA.frictionStatic : parentB.frictionStatic;
                  pair.restitution = parentA.restitution > parentB.restitution ? parentA.restitution : parentB.restitution;
                  pair.slop = parentA.slop > parentB.slop ? parentA.slop : parentB.slop;
                  pair.contactCount = supportCount;
                  collision.pair = pair;
                  var supportA = supports[0], contactA = contacts[0], supportB = supports[1], contactB = contacts[1];
                  if (contactB.vertex === supportA || contactA.vertex === supportB) {
                    contacts[1] = contactA;
                    contacts[0] = contactA = contactB;
                    contactB = contacts[1];
                  }
                  contactA.vertex = supportA;
                  contactB.vertex = supportB;
                };
                Pair.setActive = function(pair, isActive, timestamp) {
                  if (isActive) {
                    pair.isActive = true;
                    pair.timeUpdated = timestamp;
                  } else {
                    pair.isActive = false;
                    pair.contactCount = 0;
                  }
                };
                Pair.id = function(bodyA, bodyB) {
                  return bodyA.id < bodyB.id ? bodyA.id.toString(36) + ":" + bodyB.id.toString(36) : bodyB.id.toString(36) + ":" + bodyA.id.toString(36);
                };
              })();
            }),
            /* 10 */
            /***/
            (function(module2, exports2, __webpack_require__) {
              var Constraint = {};
              module2.exports = Constraint;
              var Vertices = __webpack_require__(3);
              var Vector = __webpack_require__(2);
              var Sleeping = __webpack_require__(7);
              var Bounds = __webpack_require__(1);
              var Axes = __webpack_require__(11);
              var Common = __webpack_require__(0);
              (function() {
                Constraint._warming = 0.4;
                Constraint._torqueDampen = 1;
                Constraint._minLength = 1e-6;
                Constraint.create = function(options) {
                  var constraint = options;
                  if (constraint.bodyA && !constraint.pointA)
                    constraint.pointA = { x: 0, y: 0 };
                  if (constraint.bodyB && !constraint.pointB)
                    constraint.pointB = { x: 0, y: 0 };
                  var initialPointA = constraint.bodyA ? Vector.add(constraint.bodyA.position, constraint.pointA) : constraint.pointA, initialPointB = constraint.bodyB ? Vector.add(constraint.bodyB.position, constraint.pointB) : constraint.pointB, length = Vector.magnitude(Vector.sub(initialPointA, initialPointB));
                  constraint.length = typeof constraint.length !== "undefined" ? constraint.length : length;
                  constraint.id = constraint.id || Common.nextId();
                  constraint.label = constraint.label || "Constraint";
                  constraint.type = "constraint";
                  constraint.stiffness = constraint.stiffness || (constraint.length > 0 ? 1 : 0.7);
                  constraint.damping = constraint.damping || 0;
                  constraint.angularStiffness = constraint.angularStiffness || 0;
                  constraint.angleA = constraint.bodyA ? constraint.bodyA.angle : constraint.angleA;
                  constraint.angleB = constraint.bodyB ? constraint.bodyB.angle : constraint.angleB;
                  constraint.plugin = {};
                  var render = {
                    visible: true,
                    lineWidth: 2,
                    strokeStyle: "#ffffff",
                    type: "line",
                    anchors: true
                  };
                  if (constraint.length === 0 && constraint.stiffness > 0.1) {
                    render.type = "pin";
                    render.anchors = false;
                  } else if (constraint.stiffness < 0.9) {
                    render.type = "spring";
                  }
                  constraint.render = Common.extend(render, constraint.render);
                  return constraint;
                };
                Constraint.preSolveAll = function(bodies) {
                  for (var i = 0; i < bodies.length; i += 1) {
                    var body = bodies[i], impulse = body.constraintImpulse;
                    if (body.isStatic || impulse.x === 0 && impulse.y === 0 && impulse.angle === 0) {
                      continue;
                    }
                    body.position.x += impulse.x;
                    body.position.y += impulse.y;
                    body.angle += impulse.angle;
                  }
                };
                Constraint.solveAll = function(constraints, delta) {
                  var timeScale = Common.clamp(delta / Common._baseDelta, 0, 1);
                  for (var i = 0; i < constraints.length; i += 1) {
                    var constraint = constraints[i], fixedA = !constraint.bodyA || constraint.bodyA && constraint.bodyA.isStatic, fixedB = !constraint.bodyB || constraint.bodyB && constraint.bodyB.isStatic;
                    if (fixedA || fixedB) {
                      Constraint.solve(constraints[i], timeScale);
                    }
                  }
                  for (i = 0; i < constraints.length; i += 1) {
                    constraint = constraints[i];
                    fixedA = !constraint.bodyA || constraint.bodyA && constraint.bodyA.isStatic;
                    fixedB = !constraint.bodyB || constraint.bodyB && constraint.bodyB.isStatic;
                    if (!fixedA && !fixedB) {
                      Constraint.solve(constraints[i], timeScale);
                    }
                  }
                };
                Constraint.solve = function(constraint, timeScale) {
                  var bodyA = constraint.bodyA, bodyB = constraint.bodyB, pointA = constraint.pointA, pointB = constraint.pointB;
                  if (!bodyA && !bodyB)
                    return;
                  if (bodyA && !bodyA.isStatic) {
                    Vector.rotate(pointA, bodyA.angle - constraint.angleA, pointA);
                    constraint.angleA = bodyA.angle;
                  }
                  if (bodyB && !bodyB.isStatic) {
                    Vector.rotate(pointB, bodyB.angle - constraint.angleB, pointB);
                    constraint.angleB = bodyB.angle;
                  }
                  var pointAWorld = pointA, pointBWorld = pointB;
                  if (bodyA) pointAWorld = Vector.add(bodyA.position, pointA);
                  if (bodyB) pointBWorld = Vector.add(bodyB.position, pointB);
                  if (!pointAWorld || !pointBWorld)
                    return;
                  var delta = Vector.sub(pointAWorld, pointBWorld), currentLength = Vector.magnitude(delta);
                  if (currentLength < Constraint._minLength) {
                    currentLength = Constraint._minLength;
                  }
                  var difference = (currentLength - constraint.length) / currentLength, isRigid = constraint.stiffness >= 1 || constraint.length === 0, stiffness = isRigid ? constraint.stiffness * timeScale : constraint.stiffness * timeScale * timeScale, damping = constraint.damping * timeScale, force = Vector.mult(delta, difference * stiffness), massTotal = (bodyA ? bodyA.inverseMass : 0) + (bodyB ? bodyB.inverseMass : 0), inertiaTotal = (bodyA ? bodyA.inverseInertia : 0) + (bodyB ? bodyB.inverseInertia : 0), resistanceTotal = massTotal + inertiaTotal, torque, share, normal, normalVelocity, relativeVelocity;
                  if (damping > 0) {
                    var zero = Vector.create();
                    normal = Vector.div(delta, currentLength);
                    relativeVelocity = Vector.sub(
                      bodyB && Vector.sub(bodyB.position, bodyB.positionPrev) || zero,
                      bodyA && Vector.sub(bodyA.position, bodyA.positionPrev) || zero
                    );
                    normalVelocity = Vector.dot(normal, relativeVelocity);
                  }
                  if (bodyA && !bodyA.isStatic) {
                    share = bodyA.inverseMass / massTotal;
                    bodyA.constraintImpulse.x -= force.x * share;
                    bodyA.constraintImpulse.y -= force.y * share;
                    bodyA.position.x -= force.x * share;
                    bodyA.position.y -= force.y * share;
                    if (damping > 0) {
                      bodyA.positionPrev.x -= damping * normal.x * normalVelocity * share;
                      bodyA.positionPrev.y -= damping * normal.y * normalVelocity * share;
                    }
                    torque = Vector.cross(pointA, force) / resistanceTotal * Constraint._torqueDampen * bodyA.inverseInertia * (1 - constraint.angularStiffness);
                    bodyA.constraintImpulse.angle -= torque;
                    bodyA.angle -= torque;
                  }
                  if (bodyB && !bodyB.isStatic) {
                    share = bodyB.inverseMass / massTotal;
                    bodyB.constraintImpulse.x += force.x * share;
                    bodyB.constraintImpulse.y += force.y * share;
                    bodyB.position.x += force.x * share;
                    bodyB.position.y += force.y * share;
                    if (damping > 0) {
                      bodyB.positionPrev.x += damping * normal.x * normalVelocity * share;
                      bodyB.positionPrev.y += damping * normal.y * normalVelocity * share;
                    }
                    torque = Vector.cross(pointB, force) / resistanceTotal * Constraint._torqueDampen * bodyB.inverseInertia * (1 - constraint.angularStiffness);
                    bodyB.constraintImpulse.angle += torque;
                    bodyB.angle += torque;
                  }
                };
                Constraint.postSolveAll = function(bodies) {
                  for (var i = 0; i < bodies.length; i++) {
                    var body = bodies[i], impulse = body.constraintImpulse;
                    if (body.isStatic || impulse.x === 0 && impulse.y === 0 && impulse.angle === 0) {
                      continue;
                    }
                    Sleeping.set(body, false);
                    for (var j = 0; j < body.parts.length; j++) {
                      var part = body.parts[j];
                      Vertices.translate(part.vertices, impulse);
                      if (j > 0) {
                        part.position.x += impulse.x;
                        part.position.y += impulse.y;
                      }
                      if (impulse.angle !== 0) {
                        Vertices.rotate(part.vertices, impulse.angle, body.position);
                        Axes.rotate(part.axes, impulse.angle);
                        if (j > 0) {
                          Vector.rotateAbout(part.position, impulse.angle, body.position, part.position);
                        }
                      }
                      Bounds.update(part.bounds, part.vertices, body.velocity);
                    }
                    impulse.angle *= Constraint._warming;
                    impulse.x *= Constraint._warming;
                    impulse.y *= Constraint._warming;
                  }
                };
                Constraint.pointAWorld = function(constraint) {
                  return {
                    x: (constraint.bodyA ? constraint.bodyA.position.x : 0) + (constraint.pointA ? constraint.pointA.x : 0),
                    y: (constraint.bodyA ? constraint.bodyA.position.y : 0) + (constraint.pointA ? constraint.pointA.y : 0)
                  };
                };
                Constraint.pointBWorld = function(constraint) {
                  return {
                    x: (constraint.bodyB ? constraint.bodyB.position.x : 0) + (constraint.pointB ? constraint.pointB.x : 0),
                    y: (constraint.bodyB ? constraint.bodyB.position.y : 0) + (constraint.pointB ? constraint.pointB.y : 0)
                  };
                };
                Constraint.currentLength = function(constraint) {
                  var pointAX = (constraint.bodyA ? constraint.bodyA.position.x : 0) + (constraint.pointA ? constraint.pointA.x : 0);
                  var pointAY = (constraint.bodyA ? constraint.bodyA.position.y : 0) + (constraint.pointA ? constraint.pointA.y : 0);
                  var pointBX = (constraint.bodyB ? constraint.bodyB.position.x : 0) + (constraint.pointB ? constraint.pointB.x : 0);
                  var pointBY = (constraint.bodyB ? constraint.bodyB.position.y : 0) + (constraint.pointB ? constraint.pointB.y : 0);
                  var deltaX = pointAX - pointBX;
                  var deltaY = pointAY - pointBY;
                  return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
                };
              })();
            }),
            /* 11 */
            /***/
            (function(module2, exports2, __webpack_require__) {
              var Axes = {};
              module2.exports = Axes;
              var Vector = __webpack_require__(2);
              var Common = __webpack_require__(0);
              (function() {
                Axes.fromVertices = function(vertices) {
                  var axes = {};
                  for (var i = 0; i < vertices.length; i++) {
                    var j = (i + 1) % vertices.length, normal = Vector.normalise({
                      x: vertices[j].y - vertices[i].y,
                      y: vertices[i].x - vertices[j].x
                    }), gradient = normal.y === 0 ? Infinity : normal.x / normal.y;
                    gradient = gradient.toFixed(3).toString();
                    axes[gradient] = normal;
                  }
                  return Common.values(axes);
                };
                Axes.rotate = function(axes, angle) {
                  if (angle === 0)
                    return;
                  var cos = Math.cos(angle), sin = Math.sin(angle);
                  for (var i = 0; i < axes.length; i++) {
                    var axis = axes[i], xx;
                    xx = axis.x * cos - axis.y * sin;
                    axis.y = axis.x * sin + axis.y * cos;
                    axis.x = xx;
                  }
                };
              })();
            }),
            /* 12 */
            /***/
            (function(module2, exports2, __webpack_require__) {
              var Bodies = {};
              module2.exports = Bodies;
              var Vertices = __webpack_require__(3);
              var Common = __webpack_require__(0);
              var Body = __webpack_require__(4);
              var Bounds = __webpack_require__(1);
              var Vector = __webpack_require__(2);
              (function() {
                Bodies.rectangle = function(x, y, width, height, options) {
                  options = options || {};
                  var rectangle = {
                    label: "Rectangle Body",
                    position: { x, y },
                    vertices: Vertices.fromPath("L 0 0 L " + width + " 0 L " + width + " " + height + " L 0 " + height)
                  };
                  if (options.chamfer) {
                    var chamfer = options.chamfer;
                    rectangle.vertices = Vertices.chamfer(
                      rectangle.vertices,
                      chamfer.radius,
                      chamfer.quality,
                      chamfer.qualityMin,
                      chamfer.qualityMax
                    );
                    delete options.chamfer;
                  }
                  return Body.create(Common.extend({}, rectangle, options));
                };
                Bodies.trapezoid = function(x, y, width, height, slope, options) {
                  options = options || {};
                  if (slope >= 1) {
                    Common.warn("Bodies.trapezoid: slope parameter must be < 1.");
                  }
                  slope *= 0.5;
                  var roof = (1 - slope * 2) * width;
                  var x1 = width * slope, x2 = x1 + roof, x3 = x2 + x1, verticesPath;
                  if (slope < 0.5) {
                    verticesPath = "L 0 0 L " + x1 + " " + -height + " L " + x2 + " " + -height + " L " + x3 + " 0";
                  } else {
                    verticesPath = "L 0 0 L " + x2 + " " + -height + " L " + x3 + " 0";
                  }
                  var trapezoid = {
                    label: "Trapezoid Body",
                    position: { x, y },
                    vertices: Vertices.fromPath(verticesPath)
                  };
                  if (options.chamfer) {
                    var chamfer = options.chamfer;
                    trapezoid.vertices = Vertices.chamfer(
                      trapezoid.vertices,
                      chamfer.radius,
                      chamfer.quality,
                      chamfer.qualityMin,
                      chamfer.qualityMax
                    );
                    delete options.chamfer;
                  }
                  return Body.create(Common.extend({}, trapezoid, options));
                };
                Bodies.circle = function(x, y, radius, options, maxSides) {
                  options = options || {};
                  var circle = {
                    label: "Circle Body",
                    circleRadius: radius
                  };
                  maxSides = maxSides || 25;
                  var sides = Math.ceil(Math.max(10, Math.min(maxSides, radius)));
                  if (sides % 2 === 1)
                    sides += 1;
                  return Bodies.polygon(x, y, sides, radius, Common.extend({}, circle, options));
                };
                Bodies.polygon = function(x, y, sides, radius, options) {
                  options = options || {};
                  if (sides < 3)
                    return Bodies.circle(x, y, radius, options);
                  var theta = 2 * Math.PI / sides, path = "", offset = theta * 0.5;
                  for (var i = 0; i < sides; i += 1) {
                    var angle = offset + i * theta, xx = Math.cos(angle) * radius, yy = Math.sin(angle) * radius;
                    path += "L " + xx.toFixed(3) + " " + yy.toFixed(3) + " ";
                  }
                  var polygon = {
                    label: "Polygon Body",
                    position: { x, y },
                    vertices: Vertices.fromPath(path)
                  };
                  if (options.chamfer) {
                    var chamfer = options.chamfer;
                    polygon.vertices = Vertices.chamfer(
                      polygon.vertices,
                      chamfer.radius,
                      chamfer.quality,
                      chamfer.qualityMin,
                      chamfer.qualityMax
                    );
                    delete options.chamfer;
                  }
                  return Body.create(Common.extend({}, polygon, options));
                };
                Bodies.fromVertices = function(x, y, vertexSets, options, flagInternal, removeCollinear, minimumArea, removeDuplicatePoints) {
                  var decomp = Common.getDecomp(), canDecomp, body, parts, isConvex, isConcave, vertices, i, j, k, v, z;
                  canDecomp = Boolean(decomp && decomp.quickDecomp);
                  options = options || {};
                  parts = [];
                  flagInternal = typeof flagInternal !== "undefined" ? flagInternal : false;
                  removeCollinear = typeof removeCollinear !== "undefined" ? removeCollinear : 0.01;
                  minimumArea = typeof minimumArea !== "undefined" ? minimumArea : 10;
                  removeDuplicatePoints = typeof removeDuplicatePoints !== "undefined" ? removeDuplicatePoints : 0.01;
                  if (!Common.isArray(vertexSets[0])) {
                    vertexSets = [vertexSets];
                  }
                  for (v = 0; v < vertexSets.length; v += 1) {
                    vertices = vertexSets[v];
                    isConvex = Vertices.isConvex(vertices);
                    isConcave = !isConvex;
                    if (isConcave && !canDecomp) {
                      Common.warnOnce(
                        "Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices."
                      );
                    }
                    if (isConvex || !canDecomp) {
                      if (isConvex) {
                        vertices = Vertices.clockwiseSort(vertices);
                      } else {
                        vertices = Vertices.hull(vertices);
                      }
                      parts.push({
                        position: { x, y },
                        vertices
                      });
                    } else {
                      var concave = vertices.map(function(vertex) {
                        return [vertex.x, vertex.y];
                      });
                      decomp.makeCCW(concave);
                      if (removeCollinear !== false)
                        decomp.removeCollinearPoints(concave, removeCollinear);
                      if (removeDuplicatePoints !== false && decomp.removeDuplicatePoints)
                        decomp.removeDuplicatePoints(concave, removeDuplicatePoints);
                      var decomposed = decomp.quickDecomp(concave);
                      for (i = 0; i < decomposed.length; i++) {
                        var chunk = decomposed[i];
                        var chunkVertices = chunk.map(function(vertices2) {
                          return {
                            x: vertices2[0],
                            y: vertices2[1]
                          };
                        });
                        if (minimumArea > 0 && Vertices.area(chunkVertices) < minimumArea)
                          continue;
                        parts.push({
                          position: Vertices.centre(chunkVertices),
                          vertices: chunkVertices
                        });
                      }
                    }
                  }
                  for (i = 0; i < parts.length; i++) {
                    parts[i] = Body.create(Common.extend(parts[i], options));
                  }
                  if (flagInternal) {
                    var coincident_max_dist = 5;
                    for (i = 0; i < parts.length; i++) {
                      var partA = parts[i];
                      for (j = i + 1; j < parts.length; j++) {
                        var partB = parts[j];
                        if (Bounds.overlaps(partA.bounds, partB.bounds)) {
                          var pav = partA.vertices, pbv = partB.vertices;
                          for (k = 0; k < partA.vertices.length; k++) {
                            for (z = 0; z < partB.vertices.length; z++) {
                              var da = Vector.magnitudeSquared(Vector.sub(pav[(k + 1) % pav.length], pbv[z])), db = Vector.magnitudeSquared(Vector.sub(pav[k], pbv[(z + 1) % pbv.length]));
                              if (da < coincident_max_dist && db < coincident_max_dist) {
                                pav[k].isInternal = true;
                                pbv[z].isInternal = true;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  if (parts.length > 1) {
                    body = Body.create(Common.extend({ parts: parts.slice(0) }, options));
                    Body.setPosition(body, { x, y });
                    return body;
                  } else {
                    return parts[0];
                  }
                };
              })();
            }),
            /* 13 */
            /***/
            (function(module2, exports2, __webpack_require__) {
              var Detector = {};
              module2.exports = Detector;
              var Common = __webpack_require__(0);
              var Collision = __webpack_require__(8);
              (function() {
                Detector.create = function(options) {
                  var defaults = {
                    bodies: [],
                    collisions: [],
                    pairs: null
                  };
                  return Common.extend(defaults, options);
                };
                Detector.setBodies = function(detector, bodies) {
                  detector.bodies = bodies.slice(0);
                };
                Detector.clear = function(detector) {
                  detector.bodies = [];
                  detector.collisions = [];
                };
                Detector.collisions = function(detector) {
                  var pairs = detector.pairs, bodies = detector.bodies, bodiesLength = bodies.length, canCollide = Detector.canCollide, collides = Collision.collides, collisions = detector.collisions, collisionIndex = 0, i, j;
                  bodies.sort(Detector._compareBoundsX);
                  for (i = 0; i < bodiesLength; i++) {
                    var bodyA = bodies[i], boundsA = bodyA.bounds, boundXMax = bodyA.bounds.max.x, boundYMax = bodyA.bounds.max.y, boundYMin = bodyA.bounds.min.y, bodyAStatic = bodyA.isStatic || bodyA.isSleeping, partsALength = bodyA.parts.length, partsASingle = partsALength === 1;
                    for (j = i + 1; j < bodiesLength; j++) {
                      var bodyB = bodies[j], boundsB = bodyB.bounds;
                      if (boundsB.min.x > boundXMax) {
                        break;
                      }
                      if (boundYMax < boundsB.min.y || boundYMin > boundsB.max.y) {
                        continue;
                      }
                      if (bodyAStatic && (bodyB.isStatic || bodyB.isSleeping)) {
                        continue;
                      }
                      if (!canCollide(bodyA.collisionFilter, bodyB.collisionFilter)) {
                        continue;
                      }
                      var partsBLength = bodyB.parts.length;
                      if (partsASingle && partsBLength === 1) {
                        var collision = collides(bodyA, bodyB, pairs);
                        if (collision) {
                          collisions[collisionIndex++] = collision;
                        }
                      } else {
                        var partsAStart = partsALength > 1 ? 1 : 0, partsBStart = partsBLength > 1 ? 1 : 0;
                        for (var k = partsAStart; k < partsALength; k++) {
                          var partA = bodyA.parts[k], boundsA = partA.bounds;
                          for (var z = partsBStart; z < partsBLength; z++) {
                            var partB = bodyB.parts[z], boundsB = partB.bounds;
                            if (boundsA.min.x > boundsB.max.x || boundsA.max.x < boundsB.min.x || boundsA.max.y < boundsB.min.y || boundsA.min.y > boundsB.max.y) {
                              continue;
                            }
                            var collision = collides(partA, partB, pairs);
                            if (collision) {
                              collisions[collisionIndex++] = collision;
                            }
                          }
                        }
                      }
                    }
                  }
                  if (collisions.length !== collisionIndex) {
                    collisions.length = collisionIndex;
                  }
                  return collisions;
                };
                Detector.canCollide = function(filterA, filterB) {
                  if (filterA.group === filterB.group && filterA.group !== 0)
                    return filterA.group > 0;
                  return (filterA.mask & filterB.category) !== 0 && (filterB.mask & filterA.category) !== 0;
                };
                Detector._compareBoundsX = function(bodyA, bodyB) {
                  return bodyA.bounds.min.x - bodyB.bounds.min.x;
                };
              })();
            }),
            /* 14 */
            /***/
            (function(module2, exports2, __webpack_require__) {
              var Mouse = {};
              module2.exports = Mouse;
              var Common = __webpack_require__(0);
              (function() {
                Mouse.create = function(element) {
                  var mouse = {};
                  if (!element) {
                    Common.log("Mouse.create: element was undefined, defaulting to document.body", "warn");
                  }
                  mouse.element = element || document.body;
                  mouse.absolute = { x: 0, y: 0 };
                  mouse.position = { x: 0, y: 0 };
                  mouse.mousedownPosition = { x: 0, y: 0 };
                  mouse.mouseupPosition = { x: 0, y: 0 };
                  mouse.offset = { x: 0, y: 0 };
                  mouse.scale = { x: 1, y: 1 };
                  mouse.wheelDelta = 0;
                  mouse.button = -1;
                  mouse.pixelRatio = parseInt(mouse.element.getAttribute("data-pixel-ratio"), 10) || 1;
                  mouse.sourceEvents = {
                    mousemove: null,
                    mousedown: null,
                    mouseup: null,
                    mousewheel: null
                  };
                  mouse.mousemove = function(event) {
                    var position = Mouse._getRelativeMousePosition(event, mouse.element, mouse.pixelRatio), touches = event.changedTouches;
                    if (touches) {
                      mouse.button = 0;
                      event.preventDefault();
                    }
                    mouse.absolute.x = position.x;
                    mouse.absolute.y = position.y;
                    mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
                    mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
                    mouse.sourceEvents.mousemove = event;
                  };
                  mouse.mousedown = function(event) {
                    var position = Mouse._getRelativeMousePosition(event, mouse.element, mouse.pixelRatio), touches = event.changedTouches;
                    if (touches) {
                      mouse.button = 0;
                      event.preventDefault();
                    } else {
                      mouse.button = event.button;
                    }
                    mouse.absolute.x = position.x;
                    mouse.absolute.y = position.y;
                    mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
                    mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
                    mouse.mousedownPosition.x = mouse.position.x;
                    mouse.mousedownPosition.y = mouse.position.y;
                    mouse.sourceEvents.mousedown = event;
                  };
                  mouse.mouseup = function(event) {
                    var position = Mouse._getRelativeMousePosition(event, mouse.element, mouse.pixelRatio), touches = event.changedTouches;
                    if (touches) {
                      event.preventDefault();
                    }
                    mouse.button = -1;
                    mouse.absolute.x = position.x;
                    mouse.absolute.y = position.y;
                    mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
                    mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
                    mouse.mouseupPosition.x = mouse.position.x;
                    mouse.mouseupPosition.y = mouse.position.y;
                    mouse.sourceEvents.mouseup = event;
                  };
                  mouse.mousewheel = function(event) {
                    mouse.wheelDelta = Math.max(-1, Math.min(1, event.wheelDelta || -event.detail));
                    event.preventDefault();
                    mouse.sourceEvents.mousewheel = event;
                  };
                  Mouse.setElement(mouse, mouse.element);
                  return mouse;
                };
                Mouse.setElement = function(mouse, element) {
                  mouse.element = element;
                  element.addEventListener("mousemove", mouse.mousemove, { passive: true });
                  element.addEventListener("mousedown", mouse.mousedown, { passive: true });
                  element.addEventListener("mouseup", mouse.mouseup, { passive: true });
                  element.addEventListener("wheel", mouse.mousewheel, { passive: false });
                  element.addEventListener("touchmove", mouse.mousemove, { passive: false });
                  element.addEventListener("touchstart", mouse.mousedown, { passive: false });
                  element.addEventListener("touchend", mouse.mouseup, { passive: false });
                };
                Mouse.clearSourceEvents = function(mouse) {
                  mouse.sourceEvents.mousemove = null;
                  mouse.sourceEvents.mousedown = null;
                  mouse.sourceEvents.mouseup = null;
                  mouse.sourceEvents.mousewheel = null;
                  mouse.wheelDelta = 0;
                };
                Mouse.setOffset = function(mouse, offset) {
                  mouse.offset.x = offset.x;
                  mouse.offset.y = offset.y;
                  mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
                  mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
                };
                Mouse.setScale = function(mouse, scale) {
                  mouse.scale.x = scale.x;
                  mouse.scale.y = scale.y;
                  mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
                  mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
                };
                Mouse._getRelativeMousePosition = function(event, element, pixelRatio) {
                  var elementBounds = element.getBoundingClientRect(), rootNode = document.documentElement || document.body.parentNode || document.body, scrollX = window.pageXOffset !== void 0 ? window.pageXOffset : rootNode.scrollLeft, scrollY = window.pageYOffset !== void 0 ? window.pageYOffset : rootNode.scrollTop, touches = event.changedTouches, x, y;
                  if (touches) {
                    x = touches[0].pageX - elementBounds.left - scrollX;
                    y = touches[0].pageY - elementBounds.top - scrollY;
                  } else {
                    x = event.pageX - elementBounds.left - scrollX;
                    y = event.pageY - elementBounds.top - scrollY;
                  }
                  return {
                    x: x / (element.clientWidth / (element.width || element.clientWidth) * pixelRatio),
                    y: y / (element.clientHeight / (element.height || element.clientHeight) * pixelRatio)
                  };
                };
              })();
            }),
            /* 15 */
            /***/
            (function(module2, exports2, __webpack_require__) {
              var Plugin = {};
              module2.exports = Plugin;
              var Common = __webpack_require__(0);
              (function() {
                Plugin._registry = {};
                Plugin.register = function(plugin) {
                  if (!Plugin.isPlugin(plugin)) {
                    Common.warn("Plugin.register:", Plugin.toString(plugin), "does not implement all required fields.");
                  }
                  if (plugin.name in Plugin._registry) {
                    var registered = Plugin._registry[plugin.name], pluginVersion = Plugin.versionParse(plugin.version).number, registeredVersion = Plugin.versionParse(registered.version).number;
                    if (pluginVersion > registeredVersion) {
                      Common.warn("Plugin.register:", Plugin.toString(registered), "was upgraded to", Plugin.toString(plugin));
                      Plugin._registry[plugin.name] = plugin;
                    } else if (pluginVersion < registeredVersion) {
                      Common.warn("Plugin.register:", Plugin.toString(registered), "can not be downgraded to", Plugin.toString(plugin));
                    } else if (plugin !== registered) {
                      Common.warn("Plugin.register:", Plugin.toString(plugin), "is already registered to different plugin object");
                    }
                  } else {
                    Plugin._registry[plugin.name] = plugin;
                  }
                  return plugin;
                };
                Plugin.resolve = function(dependency) {
                  return Plugin._registry[Plugin.dependencyParse(dependency).name];
                };
                Plugin.toString = function(plugin) {
                  return typeof plugin === "string" ? plugin : (plugin.name || "anonymous") + "@" + (plugin.version || plugin.range || "0.0.0");
                };
                Plugin.isPlugin = function(obj) {
                  return obj && obj.name && obj.version && obj.install;
                };
                Plugin.isUsed = function(module3, name) {
                  return module3.used.indexOf(name) > -1;
                };
                Plugin.isFor = function(plugin, module3) {
                  var parsed = plugin.for && Plugin.dependencyParse(plugin.for);
                  return !plugin.for || module3.name === parsed.name && Plugin.versionSatisfies(module3.version, parsed.range);
                };
                Plugin.use = function(module3, plugins) {
                  module3.uses = (module3.uses || []).concat(plugins || []);
                  if (module3.uses.length === 0) {
                    Common.warn("Plugin.use:", Plugin.toString(module3), "does not specify any dependencies to install.");
                    return;
                  }
                  var dependencies = Plugin.dependencies(module3), sortedDependencies = Common.topologicalSort(dependencies), status = [];
                  for (var i = 0; i < sortedDependencies.length; i += 1) {
                    if (sortedDependencies[i] === module3.name) {
                      continue;
                    }
                    var plugin = Plugin.resolve(sortedDependencies[i]);
                    if (!plugin) {
                      status.push("\u274C " + sortedDependencies[i]);
                      continue;
                    }
                    if (Plugin.isUsed(module3, plugin.name)) {
                      continue;
                    }
                    if (!Plugin.isFor(plugin, module3)) {
                      Common.warn("Plugin.use:", Plugin.toString(plugin), "is for", plugin.for, "but installed on", Plugin.toString(module3) + ".");
                      plugin._warned = true;
                    }
                    if (plugin.install) {
                      plugin.install(module3);
                    } else {
                      Common.warn("Plugin.use:", Plugin.toString(plugin), "does not specify an install function.");
                      plugin._warned = true;
                    }
                    if (plugin._warned) {
                      status.push("\u{1F536} " + Plugin.toString(plugin));
                      delete plugin._warned;
                    } else {
                      status.push("\u2705 " + Plugin.toString(plugin));
                    }
                    module3.used.push(plugin.name);
                  }
                  if (status.length > 0) {
                    Common.info(status.join("  "));
                  }
                };
                Plugin.dependencies = function(module3, tracked) {
                  var parsedBase = Plugin.dependencyParse(module3), name = parsedBase.name;
                  tracked = tracked || {};
                  if (name in tracked) {
                    return;
                  }
                  module3 = Plugin.resolve(module3) || module3;
                  tracked[name] = Common.map(module3.uses || [], function(dependency) {
                    if (Plugin.isPlugin(dependency)) {
                      Plugin.register(dependency);
                    }
                    var parsed = Plugin.dependencyParse(dependency), resolved = Plugin.resolve(dependency);
                    if (resolved && !Plugin.versionSatisfies(resolved.version, parsed.range)) {
                      Common.warn(
                        "Plugin.dependencies:",
                        Plugin.toString(resolved),
                        "does not satisfy",
                        Plugin.toString(parsed),
                        "used by",
                        Plugin.toString(parsedBase) + "."
                      );
                      resolved._warned = true;
                      module3._warned = true;
                    } else if (!resolved) {
                      Common.warn(
                        "Plugin.dependencies:",
                        Plugin.toString(dependency),
                        "used by",
                        Plugin.toString(parsedBase),
                        "could not be resolved."
                      );
                      module3._warned = true;
                    }
                    return parsed.name;
                  });
                  for (var i = 0; i < tracked[name].length; i += 1) {
                    Plugin.dependencies(tracked[name][i], tracked);
                  }
                  return tracked;
                };
                Plugin.dependencyParse = function(dependency) {
                  if (Common.isString(dependency)) {
                    var pattern = /^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-+]+)?))?$/;
                    if (!pattern.test(dependency)) {
                      Common.warn("Plugin.dependencyParse:", dependency, "is not a valid dependency string.");
                    }
                    return {
                      name: dependency.split("@")[0],
                      range: dependency.split("@")[1] || "*"
                    };
                  }
                  return {
                    name: dependency.name,
                    range: dependency.range || dependency.version
                  };
                };
                Plugin.versionParse = function(range) {
                  var pattern = /^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-+]+)?$/;
                  if (!pattern.test(range)) {
                    Common.warn("Plugin.versionParse:", range, "is not a valid version or range.");
                  }
                  var parts = pattern.exec(range);
                  var major = Number(parts[4]);
                  var minor = Number(parts[5]);
                  var patch = Number(parts[6]);
                  return {
                    isRange: Boolean(parts[1] || parts[2]),
                    version: parts[3],
                    range,
                    operator: parts[1] || parts[2] || "",
                    major,
                    minor,
                    patch,
                    parts: [major, minor, patch],
                    prerelease: parts[7],
                    number: major * 1e8 + minor * 1e4 + patch
                  };
                };
                Plugin.versionSatisfies = function(version, range) {
                  range = range || "*";
                  var r = Plugin.versionParse(range), v = Plugin.versionParse(version);
                  if (r.isRange) {
                    if (r.operator === "*" || version === "*") {
                      return true;
                    }
                    if (r.operator === ">") {
                      return v.number > r.number;
                    }
                    if (r.operator === ">=") {
                      return v.number >= r.number;
                    }
                    if (r.operator === "~") {
                      return v.major === r.major && v.minor === r.minor && v.patch >= r.patch;
                    }
                    if (r.operator === "^") {
                      if (r.major > 0) {
                        return v.major === r.major && v.number >= r.number;
                      }
                      if (r.minor > 0) {
                        return v.minor === r.minor && v.patch >= r.patch;
                      }
                      return v.patch === r.patch;
                    }
                  }
                  return version === range || version === "*";
                };
              })();
            }),
            /* 16 */
            /***/
            (function(module2, exports2) {
              var Contact = {};
              module2.exports = Contact;
              (function() {
                Contact.create = function(vertex) {
                  return {
                    vertex,
                    normalImpulse: 0,
                    tangentImpulse: 0
                  };
                };
              })();
            }),
            /* 17 */
            /***/
            (function(module2, exports2, __webpack_require__) {
              var Engine = {};
              module2.exports = Engine;
              var Sleeping = __webpack_require__(7);
              var Resolver = __webpack_require__(18);
              var Detector = __webpack_require__(13);
              var Pairs = __webpack_require__(19);
              var Events = __webpack_require__(5);
              var Composite = __webpack_require__(6);
              var Constraint = __webpack_require__(10);
              var Common = __webpack_require__(0);
              var Body = __webpack_require__(4);
              (function() {
                Engine._deltaMax = 1e3 / 60;
                Engine.create = function(options) {
                  options = options || {};
                  var defaults = {
                    positionIterations: 6,
                    velocityIterations: 4,
                    constraintIterations: 2,
                    enableSleeping: false,
                    events: [],
                    plugin: {},
                    gravity: {
                      x: 0,
                      y: 1,
                      scale: 1e-3
                    },
                    timing: {
                      timestamp: 0,
                      timeScale: 1,
                      lastDelta: 0,
                      lastElapsed: 0,
                      lastUpdatesPerFrame: 0
                    }
                  };
                  var engine = Common.extend(defaults, options);
                  engine.world = options.world || Composite.create({ label: "World" });
                  engine.pairs = options.pairs || Pairs.create();
                  engine.detector = options.detector || Detector.create();
                  engine.detector.pairs = engine.pairs;
                  engine.grid = { buckets: [] };
                  engine.world.gravity = engine.gravity;
                  engine.broadphase = engine.grid;
                  engine.metrics = {};
                  return engine;
                };
                Engine.update = function(engine, delta) {
                  var startTime = Common.now();
                  var world = engine.world, detector = engine.detector, pairs = engine.pairs, timing = engine.timing, timestamp = timing.timestamp, i;
                  if (delta > Engine._deltaMax) {
                    Common.warnOnce(
                      "Matter.Engine.update: delta argument is recommended to be less than or equal to",
                      Engine._deltaMax.toFixed(3),
                      "ms."
                    );
                  }
                  delta = typeof delta !== "undefined" ? delta : Common._baseDelta;
                  delta *= timing.timeScale;
                  timing.timestamp += delta;
                  timing.lastDelta = delta;
                  var event = {
                    timestamp: timing.timestamp,
                    delta
                  };
                  Events.trigger(engine, "beforeUpdate", event);
                  var allBodies = Composite.allBodies(world), allConstraints = Composite.allConstraints(world);
                  if (world.isModified) {
                    Detector.setBodies(detector, allBodies);
                    Composite.setModified(world, false, false, true);
                  }
                  if (engine.enableSleeping)
                    Sleeping.update(allBodies, delta);
                  Engine._bodiesApplyGravity(allBodies, engine.gravity);
                  if (delta > 0) {
                    Engine._bodiesUpdate(allBodies, delta);
                  }
                  Events.trigger(engine, "beforeSolve", event);
                  Constraint.preSolveAll(allBodies);
                  for (i = 0; i < engine.constraintIterations; i++) {
                    Constraint.solveAll(allConstraints, delta);
                  }
                  Constraint.postSolveAll(allBodies);
                  var collisions = Detector.collisions(detector);
                  Pairs.update(pairs, collisions, timestamp);
                  if (engine.enableSleeping)
                    Sleeping.afterCollisions(pairs.list);
                  if (pairs.collisionStart.length > 0) {
                    Events.trigger(engine, "collisionStart", {
                      pairs: pairs.collisionStart,
                      timestamp: timing.timestamp,
                      delta
                    });
                  }
                  var positionDamping = Common.clamp(20 / engine.positionIterations, 0, 1);
                  Resolver.preSolvePosition(pairs.list);
                  for (i = 0; i < engine.positionIterations; i++) {
                    Resolver.solvePosition(pairs.list, delta, positionDamping);
                  }
                  Resolver.postSolvePosition(allBodies);
                  Constraint.preSolveAll(allBodies);
                  for (i = 0; i < engine.constraintIterations; i++) {
                    Constraint.solveAll(allConstraints, delta);
                  }
                  Constraint.postSolveAll(allBodies);
                  Resolver.preSolveVelocity(pairs.list);
                  for (i = 0; i < engine.velocityIterations; i++) {
                    Resolver.solveVelocity(pairs.list, delta);
                  }
                  Engine._bodiesUpdateVelocities(allBodies);
                  if (pairs.collisionActive.length > 0) {
                    Events.trigger(engine, "collisionActive", {
                      pairs: pairs.collisionActive,
                      timestamp: timing.timestamp,
                      delta
                    });
                  }
                  if (pairs.collisionEnd.length > 0) {
                    Events.trigger(engine, "collisionEnd", {
                      pairs: pairs.collisionEnd,
                      timestamp: timing.timestamp,
                      delta
                    });
                  }
                  Engine._bodiesClearForces(allBodies);
                  Events.trigger(engine, "afterUpdate", event);
                  engine.timing.lastElapsed = Common.now() - startTime;
                  return engine;
                };
                Engine.merge = function(engineA, engineB) {
                  Common.extend(engineA, engineB);
                  if (engineB.world) {
                    engineA.world = engineB.world;
                    Engine.clear(engineA);
                    var bodies = Composite.allBodies(engineA.world);
                    for (var i = 0; i < bodies.length; i++) {
                      var body = bodies[i];
                      Sleeping.set(body, false);
                      body.id = Common.nextId();
                    }
                  }
                };
                Engine.clear = function(engine) {
                  Pairs.clear(engine.pairs);
                  Detector.clear(engine.detector);
                };
                Engine._bodiesClearForces = function(bodies) {
                  var bodiesLength = bodies.length;
                  for (var i = 0; i < bodiesLength; i++) {
                    var body = bodies[i];
                    body.force.x = 0;
                    body.force.y = 0;
                    body.torque = 0;
                  }
                };
                Engine._bodiesApplyGravity = function(bodies, gravity) {
                  var gravityScale = typeof gravity.scale !== "undefined" ? gravity.scale : 1e-3, bodiesLength = bodies.length;
                  if (gravity.x === 0 && gravity.y === 0 || gravityScale === 0) {
                    return;
                  }
                  for (var i = 0; i < bodiesLength; i++) {
                    var body = bodies[i];
                    if (body.isStatic || body.isSleeping)
                      continue;
                    body.force.y += body.mass * gravity.y * gravityScale;
                    body.force.x += body.mass * gravity.x * gravityScale;
                  }
                };
                Engine._bodiesUpdate = function(bodies, delta) {
                  var bodiesLength = bodies.length;
                  for (var i = 0; i < bodiesLength; i++) {
                    var body = bodies[i];
                    if (body.isStatic || body.isSleeping)
                      continue;
                    Body.update(body, delta);
                  }
                };
                Engine._bodiesUpdateVelocities = function(bodies) {
                  var bodiesLength = bodies.length;
                  for (var i = 0; i < bodiesLength; i++) {
                    Body.updateVelocities(bodies[i]);
                  }
                };
              })();
            }),
            /* 18 */
            /***/
            (function(module2, exports2, __webpack_require__) {
              var Resolver = {};
              module2.exports = Resolver;
              var Vertices = __webpack_require__(3);
              var Common = __webpack_require__(0);
              var Bounds = __webpack_require__(1);
              (function() {
                Resolver._restingThresh = 2;
                Resolver._restingThreshTangent = Math.sqrt(6);
                Resolver._positionDampen = 0.9;
                Resolver._positionWarming = 0.8;
                Resolver._frictionNormalMultiplier = 5;
                Resolver._frictionMaxStatic = Number.MAX_VALUE;
                Resolver.preSolvePosition = function(pairs) {
                  var i, pair, contactCount, pairsLength = pairs.length;
                  for (i = 0; i < pairsLength; i++) {
                    pair = pairs[i];
                    if (!pair.isActive)
                      continue;
                    contactCount = pair.contactCount;
                    pair.collision.parentA.totalContacts += contactCount;
                    pair.collision.parentB.totalContacts += contactCount;
                  }
                };
                Resolver.solvePosition = function(pairs, delta, damping) {
                  var i, pair, collision, bodyA, bodyB, normal, contactShare, positionImpulse, positionDampen = Resolver._positionDampen * (damping || 1), slopDampen = Common.clamp(delta / Common._baseDelta, 0, 1), pairsLength = pairs.length;
                  for (i = 0; i < pairsLength; i++) {
                    pair = pairs[i];
                    if (!pair.isActive || pair.isSensor)
                      continue;
                    collision = pair.collision;
                    bodyA = collision.parentA;
                    bodyB = collision.parentB;
                    normal = collision.normal;
                    pair.separation = collision.depth + normal.x * (bodyB.positionImpulse.x - bodyA.positionImpulse.x) + normal.y * (bodyB.positionImpulse.y - bodyA.positionImpulse.y);
                  }
                  for (i = 0; i < pairsLength; i++) {
                    pair = pairs[i];
                    if (!pair.isActive || pair.isSensor)
                      continue;
                    collision = pair.collision;
                    bodyA = collision.parentA;
                    bodyB = collision.parentB;
                    normal = collision.normal;
                    positionImpulse = pair.separation - pair.slop * slopDampen;
                    if (bodyA.isStatic || bodyB.isStatic)
                      positionImpulse *= 2;
                    if (!(bodyA.isStatic || bodyA.isSleeping)) {
                      contactShare = positionDampen / bodyA.totalContacts;
                      bodyA.positionImpulse.x += normal.x * positionImpulse * contactShare;
                      bodyA.positionImpulse.y += normal.y * positionImpulse * contactShare;
                    }
                    if (!(bodyB.isStatic || bodyB.isSleeping)) {
                      contactShare = positionDampen / bodyB.totalContacts;
                      bodyB.positionImpulse.x -= normal.x * positionImpulse * contactShare;
                      bodyB.positionImpulse.y -= normal.y * positionImpulse * contactShare;
                    }
                  }
                };
                Resolver.postSolvePosition = function(bodies) {
                  var positionWarming = Resolver._positionWarming, bodiesLength = bodies.length, verticesTranslate = Vertices.translate, boundsUpdate = Bounds.update;
                  for (var i = 0; i < bodiesLength; i++) {
                    var body = bodies[i], positionImpulse = body.positionImpulse, positionImpulseX = positionImpulse.x, positionImpulseY = positionImpulse.y, velocity = body.velocity;
                    body.totalContacts = 0;
                    if (positionImpulseX !== 0 || positionImpulseY !== 0) {
                      for (var j = 0; j < body.parts.length; j++) {
                        var part = body.parts[j];
                        verticesTranslate(part.vertices, positionImpulse);
                        boundsUpdate(part.bounds, part.vertices, velocity);
                        part.position.x += positionImpulseX;
                        part.position.y += positionImpulseY;
                      }
                      body.positionPrev.x += positionImpulseX;
                      body.positionPrev.y += positionImpulseY;
                      if (positionImpulseX * velocity.x + positionImpulseY * velocity.y < 0) {
                        positionImpulse.x = 0;
                        positionImpulse.y = 0;
                      } else {
                        positionImpulse.x *= positionWarming;
                        positionImpulse.y *= positionWarming;
                      }
                    }
                  }
                };
                Resolver.preSolveVelocity = function(pairs) {
                  var pairsLength = pairs.length, i, j;
                  for (i = 0; i < pairsLength; i++) {
                    var pair = pairs[i];
                    if (!pair.isActive || pair.isSensor)
                      continue;
                    var contacts = pair.contacts, contactCount = pair.contactCount, collision = pair.collision, bodyA = collision.parentA, bodyB = collision.parentB, normal = collision.normal, tangent = collision.tangent;
                    for (j = 0; j < contactCount; j++) {
                      var contact = contacts[j], contactVertex = contact.vertex, normalImpulse = contact.normalImpulse, tangentImpulse = contact.tangentImpulse;
                      if (normalImpulse !== 0 || tangentImpulse !== 0) {
                        var impulseX = normal.x * normalImpulse + tangent.x * tangentImpulse, impulseY = normal.y * normalImpulse + tangent.y * tangentImpulse;
                        if (!(bodyA.isStatic || bodyA.isSleeping)) {
                          bodyA.positionPrev.x += impulseX * bodyA.inverseMass;
                          bodyA.positionPrev.y += impulseY * bodyA.inverseMass;
                          bodyA.anglePrev += bodyA.inverseInertia * ((contactVertex.x - bodyA.position.x) * impulseY - (contactVertex.y - bodyA.position.y) * impulseX);
                        }
                        if (!(bodyB.isStatic || bodyB.isSleeping)) {
                          bodyB.positionPrev.x -= impulseX * bodyB.inverseMass;
                          bodyB.positionPrev.y -= impulseY * bodyB.inverseMass;
                          bodyB.anglePrev -= bodyB.inverseInertia * ((contactVertex.x - bodyB.position.x) * impulseY - (contactVertex.y - bodyB.position.y) * impulseX);
                        }
                      }
                    }
                  }
                };
                Resolver.solveVelocity = function(pairs, delta) {
                  var timeScale = delta / Common._baseDelta, timeScaleSquared = timeScale * timeScale, timeScaleCubed = timeScaleSquared * timeScale, restingThresh = -Resolver._restingThresh * timeScale, restingThreshTangent = Resolver._restingThreshTangent, frictionNormalMultiplier = Resolver._frictionNormalMultiplier * timeScale, frictionMaxStatic = Resolver._frictionMaxStatic, pairsLength = pairs.length, tangentImpulse, maxFriction, i, j;
                  for (i = 0; i < pairsLength; i++) {
                    var pair = pairs[i];
                    if (!pair.isActive || pair.isSensor)
                      continue;
                    var collision = pair.collision, bodyA = collision.parentA, bodyB = collision.parentB, normalX = collision.normal.x, normalY = collision.normal.y, tangentX = collision.tangent.x, tangentY = collision.tangent.y, inverseMassTotal = pair.inverseMass, friction = pair.friction * pair.frictionStatic * frictionNormalMultiplier, contacts = pair.contacts, contactCount = pair.contactCount, contactShare = 1 / contactCount;
                    var bodyAVelocityX = bodyA.position.x - bodyA.positionPrev.x, bodyAVelocityY = bodyA.position.y - bodyA.positionPrev.y, bodyAAngularVelocity = bodyA.angle - bodyA.anglePrev, bodyBVelocityX = bodyB.position.x - bodyB.positionPrev.x, bodyBVelocityY = bodyB.position.y - bodyB.positionPrev.y, bodyBAngularVelocity = bodyB.angle - bodyB.anglePrev;
                    for (j = 0; j < contactCount; j++) {
                      var contact = contacts[j], contactVertex = contact.vertex;
                      var offsetAX = contactVertex.x - bodyA.position.x, offsetAY = contactVertex.y - bodyA.position.y, offsetBX = contactVertex.x - bodyB.position.x, offsetBY = contactVertex.y - bodyB.position.y;
                      var velocityPointAX = bodyAVelocityX - offsetAY * bodyAAngularVelocity, velocityPointAY = bodyAVelocityY + offsetAX * bodyAAngularVelocity, velocityPointBX = bodyBVelocityX - offsetBY * bodyBAngularVelocity, velocityPointBY = bodyBVelocityY + offsetBX * bodyBAngularVelocity;
                      var relativeVelocityX = velocityPointAX - velocityPointBX, relativeVelocityY = velocityPointAY - velocityPointBY;
                      var normalVelocity = normalX * relativeVelocityX + normalY * relativeVelocityY, tangentVelocity = tangentX * relativeVelocityX + tangentY * relativeVelocityY;
                      var normalOverlap = pair.separation + normalVelocity;
                      var normalForce = Math.min(normalOverlap, 1);
                      normalForce = normalOverlap < 0 ? 0 : normalForce;
                      var frictionLimit = normalForce * friction;
                      if (tangentVelocity < -frictionLimit || tangentVelocity > frictionLimit) {
                        maxFriction = tangentVelocity > 0 ? tangentVelocity : -tangentVelocity;
                        tangentImpulse = pair.friction * (tangentVelocity > 0 ? 1 : -1) * timeScaleCubed;
                        if (tangentImpulse < -maxFriction) {
                          tangentImpulse = -maxFriction;
                        } else if (tangentImpulse > maxFriction) {
                          tangentImpulse = maxFriction;
                        }
                      } else {
                        tangentImpulse = tangentVelocity;
                        maxFriction = frictionMaxStatic;
                      }
                      var oAcN = offsetAX * normalY - offsetAY * normalX, oBcN = offsetBX * normalY - offsetBY * normalX, share = contactShare / (inverseMassTotal + bodyA.inverseInertia * oAcN * oAcN + bodyB.inverseInertia * oBcN * oBcN);
                      var normalImpulse = (1 + pair.restitution) * normalVelocity * share;
                      tangentImpulse *= share;
                      if (normalVelocity < restingThresh) {
                        contact.normalImpulse = 0;
                      } else {
                        var contactNormalImpulse = contact.normalImpulse;
                        contact.normalImpulse += normalImpulse;
                        if (contact.normalImpulse > 0) contact.normalImpulse = 0;
                        normalImpulse = contact.normalImpulse - contactNormalImpulse;
                      }
                      if (tangentVelocity < -restingThreshTangent || tangentVelocity > restingThreshTangent) {
                        contact.tangentImpulse = 0;
                      } else {
                        var contactTangentImpulse = contact.tangentImpulse;
                        contact.tangentImpulse += tangentImpulse;
                        if (contact.tangentImpulse < -maxFriction) contact.tangentImpulse = -maxFriction;
                        if (contact.tangentImpulse > maxFriction) contact.tangentImpulse = maxFriction;
                        tangentImpulse = contact.tangentImpulse - contactTangentImpulse;
                      }
                      var impulseX = normalX * normalImpulse + tangentX * tangentImpulse, impulseY = normalY * normalImpulse + tangentY * tangentImpulse;
                      if (!(bodyA.isStatic || bodyA.isSleeping)) {
                        bodyA.positionPrev.x += impulseX * bodyA.inverseMass;
                        bodyA.positionPrev.y += impulseY * bodyA.inverseMass;
                        bodyA.anglePrev += (offsetAX * impulseY - offsetAY * impulseX) * bodyA.inverseInertia;
                      }
                      if (!(bodyB.isStatic || bodyB.isSleeping)) {
                        bodyB.positionPrev.x -= impulseX * bodyB.inverseMass;
                        bodyB.positionPrev.y -= impulseY * bodyB.inverseMass;
                        bodyB.anglePrev -= (offsetBX * impulseY - offsetBY * impulseX) * bodyB.inverseInertia;
                      }
                    }
                  }
                };
              })();
            }),
            /* 19 */
            /***/
            (function(module2, exports2, __webpack_require__) {
              var Pairs = {};
              module2.exports = Pairs;
              var Pair = __webpack_require__(9);
              var Common = __webpack_require__(0);
              (function() {
                Pairs.create = function(options) {
                  return Common.extend({
                    table: {},
                    list: [],
                    collisionStart: [],
                    collisionActive: [],
                    collisionEnd: []
                  }, options);
                };
                Pairs.update = function(pairs, collisions, timestamp) {
                  var pairUpdate = Pair.update, pairCreate = Pair.create, pairSetActive = Pair.setActive, pairsTable = pairs.table, pairsList = pairs.list, pairsListLength = pairsList.length, pairsListIndex = pairsListLength, collisionStart = pairs.collisionStart, collisionEnd = pairs.collisionEnd, collisionActive = pairs.collisionActive, collisionsLength = collisions.length, collisionStartIndex = 0, collisionEndIndex = 0, collisionActiveIndex = 0, collision, pair, i;
                  for (i = 0; i < collisionsLength; i++) {
                    collision = collisions[i];
                    pair = collision.pair;
                    if (pair) {
                      if (pair.isActive) {
                        collisionActive[collisionActiveIndex++] = pair;
                      }
                      pairUpdate(pair, collision, timestamp);
                    } else {
                      pair = pairCreate(collision, timestamp);
                      pairsTable[pair.id] = pair;
                      collisionStart[collisionStartIndex++] = pair;
                      pairsList[pairsListIndex++] = pair;
                    }
                  }
                  pairsListIndex = 0;
                  pairsListLength = pairsList.length;
                  for (i = 0; i < pairsListLength; i++) {
                    pair = pairsList[i];
                    if (pair.timeUpdated >= timestamp) {
                      pairsList[pairsListIndex++] = pair;
                    } else {
                      pairSetActive(pair, false, timestamp);
                      if (pair.collision.bodyA.sleepCounter > 0 && pair.collision.bodyB.sleepCounter > 0) {
                        pairsList[pairsListIndex++] = pair;
                      } else {
                        collisionEnd[collisionEndIndex++] = pair;
                        delete pairsTable[pair.id];
                      }
                    }
                  }
                  if (pairsList.length !== pairsListIndex) {
                    pairsList.length = pairsListIndex;
                  }
                  if (collisionStart.length !== collisionStartIndex) {
                    collisionStart.length = collisionStartIndex;
                  }
                  if (collisionEnd.length !== collisionEndIndex) {
                    collisionEnd.length = collisionEndIndex;
                  }
                  if (collisionActive.length !== collisionActiveIndex) {
                    collisionActive.length = collisionActiveIndex;
                  }
                };
                Pairs.clear = function(pairs) {
                  pairs.table = {};
                  pairs.list.length = 0;
                  pairs.collisionStart.length = 0;
                  pairs.collisionActive.length = 0;
                  pairs.collisionEnd.length = 0;
                  return pairs;
                };
              })();
            }),
            /* 20 */
            /***/
            (function(module2, exports2, __webpack_require__) {
              var Matter = module2.exports = __webpack_require__(21);
              Matter.Axes = __webpack_require__(11);
              Matter.Bodies = __webpack_require__(12);
              Matter.Body = __webpack_require__(4);
              Matter.Bounds = __webpack_require__(1);
              Matter.Collision = __webpack_require__(8);
              Matter.Common = __webpack_require__(0);
              Matter.Composite = __webpack_require__(6);
              Matter.Composites = __webpack_require__(22);
              Matter.Constraint = __webpack_require__(10);
              Matter.Contact = __webpack_require__(16);
              Matter.Detector = __webpack_require__(13);
              Matter.Engine = __webpack_require__(17);
              Matter.Events = __webpack_require__(5);
              Matter.Grid = __webpack_require__(23);
              Matter.Mouse = __webpack_require__(14);
              Matter.MouseConstraint = __webpack_require__(24);
              Matter.Pair = __webpack_require__(9);
              Matter.Pairs = __webpack_require__(19);
              Matter.Plugin = __webpack_require__(15);
              Matter.Query = __webpack_require__(25);
              Matter.Render = __webpack_require__(26);
              Matter.Resolver = __webpack_require__(18);
              Matter.Runner = __webpack_require__(27);
              Matter.SAT = __webpack_require__(28);
              Matter.Sleeping = __webpack_require__(7);
              Matter.Svg = __webpack_require__(29);
              Matter.Vector = __webpack_require__(2);
              Matter.Vertices = __webpack_require__(3);
              Matter.World = __webpack_require__(30);
              Matter.Engine.run = Matter.Runner.run;
              Matter.Common.deprecated(Matter.Engine, "run", "Engine.run \u27A4 use Matter.Runner.run(engine) instead");
            }),
            /* 21 */
            /***/
            (function(module2, exports2, __webpack_require__) {
              var Matter = {};
              module2.exports = Matter;
              var Plugin = __webpack_require__(15);
              var Common = __webpack_require__(0);
              (function() {
                Matter.name = "matter-js";
                Matter.version = true ? "0.20.0" : void 0;
                Matter.uses = [];
                Matter.used = [];
                Matter.use = function() {
                  Plugin.use(Matter, Array.prototype.slice.call(arguments));
                };
                Matter.before = function(path, func) {
                  path = path.replace(/^Matter./, "");
                  return Common.chainPathBefore(Matter, path, func);
                };
                Matter.after = function(path, func) {
                  path = path.replace(/^Matter./, "");
                  return Common.chainPathAfter(Matter, path, func);
                };
              })();
            }),
            /* 22 */
            /***/
            (function(module2, exports2, __webpack_require__) {
              var Composites = {};
              module2.exports = Composites;
              var Composite = __webpack_require__(6);
              var Constraint = __webpack_require__(10);
              var Common = __webpack_require__(0);
              var Body = __webpack_require__(4);
              var Bodies = __webpack_require__(12);
              var deprecated = Common.deprecated;
              (function() {
                Composites.stack = function(x, y, columns, rows, columnGap, rowGap, callback) {
                  var stack = Composite.create({ label: "Stack" }), currentX = x, currentY = y, lastBody, i = 0;
                  for (var row = 0; row < rows; row++) {
                    var maxHeight = 0;
                    for (var column = 0; column < columns; column++) {
                      var body = callback(currentX, currentY, column, row, lastBody, i);
                      if (body) {
                        var bodyHeight = body.bounds.max.y - body.bounds.min.y, bodyWidth = body.bounds.max.x - body.bounds.min.x;
                        if (bodyHeight > maxHeight)
                          maxHeight = bodyHeight;
                        Body.translate(body, { x: bodyWidth * 0.5, y: bodyHeight * 0.5 });
                        currentX = body.bounds.max.x + columnGap;
                        Composite.addBody(stack, body);
                        lastBody = body;
                        i += 1;
                      } else {
                        currentX += columnGap;
                      }
                    }
                    currentY += maxHeight + rowGap;
                    currentX = x;
                  }
                  return stack;
                };
                Composites.chain = function(composite, xOffsetA, yOffsetA, xOffsetB, yOffsetB, options) {
                  var bodies = composite.bodies;
                  for (var i = 1; i < bodies.length; i++) {
                    var bodyA = bodies[i - 1], bodyB = bodies[i], bodyAHeight = bodyA.bounds.max.y - bodyA.bounds.min.y, bodyAWidth = bodyA.bounds.max.x - bodyA.bounds.min.x, bodyBHeight = bodyB.bounds.max.y - bodyB.bounds.min.y, bodyBWidth = bodyB.bounds.max.x - bodyB.bounds.min.x;
                    var defaults = {
                      bodyA,
                      pointA: { x: bodyAWidth * xOffsetA, y: bodyAHeight * yOffsetA },
                      bodyB,
                      pointB: { x: bodyBWidth * xOffsetB, y: bodyBHeight * yOffsetB }
                    };
                    var constraint = Common.extend(defaults, options);
                    Composite.addConstraint(composite, Constraint.create(constraint));
                  }
                  composite.label += " Chain";
                  return composite;
                };
                Composites.mesh = function(composite, columns, rows, crossBrace, options) {
                  var bodies = composite.bodies, row, col, bodyA, bodyB, bodyC;
                  for (row = 0; row < rows; row++) {
                    for (col = 1; col < columns; col++) {
                      bodyA = bodies[col - 1 + row * columns];
                      bodyB = bodies[col + row * columns];
                      Composite.addConstraint(composite, Constraint.create(Common.extend({ bodyA, bodyB }, options)));
                    }
                    if (row > 0) {
                      for (col = 0; col < columns; col++) {
                        bodyA = bodies[col + (row - 1) * columns];
                        bodyB = bodies[col + row * columns];
                        Composite.addConstraint(composite, Constraint.create(Common.extend({ bodyA, bodyB }, options)));
                        if (crossBrace && col > 0) {
                          bodyC = bodies[col - 1 + (row - 1) * columns];
                          Composite.addConstraint(composite, Constraint.create(Common.extend({ bodyA: bodyC, bodyB }, options)));
                        }
                        if (crossBrace && col < columns - 1) {
                          bodyC = bodies[col + 1 + (row - 1) * columns];
                          Composite.addConstraint(composite, Constraint.create(Common.extend({ bodyA: bodyC, bodyB }, options)));
                        }
                      }
                    }
                  }
                  composite.label += " Mesh";
                  return composite;
                };
                Composites.pyramid = function(x, y, columns, rows, columnGap, rowGap, callback) {
                  return Composites.stack(x, y, columns, rows, columnGap, rowGap, function(stackX, stackY, column, row, lastBody, i) {
                    var actualRows = Math.min(rows, Math.ceil(columns / 2)), lastBodyWidth = lastBody ? lastBody.bounds.max.x - lastBody.bounds.min.x : 0;
                    if (row > actualRows)
                      return;
                    row = actualRows - row;
                    var start = row, end = columns - 1 - row;
                    if (column < start || column > end)
                      return;
                    if (i === 1) {
                      Body.translate(lastBody, { x: (column + (columns % 2 === 1 ? 1 : -1)) * lastBodyWidth, y: 0 });
                    }
                    var xOffset = lastBody ? column * lastBodyWidth : 0;
                    return callback(x + xOffset + column * columnGap, stackY, column, row, lastBody, i);
                  });
                };
                Composites.newtonsCradle = function(x, y, number, size, length) {
                  var newtonsCradle = Composite.create({ label: "Newtons Cradle" });
                  for (var i = 0; i < number; i++) {
                    var separation = 1.9, circle = Bodies.circle(
                      x + i * (size * separation),
                      y + length,
                      size,
                      { inertia: Infinity, restitution: 1, friction: 0, frictionAir: 1e-4, slop: 1 }
                    ), constraint = Constraint.create({ pointA: { x: x + i * (size * separation), y }, bodyB: circle });
                    Composite.addBody(newtonsCradle, circle);
                    Composite.addConstraint(newtonsCradle, constraint);
                  }
                  return newtonsCradle;
                };
                deprecated(Composites, "newtonsCradle", "Composites.newtonsCradle \u27A4 moved to newtonsCradle example");
                Composites.car = function(x, y, width, height, wheelSize) {
                  var group = Body.nextGroup(true), wheelBase = 20, wheelAOffset = -width * 0.5 + wheelBase, wheelBOffset = width * 0.5 - wheelBase, wheelYOffset = 0;
                  var car = Composite.create({ label: "Car" }), body = Bodies.rectangle(x, y, width, height, {
                    collisionFilter: {
                      group
                    },
                    chamfer: {
                      radius: height * 0.5
                    },
                    density: 2e-4
                  });
                  var wheelA = Bodies.circle(x + wheelAOffset, y + wheelYOffset, wheelSize, {
                    collisionFilter: {
                      group
                    },
                    friction: 0.8
                  });
                  var wheelB = Bodies.circle(x + wheelBOffset, y + wheelYOffset, wheelSize, {
                    collisionFilter: {
                      group
                    },
                    friction: 0.8
                  });
                  var axelA = Constraint.create({
                    bodyB: body,
                    pointB: { x: wheelAOffset, y: wheelYOffset },
                    bodyA: wheelA,
                    stiffness: 1,
                    length: 0
                  });
                  var axelB = Constraint.create({
                    bodyB: body,
                    pointB: { x: wheelBOffset, y: wheelYOffset },
                    bodyA: wheelB,
                    stiffness: 1,
                    length: 0
                  });
                  Composite.addBody(car, body);
                  Composite.addBody(car, wheelA);
                  Composite.addBody(car, wheelB);
                  Composite.addConstraint(car, axelA);
                  Composite.addConstraint(car, axelB);
                  return car;
                };
                deprecated(Composites, "car", "Composites.car \u27A4 moved to car example");
                Composites.softBody = function(x, y, columns, rows, columnGap, rowGap, crossBrace, particleRadius, particleOptions, constraintOptions) {
                  particleOptions = Common.extend({ inertia: Infinity }, particleOptions);
                  constraintOptions = Common.extend({ stiffness: 0.2, render: { type: "line", anchors: false } }, constraintOptions);
                  var softBody = Composites.stack(x, y, columns, rows, columnGap, rowGap, function(stackX, stackY) {
                    return Bodies.circle(stackX, stackY, particleRadius, particleOptions);
                  });
                  Composites.mesh(softBody, columns, rows, crossBrace, constraintOptions);
                  softBody.label = "Soft Body";
                  return softBody;
                };
                deprecated(Composites, "softBody", "Composites.softBody \u27A4 moved to softBody and cloth examples");
              })();
            }),
            /* 23 */
            /***/
            (function(module2, exports2, __webpack_require__) {
              var Grid = {};
              module2.exports = Grid;
              var Pair = __webpack_require__(9);
              var Common = __webpack_require__(0);
              var deprecated = Common.deprecated;
              (function() {
                Grid.create = function(options) {
                  var defaults = {
                    buckets: {},
                    pairs: {},
                    pairsList: [],
                    bucketWidth: 48,
                    bucketHeight: 48
                  };
                  return Common.extend(defaults, options);
                };
                Grid.update = function(grid, bodies, engine, forceUpdate) {
                  var i, col, row, world = engine.world, buckets = grid.buckets, bucket, bucketId, gridChanged = false;
                  for (i = 0; i < bodies.length; i++) {
                    var body = bodies[i];
                    if (body.isSleeping && !forceUpdate)
                      continue;
                    if (world.bounds && (body.bounds.max.x < world.bounds.min.x || body.bounds.min.x > world.bounds.max.x || body.bounds.max.y < world.bounds.min.y || body.bounds.min.y > world.bounds.max.y))
                      continue;
                    var newRegion = Grid._getRegion(grid, body);
                    if (!body.region || newRegion.id !== body.region.id || forceUpdate) {
                      if (!body.region || forceUpdate)
                        body.region = newRegion;
                      var union = Grid._regionUnion(newRegion, body.region);
                      for (col = union.startCol; col <= union.endCol; col++) {
                        for (row = union.startRow; row <= union.endRow; row++) {
                          bucketId = Grid._getBucketId(col, row);
                          bucket = buckets[bucketId];
                          var isInsideNewRegion = col >= newRegion.startCol && col <= newRegion.endCol && row >= newRegion.startRow && row <= newRegion.endRow;
                          var isInsideOldRegion = col >= body.region.startCol && col <= body.region.endCol && row >= body.region.startRow && row <= body.region.endRow;
                          if (!isInsideNewRegion && isInsideOldRegion) {
                            if (isInsideOldRegion) {
                              if (bucket)
                                Grid._bucketRemoveBody(grid, bucket, body);
                            }
                          }
                          if (body.region === newRegion || isInsideNewRegion && !isInsideOldRegion || forceUpdate) {
                            if (!bucket)
                              bucket = Grid._createBucket(buckets, bucketId);
                            Grid._bucketAddBody(grid, bucket, body);
                          }
                        }
                      }
                      body.region = newRegion;
                      gridChanged = true;
                    }
                  }
                  if (gridChanged)
                    grid.pairsList = Grid._createActivePairsList(grid);
                };
                deprecated(Grid, "update", "Grid.update \u27A4 replaced by Matter.Detector");
                Grid.clear = function(grid) {
                  grid.buckets = {};
                  grid.pairs = {};
                  grid.pairsList = [];
                };
                deprecated(Grid, "clear", "Grid.clear \u27A4 replaced by Matter.Detector");
                Grid._regionUnion = function(regionA, regionB) {
                  var startCol = Math.min(regionA.startCol, regionB.startCol), endCol = Math.max(regionA.endCol, regionB.endCol), startRow = Math.min(regionA.startRow, regionB.startRow), endRow = Math.max(regionA.endRow, regionB.endRow);
                  return Grid._createRegion(startCol, endCol, startRow, endRow);
                };
                Grid._getRegion = function(grid, body) {
                  var bounds = body.bounds, startCol = Math.floor(bounds.min.x / grid.bucketWidth), endCol = Math.floor(bounds.max.x / grid.bucketWidth), startRow = Math.floor(bounds.min.y / grid.bucketHeight), endRow = Math.floor(bounds.max.y / grid.bucketHeight);
                  return Grid._createRegion(startCol, endCol, startRow, endRow);
                };
                Grid._createRegion = function(startCol, endCol, startRow, endRow) {
                  return {
                    id: startCol + "," + endCol + "," + startRow + "," + endRow,
                    startCol,
                    endCol,
                    startRow,
                    endRow
                  };
                };
                Grid._getBucketId = function(column, row) {
                  return "C" + column + "R" + row;
                };
                Grid._createBucket = function(buckets, bucketId) {
                  var bucket = buckets[bucketId] = [];
                  return bucket;
                };
                Grid._bucketAddBody = function(grid, bucket, body) {
                  var gridPairs = grid.pairs, pairId = Pair.id, bucketLength = bucket.length, i;
                  for (i = 0; i < bucketLength; i++) {
                    var bodyB = bucket[i];
                    if (body.id === bodyB.id || body.isStatic && bodyB.isStatic)
                      continue;
                    var id = pairId(body, bodyB), pair = gridPairs[id];
                    if (pair) {
                      pair[2] += 1;
                    } else {
                      gridPairs[id] = [body, bodyB, 1];
                    }
                  }
                  bucket.push(body);
                };
                Grid._bucketRemoveBody = function(grid, bucket, body) {
                  var gridPairs = grid.pairs, pairId = Pair.id, i;
                  bucket.splice(Common.indexOf(bucket, body), 1);
                  var bucketLength = bucket.length;
                  for (i = 0; i < bucketLength; i++) {
                    var pair = gridPairs[pairId(body, bucket[i])];
                    if (pair)
                      pair[2] -= 1;
                  }
                };
                Grid._createActivePairsList = function(grid) {
                  var pair, gridPairs = grid.pairs, pairKeys = Common.keys(gridPairs), pairKeysLength = pairKeys.length, pairs = [], k;
                  for (k = 0; k < pairKeysLength; k++) {
                    pair = gridPairs[pairKeys[k]];
                    if (pair[2] > 0) {
                      pairs.push(pair);
                    } else {
                      delete gridPairs[pairKeys[k]];
                    }
                  }
                  return pairs;
                };
              })();
            }),
            /* 24 */
            /***/
            (function(module2, exports2, __webpack_require__) {
              var MouseConstraint = {};
              module2.exports = MouseConstraint;
              var Vertices = __webpack_require__(3);
              var Sleeping = __webpack_require__(7);
              var Mouse = __webpack_require__(14);
              var Events = __webpack_require__(5);
              var Detector = __webpack_require__(13);
              var Constraint = __webpack_require__(10);
              var Composite = __webpack_require__(6);
              var Common = __webpack_require__(0);
              var Bounds = __webpack_require__(1);
              (function() {
                MouseConstraint.create = function(engine, options) {
                  var mouse = (engine ? engine.mouse : null) || (options ? options.mouse : null);
                  if (!mouse) {
                    if (engine && engine.render && engine.render.canvas) {
                      mouse = Mouse.create(engine.render.canvas);
                    } else if (options && options.element) {
                      mouse = Mouse.create(options.element);
                    } else {
                      mouse = Mouse.create();
                      Common.warn("MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected");
                    }
                  }
                  var constraint = Constraint.create({
                    label: "Mouse Constraint",
                    pointA: mouse.position,
                    pointB: { x: 0, y: 0 },
                    length: 0.01,
                    stiffness: 0.1,
                    angularStiffness: 1,
                    render: {
                      strokeStyle: "#90EE90",
                      lineWidth: 3
                    }
                  });
                  var defaults = {
                    type: "mouseConstraint",
                    mouse,
                    element: null,
                    body: null,
                    constraint,
                    collisionFilter: {
                      category: 1,
                      mask: 4294967295,
                      group: 0
                    }
                  };
                  var mouseConstraint = Common.extend(defaults, options);
                  Events.on(engine, "beforeUpdate", function() {
                    var allBodies = Composite.allBodies(engine.world);
                    MouseConstraint.update(mouseConstraint, allBodies);
                    MouseConstraint._triggerEvents(mouseConstraint);
                  });
                  return mouseConstraint;
                };
                MouseConstraint.update = function(mouseConstraint, bodies) {
                  var mouse = mouseConstraint.mouse, constraint = mouseConstraint.constraint, body = mouseConstraint.body;
                  if (mouse.button === 0) {
                    if (!constraint.bodyB) {
                      for (var i = 0; i < bodies.length; i++) {
                        body = bodies[i];
                        if (Bounds.contains(body.bounds, mouse.position) && Detector.canCollide(body.collisionFilter, mouseConstraint.collisionFilter)) {
                          for (var j = body.parts.length > 1 ? 1 : 0; j < body.parts.length; j++) {
                            var part = body.parts[j];
                            if (Vertices.contains(part.vertices, mouse.position)) {
                              constraint.pointA = mouse.position;
                              constraint.bodyB = mouseConstraint.body = body;
                              constraint.pointB = { x: mouse.position.x - body.position.x, y: mouse.position.y - body.position.y };
                              constraint.angleB = body.angle;
                              Sleeping.set(body, false);
                              Events.trigger(mouseConstraint, "startdrag", { mouse, body });
                              break;
                            }
                          }
                        }
                      }
                    } else {
                      Sleeping.set(constraint.bodyB, false);
                      constraint.pointA = mouse.position;
                    }
                  } else {
                    constraint.bodyB = mouseConstraint.body = null;
                    constraint.pointB = null;
                    if (body)
                      Events.trigger(mouseConstraint, "enddrag", { mouse, body });
                  }
                };
                MouseConstraint._triggerEvents = function(mouseConstraint) {
                  var mouse = mouseConstraint.mouse, mouseEvents = mouse.sourceEvents;
                  if (mouseEvents.mousemove)
                    Events.trigger(mouseConstraint, "mousemove", { mouse });
                  if (mouseEvents.mousedown)
                    Events.trigger(mouseConstraint, "mousedown", { mouse });
                  if (mouseEvents.mouseup)
                    Events.trigger(mouseConstraint, "mouseup", { mouse });
                  Mouse.clearSourceEvents(mouse);
                };
              })();
            }),
            /* 25 */
            /***/
            (function(module2, exports2, __webpack_require__) {
              var Query = {};
              module2.exports = Query;
              var Vector = __webpack_require__(2);
              var Collision = __webpack_require__(8);
              var Bounds = __webpack_require__(1);
              var Bodies = __webpack_require__(12);
              var Vertices = __webpack_require__(3);
              (function() {
                Query.collides = function(body, bodies) {
                  var collisions = [], bodiesLength = bodies.length, bounds = body.bounds, collides = Collision.collides, overlaps = Bounds.overlaps;
                  for (var i = 0; i < bodiesLength; i++) {
                    var bodyA = bodies[i], partsALength = bodyA.parts.length, partsAStart = partsALength === 1 ? 0 : 1;
                    if (overlaps(bodyA.bounds, bounds)) {
                      for (var j = partsAStart; j < partsALength; j++) {
                        var part = bodyA.parts[j];
                        if (overlaps(part.bounds, bounds)) {
                          var collision = collides(part, body);
                          if (collision) {
                            collisions.push(collision);
                            break;
                          }
                        }
                      }
                    }
                  }
                  return collisions;
                };
                Query.ray = function(bodies, startPoint, endPoint, rayWidth) {
                  rayWidth = rayWidth || 1e-100;
                  var rayAngle = Vector.angle(startPoint, endPoint), rayLength = Vector.magnitude(Vector.sub(startPoint, endPoint)), rayX = (endPoint.x + startPoint.x) * 0.5, rayY = (endPoint.y + startPoint.y) * 0.5, ray = Bodies.rectangle(rayX, rayY, rayLength, rayWidth, { angle: rayAngle }), collisions = Query.collides(ray, bodies);
                  for (var i = 0; i < collisions.length; i += 1) {
                    var collision = collisions[i];
                    collision.body = collision.bodyB = collision.bodyA;
                  }
                  return collisions;
                };
                Query.region = function(bodies, bounds, outside) {
                  var result = [];
                  for (var i = 0; i < bodies.length; i++) {
                    var body = bodies[i], overlaps = Bounds.overlaps(body.bounds, bounds);
                    if (overlaps && !outside || !overlaps && outside)
                      result.push(body);
                  }
                  return result;
                };
                Query.point = function(bodies, point) {
                  var result = [];
                  for (var i = 0; i < bodies.length; i++) {
                    var body = bodies[i];
                    if (Bounds.contains(body.bounds, point)) {
                      for (var j = body.parts.length === 1 ? 0 : 1; j < body.parts.length; j++) {
                        var part = body.parts[j];
                        if (Bounds.contains(part.bounds, point) && Vertices.contains(part.vertices, point)) {
                          result.push(body);
                          break;
                        }
                      }
                    }
                  }
                  return result;
                };
              })();
            }),
            /* 26 */
            /***/
            (function(module2, exports2, __webpack_require__) {
              var Render = {};
              module2.exports = Render;
              var Body = __webpack_require__(4);
              var Common = __webpack_require__(0);
              var Composite = __webpack_require__(6);
              var Bounds = __webpack_require__(1);
              var Events = __webpack_require__(5);
              var Vector = __webpack_require__(2);
              var Mouse = __webpack_require__(14);
              (function() {
                var _requestAnimationFrame, _cancelAnimationFrame;
                if (typeof window !== "undefined") {
                  _requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
                    window.setTimeout(function() {
                      callback(Common.now());
                    }, 1e3 / 60);
                  };
                  _cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame;
                }
                Render._goodFps = 30;
                Render._goodDelta = 1e3 / 60;
                Render.create = function(options) {
                  var defaults = {
                    engine: null,
                    element: null,
                    canvas: null,
                    mouse: null,
                    frameRequestId: null,
                    timing: {
                      historySize: 60,
                      delta: 0,
                      deltaHistory: [],
                      lastTime: 0,
                      lastTimestamp: 0,
                      lastElapsed: 0,
                      timestampElapsed: 0,
                      timestampElapsedHistory: [],
                      engineDeltaHistory: [],
                      engineElapsedHistory: [],
                      engineUpdatesHistory: [],
                      elapsedHistory: []
                    },
                    options: {
                      width: 800,
                      height: 600,
                      pixelRatio: 1,
                      background: "#14151f",
                      wireframeBackground: "#14151f",
                      wireframeStrokeStyle: "#bbb",
                      hasBounds: !!options.bounds,
                      enabled: true,
                      wireframes: true,
                      showSleeping: true,
                      showDebug: false,
                      showStats: false,
                      showPerformance: false,
                      showBounds: false,
                      showVelocity: false,
                      showCollisions: false,
                      showSeparations: false,
                      showAxes: false,
                      showPositions: false,
                      showAngleIndicator: false,
                      showIds: false,
                      showVertexNumbers: false,
                      showConvexHulls: false,
                      showInternalEdges: false,
                      showMousePosition: false
                    }
                  };
                  var render = Common.extend(defaults, options);
                  if (render.canvas) {
                    render.canvas.width = render.options.width || render.canvas.width;
                    render.canvas.height = render.options.height || render.canvas.height;
                  }
                  render.mouse = options.mouse;
                  render.engine = options.engine;
                  render.canvas = render.canvas || _createCanvas(render.options.width, render.options.height);
                  render.context = render.canvas.getContext("2d");
                  render.textures = {};
                  render.bounds = render.bounds || {
                    min: {
                      x: 0,
                      y: 0
                    },
                    max: {
                      x: render.canvas.width,
                      y: render.canvas.height
                    }
                  };
                  render.controller = Render;
                  render.options.showBroadphase = false;
                  if (render.options.pixelRatio !== 1) {
                    Render.setPixelRatio(render, render.options.pixelRatio);
                  }
                  if (Common.isElement(render.element)) {
                    render.element.appendChild(render.canvas);
                  }
                  return render;
                };
                Render.run = function(render) {
                  (function loop(time) {
                    render.frameRequestId = _requestAnimationFrame(loop);
                    _updateTiming(render, time);
                    Render.world(render, time);
                    render.context.setTransform(render.options.pixelRatio, 0, 0, render.options.pixelRatio, 0, 0);
                    if (render.options.showStats || render.options.showDebug) {
                      Render.stats(render, render.context, time);
                    }
                    if (render.options.showPerformance || render.options.showDebug) {
                      Render.performance(render, render.context, time);
                    }
                    render.context.setTransform(1, 0, 0, 1, 0, 0);
                  })();
                };
                Render.stop = function(render) {
                  _cancelAnimationFrame(render.frameRequestId);
                };
                Render.setPixelRatio = function(render, pixelRatio) {
                  var options = render.options, canvas = render.canvas;
                  if (pixelRatio === "auto") {
                    pixelRatio = _getPixelRatio(canvas);
                  }
                  options.pixelRatio = pixelRatio;
                  canvas.setAttribute("data-pixel-ratio", pixelRatio);
                  canvas.width = options.width * pixelRatio;
                  canvas.height = options.height * pixelRatio;
                  canvas.style.width = options.width + "px";
                  canvas.style.height = options.height + "px";
                };
                Render.setSize = function(render, width, height) {
                  render.options.width = width;
                  render.options.height = height;
                  render.bounds.max.x = render.bounds.min.x + width;
                  render.bounds.max.y = render.bounds.min.y + height;
                  if (render.options.pixelRatio !== 1) {
                    Render.setPixelRatio(render, render.options.pixelRatio);
                  } else {
                    render.canvas.width = width;
                    render.canvas.height = height;
                  }
                };
                Render.lookAt = function(render, objects, padding, center) {
                  center = typeof center !== "undefined" ? center : true;
                  objects = Common.isArray(objects) ? objects : [objects];
                  padding = padding || {
                    x: 0,
                    y: 0
                  };
                  var bounds = {
                    min: { x: Infinity, y: Infinity },
                    max: { x: -Infinity, y: -Infinity }
                  };
                  for (var i = 0; i < objects.length; i += 1) {
                    var object = objects[i], min = object.bounds ? object.bounds.min : object.min || object.position || object, max = object.bounds ? object.bounds.max : object.max || object.position || object;
                    if (min && max) {
                      if (min.x < bounds.min.x)
                        bounds.min.x = min.x;
                      if (max.x > bounds.max.x)
                        bounds.max.x = max.x;
                      if (min.y < bounds.min.y)
                        bounds.min.y = min.y;
                      if (max.y > bounds.max.y)
                        bounds.max.y = max.y;
                    }
                  }
                  var width = bounds.max.x - bounds.min.x + 2 * padding.x, height = bounds.max.y - bounds.min.y + 2 * padding.y, viewHeight = render.canvas.height, viewWidth = render.canvas.width, outerRatio = viewWidth / viewHeight, innerRatio = width / height, scaleX = 1, scaleY = 1;
                  if (innerRatio > outerRatio) {
                    scaleY = innerRatio / outerRatio;
                  } else {
                    scaleX = outerRatio / innerRatio;
                  }
                  render.options.hasBounds = true;
                  render.bounds.min.x = bounds.min.x;
                  render.bounds.max.x = bounds.min.x + width * scaleX;
                  render.bounds.min.y = bounds.min.y;
                  render.bounds.max.y = bounds.min.y + height * scaleY;
                  if (center) {
                    render.bounds.min.x += width * 0.5 - width * scaleX * 0.5;
                    render.bounds.max.x += width * 0.5 - width * scaleX * 0.5;
                    render.bounds.min.y += height * 0.5 - height * scaleY * 0.5;
                    render.bounds.max.y += height * 0.5 - height * scaleY * 0.5;
                  }
                  render.bounds.min.x -= padding.x;
                  render.bounds.max.x -= padding.x;
                  render.bounds.min.y -= padding.y;
                  render.bounds.max.y -= padding.y;
                  if (render.mouse) {
                    Mouse.setScale(render.mouse, {
                      x: (render.bounds.max.x - render.bounds.min.x) / render.canvas.width,
                      y: (render.bounds.max.y - render.bounds.min.y) / render.canvas.height
                    });
                    Mouse.setOffset(render.mouse, render.bounds.min);
                  }
                };
                Render.startViewTransform = function(render) {
                  var boundsWidth = render.bounds.max.x - render.bounds.min.x, boundsHeight = render.bounds.max.y - render.bounds.min.y, boundsScaleX = boundsWidth / render.options.width, boundsScaleY = boundsHeight / render.options.height;
                  render.context.setTransform(
                    render.options.pixelRatio / boundsScaleX,
                    0,
                    0,
                    render.options.pixelRatio / boundsScaleY,
                    0,
                    0
                  );
                  render.context.translate(-render.bounds.min.x, -render.bounds.min.y);
                };
                Render.endViewTransform = function(render) {
                  render.context.setTransform(render.options.pixelRatio, 0, 0, render.options.pixelRatio, 0, 0);
                };
                Render.world = function(render, time) {
                  var startTime = Common.now(), engine = render.engine, world = engine.world, canvas = render.canvas, context = render.context, options = render.options, timing = render.timing;
                  var allBodies = Composite.allBodies(world), allConstraints = Composite.allConstraints(world), background = options.wireframes ? options.wireframeBackground : options.background, bodies = [], constraints = [], i;
                  var event = {
                    timestamp: engine.timing.timestamp
                  };
                  Events.trigger(render, "beforeRender", event);
                  if (render.currentBackground !== background)
                    _applyBackground(render, background);
                  context.globalCompositeOperation = "source-in";
                  context.fillStyle = "transparent";
                  context.fillRect(0, 0, canvas.width, canvas.height);
                  context.globalCompositeOperation = "source-over";
                  if (options.hasBounds) {
                    for (i = 0; i < allBodies.length; i++) {
                      var body = allBodies[i];
                      if (Bounds.overlaps(body.bounds, render.bounds))
                        bodies.push(body);
                    }
                    for (i = 0; i < allConstraints.length; i++) {
                      var constraint = allConstraints[i], bodyA = constraint.bodyA, bodyB = constraint.bodyB, pointAWorld = constraint.pointA, pointBWorld = constraint.pointB;
                      if (bodyA) pointAWorld = Vector.add(bodyA.position, constraint.pointA);
                      if (bodyB) pointBWorld = Vector.add(bodyB.position, constraint.pointB);
                      if (!pointAWorld || !pointBWorld)
                        continue;
                      if (Bounds.contains(render.bounds, pointAWorld) || Bounds.contains(render.bounds, pointBWorld))
                        constraints.push(constraint);
                    }
                    Render.startViewTransform(render);
                    if (render.mouse) {
                      Mouse.setScale(render.mouse, {
                        x: (render.bounds.max.x - render.bounds.min.x) / render.options.width,
                        y: (render.bounds.max.y - render.bounds.min.y) / render.options.height
                      });
                      Mouse.setOffset(render.mouse, render.bounds.min);
                    }
                  } else {
                    constraints = allConstraints;
                    bodies = allBodies;
                    if (render.options.pixelRatio !== 1) {
                      render.context.setTransform(render.options.pixelRatio, 0, 0, render.options.pixelRatio, 0, 0);
                    }
                  }
                  if (!options.wireframes || engine.enableSleeping && options.showSleeping) {
                    Render.bodies(render, bodies, context);
                  } else {
                    if (options.showConvexHulls)
                      Render.bodyConvexHulls(render, bodies, context);
                    Render.bodyWireframes(render, bodies, context);
                  }
                  if (options.showBounds)
                    Render.bodyBounds(render, bodies, context);
                  if (options.showAxes || options.showAngleIndicator)
                    Render.bodyAxes(render, bodies, context);
                  if (options.showPositions)
                    Render.bodyPositions(render, bodies, context);
                  if (options.showVelocity)
                    Render.bodyVelocity(render, bodies, context);
                  if (options.showIds)
                    Render.bodyIds(render, bodies, context);
                  if (options.showSeparations)
                    Render.separations(render, engine.pairs.list, context);
                  if (options.showCollisions)
                    Render.collisions(render, engine.pairs.list, context);
                  if (options.showVertexNumbers)
                    Render.vertexNumbers(render, bodies, context);
                  if (options.showMousePosition)
                    Render.mousePosition(render, render.mouse, context);
                  Render.constraints(constraints, context);
                  if (options.hasBounds) {
                    Render.endViewTransform(render);
                  }
                  Events.trigger(render, "afterRender", event);
                  timing.lastElapsed = Common.now() - startTime;
                };
                Render.stats = function(render, context, time) {
                  var engine = render.engine, world = engine.world, bodies = Composite.allBodies(world), parts = 0, width = 55, height = 44, x = 0, y = 0;
                  for (var i = 0; i < bodies.length; i += 1) {
                    parts += bodies[i].parts.length;
                  }
                  var sections = {
                    "Part": parts,
                    "Body": bodies.length,
                    "Cons": Composite.allConstraints(world).length,
                    "Comp": Composite.allComposites(world).length,
                    "Pair": engine.pairs.list.length
                  };
                  context.fillStyle = "#0e0f19";
                  context.fillRect(x, y, width * 5.5, height);
                  context.font = "12px Arial";
                  context.textBaseline = "top";
                  context.textAlign = "right";
                  for (var key in sections) {
                    var section = sections[key];
                    context.fillStyle = "#aaa";
                    context.fillText(key, x + width, y + 8);
                    context.fillStyle = "#eee";
                    context.fillText(section, x + width, y + 26);
                    x += width;
                  }
                };
                Render.performance = function(render, context) {
                  var engine = render.engine, timing = render.timing, deltaHistory = timing.deltaHistory, elapsedHistory = timing.elapsedHistory, timestampElapsedHistory = timing.timestampElapsedHistory, engineDeltaHistory = timing.engineDeltaHistory, engineUpdatesHistory = timing.engineUpdatesHistory, engineElapsedHistory = timing.engineElapsedHistory, lastEngineUpdatesPerFrame = engine.timing.lastUpdatesPerFrame, lastEngineDelta = engine.timing.lastDelta;
                  var deltaMean = _mean(deltaHistory), elapsedMean = _mean(elapsedHistory), engineDeltaMean = _mean(engineDeltaHistory), engineUpdatesMean = _mean(engineUpdatesHistory), engineElapsedMean = _mean(engineElapsedHistory), timestampElapsedMean = _mean(timestampElapsedHistory), rateMean = timestampElapsedMean / deltaMean || 0, neededUpdatesPerFrame = Math.round(deltaMean / lastEngineDelta), fps = 1e3 / deltaMean || 0;
                  var graphHeight = 4, gap = 12, width = 60, height = 34, x = 10, y = 69;
                  context.fillStyle = "#0e0f19";
                  context.fillRect(0, 50, gap * 5 + width * 6 + 22, height);
                  Render.status(
                    context,
                    x,
                    y,
                    width,
                    graphHeight,
                    deltaHistory.length,
                    Math.round(fps) + " fps",
                    fps / Render._goodFps,
                    function(i) {
                      return deltaHistory[i] / deltaMean - 1;
                    }
                  );
                  Render.status(
                    context,
                    x + gap + width,
                    y,
                    width,
                    graphHeight,
                    engineDeltaHistory.length,
                    lastEngineDelta.toFixed(2) + " dt",
                    Render._goodDelta / lastEngineDelta,
                    function(i) {
                      return engineDeltaHistory[i] / engineDeltaMean - 1;
                    }
                  );
                  Render.status(
                    context,
                    x + (gap + width) * 2,
                    y,
                    width,
                    graphHeight,
                    engineUpdatesHistory.length,
                    lastEngineUpdatesPerFrame + " upf",
                    Math.pow(Common.clamp(engineUpdatesMean / neededUpdatesPerFrame || 1, 0, 1), 4),
                    function(i) {
                      return engineUpdatesHistory[i] / engineUpdatesMean - 1;
                    }
                  );
                  Render.status(
                    context,
                    x + (gap + width) * 3,
                    y,
                    width,
                    graphHeight,
                    engineElapsedHistory.length,
                    engineElapsedMean.toFixed(2) + " ut",
                    1 - lastEngineUpdatesPerFrame * engineElapsedMean / Render._goodFps,
                    function(i) {
                      return engineElapsedHistory[i] / engineElapsedMean - 1;
                    }
                  );
                  Render.status(
                    context,
                    x + (gap + width) * 4,
                    y,
                    width,
                    graphHeight,
                    elapsedHistory.length,
                    elapsedMean.toFixed(2) + " rt",
                    1 - elapsedMean / Render._goodFps,
                    function(i) {
                      return elapsedHistory[i] / elapsedMean - 1;
                    }
                  );
                  Render.status(
                    context,
                    x + (gap + width) * 5,
                    y,
                    width,
                    graphHeight,
                    timestampElapsedHistory.length,
                    rateMean.toFixed(2) + " x",
                    rateMean * rateMean * rateMean,
                    function(i) {
                      return (timestampElapsedHistory[i] / deltaHistory[i] / rateMean || 0) - 1;
                    }
                  );
                };
                Render.status = function(context, x, y, width, height, count, label, indicator, plotY) {
                  context.strokeStyle = "#888";
                  context.fillStyle = "#444";
                  context.lineWidth = 1;
                  context.fillRect(x, y + 7, width, 1);
                  context.beginPath();
                  context.moveTo(x, y + 7 - height * Common.clamp(0.4 * plotY(0), -2, 2));
                  for (var i = 0; i < width; i += 1) {
                    context.lineTo(x + i, y + 7 - (i < count ? height * Common.clamp(0.4 * plotY(i), -2, 2) : 0));
                  }
                  context.stroke();
                  context.fillStyle = "hsl(" + Common.clamp(25 + 95 * indicator, 0, 120) + ",100%,60%)";
                  context.fillRect(x, y - 7, 4, 4);
                  context.font = "12px Arial";
                  context.textBaseline = "middle";
                  context.textAlign = "right";
                  context.fillStyle = "#eee";
                  context.fillText(label, x + width, y - 5);
                };
                Render.constraints = function(constraints, context) {
                  var c = context;
                  for (var i = 0; i < constraints.length; i++) {
                    var constraint = constraints[i];
                    if (!constraint.render.visible || !constraint.pointA || !constraint.pointB)
                      continue;
                    var bodyA = constraint.bodyA, bodyB = constraint.bodyB, start, end;
                    if (bodyA) {
                      start = Vector.add(bodyA.position, constraint.pointA);
                    } else {
                      start = constraint.pointA;
                    }
                    if (constraint.render.type === "pin") {
                      c.beginPath();
                      c.arc(start.x, start.y, 3, 0, 2 * Math.PI);
                      c.closePath();
                    } else {
                      if (bodyB) {
                        end = Vector.add(bodyB.position, constraint.pointB);
                      } else {
                        end = constraint.pointB;
                      }
                      c.beginPath();
                      c.moveTo(start.x, start.y);
                      if (constraint.render.type === "spring") {
                        var delta = Vector.sub(end, start), normal = Vector.perp(Vector.normalise(delta)), coils = Math.ceil(Common.clamp(constraint.length / 5, 12, 20)), offset;
                        for (var j = 1; j < coils; j += 1) {
                          offset = j % 2 === 0 ? 1 : -1;
                          c.lineTo(
                            start.x + delta.x * (j / coils) + normal.x * offset * 4,
                            start.y + delta.y * (j / coils) + normal.y * offset * 4
                          );
                        }
                      }
                      c.lineTo(end.x, end.y);
                    }
                    if (constraint.render.lineWidth) {
                      c.lineWidth = constraint.render.lineWidth;
                      c.strokeStyle = constraint.render.strokeStyle;
                      c.stroke();
                    }
                    if (constraint.render.anchors) {
                      c.fillStyle = constraint.render.strokeStyle;
                      c.beginPath();
                      c.arc(start.x, start.y, 3, 0, 2 * Math.PI);
                      c.arc(end.x, end.y, 3, 0, 2 * Math.PI);
                      c.closePath();
                      c.fill();
                    }
                  }
                };
                Render.bodies = function(render, bodies, context) {
                  var c = context, engine = render.engine, options = render.options, showInternalEdges = options.showInternalEdges || !options.wireframes, body, part, i, k;
                  for (i = 0; i < bodies.length; i++) {
                    body = bodies[i];
                    if (!body.render.visible)
                      continue;
                    for (k = body.parts.length > 1 ? 1 : 0; k < body.parts.length; k++) {
                      part = body.parts[k];
                      if (!part.render.visible)
                        continue;
                      if (options.showSleeping && body.isSleeping) {
                        c.globalAlpha = 0.5 * part.render.opacity;
                      } else if (part.render.opacity !== 1) {
                        c.globalAlpha = part.render.opacity;
                      }
                      if (part.render.sprite && part.render.sprite.texture && !options.wireframes) {
                        var sprite = part.render.sprite, texture = _getTexture(render, sprite.texture);
                        c.translate(part.position.x, part.position.y);
                        c.rotate(part.angle);
                        c.drawImage(
                          texture,
                          texture.width * -sprite.xOffset * sprite.xScale,
                          texture.height * -sprite.yOffset * sprite.yScale,
                          texture.width * sprite.xScale,
                          texture.height * sprite.yScale
                        );
                        c.rotate(-part.angle);
                        c.translate(-part.position.x, -part.position.y);
                      } else {
                        if (part.circleRadius) {
                          c.beginPath();
                          c.arc(part.position.x, part.position.y, part.circleRadius, 0, 2 * Math.PI);
                        } else {
                          c.beginPath();
                          c.moveTo(part.vertices[0].x, part.vertices[0].y);
                          for (var j = 1; j < part.vertices.length; j++) {
                            if (!part.vertices[j - 1].isInternal || showInternalEdges) {
                              c.lineTo(part.vertices[j].x, part.vertices[j].y);
                            } else {
                              c.moveTo(part.vertices[j].x, part.vertices[j].y);
                            }
                            if (part.vertices[j].isInternal && !showInternalEdges) {
                              c.moveTo(part.vertices[(j + 1) % part.vertices.length].x, part.vertices[(j + 1) % part.vertices.length].y);
                            }
                          }
                          c.lineTo(part.vertices[0].x, part.vertices[0].y);
                          c.closePath();
                        }
                        if (!options.wireframes) {
                          c.fillStyle = part.render.fillStyle;
                          if (part.render.lineWidth) {
                            c.lineWidth = part.render.lineWidth;
                            c.strokeStyle = part.render.strokeStyle;
                            c.stroke();
                          }
                          c.fill();
                        } else {
                          c.lineWidth = 1;
                          c.strokeStyle = render.options.wireframeStrokeStyle;
                          c.stroke();
                        }
                      }
                      c.globalAlpha = 1;
                    }
                  }
                };
                Render.bodyWireframes = function(render, bodies, context) {
                  var c = context, showInternalEdges = render.options.showInternalEdges, body, part, i, j, k;
                  c.beginPath();
                  for (i = 0; i < bodies.length; i++) {
                    body = bodies[i];
                    if (!body.render.visible)
                      continue;
                    for (k = body.parts.length > 1 ? 1 : 0; k < body.parts.length; k++) {
                      part = body.parts[k];
                      c.moveTo(part.vertices[0].x, part.vertices[0].y);
                      for (j = 1; j < part.vertices.length; j++) {
                        if (!part.vertices[j - 1].isInternal || showInternalEdges) {
                          c.lineTo(part.vertices[j].x, part.vertices[j].y);
                        } else {
                          c.moveTo(part.vertices[j].x, part.vertices[j].y);
                        }
                        if (part.vertices[j].isInternal && !showInternalEdges) {
                          c.moveTo(part.vertices[(j + 1) % part.vertices.length].x, part.vertices[(j + 1) % part.vertices.length].y);
                        }
                      }
                      c.lineTo(part.vertices[0].x, part.vertices[0].y);
                    }
                  }
                  c.lineWidth = 1;
                  c.strokeStyle = render.options.wireframeStrokeStyle;
                  c.stroke();
                };
                Render.bodyConvexHulls = function(render, bodies, context) {
                  var c = context, body, part, i, j, k;
                  c.beginPath();
                  for (i = 0; i < bodies.length; i++) {
                    body = bodies[i];
                    if (!body.render.visible || body.parts.length === 1)
                      continue;
                    c.moveTo(body.vertices[0].x, body.vertices[0].y);
                    for (j = 1; j < body.vertices.length; j++) {
                      c.lineTo(body.vertices[j].x, body.vertices[j].y);
                    }
                    c.lineTo(body.vertices[0].x, body.vertices[0].y);
                  }
                  c.lineWidth = 1;
                  c.strokeStyle = "rgba(255,255,255,0.2)";
                  c.stroke();
                };
                Render.vertexNumbers = function(render, bodies, context) {
                  var c = context, i, j, k;
                  for (i = 0; i < bodies.length; i++) {
                    var parts = bodies[i].parts;
                    for (k = parts.length > 1 ? 1 : 0; k < parts.length; k++) {
                      var part = parts[k];
                      for (j = 0; j < part.vertices.length; j++) {
                        c.fillStyle = "rgba(255,255,255,0.2)";
                        c.fillText(i + "_" + j, part.position.x + (part.vertices[j].x - part.position.x) * 0.8, part.position.y + (part.vertices[j].y - part.position.y) * 0.8);
                      }
                    }
                  }
                };
                Render.mousePosition = function(render, mouse, context) {
                  var c = context;
                  c.fillStyle = "rgba(255,255,255,0.8)";
                  c.fillText(mouse.position.x + "  " + mouse.position.y, mouse.position.x + 5, mouse.position.y - 5);
                };
                Render.bodyBounds = function(render, bodies, context) {
                  var c = context, engine = render.engine, options = render.options;
                  c.beginPath();
                  for (var i = 0; i < bodies.length; i++) {
                    var body = bodies[i];
                    if (body.render.visible) {
                      var parts = bodies[i].parts;
                      for (var j = parts.length > 1 ? 1 : 0; j < parts.length; j++) {
                        var part = parts[j];
                        c.rect(part.bounds.min.x, part.bounds.min.y, part.bounds.max.x - part.bounds.min.x, part.bounds.max.y - part.bounds.min.y);
                      }
                    }
                  }
                  if (options.wireframes) {
                    c.strokeStyle = "rgba(255,255,255,0.08)";
                  } else {
                    c.strokeStyle = "rgba(0,0,0,0.1)";
                  }
                  c.lineWidth = 1;
                  c.stroke();
                };
                Render.bodyAxes = function(render, bodies, context) {
                  var c = context, engine = render.engine, options = render.options, part, i, j, k;
                  c.beginPath();
                  for (i = 0; i < bodies.length; i++) {
                    var body = bodies[i], parts = body.parts;
                    if (!body.render.visible)
                      continue;
                    if (options.showAxes) {
                      for (j = parts.length > 1 ? 1 : 0; j < parts.length; j++) {
                        part = parts[j];
                        for (k = 0; k < part.axes.length; k++) {
                          var axis = part.axes[k];
                          c.moveTo(part.position.x, part.position.y);
                          c.lineTo(part.position.x + axis.x * 20, part.position.y + axis.y * 20);
                        }
                      }
                    } else {
                      for (j = parts.length > 1 ? 1 : 0; j < parts.length; j++) {
                        part = parts[j];
                        for (k = 0; k < part.axes.length; k++) {
                          c.moveTo(part.position.x, part.position.y);
                          c.lineTo(
                            (part.vertices[0].x + part.vertices[part.vertices.length - 1].x) / 2,
                            (part.vertices[0].y + part.vertices[part.vertices.length - 1].y) / 2
                          );
                        }
                      }
                    }
                  }
                  if (options.wireframes) {
                    c.strokeStyle = "indianred";
                    c.lineWidth = 1;
                  } else {
                    c.strokeStyle = "rgba(255, 255, 255, 0.4)";
                    c.globalCompositeOperation = "overlay";
                    c.lineWidth = 2;
                  }
                  c.stroke();
                  c.globalCompositeOperation = "source-over";
                };
                Render.bodyPositions = function(render, bodies, context) {
                  var c = context, engine = render.engine, options = render.options, body, part, i, k;
                  c.beginPath();
                  for (i = 0; i < bodies.length; i++) {
                    body = bodies[i];
                    if (!body.render.visible)
                      continue;
                    for (k = 0; k < body.parts.length; k++) {
                      part = body.parts[k];
                      c.arc(part.position.x, part.position.y, 3, 0, 2 * Math.PI, false);
                      c.closePath();
                    }
                  }
                  if (options.wireframes) {
                    c.fillStyle = "indianred";
                  } else {
                    c.fillStyle = "rgba(0,0,0,0.5)";
                  }
                  c.fill();
                  c.beginPath();
                  for (i = 0; i < bodies.length; i++) {
                    body = bodies[i];
                    if (body.render.visible) {
                      c.arc(body.positionPrev.x, body.positionPrev.y, 2, 0, 2 * Math.PI, false);
                      c.closePath();
                    }
                  }
                  c.fillStyle = "rgba(255,165,0,0.8)";
                  c.fill();
                };
                Render.bodyVelocity = function(render, bodies, context) {
                  var c = context;
                  c.beginPath();
                  for (var i = 0; i < bodies.length; i++) {
                    var body = bodies[i];
                    if (!body.render.visible)
                      continue;
                    var velocity = Body.getVelocity(body);
                    c.moveTo(body.position.x, body.position.y);
                    c.lineTo(body.position.x + velocity.x, body.position.y + velocity.y);
                  }
                  c.lineWidth = 3;
                  c.strokeStyle = "cornflowerblue";
                  c.stroke();
                };
                Render.bodyIds = function(render, bodies, context) {
                  var c = context, i, j;
                  for (i = 0; i < bodies.length; i++) {
                    if (!bodies[i].render.visible)
                      continue;
                    var parts = bodies[i].parts;
                    for (j = parts.length > 1 ? 1 : 0; j < parts.length; j++) {
                      var part = parts[j];
                      c.font = "12px Arial";
                      c.fillStyle = "rgba(255,255,255,0.5)";
                      c.fillText(part.id, part.position.x + 10, part.position.y - 10);
                    }
                  }
                };
                Render.collisions = function(render, pairs, context) {
                  var c = context, options = render.options, pair, collision, corrected, bodyA, bodyB, i, j;
                  c.beginPath();
                  for (i = 0; i < pairs.length; i++) {
                    pair = pairs[i];
                    if (!pair.isActive)
                      continue;
                    collision = pair.collision;
                    for (j = 0; j < pair.contactCount; j++) {
                      var contact = pair.contacts[j], vertex = contact.vertex;
                      c.rect(vertex.x - 1.5, vertex.y - 1.5, 3.5, 3.5);
                    }
                  }
                  if (options.wireframes) {
                    c.fillStyle = "rgba(255,255,255,0.7)";
                  } else {
                    c.fillStyle = "orange";
                  }
                  c.fill();
                  c.beginPath();
                  for (i = 0; i < pairs.length; i++) {
                    pair = pairs[i];
                    if (!pair.isActive)
                      continue;
                    collision = pair.collision;
                    if (pair.contactCount > 0) {
                      var normalPosX = pair.contacts[0].vertex.x, normalPosY = pair.contacts[0].vertex.y;
                      if (pair.contactCount === 2) {
                        normalPosX = (pair.contacts[0].vertex.x + pair.contacts[1].vertex.x) / 2;
                        normalPosY = (pair.contacts[0].vertex.y + pair.contacts[1].vertex.y) / 2;
                      }
                      if (collision.bodyB === collision.supports[0].body || collision.bodyA.isStatic === true) {
                        c.moveTo(normalPosX - collision.normal.x * 8, normalPosY - collision.normal.y * 8);
                      } else {
                        c.moveTo(normalPosX + collision.normal.x * 8, normalPosY + collision.normal.y * 8);
                      }
                      c.lineTo(normalPosX, normalPosY);
                    }
                  }
                  if (options.wireframes) {
                    c.strokeStyle = "rgba(255,165,0,0.7)";
                  } else {
                    c.strokeStyle = "orange";
                  }
                  c.lineWidth = 1;
                  c.stroke();
                };
                Render.separations = function(render, pairs, context) {
                  var c = context, options = render.options, pair, collision, corrected, bodyA, bodyB, i, j;
                  c.beginPath();
                  for (i = 0; i < pairs.length; i++) {
                    pair = pairs[i];
                    if (!pair.isActive)
                      continue;
                    collision = pair.collision;
                    bodyA = collision.bodyA;
                    bodyB = collision.bodyB;
                    var k = 1;
                    if (!bodyB.isStatic && !bodyA.isStatic) k = 0.5;
                    if (bodyB.isStatic) k = 0;
                    c.moveTo(bodyB.position.x, bodyB.position.y);
                    c.lineTo(bodyB.position.x - collision.penetration.x * k, bodyB.position.y - collision.penetration.y * k);
                    k = 1;
                    if (!bodyB.isStatic && !bodyA.isStatic) k = 0.5;
                    if (bodyA.isStatic) k = 0;
                    c.moveTo(bodyA.position.x, bodyA.position.y);
                    c.lineTo(bodyA.position.x + collision.penetration.x * k, bodyA.position.y + collision.penetration.y * k);
                  }
                  if (options.wireframes) {
                    c.strokeStyle = "rgba(255,165,0,0.5)";
                  } else {
                    c.strokeStyle = "orange";
                  }
                  c.stroke();
                };
                Render.inspector = function(inspector, context) {
                  var engine = inspector.engine, selected = inspector.selected, render = inspector.render, options = render.options, bounds;
                  if (options.hasBounds) {
                    var boundsWidth = render.bounds.max.x - render.bounds.min.x, boundsHeight = render.bounds.max.y - render.bounds.min.y, boundsScaleX = boundsWidth / render.options.width, boundsScaleY = boundsHeight / render.options.height;
                    context.scale(1 / boundsScaleX, 1 / boundsScaleY);
                    context.translate(-render.bounds.min.x, -render.bounds.min.y);
                  }
                  for (var i = 0; i < selected.length; i++) {
                    var item = selected[i].data;
                    context.translate(0.5, 0.5);
                    context.lineWidth = 1;
                    context.strokeStyle = "rgba(255,165,0,0.9)";
                    context.setLineDash([1, 2]);
                    switch (item.type) {
                      case "body":
                        bounds = item.bounds;
                        context.beginPath();
                        context.rect(
                          Math.floor(bounds.min.x - 3),
                          Math.floor(bounds.min.y - 3),
                          Math.floor(bounds.max.x - bounds.min.x + 6),
                          Math.floor(bounds.max.y - bounds.min.y + 6)
                        );
                        context.closePath();
                        context.stroke();
                        break;
                      case "constraint":
                        var point = item.pointA;
                        if (item.bodyA)
                          point = item.pointB;
                        context.beginPath();
                        context.arc(point.x, point.y, 10, 0, 2 * Math.PI);
                        context.closePath();
                        context.stroke();
                        break;
                    }
                    context.setLineDash([]);
                    context.translate(-0.5, -0.5);
                  }
                  if (inspector.selectStart !== null) {
                    context.translate(0.5, 0.5);
                    context.lineWidth = 1;
                    context.strokeStyle = "rgba(255,165,0,0.6)";
                    context.fillStyle = "rgba(255,165,0,0.1)";
                    bounds = inspector.selectBounds;
                    context.beginPath();
                    context.rect(
                      Math.floor(bounds.min.x),
                      Math.floor(bounds.min.y),
                      Math.floor(bounds.max.x - bounds.min.x),
                      Math.floor(bounds.max.y - bounds.min.y)
                    );
                    context.closePath();
                    context.stroke();
                    context.fill();
                    context.translate(-0.5, -0.5);
                  }
                  if (options.hasBounds)
                    context.setTransform(1, 0, 0, 1, 0, 0);
                };
                var _updateTiming = function(render, time) {
                  var engine = render.engine, timing = render.timing, historySize = timing.historySize, timestamp = engine.timing.timestamp;
                  timing.delta = time - timing.lastTime || Render._goodDelta;
                  timing.lastTime = time;
                  timing.timestampElapsed = timestamp - timing.lastTimestamp || 0;
                  timing.lastTimestamp = timestamp;
                  timing.deltaHistory.unshift(timing.delta);
                  timing.deltaHistory.length = Math.min(timing.deltaHistory.length, historySize);
                  timing.engineDeltaHistory.unshift(engine.timing.lastDelta);
                  timing.engineDeltaHistory.length = Math.min(timing.engineDeltaHistory.length, historySize);
                  timing.timestampElapsedHistory.unshift(timing.timestampElapsed);
                  timing.timestampElapsedHistory.length = Math.min(timing.timestampElapsedHistory.length, historySize);
                  timing.engineUpdatesHistory.unshift(engine.timing.lastUpdatesPerFrame);
                  timing.engineUpdatesHistory.length = Math.min(timing.engineUpdatesHistory.length, historySize);
                  timing.engineElapsedHistory.unshift(engine.timing.lastElapsed);
                  timing.engineElapsedHistory.length = Math.min(timing.engineElapsedHistory.length, historySize);
                  timing.elapsedHistory.unshift(timing.lastElapsed);
                  timing.elapsedHistory.length = Math.min(timing.elapsedHistory.length, historySize);
                };
                var _mean = function(values) {
                  var result = 0;
                  for (var i = 0; i < values.length; i += 1) {
                    result += values[i];
                  }
                  return result / values.length || 0;
                };
                var _createCanvas = function(width, height) {
                  var canvas = document.createElement("canvas");
                  canvas.width = width;
                  canvas.height = height;
                  canvas.oncontextmenu = function() {
                    return false;
                  };
                  canvas.onselectstart = function() {
                    return false;
                  };
                  return canvas;
                };
                var _getPixelRatio = function(canvas) {
                  var context = canvas.getContext("2d"), devicePixelRatio = window.devicePixelRatio || 1, backingStorePixelRatio = context.webkitBackingStorePixelRatio || context.mozBackingStorePixelRatio || context.msBackingStorePixelRatio || context.oBackingStorePixelRatio || context.backingStorePixelRatio || 1;
                  return devicePixelRatio / backingStorePixelRatio;
                };
                var _getTexture = function(render, imagePath) {
                  var image = render.textures[imagePath];
                  if (image)
                    return image;
                  image = render.textures[imagePath] = new Image();
                  image.src = imagePath;
                  return image;
                };
                var _applyBackground = function(render, background) {
                  var cssBackground = background;
                  if (/(jpg|gif|png)$/.test(background))
                    cssBackground = "url(" + background + ")";
                  render.canvas.style.background = cssBackground;
                  render.canvas.style.backgroundSize = "contain";
                  render.currentBackground = background;
                };
              })();
            }),
            /* 27 */
            /***/
            (function(module2, exports2, __webpack_require__) {
              var Runner = {};
              module2.exports = Runner;
              var Events = __webpack_require__(5);
              var Engine = __webpack_require__(17);
              var Common = __webpack_require__(0);
              (function() {
                Runner._maxFrameDelta = 1e3 / 15;
                Runner._frameDeltaFallback = 1e3 / 60;
                Runner._timeBufferMargin = 1.5;
                Runner._elapsedNextEstimate = 1;
                Runner._smoothingLowerBound = 0.1;
                Runner._smoothingUpperBound = 0.9;
                Runner.create = function(options) {
                  var defaults = {
                    delta: 1e3 / 60,
                    frameDelta: null,
                    frameDeltaSmoothing: true,
                    frameDeltaSnapping: true,
                    frameDeltaHistory: [],
                    frameDeltaHistorySize: 100,
                    frameRequestId: null,
                    timeBuffer: 0,
                    timeLastTick: null,
                    maxUpdates: null,
                    maxFrameTime: 1e3 / 30,
                    lastUpdatesDeferred: 0,
                    enabled: true
                  };
                  var runner = Common.extend(defaults, options);
                  runner.fps = 0;
                  return runner;
                };
                Runner.run = function(runner, engine) {
                  runner.timeBuffer = Runner._frameDeltaFallback;
                  (function onFrame(time) {
                    runner.frameRequestId = Runner._onNextFrame(runner, onFrame);
                    if (time && runner.enabled) {
                      Runner.tick(runner, engine, time);
                    }
                  })();
                  return runner;
                };
                Runner.tick = function(runner, engine, time) {
                  var tickStartTime = Common.now(), engineDelta = runner.delta, updateCount = 0;
                  var frameDelta = time - runner.timeLastTick;
                  if (!frameDelta || !runner.timeLastTick || frameDelta > Math.max(Runner._maxFrameDelta, runner.maxFrameTime)) {
                    frameDelta = runner.frameDelta || Runner._frameDeltaFallback;
                  }
                  if (runner.frameDeltaSmoothing) {
                    runner.frameDeltaHistory.push(frameDelta);
                    runner.frameDeltaHistory = runner.frameDeltaHistory.slice(-runner.frameDeltaHistorySize);
                    var deltaHistorySorted = runner.frameDeltaHistory.slice(0).sort();
                    var deltaHistoryWindow = runner.frameDeltaHistory.slice(
                      deltaHistorySorted.length * Runner._smoothingLowerBound,
                      deltaHistorySorted.length * Runner._smoothingUpperBound
                    );
                    var frameDeltaSmoothed = _mean(deltaHistoryWindow);
                    frameDelta = frameDeltaSmoothed || frameDelta;
                  }
                  if (runner.frameDeltaSnapping) {
                    frameDelta = 1e3 / Math.round(1e3 / frameDelta);
                  }
                  runner.frameDelta = frameDelta;
                  runner.timeLastTick = time;
                  runner.timeBuffer += runner.frameDelta;
                  runner.timeBuffer = Common.clamp(
                    runner.timeBuffer,
                    0,
                    runner.frameDelta + engineDelta * Runner._timeBufferMargin
                  );
                  runner.lastUpdatesDeferred = 0;
                  var maxUpdates = runner.maxUpdates || Math.ceil(runner.maxFrameTime / engineDelta);
                  var event = {
                    timestamp: engine.timing.timestamp
                  };
                  Events.trigger(runner, "beforeTick", event);
                  Events.trigger(runner, "tick", event);
                  var updateStartTime = Common.now();
                  while (engineDelta > 0 && runner.timeBuffer >= engineDelta * Runner._timeBufferMargin) {
                    Events.trigger(runner, "beforeUpdate", event);
                    Engine.update(engine, engineDelta);
                    Events.trigger(runner, "afterUpdate", event);
                    runner.timeBuffer -= engineDelta;
                    updateCount += 1;
                    var elapsedTimeTotal = Common.now() - tickStartTime, elapsedTimeUpdates = Common.now() - updateStartTime, elapsedNextEstimate = elapsedTimeTotal + Runner._elapsedNextEstimate * elapsedTimeUpdates / updateCount;
                    if (updateCount >= maxUpdates || elapsedNextEstimate > runner.maxFrameTime) {
                      runner.lastUpdatesDeferred = Math.round(Math.max(0, runner.timeBuffer / engineDelta - Runner._timeBufferMargin));
                      break;
                    }
                  }
                  engine.timing.lastUpdatesPerFrame = updateCount;
                  Events.trigger(runner, "afterTick", event);
                  if (runner.frameDeltaHistory.length >= 100) {
                    if (runner.lastUpdatesDeferred && Math.round(runner.frameDelta / engineDelta) > maxUpdates) {
                      Common.warnOnce("Matter.Runner: runner reached runner.maxUpdates, see docs.");
                    } else if (runner.lastUpdatesDeferred) {
                      Common.warnOnce("Matter.Runner: runner reached runner.maxFrameTime, see docs.");
                    }
                    if (typeof runner.isFixed !== "undefined") {
                      Common.warnOnce("Matter.Runner: runner.isFixed is now redundant, see docs.");
                    }
                    if (runner.deltaMin || runner.deltaMax) {
                      Common.warnOnce("Matter.Runner: runner.deltaMin and runner.deltaMax were removed, see docs.");
                    }
                    if (runner.fps !== 0) {
                      Common.warnOnce("Matter.Runner: runner.fps was replaced by runner.delta, see docs.");
                    }
                  }
                };
                Runner.stop = function(runner) {
                  Runner._cancelNextFrame(runner);
                };
                Runner._onNextFrame = function(runner, callback) {
                  if (typeof window !== "undefined" && window.requestAnimationFrame) {
                    runner.frameRequestId = window.requestAnimationFrame(callback);
                  } else {
                    throw new Error("Matter.Runner: missing required global window.requestAnimationFrame.");
                  }
                  return runner.frameRequestId;
                };
                Runner._cancelNextFrame = function(runner) {
                  if (typeof window !== "undefined" && window.cancelAnimationFrame) {
                    window.cancelAnimationFrame(runner.frameRequestId);
                  } else {
                    throw new Error("Matter.Runner: missing required global window.cancelAnimationFrame.");
                  }
                };
                var _mean = function(values) {
                  var result = 0, valuesLength = values.length;
                  for (var i = 0; i < valuesLength; i += 1) {
                    result += values[i];
                  }
                  return result / valuesLength || 0;
                };
              })();
            }),
            /* 28 */
            /***/
            (function(module2, exports2, __webpack_require__) {
              var SAT = {};
              module2.exports = SAT;
              var Collision = __webpack_require__(8);
              var Common = __webpack_require__(0);
              var deprecated = Common.deprecated;
              (function() {
                SAT.collides = function(bodyA, bodyB) {
                  return Collision.collides(bodyA, bodyB);
                };
                deprecated(SAT, "collides", "SAT.collides \u27A4 replaced by Collision.collides");
              })();
            }),
            /* 29 */
            /***/
            (function(module2, exports2, __webpack_require__) {
              var Svg = {};
              module2.exports = Svg;
              var Bounds = __webpack_require__(1);
              var Common = __webpack_require__(0);
              (function() {
                Svg.pathToVertices = function(path, sampleLength) {
                  if (typeof window !== "undefined" && !("SVGPathSeg" in window)) {
                    Common.warn("Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.");
                  }
                  var i, il, total, point, segment, segments, segmentsQueue, lastSegment, lastPoint, segmentIndex, points = [], lx, ly, length = 0, x = 0, y = 0;
                  sampleLength = sampleLength || 15;
                  var addPoint = function(px, py, pathSegType) {
                    var isRelative = pathSegType % 2 === 1 && pathSegType > 1;
                    if (!lastPoint || px != lastPoint.x || py != lastPoint.y) {
                      if (lastPoint && isRelative) {
                        lx = lastPoint.x;
                        ly = lastPoint.y;
                      } else {
                        lx = 0;
                        ly = 0;
                      }
                      var point2 = {
                        x: lx + px,
                        y: ly + py
                      };
                      if (isRelative || !lastPoint) {
                        lastPoint = point2;
                      }
                      points.push(point2);
                      x = lx + px;
                      y = ly + py;
                    }
                  };
                  var addSegmentPoint = function(segment2) {
                    var segType = segment2.pathSegTypeAsLetter.toUpperCase();
                    if (segType === "Z")
                      return;
                    switch (segType) {
                      case "M":
                      case "L":
                      case "T":
                      case "C":
                      case "S":
                      case "Q":
                        x = segment2.x;
                        y = segment2.y;
                        break;
                      case "H":
                        x = segment2.x;
                        break;
                      case "V":
                        y = segment2.y;
                        break;
                    }
                    addPoint(x, y, segment2.pathSegType);
                  };
                  Svg._svgPathToAbsolute(path);
                  total = path.getTotalLength();
                  segments = [];
                  for (i = 0; i < path.pathSegList.numberOfItems; i += 1)
                    segments.push(path.pathSegList.getItem(i));
                  segmentsQueue = segments.concat();
                  while (length < total) {
                    segmentIndex = path.getPathSegAtLength(length);
                    segment = segments[segmentIndex];
                    if (segment != lastSegment) {
                      while (segmentsQueue.length && segmentsQueue[0] != segment)
                        addSegmentPoint(segmentsQueue.shift());
                      lastSegment = segment;
                    }
                    switch (segment.pathSegTypeAsLetter.toUpperCase()) {
                      case "C":
                      case "T":
                      case "S":
                      case "Q":
                      case "A":
                        point = path.getPointAtLength(length);
                        addPoint(point.x, point.y, 0);
                        break;
                    }
                    length += sampleLength;
                  }
                  for (i = 0, il = segmentsQueue.length; i < il; ++i)
                    addSegmentPoint(segmentsQueue[i]);
                  return points;
                };
                Svg._svgPathToAbsolute = function(path) {
                  var x0, y0, x1, y1, x2, y2, segs = path.pathSegList, x = 0, y = 0, len = segs.numberOfItems;
                  for (var i = 0; i < len; ++i) {
                    var seg = segs.getItem(i), segType = seg.pathSegTypeAsLetter;
                    if (/[MLHVCSQTA]/.test(segType)) {
                      if ("x" in seg) x = seg.x;
                      if ("y" in seg) y = seg.y;
                    } else {
                      if ("x1" in seg) x1 = x + seg.x1;
                      if ("x2" in seg) x2 = x + seg.x2;
                      if ("y1" in seg) y1 = y + seg.y1;
                      if ("y2" in seg) y2 = y + seg.y2;
                      if ("x" in seg) x += seg.x;
                      if ("y" in seg) y += seg.y;
                      switch (segType) {
                        case "m":
                          segs.replaceItem(path.createSVGPathSegMovetoAbs(x, y), i);
                          break;
                        case "l":
                          segs.replaceItem(path.createSVGPathSegLinetoAbs(x, y), i);
                          break;
                        case "h":
                          segs.replaceItem(path.createSVGPathSegLinetoHorizontalAbs(x), i);
                          break;
                        case "v":
                          segs.replaceItem(path.createSVGPathSegLinetoVerticalAbs(y), i);
                          break;
                        case "c":
                          segs.replaceItem(path.createSVGPathSegCurvetoCubicAbs(x, y, x1, y1, x2, y2), i);
                          break;
                        case "s":
                          segs.replaceItem(path.createSVGPathSegCurvetoCubicSmoothAbs(x, y, x2, y2), i);
                          break;
                        case "q":
                          segs.replaceItem(path.createSVGPathSegCurvetoQuadraticAbs(x, y, x1, y1), i);
                          break;
                        case "t":
                          segs.replaceItem(path.createSVGPathSegCurvetoQuadraticSmoothAbs(x, y), i);
                          break;
                        case "a":
                          segs.replaceItem(path.createSVGPathSegArcAbs(x, y, seg.r1, seg.r2, seg.angle, seg.largeArcFlag, seg.sweepFlag), i);
                          break;
                        case "z":
                        case "Z":
                          x = x0;
                          y = y0;
                          break;
                      }
                    }
                    if (segType == "M" || segType == "m") {
                      x0 = x;
                      y0 = y;
                    }
                  }
                };
              })();
            }),
            /* 30 */
            /***/
            (function(module2, exports2, __webpack_require__) {
              var World = {};
              module2.exports = World;
              var Composite = __webpack_require__(6);
              var Common = __webpack_require__(0);
              (function() {
                World.create = Composite.create;
                World.add = Composite.add;
                World.remove = Composite.remove;
                World.clear = Composite.clear;
                World.addComposite = Composite.addComposite;
                World.addBody = Composite.addBody;
                World.addConstraint = Composite.addConstraint;
              })();
            })
            /******/
          ])
        );
      });
    }
  });

  // dist/script.js
  var require_script = __commonJS({
    "dist/script.js"(exports, module) {
      module.exports = '(() => {\n  var __create = Object.create;\n  var __defProp = Object.defineProperty;\n  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;\n  var __getOwnPropNames = Object.getOwnPropertyNames;\n  var __getProtoOf = Object.getPrototypeOf;\n  var __hasOwnProp = Object.prototype.hasOwnProperty;\n  var __esm = (fn, res, err) => function __init() {\n    if (err) throw err[0];\n    try {\n      return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;\n    } catch (e) {\n      throw err = [e], e;\n    }\n  };\n  var __commonJS = (cb, mod) => function __require() {\n    try {\n      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;\n    } catch (e) {\n      throw mod = 0, e;\n    }\n  };\n  var __copyProps = (to, from, except, desc) => {\n    if (from && typeof from === "object" || typeof from === "function") {\n      for (let key of __getOwnPropNames(from))\n        if (!__hasOwnProp.call(to, key) && key !== except)\n          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n    }\n    return to;\n  };\n  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(\n    // If the importer is in node compatibility mode or this is not an ESM\n    // file that has been converted to a CommonJS file using a Babel-\n    // compatible transform (i.e. "__esModule" has not been set), then set\n    // "default" to the CommonJS "module.exports" for node compatibility.\n    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,\n    mod\n  ));\n\n  // node_modules/jquery/dist-module/jquery.module.js\n  function jQueryFactory(window2, noGlobal) {\n    if (typeof window2 === "undefined" || !window2.document) {\n      throw new Error("jQuery requires a window with a document");\n    }\n    var arr = [];\n    var getProto = Object.getPrototypeOf;\n    var slice = arr.slice;\n    var flat = arr.flat ? function(array) {\n      return arr.flat.call(array);\n    } : function(array) {\n      return arr.concat.apply([], array);\n    };\n    var push = arr.push;\n    var indexOf = arr.indexOf;\n    var class2type = {};\n    var toString2 = class2type.toString;\n    var hasOwn = class2type.hasOwnProperty;\n    var fnToString = hasOwn.toString;\n    var ObjectFunctionString = fnToString.call(Object);\n    var support = {};\n    function toType(obj) {\n      if (obj == null) {\n        return obj + "";\n      }\n      return typeof obj === "object" ? class2type[toString2.call(obj)] || "object" : typeof obj;\n    }\n    function isWindow(obj) {\n      return obj != null && obj === obj.window;\n    }\n    function isArrayLike(obj) {\n      var length = !!obj && obj.length, type = toType(obj);\n      if (typeof obj === "function" || isWindow(obj)) {\n        return false;\n      }\n      return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;\n    }\n    var document$1 = window2.document;\n    var preservedScriptAttributes = {\n      type: true,\n      src: true,\n      nonce: true,\n      noModule: true\n    };\n    function DOMEval(code, node, doc) {\n      doc = doc || document$1;\n      var i2, script = doc.createElement("script");\n      script.text = code;\n      for (i2 in preservedScriptAttributes) {\n        if (node && node[i2]) {\n          script[i2] = node[i2];\n        }\n      }\n      if (doc.head.appendChild(script).parentNode) {\n        script.parentNode.removeChild(script);\n      }\n    }\n    var version = "4.0.0", rhtmlSuffix = /HTML$/i, jQuery2 = function(selector, context) {\n      return new jQuery2.fn.init(selector, context);\n    };\n    jQuery2.fn = jQuery2.prototype = {\n      // The current version of jQuery being used\n      jquery: version,\n      constructor: jQuery2,\n      // The default length of a jQuery object is 0\n      length: 0,\n      toArray: function() {\n        return slice.call(this);\n      },\n      // Get the Nth element in the matched element set OR\n      // Get the whole matched element set as a clean array\n      get: function(num) {\n        if (num == null) {\n          return slice.call(this);\n        }\n        return num < 0 ? this[num + this.length] : this[num];\n      },\n      // Take an array of elements and push it onto the stack\n      // (returning the new matched element set)\n      pushStack: function(elems) {\n        var ret = jQuery2.merge(this.constructor(), elems);\n        ret.prevObject = this;\n        return ret;\n      },\n      // Execute a callback for every element in the matched set.\n      each: function(callback) {\n        return jQuery2.each(this, callback);\n      },\n      map: function(callback) {\n        return this.pushStack(jQuery2.map(this, function(elem, i2) {\n          return callback.call(elem, i2, elem);\n        }));\n      },\n      slice: function() {\n        return this.pushStack(slice.apply(this, arguments));\n      },\n      first: function() {\n        return this.eq(0);\n      },\n      last: function() {\n        return this.eq(-1);\n      },\n      even: function() {\n        return this.pushStack(jQuery2.grep(this, function(_elem, i2) {\n          return (i2 + 1) % 2;\n        }));\n      },\n      odd: function() {\n        return this.pushStack(jQuery2.grep(this, function(_elem, i2) {\n          return i2 % 2;\n        }));\n      },\n      eq: function(i2) {\n        var len = this.length, j = +i2 + (i2 < 0 ? len : 0);\n        return this.pushStack(j >= 0 && j < len ? [this[j]] : []);\n      },\n      end: function() {\n        return this.prevObject || this.constructor();\n      }\n    };\n    jQuery2.extend = jQuery2.fn.extend = function() {\n      var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i2 = 1, length = arguments.length, deep = false;\n      if (typeof target === "boolean") {\n        deep = target;\n        target = arguments[i2] || {};\n        i2++;\n      }\n      if (typeof target !== "object" && typeof target !== "function") {\n        target = {};\n      }\n      if (i2 === length) {\n        target = this;\n        i2--;\n      }\n      for (; i2 < length; i2++) {\n        if ((options = arguments[i2]) != null) {\n          for (name in options) {\n            copy = options[name];\n            if (name === "__proto__" || target === copy) {\n              continue;\n            }\n            if (deep && copy && (jQuery2.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {\n              src = target[name];\n              if (copyIsArray && !Array.isArray(src)) {\n                clone = [];\n              } else if (!copyIsArray && !jQuery2.isPlainObject(src)) {\n                clone = {};\n              } else {\n                clone = src;\n              }\n              copyIsArray = false;\n              target[name] = jQuery2.extend(deep, clone, copy);\n            } else if (copy !== void 0) {\n              target[name] = copy;\n            }\n          }\n        }\n      }\n      return target;\n    };\n    jQuery2.extend({\n      // Unique for each copy of jQuery on the page\n      expando: "jQuery" + (version + Math.random()).replace(/\\D/g, ""),\n      // Assume jQuery is ready without the ready module\n      isReady: true,\n      error: function(msg) {\n        throw new Error(msg);\n      },\n      noop: function() {\n      },\n      isPlainObject: function(obj) {\n        var proto, Ctor;\n        if (!obj || toString2.call(obj) !== "[object Object]") {\n          return false;\n        }\n        proto = getProto(obj);\n        if (!proto) {\n          return true;\n        }\n        Ctor = hasOwn.call(proto, "constructor") && proto.constructor;\n        return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;\n      },\n      isEmptyObject: function(obj) {\n        var name;\n        for (name in obj) {\n          return false;\n        }\n        return true;\n      },\n      // Evaluates a script in a provided context; falls back to the global one\n      // if not specified.\n      globalEval: function(code, options, doc) {\n        DOMEval(code, { nonce: options && options.nonce }, doc);\n      },\n      each: function(obj, callback) {\n        var length, i2 = 0;\n        if (isArrayLike(obj)) {\n          length = obj.length;\n          for (; i2 < length; i2++) {\n            if (callback.call(obj[i2], i2, obj[i2]) === false) {\n              break;\n            }\n          }\n        } else {\n          for (i2 in obj) {\n            if (callback.call(obj[i2], i2, obj[i2]) === false) {\n              break;\n            }\n          }\n        }\n        return obj;\n      },\n      // Retrieve the text value of an array of DOM nodes\n      text: function(elem) {\n        var node, ret = "", i2 = 0, nodeType = elem.nodeType;\n        if (!nodeType) {\n          while (node = elem[i2++]) {\n            ret += jQuery2.text(node);\n          }\n        }\n        if (nodeType === 1 || nodeType === 11) {\n          return elem.textContent;\n        }\n        if (nodeType === 9) {\n          return elem.documentElement.textContent;\n        }\n        if (nodeType === 3 || nodeType === 4) {\n          return elem.nodeValue;\n        }\n        return ret;\n      },\n      // results is for internal usage only\n      makeArray: function(arr2, results) {\n        var ret = results || [];\n        if (arr2 != null) {\n          if (isArrayLike(Object(arr2))) {\n            jQuery2.merge(\n              ret,\n              typeof arr2 === "string" ? [arr2] : arr2\n            );\n          } else {\n            push.call(ret, arr2);\n          }\n        }\n        return ret;\n      },\n      inArray: function(elem, arr2, i2) {\n        return arr2 == null ? -1 : indexOf.call(arr2, elem, i2);\n      },\n      isXMLDoc: function(elem) {\n        var namespace = elem && elem.namespaceURI, docElem = elem && (elem.ownerDocument || elem).documentElement;\n        return !rhtmlSuffix.test(namespace || docElem && docElem.nodeName || "HTML");\n      },\n      // Note: an element does not contain itself\n      contains: function(a, b) {\n        var bup = b && b.parentNode;\n        return a === bup || !!(bup && bup.nodeType === 1 && // Support: IE 9 - 11+\n        // IE doesn\'t have `contains` on SVG.\n        (a.contains ? a.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));\n      },\n      merge: function(first, second) {\n        var len = +second.length, j = 0, i2 = first.length;\n        for (; j < len; j++) {\n          first[i2++] = second[j];\n        }\n        first.length = i2;\n        return first;\n      },\n      grep: function(elems, callback, invert) {\n        var callbackInverse, matches2 = [], i2 = 0, length = elems.length, callbackExpect = !invert;\n        for (; i2 < length; i2++) {\n          callbackInverse = !callback(elems[i2], i2);\n          if (callbackInverse !== callbackExpect) {\n            matches2.push(elems[i2]);\n          }\n        }\n        return matches2;\n      },\n      // arg is for internal usage only\n      map: function(elems, callback, arg) {\n        var length, value, i2 = 0, ret = [];\n        if (isArrayLike(elems)) {\n          length = elems.length;\n          for (; i2 < length; i2++) {\n            value = callback(elems[i2], i2, arg);\n            if (value != null) {\n              ret.push(value);\n            }\n          }\n        } else {\n          for (i2 in elems) {\n            value = callback(elems[i2], i2, arg);\n            if (value != null) {\n              ret.push(value);\n            }\n          }\n        }\n        return flat(ret);\n      },\n      // A global GUID counter for objects\n      guid: 1,\n      // jQuery.support is not used in Core but other projects attach their\n      // properties to it so it needs to exist.\n      support\n    });\n    if (typeof Symbol === "function") {\n      jQuery2.fn[Symbol.iterator] = arr[Symbol.iterator];\n    }\n    jQuery2.each(\n      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),\n      function(_i, name) {\n        class2type["[object " + name + "]"] = name.toLowerCase();\n      }\n    );\n    function nodeName(elem, name) {\n      return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();\n    }\n    var pop = arr.pop;\n    var whitespace = "[\\\\x20\\\\t\\\\r\\\\n\\\\f]";\n    var isIE = document$1.documentMode;\n    var rbuggyQSA = isIE && new RegExp(\n      // Support: IE 9 - 11+\n      // IE\'s :disabled selector does not pick up the children of disabled fieldsets\n      ":enabled|:disabled|\\\\[" + whitespace + "*name" + whitespace + "*=" + whitespace + `*(?:\'\'|"")`\n    );\n    var rtrimCSS = new RegExp(\n      "^" + whitespace + "+|((?:^|[^\\\\\\\\])(?:\\\\\\\\.)*)" + whitespace + "+$",\n      "g"\n    );\n    var identifier = "(?:\\\\\\\\[\\\\da-fA-F]{1,6}" + whitespace + "?|\\\\\\\\[^\\\\r\\\\n\\\\f]|[\\\\w-]|[^\\0-\\\\x7f])+";\n    var rleadingCombinator = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*");\n    var rdescend = new RegExp(whitespace + "|>");\n    var rsibling = /[+~]/;\n    var documentElement$1 = document$1.documentElement;\n    var matches = documentElement$1.matches || documentElement$1.msMatchesSelector;\n    function createCache() {\n      var keys = [];\n      function cache(key, value) {\n        if (keys.push(key + " ") > jQuery2.expr.cacheLength) {\n          delete cache[keys.shift()];\n        }\n        return cache[key + " "] = value;\n      }\n      return cache;\n    }\n    function testContext(context) {\n      return context && typeof context.getElementsByTagName !== "undefined" && context;\n    }\n    var attributes = "\\\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + // Operator (capture 2)\n    "*([*^$|!~]?=)" + whitespace + // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"\n    `*(?:\'((?:\\\\\\\\.|[^\\\\\\\\\'])*)\'|"((?:\\\\\\\\.|[^\\\\\\\\"])*)"|(` + identifier + "))|)" + whitespace + "*\\\\]";\n    var pseudos = ":(" + identifier + `)(?:\\\\(((\'((?:\\\\\\\\.|[^\\\\\\\\\'])*)\'|"((?:\\\\\\\\.|[^\\\\\\\\"])*)")|((?:\\\\\\\\.|[^\\\\\\\\()[\\\\]]|` + attributes + ")*)|.*)\\\\)|)";\n    var filterMatchExpr = {\n      ID: new RegExp("^#(" + identifier + ")"),\n      CLASS: new RegExp("^\\\\.(" + identifier + ")"),\n      TAG: new RegExp("^(" + identifier + "|[*])"),\n      ATTR: new RegExp("^" + attributes),\n      PSEUDO: new RegExp("^" + pseudos),\n      CHILD: new RegExp(\n        "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\\\(" + whitespace + "*(even|odd|(([+-]|)(\\\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\\\d+)|))" + whitespace + "*\\\\)|)",\n        "i"\n      )\n    };\n    var rpseudo = new RegExp(pseudos);\n    var runescape = new RegExp("\\\\\\\\[\\\\da-fA-F]{1,6}" + whitespace + "?|\\\\\\\\([^\\\\r\\\\n\\\\f])", "g"), funescape = function(escape, nonHex) {\n      var high = "0x" + escape.slice(1) - 65536;\n      if (nonHex) {\n        return nonHex;\n      }\n      return high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320);\n    };\n    function unescapeSelector(sel) {\n      return sel.replace(runescape, funescape);\n    }\n    function selectorError(msg) {\n      jQuery2.error("Syntax error, unrecognized expression: " + msg);\n    }\n    var rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*");\n    var tokenCache = createCache();\n    function tokenize(selector, parseOnly) {\n      var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];\n      if (cached) {\n        return parseOnly ? 0 : cached.slice(0);\n      }\n      soFar = selector;\n      groups = [];\n      preFilters = jQuery2.expr.preFilter;\n      while (soFar) {\n        if (!matched || (match = rcomma.exec(soFar))) {\n          if (match) {\n            soFar = soFar.slice(match[0].length) || soFar;\n          }\n          groups.push(tokens = []);\n        }\n        matched = false;\n        if (match = rleadingCombinator.exec(soFar)) {\n          matched = match.shift();\n          tokens.push({\n            value: matched,\n            // Cast descendant combinators to space\n            type: match[0].replace(rtrimCSS, " ")\n          });\n          soFar = soFar.slice(matched.length);\n        }\n        for (type in filterMatchExpr) {\n          if ((match = jQuery2.expr.match[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {\n            matched = match.shift();\n            tokens.push({\n              value: matched,\n              type,\n              matches: match\n            });\n            soFar = soFar.slice(matched.length);\n          }\n        }\n        if (!matched) {\n          break;\n        }\n      }\n      if (parseOnly) {\n        return soFar.length;\n      }\n      return soFar ? selectorError(selector) : (\n        // Cache the tokens\n        tokenCache(selector, groups).slice(0)\n      );\n    }\n    var preFilter = {\n      ATTR: function(match) {\n        match[1] = unescapeSelector(match[1]);\n        match[3] = unescapeSelector(match[3] || match[4] || match[5] || "");\n        if (match[2] === "~=") {\n          match[3] = " " + match[3] + " ";\n        }\n        return match.slice(0, 4);\n      },\n      CHILD: function(match) {\n        match[1] = match[1].toLowerCase();\n        if (match[1].slice(0, 3) === "nth") {\n          if (!match[3]) {\n            selectorError(match[0]);\n          }\n          match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));\n          match[5] = +(match[7] + match[8] || match[3] === "odd");\n        } else if (match[3]) {\n          selectorError(match[0]);\n        }\n        return match;\n      },\n      PSEUDO: function(match) {\n        var excess, unquoted = !match[6] && match[2];\n        if (filterMatchExpr.CHILD.test(match[0])) {\n          return null;\n        }\n        if (match[3]) {\n          match[2] = match[4] || match[5] || "";\n        } else if (unquoted && rpseudo.test(unquoted) && // Get excess from tokenize (recursively)\n        (excess = tokenize(unquoted, true)) && // advance to the next closing parenthesis\n        (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {\n          match[0] = match[0].slice(0, excess);\n          match[2] = unquoted.slice(0, excess);\n        }\n        return match.slice(0, 3);\n      }\n    };\n    function toSelector(tokens) {\n      var i2 = 0, len = tokens.length, selector = "";\n      for (; i2 < len; i2++) {\n        selector += tokens[i2].value;\n      }\n      return selector;\n    }\n    function access(elems, fn, key, value, chainable, emptyGet, raw) {\n      var i2 = 0, len = elems.length, bulk = key == null;\n      if (toType(key) === "object") {\n        chainable = true;\n        for (i2 in key) {\n          access(elems, fn, i2, key[i2], true, emptyGet, raw);\n        }\n      } else if (value !== void 0) {\n        chainable = true;\n        if (typeof value !== "function") {\n          raw = true;\n        }\n        if (bulk) {\n          if (raw) {\n            fn.call(elems, value);\n            fn = null;\n          } else {\n            bulk = fn;\n            fn = function(elem, _key, value2) {\n              return bulk.call(jQuery2(elem), value2);\n            };\n          }\n        }\n        if (fn) {\n          for (; i2 < len; i2++) {\n            fn(\n              elems[i2],\n              key,\n              raw ? value : value.call(elems[i2], i2, fn(elems[i2], key))\n            );\n          }\n        }\n      }\n      if (chainable) {\n        return elems;\n      }\n      if (bulk) {\n        return fn.call(elems);\n      }\n      return len ? fn(elems[0], key) : emptyGet;\n    }\n    var rnothtmlwhite = /[^\\x20\\t\\r\\n\\f]+/g;\n    jQuery2.fn.extend({\n      attr: function(name, value) {\n        return access(this, jQuery2.attr, name, value, arguments.length > 1);\n      },\n      removeAttr: function(name) {\n        return this.each(function() {\n          jQuery2.removeAttr(this, name);\n        });\n      }\n    });\n    jQuery2.extend({\n      attr: function(elem, name, value) {\n        var ret, hooks, nType = elem.nodeType;\n        if (nType === 3 || nType === 8 || nType === 2) {\n          return;\n        }\n        if (typeof elem.getAttribute === "undefined") {\n          return jQuery2.prop(elem, name, value);\n        }\n        if (nType !== 1 || !jQuery2.isXMLDoc(elem)) {\n          hooks = jQuery2.attrHooks[name.toLowerCase()];\n        }\n        if (value !== void 0) {\n          if (value === null || // For compat with previous handling of boolean attributes,\n          // remove when `false` passed. For ARIA attributes -\n          // many of which recognize a `"false"` value - continue to\n          // set the `"false"` value as jQuery <4 did.\n          value === false && name.toLowerCase().indexOf("aria-") !== 0) {\n            jQuery2.removeAttr(elem, name);\n            return;\n          }\n          if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) {\n            return ret;\n          }\n          elem.setAttribute(name, value);\n          return value;\n        }\n        if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {\n          return ret;\n        }\n        ret = elem.getAttribute(name);\n        return ret == null ? void 0 : ret;\n      },\n      attrHooks: {},\n      removeAttr: function(elem, value) {\n        var name, i2 = 0, attrNames = value && value.match(rnothtmlwhite);\n        if (attrNames && elem.nodeType === 1) {\n          while (name = attrNames[i2++]) {\n            elem.removeAttribute(name);\n          }\n        }\n      }\n    });\n    if (isIE) {\n      jQuery2.attrHooks.type = {\n        set: function(elem, value) {\n          if (value === "radio" && nodeName(elem, "input")) {\n            var val = elem.value;\n            elem.setAttribute("type", value);\n            if (val) {\n              elem.value = val;\n            }\n            return value;\n          }\n        }\n      };\n    }\n    var rcssescape = /([\\0-\\x1f\\x7f]|^-?\\d)|^-$|[^\\x80-\\uFFFF\\w-]/g;\n    function fcssescape(ch, asCodePoint) {\n      if (asCodePoint) {\n        if (ch === "\\0") {\n          return "\\uFFFD";\n        }\n        return ch.slice(0, -1) + "\\\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";\n      }\n      return "\\\\" + ch;\n    }\n    jQuery2.escapeSelector = function(sel) {\n      return (sel + "").replace(rcssescape, fcssescape);\n    };\n    var sort = arr.sort;\n    var splice = arr.splice;\n    var hasDuplicate;\n    function sortOrder(a, b) {\n      if (a === b) {\n        hasDuplicate = true;\n        return 0;\n      }\n      var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;\n      if (compare) {\n        return compare;\n      }\n      compare = (a.ownerDocument || a) == (b.ownerDocument || b) ? a.compareDocumentPosition(b) : (\n        // Otherwise we know they are disconnected\n        1\n      );\n      if (compare & 1) {\n        if (a == document$1 || a.ownerDocument == document$1 && jQuery2.contains(document$1, a)) {\n          return -1;\n        }\n        if (b == document$1 || b.ownerDocument == document$1 && jQuery2.contains(document$1, b)) {\n          return 1;\n        }\n        return 0;\n      }\n      return compare & 4 ? -1 : 1;\n    }\n    jQuery2.uniqueSort = function(results) {\n      var elem, duplicates = [], j = 0, i2 = 0;\n      hasDuplicate = false;\n      sort.call(results, sortOrder);\n      if (hasDuplicate) {\n        while (elem = results[i2++]) {\n          if (elem === results[i2]) {\n            j = duplicates.push(i2);\n          }\n        }\n        while (j--) {\n          splice.call(results, duplicates[j], 1);\n        }\n      }\n      return results;\n    };\n    jQuery2.fn.uniqueSort = function() {\n      return this.pushStack(jQuery2.uniqueSort(slice.apply(this)));\n    };\n    var i, outermostContext, document2, documentElement, documentIsHTML, dirruns = 0, done = 0, classCache = createCache(), compilerCache = createCache(), nonnativeSelectorCache = createCache(), rwhitespace = new RegExp(whitespace + "+", "g"), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = jQuery2.extend({\n      // For use in libraries implementing .is()\n      // We use this for POS matching in `select`\n      needsContext: new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\\\(" + whitespace + "*((?:-\\\\d)?\\\\d*)" + whitespace + "*\\\\)|)(?=[^-]|$)", "i")\n    }, filterMatchExpr), rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\\d$/i, rquickExpr$1 = /^(?:#([\\w-]+)|(\\w+)|\\.([\\w-]+))$/, unloadHandler = function() {\n      setDocument();\n    }, inDisabledFieldset = addCombinator(\n      function(elem) {\n        return elem.disabled === true && nodeName(elem, "fieldset");\n      },\n      { dir: "parentNode", next: "legend" }\n    );\n    function find(selector, context, results, seed) {\n      var m, i2, elem, nid, match, groups, newSelector, newContext = context && context.ownerDocument, nodeType = context ? context.nodeType : 9;\n      results = results || [];\n      if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {\n        return results;\n      }\n      if (!seed) {\n        setDocument(context);\n        context = context || document2;\n        if (documentIsHTML) {\n          if (nodeType !== 11 && (match = rquickExpr$1.exec(selector))) {\n            if (m = match[1]) {\n              if (nodeType === 9) {\n                if (elem = context.getElementById(m)) {\n                  push.call(results, elem);\n                }\n                return results;\n              } else {\n                if (newContext && (elem = newContext.getElementById(m)) && jQuery2.contains(context, elem)) {\n                  push.call(results, elem);\n                  return results;\n                }\n              }\n            } else if (match[2]) {\n              push.apply(results, context.getElementsByTagName(selector));\n              return results;\n            } else if ((m = match[3]) && context.getElementsByClassName) {\n              push.apply(results, context.getElementsByClassName(m));\n              return results;\n            }\n          }\n          if (!nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {\n            newSelector = selector;\n            newContext = context;\n            if (nodeType === 1 && (rdescend.test(selector) || rleadingCombinator.test(selector))) {\n              newContext = rsibling.test(selector) && testContext(context.parentNode) || context;\n              if (newContext != context || isIE) {\n                if (nid = context.getAttribute("id")) {\n                  nid = jQuery2.escapeSelector(nid);\n                } else {\n                  context.setAttribute("id", nid = jQuery2.expando);\n                }\n              }\n              groups = tokenize(selector);\n              i2 = groups.length;\n              while (i2--) {\n                groups[i2] = (nid ? "#" + nid : ":scope") + " " + toSelector(groups[i2]);\n              }\n              newSelector = groups.join(",");\n            }\n            try {\n              push.apply(\n                results,\n                newContext.querySelectorAll(newSelector)\n              );\n              return results;\n            } catch (qsaError) {\n              nonnativeSelectorCache(selector, true);\n            } finally {\n              if (nid === jQuery2.expando) {\n                context.removeAttribute("id");\n              }\n            }\n          }\n        }\n      }\n      return select(selector.replace(rtrimCSS, "$1"), context, results, seed);\n    }\n    function markFunction(fn) {\n      fn[jQuery2.expando] = true;\n      return fn;\n    }\n    function createInputPseudo(type) {\n      return function(elem) {\n        return nodeName(elem, "input") && elem.type === type;\n      };\n    }\n    function createButtonPseudo(type) {\n      return function(elem) {\n        return (nodeName(elem, "input") || nodeName(elem, "button")) && elem.type === type;\n      };\n    }\n    function createDisabledPseudo(disabled) {\n      return function(elem) {\n        if ("form" in elem) {\n          if (elem.parentNode && elem.disabled === false) {\n            if ("label" in elem) {\n              if ("label" in elem.parentNode) {\n                return elem.parentNode.disabled === disabled;\n              } else {\n                return elem.disabled === disabled;\n              }\n            }\n            return elem.isDisabled === disabled || // Where there is no isDisabled, check manually\n            elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled;\n          }\n          return elem.disabled === disabled;\n        } else if ("label" in elem) {\n          return elem.disabled === disabled;\n        }\n        return false;\n      };\n    }\n    function createPositionalPseudo(fn) {\n      return markFunction(function(argument) {\n        argument = +argument;\n        return markFunction(function(seed, matches2) {\n          var j, matchIndexes = fn([], seed.length, argument), i2 = matchIndexes.length;\n          while (i2--) {\n            if (seed[j = matchIndexes[i2]]) {\n              seed[j] = !(matches2[j] = seed[j]);\n            }\n          }\n        });\n      });\n    }\n    function setDocument(node) {\n      var subWindow, doc = node ? node.ownerDocument || node : document$1;\n      if (doc == document2 || doc.nodeType !== 9) {\n        return;\n      }\n      document2 = doc;\n      documentElement = document2.documentElement;\n      documentIsHTML = !jQuery2.isXMLDoc(document2);\n      if (isIE && document$1 != document2 && (subWindow = document2.defaultView) && subWindow.top !== subWindow) {\n        subWindow.addEventListener("unload", unloadHandler);\n      }\n    }\n    find.matches = function(expr, elements) {\n      return find(expr, null, null, elements);\n    };\n    find.matchesSelector = function(elem, expr) {\n      setDocument(elem);\n      if (documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyQSA || !rbuggyQSA.test(expr))) {\n        try {\n          return matches.call(elem, expr);\n        } catch (e) {\n          nonnativeSelectorCache(expr, true);\n        }\n      }\n      return find(expr, document2, null, [elem]).length > 0;\n    };\n    jQuery2.expr = {\n      // Can be adjusted by the user\n      cacheLength: 50,\n      createPseudo: markFunction,\n      match: matchExpr,\n      find: {\n        ID: function(id, context) {\n          if (typeof context.getElementById !== "undefined" && documentIsHTML) {\n            var elem = context.getElementById(id);\n            return elem ? [elem] : [];\n          }\n        },\n        TAG: function(tag, context) {\n          if (typeof context.getElementsByTagName !== "undefined") {\n            return context.getElementsByTagName(tag);\n          } else {\n            return context.querySelectorAll(tag);\n          }\n        },\n        CLASS: function(className, context) {\n          if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {\n            return context.getElementsByClassName(className);\n          }\n        }\n      },\n      relative: {\n        ">": { dir: "parentNode", first: true },\n        " ": { dir: "parentNode" },\n        "+": { dir: "previousSibling", first: true },\n        "~": { dir: "previousSibling" }\n      },\n      preFilter,\n      filter: {\n        ID: function(id) {\n          var attrId = unescapeSelector(id);\n          return function(elem) {\n            return elem.getAttribute("id") === attrId;\n          };\n        },\n        TAG: function(nodeNameSelector) {\n          var expectedNodeName = unescapeSelector(nodeNameSelector).toLowerCase();\n          return nodeNameSelector === "*" ? function() {\n            return true;\n          } : function(elem) {\n            return nodeName(elem, expectedNodeName);\n          };\n        },\n        CLASS: function(className) {\n          var pattern = classCache[className + " "];\n          return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {\n            return pattern.test(\n              typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || ""\n            );\n          });\n        },\n        ATTR: function(name, operator, check) {\n          return function(elem) {\n            var result = jQuery2.attr(elem, name);\n            if (result == null) {\n              return operator === "!=";\n            }\n            if (!operator) {\n              return true;\n            }\n            result += "";\n            if (operator === "=") {\n              return result === check;\n            }\n            if (operator === "!=") {\n              return result !== check;\n            }\n            if (operator === "^=") {\n              return check && result.indexOf(check) === 0;\n            }\n            if (operator === "*=") {\n              return check && result.indexOf(check) > -1;\n            }\n            if (operator === "$=") {\n              return check && result.slice(-check.length) === check;\n            }\n            if (operator === "~=") {\n              return (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1;\n            }\n            if (operator === "|=") {\n              return result === check || result.slice(0, check.length + 1) === check + "-";\n            }\n            return false;\n          };\n        },\n        CHILD: function(type, what, _argument, first, last) {\n          var simple = type.slice(0, 3) !== "nth", forward = type.slice(-4) !== "last", ofType = what === "of-type";\n          return first === 1 && last === 0 ? (\n            // Shortcut for :nth-*(n)\n            function(elem) {\n              return !!elem.parentNode;\n            }\n          ) : function(elem, _context, xml) {\n            var cache, outerCache, node, nodeIndex, start, dir2 = simple !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType, diff = false;\n            if (parent) {\n              if (simple) {\n                while (dir2) {\n                  node = elem;\n                  while (node = node[dir2]) {\n                    if (ofType ? nodeName(node, name) : node.nodeType === 1) {\n                      return false;\n                    }\n                  }\n                  start = dir2 = type === "only" && !start && "nextSibling";\n                }\n                return true;\n              }\n              start = [forward ? parent.firstChild : parent.lastChild];\n              if (forward && useCache) {\n                outerCache = parent[jQuery2.expando] || (parent[jQuery2.expando] = {});\n                cache = outerCache[type] || [];\n                nodeIndex = cache[0] === dirruns && cache[1];\n                diff = nodeIndex && cache[2];\n                node = nodeIndex && parent.childNodes[nodeIndex];\n                while (node = ++nodeIndex && node && node[dir2] || // Fallback to seeking `elem` from the start\n                (diff = nodeIndex = 0) || start.pop()) {\n                  if (node.nodeType === 1 && ++diff && node === elem) {\n                    outerCache[type] = [dirruns, nodeIndex, diff];\n                    break;\n                  }\n                }\n              } else {\n                if (useCache) {\n                  outerCache = elem[jQuery2.expando] || (elem[jQuery2.expando] = {});\n                  cache = outerCache[type] || [];\n                  nodeIndex = cache[0] === dirruns && cache[1];\n                  diff = nodeIndex;\n                }\n                if (diff === false) {\n                  while (node = ++nodeIndex && node && node[dir2] || (diff = nodeIndex = 0) || start.pop()) {\n                    if ((ofType ? nodeName(node, name) : node.nodeType === 1) && ++diff) {\n                      if (useCache) {\n                        outerCache = node[jQuery2.expando] || (node[jQuery2.expando] = {});\n                        outerCache[type] = [dirruns, diff];\n                      }\n                      if (node === elem) {\n                        break;\n                      }\n                    }\n                  }\n                }\n              }\n              diff -= last;\n              return diff === first || diff % first === 0 && diff / first >= 0;\n            }\n          };\n        },\n        PSEUDO: function(pseudo, argument) {\n          var fn = jQuery2.expr.pseudos[pseudo] || jQuery2.expr.setFilters[pseudo.toLowerCase()] || selectorError("unsupported pseudo: " + pseudo);\n          if (fn[jQuery2.expando]) {\n            return fn(argument);\n          }\n          return fn;\n        }\n      },\n      pseudos: {\n        // Potentially complex pseudos\n        not: markFunction(function(selector) {\n          var input = [], results = [], matcher = compile(selector.replace(rtrimCSS, "$1"));\n          return matcher[jQuery2.expando] ? markFunction(function(seed, matches2, _context, xml) {\n            var elem, unmatched = matcher(seed, null, xml, []), i2 = seed.length;\n            while (i2--) {\n              if (elem = unmatched[i2]) {\n                seed[i2] = !(matches2[i2] = elem);\n              }\n            }\n          }) : function(elem, _context, xml) {\n            input[0] = elem;\n            matcher(input, null, xml, results);\n            input[0] = null;\n            return !results.pop();\n          };\n        }),\n        has: markFunction(function(selector) {\n          return function(elem) {\n            return find(selector, elem).length > 0;\n          };\n        }),\n        contains: markFunction(function(text) {\n          text = unescapeSelector(text);\n          return function(elem) {\n            return (elem.textContent || jQuery2.text(elem)).indexOf(text) > -1;\n          };\n        }),\n        // "Whether an element is represented by a :lang() selector\n        // is based solely on the element\'s language value\n        // being equal to the identifier C,\n        // or beginning with the identifier C immediately followed by "-".\n        // The matching of C against the element\'s language value is performed case-insensitively.\n        // The identifier C does not have to be a valid language name."\n        // https://www.w3.org/TR/selectors/#lang-pseudo\n        lang: markFunction(function(lang) {\n          if (!ridentifier.test(lang || "")) {\n            selectorError("unsupported lang: " + lang);\n          }\n          lang = unescapeSelector(lang).toLowerCase();\n          return function(elem) {\n            var elemLang;\n            do {\n              if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {\n                elemLang = elemLang.toLowerCase();\n                return elemLang === lang || elemLang.indexOf(lang + "-") === 0;\n              }\n            } while ((elem = elem.parentNode) && elem.nodeType === 1);\n            return false;\n          };\n        }),\n        // Miscellaneous\n        target: function(elem) {\n          var hash = window2.location && window2.location.hash;\n          return hash && hash.slice(1) === elem.id;\n        },\n        root: function(elem) {\n          return elem === documentElement;\n        },\n        focus: function(elem) {\n          return elem === document2.activeElement && document2.hasFocus() && !!(elem.type || elem.href || ~elem.tabIndex);\n        },\n        // Boolean properties\n        enabled: createDisabledPseudo(false),\n        disabled: createDisabledPseudo(true),\n        checked: function(elem) {\n          return nodeName(elem, "input") && !!elem.checked || nodeName(elem, "option") && !!elem.selected;\n        },\n        selected: function(elem) {\n          if (isIE && elem.parentNode) {\n            elem.parentNode.selectedIndex;\n          }\n          return elem.selected === true;\n        },\n        // Contents\n        empty: function(elem) {\n          for (elem = elem.firstChild; elem; elem = elem.nextSibling) {\n            if (elem.nodeType < 6) {\n              return false;\n            }\n          }\n          return true;\n        },\n        parent: function(elem) {\n          return !jQuery2.expr.pseudos.empty(elem);\n        },\n        // Element/input types\n        header: function(elem) {\n          return rheader.test(elem.nodeName);\n        },\n        input: function(elem) {\n          return rinputs.test(elem.nodeName);\n        },\n        button: function(elem) {\n          return nodeName(elem, "input") && elem.type === "button" || nodeName(elem, "button");\n        },\n        text: function(elem) {\n          return nodeName(elem, "input") && elem.type === "text";\n        },\n        // Position-in-collection\n        first: createPositionalPseudo(function() {\n          return [0];\n        }),\n        last: createPositionalPseudo(function(_matchIndexes, length) {\n          return [length - 1];\n        }),\n        eq: createPositionalPseudo(function(_matchIndexes, length, argument) {\n          return [argument < 0 ? argument + length : argument];\n        }),\n        even: createPositionalPseudo(function(matchIndexes, length) {\n          var i2 = 0;\n          for (; i2 < length; i2 += 2) {\n            matchIndexes.push(i2);\n          }\n          return matchIndexes;\n        }),\n        odd: createPositionalPseudo(function(matchIndexes, length) {\n          var i2 = 1;\n          for (; i2 < length; i2 += 2) {\n            matchIndexes.push(i2);\n          }\n          return matchIndexes;\n        }),\n        lt: createPositionalPseudo(function(matchIndexes, length, argument) {\n          var i2;\n          if (argument < 0) {\n            i2 = argument + length;\n          } else if (argument > length) {\n            i2 = length;\n          } else {\n            i2 = argument;\n          }\n          for (; --i2 >= 0; ) {\n            matchIndexes.push(i2);\n          }\n          return matchIndexes;\n        }),\n        gt: createPositionalPseudo(function(matchIndexes, length, argument) {\n          var i2 = argument < 0 ? argument + length : argument;\n          for (; ++i2 < length; ) {\n            matchIndexes.push(i2);\n          }\n          return matchIndexes;\n        })\n      }\n    };\n    jQuery2.expr.pseudos.nth = jQuery2.expr.pseudos.eq;\n    for (i in { radio: true, checkbox: true, file: true, password: true, image: true }) {\n      jQuery2.expr.pseudos[i] = createInputPseudo(i);\n    }\n    for (i in { submit: true, reset: true }) {\n      jQuery2.expr.pseudos[i] = createButtonPseudo(i);\n    }\n    function setFilters() {\n    }\n    setFilters.prototype = jQuery2.expr.pseudos;\n    jQuery2.expr.setFilters = new setFilters();\n    function addCombinator(matcher, combinator, base) {\n      var dir2 = combinator.dir, skip = combinator.next, key = skip || dir2, checkNonElements = base && key === "parentNode", doneName = done++;\n      return combinator.first ? (\n        // Check against closest ancestor/preceding element\n        function(elem, context, xml) {\n          while (elem = elem[dir2]) {\n            if (elem.nodeType === 1 || checkNonElements) {\n              return matcher(elem, context, xml);\n            }\n          }\n          return false;\n        }\n      ) : (\n        // Check against all ancestor/preceding elements\n        function(elem, context, xml) {\n          var oldCache, outerCache, newCache = [dirruns, doneName];\n          if (xml) {\n            while (elem = elem[dir2]) {\n              if (elem.nodeType === 1 || checkNonElements) {\n                if (matcher(elem, context, xml)) {\n                  return true;\n                }\n              }\n            }\n          } else {\n            while (elem = elem[dir2]) {\n              if (elem.nodeType === 1 || checkNonElements) {\n                outerCache = elem[jQuery2.expando] || (elem[jQuery2.expando] = {});\n                if (skip && nodeName(elem, skip)) {\n                  elem = elem[dir2] || elem;\n                } else if ((oldCache = outerCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {\n                  return newCache[2] = oldCache[2];\n                } else {\n                  outerCache[key] = newCache;\n                  if (newCache[2] = matcher(elem, context, xml)) {\n                    return true;\n                  }\n                }\n              }\n            }\n          }\n          return false;\n        }\n      );\n    }\n    function elementMatcher(matchers) {\n      return matchers.length > 1 ? function(elem, context, xml) {\n        var i2 = matchers.length;\n        while (i2--) {\n          if (!matchers[i2](elem, context, xml)) {\n            return false;\n          }\n        }\n        return true;\n      } : matchers[0];\n    }\n    function multipleContexts(selector, contexts, results) {\n      var i2 = 0, len = contexts.length;\n      for (; i2 < len; i2++) {\n        find(selector, contexts[i2], results);\n      }\n      return results;\n    }\n    function condense(unmatched, map, filter, context, xml) {\n      var elem, newUnmatched = [], i2 = 0, len = unmatched.length, mapped = map != null;\n      for (; i2 < len; i2++) {\n        if (elem = unmatched[i2]) {\n          if (!filter || filter(elem, context, xml)) {\n            newUnmatched.push(elem);\n            if (mapped) {\n              map.push(i2);\n            }\n          }\n        }\n      }\n      return newUnmatched;\n    }\n    function setMatcher(preFilter2, selector, matcher, postFilter, postFinder, postSelector) {\n      if (postFilter && !postFilter[jQuery2.expando]) {\n        postFilter = setMatcher(postFilter);\n      }\n      if (postFinder && !postFinder[jQuery2.expando]) {\n        postFinder = setMatcher(postFinder, postSelector);\n      }\n      return markFunction(function(seed, results, context, xml) {\n        var temp, i2, elem, matcherOut, preMap = [], postMap = [], preexisting = results.length, elems = seed || multipleContexts(\n          selector || "*",\n          context.nodeType ? [context] : context,\n          []\n        ), matcherIn = preFilter2 && (seed || !selector) ? condense(elems, preMap, preFilter2, context, xml) : elems;\n        if (matcher) {\n          matcherOut = postFinder || (seed ? preFilter2 : preexisting || postFilter) ? (\n            // ...intermediate processing is necessary\n            []\n          ) : (\n            // ...otherwise use results directly\n            results\n          );\n          matcher(matcherIn, matcherOut, context, xml);\n        } else {\n          matcherOut = matcherIn;\n        }\n        if (postFilter) {\n          temp = condense(matcherOut, postMap);\n          postFilter(temp, [], context, xml);\n          i2 = temp.length;\n          while (i2--) {\n            if (elem = temp[i2]) {\n              matcherOut[postMap[i2]] = !(matcherIn[postMap[i2]] = elem);\n            }\n          }\n        }\n        if (seed) {\n          if (postFinder || preFilter2) {\n            if (postFinder) {\n              temp = [];\n              i2 = matcherOut.length;\n              while (i2--) {\n                if (elem = matcherOut[i2]) {\n                  temp.push(matcherIn[i2] = elem);\n                }\n              }\n              postFinder(null, matcherOut = [], temp, xml);\n            }\n            i2 = matcherOut.length;\n            while (i2--) {\n              if ((elem = matcherOut[i2]) && (temp = postFinder ? indexOf.call(seed, elem) : preMap[i2]) > -1) {\n                seed[temp] = !(results[temp] = elem);\n              }\n            }\n          }\n        } else {\n          matcherOut = condense(\n            matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut\n          );\n          if (postFinder) {\n            postFinder(null, results, matcherOut, xml);\n          } else {\n            push.apply(results, matcherOut);\n          }\n        }\n      });\n    }\n    function matcherFromTokens(tokens) {\n      var checkContext, matcher, j, len = tokens.length, leadingRelative = jQuery2.expr.relative[tokens[0].type], implicitRelative = leadingRelative || jQuery2.expr.relative[" "], i2 = leadingRelative ? 1 : 0, matchContext = addCombinator(function(elem) {\n        return elem === checkContext;\n      }, implicitRelative, true), matchAnyContext = addCombinator(function(elem) {\n        return indexOf.call(checkContext, elem) > -1;\n      }, implicitRelative, true), matchers = [function(elem, context, xml) {\n        var ret = !leadingRelative && (xml || context != outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));\n        checkContext = null;\n        return ret;\n      }];\n      for (; i2 < len; i2++) {\n        if (matcher = jQuery2.expr.relative[tokens[i2].type]) {\n          matchers = [addCombinator(elementMatcher(matchers), matcher)];\n        } else {\n          matcher = jQuery2.expr.filter[tokens[i2].type].apply(null, tokens[i2].matches);\n          if (matcher[jQuery2.expando]) {\n            j = ++i2;\n            for (; j < len; j++) {\n              if (jQuery2.expr.relative[tokens[j].type]) {\n                break;\n              }\n            }\n            return setMatcher(\n              i2 > 1 && elementMatcher(matchers),\n              i2 > 1 && toSelector(\n                // If the preceding token was a descendant combinator, insert an implicit any-element `*`\n                tokens.slice(0, i2 - 1).concat({ value: tokens[i2 - 2].type === " " ? "*" : "" })\n              ).replace(rtrimCSS, "$1"),\n              matcher,\n              i2 < j && matcherFromTokens(tokens.slice(i2, j)),\n              j < len && matcherFromTokens(tokens = tokens.slice(j)),\n              j < len && toSelector(tokens)\n            );\n          }\n          matchers.push(matcher);\n        }\n      }\n      return elementMatcher(matchers);\n    }\n    function matcherFromGroupMatchers(elementMatchers, setMatchers) {\n      var bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function(seed, context, xml, results, outermost) {\n        var elem, j, matcher, matchedCount = 0, i2 = "0", unmatched = seed && [], setMatched = [], contextBackup = outermostContext, elems = seed || byElement && jQuery2.expr.find.TAG("*", outermost), dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1;\n        if (outermost) {\n          outermostContext = context == document2 || context || outermost;\n        }\n        for (; (elem = elems[i2]) != null; i2++) {\n          if (byElement && elem) {\n            j = 0;\n            if (!context && elem.ownerDocument != document2) {\n              setDocument(elem);\n              xml = !documentIsHTML;\n            }\n            while (matcher = elementMatchers[j++]) {\n              if (matcher(elem, context || document2, xml)) {\n                push.call(results, elem);\n                break;\n              }\n            }\n            if (outermost) {\n              dirruns = dirrunsUnique;\n            }\n          }\n          if (bySet) {\n            if (elem = !matcher && elem) {\n              matchedCount--;\n            }\n            if (seed) {\n              unmatched.push(elem);\n            }\n          }\n        }\n        matchedCount += i2;\n        if (bySet && i2 !== matchedCount) {\n          j = 0;\n          while (matcher = setMatchers[j++]) {\n            matcher(unmatched, setMatched, context, xml);\n          }\n          if (seed) {\n            if (matchedCount > 0) {\n              while (i2--) {\n                if (!(unmatched[i2] || setMatched[i2])) {\n                  setMatched[i2] = pop.call(results);\n                }\n              }\n            }\n            setMatched = condense(setMatched);\n          }\n          push.apply(results, setMatched);\n          if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {\n            jQuery2.uniqueSort(results);\n          }\n        }\n        if (outermost) {\n          dirruns = dirrunsUnique;\n          outermostContext = contextBackup;\n        }\n        return unmatched;\n      };\n      return bySet ? markFunction(superMatcher) : superMatcher;\n    }\n    function compile(selector, match) {\n      var i2, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];\n      if (!cached) {\n        if (!match) {\n          match = tokenize(selector);\n        }\n        i2 = match.length;\n        while (i2--) {\n          cached = matcherFromTokens(match[i2]);\n          if (cached[jQuery2.expando]) {\n            setMatchers.push(cached);\n          } else {\n            elementMatchers.push(cached);\n          }\n        }\n        cached = compilerCache(\n          selector,\n          matcherFromGroupMatchers(elementMatchers, setMatchers)\n        );\n        cached.selector = selector;\n      }\n      return cached;\n    }\n    function select(selector, context, results, seed) {\n      var i2, tokens, token, type, find2, compiled = typeof selector === "function" && selector, match = !seed && tokenize(selector = compiled.selector || selector);\n      results = results || [];\n      if (match.length === 1) {\n        tokens = match[0] = match[0].slice(0);\n        if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && jQuery2.expr.relative[tokens[1].type]) {\n          context = (jQuery2.expr.find.ID(\n            unescapeSelector(token.matches[0]),\n            context\n          ) || [])[0];\n          if (!context) {\n            return results;\n          } else if (compiled) {\n            context = context.parentNode;\n          }\n          selector = selector.slice(tokens.shift().value.length);\n        }\n        i2 = matchExpr.needsContext.test(selector) ? 0 : tokens.length;\n        while (i2--) {\n          token = tokens[i2];\n          if (jQuery2.expr.relative[type = token.type]) {\n            break;\n          }\n          if (find2 = jQuery2.expr.find[type]) {\n            if (seed = find2(\n              unescapeSelector(token.matches[0]),\n              rsibling.test(tokens[0].type) && testContext(context.parentNode) || context\n            )) {\n              tokens.splice(i2, 1);\n              selector = seed.length && toSelector(tokens);\n              if (!selector) {\n                push.apply(results, seed);\n                return results;\n              }\n              break;\n            }\n          }\n        }\n      }\n      (compiled || compile(selector, match))(\n        seed,\n        context,\n        !documentIsHTML,\n        results,\n        !context || rsibling.test(selector) && testContext(context.parentNode) || context\n      );\n      return results;\n    }\n    setDocument();\n    jQuery2.find = find;\n    find.compile = compile;\n    find.select = select;\n    find.setDocument = setDocument;\n    find.tokenize = tokenize;\n    function dir(elem, dir2, until) {\n      var matched = [], truncate = until !== void 0;\n      while ((elem = elem[dir2]) && elem.nodeType !== 9) {\n        if (elem.nodeType === 1) {\n          if (truncate && jQuery2(elem).is(until)) {\n            break;\n          }\n          matched.push(elem);\n        }\n      }\n      return matched;\n    }\n    function siblings(n, elem) {\n      var matched = [];\n      for (; n; n = n.nextSibling) {\n        if (n.nodeType === 1 && n !== elem) {\n          matched.push(n);\n        }\n      }\n      return matched;\n    }\n    var rneedsContext = jQuery2.expr.match.needsContext;\n    var rsingleTag = /^<([a-z][^\\/\\0>:\\x20\\t\\r\\n\\f]*)[\\x20\\t\\r\\n\\f]*\\/?>(?:<\\/\\1>|)$/i;\n    function isObviousHtml(input) {\n      return input[0] === "<" && input[input.length - 1] === ">" && input.length >= 3;\n    }\n    function winnow(elements, qualifier, not) {\n      if (typeof qualifier === "function") {\n        return jQuery2.grep(elements, function(elem, i2) {\n          return !!qualifier.call(elem, i2, elem) !== not;\n        });\n      }\n      if (qualifier.nodeType) {\n        return jQuery2.grep(elements, function(elem) {\n          return elem === qualifier !== not;\n        });\n      }\n      if (typeof qualifier !== "string") {\n        return jQuery2.grep(elements, function(elem) {\n          return indexOf.call(qualifier, elem) > -1 !== not;\n        });\n      }\n      return jQuery2.filter(qualifier, elements, not);\n    }\n    jQuery2.filter = function(expr, elems, not) {\n      var elem = elems[0];\n      if (not) {\n        expr = ":not(" + expr + ")";\n      }\n      if (elems.length === 1 && elem.nodeType === 1) {\n        return jQuery2.find.matchesSelector(elem, expr) ? [elem] : [];\n      }\n      return jQuery2.find.matches(expr, jQuery2.grep(elems, function(elem2) {\n        return elem2.nodeType === 1;\n      }));\n    };\n    jQuery2.fn.extend({\n      find: function(selector) {\n        var i2, ret, len = this.length, self = this;\n        if (typeof selector !== "string") {\n          return this.pushStack(jQuery2(selector).filter(function() {\n            for (i2 = 0; i2 < len; i2++) {\n              if (jQuery2.contains(self[i2], this)) {\n                return true;\n              }\n            }\n          }));\n        }\n        ret = this.pushStack([]);\n        for (i2 = 0; i2 < len; i2++) {\n          jQuery2.find(selector, self[i2], ret);\n        }\n        return len > 1 ? jQuery2.uniqueSort(ret) : ret;\n      },\n      filter: function(selector) {\n        return this.pushStack(winnow(this, selector || [], false));\n      },\n      not: function(selector) {\n        return this.pushStack(winnow(this, selector || [], true));\n      },\n      is: function(selector) {\n        return !!winnow(\n          this,\n          // If this is a positional/relative selector, check membership in the returned set\n          // so $("p:first").is("p:last") won\'t return true for a doc with two "p".\n          typeof selector === "string" && rneedsContext.test(selector) ? jQuery2(selector) : selector || [],\n          false\n        ).length;\n      }\n    });\n    var rootjQuery, rquickExpr = /^(?:\\s*(<[\\w\\W]+>)[^>]*|#([\\w-]+))$/, init = jQuery2.fn.init = function(selector, context) {\n      var match, elem;\n      if (!selector) {\n        return this;\n      }\n      if (selector.nodeType) {\n        this[0] = selector;\n        this.length = 1;\n        return this;\n      } else if (typeof selector === "function") {\n        return rootjQuery.ready !== void 0 ? rootjQuery.ready(selector) : (\n          // Execute immediately if ready is not present\n          selector(jQuery2)\n        );\n      } else {\n        match = selector + "";\n        if (isObviousHtml(match)) {\n          match = [null, selector, null];\n        } else if (typeof selector === "string") {\n          match = rquickExpr.exec(selector);\n        } else {\n          return jQuery2.makeArray(selector, this);\n        }\n        if (match && (match[1] || !context)) {\n          if (match[1]) {\n            context = context instanceof jQuery2 ? context[0] : context;\n            jQuery2.merge(this, jQuery2.parseHTML(\n              match[1],\n              context && context.nodeType ? context.ownerDocument || context : document$1,\n              true\n            ));\n            if (rsingleTag.test(match[1]) && jQuery2.isPlainObject(context)) {\n              for (match in context) {\n                if (typeof this[match] === "function") {\n                  this[match](context[match]);\n                } else {\n                  this.attr(match, context[match]);\n                }\n              }\n            }\n            return this;\n          } else {\n            elem = document$1.getElementById(match[2]);\n            if (elem) {\n              this[0] = elem;\n              this.length = 1;\n            }\n            return this;\n          }\n        } else if (!context || context.jquery) {\n          return (context || rootjQuery).find(selector);\n        } else {\n          return this.constructor(context).find(selector);\n        }\n      }\n    };\n    init.prototype = jQuery2.fn;\n    rootjQuery = jQuery2(document$1);\n    var rparentsprev = /^(?:parents|prev(?:Until|All))/, guaranteedUnique = {\n      children: true,\n      contents: true,\n      next: true,\n      prev: true\n    };\n    jQuery2.fn.extend({\n      has: function(target) {\n        var targets = jQuery2(target, this), l = targets.length;\n        return this.filter(function() {\n          var i2 = 0;\n          for (; i2 < l; i2++) {\n            if (jQuery2.contains(this, targets[i2])) {\n              return true;\n            }\n          }\n        });\n      },\n      closest: function(selectors, context) {\n        var cur, i2 = 0, l = this.length, matched = [], targets = typeof selectors !== "string" && jQuery2(selectors);\n        if (!rneedsContext.test(selectors)) {\n          for (; i2 < l; i2++) {\n            for (cur = this[i2]; cur && cur !== context; cur = cur.parentNode) {\n              if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : (\n                // Don\'t pass non-elements to jQuery#find\n                cur.nodeType === 1 && jQuery2.find.matchesSelector(cur, selectors)\n              ))) {\n                matched.push(cur);\n                break;\n              }\n            }\n          }\n        }\n        return this.pushStack(matched.length > 1 ? jQuery2.uniqueSort(matched) : matched);\n      },\n      // Determine the position of an element within the set\n      index: function(elem) {\n        if (!elem) {\n          return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;\n        }\n        if (typeof elem === "string") {\n          return indexOf.call(jQuery2(elem), this[0]);\n        }\n        return indexOf.call(\n          this,\n          // If it receives a jQuery object, the first element is used\n          elem.jquery ? elem[0] : elem\n        );\n      },\n      add: function(selector, context) {\n        return this.pushStack(\n          jQuery2.uniqueSort(\n            jQuery2.merge(this.get(), jQuery2(selector, context))\n          )\n        );\n      },\n      addBack: function(selector) {\n        return this.add(\n          selector == null ? this.prevObject : this.prevObject.filter(selector)\n        );\n      }\n    });\n    function sibling(cur, dir2) {\n      while ((cur = cur[dir2]) && cur.nodeType !== 1) {\n      }\n      return cur;\n    }\n    jQuery2.each({\n      parent: function(elem) {\n        var parent = elem.parentNode;\n        return parent && parent.nodeType !== 11 ? parent : null;\n      },\n      parents: function(elem) {\n        return dir(elem, "parentNode");\n      },\n      parentsUntil: function(elem, _i, until) {\n        return dir(elem, "parentNode", until);\n      },\n      next: function(elem) {\n        return sibling(elem, "nextSibling");\n      },\n      prev: function(elem) {\n        return sibling(elem, "previousSibling");\n      },\n      nextAll: function(elem) {\n        return dir(elem, "nextSibling");\n      },\n      prevAll: function(elem) {\n        return dir(elem, "previousSibling");\n      },\n      nextUntil: function(elem, _i, until) {\n        return dir(elem, "nextSibling", until);\n      },\n      prevUntil: function(elem, _i, until) {\n        return dir(elem, "previousSibling", until);\n      },\n      siblings: function(elem) {\n        return siblings((elem.parentNode || {}).firstChild, elem);\n      },\n      children: function(elem) {\n        return siblings(elem.firstChild);\n      },\n      contents: function(elem) {\n        if (elem.contentDocument != null && // Support: IE 11+\n        // <object> elements with no `data` attribute has an object\n        // `contentDocument` with a `null` prototype.\n        getProto(elem.contentDocument)) {\n          return elem.contentDocument;\n        }\n        if (nodeName(elem, "template")) {\n          elem = elem.content || elem;\n        }\n        return jQuery2.merge([], elem.childNodes);\n      }\n    }, function(name, fn) {\n      jQuery2.fn[name] = function(until, selector) {\n        var matched = jQuery2.map(this, fn, until);\n        if (name.slice(-5) !== "Until") {\n          selector = until;\n        }\n        if (selector && typeof selector === "string") {\n          matched = jQuery2.filter(selector, matched);\n        }\n        if (this.length > 1) {\n          if (!guaranteedUnique[name]) {\n            jQuery2.uniqueSort(matched);\n          }\n          if (rparentsprev.test(name)) {\n            matched.reverse();\n          }\n        }\n        return this.pushStack(matched);\n      };\n    });\n    function createOptions(options) {\n      var object = {};\n      jQuery2.each(options.match(rnothtmlwhite) || [], function(_, flag) {\n        object[flag] = true;\n      });\n      return object;\n    }\n    jQuery2.Callbacks = function(options) {\n      options = typeof options === "string" ? createOptions(options) : jQuery2.extend({}, options);\n      var firing, memory, fired, locked, list = [], queue = [], firingIndex = -1, fire = function() {\n        locked = locked || options.once;\n        fired = firing = true;\n        for (; queue.length; firingIndex = -1) {\n          memory = queue.shift();\n          while (++firingIndex < list.length) {\n            if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {\n              firingIndex = list.length;\n              memory = false;\n            }\n          }\n        }\n        if (!options.memory) {\n          memory = false;\n        }\n        firing = false;\n        if (locked) {\n          if (memory) {\n            list = [];\n          } else {\n            list = "";\n          }\n        }\n      }, self = {\n        // Add a callback or a collection of callbacks to the list\n        add: function() {\n          if (list) {\n            if (memory && !firing) {\n              firingIndex = list.length - 1;\n              queue.push(memory);\n            }\n            (function add(args) {\n              jQuery2.each(args, function(_, arg) {\n                if (typeof arg === "function") {\n                  if (!options.unique || !self.has(arg)) {\n                    list.push(arg);\n                  }\n                } else if (arg && arg.length && toType(arg) !== "string") {\n                  add(arg);\n                }\n              });\n            })(arguments);\n            if (memory && !firing) {\n              fire();\n            }\n          }\n          return this;\n        },\n        // Remove a callback from the list\n        remove: function() {\n          jQuery2.each(arguments, function(_, arg) {\n            var index;\n            while ((index = jQuery2.inArray(arg, list, index)) > -1) {\n              list.splice(index, 1);\n              if (index <= firingIndex) {\n                firingIndex--;\n              }\n            }\n          });\n          return this;\n        },\n        // Check if a given callback is in the list.\n        // If no argument is given, return whether or not list has callbacks attached.\n        has: function(fn) {\n          return fn ? jQuery2.inArray(fn, list) > -1 : list.length > 0;\n        },\n        // Remove all callbacks from the list\n        empty: function() {\n          if (list) {\n            list = [];\n          }\n          return this;\n        },\n        // Disable .fire and .add\n        // Abort any current/pending executions\n        // Clear all callbacks and values\n        disable: function() {\n          locked = queue = [];\n          list = memory = "";\n          return this;\n        },\n        disabled: function() {\n          return !list;\n        },\n        // Disable .fire\n        // Also disable .add unless we have memory (since it would have no effect)\n        // Abort any pending executions\n        lock: function() {\n          locked = queue = [];\n          if (!memory && !firing) {\n            list = memory = "";\n          }\n          return this;\n        },\n        locked: function() {\n          return !!locked;\n        },\n        // Call all callbacks with the given context and arguments\n        fireWith: function(context, args) {\n          if (!locked) {\n            args = args || [];\n            args = [context, args.slice ? args.slice() : args];\n            queue.push(args);\n            if (!firing) {\n              fire();\n            }\n          }\n          return this;\n        },\n        // Call all the callbacks with the given arguments\n        fire: function() {\n          self.fireWith(this, arguments);\n          return this;\n        },\n        // To know if the callbacks have already been called at least once\n        fired: function() {\n          return !!fired;\n        }\n      };\n      return self;\n    };\n    function Identity(v) {\n      return v;\n    }\n    function Thrower(ex) {\n      throw ex;\n    }\n    function adoptValue(value, resolve, reject, noValue) {\n      var method;\n      try {\n        if (value && typeof (method = value.promise) === "function") {\n          method.call(value).done(resolve).fail(reject);\n        } else if (value && typeof (method = value.then) === "function") {\n          method.call(value, resolve, reject);\n        } else {\n          resolve.apply(void 0, [value].slice(noValue));\n        }\n      } catch (value2) {\n        reject(value2);\n      }\n    }\n    jQuery2.extend({\n      Deferred: function(func) {\n        var tuples = [\n          // action, add listener, callbacks,\n          // ... .then handlers, argument index, [final state]\n          [\n            "notify",\n            "progress",\n            jQuery2.Callbacks("memory"),\n            jQuery2.Callbacks("memory"),\n            2\n          ],\n          [\n            "resolve",\n            "done",\n            jQuery2.Callbacks("once memory"),\n            jQuery2.Callbacks("once memory"),\n            0,\n            "resolved"\n          ],\n          [\n            "reject",\n            "fail",\n            jQuery2.Callbacks("once memory"),\n            jQuery2.Callbacks("once memory"),\n            1,\n            "rejected"\n          ]\n        ], state = "pending", promise = {\n          state: function() {\n            return state;\n          },\n          always: function() {\n            deferred.done(arguments).fail(arguments);\n            return this;\n          },\n          catch: function(fn) {\n            return promise.then(null, fn);\n          },\n          // Keep pipe for back-compat\n          pipe: function() {\n            var fns = arguments;\n            return jQuery2.Deferred(function(newDefer) {\n              jQuery2.each(tuples, function(_i, tuple) {\n                var fn = typeof fns[tuple[4]] === "function" && fns[tuple[4]];\n                deferred[tuple[1]](function() {\n                  var returned = fn && fn.apply(this, arguments);\n                  if (returned && typeof returned.promise === "function") {\n                    returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);\n                  } else {\n                    newDefer[tuple[0] + "With"](\n                      this,\n                      fn ? [returned] : arguments\n                    );\n                  }\n                });\n              });\n              fns = null;\n            }).promise();\n          },\n          then: function(onFulfilled, onRejected, onProgress) {\n            var maxDepth = 0;\n            function resolve(depth, deferred2, handler, special) {\n              return function() {\n                var that = this, args = arguments, mightThrow = function() {\n                  var returned, then;\n                  if (depth < maxDepth) {\n                    return;\n                  }\n                  returned = handler.apply(that, args);\n                  if (returned === deferred2.promise()) {\n                    throw new TypeError("Thenable self-resolution");\n                  }\n                  then = returned && // Support: Promises/A+ section 2.3.4\n                  // https://promisesaplus.com/#point-64\n                  // Only check objects and functions for thenability\n                  (typeof returned === "object" || typeof returned === "function") && returned.then;\n                  if (typeof then === "function") {\n                    if (special) {\n                      then.call(\n                        returned,\n                        resolve(maxDepth, deferred2, Identity, special),\n                        resolve(maxDepth, deferred2, Thrower, special)\n                      );\n                    } else {\n                      maxDepth++;\n                      then.call(\n                        returned,\n                        resolve(maxDepth, deferred2, Identity, special),\n                        resolve(maxDepth, deferred2, Thrower, special),\n                        resolve(\n                          maxDepth,\n                          deferred2,\n                          Identity,\n                          deferred2.notifyWith\n                        )\n                      );\n                    }\n                  } else {\n                    if (handler !== Identity) {\n                      that = void 0;\n                      args = [returned];\n                    }\n                    (special || deferred2.resolveWith)(that, args);\n                  }\n                }, process = special ? mightThrow : function() {\n                  try {\n                    mightThrow();\n                  } catch (e) {\n                    if (jQuery2.Deferred.exceptionHook) {\n                      jQuery2.Deferred.exceptionHook(\n                        e,\n                        process.error\n                      );\n                    }\n                    if (depth + 1 >= maxDepth) {\n                      if (handler !== Thrower) {\n                        that = void 0;\n                        args = [e];\n                      }\n                      deferred2.rejectWith(that, args);\n                    }\n                  }\n                };\n                if (depth) {\n                  process();\n                } else {\n                  if (jQuery2.Deferred.getErrorHook) {\n                    process.error = jQuery2.Deferred.getErrorHook();\n                  }\n                  window2.setTimeout(process);\n                }\n              };\n            }\n            return jQuery2.Deferred(function(newDefer) {\n              tuples[0][3].add(\n                resolve(\n                  0,\n                  newDefer,\n                  typeof onProgress === "function" ? onProgress : Identity,\n                  newDefer.notifyWith\n                )\n              );\n              tuples[1][3].add(\n                resolve(\n                  0,\n                  newDefer,\n                  typeof onFulfilled === "function" ? onFulfilled : Identity\n                )\n              );\n              tuples[2][3].add(\n                resolve(\n                  0,\n                  newDefer,\n                  typeof onRejected === "function" ? onRejected : Thrower\n                )\n              );\n            }).promise();\n          },\n          // Get a promise for this deferred\n          // If obj is provided, the promise aspect is added to the object\n          promise: function(obj) {\n            return obj != null ? jQuery2.extend(obj, promise) : promise;\n          }\n        }, deferred = {};\n        jQuery2.each(tuples, function(i2, tuple) {\n          var list = tuple[2], stateString = tuple[5];\n          promise[tuple[1]] = list.add;\n          if (stateString) {\n            list.add(\n              function() {\n                state = stateString;\n              },\n              // rejected_callbacks.disable\n              // fulfilled_callbacks.disable\n              tuples[3 - i2][2].disable,\n              // rejected_handlers.disable\n              // fulfilled_handlers.disable\n              tuples[3 - i2][3].disable,\n              // progress_callbacks.lock\n              tuples[0][2].lock,\n              // progress_handlers.lock\n              tuples[0][3].lock\n            );\n          }\n          list.add(tuple[3].fire);\n          deferred[tuple[0]] = function() {\n            deferred[tuple[0] + "With"](this === deferred ? void 0 : this, arguments);\n            return this;\n          };\n          deferred[tuple[0] + "With"] = list.fireWith;\n        });\n        promise.promise(deferred);\n        if (func) {\n          func.call(deferred, deferred);\n        }\n        return deferred;\n      },\n      // Deferred helper\n      when: function(singleValue) {\n        var remaining = arguments.length, i2 = remaining, resolveContexts = Array(i2), resolveValues = slice.call(arguments), primary = jQuery2.Deferred(), updateFunc = function(i3) {\n          return function(value) {\n            resolveContexts[i3] = this;\n            resolveValues[i3] = arguments.length > 1 ? slice.call(arguments) : value;\n            if (!--remaining) {\n              primary.resolveWith(resolveContexts, resolveValues);\n            }\n          };\n        };\n        if (remaining <= 1) {\n          adoptValue(\n            singleValue,\n            primary.done(updateFunc(i2)).resolve,\n            primary.reject,\n            !remaining\n          );\n          if (primary.state() === "pending" || typeof (resolveValues[i2] && resolveValues[i2].then) === "function") {\n            return primary.then();\n          }\n        }\n        while (i2--) {\n          adoptValue(resolveValues[i2], updateFunc(i2), primary.reject);\n        }\n        return primary.promise();\n      }\n    });\n    var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;\n    jQuery2.Deferred.exceptionHook = function(error, asyncError) {\n      if (error && rerrorNames.test(error.name)) {\n        window2.console.warn(\n          "jQuery.Deferred exception",\n          error,\n          asyncError\n        );\n      }\n    };\n    jQuery2.readyException = function(error) {\n      window2.setTimeout(function() {\n        throw error;\n      });\n    };\n    var readyList = jQuery2.Deferred();\n    jQuery2.fn.ready = function(fn) {\n      readyList.then(fn).catch(function(error) {\n        jQuery2.readyException(error);\n      });\n      return this;\n    };\n    jQuery2.extend({\n      // Is the DOM ready to be used? Set to true once it occurs.\n      isReady: false,\n      // A counter to track how many items to wait for before\n      // the ready event fires. See trac-6781\n      readyWait: 1,\n      // Handle when the DOM is ready\n      ready: function(wait) {\n        if (wait === true ? --jQuery2.readyWait : jQuery2.isReady) {\n          return;\n        }\n        jQuery2.isReady = true;\n        if (wait !== true && --jQuery2.readyWait > 0) {\n          return;\n        }\n        readyList.resolveWith(document$1, [jQuery2]);\n      }\n    });\n    jQuery2.ready.then = readyList.then;\n    function completed() {\n      document$1.removeEventListener("DOMContentLoaded", completed);\n      window2.removeEventListener("load", completed);\n      jQuery2.ready();\n    }\n    if (document$1.readyState !== "loading") {\n      window2.setTimeout(jQuery2.ready);\n    } else {\n      document$1.addEventListener("DOMContentLoaded", completed);\n      window2.addEventListener("load", completed);\n    }\n    var rdashAlpha = /-([a-z])/g;\n    function fcamelCase(_all, letter) {\n      return letter.toUpperCase();\n    }\n    function camelCase(string) {\n      return string.replace(rdashAlpha, fcamelCase);\n    }\n    function acceptData(owner) {\n      return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;\n    }\n    function Data() {\n      this.expando = jQuery2.expando + Data.uid++;\n    }\n    Data.uid = 1;\n    Data.prototype = {\n      cache: function(owner) {\n        var value = owner[this.expando];\n        if (!value) {\n          value = /* @__PURE__ */ Object.create(null);\n          if (acceptData(owner)) {\n            if (owner.nodeType) {\n              owner[this.expando] = value;\n            } else {\n              Object.defineProperty(owner, this.expando, {\n                value,\n                configurable: true\n              });\n            }\n          }\n        }\n        return value;\n      },\n      set: function(owner, data, value) {\n        var prop, cache = this.cache(owner);\n        if (typeof data === "string") {\n          cache[camelCase(data)] = value;\n        } else {\n          for (prop in data) {\n            cache[camelCase(prop)] = data[prop];\n          }\n        }\n        return value;\n      },\n      get: function(owner, key) {\n        return key === void 0 ? this.cache(owner) : (\n          // Always use camelCase key (gh-2257)\n          owner[this.expando] && owner[this.expando][camelCase(key)]\n        );\n      },\n      access: function(owner, key, value) {\n        if (key === void 0 || key && typeof key === "string" && value === void 0) {\n          return this.get(owner, key);\n        }\n        this.set(owner, key, value);\n        return value !== void 0 ? value : key;\n      },\n      remove: function(owner, key) {\n        var i2, cache = owner[this.expando];\n        if (cache === void 0) {\n          return;\n        }\n        if (key !== void 0) {\n          if (Array.isArray(key)) {\n            key = key.map(camelCase);\n          } else {\n            key = camelCase(key);\n            key = key in cache ? [key] : key.match(rnothtmlwhite) || [];\n          }\n          i2 = key.length;\n          while (i2--) {\n            delete cache[key[i2]];\n          }\n        }\n        if (key === void 0 || jQuery2.isEmptyObject(cache)) {\n          if (owner.nodeType) {\n            owner[this.expando] = void 0;\n          } else {\n            delete owner[this.expando];\n          }\n        }\n      },\n      hasData: function(owner) {\n        var cache = owner[this.expando];\n        return cache !== void 0 && !jQuery2.isEmptyObject(cache);\n      }\n    };\n    var dataPriv = new Data();\n    var dataUser = new Data();\n    var rbrace = /^(?:\\{[\\w\\W]*\\}|\\[[\\w\\W]*\\])$/, rmultiDash = /[A-Z]/g;\n    function getData(data) {\n      if (data === "true") {\n        return true;\n      }\n      if (data === "false") {\n        return false;\n      }\n      if (data === "null") {\n        return null;\n      }\n      if (data === +data + "") {\n        return +data;\n      }\n      if (rbrace.test(data)) {\n        return JSON.parse(data);\n      }\n      return data;\n    }\n    function dataAttr(elem, key, data) {\n      var name;\n      if (data === void 0 && elem.nodeType === 1) {\n        name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();\n        data = elem.getAttribute(name);\n        if (typeof data === "string") {\n          try {\n            data = getData(data);\n          } catch (e) {\n          }\n          dataUser.set(elem, key, data);\n        } else {\n          data = void 0;\n        }\n      }\n      return data;\n    }\n    jQuery2.extend({\n      hasData: function(elem) {\n        return dataUser.hasData(elem) || dataPriv.hasData(elem);\n      },\n      data: function(elem, name, data) {\n        return dataUser.access(elem, name, data);\n      },\n      removeData: function(elem, name) {\n        dataUser.remove(elem, name);\n      },\n      // TODO: Now that all calls to _data and _removeData have been replaced\n      // with direct calls to dataPriv methods, these can be deprecated.\n      _data: function(elem, name, data) {\n        return dataPriv.access(elem, name, data);\n      },\n      _removeData: function(elem, name) {\n        dataPriv.remove(elem, name);\n      }\n    });\n    jQuery2.fn.extend({\n      data: function(key, value) {\n        var i2, name, data, elem = this[0], attrs = elem && elem.attributes;\n        if (key === void 0) {\n          if (this.length) {\n            data = dataUser.get(elem);\n            if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {\n              i2 = attrs.length;\n              while (i2--) {\n                if (attrs[i2]) {\n                  name = attrs[i2].name;\n                  if (name.indexOf("data-") === 0) {\n                    name = camelCase(name.slice(5));\n                    dataAttr(elem, name, data[name]);\n                  }\n                }\n              }\n              dataPriv.set(elem, "hasDataAttrs", true);\n            }\n          }\n          return data;\n        }\n        if (typeof key === "object") {\n          return this.each(function() {\n            dataUser.set(this, key);\n          });\n        }\n        return access(this, function(value2) {\n          var data2;\n          if (elem && value2 === void 0) {\n            data2 = dataUser.get(elem, key);\n            if (data2 !== void 0) {\n              return data2;\n            }\n            data2 = dataAttr(elem, key);\n            if (data2 !== void 0) {\n              return data2;\n            }\n            return;\n          }\n          this.each(function() {\n            dataUser.set(this, key, value2);\n          });\n        }, null, value, arguments.length > 1, null, true);\n      },\n      removeData: function(key) {\n        return this.each(function() {\n          dataUser.remove(this, key);\n        });\n      }\n    });\n    jQuery2.extend({\n      queue: function(elem, type, data) {\n        var queue;\n        if (elem) {\n          type = (type || "fx") + "queue";\n          queue = dataPriv.get(elem, type);\n          if (data) {\n            if (!queue || Array.isArray(data)) {\n              queue = dataPriv.set(elem, type, jQuery2.makeArray(data));\n            } else {\n              queue.push(data);\n            }\n          }\n          return queue || [];\n        }\n      },\n      dequeue: function(elem, type) {\n        type = type || "fx";\n        var queue = jQuery2.queue(elem, type), startLength = queue.length, fn = queue.shift(), hooks = jQuery2._queueHooks(elem, type), next = function() {\n          jQuery2.dequeue(elem, type);\n        };\n        if (fn === "inprogress") {\n          fn = queue.shift();\n          startLength--;\n        }\n        if (fn) {\n          if (type === "fx") {\n            queue.unshift("inprogress");\n          }\n          delete hooks.stop;\n          fn.call(elem, next, hooks);\n        }\n        if (!startLength && hooks) {\n          hooks.empty.fire();\n        }\n      },\n      // Not public - generate a queueHooks object, or return the current one\n      _queueHooks: function(elem, type) {\n        var key = type + "queueHooks";\n        return dataPriv.get(elem, key) || dataPriv.set(elem, key, {\n          empty: jQuery2.Callbacks("once memory").add(function() {\n            dataPriv.remove(elem, [type + "queue", key]);\n          })\n        });\n      }\n    });\n    jQuery2.fn.extend({\n      queue: function(type, data) {\n        var setter = 2;\n        if (typeof type !== "string") {\n          data = type;\n          type = "fx";\n          setter--;\n        }\n        if (arguments.length < setter) {\n          return jQuery2.queue(this[0], type);\n        }\n        return data === void 0 ? this : this.each(function() {\n          var queue = jQuery2.queue(this, type, data);\n          jQuery2._queueHooks(this, type);\n          if (type === "fx" && queue[0] !== "inprogress") {\n            jQuery2.dequeue(this, type);\n          }\n        });\n      },\n      dequeue: function(type) {\n        return this.each(function() {\n          jQuery2.dequeue(this, type);\n        });\n      },\n      clearQueue: function(type) {\n        return this.queue(type || "fx", []);\n      },\n      // Get a promise resolved when queues of a certain type\n      // are emptied (fx is the type by default)\n      promise: function(type, obj) {\n        var tmp, count = 1, defer = jQuery2.Deferred(), elements = this, i2 = this.length, resolve = function() {\n          if (!--count) {\n            defer.resolveWith(elements, [elements]);\n          }\n        };\n        if (typeof type !== "string") {\n          obj = type;\n          type = void 0;\n        }\n        type = type || "fx";\n        while (i2--) {\n          tmp = dataPriv.get(elements[i2], type + "queueHooks");\n          if (tmp && tmp.empty) {\n            count++;\n            tmp.empty.add(resolve);\n          }\n        }\n        resolve();\n        return defer.promise(obj);\n      }\n    });\n    var pnum = /[+-]?(?:\\d*\\.|)\\d+(?:[eE][+-]?\\d+|)/.source;\n    var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");\n    var cssExpand = ["Top", "Right", "Bottom", "Left"];\n    function isHiddenWithinTree(elem, el) {\n      elem = el || elem;\n      return elem.style.display === "none" || elem.style.display === "" && jQuery2.css(elem, "display") === "none";\n    }\n    var ralphaStart = /^[a-z]/, rautoPx = /^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;\n    function isAutoPx(prop) {\n      return ralphaStart.test(prop) && rautoPx.test(prop[0].toUpperCase() + prop.slice(1));\n    }\n    function adjustCSS(elem, prop, valueParts, tween) {\n      var adjusted, scale, maxIterations = 20, currentValue = tween ? function() {\n        return tween.cur();\n      } : function() {\n        return jQuery2.css(elem, prop, "");\n      }, initial = currentValue(), unit = valueParts && valueParts[3] || (isAutoPx(prop) ? "px" : ""), initialInUnit = elem.nodeType && (!isAutoPx(prop) || unit !== "px" && +initial) && rcssNum.exec(jQuery2.css(elem, prop));\n      if (initialInUnit && initialInUnit[3] !== unit) {\n        initial = initial / 2;\n        unit = unit || initialInUnit[3];\n        initialInUnit = +initial || 1;\n        while (maxIterations--) {\n          jQuery2.style(elem, prop, initialInUnit + unit);\n          if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) {\n            maxIterations = 0;\n          }\n          initialInUnit = initialInUnit / scale;\n        }\n        initialInUnit = initialInUnit * 2;\n        jQuery2.style(elem, prop, initialInUnit + unit);\n        valueParts = valueParts || [];\n      }\n      if (valueParts) {\n        initialInUnit = +initialInUnit || +initial || 0;\n        adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];\n        if (tween) {\n          tween.unit = unit;\n          tween.start = initialInUnit;\n          tween.end = adjusted;\n        }\n      }\n      return adjusted;\n    }\n    var rmsPrefix = /^-ms-/;\n    function cssCamelCase(string) {\n      return camelCase(string.replace(rmsPrefix, "ms-"));\n    }\n    var defaultDisplayMap = {};\n    function getDefaultDisplay(elem) {\n      var temp, doc = elem.ownerDocument, nodeName2 = elem.nodeName, display = defaultDisplayMap[nodeName2];\n      if (display) {\n        return display;\n      }\n      temp = doc.body.appendChild(doc.createElement(nodeName2));\n      display = jQuery2.css(temp, "display");\n      temp.parentNode.removeChild(temp);\n      if (display === "none") {\n        display = "block";\n      }\n      defaultDisplayMap[nodeName2] = display;\n      return display;\n    }\n    function showHide(elements, show) {\n      var display, elem, values = [], index = 0, length = elements.length;\n      for (; index < length; index++) {\n        elem = elements[index];\n        if (!elem.style) {\n          continue;\n        }\n        display = elem.style.display;\n        if (show) {\n          if (display === "none") {\n            values[index] = dataPriv.get(elem, "display") || null;\n            if (!values[index]) {\n              elem.style.display = "";\n            }\n          }\n          if (elem.style.display === "" && isHiddenWithinTree(elem)) {\n            values[index] = getDefaultDisplay(elem);\n          }\n        } else {\n          if (display !== "none") {\n            values[index] = "none";\n            dataPriv.set(elem, "display", display);\n          }\n        }\n      }\n      for (index = 0; index < length; index++) {\n        if (values[index] != null) {\n          elements[index].style.display = values[index];\n        }\n      }\n      return elements;\n    }\n    jQuery2.fn.extend({\n      show: function() {\n        return showHide(this, true);\n      },\n      hide: function() {\n        return showHide(this);\n      },\n      toggle: function(state) {\n        if (typeof state === "boolean") {\n          return state ? this.show() : this.hide();\n        }\n        return this.each(function() {\n          if (isHiddenWithinTree(this)) {\n            jQuery2(this).show();\n          } else {\n            jQuery2(this).hide();\n          }\n        });\n      }\n    });\n    var isAttached = function(elem) {\n      return jQuery2.contains(elem.ownerDocument, elem) || elem.getRootNode(composed) === elem.ownerDocument;\n    }, composed = { composed: true };\n    if (!documentElement$1.getRootNode) {\n      isAttached = function(elem) {\n        return jQuery2.contains(elem.ownerDocument, elem);\n      };\n    }\n    var rtagName = /<([a-z][^\\/\\0>\\x20\\t\\r\\n\\f]*)/i;\n    var wrapMap = {\n      // Table parts need to be wrapped with `<table>` or they\'re\n      // stripped to their contents when put in a div.\n      // XHTML parsers do not magically insert elements in the\n      // same way that tag soup parsers do, so we cannot shorten\n      // this by omitting <tbody> or other required elements.\n      thead: ["table"],\n      col: ["colgroup", "table"],\n      tr: ["tbody", "table"],\n      td: ["tr", "tbody", "table"]\n    };\n    wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;\n    wrapMap.th = wrapMap.td;\n    function getAll(context, tag) {\n      var ret;\n      if (typeof context.getElementsByTagName !== "undefined") {\n        ret = arr.slice.call(context.getElementsByTagName(tag || "*"));\n      } else if (typeof context.querySelectorAll !== "undefined") {\n        ret = context.querySelectorAll(tag || "*");\n      } else {\n        ret = [];\n      }\n      if (tag === void 0 || tag && nodeName(context, tag)) {\n        return jQuery2.merge([context], ret);\n      }\n      return ret;\n    }\n    var rscriptType = /^$|^module$|\\/(?:java|ecma)script/i;\n    function setGlobalEval(elems, refElements) {\n      var i2 = 0, l = elems.length;\n      for (; i2 < l; i2++) {\n        dataPriv.set(\n          elems[i2],\n          "globalEval",\n          !refElements || dataPriv.get(refElements[i2], "globalEval")\n        );\n      }\n    }\n    var rhtml = /<|&#?\\w+;/;\n    function buildFragment(elems, context, scripts, selection, ignored) {\n      var elem, tmp, tag, wrap, attached, j, fragment = context.createDocumentFragment(), nodes = [], i2 = 0, l = elems.length;\n      for (; i2 < l; i2++) {\n        elem = elems[i2];\n        if (elem || elem === 0) {\n          if (toType(elem) === "object" && (elem.nodeType || isArrayLike(elem))) {\n            jQuery2.merge(nodes, elem.nodeType ? [elem] : elem);\n          } else if (!rhtml.test(elem)) {\n            nodes.push(context.createTextNode(elem));\n          } else {\n            tmp = tmp || fragment.appendChild(context.createElement("div"));\n            tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();\n            wrap = wrapMap[tag] || arr;\n            j = wrap.length;\n            while (--j > -1) {\n              tmp = tmp.appendChild(context.createElement(wrap[j]));\n            }\n            tmp.innerHTML = jQuery2.htmlPrefilter(elem);\n            jQuery2.merge(nodes, tmp.childNodes);\n            tmp = fragment.firstChild;\n            tmp.textContent = "";\n          }\n        }\n      }\n      fragment.textContent = "";\n      i2 = 0;\n      while (elem = nodes[i2++]) {\n        if (selection && jQuery2.inArray(elem, selection) > -1) {\n          if (ignored) {\n            ignored.push(elem);\n          }\n          continue;\n        }\n        attached = isAttached(elem);\n        tmp = getAll(fragment.appendChild(elem), "script");\n        if (attached) {\n          setGlobalEval(tmp);\n        }\n        if (scripts) {\n          j = 0;\n          while (elem = tmp[j++]) {\n            if (rscriptType.test(elem.type || "")) {\n              scripts.push(elem);\n            }\n          }\n        }\n      }\n      return fragment;\n    }\n    function disableScript(elem) {\n      elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;\n      return elem;\n    }\n    function restoreScript(elem) {\n      if ((elem.type || "").slice(0, 5) === "true/") {\n        elem.type = elem.type.slice(5);\n      } else {\n        elem.removeAttribute("type");\n      }\n      return elem;\n    }\n    function domManip(collection, args, callback, ignored) {\n      args = flat(args);\n      var fragment, first, scripts, hasScripts, node, doc, i2 = 0, l = collection.length, iNoClone = l - 1, value = args[0], valueIsFunction = typeof value === "function";\n      if (valueIsFunction) {\n        return collection.each(function(index) {\n          var self = collection.eq(index);\n          args[0] = value.call(this, index, self.html());\n          domManip(self, args, callback, ignored);\n        });\n      }\n      if (l) {\n        fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);\n        first = fragment.firstChild;\n        if (fragment.childNodes.length === 1) {\n          fragment = first;\n        }\n        if (first || ignored) {\n          scripts = jQuery2.map(getAll(fragment, "script"), disableScript);\n          hasScripts = scripts.length;\n          for (; i2 < l; i2++) {\n            node = fragment;\n            if (i2 !== iNoClone) {\n              node = jQuery2.clone(node, true, true);\n              if (hasScripts) {\n                jQuery2.merge(scripts, getAll(node, "script"));\n              }\n            }\n            callback.call(collection[i2], node, i2);\n          }\n          if (hasScripts) {\n            doc = scripts[scripts.length - 1].ownerDocument;\n            jQuery2.map(scripts, restoreScript);\n            for (i2 = 0; i2 < hasScripts; i2++) {\n              node = scripts[i2];\n              if (rscriptType.test(node.type || "") && !dataPriv.get(node, "globalEval") && jQuery2.contains(doc, node)) {\n                if (node.src && (node.type || "").toLowerCase() !== "module") {\n                  if (jQuery2._evalUrl && !node.noModule) {\n                    jQuery2._evalUrl(node.src, {\n                      nonce: node.nonce,\n                      crossOrigin: node.crossOrigin\n                    }, doc);\n                  }\n                } else {\n                  DOMEval(node.textContent, node, doc);\n                }\n              }\n            }\n          }\n        }\n      }\n      return collection;\n    }\n    var rcheckableType = /^(?:checkbox|radio)$/i;\n    var rtypenamespace = /^([^.]*)(?:\\.(.+)|)/;\n    function returnTrue() {\n      return true;\n    }\n    function returnFalse() {\n      return false;\n    }\n    function on(elem, types, selector, data, fn, one) {\n      var origFn, type;\n      if (typeof types === "object") {\n        if (typeof selector !== "string") {\n          data = data || selector;\n          selector = void 0;\n        }\n        for (type in types) {\n          on(elem, type, selector, data, types[type], one);\n        }\n        return elem;\n      }\n      if (data == null && fn == null) {\n        fn = selector;\n        data = selector = void 0;\n      } else if (fn == null) {\n        if (typeof selector === "string") {\n          fn = data;\n          data = void 0;\n        } else {\n          fn = data;\n          data = selector;\n          selector = void 0;\n        }\n      }\n      if (fn === false) {\n        fn = returnFalse;\n      } else if (!fn) {\n        return elem;\n      }\n      if (one === 1) {\n        origFn = fn;\n        fn = function(event) {\n          jQuery2().off(event);\n          return origFn.apply(this, arguments);\n        };\n        fn.guid = origFn.guid || (origFn.guid = jQuery2.guid++);\n      }\n      return elem.each(function() {\n        jQuery2.event.add(this, types, fn, data, selector);\n      });\n    }\n    jQuery2.event = {\n      add: function(elem, types, handler, data, selector) {\n        var handleObjIn, eventHandle, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.get(elem);\n        if (!acceptData(elem)) {\n          return;\n        }\n        if (handler.handler) {\n          handleObjIn = handler;\n          handler = handleObjIn.handler;\n          selector = handleObjIn.selector;\n        }\n        if (selector) {\n          jQuery2.find.matchesSelector(documentElement$1, selector);\n        }\n        if (!handler.guid) {\n          handler.guid = jQuery2.guid++;\n        }\n        if (!(events = elemData.events)) {\n          events = elemData.events = /* @__PURE__ */ Object.create(null);\n        }\n        if (!(eventHandle = elemData.handle)) {\n          eventHandle = elemData.handle = function(e) {\n            return typeof jQuery2 !== "undefined" && jQuery2.event.triggered !== e.type ? jQuery2.event.dispatch.apply(elem, arguments) : void 0;\n          };\n        }\n        types = (types || "").match(rnothtmlwhite) || [""];\n        t = types.length;\n        while (t--) {\n          tmp = rtypenamespace.exec(types[t]) || [];\n          type = origType = tmp[1];\n          namespaces = (tmp[2] || "").split(".").sort();\n          if (!type) {\n            continue;\n          }\n          special = jQuery2.event.special[type] || {};\n          type = (selector ? special.delegateType : special.bindType) || type;\n          special = jQuery2.event.special[type] || {};\n          handleObj = jQuery2.extend({\n            type,\n            origType,\n            data,\n            handler,\n            guid: handler.guid,\n            selector,\n            needsContext: selector && jQuery2.expr.match.needsContext.test(selector),\n            namespace: namespaces.join(".")\n          }, handleObjIn);\n          if (!(handlers = events[type])) {\n            handlers = events[type] = [];\n            handlers.delegateCount = 0;\n            if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {\n              if (elem.addEventListener) {\n                elem.addEventListener(type, eventHandle);\n              }\n            }\n          }\n          if (special.add) {\n            special.add.call(elem, handleObj);\n            if (!handleObj.handler.guid) {\n              handleObj.handler.guid = handler.guid;\n            }\n          }\n          if (selector) {\n            handlers.splice(handlers.delegateCount++, 0, handleObj);\n          } else {\n            handlers.push(handleObj);\n          }\n        }\n      },\n      // Detach an event or set of events from an element\n      remove: function(elem, types, handler, selector, mappedTypes) {\n        var j, origCount, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.hasData(elem) && dataPriv.get(elem);\n        if (!elemData || !(events = elemData.events)) {\n          return;\n        }\n        types = (types || "").match(rnothtmlwhite) || [""];\n        t = types.length;\n        while (t--) {\n          tmp = rtypenamespace.exec(types[t]) || [];\n          type = origType = tmp[1];\n          namespaces = (tmp[2] || "").split(".").sort();\n          if (!type) {\n            for (type in events) {\n              jQuery2.event.remove(elem, type + types[t], handler, selector, true);\n            }\n            continue;\n          }\n          special = jQuery2.event.special[type] || {};\n          type = (selector ? special.delegateType : special.bindType) || type;\n          handlers = events[type] || [];\n          tmp = tmp[2] && new RegExp("(^|\\\\.)" + namespaces.join("\\\\.(?:.*\\\\.|)") + "(\\\\.|$)");\n          origCount = j = handlers.length;\n          while (j--) {\n            handleObj = handlers[j];\n            if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {\n              handlers.splice(j, 1);\n              if (handleObj.selector) {\n                handlers.delegateCount--;\n              }\n              if (special.remove) {\n                special.remove.call(elem, handleObj);\n              }\n            }\n          }\n          if (origCount && !handlers.length) {\n            if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {\n              jQuery2.removeEvent(elem, type, elemData.handle);\n            }\n            delete events[type];\n          }\n        }\n        if (jQuery2.isEmptyObject(events)) {\n          dataPriv.remove(elem, "handle events");\n        }\n      },\n      dispatch: function(nativeEvent) {\n        var i2, j, ret, matched, handleObj, handlerQueue, args = new Array(arguments.length), event = jQuery2.event.fix(nativeEvent), handlers = (dataPriv.get(this, "events") || /* @__PURE__ */ Object.create(null))[event.type] || [], special = jQuery2.event.special[event.type] || {};\n        args[0] = event;\n        for (i2 = 1; i2 < arguments.length; i2++) {\n          args[i2] = arguments[i2];\n        }\n        event.delegateTarget = this;\n        if (special.preDispatch && special.preDispatch.call(this, event) === false) {\n          return;\n        }\n        handlerQueue = jQuery2.event.handlers.call(this, event, handlers);\n        i2 = 0;\n        while ((matched = handlerQueue[i2++]) && !event.isPropagationStopped()) {\n          event.currentTarget = matched.elem;\n          j = 0;\n          while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {\n            if (!event.rnamespace || handleObj.namespace === false || event.rnamespace.test(handleObj.namespace)) {\n              event.handleObj = handleObj;\n              event.data = handleObj.data;\n              ret = ((jQuery2.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);\n              if (ret !== void 0) {\n                if ((event.result = ret) === false) {\n                  event.preventDefault();\n                  event.stopPropagation();\n                }\n              }\n            }\n          }\n        }\n        if (special.postDispatch) {\n          special.postDispatch.call(this, event);\n        }\n        return event.result;\n      },\n      handlers: function(event, handlers) {\n        var i2, handleObj, sel, matchedHandlers, matchedSelectors, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;\n        if (delegateCount && // Support: Firefox <=42 - 66+\n        // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)\n        // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click\n        // Support: IE 11+\n        // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)\n        !(event.type === "click" && event.button >= 1)) {\n          for (; cur !== this; cur = cur.parentNode || this) {\n            if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {\n              matchedHandlers = [];\n              matchedSelectors = {};\n              for (i2 = 0; i2 < delegateCount; i2++) {\n                handleObj = handlers[i2];\n                sel = handleObj.selector + " ";\n                if (matchedSelectors[sel] === void 0) {\n                  matchedSelectors[sel] = handleObj.needsContext ? jQuery2(sel, this).index(cur) > -1 : jQuery2.find(sel, this, null, [cur]).length;\n                }\n                if (matchedSelectors[sel]) {\n                  matchedHandlers.push(handleObj);\n                }\n              }\n              if (matchedHandlers.length) {\n                handlerQueue.push({ elem: cur, handlers: matchedHandlers });\n              }\n            }\n          }\n        }\n        cur = this;\n        if (delegateCount < handlers.length) {\n          handlerQueue.push({ elem: cur, handlers: handlers.slice(delegateCount) });\n        }\n        return handlerQueue;\n      },\n      addProp: function(name, hook) {\n        Object.defineProperty(jQuery2.Event.prototype, name, {\n          enumerable: true,\n          configurable: true,\n          get: typeof hook === "function" ? function() {\n            if (this.originalEvent) {\n              return hook(this.originalEvent);\n            }\n          } : function() {\n            if (this.originalEvent) {\n              return this.originalEvent[name];\n            }\n          },\n          set: function(value) {\n            Object.defineProperty(this, name, {\n              enumerable: true,\n              configurable: true,\n              writable: true,\n              value\n            });\n          }\n        });\n      },\n      fix: function(originalEvent) {\n        return originalEvent[jQuery2.expando] ? originalEvent : new jQuery2.Event(originalEvent);\n      },\n      special: jQuery2.extend(/* @__PURE__ */ Object.create(null), {\n        load: {\n          // Prevent triggered image.load events from bubbling to window.load\n          noBubble: true\n        },\n        click: {\n          // Utilize native event to ensure correct state for checkable inputs\n          setup: function(data) {\n            var el = this || data;\n            if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {\n              leverageNative(el, "click", true);\n            }\n            return false;\n          },\n          trigger: function(data) {\n            var el = this || data;\n            if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {\n              leverageNative(el, "click");\n            }\n            return true;\n          },\n          // For cross-browser consistency, suppress native .click() on links\n          // Also prevent it if we\'re currently inside a leveraged native-event stack\n          _default: function(event) {\n            var target = event.target;\n            return rcheckableType.test(target.type) && target.click && nodeName(target, "input") && dataPriv.get(target, "click") || nodeName(target, "a");\n          }\n        },\n        beforeunload: {\n          postDispatch: function(event) {\n            if (event.result !== void 0) {\n              event.preventDefault();\n            }\n          }\n        }\n      })\n    };\n    function leverageNative(el, type, isSetup) {\n      if (!isSetup) {\n        if (dataPriv.get(el, type) === void 0) {\n          jQuery2.event.add(el, type, returnTrue);\n        }\n        return;\n      }\n      dataPriv.set(el, type, false);\n      jQuery2.event.add(el, type, {\n        namespace: false,\n        handler: function(event) {\n          var result, saved = dataPriv.get(this, type);\n          if (event.isTrigger & 1 && this[type]) {\n            if (!saved.length) {\n              saved = slice.call(arguments);\n              dataPriv.set(this, type, saved);\n              this[type]();\n              result = dataPriv.get(this, type);\n              dataPriv.set(this, type, false);\n              if (saved !== result) {\n                event.stopImmediatePropagation();\n                event.preventDefault();\n                return result && result.value;\n              }\n            } else if ((jQuery2.event.special[type] || {}).delegateType) {\n              event.stopPropagation();\n            }\n          } else if (saved.length) {\n            dataPriv.set(this, type, {\n              value: jQuery2.event.trigger(\n                saved[0],\n                saved.slice(1),\n                this\n              )\n            });\n            event.stopPropagation();\n            event.isImmediatePropagationStopped = returnTrue;\n          }\n        }\n      });\n    }\n    jQuery2.removeEvent = function(elem, type, handle) {\n      if (elem.removeEventListener) {\n        elem.removeEventListener(type, handle);\n      }\n    };\n    jQuery2.Event = function(src, props) {\n      if (!(this instanceof jQuery2.Event)) {\n        return new jQuery2.Event(src, props);\n      }\n      if (src && src.type) {\n        this.originalEvent = src;\n        this.type = src.type;\n        this.isDefaultPrevented = src.defaultPrevented ? returnTrue : returnFalse;\n        this.target = src.target;\n        this.currentTarget = src.currentTarget;\n        this.relatedTarget = src.relatedTarget;\n      } else {\n        this.type = src;\n      }\n      if (props) {\n        jQuery2.extend(this, props);\n      }\n      this.timeStamp = src && src.timeStamp || Date.now();\n      this[jQuery2.expando] = true;\n    };\n    jQuery2.Event.prototype = {\n      constructor: jQuery2.Event,\n      isDefaultPrevented: returnFalse,\n      isPropagationStopped: returnFalse,\n      isImmediatePropagationStopped: returnFalse,\n      isSimulated: false,\n      preventDefault: function() {\n        var e = this.originalEvent;\n        this.isDefaultPrevented = returnTrue;\n        if (e && !this.isSimulated) {\n          e.preventDefault();\n        }\n      },\n      stopPropagation: function() {\n        var e = this.originalEvent;\n        this.isPropagationStopped = returnTrue;\n        if (e && !this.isSimulated) {\n          e.stopPropagation();\n        }\n      },\n      stopImmediatePropagation: function() {\n        var e = this.originalEvent;\n        this.isImmediatePropagationStopped = returnTrue;\n        if (e && !this.isSimulated) {\n          e.stopImmediatePropagation();\n        }\n        this.stopPropagation();\n      }\n    };\n    jQuery2.each({\n      altKey: true,\n      bubbles: true,\n      cancelable: true,\n      changedTouches: true,\n      ctrlKey: true,\n      detail: true,\n      eventPhase: true,\n      metaKey: true,\n      pageX: true,\n      pageY: true,\n      shiftKey: true,\n      view: true,\n      "char": true,\n      code: true,\n      charCode: true,\n      key: true,\n      keyCode: true,\n      button: true,\n      buttons: true,\n      clientX: true,\n      clientY: true,\n      offsetX: true,\n      offsetY: true,\n      pointerId: true,\n      pointerType: true,\n      screenX: true,\n      screenY: true,\n      targetTouches: true,\n      toElement: true,\n      touches: true,\n      which: true\n    }, jQuery2.event.addProp);\n    jQuery2.each({ focus: "focusin", blur: "focusout" }, function(type, delegateType) {\n      function focusMappedHandler(nativeEvent) {\n        var event = jQuery2.event.fix(nativeEvent);\n        event.type = nativeEvent.type === "focusin" ? "focus" : "blur";\n        event.isSimulated = true;\n        if (event.target === event.currentTarget) {\n          dataPriv.get(this, "handle")(event);\n        }\n      }\n      jQuery2.event.special[type] = {\n        // Utilize native event if possible so blur/focus sequence is correct\n        setup: function() {\n          leverageNative(this, type, true);\n          if (isIE) {\n            this.addEventListener(delegateType, focusMappedHandler);\n          } else {\n            return false;\n          }\n        },\n        trigger: function() {\n          leverageNative(this, type);\n          return true;\n        },\n        teardown: function() {\n          if (isIE) {\n            this.removeEventListener(delegateType, focusMappedHandler);\n          } else {\n            return false;\n          }\n        },\n        // Suppress native focus or blur if we\'re currently inside\n        // a leveraged native-event stack\n        _default: function(event) {\n          return dataPriv.get(event.target, type);\n        },\n        delegateType\n      };\n    });\n    jQuery2.each({\n      mouseenter: "mouseover",\n      mouseleave: "mouseout",\n      pointerenter: "pointerover",\n      pointerleave: "pointerout"\n    }, function(orig, fix) {\n      jQuery2.event.special[orig] = {\n        delegateType: fix,\n        bindType: fix,\n        handle: function(event) {\n          var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;\n          if (!related || related !== target && !jQuery2.contains(target, related)) {\n            event.type = handleObj.origType;\n            ret = handleObj.handler.apply(this, arguments);\n            event.type = fix;\n          }\n          return ret;\n        }\n      };\n    });\n    jQuery2.fn.extend({\n      on: function(types, selector, data, fn) {\n        return on(this, types, selector, data, fn);\n      },\n      one: function(types, selector, data, fn) {\n        return on(this, types, selector, data, fn, 1);\n      },\n      off: function(types, selector, fn) {\n        var handleObj, type;\n        if (types && types.preventDefault && types.handleObj) {\n          handleObj = types.handleObj;\n          jQuery2(types.delegateTarget).off(\n            handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,\n            handleObj.selector,\n            handleObj.handler\n          );\n          return this;\n        }\n        if (typeof types === "object") {\n          for (type in types) {\n            this.off(type, selector, types[type]);\n          }\n          return this;\n        }\n        if (selector === false || typeof selector === "function") {\n          fn = selector;\n          selector = void 0;\n        }\n        if (fn === false) {\n          fn = returnFalse;\n        }\n        return this.each(function() {\n          jQuery2.event.remove(this, types, fn, selector);\n        });\n      }\n    });\n    var rnoInnerhtml = /<script|<style|<link/i;\n    function manipulationTarget(elem, content) {\n      if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {\n        return jQuery2(elem).children("tbody")[0] || elem;\n      }\n      return elem;\n    }\n    function cloneCopyEvent(src, dest) {\n      var type, i2, l, events = dataPriv.get(src, "events");\n      if (dest.nodeType !== 1) {\n        return;\n      }\n      if (events) {\n        dataPriv.remove(dest, "handle events");\n        for (type in events) {\n          for (i2 = 0, l = events[type].length; i2 < l; i2++) {\n            jQuery2.event.add(dest, type, events[type][i2]);\n          }\n        }\n      }\n      if (dataUser.hasData(src)) {\n        dataUser.set(dest, jQuery2.extend({}, dataUser.get(src)));\n      }\n    }\n    function remove(elem, selector, keepData) {\n      var node, nodes = selector ? jQuery2.filter(selector, elem) : elem, i2 = 0;\n      for (; (node = nodes[i2]) != null; i2++) {\n        if (!keepData && node.nodeType === 1) {\n          jQuery2.cleanData(getAll(node));\n        }\n        if (node.parentNode) {\n          if (keepData && isAttached(node)) {\n            setGlobalEval(getAll(node, "script"));\n          }\n          node.parentNode.removeChild(node);\n        }\n      }\n      return elem;\n    }\n    jQuery2.extend({\n      htmlPrefilter: function(html) {\n        return html;\n      },\n      clone: function(elem, dataAndEvents, deepDataAndEvents) {\n        var i2, l, srcElements, destElements, clone = elem.cloneNode(true), inPage = isAttached(elem);\n        if (isIE && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery2.isXMLDoc(elem)) {\n          destElements = getAll(clone);\n          srcElements = getAll(elem);\n          for (i2 = 0, l = srcElements.length; i2 < l; i2++) {\n            if (nodeName(destElements[i2], "textarea")) {\n              destElements[i2].defaultValue = srcElements[i2].defaultValue;\n            }\n          }\n        }\n        if (dataAndEvents) {\n          if (deepDataAndEvents) {\n            srcElements = srcElements || getAll(elem);\n            destElements = destElements || getAll(clone);\n            for (i2 = 0, l = srcElements.length; i2 < l; i2++) {\n              cloneCopyEvent(srcElements[i2], destElements[i2]);\n            }\n          } else {\n            cloneCopyEvent(elem, clone);\n          }\n        }\n        destElements = getAll(clone, "script");\n        if (destElements.length > 0) {\n          setGlobalEval(destElements, !inPage && getAll(elem, "script"));\n        }\n        return clone;\n      },\n      cleanData: function(elems) {\n        var data, elem, type, special = jQuery2.event.special, i2 = 0;\n        for (; (elem = elems[i2]) !== void 0; i2++) {\n          if (acceptData(elem)) {\n            if (data = elem[dataPriv.expando]) {\n              if (data.events) {\n                for (type in data.events) {\n                  if (special[type]) {\n                    jQuery2.event.remove(elem, type);\n                  } else {\n                    jQuery2.removeEvent(elem, type, data.handle);\n                  }\n                }\n              }\n              elem[dataPriv.expando] = void 0;\n            }\n            if (elem[dataUser.expando]) {\n              elem[dataUser.expando] = void 0;\n            }\n          }\n        }\n      }\n    });\n    jQuery2.fn.extend({\n      detach: function(selector) {\n        return remove(this, selector, true);\n      },\n      remove: function(selector) {\n        return remove(this, selector);\n      },\n      text: function(value) {\n        return access(this, function(value2) {\n          return value2 === void 0 ? jQuery2.text(this) : this.empty().each(function() {\n            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {\n              this.textContent = value2;\n            }\n          });\n        }, null, value, arguments.length);\n      },\n      append: function() {\n        return domManip(this, arguments, function(elem) {\n          if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {\n            var target = manipulationTarget(this, elem);\n            target.appendChild(elem);\n          }\n        });\n      },\n      prepend: function() {\n        return domManip(this, arguments, function(elem) {\n          if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {\n            var target = manipulationTarget(this, elem);\n            target.insertBefore(elem, target.firstChild);\n          }\n        });\n      },\n      before: function() {\n        return domManip(this, arguments, function(elem) {\n          if (this.parentNode) {\n            this.parentNode.insertBefore(elem, this);\n          }\n        });\n      },\n      after: function() {\n        return domManip(this, arguments, function(elem) {\n          if (this.parentNode) {\n            this.parentNode.insertBefore(elem, this.nextSibling);\n          }\n        });\n      },\n      empty: function() {\n        var elem, i2 = 0;\n        for (; (elem = this[i2]) != null; i2++) {\n          if (elem.nodeType === 1) {\n            jQuery2.cleanData(getAll(elem, false));\n            elem.textContent = "";\n          }\n        }\n        return this;\n      },\n      clone: function(dataAndEvents, deepDataAndEvents) {\n        dataAndEvents = dataAndEvents == null ? false : dataAndEvents;\n        deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;\n        return this.map(function() {\n          return jQuery2.clone(this, dataAndEvents, deepDataAndEvents);\n        });\n      },\n      html: function(value) {\n        return access(this, function(value2) {\n          var elem = this[0] || {}, i2 = 0, l = this.length;\n          if (value2 === void 0 && elem.nodeType === 1) {\n            return elem.innerHTML;\n          }\n          if (typeof value2 === "string" && !rnoInnerhtml.test(value2) && !wrapMap[(rtagName.exec(value2) || ["", ""])[1].toLowerCase()]) {\n            value2 = jQuery2.htmlPrefilter(value2);\n            try {\n              for (; i2 < l; i2++) {\n                elem = this[i2] || {};\n                if (elem.nodeType === 1) {\n                  jQuery2.cleanData(getAll(elem, false));\n                  elem.innerHTML = value2;\n                }\n              }\n              elem = 0;\n            } catch (e) {\n            }\n          }\n          if (elem) {\n            this.empty().append(value2);\n          }\n        }, null, value, arguments.length);\n      },\n      replaceWith: function() {\n        var ignored = [];\n        return domManip(this, arguments, function(elem) {\n          var parent = this.parentNode;\n          if (jQuery2.inArray(this, ignored) < 0) {\n            jQuery2.cleanData(getAll(this));\n            if (parent) {\n              parent.replaceChild(elem, this);\n            }\n          }\n        }, ignored);\n      }\n    });\n    jQuery2.each({\n      appendTo: "append",\n      prependTo: "prepend",\n      insertBefore: "before",\n      insertAfter: "after",\n      replaceAll: "replaceWith"\n    }, function(name, original) {\n      jQuery2.fn[name] = function(selector) {\n        var elems, ret = [], insert = jQuery2(selector), last = insert.length - 1, i2 = 0;\n        for (; i2 <= last; i2++) {\n          elems = i2 === last ? this : this.clone(true);\n          jQuery2(insert[i2])[original](elems);\n          push.apply(ret, elems);\n        }\n        return this.pushStack(ret);\n      };\n    });\n    var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");\n    var rcustomProp = /^--/;\n    function getStyles(elem) {\n      var view = elem.ownerDocument.defaultView;\n      if (!view) {\n        view = window2;\n      }\n      return view.getComputedStyle(elem);\n    }\n    function swap(elem, options, callback) {\n      var ret, name, old = {};\n      for (name in options) {\n        old[name] = elem.style[name];\n        elem.style[name] = options[name];\n      }\n      ret = callback.call(elem);\n      for (name in options) {\n        elem.style[name] = old[name];\n      }\n      return ret;\n    }\n    function curCSS(elem, name, computed) {\n      var ret, isCustomProp = rcustomProp.test(name);\n      computed = computed || getStyles(elem);\n      if (computed) {\n        ret = computed.getPropertyValue(name) || computed[name];\n        if (isCustomProp && ret) {\n          ret = ret.replace(rtrimCSS, "$1") || void 0;\n        }\n        if (ret === "" && !isAttached(elem)) {\n          ret = jQuery2.style(elem, name);\n        }\n      }\n      return ret !== void 0 ? (\n        // Support: IE <=9 - 11+\n        // IE returns zIndex value as an integer.\n        ret + ""\n      ) : ret;\n    }\n    var cssPrefixes = ["Webkit", "Moz", "ms"], emptyStyle = document$1.createElement("div").style;\n    function vendorPropName(name) {\n      var capName = name[0].toUpperCase() + name.slice(1), i2 = cssPrefixes.length;\n      while (i2--) {\n        name = cssPrefixes[i2] + capName;\n        if (name in emptyStyle) {\n          return name;\n        }\n      }\n    }\n    function finalPropName(name) {\n      if (name in emptyStyle) {\n        return name;\n      }\n      return vendorPropName(name) || name;\n    }\n    var reliableTrDimensionsVal, reliableColDimensionsVal, table = document$1.createElement("table");\n    function computeTableStyleTests() {\n      if (\n        // This is a singleton, we need to execute it only once\n        !table || // Finish early in limited (non-browser) environments\n        !table.style\n      ) {\n        return;\n      }\n      var trStyle, col = document$1.createElement("col"), tr = document$1.createElement("tr"), td = document$1.createElement("td");\n      table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate;border-spacing:0";\n      tr.style.cssText = "box-sizing:content-box;border:1px solid;height:1px";\n      td.style.cssText = "height:9px;width:9px;padding:0";\n      col.span = 2;\n      documentElement$1.appendChild(table).appendChild(col).parentNode.appendChild(tr).appendChild(td).parentNode.appendChild(td.cloneNode(true));\n      if (table.offsetWidth === 0) {\n        documentElement$1.removeChild(table);\n        return;\n      }\n      trStyle = window2.getComputedStyle(tr);\n      reliableColDimensionsVal = isIE || Math.round(\n        parseFloat(\n          window2.getComputedStyle(col).width\n        )\n      ) === 18;\n      reliableTrDimensionsVal = Math.round(parseFloat(trStyle.height) + parseFloat(trStyle.borderTopWidth) + parseFloat(trStyle.borderBottomWidth)) === tr.offsetHeight;\n      documentElement$1.removeChild(table);\n      table = null;\n    }\n    jQuery2.extend(support, {\n      reliableTrDimensions: function() {\n        computeTableStyleTests();\n        return reliableTrDimensionsVal;\n      },\n      reliableColDimensions: function() {\n        computeTableStyleTests();\n        return reliableColDimensionsVal;\n      }\n    });\n    var cssShow = { position: "absolute", visibility: "hidden", display: "block" }, cssNormalTransform = {\n      letterSpacing: "0",\n      fontWeight: "400"\n    };\n    function setPositiveNumber(_elem, value, subtract) {\n      var matches2 = rcssNum.exec(value);\n      return matches2 ? (\n        // Guard against undefined "subtract", e.g., when used as in cssHooks\n        Math.max(0, matches2[2] - (subtract || 0)) + (matches2[3] || "px")\n      ) : value;\n    }\n    function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {\n      var i2 = dimension === "width" ? 1 : 0, extra = 0, delta = 0, marginDelta = 0;\n      if (box === (isBorderBox ? "border" : "content")) {\n        return 0;\n      }\n      for (; i2 < 4; i2 += 2) {\n        if (box === "margin") {\n          marginDelta += jQuery2.css(elem, box + cssExpand[i2], true, styles);\n        }\n        if (!isBorderBox) {\n          delta += jQuery2.css(elem, "padding" + cssExpand[i2], true, styles);\n          if (box !== "padding") {\n            delta += jQuery2.css(elem, "border" + cssExpand[i2] + "Width", true, styles);\n          } else {\n            extra += jQuery2.css(elem, "border" + cssExpand[i2] + "Width", true, styles);\n          }\n        } else {\n          if (box === "content") {\n            delta -= jQuery2.css(elem, "padding" + cssExpand[i2], true, styles);\n          }\n          if (box !== "margin") {\n            delta -= jQuery2.css(elem, "border" + cssExpand[i2] + "Width", true, styles);\n          }\n        }\n      }\n      if (!isBorderBox && computedVal >= 0) {\n        delta += Math.max(0, Math.ceil(\n          elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - 0.5\n          // If offsetWidth/offsetHeight is unknown, then we can\'t determine content-box scroll gutter\n          // Use an explicit zero to avoid NaN (gh-3964)\n        )) || 0;\n      }\n      return delta + marginDelta;\n    }\n    function getWidthOrHeight(elem, dimension, extra) {\n      var styles = getStyles(elem), boxSizingNeeded = isIE || extra, isBorderBox = boxSizingNeeded && jQuery2.css(elem, "boxSizing", false, styles) === "border-box", valueIsBorderBox = isBorderBox, val = curCSS(elem, dimension, styles), offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1);\n      if (rnumnonpx.test(val)) {\n        if (!extra) {\n          return val;\n        }\n        val = "auto";\n      }\n      if (\n        // Fall back to offsetWidth/offsetHeight when value is "auto"\n        // This happens for inline elements with no explicit setting (gh-3571)\n        (val === "auto" || // Support: IE 9 - 11+\n        // Use offsetWidth/offsetHeight for when box sizing is unreliable.\n        // In those cases, the computed value can be trusted to be border-box.\n        isIE && isBorderBox || !support.reliableColDimensions() && nodeName(elem, "col") || !support.reliableTrDimensions() && nodeName(elem, "tr")) && // Make sure the element is visible & connected\n        elem.getClientRects().length\n      ) {\n        isBorderBox = jQuery2.css(elem, "boxSizing", false, styles) === "border-box";\n        valueIsBorderBox = offsetProp in elem;\n        if (valueIsBorderBox) {\n          val = elem[offsetProp];\n        }\n      }\n      val = parseFloat(val) || 0;\n      return val + boxModelAdjustment(\n        elem,\n        dimension,\n        extra || (isBorderBox ? "border" : "content"),\n        valueIsBorderBox,\n        styles,\n        // Provide the current computed size to request scroll gutter calculation (gh-3589)\n        val\n      ) + "px";\n    }\n    jQuery2.extend({\n      // Add in style property hooks for overriding the default\n      // behavior of getting and setting a style property\n      cssHooks: {},\n      // Get and set the style property on a DOM Node\n      style: function(elem, name, value, extra) {\n        if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {\n          return;\n        }\n        var ret, type, hooks, origName = cssCamelCase(name), isCustomProp = rcustomProp.test(name), style = elem.style;\n        if (!isCustomProp) {\n          name = finalPropName(origName);\n        }\n        hooks = jQuery2.cssHooks[name] || jQuery2.cssHooks[origName];\n        if (value !== void 0) {\n          type = typeof value;\n          if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {\n            value = adjustCSS(elem, name, ret);\n            type = "number";\n          }\n          if (value == null || value !== value) {\n            return;\n          }\n          if (type === "number") {\n            value += ret && ret[3] || (isAutoPx(origName) ? "px" : "");\n          }\n          if (isIE && value === "" && name.indexOf("background") === 0) {\n            style[name] = "inherit";\n          }\n          if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== void 0) {\n            if (isCustomProp) {\n              style.setProperty(name, value);\n            } else {\n              style[name] = value;\n            }\n          }\n        } else {\n          if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== void 0) {\n            return ret;\n          }\n          return style[name];\n        }\n      },\n      css: function(elem, name, extra, styles) {\n        var val, num, hooks, origName = cssCamelCase(name), isCustomProp = rcustomProp.test(name);\n        if (!isCustomProp) {\n          name = finalPropName(origName);\n        }\n        hooks = jQuery2.cssHooks[name] || jQuery2.cssHooks[origName];\n        if (hooks && "get" in hooks) {\n          val = hooks.get(elem, true, extra);\n        }\n        if (val === void 0) {\n          val = curCSS(elem, name, styles);\n        }\n        if (val === "normal" && name in cssNormalTransform) {\n          val = cssNormalTransform[name];\n        }\n        if (extra === "" || extra) {\n          num = parseFloat(val);\n          return extra === true || isFinite(num) ? num || 0 : val;\n        }\n        return val;\n      }\n    });\n    jQuery2.each(["height", "width"], function(_i, dimension) {\n      jQuery2.cssHooks[dimension] = {\n        get: function(elem, computed, extra) {\n          if (computed) {\n            return jQuery2.css(elem, "display") === "none" ? swap(elem, cssShow, function() {\n              return getWidthOrHeight(elem, dimension, extra);\n            }) : getWidthOrHeight(elem, dimension, extra);\n          }\n        },\n        set: function(elem, value, extra) {\n          var matches2, styles = getStyles(elem), isBorderBox = extra && jQuery2.css(elem, "boxSizing", false, styles) === "border-box", subtract = extra ? boxModelAdjustment(\n            elem,\n            dimension,\n            extra,\n            isBorderBox,\n            styles\n          ) : 0;\n          if (subtract && (matches2 = rcssNum.exec(value)) && (matches2[3] || "px") !== "px") {\n            elem.style[dimension] = value;\n            value = jQuery2.css(elem, dimension);\n          }\n          return setPositiveNumber(elem, value, subtract);\n        }\n      };\n    });\n    jQuery2.each({\n      margin: "",\n      padding: "",\n      border: "Width"\n    }, function(prefix, suffix) {\n      jQuery2.cssHooks[prefix + suffix] = {\n        expand: function(value) {\n          var i2 = 0, expanded = {}, parts = typeof value === "string" ? value.split(" ") : [value];\n          for (; i2 < 4; i2++) {\n            expanded[prefix + cssExpand[i2] + suffix] = parts[i2] || parts[i2 - 2] || parts[0];\n          }\n          return expanded;\n        }\n      };\n      if (prefix !== "margin") {\n        jQuery2.cssHooks[prefix + suffix].set = setPositiveNumber;\n      }\n    });\n    jQuery2.fn.extend({\n      css: function(name, value) {\n        return access(this, function(elem, name2, value2) {\n          var styles, len, map = {}, i2 = 0;\n          if (Array.isArray(name2)) {\n            styles = getStyles(elem);\n            len = name2.length;\n            for (; i2 < len; i2++) {\n              map[name2[i2]] = jQuery2.css(elem, name2[i2], false, styles);\n            }\n            return map;\n          }\n          return value2 !== void 0 ? jQuery2.style(elem, name2, value2) : jQuery2.css(elem, name2);\n        }, name, value, arguments.length > 1);\n      }\n    });\n    function Tween(elem, options, prop, end, easing) {\n      return new Tween.prototype.init(elem, options, prop, end, easing);\n    }\n    jQuery2.Tween = Tween;\n    Tween.prototype = {\n      constructor: Tween,\n      init: function(elem, options, prop, end, easing, unit) {\n        this.elem = elem;\n        this.prop = prop;\n        this.easing = easing || jQuery2.easing._default;\n        this.options = options;\n        this.start = this.now = this.cur();\n        this.end = end;\n        this.unit = unit || (isAutoPx(prop) ? "px" : "");\n      },\n      cur: function() {\n        var hooks = Tween.propHooks[this.prop];\n        return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);\n      },\n      run: function(percent) {\n        var eased, hooks = Tween.propHooks[this.prop];\n        if (this.options.duration) {\n          this.pos = eased = jQuery2.easing[this.easing](\n            percent,\n            this.options.duration * percent,\n            0,\n            1,\n            this.options.duration\n          );\n        } else {\n          this.pos = eased = percent;\n        }\n        this.now = (this.end - this.start) * eased + this.start;\n        if (this.options.step) {\n          this.options.step.call(this.elem, this.now, this);\n        }\n        if (hooks && hooks.set) {\n          hooks.set(this);\n        } else {\n          Tween.propHooks._default.set(this);\n        }\n        return this;\n      }\n    };\n    Tween.prototype.init.prototype = Tween.prototype;\n    Tween.propHooks = {\n      _default: {\n        get: function(tween) {\n          var result;\n          if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {\n            return tween.elem[tween.prop];\n          }\n          result = jQuery2.css(tween.elem, tween.prop, "");\n          return !result || result === "auto" ? 0 : result;\n        },\n        set: function(tween) {\n          if (jQuery2.fx.step[tween.prop]) {\n            jQuery2.fx.step[tween.prop](tween);\n          } else if (tween.elem.nodeType === 1 && (jQuery2.cssHooks[tween.prop] || tween.elem.style[finalPropName(tween.prop)] != null)) {\n            jQuery2.style(tween.elem, tween.prop, tween.now + tween.unit);\n          } else {\n            tween.elem[tween.prop] = tween.now;\n          }\n        }\n      }\n    };\n    jQuery2.easing = {\n      linear: function(p) {\n        return p;\n      },\n      swing: function(p) {\n        return 0.5 - Math.cos(p * Math.PI) / 2;\n      },\n      _default: "swing"\n    };\n    jQuery2.fx = Tween.prototype.init;\n    jQuery2.fx.step = {};\n    var fxNow, inProgress, rfxtypes = /^(?:toggle|show|hide)$/, rrun = /queueHooks$/;\n    function schedule() {\n      if (inProgress) {\n        if (document$1.hidden === false && window2.requestAnimationFrame) {\n          window2.requestAnimationFrame(schedule);\n        } else {\n          window2.setTimeout(schedule, 13);\n        }\n        jQuery2.fx.tick();\n      }\n    }\n    function createFxNow() {\n      window2.setTimeout(function() {\n        fxNow = void 0;\n      });\n      return fxNow = Date.now();\n    }\n    function genFx(type, includeWidth) {\n      var which, i2 = 0, attrs = { height: type };\n      includeWidth = includeWidth ? 1 : 0;\n      for (; i2 < 4; i2 += 2 - includeWidth) {\n        which = cssExpand[i2];\n        attrs["margin" + which] = attrs["padding" + which] = type;\n      }\n      if (includeWidth) {\n        attrs.opacity = attrs.width = type;\n      }\n      return attrs;\n    }\n    function createTween(value, prop, animation) {\n      var tween, collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]), index = 0, length = collection.length;\n      for (; index < length; index++) {\n        if (tween = collection[index].call(animation, prop, value)) {\n          return tween;\n        }\n      }\n    }\n    function defaultPrefilter(elem, props, opts) {\n      var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display, isBox = "width" in props || "height" in props, anim = this, orig = {}, style = elem.style, hidden = elem.nodeType && isHiddenWithinTree(elem), dataShow = dataPriv.get(elem, "fxshow");\n      if (!opts.queue) {\n        hooks = jQuery2._queueHooks(elem, "fx");\n        if (hooks.unqueued == null) {\n          hooks.unqueued = 0;\n          oldfire = hooks.empty.fire;\n          hooks.empty.fire = function() {\n            if (!hooks.unqueued) {\n              oldfire();\n            }\n          };\n        }\n        hooks.unqueued++;\n        anim.always(function() {\n          anim.always(function() {\n            hooks.unqueued--;\n            if (!jQuery2.queue(elem, "fx").length) {\n              hooks.empty.fire();\n            }\n          });\n        });\n      }\n      for (prop in props) {\n        value = props[prop];\n        if (rfxtypes.test(value)) {\n          delete props[prop];\n          toggle = toggle || value === "toggle";\n          if (value === (hidden ? "hide" : "show")) {\n            if (value === "show" && dataShow && dataShow[prop] !== void 0) {\n              hidden = true;\n            } else {\n              continue;\n            }\n          }\n          orig[prop] = dataShow && dataShow[prop] || jQuery2.style(elem, prop);\n        }\n      }\n      propTween = !jQuery2.isEmptyObject(props);\n      if (!propTween && jQuery2.isEmptyObject(orig)) {\n        return;\n      }\n      if (isBox && elem.nodeType === 1) {\n        opts.overflow = [style.overflow, style.overflowX, style.overflowY];\n        restoreDisplay = dataShow && dataShow.display;\n        if (restoreDisplay == null) {\n          restoreDisplay = dataPriv.get(elem, "display");\n        }\n        display = jQuery2.css(elem, "display");\n        if (display === "none") {\n          if (restoreDisplay) {\n            display = restoreDisplay;\n          } else {\n            showHide([elem], true);\n            restoreDisplay = elem.style.display || restoreDisplay;\n            display = jQuery2.css(elem, "display");\n            showHide([elem]);\n          }\n        }\n        if (display === "inline" || display === "inline-block" && restoreDisplay != null) {\n          if (jQuery2.css(elem, "float") === "none") {\n            if (!propTween) {\n              anim.done(function() {\n                style.display = restoreDisplay;\n              });\n              if (restoreDisplay == null) {\n                display = style.display;\n                restoreDisplay = display === "none" ? "" : display;\n              }\n            }\n            style.display = "inline-block";\n          }\n        }\n      }\n      if (opts.overflow) {\n        style.overflow = "hidden";\n        anim.always(function() {\n          style.overflow = opts.overflow[0];\n          style.overflowX = opts.overflow[1];\n          style.overflowY = opts.overflow[2];\n        });\n      }\n      propTween = false;\n      for (prop in orig) {\n        if (!propTween) {\n          if (dataShow) {\n            if ("hidden" in dataShow) {\n              hidden = dataShow.hidden;\n            }\n          } else {\n            dataShow = dataPriv.set(elem, "fxshow", { display: restoreDisplay });\n          }\n          if (toggle) {\n            dataShow.hidden = !hidden;\n          }\n          if (hidden) {\n            showHide([elem], true);\n          }\n          anim.done(function() {\n            if (!hidden) {\n              showHide([elem]);\n            }\n            dataPriv.remove(elem, "fxshow");\n            for (prop in orig) {\n              jQuery2.style(elem, prop, orig[prop]);\n            }\n          });\n        }\n        propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);\n        if (!(prop in dataShow)) {\n          dataShow[prop] = propTween.start;\n          if (hidden) {\n            propTween.end = propTween.start;\n            propTween.start = 0;\n          }\n        }\n      }\n    }\n    function propFilter(props, specialEasing) {\n      var index, name, easing, value, hooks;\n      for (index in props) {\n        name = cssCamelCase(index);\n        easing = specialEasing[name];\n        value = props[index];\n        if (Array.isArray(value)) {\n          easing = value[1];\n          value = props[index] = value[0];\n        }\n        if (index !== name) {\n          props[name] = value;\n          delete props[index];\n        }\n        hooks = jQuery2.cssHooks[name];\n        if (hooks && "expand" in hooks) {\n          value = hooks.expand(value);\n          delete props[name];\n          for (index in value) {\n            if (!(index in props)) {\n              props[index] = value[index];\n              specialEasing[index] = easing;\n            }\n          }\n        } else {\n          specialEasing[name] = easing;\n        }\n      }\n    }\n    function Animation(elem, properties, options) {\n      var result, stopped, index = 0, length = Animation.prefilters.length, deferred = jQuery2.Deferred().always(function() {\n        delete tick.elem;\n      }), tick = function() {\n        if (stopped) {\n          return false;\n        }\n        var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), percent = 1 - (remaining / animation.duration || 0), index2 = 0, length2 = animation.tweens.length;\n        for (; index2 < length2; index2++) {\n          animation.tweens[index2].run(percent);\n        }\n        deferred.notifyWith(elem, [animation, percent, remaining]);\n        if (percent < 1 && length2) {\n          return remaining;\n        }\n        if (!length2) {\n          deferred.notifyWith(elem, [animation, 1, 0]);\n        }\n        deferred.resolveWith(elem, [animation]);\n        return false;\n      }, animation = deferred.promise({\n        elem,\n        props: jQuery2.extend({}, properties),\n        opts: jQuery2.extend(true, {\n          specialEasing: {},\n          easing: jQuery2.easing._default\n        }, options),\n        originalProperties: properties,\n        originalOptions: options,\n        startTime: fxNow || createFxNow(),\n        duration: options.duration,\n        tweens: [],\n        createTween: function(prop, end) {\n          var tween = jQuery2.Tween(\n            elem,\n            animation.opts,\n            prop,\n            end,\n            animation.opts.specialEasing[prop] || animation.opts.easing\n          );\n          animation.tweens.push(tween);\n          return tween;\n        },\n        stop: function(gotoEnd) {\n          var index2 = 0, length2 = gotoEnd ? animation.tweens.length : 0;\n          if (stopped) {\n            return this;\n          }\n          stopped = true;\n          for (; index2 < length2; index2++) {\n            animation.tweens[index2].run(1);\n          }\n          if (gotoEnd) {\n            deferred.notifyWith(elem, [animation, 1, 0]);\n            deferred.resolveWith(elem, [animation, gotoEnd]);\n          } else {\n            deferred.rejectWith(elem, [animation, gotoEnd]);\n          }\n          return this;\n        }\n      }), props = animation.props;\n      propFilter(props, animation.opts.specialEasing);\n      for (; index < length; index++) {\n        result = Animation.prefilters[index].call(animation, elem, props, animation.opts);\n        if (result) {\n          if (typeof result.stop === "function") {\n            jQuery2._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);\n          }\n          return result;\n        }\n      }\n      jQuery2.map(props, createTween, animation);\n      if (typeof animation.opts.start === "function") {\n        animation.opts.start.call(elem, animation);\n      }\n      animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);\n      jQuery2.fx.timer(\n        jQuery2.extend(tick, {\n          elem,\n          anim: animation,\n          queue: animation.opts.queue\n        })\n      );\n      return animation;\n    }\n    jQuery2.Animation = jQuery2.extend(Animation, {\n      tweeners: {\n        "*": [function(prop, value) {\n          var tween = this.createTween(prop, value);\n          adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);\n          return tween;\n        }]\n      },\n      tweener: function(props, callback) {\n        if (typeof props === "function") {\n          callback = props;\n          props = ["*"];\n        } else {\n          props = props.match(rnothtmlwhite);\n        }\n        var prop, index = 0, length = props.length;\n        for (; index < length; index++) {\n          prop = props[index];\n          Animation.tweeners[prop] = Animation.tweeners[prop] || [];\n          Animation.tweeners[prop].unshift(callback);\n        }\n      },\n      prefilters: [defaultPrefilter],\n      prefilter: function(callback, prepend) {\n        if (prepend) {\n          Animation.prefilters.unshift(callback);\n        } else {\n          Animation.prefilters.push(callback);\n        }\n      }\n    });\n    jQuery2.speed = function(speed, easing, fn) {\n      var opt = speed && typeof speed === "object" ? jQuery2.extend({}, speed) : {\n        complete: fn || easing || typeof speed === "function" && speed,\n        duration: speed,\n        easing: fn && easing || easing && typeof easing !== "function" && easing\n      };\n      if (jQuery2.fx.off) {\n        opt.duration = 0;\n      } else {\n        if (typeof opt.duration !== "number") {\n          if (opt.duration in jQuery2.fx.speeds) {\n            opt.duration = jQuery2.fx.speeds[opt.duration];\n          } else {\n            opt.duration = jQuery2.fx.speeds._default;\n          }\n        }\n      }\n      if (opt.queue == null || opt.queue === true) {\n        opt.queue = "fx";\n      }\n      opt.old = opt.complete;\n      opt.complete = function() {\n        if (typeof opt.old === "function") {\n          opt.old.call(this);\n        }\n        if (opt.queue) {\n          jQuery2.dequeue(this, opt.queue);\n        }\n      };\n      return opt;\n    };\n    jQuery2.fn.extend({\n      fadeTo: function(speed, to, easing, callback) {\n        return this.filter(isHiddenWithinTree).css("opacity", 0).show().end().animate({ opacity: to }, speed, easing, callback);\n      },\n      animate: function(prop, speed, easing, callback) {\n        var empty = jQuery2.isEmptyObject(prop), optall = jQuery2.speed(speed, easing, callback), doAnimation = function() {\n          var anim = Animation(this, jQuery2.extend({}, prop), optall);\n          if (empty || dataPriv.get(this, "finish")) {\n            anim.stop(true);\n          }\n        };\n        doAnimation.finish = doAnimation;\n        return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);\n      },\n      stop: function(type, clearQueue, gotoEnd) {\n        var stopQueue = function(hooks) {\n          var stop = hooks.stop;\n          delete hooks.stop;\n          stop(gotoEnd);\n        };\n        if (typeof type !== "string") {\n          gotoEnd = clearQueue;\n          clearQueue = type;\n          type = void 0;\n        }\n        if (clearQueue) {\n          this.queue(type || "fx", []);\n        }\n        return this.each(function() {\n          var dequeue = true, index = type != null && type + "queueHooks", timers = jQuery2.timers, data = dataPriv.get(this);\n          if (index) {\n            if (data[index] && data[index].stop) {\n              stopQueue(data[index]);\n            }\n          } else {\n            for (index in data) {\n              if (data[index] && data[index].stop && rrun.test(index)) {\n                stopQueue(data[index]);\n              }\n            }\n          }\n          for (index = timers.length; index--; ) {\n            if (timers[index].elem === this && (type == null || timers[index].queue === type)) {\n              timers[index].anim.stop(gotoEnd);\n              dequeue = false;\n              timers.splice(index, 1);\n            }\n          }\n          if (dequeue || !gotoEnd) {\n            jQuery2.dequeue(this, type);\n          }\n        });\n      },\n      finish: function(type) {\n        if (type !== false) {\n          type = type || "fx";\n        }\n        return this.each(function() {\n          var index, data = dataPriv.get(this), queue = data[type + "queue"], hooks = data[type + "queueHooks"], timers = jQuery2.timers, length = queue ? queue.length : 0;\n          data.finish = true;\n          jQuery2.queue(this, type, []);\n          if (hooks && hooks.stop) {\n            hooks.stop.call(this, true);\n          }\n          for (index = timers.length; index--; ) {\n            if (timers[index].elem === this && timers[index].queue === type) {\n              timers[index].anim.stop(true);\n              timers.splice(index, 1);\n            }\n          }\n          for (index = 0; index < length; index++) {\n            if (queue[index] && queue[index].finish) {\n              queue[index].finish.call(this);\n            }\n          }\n          delete data.finish;\n        });\n      }\n    });\n    jQuery2.each(["toggle", "show", "hide"], function(_i, name) {\n      var cssFn = jQuery2.fn[name];\n      jQuery2.fn[name] = function(speed, easing, callback) {\n        return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);\n      };\n    });\n    jQuery2.each({\n      slideDown: genFx("show"),\n      slideUp: genFx("hide"),\n      slideToggle: genFx("toggle"),\n      fadeIn: { opacity: "show" },\n      fadeOut: { opacity: "hide" },\n      fadeToggle: { opacity: "toggle" }\n    }, function(name, props) {\n      jQuery2.fn[name] = function(speed, easing, callback) {\n        return this.animate(props, speed, easing, callback);\n      };\n    });\n    jQuery2.timers = [];\n    jQuery2.fx.tick = function() {\n      var timer, i2 = 0, timers = jQuery2.timers;\n      fxNow = Date.now();\n      for (; i2 < timers.length; i2++) {\n        timer = timers[i2];\n        if (!timer() && timers[i2] === timer) {\n          timers.splice(i2--, 1);\n        }\n      }\n      if (!timers.length) {\n        jQuery2.fx.stop();\n      }\n      fxNow = void 0;\n    };\n    jQuery2.fx.timer = function(timer) {\n      jQuery2.timers.push(timer);\n      jQuery2.fx.start();\n    };\n    jQuery2.fx.start = function() {\n      if (inProgress) {\n        return;\n      }\n      inProgress = true;\n      schedule();\n    };\n    jQuery2.fx.stop = function() {\n      inProgress = null;\n    };\n    jQuery2.fx.speeds = {\n      slow: 600,\n      fast: 200,\n      // Default speed\n      _default: 400\n    };\n    jQuery2.fn.delay = function(time, type) {\n      time = jQuery2.fx ? jQuery2.fx.speeds[time] || time : time;\n      type = type || "fx";\n      return this.queue(type, function(next, hooks) {\n        var timeout = window2.setTimeout(next, time);\n        hooks.stop = function() {\n          window2.clearTimeout(timeout);\n        };\n      });\n    };\n    var rfocusable = /^(?:input|select|textarea|button)$/i, rclickable = /^(?:a|area)$/i;\n    jQuery2.fn.extend({\n      prop: function(name, value) {\n        return access(this, jQuery2.prop, name, value, arguments.length > 1);\n      },\n      removeProp: function(name) {\n        return this.each(function() {\n          delete this[jQuery2.propFix[name] || name];\n        });\n      }\n    });\n    jQuery2.extend({\n      prop: function(elem, name, value) {\n        var ret, hooks, nType = elem.nodeType;\n        if (nType === 3 || nType === 8 || nType === 2) {\n          return;\n        }\n        if (nType !== 1 || !jQuery2.isXMLDoc(elem)) {\n          name = jQuery2.propFix[name] || name;\n          hooks = jQuery2.propHooks[name];\n        }\n        if (value !== void 0) {\n          if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) {\n            return ret;\n          }\n          return elem[name] = value;\n        }\n        if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {\n          return ret;\n        }\n        return elem[name];\n      },\n      propHooks: {\n        tabIndex: {\n          get: function(elem) {\n            var tabindex = elem.getAttribute("tabindex");\n            if (tabindex) {\n              return parseInt(tabindex, 10);\n            }\n            if (rfocusable.test(elem.nodeName) || // href-less anchor\'s `tabIndex` property value is `0` and\n            // the `tabindex` attribute value: `null`. We want `-1`.\n            rclickable.test(elem.nodeName) && elem.href) {\n              return 0;\n            }\n            return -1;\n          }\n        }\n      },\n      propFix: {\n        "for": "htmlFor",\n        "class": "className"\n      }\n    });\n    if (isIE) {\n      jQuery2.propHooks.selected = {\n        get: function(elem) {\n          var parent = elem.parentNode;\n          if (parent && parent.parentNode) {\n            parent.parentNode.selectedIndex;\n          }\n          return null;\n        },\n        set: function(elem) {\n          var parent = elem.parentNode;\n          if (parent) {\n            parent.selectedIndex;\n            if (parent.parentNode) {\n              parent.parentNode.selectedIndex;\n            }\n          }\n        }\n      };\n    }\n    jQuery2.each([\n      "tabIndex",\n      "readOnly",\n      "maxLength",\n      "cellSpacing",\n      "cellPadding",\n      "rowSpan",\n      "colSpan",\n      "useMap",\n      "frameBorder",\n      "contentEditable"\n    ], function() {\n      jQuery2.propFix[this.toLowerCase()] = this;\n    });\n    function stripAndCollapse(value) {\n      var tokens = value.match(rnothtmlwhite) || [];\n      return tokens.join(" ");\n    }\n    function getClass(elem) {\n      return elem.getAttribute && elem.getAttribute("class") || "";\n    }\n    function classesToArray(value) {\n      if (Array.isArray(value)) {\n        return value;\n      }\n      if (typeof value === "string") {\n        return value.match(rnothtmlwhite) || [];\n      }\n      return [];\n    }\n    jQuery2.fn.extend({\n      addClass: function(value) {\n        var classNames, cur, curValue, className, i2, finalValue;\n        if (typeof value === "function") {\n          return this.each(function(j) {\n            jQuery2(this).addClass(value.call(this, j, getClass(this)));\n          });\n        }\n        classNames = classesToArray(value);\n        if (classNames.length) {\n          return this.each(function() {\n            curValue = getClass(this);\n            cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";\n            if (cur) {\n              for (i2 = 0; i2 < classNames.length; i2++) {\n                className = classNames[i2];\n                if (cur.indexOf(" " + className + " ") < 0) {\n                  cur += className + " ";\n                }\n              }\n              finalValue = stripAndCollapse(cur);\n              if (curValue !== finalValue) {\n                this.setAttribute("class", finalValue);\n              }\n            }\n          });\n        }\n        return this;\n      },\n      removeClass: function(value) {\n        var classNames, cur, curValue, className, i2, finalValue;\n        if (typeof value === "function") {\n          return this.each(function(j) {\n            jQuery2(this).removeClass(value.call(this, j, getClass(this)));\n          });\n        }\n        if (!arguments.length) {\n          return this.attr("class", "");\n        }\n        classNames = classesToArray(value);\n        if (classNames.length) {\n          return this.each(function() {\n            curValue = getClass(this);\n            cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";\n            if (cur) {\n              for (i2 = 0; i2 < classNames.length; i2++) {\n                className = classNames[i2];\n                while (cur.indexOf(" " + className + " ") > -1) {\n                  cur = cur.replace(" " + className + " ", " ");\n                }\n              }\n              finalValue = stripAndCollapse(cur);\n              if (curValue !== finalValue) {\n                this.setAttribute("class", finalValue);\n              }\n            }\n          });\n        }\n        return this;\n      },\n      toggleClass: function(value, stateVal) {\n        var classNames, className, i2, self;\n        if (typeof value === "function") {\n          return this.each(function(i3) {\n            jQuery2(this).toggleClass(\n              value.call(this, i3, getClass(this), stateVal),\n              stateVal\n            );\n          });\n        }\n        if (typeof stateVal === "boolean") {\n          return stateVal ? this.addClass(value) : this.removeClass(value);\n        }\n        classNames = classesToArray(value);\n        if (classNames.length) {\n          return this.each(function() {\n            self = jQuery2(this);\n            for (i2 = 0; i2 < classNames.length; i2++) {\n              className = classNames[i2];\n              if (self.hasClass(className)) {\n                self.removeClass(className);\n              } else {\n                self.addClass(className);\n              }\n            }\n          });\n        }\n        return this;\n      },\n      hasClass: function(selector) {\n        var className, elem, i2 = 0;\n        className = " " + selector + " ";\n        while (elem = this[i2++]) {\n          if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {\n            return true;\n          }\n        }\n        return false;\n      }\n    });\n    jQuery2.fn.extend({\n      val: function(value) {\n        var hooks, ret, valueIsFunction, elem = this[0];\n        if (!arguments.length) {\n          if (elem) {\n            hooks = jQuery2.valHooks[elem.type] || jQuery2.valHooks[elem.nodeName.toLowerCase()];\n            if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== void 0) {\n              return ret;\n            }\n            ret = elem.value;\n            return ret == null ? "" : ret;\n          }\n          return;\n        }\n        valueIsFunction = typeof value === "function";\n        return this.each(function(i2) {\n          var val;\n          if (this.nodeType !== 1) {\n            return;\n          }\n          if (valueIsFunction) {\n            val = value.call(this, i2, jQuery2(this).val());\n          } else {\n            val = value;\n          }\n          if (val == null) {\n            val = "";\n          } else if (typeof val === "number") {\n            val += "";\n          } else if (Array.isArray(val)) {\n            val = jQuery2.map(val, function(value2) {\n              return value2 == null ? "" : value2 + "";\n            });\n          }\n          hooks = jQuery2.valHooks[this.type] || jQuery2.valHooks[this.nodeName.toLowerCase()];\n          if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === void 0) {\n            this.value = val;\n          }\n        });\n      }\n    });\n    jQuery2.extend({\n      valHooks: {\n        select: {\n          get: function(elem) {\n            var value, option, i2, options = elem.options, index = elem.selectedIndex, one = elem.type === "select-one", values = one ? null : [], max = one ? index + 1 : options.length;\n            if (index < 0) {\n              i2 = max;\n            } else {\n              i2 = one ? index : 0;\n            }\n            for (; i2 < max; i2++) {\n              option = options[i2];\n              if (option.selected && // Don\'t return options that are disabled or in a disabled optgroup\n              !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {\n                value = jQuery2(option).val();\n                if (one) {\n                  return value;\n                }\n                values.push(value);\n              }\n            }\n            return values;\n          },\n          set: function(elem, value) {\n            var optionSet, option, options = elem.options, values = jQuery2.makeArray(value), i2 = options.length;\n            while (i2--) {\n              option = options[i2];\n              if (option.selected = jQuery2.inArray(jQuery2(option).val(), values) > -1) {\n                optionSet = true;\n              }\n            }\n            if (!optionSet) {\n              elem.selectedIndex = -1;\n            }\n            return values;\n          }\n        }\n      }\n    });\n    if (isIE) {\n      jQuery2.valHooks.option = {\n        get: function(elem) {\n          var val = elem.getAttribute("value");\n          return val != null ? val : (\n            // Support: IE <=10 - 11+\n            // option.text throws exceptions (trac-14686, trac-14858)\n            // Strip and collapse whitespace\n            // https://html.spec.whatwg.org/#strip-and-collapse-whitespace\n            stripAndCollapse(jQuery2.text(elem))\n          );\n        }\n      };\n    }\n    jQuery2.each(["radio", "checkbox"], function() {\n      jQuery2.valHooks[this] = {\n        set: function(elem, value) {\n          if (Array.isArray(value)) {\n            return elem.checked = jQuery2.inArray(jQuery2(elem).val(), value) > -1;\n          }\n        }\n      };\n    });\n    var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, stopPropagationCallback = function(e) {\n      e.stopPropagation();\n    };\n    jQuery2.extend(jQuery2.event, {\n      trigger: function(event, data, elem, onlyHandlers) {\n        var i2, cur, tmp, bubbleType, ontype, handle, special, lastElement, eventPath = [elem || document$1], type = hasOwn.call(event, "type") ? event.type : event, namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];\n        cur = lastElement = tmp = elem = elem || document$1;\n        if (elem.nodeType === 3 || elem.nodeType === 8) {\n          return;\n        }\n        if (rfocusMorph.test(type + jQuery2.event.triggered)) {\n          return;\n        }\n        if (type.indexOf(".") > -1) {\n          namespaces = type.split(".");\n          type = namespaces.shift();\n          namespaces.sort();\n        }\n        ontype = type.indexOf(":") < 0 && "on" + type;\n        event = event[jQuery2.expando] ? event : new jQuery2.Event(type, typeof event === "object" && event);\n        event.isTrigger = onlyHandlers ? 2 : 3;\n        event.namespace = namespaces.join(".");\n        event.rnamespace = event.namespace ? new RegExp("(^|\\\\.)" + namespaces.join("\\\\.(?:.*\\\\.|)") + "(\\\\.|$)") : null;\n        event.result = void 0;\n        if (!event.target) {\n          event.target = elem;\n        }\n        data = data == null ? [event] : jQuery2.makeArray(data, [event]);\n        special = jQuery2.event.special[type] || {};\n        if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {\n          return;\n        }\n        if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {\n          bubbleType = special.delegateType || type;\n          if (!rfocusMorph.test(bubbleType + type)) {\n            cur = cur.parentNode;\n          }\n          for (; cur; cur = cur.parentNode) {\n            eventPath.push(cur);\n            tmp = cur;\n          }\n          if (tmp === (elem.ownerDocument || document$1)) {\n            eventPath.push(tmp.defaultView || tmp.parentWindow || window2);\n          }\n        }\n        i2 = 0;\n        while ((cur = eventPath[i2++]) && !event.isPropagationStopped()) {\n          lastElement = cur;\n          event.type = i2 > 1 ? bubbleType : special.bindType || type;\n          handle = (dataPriv.get(cur, "events") || /* @__PURE__ */ Object.create(null))[event.type] && dataPriv.get(cur, "handle");\n          if (handle) {\n            handle.apply(cur, data);\n          }\n          handle = ontype && cur[ontype];\n          if (handle && handle.apply && acceptData(cur)) {\n            event.result = handle.apply(cur, data);\n            if (event.result === false) {\n              event.preventDefault();\n            }\n          }\n        }\n        event.type = type;\n        if (!onlyHandlers && !event.isDefaultPrevented()) {\n          if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {\n            if (ontype && typeof elem[type] === "function" && !isWindow(elem)) {\n              tmp = elem[ontype];\n              if (tmp) {\n                elem[ontype] = null;\n              }\n              jQuery2.event.triggered = type;\n              if (event.isPropagationStopped()) {\n                lastElement.addEventListener(type, stopPropagationCallback);\n              }\n              elem[type]();\n              if (event.isPropagationStopped()) {\n                lastElement.removeEventListener(type, stopPropagationCallback);\n              }\n              jQuery2.event.triggered = void 0;\n              if (tmp) {\n                elem[ontype] = tmp;\n              }\n            }\n          }\n        }\n        return event.result;\n      },\n      // Piggyback on a donor event to simulate a different one\n      // Used only for `focus(in | out)` events\n      simulate: function(type, elem, event) {\n        var e = jQuery2.extend(\n          new jQuery2.Event(),\n          event,\n          {\n            type,\n            isSimulated: true\n          }\n        );\n        jQuery2.event.trigger(e, null, elem);\n      }\n    });\n    jQuery2.fn.extend({\n      trigger: function(type, data) {\n        return this.each(function() {\n          jQuery2.event.trigger(type, data, this);\n        });\n      },\n      triggerHandler: function(type, data) {\n        var elem = this[0];\n        if (elem) {\n          return jQuery2.event.trigger(type, data, elem, true);\n        }\n      }\n    });\n    var location = window2.location;\n    var nonce = { guid: Date.now() };\n    var rquery = /\\?/;\n    jQuery2.parseXML = function(data) {\n      var xml, parserErrorElem;\n      if (!data || typeof data !== "string") {\n        return null;\n      }\n      try {\n        xml = new window2.DOMParser().parseFromString(data, "text/xml");\n      } catch (e) {\n      }\n      parserErrorElem = xml && xml.getElementsByTagName("parsererror")[0];\n      if (!xml || parserErrorElem) {\n        jQuery2.error("Invalid XML: " + (parserErrorElem ? jQuery2.map(parserErrorElem.childNodes, function(el) {\n          return el.textContent;\n        }).join("\\n") : data));\n      }\n      return xml;\n    };\n    var rbracket = /\\[\\]$/, rCRLF = /\\r?\\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;\n    function buildParams(prefix, obj, traditional, add) {\n      var name;\n      if (Array.isArray(obj)) {\n        jQuery2.each(obj, function(i2, v) {\n          if (traditional || rbracket.test(prefix)) {\n            add(prefix, v);\n          } else {\n            buildParams(\n              prefix + "[" + (typeof v === "object" && v != null ? i2 : "") + "]",\n              v,\n              traditional,\n              add\n            );\n          }\n        });\n      } else if (!traditional && toType(obj) === "object") {\n        for (name in obj) {\n          buildParams(prefix + "[" + name + "]", obj[name], traditional, add);\n        }\n      } else {\n        add(prefix, obj);\n      }\n    }\n    jQuery2.param = function(a, traditional) {\n      var prefix, s = [], add = function(key, valueOrFunction) {\n        var value = typeof valueOrFunction === "function" ? valueOrFunction() : valueOrFunction;\n        s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);\n      };\n      if (a == null) {\n        return "";\n      }\n      if (Array.isArray(a) || a.jquery && !jQuery2.isPlainObject(a)) {\n        jQuery2.each(a, function() {\n          add(this.name, this.value);\n        });\n      } else {\n        for (prefix in a) {\n          buildParams(prefix, a[prefix], traditional, add);\n        }\n      }\n      return s.join("&");\n    };\n    jQuery2.fn.extend({\n      serialize: function() {\n        return jQuery2.param(this.serializeArray());\n      },\n      serializeArray: function() {\n        return this.map(function() {\n          var elements = jQuery2.prop(this, "elements");\n          return elements ? jQuery2.makeArray(elements) : this;\n        }).filter(function() {\n          var type = this.type;\n          return this.name && !jQuery2(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));\n        }).map(function(_i, elem) {\n          var val = jQuery2(this).val();\n          if (val == null) {\n            return null;\n          }\n          if (Array.isArray(val)) {\n            return jQuery2.map(val, function(val2) {\n              return { name: elem.name, value: val2.replace(rCRLF, "\\r\\n") };\n            });\n          }\n          return { name: elem.name, value: val.replace(rCRLF, "\\r\\n") };\n        }).get();\n      }\n    });\n    var r20 = /%20/g, rhash = /#.*$/, rantiCache = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \\t]*([^\\r\\n]*)$/mg, rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\\/\\//, prefilters = {}, transports = {}, allTypes = "*/".concat("*"), originAnchor = document$1.createElement("a");\n    originAnchor.href = location.href;\n    function addToPrefiltersOrTransports(structure) {\n      return function(dataTypeExpression, func) {\n        if (typeof dataTypeExpression !== "string") {\n          func = dataTypeExpression;\n          dataTypeExpression = "*";\n        }\n        var dataType, i2 = 0, dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];\n        if (typeof func === "function") {\n          while (dataType = dataTypes[i2++]) {\n            if (dataType[0] === "+") {\n              dataType = dataType.slice(1) || "*";\n              (structure[dataType] = structure[dataType] || []).unshift(func);\n            } else {\n              (structure[dataType] = structure[dataType] || []).push(func);\n            }\n          }\n        }\n      };\n    }\n    function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {\n      var inspected = {}, seekingTransport = structure === transports;\n      function inspect(dataType) {\n        var selected;\n        inspected[dataType] = true;\n        jQuery2.each(structure[dataType] || [], function(_, prefilterOrFactory) {\n          var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);\n          if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {\n            options.dataTypes.unshift(dataTypeOrTransport);\n            inspect(dataTypeOrTransport);\n            return false;\n          } else if (seekingTransport) {\n            return !(selected = dataTypeOrTransport);\n          }\n        });\n        return selected;\n      }\n      return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");\n    }\n    function ajaxExtend(target, src) {\n      var key, deep, flatOptions = jQuery2.ajaxSettings.flatOptions || {};\n      for (key in src) {\n        if (src[key] !== void 0) {\n          (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];\n        }\n      }\n      if (deep) {\n        jQuery2.extend(true, target, deep);\n      }\n      return target;\n    }\n    function ajaxHandleResponses(s, jqXHR, responses) {\n      var ct, type, finalDataType, firstDataType, contents = s.contents, dataTypes = s.dataTypes;\n      while (dataTypes[0] === "*") {\n        dataTypes.shift();\n        if (ct === void 0) {\n          ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");\n        }\n      }\n      if (ct) {\n        for (type in contents) {\n          if (contents[type] && contents[type].test(ct)) {\n            dataTypes.unshift(type);\n            break;\n          }\n        }\n      }\n      if (dataTypes[0] in responses) {\n        finalDataType = dataTypes[0];\n      } else {\n        for (type in responses) {\n          if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {\n            finalDataType = type;\n            break;\n          }\n          if (!firstDataType) {\n            firstDataType = type;\n          }\n        }\n        finalDataType = finalDataType || firstDataType;\n      }\n      if (finalDataType) {\n        if (finalDataType !== dataTypes[0]) {\n          dataTypes.unshift(finalDataType);\n        }\n        return responses[finalDataType];\n      }\n    }\n    function ajaxConvert(s, response, jqXHR, isSuccess) {\n      var conv2, current, conv, tmp, prev, converters = {}, dataTypes = s.dataTypes.slice();\n      if (dataTypes[1]) {\n        for (conv in s.converters) {\n          converters[conv.toLowerCase()] = s.converters[conv];\n        }\n      }\n      current = dataTypes.shift();\n      while (current) {\n        if (s.responseFields[current]) {\n          jqXHR[s.responseFields[current]] = response;\n        }\n        if (!prev && isSuccess && s.dataFilter) {\n          response = s.dataFilter(response, s.dataType);\n        }\n        prev = current;\n        current = dataTypes.shift();\n        if (current) {\n          if (current === "*") {\n            current = prev;\n          } else if (prev !== "*" && prev !== current) {\n            conv = converters[prev + " " + current] || converters["* " + current];\n            if (!conv) {\n              for (conv2 in converters) {\n                tmp = conv2.split(" ");\n                if (tmp[1] === current) {\n                  conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];\n                  if (conv) {\n                    if (conv === true) {\n                      conv = converters[conv2];\n                    } else if (converters[conv2] !== true) {\n                      current = tmp[0];\n                      dataTypes.unshift(tmp[1]);\n                    }\n                    break;\n                  }\n                }\n              }\n            }\n            if (conv !== true) {\n              if (conv && s.throws) {\n                response = conv(response);\n              } else {\n                try {\n                  response = conv(response);\n                } catch (e) {\n                  return {\n                    state: "parsererror",\n                    error: conv ? e : "No conversion from " + prev + " to " + current\n                  };\n                }\n              }\n            }\n          }\n        }\n      }\n      return { state: "success", data: response };\n    }\n    jQuery2.extend({\n      // Counter for holding the number of active queries\n      active: 0,\n      // Last-Modified header cache for next request\n      lastModified: {},\n      etag: {},\n      ajaxSettings: {\n        url: location.href,\n        type: "GET",\n        isLocal: rlocalProtocol.test(location.protocol),\n        global: true,\n        processData: true,\n        async: true,\n        contentType: "application/x-www-form-urlencoded; charset=UTF-8",\n        /*\n        timeout: 0,\n        data: null,\n        dataType: null,\n        username: null,\n        password: null,\n        cache: null,\n        throws: false,\n        traditional: false,\n        headers: {},\n        */\n        accepts: {\n          "*": allTypes,\n          text: "text/plain",\n          html: "text/html",\n          xml: "application/xml, text/xml",\n          json: "application/json, text/javascript"\n        },\n        contents: {\n          xml: /\\bxml\\b/,\n          html: /\\bhtml/,\n          json: /\\bjson\\b/\n        },\n        responseFields: {\n          xml: "responseXML",\n          text: "responseText",\n          json: "responseJSON"\n        },\n        // Data converters\n        // Keys separate source (or catchall "*") and destination types with a single space\n        converters: {\n          // Convert anything to text\n          "* text": String,\n          // Text to html (true = no transformation)\n          "text html": true,\n          // Evaluate text as a json expression\n          "text json": JSON.parse,\n          // Parse text as xml\n          "text xml": jQuery2.parseXML\n        },\n        // For options that shouldn\'t be deep extended:\n        // you can add your own custom options here if\n        // and when you create one that shouldn\'t be\n        // deep extended (see ajaxExtend)\n        flatOptions: {\n          url: true,\n          context: true\n        }\n      },\n      // Creates a full fledged settings object into target\n      // with both ajaxSettings and settings fields.\n      // If target is omitted, writes into ajaxSettings.\n      ajaxSetup: function(target, settings) {\n        return settings ? (\n          // Building a settings object\n          ajaxExtend(ajaxExtend(target, jQuery2.ajaxSettings), settings)\n        ) : (\n          // Extending ajaxSettings\n          ajaxExtend(jQuery2.ajaxSettings, target)\n        );\n      },\n      ajaxPrefilter: addToPrefiltersOrTransports(prefilters),\n      ajaxTransport: addToPrefiltersOrTransports(transports),\n      // Main method\n      ajax: function(url, options) {\n        if (typeof url === "object") {\n          options = url;\n          url = void 0;\n        }\n        options = options || {};\n        var transport, cacheURL, responseHeadersString, responseHeaders, timeoutTimer, urlAnchor, completed2, fireGlobals, i2, uncached, s = jQuery2.ajaxSetup({}, options), callbackContext = s.context || s, globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery2(callbackContext) : jQuery2.event, deferred = jQuery2.Deferred(), completeDeferred = jQuery2.Callbacks("once memory"), statusCode = s.statusCode || {}, requestHeaders = {}, requestHeadersNames = {}, strAbort = "canceled", jqXHR = {\n          readyState: 0,\n          // Builds headers hashtable if needed\n          getResponseHeader: function(key) {\n            var match;\n            if (completed2) {\n              if (!responseHeaders) {\n                responseHeaders = {};\n                while (match = rheaders.exec(responseHeadersString)) {\n                  responseHeaders[match[1].toLowerCase() + " "] = (responseHeaders[match[1].toLowerCase() + " "] || []).concat(match[2]);\n                }\n              }\n              match = responseHeaders[key.toLowerCase() + " "];\n            }\n            return match == null ? null : match.join(", ");\n          },\n          // Raw string\n          getAllResponseHeaders: function() {\n            return completed2 ? responseHeadersString : null;\n          },\n          // Caches the header\n          setRequestHeader: function(name, value) {\n            if (completed2 == null) {\n              name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;\n              requestHeaders[name] = value;\n            }\n            return this;\n          },\n          // Overrides response content-type header\n          overrideMimeType: function(type) {\n            if (completed2 == null) {\n              s.mimeType = type;\n            }\n            return this;\n          },\n          // Status-dependent callbacks\n          statusCode: function(map) {\n            var code;\n            if (map) {\n              if (completed2) {\n                jqXHR.always(map[jqXHR.status]);\n              } else {\n                for (code in map) {\n                  statusCode[code] = [statusCode[code], map[code]];\n                }\n              }\n            }\n            return this;\n          },\n          // Cancel the request\n          abort: function(statusText) {\n            var finalText = statusText || strAbort;\n            if (transport) {\n              transport.abort(finalText);\n            }\n            done2(0, finalText);\n            return this;\n          }\n        };\n        deferred.promise(jqXHR);\n        s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//");\n        s.type = options.method || options.type || s.method || s.type;\n        s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""];\n        if (s.crossDomain == null) {\n          urlAnchor = document$1.createElement("a");\n          try {\n            urlAnchor.href = s.url;\n            urlAnchor.href = urlAnchor.href;\n            s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;\n          } catch (e) {\n            s.crossDomain = true;\n          }\n        }\n        inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);\n        if (s.data && s.processData && typeof s.data !== "string") {\n          s.data = jQuery2.param(s.data, s.traditional);\n        }\n        if (completed2) {\n          return jqXHR;\n        }\n        fireGlobals = jQuery2.event && s.global;\n        if (fireGlobals && jQuery2.active++ === 0) {\n          jQuery2.event.trigger("ajaxStart");\n        }\n        s.type = s.type.toUpperCase();\n        s.hasContent = !rnoContent.test(s.type);\n        cacheURL = s.url.replace(rhash, "");\n        if (!s.hasContent) {\n          uncached = s.url.slice(cacheURL.length);\n          if (s.data && (s.processData || typeof s.data === "string")) {\n            cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;\n            delete s.data;\n          }\n          if (s.cache === false) {\n            cacheURL = cacheURL.replace(rantiCache, "$1");\n            uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce.guid++ + uncached;\n          }\n          s.url = cacheURL + uncached;\n        } else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {\n          s.data = s.data.replace(r20, "+");\n        }\n        if (s.ifModified) {\n          if (jQuery2.lastModified[cacheURL]) {\n            jqXHR.setRequestHeader("If-Modified-Since", jQuery2.lastModified[cacheURL]);\n          }\n          if (jQuery2.etag[cacheURL]) {\n            jqXHR.setRequestHeader("If-None-Match", jQuery2.etag[cacheURL]);\n          }\n        }\n        if (s.data && s.hasContent && s.contentType !== false || options.contentType) {\n          jqXHR.setRequestHeader("Content-Type", s.contentType);\n        }\n        jqXHR.setRequestHeader(\n          "Accept",\n          s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]\n        );\n        for (i2 in s.headers) {\n          jqXHR.setRequestHeader(i2, s.headers[i2]);\n        }\n        if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed2)) {\n          return jqXHR.abort();\n        }\n        strAbort = "abort";\n        completeDeferred.add(s.complete);\n        jqXHR.done(s.success);\n        jqXHR.fail(s.error);\n        transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);\n        if (!transport) {\n          done2(-1, "No Transport");\n        } else {\n          jqXHR.readyState = 1;\n          if (fireGlobals) {\n            globalEventContext.trigger("ajaxSend", [jqXHR, s]);\n          }\n          if (completed2) {\n            return jqXHR;\n          }\n          if (s.async && s.timeout > 0) {\n            timeoutTimer = window2.setTimeout(function() {\n              jqXHR.abort("timeout");\n            }, s.timeout);\n          }\n          try {\n            completed2 = false;\n            transport.send(requestHeaders, done2);\n          } catch (e) {\n            if (completed2) {\n              throw e;\n            }\n            done2(-1, e);\n          }\n        }\n        function done2(status, nativeStatusText, responses, headers) {\n          var isSuccess, success, error, response, modified, statusText = nativeStatusText;\n          if (completed2) {\n            return;\n          }\n          completed2 = true;\n          if (timeoutTimer) {\n            window2.clearTimeout(timeoutTimer);\n          }\n          transport = void 0;\n          responseHeadersString = headers || "";\n          jqXHR.readyState = status > 0 ? 4 : 0;\n          isSuccess = status >= 200 && status < 300 || status === 304;\n          if (responses) {\n            response = ajaxHandleResponses(s, jqXHR, responses);\n          }\n          if (!isSuccess && jQuery2.inArray("script", s.dataTypes) > -1 && jQuery2.inArray("json", s.dataTypes) < 0) {\n            s.converters["text script"] = function() {\n            };\n          }\n          response = ajaxConvert(s, response, jqXHR, isSuccess);\n          if (isSuccess) {\n            if (s.ifModified) {\n              modified = jqXHR.getResponseHeader("Last-Modified");\n              if (modified) {\n                jQuery2.lastModified[cacheURL] = modified;\n              }\n              modified = jqXHR.getResponseHeader("etag");\n              if (modified) {\n                jQuery2.etag[cacheURL] = modified;\n              }\n            }\n            if (status === 204 || s.type === "HEAD") {\n              statusText = "nocontent";\n            } else if (status === 304) {\n              statusText = "notmodified";\n            } else {\n              statusText = response.state;\n              success = response.data;\n              error = response.error;\n              isSuccess = !error;\n            }\n          } else {\n            error = statusText;\n            if (status || !statusText) {\n              statusText = "error";\n              if (status < 0) {\n                status = 0;\n              }\n            }\n          }\n          jqXHR.status = status;\n          jqXHR.statusText = (nativeStatusText || statusText) + "";\n          if (isSuccess) {\n            deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);\n          } else {\n            deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);\n          }\n          jqXHR.statusCode(statusCode);\n          statusCode = void 0;\n          if (fireGlobals) {\n            globalEventContext.trigger(\n              isSuccess ? "ajaxSuccess" : "ajaxError",\n              [jqXHR, s, isSuccess ? success : error]\n            );\n          }\n          completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);\n          if (fireGlobals) {\n            globalEventContext.trigger("ajaxComplete", [jqXHR, s]);\n            if (!--jQuery2.active) {\n              jQuery2.event.trigger("ajaxStop");\n            }\n          }\n        }\n        return jqXHR;\n      },\n      getJSON: function(url, data, callback) {\n        return jQuery2.get(url, data, callback, "json");\n      },\n      getScript: function(url, callback) {\n        return jQuery2.get(url, void 0, callback, "script");\n      }\n    });\n    jQuery2.each(["get", "post"], function(_i, method) {\n      jQuery2[method] = function(url, data, callback, type) {\n        if (typeof data === "function" || data === null) {\n          type = type || callback;\n          callback = data;\n          data = void 0;\n        }\n        return jQuery2.ajax(jQuery2.extend({\n          url,\n          type: method,\n          dataType: type,\n          data,\n          success: callback\n        }, jQuery2.isPlainObject(url) && url));\n      };\n    });\n    jQuery2.ajaxPrefilter(function(s) {\n      var i2;\n      for (i2 in s.headers) {\n        if (i2.toLowerCase() === "content-type") {\n          s.contentType = s.headers[i2] || "";\n        }\n      }\n    });\n    jQuery2._evalUrl = function(url, options, doc) {\n      return jQuery2.ajax({\n        url,\n        // Make this explicit, since user can override this through ajaxSetup (trac-11264)\n        type: "GET",\n        dataType: "script",\n        cache: true,\n        async: false,\n        global: false,\n        scriptAttrs: options.crossOrigin ? { "crossOrigin": options.crossOrigin } : void 0,\n        // Only evaluate the response if it is successful (gh-4126)\n        // dataFilter is not invoked for failure responses, so using it instead\n        // of the default converter is kludgy but it works.\n        converters: {\n          "text script": function() {\n          }\n        },\n        dataFilter: function(response) {\n          jQuery2.globalEval(response, options, doc);\n        }\n      });\n    };\n    jQuery2.fn.extend({\n      wrapAll: function(html) {\n        var wrap;\n        if (this[0]) {\n          if (typeof html === "function") {\n            html = html.call(this[0]);\n          }\n          wrap = jQuery2(html, this[0].ownerDocument).eq(0).clone(true);\n          if (this[0].parentNode) {\n            wrap.insertBefore(this[0]);\n          }\n          wrap.map(function() {\n            var elem = this;\n            while (elem.firstElementChild) {\n              elem = elem.firstElementChild;\n            }\n            return elem;\n          }).append(this);\n        }\n        return this;\n      },\n      wrapInner: function(html) {\n        if (typeof html === "function") {\n          return this.each(function(i2) {\n            jQuery2(this).wrapInner(html.call(this, i2));\n          });\n        }\n        return this.each(function() {\n          var self = jQuery2(this), contents = self.contents();\n          if (contents.length) {\n            contents.wrapAll(html);\n          } else {\n            self.append(html);\n          }\n        });\n      },\n      wrap: function(html) {\n        var htmlIsFunction = typeof html === "function";\n        return this.each(function(i2) {\n          jQuery2(this).wrapAll(htmlIsFunction ? html.call(this, i2) : html);\n        });\n      },\n      unwrap: function(selector) {\n        this.parent(selector).not("body").each(function() {\n          jQuery2(this).replaceWith(this.childNodes);\n        });\n        return this;\n      }\n    });\n    jQuery2.expr.pseudos.hidden = function(elem) {\n      return !jQuery2.expr.pseudos.visible(elem);\n    };\n    jQuery2.expr.pseudos.visible = function(elem) {\n      return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);\n    };\n    jQuery2.ajaxSettings.xhr = function() {\n      return new window2.XMLHttpRequest();\n    };\n    var xhrSuccessStatus = {\n      // File protocol always yields status code 0, assume 200\n      0: 200\n    };\n    jQuery2.ajaxTransport(function(options) {\n      var callback;\n      return {\n        send: function(headers, complete) {\n          var i2, xhr = options.xhr();\n          xhr.open(\n            options.type,\n            options.url,\n            options.async,\n            options.username,\n            options.password\n          );\n          if (options.xhrFields) {\n            for (i2 in options.xhrFields) {\n              xhr[i2] = options.xhrFields[i2];\n            }\n          }\n          if (options.mimeType && xhr.overrideMimeType) {\n            xhr.overrideMimeType(options.mimeType);\n          }\n          if (!options.crossDomain && !headers["X-Requested-With"]) {\n            headers["X-Requested-With"] = "XMLHttpRequest";\n          }\n          for (i2 in headers) {\n            xhr.setRequestHeader(i2, headers[i2]);\n          }\n          callback = function(type) {\n            return function() {\n              if (callback) {\n                callback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = null;\n                if (type === "abort") {\n                  xhr.abort();\n                } else if (type === "error") {\n                  complete(\n                    // File: protocol always yields status 0; see trac-8605, trac-14207\n                    xhr.status,\n                    xhr.statusText\n                  );\n                } else {\n                  complete(\n                    xhrSuccessStatus[xhr.status] || xhr.status,\n                    xhr.statusText,\n                    // For XHR2 non-text, let the caller handle it (gh-2498)\n                    (xhr.responseType || "text") === "text" ? { text: xhr.responseText } : { binary: xhr.response },\n                    xhr.getAllResponseHeaders()\n                  );\n                }\n              }\n            };\n          };\n          xhr.onload = callback();\n          xhr.onabort = xhr.onerror = xhr.ontimeout = callback("error");\n          callback = callback("abort");\n          try {\n            xhr.send(options.hasContent && options.data || null);\n          } catch (e) {\n            if (callback) {\n              throw e;\n            }\n          }\n        },\n        abort: function() {\n          if (callback) {\n            callback();\n          }\n        }\n      };\n    });\n    function canUseScriptTag(s) {\n      return s.scriptAttrs || !s.headers && (s.crossDomain || // When dealing with JSONP (`s.dataTypes` include "json" then)\n      // don\'t use a script tag so that error responses still may have\n      // `responseJSON` set. Continue using a script tag for JSONP requests that:\n      //   * are cross-domain as AJAX requests won\'t work without a CORS setup\n      //   * have `scriptAttrs` set as that\'s a script-only functionality\n      // Note that this means JSONP requests violate strict CSP script-src settings.\n      // A proper solution is to migrate from using JSONP to a CORS setup.\n      s.async && jQuery2.inArray("json", s.dataTypes) < 0);\n    }\n    jQuery2.ajaxSetup({\n      accepts: {\n        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"\n      },\n      converters: {\n        "text script": function(text) {\n          jQuery2.globalEval(text);\n          return text;\n        }\n      }\n    });\n    jQuery2.ajaxPrefilter("script", function(s) {\n      if (s.cache === void 0) {\n        s.cache = false;\n      }\n      if (canUseScriptTag(s)) {\n        s.type = "GET";\n      }\n    });\n    jQuery2.ajaxTransport("script", function(s) {\n      if (canUseScriptTag(s)) {\n        var script, callback;\n        return {\n          send: function(_, complete) {\n            script = jQuery2("<script>").attr(s.scriptAttrs || {}).prop({ charset: s.scriptCharset, src: s.url }).on("load error", callback = function(evt) {\n              script.remove();\n              callback = null;\n              if (evt) {\n                complete(evt.type === "error" ? 404 : 200, evt.type);\n              }\n            });\n            document$1.head.appendChild(script[0]);\n          },\n          abort: function() {\n            if (callback) {\n              callback();\n            }\n          }\n        };\n      }\n    });\n    var oldCallbacks = [], rjsonp = /(=)\\?(?=&|$)|\\?\\?/;\n    jQuery2.ajaxSetup({\n      jsonp: "callback",\n      jsonpCallback: function() {\n        var callback = oldCallbacks.pop() || jQuery2.expando + "_" + nonce.guid++;\n        this[callback] = true;\n        return callback;\n      }\n    });\n    jQuery2.ajaxPrefilter("jsonp", function(s, originalSettings, jqXHR) {\n      var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");\n      callbackName = s.jsonpCallback = typeof s.jsonpCallback === "function" ? s.jsonpCallback() : s.jsonpCallback;\n      if (jsonProp) {\n        s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);\n      } else if (s.jsonp !== false) {\n        s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;\n      }\n      s.converters["script json"] = function() {\n        if (!responseContainer) {\n          jQuery2.error(callbackName + " was not called");\n        }\n        return responseContainer[0];\n      };\n      s.dataTypes[0] = "json";\n      overwritten = window2[callbackName];\n      window2[callbackName] = function() {\n        responseContainer = arguments;\n      };\n      jqXHR.always(function() {\n        if (overwritten === void 0) {\n          jQuery2(window2).removeProp(callbackName);\n        } else {\n          window2[callbackName] = overwritten;\n        }\n        if (s[callbackName]) {\n          s.jsonpCallback = originalSettings.jsonpCallback;\n          oldCallbacks.push(callbackName);\n        }\n        if (responseContainer && typeof overwritten === "function") {\n          overwritten(responseContainer[0]);\n        }\n        responseContainer = overwritten = void 0;\n      });\n      return "script";\n    });\n    jQuery2.ajaxPrefilter(function(s, origOptions) {\n      if (typeof s.data !== "string" && !jQuery2.isPlainObject(s.data) && !Array.isArray(s.data) && // Don\'t disable data processing if explicitly set by the user.\n      !("processData" in origOptions)) {\n        s.processData = false;\n      }\n      if (s.data instanceof window2.FormData) {\n        s.contentType = false;\n      }\n    });\n    jQuery2.parseHTML = function(data, context, keepScripts) {\n      if (typeof data !== "string" && !isObviousHtml(data + "")) {\n        return [];\n      }\n      if (typeof context === "boolean") {\n        keepScripts = context;\n        context = false;\n      }\n      var parsed, scripts;\n      if (!context) {\n        context = new window2.DOMParser().parseFromString("", "text/html");\n      }\n      parsed = rsingleTag.exec(data);\n      scripts = !keepScripts && [];\n      if (parsed) {\n        return [context.createElement(parsed[1])];\n      }\n      parsed = buildFragment([data], context, scripts);\n      if (scripts && scripts.length) {\n        jQuery2(scripts).remove();\n      }\n      return jQuery2.merge([], parsed.childNodes);\n    };\n    jQuery2.fn.load = function(url, params, callback) {\n      var selector, type, response, self = this, off = url.indexOf(" ");\n      if (off > -1) {\n        selector = stripAndCollapse(url.slice(off));\n        url = url.slice(0, off);\n      }\n      if (typeof params === "function") {\n        callback = params;\n        params = void 0;\n      } else if (params && typeof params === "object") {\n        type = "POST";\n      }\n      if (self.length > 0) {\n        jQuery2.ajax({\n          url,\n          // If "type" variable is undefined, then "GET" method will be used.\n          // Make value of this field explicit since\n          // user can override it through ajaxSetup method\n          type: type || "GET",\n          dataType: "html",\n          data: params\n        }).done(function(responseText) {\n          response = arguments;\n          self.html(selector ? (\n            // If a selector was specified, locate the right elements in a dummy div\n            // Exclude scripts to avoid IE \'Permission Denied\' errors\n            jQuery2("<div>").append(jQuery2.parseHTML(responseText)).find(selector)\n          ) : (\n            // Otherwise use the full result\n            responseText\n          ));\n        }).always(callback && function(jqXHR, status) {\n          self.each(function() {\n            callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);\n          });\n        });\n      }\n      return this;\n    };\n    jQuery2.expr.pseudos.animated = function(elem) {\n      return jQuery2.grep(jQuery2.timers, function(fn) {\n        return elem === fn.elem;\n      }).length;\n    };\n    jQuery2.offset = {\n      setOffset: function(elem, options, i2) {\n        var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery2.css(elem, "position"), curElem = jQuery2(elem), props = {};\n        if (position === "static") {\n          elem.style.position = "relative";\n        }\n        curOffset = curElem.offset();\n        curCSSTop = jQuery2.css(elem, "top");\n        curCSSLeft = jQuery2.css(elem, "left");\n        calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;\n        if (calculatePosition) {\n          curPosition = curElem.position();\n          curTop = curPosition.top;\n          curLeft = curPosition.left;\n        } else {\n          curTop = parseFloat(curCSSTop) || 0;\n          curLeft = parseFloat(curCSSLeft) || 0;\n        }\n        if (typeof options === "function") {\n          options = options.call(elem, i2, jQuery2.extend({}, curOffset));\n        }\n        if (options.top != null) {\n          props.top = options.top - curOffset.top + curTop;\n        }\n        if (options.left != null) {\n          props.left = options.left - curOffset.left + curLeft;\n        }\n        if ("using" in options) {\n          options.using.call(elem, props);\n        } else {\n          curElem.css(props);\n        }\n      }\n    };\n    jQuery2.fn.extend({\n      // offset() relates an element\'s border box to the document origin\n      offset: function(options) {\n        if (arguments.length) {\n          return options === void 0 ? this : this.each(function(i2) {\n            jQuery2.offset.setOffset(this, options, i2);\n          });\n        }\n        var rect, win, elem = this[0];\n        if (!elem) {\n          return;\n        }\n        if (!elem.getClientRects().length) {\n          return { top: 0, left: 0 };\n        }\n        rect = elem.getBoundingClientRect();\n        win = elem.ownerDocument.defaultView;\n        return {\n          top: rect.top + win.pageYOffset,\n          left: rect.left + win.pageXOffset\n        };\n      },\n      // position() relates an element\'s margin box to its offset parent\'s padding box\n      // This corresponds to the behavior of CSS absolute positioning\n      position: function() {\n        if (!this[0]) {\n          return;\n        }\n        var offsetParent, offset, doc, elem = this[0], parentOffset = { top: 0, left: 0 };\n        if (jQuery2.css(elem, "position") === "fixed") {\n          offset = elem.getBoundingClientRect();\n        } else {\n          offset = this.offset();\n          doc = elem.ownerDocument;\n          offsetParent = elem.offsetParent || doc.documentElement;\n          while (offsetParent && offsetParent !== doc.documentElement && jQuery2.css(offsetParent, "position") === "static") {\n            offsetParent = offsetParent.offsetParent || doc.documentElement;\n          }\n          if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 && jQuery2.css(offsetParent, "position") !== "static") {\n            parentOffset = jQuery2(offsetParent).offset();\n            parentOffset.top += jQuery2.css(offsetParent, "borderTopWidth", true);\n            parentOffset.left += jQuery2.css(offsetParent, "borderLeftWidth", true);\n          }\n        }\n        return {\n          top: offset.top - parentOffset.top - jQuery2.css(elem, "marginTop", true),\n          left: offset.left - parentOffset.left - jQuery2.css(elem, "marginLeft", true)\n        };\n      },\n      // This method will return documentElement in the following cases:\n      // 1) For the element inside the iframe without offsetParent, this method will return\n      //    documentElement of the parent window\n      // 2) For the hidden or detached element\n      // 3) For body or html element, i.e. in case of the html node - it will return itself\n      //\n      // but those exceptions were never presented as a real life use-cases\n      // and might be considered as more preferable results.\n      //\n      // This logic, however, is not guaranteed and can change at any point in the future\n      offsetParent: function() {\n        return this.map(function() {\n          var offsetParent = this.offsetParent;\n          while (offsetParent && jQuery2.css(offsetParent, "position") === "static") {\n            offsetParent = offsetParent.offsetParent;\n          }\n          return offsetParent || documentElement$1;\n        });\n      }\n    });\n    jQuery2.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(method, prop) {\n      var top = "pageYOffset" === prop;\n      jQuery2.fn[method] = function(val) {\n        return access(this, function(elem, method2, val2) {\n          var win;\n          if (isWindow(elem)) {\n            win = elem;\n          } else if (elem.nodeType === 9) {\n            win = elem.defaultView;\n          }\n          if (val2 === void 0) {\n            return win ? win[prop] : elem[method2];\n          }\n          if (win) {\n            win.scrollTo(\n              !top ? val2 : win.pageXOffset,\n              top ? val2 : win.pageYOffset\n            );\n          } else {\n            elem[method2] = val2;\n          }\n        }, method, val, arguments.length);\n      };\n    });\n    jQuery2.each({ Height: "height", Width: "width" }, function(name, type) {\n      jQuery2.each({\n        padding: "inner" + name,\n        content: type,\n        "": "outer" + name\n      }, function(defaultExtra, funcName) {\n        jQuery2.fn[funcName] = function(margin, value) {\n          var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"), extra = defaultExtra || (margin === true || value === true ? "margin" : "border");\n          return access(this, function(elem, type2, value2) {\n            var doc;\n            if (isWindow(elem)) {\n              return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];\n            }\n            if (elem.nodeType === 9) {\n              doc = elem.documentElement;\n              return Math.max(\n                elem.body["scroll" + name],\n                doc["scroll" + name],\n                elem.body["offset" + name],\n                doc["offset" + name],\n                doc["client" + name]\n              );\n            }\n            return value2 === void 0 ? (\n              // Get width or height on the element, requesting but not forcing parseFloat\n              jQuery2.css(elem, type2, extra)\n            ) : (\n              // Set width or height on the element\n              jQuery2.style(elem, type2, value2, extra)\n            );\n          }, type, chainable ? margin : void 0, chainable);\n        };\n      });\n    });\n    jQuery2.each([\n      "ajaxStart",\n      "ajaxStop",\n      "ajaxComplete",\n      "ajaxError",\n      "ajaxSuccess",\n      "ajaxSend"\n    ], function(_i, type) {\n      jQuery2.fn[type] = function(fn) {\n        return this.on(type, fn);\n      };\n    });\n    jQuery2.fn.extend({\n      bind: function(types, data, fn) {\n        return this.on(types, null, data, fn);\n      },\n      unbind: function(types, fn) {\n        return this.off(types, null, fn);\n      },\n      delegate: function(selector, types, data, fn) {\n        return this.on(types, selector, data, fn);\n      },\n      undelegate: function(selector, types, fn) {\n        return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);\n      },\n      hover: function(fnOver, fnOut) {\n        return this.on("mouseenter", fnOver).on("mouseleave", fnOut || fnOver);\n      }\n    });\n    jQuery2.each(\n      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),\n      function(_i, name) {\n        jQuery2.fn[name] = function(data, fn) {\n          return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);\n        };\n      }\n    );\n    jQuery2.proxy = function(fn, context) {\n      var tmp, args, proxy;\n      if (typeof context === "string") {\n        tmp = fn[context];\n        context = fn;\n        fn = tmp;\n      }\n      if (typeof fn !== "function") {\n        return void 0;\n      }\n      args = slice.call(arguments, 2);\n      proxy = function() {\n        return fn.apply(context || this, args.concat(slice.call(arguments)));\n      };\n      proxy.guid = fn.guid = fn.guid || jQuery2.guid++;\n      return proxy;\n    };\n    jQuery2.holdReady = function(hold) {\n      if (hold) {\n        jQuery2.readyWait++;\n      } else {\n        jQuery2.ready(true);\n      }\n    };\n    jQuery2.expr[":"] = jQuery2.expr.filters = jQuery2.expr.pseudos;\n    if (typeof define === "function" && define.amd) {\n      define("jquery", [], function() {\n        return jQuery2;\n      });\n    }\n    var _jQuery = window2.jQuery, _$ = window2.$;\n    jQuery2.noConflict = function(deep) {\n      if (window2.$ === jQuery2) {\n        window2.$ = _$;\n      }\n      if (deep && window2.jQuery === jQuery2) {\n        window2.jQuery = _jQuery;\n      }\n      return jQuery2;\n    };\n    if (typeof noGlobal === "undefined") {\n      window2.jQuery = window2.$ = jQuery2;\n    }\n    return jQuery2;\n  }\n  var jQuery, jquery_module_default;\n  var init_jquery_module = __esm({\n    "node_modules/jquery/dist-module/jquery.module.js"() {\n      jQuery = jQueryFactory(window, true);\n      jquery_module_default = jQuery;\n    }\n  });\n\n  // node_modules/matter-js/build/matter.js\n  var require_matter = __commonJS({\n    "node_modules/matter-js/build/matter.js"(exports, module) {\n      (function webpackUniversalModuleDefinition(root, factory) {\n        if (typeof exports === "object" && typeof module === "object")\n          module.exports = factory();\n        else if (typeof define === "function" && define.amd)\n          define("Matter", [], factory);\n        else if (typeof exports === "object")\n          exports["Matter"] = factory();\n        else\n          root["Matter"] = factory();\n      })(exports, function() {\n        return (\n          /******/\n          (function(modules) {\n            var installedModules = {};\n            function __webpack_require__(moduleId) {\n              if (installedModules[moduleId]) {\n                return installedModules[moduleId].exports;\n              }\n              var module2 = installedModules[moduleId] = {\n                /******/\n                i: moduleId,\n                /******/\n                l: false,\n                /******/\n                exports: {}\n                /******/\n              };\n              modules[moduleId].call(module2.exports, module2, module2.exports, __webpack_require__);\n              module2.l = true;\n              return module2.exports;\n            }\n            __webpack_require__.m = modules;\n            __webpack_require__.c = installedModules;\n            __webpack_require__.d = function(exports2, name, getter) {\n              if (!__webpack_require__.o(exports2, name)) {\n                Object.defineProperty(exports2, name, { enumerable: true, get: getter });\n              }\n            };\n            __webpack_require__.r = function(exports2) {\n              if (typeof Symbol !== "undefined" && Symbol.toStringTag) {\n                Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });\n              }\n              Object.defineProperty(exports2, "__esModule", { value: true });\n            };\n            __webpack_require__.t = function(value, mode) {\n              if (mode & 1) value = __webpack_require__(value);\n              if (mode & 8) return value;\n              if (mode & 4 && typeof value === "object" && value && value.__esModule) return value;\n              var ns = /* @__PURE__ */ Object.create(null);\n              __webpack_require__.r(ns);\n              Object.defineProperty(ns, "default", { enumerable: true, value });\n              if (mode & 2 && typeof value != "string") for (var key in value) __webpack_require__.d(ns, key, function(key2) {\n                return value[key2];\n              }.bind(null, key));\n              return ns;\n            };\n            __webpack_require__.n = function(module2) {\n              var getter = module2 && module2.__esModule ? (\n                /******/\n                function getDefault() {\n                  return module2["default"];\n                }\n              ) : (\n                /******/\n                function getModuleExports() {\n                  return module2;\n                }\n              );\n              __webpack_require__.d(getter, "a", getter);\n              return getter;\n            };\n            __webpack_require__.o = function(object, property) {\n              return Object.prototype.hasOwnProperty.call(object, property);\n            };\n            __webpack_require__.p = "";\n            return __webpack_require__(__webpack_require__.s = 20);\n          })([\n            /* 0 */\n            /***/\n            (function(module2, exports2) {\n              var Common = {};\n              module2.exports = Common;\n              (function() {\n                Common._baseDelta = 1e3 / 60;\n                Common._nextId = 0;\n                Common._seed = 0;\n                Common._nowStartTime = +/* @__PURE__ */ new Date();\n                Common._warnedOnce = {};\n                Common._decomp = null;\n                Common.extend = function(obj, deep) {\n                  var argsStart, args, deepClone;\n                  if (typeof deep === "boolean") {\n                    argsStart = 2;\n                    deepClone = deep;\n                  } else {\n                    argsStart = 1;\n                    deepClone = true;\n                  }\n                  for (var i = argsStart; i < arguments.length; i++) {\n                    var source = arguments[i];\n                    if (source) {\n                      for (var prop in source) {\n                        if (deepClone && source[prop] && source[prop].constructor === Object) {\n                          if (!obj[prop] || obj[prop].constructor === Object) {\n                            obj[prop] = obj[prop] || {};\n                            Common.extend(obj[prop], deepClone, source[prop]);\n                          } else {\n                            obj[prop] = source[prop];\n                          }\n                        } else {\n                          obj[prop] = source[prop];\n                        }\n                      }\n                    }\n                  }\n                  return obj;\n                };\n                Common.clone = function(obj, deep) {\n                  return Common.extend({}, deep, obj);\n                };\n                Common.keys = function(obj) {\n                  if (Object.keys)\n                    return Object.keys(obj);\n                  var keys = [];\n                  for (var key in obj)\n                    keys.push(key);\n                  return keys;\n                };\n                Common.values = function(obj) {\n                  var values = [];\n                  if (Object.keys) {\n                    var keys = Object.keys(obj);\n                    for (var i = 0; i < keys.length; i++) {\n                      values.push(obj[keys[i]]);\n                    }\n                    return values;\n                  }\n                  for (var key in obj)\n                    values.push(obj[key]);\n                  return values;\n                };\n                Common.get = function(obj, path, begin, end) {\n                  path = path.split(".").slice(begin, end);\n                  for (var i = 0; i < path.length; i += 1) {\n                    obj = obj[path[i]];\n                  }\n                  return obj;\n                };\n                Common.set = function(obj, path, val, begin, end) {\n                  var parts = path.split(".").slice(begin, end);\n                  Common.get(obj, path, 0, -1)[parts[parts.length - 1]] = val;\n                  return val;\n                };\n                Common.shuffle = function(array) {\n                  for (var i = array.length - 1; i > 0; i--) {\n                    var j = Math.floor(Common.random() * (i + 1));\n                    var temp = array[i];\n                    array[i] = array[j];\n                    array[j] = temp;\n                  }\n                  return array;\n                };\n                Common.choose = function(choices) {\n                  return choices[Math.floor(Common.random() * choices.length)];\n                };\n                Common.isElement = function(obj) {\n                  if (typeof HTMLElement !== "undefined") {\n                    return obj instanceof HTMLElement;\n                  }\n                  return !!(obj && obj.nodeType && obj.nodeName);\n                };\n                Common.isArray = function(obj) {\n                  return Object.prototype.toString.call(obj) === "[object Array]";\n                };\n                Common.isFunction = function(obj) {\n                  return typeof obj === "function";\n                };\n                Common.isPlainObject = function(obj) {\n                  return typeof obj === "object" && obj.constructor === Object;\n                };\n                Common.isString = function(obj) {\n                  return toString.call(obj) === "[object String]";\n                };\n                Common.clamp = function(value, min, max) {\n                  if (value < min)\n                    return min;\n                  if (value > max)\n                    return max;\n                  return value;\n                };\n                Common.sign = function(value) {\n                  return value < 0 ? -1 : 1;\n                };\n                Common.now = function() {\n                  if (typeof window !== "undefined" && window.performance) {\n                    if (window.performance.now) {\n                      return window.performance.now();\n                    } else if (window.performance.webkitNow) {\n                      return window.performance.webkitNow();\n                    }\n                  }\n                  if (Date.now) {\n                    return Date.now();\n                  }\n                  return /* @__PURE__ */ new Date() - Common._nowStartTime;\n                };\n                Common.random = function(min, max) {\n                  min = typeof min !== "undefined" ? min : 0;\n                  max = typeof max !== "undefined" ? max : 1;\n                  return min + _seededRandom() * (max - min);\n                };\n                var _seededRandom = function() {\n                  Common._seed = (Common._seed * 9301 + 49297) % 233280;\n                  return Common._seed / 233280;\n                };\n                Common.colorToNumber = function(colorString) {\n                  colorString = colorString.replace("#", "");\n                  if (colorString.length == 3) {\n                    colorString = colorString.charAt(0) + colorString.charAt(0) + colorString.charAt(1) + colorString.charAt(1) + colorString.charAt(2) + colorString.charAt(2);\n                  }\n                  return parseInt(colorString, 16);\n                };\n                Common.logLevel = 1;\n                Common.log = function() {\n                  if (console && Common.logLevel > 0 && Common.logLevel <= 3) {\n                    console.log.apply(console, ["matter-js:"].concat(Array.prototype.slice.call(arguments)));\n                  }\n                };\n                Common.info = function() {\n                  if (console && Common.logLevel > 0 && Common.logLevel <= 2) {\n                    console.info.apply(console, ["matter-js:"].concat(Array.prototype.slice.call(arguments)));\n                  }\n                };\n                Common.warn = function() {\n                  if (console && Common.logLevel > 0 && Common.logLevel <= 3) {\n                    console.warn.apply(console, ["matter-js:"].concat(Array.prototype.slice.call(arguments)));\n                  }\n                };\n                Common.warnOnce = function() {\n                  var message = Array.prototype.slice.call(arguments).join(" ");\n                  if (!Common._warnedOnce[message]) {\n                    Common.warn(message);\n                    Common._warnedOnce[message] = true;\n                  }\n                };\n                Common.deprecated = function(obj, prop, warning) {\n                  obj[prop] = Common.chain(function() {\n                    Common.warnOnce("\\u{1F505} deprecated \\u{1F505}", warning);\n                  }, obj[prop]);\n                };\n                Common.nextId = function() {\n                  return Common._nextId++;\n                };\n                Common.indexOf = function(haystack, needle) {\n                  if (haystack.indexOf)\n                    return haystack.indexOf(needle);\n                  for (var i = 0; i < haystack.length; i++) {\n                    if (haystack[i] === needle)\n                      return i;\n                  }\n                  return -1;\n                };\n                Common.map = function(list, func) {\n                  if (list.map) {\n                    return list.map(func);\n                  }\n                  var mapped = [];\n                  for (var i = 0; i < list.length; i += 1) {\n                    mapped.push(func(list[i]));\n                  }\n                  return mapped;\n                };\n                Common.topologicalSort = function(graph) {\n                  var result = [], visited = [], temp = [];\n                  for (var node in graph) {\n                    if (!visited[node] && !temp[node]) {\n                      Common._topologicalSort(node, visited, temp, graph, result);\n                    }\n                  }\n                  return result;\n                };\n                Common._topologicalSort = function(node, visited, temp, graph, result) {\n                  var neighbors = graph[node] || [];\n                  temp[node] = true;\n                  for (var i = 0; i < neighbors.length; i += 1) {\n                    var neighbor = neighbors[i];\n                    if (temp[neighbor]) {\n                      continue;\n                    }\n                    if (!visited[neighbor]) {\n                      Common._topologicalSort(neighbor, visited, temp, graph, result);\n                    }\n                  }\n                  temp[node] = false;\n                  visited[node] = true;\n                  result.push(node);\n                };\n                Common.chain = function() {\n                  var funcs = [];\n                  for (var i = 0; i < arguments.length; i += 1) {\n                    var func = arguments[i];\n                    if (func._chained) {\n                      funcs.push.apply(funcs, func._chained);\n                    } else {\n                      funcs.push(func);\n                    }\n                  }\n                  var chain = function() {\n                    var lastResult, args = new Array(arguments.length);\n                    for (var i2 = 0, l = arguments.length; i2 < l; i2++) {\n                      args[i2] = arguments[i2];\n                    }\n                    for (i2 = 0; i2 < funcs.length; i2 += 1) {\n                      var result = funcs[i2].apply(lastResult, args);\n                      if (typeof result !== "undefined") {\n                        lastResult = result;\n                      }\n                    }\n                    return lastResult;\n                  };\n                  chain._chained = funcs;\n                  return chain;\n                };\n                Common.chainPathBefore = function(base, path, func) {\n                  return Common.set(base, path, Common.chain(\n                    func,\n                    Common.get(base, path)\n                  ));\n                };\n                Common.chainPathAfter = function(base, path, func) {\n                  return Common.set(base, path, Common.chain(\n                    Common.get(base, path),\n                    func\n                  ));\n                };\n                Common.setDecomp = function(decomp) {\n                  Common._decomp = decomp;\n                };\n                Common.getDecomp = function() {\n                  var decomp = Common._decomp;\n                  try {\n                    if (!decomp && typeof window !== "undefined") {\n                      decomp = window.decomp;\n                    }\n                    if (!decomp && typeof global !== "undefined") {\n                      decomp = global.decomp;\n                    }\n                  } catch (e) {\n                    decomp = null;\n                  }\n                  return decomp;\n                };\n              })();\n            }),\n            /* 1 */\n            /***/\n            (function(module2, exports2) {\n              var Bounds = {};\n              module2.exports = Bounds;\n              (function() {\n                Bounds.create = function(vertices) {\n                  var bounds = {\n                    min: { x: 0, y: 0 },\n                    max: { x: 0, y: 0 }\n                  };\n                  if (vertices)\n                    Bounds.update(bounds, vertices);\n                  return bounds;\n                };\n                Bounds.update = function(bounds, vertices, velocity) {\n                  bounds.min.x = Infinity;\n                  bounds.max.x = -Infinity;\n                  bounds.min.y = Infinity;\n                  bounds.max.y = -Infinity;\n                  for (var i = 0; i < vertices.length; i++) {\n                    var vertex = vertices[i];\n                    if (vertex.x > bounds.max.x) bounds.max.x = vertex.x;\n                    if (vertex.x < bounds.min.x) bounds.min.x = vertex.x;\n                    if (vertex.y > bounds.max.y) bounds.max.y = vertex.y;\n                    if (vertex.y < bounds.min.y) bounds.min.y = vertex.y;\n                  }\n                  if (velocity) {\n                    if (velocity.x > 0) {\n                      bounds.max.x += velocity.x;\n                    } else {\n                      bounds.min.x += velocity.x;\n                    }\n                    if (velocity.y > 0) {\n                      bounds.max.y += velocity.y;\n                    } else {\n                      bounds.min.y += velocity.y;\n                    }\n                  }\n                };\n                Bounds.contains = function(bounds, point) {\n                  return point.x >= bounds.min.x && point.x <= bounds.max.x && point.y >= bounds.min.y && point.y <= bounds.max.y;\n                };\n                Bounds.overlaps = function(boundsA, boundsB) {\n                  return boundsA.min.x <= boundsB.max.x && boundsA.max.x >= boundsB.min.x && boundsA.max.y >= boundsB.min.y && boundsA.min.y <= boundsB.max.y;\n                };\n                Bounds.translate = function(bounds, vector) {\n                  bounds.min.x += vector.x;\n                  bounds.max.x += vector.x;\n                  bounds.min.y += vector.y;\n                  bounds.max.y += vector.y;\n                };\n                Bounds.shift = function(bounds, position) {\n                  var deltaX = bounds.max.x - bounds.min.x, deltaY = bounds.max.y - bounds.min.y;\n                  bounds.min.x = position.x;\n                  bounds.max.x = position.x + deltaX;\n                  bounds.min.y = position.y;\n                  bounds.max.y = position.y + deltaY;\n                };\n              })();\n            }),\n            /* 2 */\n            /***/\n            (function(module2, exports2) {\n              var Vector = {};\n              module2.exports = Vector;\n              (function() {\n                Vector.create = function(x, y) {\n                  return { x: x || 0, y: y || 0 };\n                };\n                Vector.clone = function(vector) {\n                  return { x: vector.x, y: vector.y };\n                };\n                Vector.magnitude = function(vector) {\n                  return Math.sqrt(vector.x * vector.x + vector.y * vector.y);\n                };\n                Vector.magnitudeSquared = function(vector) {\n                  return vector.x * vector.x + vector.y * vector.y;\n                };\n                Vector.rotate = function(vector, angle, output) {\n                  var cos = Math.cos(angle), sin = Math.sin(angle);\n                  if (!output) output = {};\n                  var x = vector.x * cos - vector.y * sin;\n                  output.y = vector.x * sin + vector.y * cos;\n                  output.x = x;\n                  return output;\n                };\n                Vector.rotateAbout = function(vector, angle, point, output) {\n                  var cos = Math.cos(angle), sin = Math.sin(angle);\n                  if (!output) output = {};\n                  var x = point.x + ((vector.x - point.x) * cos - (vector.y - point.y) * sin);\n                  output.y = point.y + ((vector.x - point.x) * sin + (vector.y - point.y) * cos);\n                  output.x = x;\n                  return output;\n                };\n                Vector.normalise = function(vector) {\n                  var magnitude = Vector.magnitude(vector);\n                  if (magnitude === 0)\n                    return { x: 0, y: 0 };\n                  return { x: vector.x / magnitude, y: vector.y / magnitude };\n                };\n                Vector.dot = function(vectorA, vectorB) {\n                  return vectorA.x * vectorB.x + vectorA.y * vectorB.y;\n                };\n                Vector.cross = function(vectorA, vectorB) {\n                  return vectorA.x * vectorB.y - vectorA.y * vectorB.x;\n                };\n                Vector.cross3 = function(vectorA, vectorB, vectorC) {\n                  return (vectorB.x - vectorA.x) * (vectorC.y - vectorA.y) - (vectorB.y - vectorA.y) * (vectorC.x - vectorA.x);\n                };\n                Vector.add = function(vectorA, vectorB, output) {\n                  if (!output) output = {};\n                  output.x = vectorA.x + vectorB.x;\n                  output.y = vectorA.y + vectorB.y;\n                  return output;\n                };\n                Vector.sub = function(vectorA, vectorB, output) {\n                  if (!output) output = {};\n                  output.x = vectorA.x - vectorB.x;\n                  output.y = vectorA.y - vectorB.y;\n                  return output;\n                };\n                Vector.mult = function(vector, scalar) {\n                  return { x: vector.x * scalar, y: vector.y * scalar };\n                };\n                Vector.div = function(vector, scalar) {\n                  return { x: vector.x / scalar, y: vector.y / scalar };\n                };\n                Vector.perp = function(vector, negate) {\n                  negate = negate === true ? -1 : 1;\n                  return { x: negate * -vector.y, y: negate * vector.x };\n                };\n                Vector.neg = function(vector) {\n                  return { x: -vector.x, y: -vector.y };\n                };\n                Vector.angle = function(vectorA, vectorB) {\n                  return Math.atan2(vectorB.y - vectorA.y, vectorB.x - vectorA.x);\n                };\n                Vector._temp = [\n                  Vector.create(),\n                  Vector.create(),\n                  Vector.create(),\n                  Vector.create(),\n                  Vector.create(),\n                  Vector.create()\n                ];\n              })();\n            }),\n            /* 3 */\n            /***/\n            (function(module2, exports2, __webpack_require__) {\n              var Vertices = {};\n              module2.exports = Vertices;\n              var Vector = __webpack_require__(2);\n              var Common = __webpack_require__(0);\n              (function() {\n                Vertices.create = function(points, body) {\n                  var vertices = [];\n                  for (var i = 0; i < points.length; i++) {\n                    var point = points[i], vertex = {\n                      x: point.x,\n                      y: point.y,\n                      index: i,\n                      body,\n                      isInternal: false\n                    };\n                    vertices.push(vertex);\n                  }\n                  return vertices;\n                };\n                Vertices.fromPath = function(path, body) {\n                  var pathPattern = /L?\\s*([-\\d.e]+)[\\s,]*([-\\d.e]+)*/ig, points = [];\n                  path.replace(pathPattern, function(match, x, y) {\n                    points.push({ x: parseFloat(x), y: parseFloat(y) });\n                  });\n                  return Vertices.create(points, body);\n                };\n                Vertices.centre = function(vertices) {\n                  var area = Vertices.area(vertices, true), centre = { x: 0, y: 0 }, cross, temp, j;\n                  for (var i = 0; i < vertices.length; i++) {\n                    j = (i + 1) % vertices.length;\n                    cross = Vector.cross(vertices[i], vertices[j]);\n                    temp = Vector.mult(Vector.add(vertices[i], vertices[j]), cross);\n                    centre = Vector.add(centre, temp);\n                  }\n                  return Vector.div(centre, 6 * area);\n                };\n                Vertices.mean = function(vertices) {\n                  var average = { x: 0, y: 0 };\n                  for (var i = 0; i < vertices.length; i++) {\n                    average.x += vertices[i].x;\n                    average.y += vertices[i].y;\n                  }\n                  return Vector.div(average, vertices.length);\n                };\n                Vertices.area = function(vertices, signed) {\n                  var area = 0, j = vertices.length - 1;\n                  for (var i = 0; i < vertices.length; i++) {\n                    area += (vertices[j].x - vertices[i].x) * (vertices[j].y + vertices[i].y);\n                    j = i;\n                  }\n                  if (signed)\n                    return area / 2;\n                  return Math.abs(area) / 2;\n                };\n                Vertices.inertia = function(vertices, mass) {\n                  var numerator = 0, denominator = 0, v = vertices, cross, j;\n                  for (var n = 0; n < v.length; n++) {\n                    j = (n + 1) % v.length;\n                    cross = Math.abs(Vector.cross(v[j], v[n]));\n                    numerator += cross * (Vector.dot(v[j], v[j]) + Vector.dot(v[j], v[n]) + Vector.dot(v[n], v[n]));\n                    denominator += cross;\n                  }\n                  return mass / 6 * (numerator / denominator);\n                };\n                Vertices.translate = function(vertices, vector, scalar) {\n                  scalar = typeof scalar !== "undefined" ? scalar : 1;\n                  var verticesLength = vertices.length, translateX = vector.x * scalar, translateY = vector.y * scalar, i;\n                  for (i = 0; i < verticesLength; i++) {\n                    vertices[i].x += translateX;\n                    vertices[i].y += translateY;\n                  }\n                  return vertices;\n                };\n                Vertices.rotate = function(vertices, angle, point) {\n                  if (angle === 0)\n                    return;\n                  var cos = Math.cos(angle), sin = Math.sin(angle), pointX = point.x, pointY = point.y, verticesLength = vertices.length, vertex, dx, dy, i;\n                  for (i = 0; i < verticesLength; i++) {\n                    vertex = vertices[i];\n                    dx = vertex.x - pointX;\n                    dy = vertex.y - pointY;\n                    vertex.x = pointX + (dx * cos - dy * sin);\n                    vertex.y = pointY + (dx * sin + dy * cos);\n                  }\n                  return vertices;\n                };\n                Vertices.contains = function(vertices, point) {\n                  var pointX = point.x, pointY = point.y, verticesLength = vertices.length, vertex = vertices[verticesLength - 1], nextVertex;\n                  for (var i = 0; i < verticesLength; i++) {\n                    nextVertex = vertices[i];\n                    if ((pointX - vertex.x) * (nextVertex.y - vertex.y) + (pointY - vertex.y) * (vertex.x - nextVertex.x) > 0) {\n                      return false;\n                    }\n                    vertex = nextVertex;\n                  }\n                  return true;\n                };\n                Vertices.scale = function(vertices, scaleX, scaleY, point) {\n                  if (scaleX === 1 && scaleY === 1)\n                    return vertices;\n                  point = point || Vertices.centre(vertices);\n                  var vertex, delta;\n                  for (var i = 0; i < vertices.length; i++) {\n                    vertex = vertices[i];\n                    delta = Vector.sub(vertex, point);\n                    vertices[i].x = point.x + delta.x * scaleX;\n                    vertices[i].y = point.y + delta.y * scaleY;\n                  }\n                  return vertices;\n                };\n                Vertices.chamfer = function(vertices, radius, quality, qualityMin, qualityMax) {\n                  if (typeof radius === "number") {\n                    radius = [radius];\n                  } else {\n                    radius = radius || [8];\n                  }\n                  quality = typeof quality !== "undefined" ? quality : -1;\n                  qualityMin = qualityMin || 2;\n                  qualityMax = qualityMax || 14;\n                  var newVertices = [];\n                  for (var i = 0; i < vertices.length; i++) {\n                    var prevVertex = vertices[i - 1 >= 0 ? i - 1 : vertices.length - 1], vertex = vertices[i], nextVertex = vertices[(i + 1) % vertices.length], currentRadius = radius[i < radius.length ? i : radius.length - 1];\n                    if (currentRadius === 0) {\n                      newVertices.push(vertex);\n                      continue;\n                    }\n                    var prevNormal = Vector.normalise({\n                      x: vertex.y - prevVertex.y,\n                      y: prevVertex.x - vertex.x\n                    });\n                    var nextNormal = Vector.normalise({\n                      x: nextVertex.y - vertex.y,\n                      y: vertex.x - nextVertex.x\n                    });\n                    var diagonalRadius = Math.sqrt(2 * Math.pow(currentRadius, 2)), radiusVector = Vector.mult(Common.clone(prevNormal), currentRadius), midNormal = Vector.normalise(Vector.mult(Vector.add(prevNormal, nextNormal), 0.5)), scaledVertex = Vector.sub(vertex, Vector.mult(midNormal, diagonalRadius));\n                    var precision = quality;\n                    if (quality === -1) {\n                      precision = Math.pow(currentRadius, 0.32) * 1.75;\n                    }\n                    precision = Common.clamp(precision, qualityMin, qualityMax);\n                    if (precision % 2 === 1)\n                      precision += 1;\n                    var alpha = Math.acos(Vector.dot(prevNormal, nextNormal)), theta = alpha / precision;\n                    for (var j = 0; j < precision; j++) {\n                      newVertices.push(Vector.add(Vector.rotate(radiusVector, theta * j), scaledVertex));\n                    }\n                  }\n                  return newVertices;\n                };\n                Vertices.clockwiseSort = function(vertices) {\n                  var centre = Vertices.mean(vertices);\n                  vertices.sort(function(vertexA, vertexB) {\n                    return Vector.angle(centre, vertexA) - Vector.angle(centre, vertexB);\n                  });\n                  return vertices;\n                };\n                Vertices.isConvex = function(vertices) {\n                  var flag = 0, n = vertices.length, i, j, k, z;\n                  if (n < 3)\n                    return null;\n                  for (i = 0; i < n; i++) {\n                    j = (i + 1) % n;\n                    k = (i + 2) % n;\n                    z = (vertices[j].x - vertices[i].x) * (vertices[k].y - vertices[j].y);\n                    z -= (vertices[j].y - vertices[i].y) * (vertices[k].x - vertices[j].x);\n                    if (z < 0) {\n                      flag |= 1;\n                    } else if (z > 0) {\n                      flag |= 2;\n                    }\n                    if (flag === 3) {\n                      return false;\n                    }\n                  }\n                  if (flag !== 0) {\n                    return true;\n                  } else {\n                    return null;\n                  }\n                };\n                Vertices.hull = function(vertices) {\n                  var upper = [], lower = [], vertex, i;\n                  vertices = vertices.slice(0);\n                  vertices.sort(function(vertexA, vertexB) {\n                    var dx = vertexA.x - vertexB.x;\n                    return dx !== 0 ? dx : vertexA.y - vertexB.y;\n                  });\n                  for (i = 0; i < vertices.length; i += 1) {\n                    vertex = vertices[i];\n                    while (lower.length >= 2 && Vector.cross3(lower[lower.length - 2], lower[lower.length - 1], vertex) <= 0) {\n                      lower.pop();\n                    }\n                    lower.push(vertex);\n                  }\n                  for (i = vertices.length - 1; i >= 0; i -= 1) {\n                    vertex = vertices[i];\n                    while (upper.length >= 2 && Vector.cross3(upper[upper.length - 2], upper[upper.length - 1], vertex) <= 0) {\n                      upper.pop();\n                    }\n                    upper.push(vertex);\n                  }\n                  upper.pop();\n                  lower.pop();\n                  return upper.concat(lower);\n                };\n              })();\n            }),\n            /* 4 */\n            /***/\n            (function(module2, exports2, __webpack_require__) {\n              var Body = {};\n              module2.exports = Body;\n              var Vertices = __webpack_require__(3);\n              var Vector = __webpack_require__(2);\n              var Sleeping = __webpack_require__(7);\n              var Common = __webpack_require__(0);\n              var Bounds = __webpack_require__(1);\n              var Axes = __webpack_require__(11);\n              (function() {\n                Body._timeCorrection = true;\n                Body._inertiaScale = 4;\n                Body._nextCollidingGroupId = 1;\n                Body._nextNonCollidingGroupId = -1;\n                Body._nextCategory = 1;\n                Body._baseDelta = 1e3 / 60;\n                Body.create = function(options) {\n                  var defaults = {\n                    id: Common.nextId(),\n                    type: "body",\n                    label: "Body",\n                    parts: [],\n                    plugin: {},\n                    angle: 0,\n                    vertices: Vertices.fromPath("L 0 0 L 40 0 L 40 40 L 0 40"),\n                    position: { x: 0, y: 0 },\n                    force: { x: 0, y: 0 },\n                    torque: 0,\n                    positionImpulse: { x: 0, y: 0 },\n                    constraintImpulse: { x: 0, y: 0, angle: 0 },\n                    totalContacts: 0,\n                    speed: 0,\n                    angularSpeed: 0,\n                    velocity: { x: 0, y: 0 },\n                    angularVelocity: 0,\n                    isSensor: false,\n                    isStatic: false,\n                    isSleeping: false,\n                    motion: 0,\n                    sleepThreshold: 60,\n                    density: 1e-3,\n                    restitution: 0,\n                    friction: 0.1,\n                    frictionStatic: 0.5,\n                    frictionAir: 0.01,\n                    collisionFilter: {\n                      category: 1,\n                      mask: 4294967295,\n                      group: 0\n                    },\n                    slop: 0.05,\n                    timeScale: 1,\n                    render: {\n                      visible: true,\n                      opacity: 1,\n                      strokeStyle: null,\n                      fillStyle: null,\n                      lineWidth: null,\n                      sprite: {\n                        xScale: 1,\n                        yScale: 1,\n                        xOffset: 0,\n                        yOffset: 0\n                      }\n                    },\n                    events: null,\n                    bounds: null,\n                    chamfer: null,\n                    circleRadius: 0,\n                    positionPrev: null,\n                    anglePrev: 0,\n                    parent: null,\n                    axes: null,\n                    area: 0,\n                    mass: 0,\n                    inertia: 0,\n                    deltaTime: 1e3 / 60,\n                    _original: null\n                  };\n                  var body = Common.extend(defaults, options);\n                  _initProperties(body, options);\n                  return body;\n                };\n                Body.nextGroup = function(isNonColliding) {\n                  if (isNonColliding)\n                    return Body._nextNonCollidingGroupId--;\n                  return Body._nextCollidingGroupId++;\n                };\n                Body.nextCategory = function() {\n                  Body._nextCategory = Body._nextCategory << 1;\n                  return Body._nextCategory;\n                };\n                var _initProperties = function(body, options) {\n                  options = options || {};\n                  Body.set(body, {\n                    bounds: body.bounds || Bounds.create(body.vertices),\n                    positionPrev: body.positionPrev || Vector.clone(body.position),\n                    anglePrev: body.anglePrev || body.angle,\n                    vertices: body.vertices,\n                    parts: body.parts || [body],\n                    isStatic: body.isStatic,\n                    isSleeping: body.isSleeping,\n                    parent: body.parent || body\n                  });\n                  Vertices.rotate(body.vertices, body.angle, body.position);\n                  Axes.rotate(body.axes, body.angle);\n                  Bounds.update(body.bounds, body.vertices, body.velocity);\n                  Body.set(body, {\n                    axes: options.axes || body.axes,\n                    area: options.area || body.area,\n                    mass: options.mass || body.mass,\n                    inertia: options.inertia || body.inertia\n                  });\n                  var defaultFillStyle = body.isStatic ? "#14151f" : Common.choose(["#f19648", "#f5d259", "#f55a3c", "#063e7b", "#ececd1"]), defaultStrokeStyle = body.isStatic ? "#555" : "#ccc", defaultLineWidth = body.isStatic && body.render.fillStyle === null ? 1 : 0;\n                  body.render.fillStyle = body.render.fillStyle || defaultFillStyle;\n                  body.render.strokeStyle = body.render.strokeStyle || defaultStrokeStyle;\n                  body.render.lineWidth = body.render.lineWidth || defaultLineWidth;\n                  body.render.sprite.xOffset += -(body.bounds.min.x - body.position.x) / (body.bounds.max.x - body.bounds.min.x);\n                  body.render.sprite.yOffset += -(body.bounds.min.y - body.position.y) / (body.bounds.max.y - body.bounds.min.y);\n                };\n                Body.set = function(body, settings, value) {\n                  var property;\n                  if (typeof settings === "string") {\n                    property = settings;\n                    settings = {};\n                    settings[property] = value;\n                  }\n                  for (property in settings) {\n                    if (!Object.prototype.hasOwnProperty.call(settings, property))\n                      continue;\n                    value = settings[property];\n                    switch (property) {\n                      case "isStatic":\n                        Body.setStatic(body, value);\n                        break;\n                      case "isSleeping":\n                        Sleeping.set(body, value);\n                        break;\n                      case "mass":\n                        Body.setMass(body, value);\n                        break;\n                      case "density":\n                        Body.setDensity(body, value);\n                        break;\n                      case "inertia":\n                        Body.setInertia(body, value);\n                        break;\n                      case "vertices":\n                        Body.setVertices(body, value);\n                        break;\n                      case "position":\n                        Body.setPosition(body, value);\n                        break;\n                      case "angle":\n                        Body.setAngle(body, value);\n                        break;\n                      case "velocity":\n                        Body.setVelocity(body, value);\n                        break;\n                      case "angularVelocity":\n                        Body.setAngularVelocity(body, value);\n                        break;\n                      case "speed":\n                        Body.setSpeed(body, value);\n                        break;\n                      case "angularSpeed":\n                        Body.setAngularSpeed(body, value);\n                        break;\n                      case "parts":\n                        Body.setParts(body, value);\n                        break;\n                      case "centre":\n                        Body.setCentre(body, value);\n                        break;\n                      default:\n                        body[property] = value;\n                    }\n                  }\n                };\n                Body.setStatic = function(body, isStatic) {\n                  for (var i = 0; i < body.parts.length; i++) {\n                    var part = body.parts[i];\n                    if (isStatic) {\n                      if (!part.isStatic) {\n                        part._original = {\n                          restitution: part.restitution,\n                          friction: part.friction,\n                          mass: part.mass,\n                          inertia: part.inertia,\n                          density: part.density,\n                          inverseMass: part.inverseMass,\n                          inverseInertia: part.inverseInertia\n                        };\n                      }\n                      part.restitution = 0;\n                      part.friction = 1;\n                      part.mass = part.inertia = part.density = Infinity;\n                      part.inverseMass = part.inverseInertia = 0;\n                      part.positionPrev.x = part.position.x;\n                      part.positionPrev.y = part.position.y;\n                      part.anglePrev = part.angle;\n                      part.angularVelocity = 0;\n                      part.speed = 0;\n                      part.angularSpeed = 0;\n                      part.motion = 0;\n                    } else if (part._original) {\n                      part.restitution = part._original.restitution;\n                      part.friction = part._original.friction;\n                      part.mass = part._original.mass;\n                      part.inertia = part._original.inertia;\n                      part.density = part._original.density;\n                      part.inverseMass = part._original.inverseMass;\n                      part.inverseInertia = part._original.inverseInertia;\n                      part._original = null;\n                    }\n                    part.isStatic = isStatic;\n                  }\n                };\n                Body.setMass = function(body, mass) {\n                  var moment = body.inertia / (body.mass / 6);\n                  body.inertia = moment * (mass / 6);\n                  body.inverseInertia = 1 / body.inertia;\n                  body.mass = mass;\n                  body.inverseMass = 1 / body.mass;\n                  body.density = body.mass / body.area;\n                };\n                Body.setDensity = function(body, density) {\n                  Body.setMass(body, density * body.area);\n                  body.density = density;\n                };\n                Body.setInertia = function(body, inertia) {\n                  body.inertia = inertia;\n                  body.inverseInertia = 1 / body.inertia;\n                };\n                Body.setVertices = function(body, vertices) {\n                  if (vertices[0].body === body) {\n                    body.vertices = vertices;\n                  } else {\n                    body.vertices = Vertices.create(vertices, body);\n                  }\n                  body.axes = Axes.fromVertices(body.vertices);\n                  body.area = Vertices.area(body.vertices);\n                  Body.setMass(body, body.density * body.area);\n                  var centre = Vertices.centre(body.vertices);\n                  Vertices.translate(body.vertices, centre, -1);\n                  Body.setInertia(body, Body._inertiaScale * Vertices.inertia(body.vertices, body.mass));\n                  Vertices.translate(body.vertices, body.position);\n                  Bounds.update(body.bounds, body.vertices, body.velocity);\n                };\n                Body.setParts = function(body, parts, autoHull) {\n                  var i;\n                  parts = parts.slice(0);\n                  body.parts.length = 0;\n                  body.parts.push(body);\n                  body.parent = body;\n                  for (i = 0; i < parts.length; i++) {\n                    var part = parts[i];\n                    if (part !== body) {\n                      part.parent = body;\n                      body.parts.push(part);\n                    }\n                  }\n                  if (body.parts.length === 1)\n                    return;\n                  autoHull = typeof autoHull !== "undefined" ? autoHull : true;\n                  if (autoHull) {\n                    var vertices = [];\n                    for (i = 0; i < parts.length; i++) {\n                      vertices = vertices.concat(parts[i].vertices);\n                    }\n                    Vertices.clockwiseSort(vertices);\n                    var hull = Vertices.hull(vertices), hullCentre = Vertices.centre(hull);\n                    Body.setVertices(body, hull);\n                    Vertices.translate(body.vertices, hullCentre);\n                  }\n                  var total = Body._totalProperties(body);\n                  body.area = total.area;\n                  body.parent = body;\n                  body.position.x = total.centre.x;\n                  body.position.y = total.centre.y;\n                  body.positionPrev.x = total.centre.x;\n                  body.positionPrev.y = total.centre.y;\n                  Body.setMass(body, total.mass);\n                  Body.setInertia(body, total.inertia);\n                  Body.setPosition(body, total.centre);\n                };\n                Body.setCentre = function(body, centre, relative) {\n                  if (!relative) {\n                    body.positionPrev.x = centre.x - (body.position.x - body.positionPrev.x);\n                    body.positionPrev.y = centre.y - (body.position.y - body.positionPrev.y);\n                    body.position.x = centre.x;\n                    body.position.y = centre.y;\n                  } else {\n                    body.positionPrev.x += centre.x;\n                    body.positionPrev.y += centre.y;\n                    body.position.x += centre.x;\n                    body.position.y += centre.y;\n                  }\n                };\n                Body.setPosition = function(body, position, updateVelocity) {\n                  var delta = Vector.sub(position, body.position);\n                  if (updateVelocity) {\n                    body.positionPrev.x = body.position.x;\n                    body.positionPrev.y = body.position.y;\n                    body.velocity.x = delta.x;\n                    body.velocity.y = delta.y;\n                    body.speed = Vector.magnitude(delta);\n                  } else {\n                    body.positionPrev.x += delta.x;\n                    body.positionPrev.y += delta.y;\n                  }\n                  for (var i = 0; i < body.parts.length; i++) {\n                    var part = body.parts[i];\n                    part.position.x += delta.x;\n                    part.position.y += delta.y;\n                    Vertices.translate(part.vertices, delta);\n                    Bounds.update(part.bounds, part.vertices, body.velocity);\n                  }\n                };\n                Body.setAngle = function(body, angle, updateVelocity) {\n                  var delta = angle - body.angle;\n                  if (updateVelocity) {\n                    body.anglePrev = body.angle;\n                    body.angularVelocity = delta;\n                    body.angularSpeed = Math.abs(delta);\n                  } else {\n                    body.anglePrev += delta;\n                  }\n                  for (var i = 0; i < body.parts.length; i++) {\n                    var part = body.parts[i];\n                    part.angle += delta;\n                    Vertices.rotate(part.vertices, delta, body.position);\n                    Axes.rotate(part.axes, delta);\n                    Bounds.update(part.bounds, part.vertices, body.velocity);\n                    if (i > 0) {\n                      Vector.rotateAbout(part.position, delta, body.position, part.position);\n                    }\n                  }\n                };\n                Body.setVelocity = function(body, velocity) {\n                  var timeScale = body.deltaTime / Body._baseDelta;\n                  body.positionPrev.x = body.position.x - velocity.x * timeScale;\n                  body.positionPrev.y = body.position.y - velocity.y * timeScale;\n                  body.velocity.x = (body.position.x - body.positionPrev.x) / timeScale;\n                  body.velocity.y = (body.position.y - body.positionPrev.y) / timeScale;\n                  body.speed = Vector.magnitude(body.velocity);\n                };\n                Body.getVelocity = function(body) {\n                  var timeScale = Body._baseDelta / body.deltaTime;\n                  return {\n                    x: (body.position.x - body.positionPrev.x) * timeScale,\n                    y: (body.position.y - body.positionPrev.y) * timeScale\n                  };\n                };\n                Body.getSpeed = function(body) {\n                  return Vector.magnitude(Body.getVelocity(body));\n                };\n                Body.setSpeed = function(body, speed) {\n                  Body.setVelocity(body, Vector.mult(Vector.normalise(Body.getVelocity(body)), speed));\n                };\n                Body.setAngularVelocity = function(body, velocity) {\n                  var timeScale = body.deltaTime / Body._baseDelta;\n                  body.anglePrev = body.angle - velocity * timeScale;\n                  body.angularVelocity = (body.angle - body.anglePrev) / timeScale;\n                  body.angularSpeed = Math.abs(body.angularVelocity);\n                };\n                Body.getAngularVelocity = function(body) {\n                  return (body.angle - body.anglePrev) * Body._baseDelta / body.deltaTime;\n                };\n                Body.getAngularSpeed = function(body) {\n                  return Math.abs(Body.getAngularVelocity(body));\n                };\n                Body.setAngularSpeed = function(body, speed) {\n                  Body.setAngularVelocity(body, Common.sign(Body.getAngularVelocity(body)) * speed);\n                };\n                Body.translate = function(body, translation, updateVelocity) {\n                  Body.setPosition(body, Vector.add(body.position, translation), updateVelocity);\n                };\n                Body.rotate = function(body, rotation, point, updateVelocity) {\n                  if (!point) {\n                    Body.setAngle(body, body.angle + rotation, updateVelocity);\n                  } else {\n                    var cos = Math.cos(rotation), sin = Math.sin(rotation), dx = body.position.x - point.x, dy = body.position.y - point.y;\n                    Body.setPosition(body, {\n                      x: point.x + (dx * cos - dy * sin),\n                      y: point.y + (dx * sin + dy * cos)\n                    }, updateVelocity);\n                    Body.setAngle(body, body.angle + rotation, updateVelocity);\n                  }\n                };\n                Body.scale = function(body, scaleX, scaleY, point) {\n                  var totalArea = 0, totalInertia = 0;\n                  point = point || body.position;\n                  for (var i = 0; i < body.parts.length; i++) {\n                    var part = body.parts[i];\n                    Vertices.scale(part.vertices, scaleX, scaleY, point);\n                    part.axes = Axes.fromVertices(part.vertices);\n                    part.area = Vertices.area(part.vertices);\n                    Body.setMass(part, body.density * part.area);\n                    Vertices.translate(part.vertices, { x: -part.position.x, y: -part.position.y });\n                    Body.setInertia(part, Body._inertiaScale * Vertices.inertia(part.vertices, part.mass));\n                    Vertices.translate(part.vertices, { x: part.position.x, y: part.position.y });\n                    if (i > 0) {\n                      totalArea += part.area;\n                      totalInertia += part.inertia;\n                    }\n                    part.position.x = point.x + (part.position.x - point.x) * scaleX;\n                    part.position.y = point.y + (part.position.y - point.y) * scaleY;\n                    Bounds.update(part.bounds, part.vertices, body.velocity);\n                  }\n                  if (body.parts.length > 1) {\n                    body.area = totalArea;\n                    if (!body.isStatic) {\n                      Body.setMass(body, body.density * totalArea);\n                      Body.setInertia(body, totalInertia);\n                    }\n                  }\n                  if (body.circleRadius) {\n                    if (scaleX === scaleY) {\n                      body.circleRadius *= scaleX;\n                    } else {\n                      body.circleRadius = null;\n                    }\n                  }\n                };\n                Body.update = function(body, deltaTime) {\n                  deltaTime = (typeof deltaTime !== "undefined" ? deltaTime : 1e3 / 60) * body.timeScale;\n                  var deltaTimeSquared = deltaTime * deltaTime, correction = Body._timeCorrection ? deltaTime / (body.deltaTime || deltaTime) : 1;\n                  var frictionAir = 1 - body.frictionAir * (deltaTime / Common._baseDelta), velocityPrevX = (body.position.x - body.positionPrev.x) * correction, velocityPrevY = (body.position.y - body.positionPrev.y) * correction;\n                  body.velocity.x = velocityPrevX * frictionAir + body.force.x / body.mass * deltaTimeSquared;\n                  body.velocity.y = velocityPrevY * frictionAir + body.force.y / body.mass * deltaTimeSquared;\n                  body.positionPrev.x = body.position.x;\n                  body.positionPrev.y = body.position.y;\n                  body.position.x += body.velocity.x;\n                  body.position.y += body.velocity.y;\n                  body.deltaTime = deltaTime;\n                  body.angularVelocity = (body.angle - body.anglePrev) * frictionAir * correction + body.torque / body.inertia * deltaTimeSquared;\n                  body.anglePrev = body.angle;\n                  body.angle += body.angularVelocity;\n                  for (var i = 0; i < body.parts.length; i++) {\n                    var part = body.parts[i];\n                    Vertices.translate(part.vertices, body.velocity);\n                    if (i > 0) {\n                      part.position.x += body.velocity.x;\n                      part.position.y += body.velocity.y;\n                    }\n                    if (body.angularVelocity !== 0) {\n                      Vertices.rotate(part.vertices, body.angularVelocity, body.position);\n                      Axes.rotate(part.axes, body.angularVelocity);\n                      if (i > 0) {\n                        Vector.rotateAbout(part.position, body.angularVelocity, body.position, part.position);\n                      }\n                    }\n                    Bounds.update(part.bounds, part.vertices, body.velocity);\n                  }\n                };\n                Body.updateVelocities = function(body) {\n                  var timeScale = Body._baseDelta / body.deltaTime, bodyVelocity = body.velocity;\n                  bodyVelocity.x = (body.position.x - body.positionPrev.x) * timeScale;\n                  bodyVelocity.y = (body.position.y - body.positionPrev.y) * timeScale;\n                  body.speed = Math.sqrt(bodyVelocity.x * bodyVelocity.x + bodyVelocity.y * bodyVelocity.y);\n                  body.angularVelocity = (body.angle - body.anglePrev) * timeScale;\n                  body.angularSpeed = Math.abs(body.angularVelocity);\n                };\n                Body.applyForce = function(body, position, force) {\n                  var offset = { x: position.x - body.position.x, y: position.y - body.position.y };\n                  body.force.x += force.x;\n                  body.force.y += force.y;\n                  body.torque += offset.x * force.y - offset.y * force.x;\n                };\n                Body._totalProperties = function(body) {\n                  var properties = {\n                    mass: 0,\n                    area: 0,\n                    inertia: 0,\n                    centre: { x: 0, y: 0 }\n                  };\n                  for (var i = body.parts.length === 1 ? 0 : 1; i < body.parts.length; i++) {\n                    var part = body.parts[i], mass = part.mass !== Infinity ? part.mass : 1;\n                    properties.mass += mass;\n                    properties.area += part.area;\n                    properties.inertia += part.inertia;\n                    properties.centre = Vector.add(properties.centre, Vector.mult(part.position, mass));\n                  }\n                  properties.centre = Vector.div(properties.centre, properties.mass);\n                  return properties;\n                };\n              })();\n            }),\n            /* 5 */\n            /***/\n            (function(module2, exports2, __webpack_require__) {\n              var Events = {};\n              module2.exports = Events;\n              var Common = __webpack_require__(0);\n              (function() {\n                Events.on = function(object, eventNames, callback) {\n                  var names = eventNames.split(" "), name;\n                  for (var i = 0; i < names.length; i++) {\n                    name = names[i];\n                    object.events = object.events || {};\n                    object.events[name] = object.events[name] || [];\n                    object.events[name].push(callback);\n                  }\n                  return callback;\n                };\n                Events.off = function(object, eventNames, callback) {\n                  if (!eventNames) {\n                    object.events = {};\n                    return;\n                  }\n                  if (typeof eventNames === "function") {\n                    callback = eventNames;\n                    eventNames = Common.keys(object.events).join(" ");\n                  }\n                  var names = eventNames.split(" ");\n                  for (var i = 0; i < names.length; i++) {\n                    var callbacks = object.events[names[i]], newCallbacks = [];\n                    if (callback && callbacks) {\n                      for (var j = 0; j < callbacks.length; j++) {\n                        if (callbacks[j] !== callback)\n                          newCallbacks.push(callbacks[j]);\n                      }\n                    }\n                    object.events[names[i]] = newCallbacks;\n                  }\n                };\n                Events.trigger = function(object, eventNames, event) {\n                  var names, name, callbacks, eventClone;\n                  var events = object.events;\n                  if (events && Common.keys(events).length > 0) {\n                    if (!event)\n                      event = {};\n                    names = eventNames.split(" ");\n                    for (var i = 0; i < names.length; i++) {\n                      name = names[i];\n                      callbacks = events[name];\n                      if (callbacks) {\n                        eventClone = Common.clone(event, false);\n                        eventClone.name = name;\n                        eventClone.source = object;\n                        for (var j = 0; j < callbacks.length; j++) {\n                          callbacks[j].apply(object, [eventClone]);\n                        }\n                      }\n                    }\n                  }\n                };\n              })();\n            }),\n            /* 6 */\n            /***/\n            (function(module2, exports2, __webpack_require__) {\n              var Composite = {};\n              module2.exports = Composite;\n              var Events = __webpack_require__(5);\n              var Common = __webpack_require__(0);\n              var Bounds = __webpack_require__(1);\n              var Body = __webpack_require__(4);\n              (function() {\n                Composite.create = function(options) {\n                  return Common.extend({\n                    id: Common.nextId(),\n                    type: "composite",\n                    parent: null,\n                    isModified: false,\n                    bodies: [],\n                    constraints: [],\n                    composites: [],\n                    label: "Composite",\n                    plugin: {},\n                    cache: {\n                      allBodies: null,\n                      allConstraints: null,\n                      allComposites: null\n                    }\n                  }, options);\n                };\n                Composite.setModified = function(composite, isModified, updateParents, updateChildren) {\n                  composite.isModified = isModified;\n                  if (isModified && composite.cache) {\n                    composite.cache.allBodies = null;\n                    composite.cache.allConstraints = null;\n                    composite.cache.allComposites = null;\n                  }\n                  if (updateParents && composite.parent) {\n                    Composite.setModified(composite.parent, isModified, updateParents, updateChildren);\n                  }\n                  if (updateChildren) {\n                    for (var i = 0; i < composite.composites.length; i++) {\n                      var childComposite = composite.composites[i];\n                      Composite.setModified(childComposite, isModified, updateParents, updateChildren);\n                    }\n                  }\n                };\n                Composite.add = function(composite, object) {\n                  var objects = [].concat(object);\n                  Events.trigger(composite, "beforeAdd", { object });\n                  for (var i = 0; i < objects.length; i++) {\n                    var obj = objects[i];\n                    switch (obj.type) {\n                      case "body":\n                        if (obj.parent !== obj) {\n                          Common.warn("Composite.add: skipped adding a compound body part (you must add its parent instead)");\n                          break;\n                        }\n                        Composite.addBody(composite, obj);\n                        break;\n                      case "constraint":\n                        Composite.addConstraint(composite, obj);\n                        break;\n                      case "composite":\n                        Composite.addComposite(composite, obj);\n                        break;\n                      case "mouseConstraint":\n                        Composite.addConstraint(composite, obj.constraint);\n                        break;\n                    }\n                  }\n                  Events.trigger(composite, "afterAdd", { object });\n                  return composite;\n                };\n                Composite.remove = function(composite, object, deep) {\n                  var objects = [].concat(object);\n                  Events.trigger(composite, "beforeRemove", { object });\n                  for (var i = 0; i < objects.length; i++) {\n                    var obj = objects[i];\n                    switch (obj.type) {\n                      case "body":\n                        Composite.removeBody(composite, obj, deep);\n                        break;\n                      case "constraint":\n                        Composite.removeConstraint(composite, obj, deep);\n                        break;\n                      case "composite":\n                        Composite.removeComposite(composite, obj, deep);\n                        break;\n                      case "mouseConstraint":\n                        Composite.removeConstraint(composite, obj.constraint);\n                        break;\n                    }\n                  }\n                  Events.trigger(composite, "afterRemove", { object });\n                  return composite;\n                };\n                Composite.addComposite = function(compositeA, compositeB) {\n                  compositeA.composites.push(compositeB);\n                  compositeB.parent = compositeA;\n                  Composite.setModified(compositeA, true, true, false);\n                  return compositeA;\n                };\n                Composite.removeComposite = function(compositeA, compositeB, deep) {\n                  var position = Common.indexOf(compositeA.composites, compositeB);\n                  if (position !== -1) {\n                    var bodies = Composite.allBodies(compositeB);\n                    Composite.removeCompositeAt(compositeA, position);\n                    for (var i = 0; i < bodies.length; i++) {\n                      bodies[i].sleepCounter = 0;\n                    }\n                  }\n                  if (deep) {\n                    for (var i = 0; i < compositeA.composites.length; i++) {\n                      Composite.removeComposite(compositeA.composites[i], compositeB, true);\n                    }\n                  }\n                  return compositeA;\n                };\n                Composite.removeCompositeAt = function(composite, position) {\n                  composite.composites.splice(position, 1);\n                  Composite.setModified(composite, true, true, false);\n                  return composite;\n                };\n                Composite.addBody = function(composite, body) {\n                  composite.bodies.push(body);\n                  Composite.setModified(composite, true, true, false);\n                  return composite;\n                };\n                Composite.removeBody = function(composite, body, deep) {\n                  var position = Common.indexOf(composite.bodies, body);\n                  if (position !== -1) {\n                    Composite.removeBodyAt(composite, position);\n                    body.sleepCounter = 0;\n                  }\n                  if (deep) {\n                    for (var i = 0; i < composite.composites.length; i++) {\n                      Composite.removeBody(composite.composites[i], body, true);\n                    }\n                  }\n                  return composite;\n                };\n                Composite.removeBodyAt = function(composite, position) {\n                  composite.bodies.splice(position, 1);\n                  Composite.setModified(composite, true, true, false);\n                  return composite;\n                };\n                Composite.addConstraint = function(composite, constraint) {\n                  composite.constraints.push(constraint);\n                  Composite.setModified(composite, true, true, false);\n                  return composite;\n                };\n                Composite.removeConstraint = function(composite, constraint, deep) {\n                  var position = Common.indexOf(composite.constraints, constraint);\n                  if (position !== -1) {\n                    Composite.removeConstraintAt(composite, position);\n                  }\n                  if (deep) {\n                    for (var i = 0; i < composite.composites.length; i++) {\n                      Composite.removeConstraint(composite.composites[i], constraint, true);\n                    }\n                  }\n                  return composite;\n                };\n                Composite.removeConstraintAt = function(composite, position) {\n                  composite.constraints.splice(position, 1);\n                  Composite.setModified(composite, true, true, false);\n                  return composite;\n                };\n                Composite.clear = function(composite, keepStatic, deep) {\n                  if (deep) {\n                    for (var i = 0; i < composite.composites.length; i++) {\n                      Composite.clear(composite.composites[i], keepStatic, true);\n                    }\n                  }\n                  if (keepStatic) {\n                    composite.bodies = composite.bodies.filter(function(body) {\n                      return body.isStatic;\n                    });\n                  } else {\n                    composite.bodies.length = 0;\n                  }\n                  composite.constraints.length = 0;\n                  composite.composites.length = 0;\n                  Composite.setModified(composite, true, true, false);\n                  return composite;\n                };\n                Composite.allBodies = function(composite) {\n                  if (composite.cache && composite.cache.allBodies) {\n                    return composite.cache.allBodies;\n                  }\n                  var bodies = [].concat(composite.bodies);\n                  for (var i = 0; i < composite.composites.length; i++)\n                    bodies = bodies.concat(Composite.allBodies(composite.composites[i]));\n                  if (composite.cache) {\n                    composite.cache.allBodies = bodies;\n                  }\n                  return bodies;\n                };\n                Composite.allConstraints = function(composite) {\n                  if (composite.cache && composite.cache.allConstraints) {\n                    return composite.cache.allConstraints;\n                  }\n                  var constraints = [].concat(composite.constraints);\n                  for (var i = 0; i < composite.composites.length; i++)\n                    constraints = constraints.concat(Composite.allConstraints(composite.composites[i]));\n                  if (composite.cache) {\n                    composite.cache.allConstraints = constraints;\n                  }\n                  return constraints;\n                };\n                Composite.allComposites = function(composite) {\n                  if (composite.cache && composite.cache.allComposites) {\n                    return composite.cache.allComposites;\n                  }\n                  var composites = [].concat(composite.composites);\n                  for (var i = 0; i < composite.composites.length; i++)\n                    composites = composites.concat(Composite.allComposites(composite.composites[i]));\n                  if (composite.cache) {\n                    composite.cache.allComposites = composites;\n                  }\n                  return composites;\n                };\n                Composite.get = function(composite, id, type) {\n                  var objects, object;\n                  switch (type) {\n                    case "body":\n                      objects = Composite.allBodies(composite);\n                      break;\n                    case "constraint":\n                      objects = Composite.allConstraints(composite);\n                      break;\n                    case "composite":\n                      objects = Composite.allComposites(composite).concat(composite);\n                      break;\n                  }\n                  if (!objects)\n                    return null;\n                  object = objects.filter(function(object2) {\n                    return object2.id.toString() === id.toString();\n                  });\n                  return object.length === 0 ? null : object[0];\n                };\n                Composite.move = function(compositeA, objects, compositeB) {\n                  Composite.remove(compositeA, objects);\n                  Composite.add(compositeB, objects);\n                  return compositeA;\n                };\n                Composite.rebase = function(composite) {\n                  var objects = Composite.allBodies(composite).concat(Composite.allConstraints(composite)).concat(Composite.allComposites(composite));\n                  for (var i = 0; i < objects.length; i++) {\n                    objects[i].id = Common.nextId();\n                  }\n                  return composite;\n                };\n                Composite.translate = function(composite, translation, recursive) {\n                  var bodies = recursive ? Composite.allBodies(composite) : composite.bodies;\n                  for (var i = 0; i < bodies.length; i++) {\n                    Body.translate(bodies[i], translation);\n                  }\n                  return composite;\n                };\n                Composite.rotate = function(composite, rotation, point, recursive) {\n                  var cos = Math.cos(rotation), sin = Math.sin(rotation), bodies = recursive ? Composite.allBodies(composite) : composite.bodies;\n                  for (var i = 0; i < bodies.length; i++) {\n                    var body = bodies[i], dx = body.position.x - point.x, dy = body.position.y - point.y;\n                    Body.setPosition(body, {\n                      x: point.x + (dx * cos - dy * sin),\n                      y: point.y + (dx * sin + dy * cos)\n                    });\n                    Body.rotate(body, rotation);\n                  }\n                  return composite;\n                };\n                Composite.scale = function(composite, scaleX, scaleY, point, recursive) {\n                  var bodies = recursive ? Composite.allBodies(composite) : composite.bodies;\n                  for (var i = 0; i < bodies.length; i++) {\n                    var body = bodies[i], dx = body.position.x - point.x, dy = body.position.y - point.y;\n                    Body.setPosition(body, {\n                      x: point.x + dx * scaleX,\n                      y: point.y + dy * scaleY\n                    });\n                    Body.scale(body, scaleX, scaleY);\n                  }\n                  return composite;\n                };\n                Composite.bounds = function(composite) {\n                  var bodies = Composite.allBodies(composite), vertices = [];\n                  for (var i = 0; i < bodies.length; i += 1) {\n                    var body = bodies[i];\n                    vertices.push(body.bounds.min, body.bounds.max);\n                  }\n                  return Bounds.create(vertices);\n                };\n              })();\n            }),\n            /* 7 */\n            /***/\n            (function(module2, exports2, __webpack_require__) {\n              var Sleeping = {};\n              module2.exports = Sleeping;\n              var Body = __webpack_require__(4);\n              var Events = __webpack_require__(5);\n              var Common = __webpack_require__(0);\n              (function() {\n                Sleeping._motionWakeThreshold = 0.18;\n                Sleeping._motionSleepThreshold = 0.08;\n                Sleeping._minBias = 0.9;\n                Sleeping.update = function(bodies, delta) {\n                  var timeScale = delta / Common._baseDelta, motionSleepThreshold = Sleeping._motionSleepThreshold;\n                  for (var i = 0; i < bodies.length; i++) {\n                    var body = bodies[i], speed = Body.getSpeed(body), angularSpeed = Body.getAngularSpeed(body), motion = speed * speed + angularSpeed * angularSpeed;\n                    if (body.force.x !== 0 || body.force.y !== 0) {\n                      Sleeping.set(body, false);\n                      continue;\n                    }\n                    var minMotion = Math.min(body.motion, motion), maxMotion = Math.max(body.motion, motion);\n                    body.motion = Sleeping._minBias * minMotion + (1 - Sleeping._minBias) * maxMotion;\n                    if (body.sleepThreshold > 0 && body.motion < motionSleepThreshold) {\n                      body.sleepCounter += 1;\n                      if (body.sleepCounter >= body.sleepThreshold / timeScale) {\n                        Sleeping.set(body, true);\n                      }\n                    } else if (body.sleepCounter > 0) {\n                      body.sleepCounter -= 1;\n                    }\n                  }\n                };\n                Sleeping.afterCollisions = function(pairs) {\n                  var motionSleepThreshold = Sleeping._motionSleepThreshold;\n                  for (var i = 0; i < pairs.length; i++) {\n                    var pair = pairs[i];\n                    if (!pair.isActive)\n                      continue;\n                    var collision = pair.collision, bodyA = collision.bodyA.parent, bodyB = collision.bodyB.parent;\n                    if (bodyA.isSleeping && bodyB.isSleeping || bodyA.isStatic || bodyB.isStatic)\n                      continue;\n                    if (bodyA.isSleeping || bodyB.isSleeping) {\n                      var sleepingBody = bodyA.isSleeping && !bodyA.isStatic ? bodyA : bodyB, movingBody = sleepingBody === bodyA ? bodyB : bodyA;\n                      if (!sleepingBody.isStatic && movingBody.motion > motionSleepThreshold) {\n                        Sleeping.set(sleepingBody, false);\n                      }\n                    }\n                  }\n                };\n                Sleeping.set = function(body, isSleeping) {\n                  var wasSleeping = body.isSleeping;\n                  if (isSleeping) {\n                    body.isSleeping = true;\n                    body.sleepCounter = body.sleepThreshold;\n                    body.positionImpulse.x = 0;\n                    body.positionImpulse.y = 0;\n                    body.positionPrev.x = body.position.x;\n                    body.positionPrev.y = body.position.y;\n                    body.anglePrev = body.angle;\n                    body.speed = 0;\n                    body.angularSpeed = 0;\n                    body.motion = 0;\n                    if (!wasSleeping) {\n                      Events.trigger(body, "sleepStart");\n                    }\n                  } else {\n                    body.isSleeping = false;\n                    body.sleepCounter = 0;\n                    if (wasSleeping) {\n                      Events.trigger(body, "sleepEnd");\n                    }\n                  }\n                };\n              })();\n            }),\n            /* 8 */\n            /***/\n            (function(module2, exports2, __webpack_require__) {\n              var Collision = {};\n              module2.exports = Collision;\n              var Vertices = __webpack_require__(3);\n              var Pair = __webpack_require__(9);\n              (function() {\n                var _supports = [];\n                var _overlapAB = {\n                  overlap: 0,\n                  axis: null\n                };\n                var _overlapBA = {\n                  overlap: 0,\n                  axis: null\n                };\n                Collision.create = function(bodyA, bodyB) {\n                  return {\n                    pair: null,\n                    collided: false,\n                    bodyA,\n                    bodyB,\n                    parentA: bodyA.parent,\n                    parentB: bodyB.parent,\n                    depth: 0,\n                    normal: { x: 0, y: 0 },\n                    tangent: { x: 0, y: 0 },\n                    penetration: { x: 0, y: 0 },\n                    supports: [null, null],\n                    supportCount: 0\n                  };\n                };\n                Collision.collides = function(bodyA, bodyB, pairs) {\n                  Collision._overlapAxes(_overlapAB, bodyA.vertices, bodyB.vertices, bodyA.axes);\n                  if (_overlapAB.overlap <= 0) {\n                    return null;\n                  }\n                  Collision._overlapAxes(_overlapBA, bodyB.vertices, bodyA.vertices, bodyB.axes);\n                  if (_overlapBA.overlap <= 0) {\n                    return null;\n                  }\n                  var pair = pairs && pairs.table[Pair.id(bodyA, bodyB)], collision;\n                  if (!pair) {\n                    collision = Collision.create(bodyA, bodyB);\n                    collision.collided = true;\n                    collision.bodyA = bodyA.id < bodyB.id ? bodyA : bodyB;\n                    collision.bodyB = bodyA.id < bodyB.id ? bodyB : bodyA;\n                    collision.parentA = collision.bodyA.parent;\n                    collision.parentB = collision.bodyB.parent;\n                  } else {\n                    collision = pair.collision;\n                  }\n                  bodyA = collision.bodyA;\n                  bodyB = collision.bodyB;\n                  var minOverlap;\n                  if (_overlapAB.overlap < _overlapBA.overlap) {\n                    minOverlap = _overlapAB;\n                  } else {\n                    minOverlap = _overlapBA;\n                  }\n                  var normal = collision.normal, tangent = collision.tangent, penetration = collision.penetration, supports = collision.supports, depth = minOverlap.overlap, minAxis = minOverlap.axis, normalX = minAxis.x, normalY = minAxis.y, deltaX = bodyB.position.x - bodyA.position.x, deltaY = bodyB.position.y - bodyA.position.y;\n                  if (normalX * deltaX + normalY * deltaY >= 0) {\n                    normalX = -normalX;\n                    normalY = -normalY;\n                  }\n                  normal.x = normalX;\n                  normal.y = normalY;\n                  tangent.x = -normalY;\n                  tangent.y = normalX;\n                  penetration.x = normalX * depth;\n                  penetration.y = normalY * depth;\n                  collision.depth = depth;\n                  var supportsB = Collision._findSupports(bodyA, bodyB, normal, 1), supportCount = 0;\n                  if (Vertices.contains(bodyA.vertices, supportsB[0])) {\n                    supports[supportCount++] = supportsB[0];\n                  }\n                  if (Vertices.contains(bodyA.vertices, supportsB[1])) {\n                    supports[supportCount++] = supportsB[1];\n                  }\n                  if (supportCount < 2) {\n                    var supportsA = Collision._findSupports(bodyB, bodyA, normal, -1);\n                    if (Vertices.contains(bodyB.vertices, supportsA[0])) {\n                      supports[supportCount++] = supportsA[0];\n                    }\n                    if (supportCount < 2 && Vertices.contains(bodyB.vertices, supportsA[1])) {\n                      supports[supportCount++] = supportsA[1];\n                    }\n                  }\n                  if (supportCount === 0) {\n                    supports[supportCount++] = supportsB[0];\n                  }\n                  collision.supportCount = supportCount;\n                  return collision;\n                };\n                Collision._overlapAxes = function(result, verticesA, verticesB, axes) {\n                  var verticesALength = verticesA.length, verticesBLength = verticesB.length, verticesAX = verticesA[0].x, verticesAY = verticesA[0].y, verticesBX = verticesB[0].x, verticesBY = verticesB[0].y, axesLength = axes.length, overlapMin = Number.MAX_VALUE, overlapAxisNumber = 0, overlap, overlapAB, overlapBA, dot, i, j;\n                  for (i = 0; i < axesLength; i++) {\n                    var axis = axes[i], axisX = axis.x, axisY = axis.y, minA = verticesAX * axisX + verticesAY * axisY, minB = verticesBX * axisX + verticesBY * axisY, maxA = minA, maxB = minB;\n                    for (j = 1; j < verticesALength; j += 1) {\n                      dot = verticesA[j].x * axisX + verticesA[j].y * axisY;\n                      if (dot > maxA) {\n                        maxA = dot;\n                      } else if (dot < minA) {\n                        minA = dot;\n                      }\n                    }\n                    for (j = 1; j < verticesBLength; j += 1) {\n                      dot = verticesB[j].x * axisX + verticesB[j].y * axisY;\n                      if (dot > maxB) {\n                        maxB = dot;\n                      } else if (dot < minB) {\n                        minB = dot;\n                      }\n                    }\n                    overlapAB = maxA - minB;\n                    overlapBA = maxB - minA;\n                    overlap = overlapAB < overlapBA ? overlapAB : overlapBA;\n                    if (overlap < overlapMin) {\n                      overlapMin = overlap;\n                      overlapAxisNumber = i;\n                      if (overlap <= 0) {\n                        break;\n                      }\n                    }\n                  }\n                  result.axis = axes[overlapAxisNumber];\n                  result.overlap = overlapMin;\n                };\n                Collision._findSupports = function(bodyA, bodyB, normal, direction) {\n                  var vertices = bodyB.vertices, verticesLength = vertices.length, bodyAPositionX = bodyA.position.x, bodyAPositionY = bodyA.position.y, normalX = normal.x * direction, normalY = normal.y * direction, vertexA = vertices[0], vertexB = vertexA, nearestDistance = normalX * (bodyAPositionX - vertexB.x) + normalY * (bodyAPositionY - vertexB.y), vertexC, distance, j;\n                  for (j = 1; j < verticesLength; j += 1) {\n                    vertexB = vertices[j];\n                    distance = normalX * (bodyAPositionX - vertexB.x) + normalY * (bodyAPositionY - vertexB.y);\n                    if (distance < nearestDistance) {\n                      nearestDistance = distance;\n                      vertexA = vertexB;\n                    }\n                  }\n                  vertexC = vertices[(verticesLength + vertexA.index - 1) % verticesLength];\n                  nearestDistance = normalX * (bodyAPositionX - vertexC.x) + normalY * (bodyAPositionY - vertexC.y);\n                  vertexB = vertices[(vertexA.index + 1) % verticesLength];\n                  if (normalX * (bodyAPositionX - vertexB.x) + normalY * (bodyAPositionY - vertexB.y) < nearestDistance) {\n                    _supports[0] = vertexA;\n                    _supports[1] = vertexB;\n                    return _supports;\n                  }\n                  _supports[0] = vertexA;\n                  _supports[1] = vertexC;\n                  return _supports;\n                };\n              })();\n            }),\n            /* 9 */\n            /***/\n            (function(module2, exports2, __webpack_require__) {\n              var Pair = {};\n              module2.exports = Pair;\n              var Contact = __webpack_require__(16);\n              (function() {\n                Pair.create = function(collision, timestamp) {\n                  var bodyA = collision.bodyA, bodyB = collision.bodyB;\n                  var pair = {\n                    id: Pair.id(bodyA, bodyB),\n                    bodyA,\n                    bodyB,\n                    collision,\n                    contacts: [Contact.create(), Contact.create()],\n                    contactCount: 0,\n                    separation: 0,\n                    isActive: true,\n                    isSensor: bodyA.isSensor || bodyB.isSensor,\n                    timeCreated: timestamp,\n                    timeUpdated: timestamp,\n                    inverseMass: 0,\n                    friction: 0,\n                    frictionStatic: 0,\n                    restitution: 0,\n                    slop: 0\n                  };\n                  Pair.update(pair, collision, timestamp);\n                  return pair;\n                };\n                Pair.update = function(pair, collision, timestamp) {\n                  var supports = collision.supports, supportCount = collision.supportCount, contacts = pair.contacts, parentA = collision.parentA, parentB = collision.parentB;\n                  pair.isActive = true;\n                  pair.timeUpdated = timestamp;\n                  pair.collision = collision;\n                  pair.separation = collision.depth;\n                  pair.inverseMass = parentA.inverseMass + parentB.inverseMass;\n                  pair.friction = parentA.friction < parentB.friction ? parentA.friction : parentB.friction;\n                  pair.frictionStatic = parentA.frictionStatic > parentB.frictionStatic ? parentA.frictionStatic : parentB.frictionStatic;\n                  pair.restitution = parentA.restitution > parentB.restitution ? parentA.restitution : parentB.restitution;\n                  pair.slop = parentA.slop > parentB.slop ? parentA.slop : parentB.slop;\n                  pair.contactCount = supportCount;\n                  collision.pair = pair;\n                  var supportA = supports[0], contactA = contacts[0], supportB = supports[1], contactB = contacts[1];\n                  if (contactB.vertex === supportA || contactA.vertex === supportB) {\n                    contacts[1] = contactA;\n                    contacts[0] = contactA = contactB;\n                    contactB = contacts[1];\n                  }\n                  contactA.vertex = supportA;\n                  contactB.vertex = supportB;\n                };\n                Pair.setActive = function(pair, isActive, timestamp) {\n                  if (isActive) {\n                    pair.isActive = true;\n                    pair.timeUpdated = timestamp;\n                  } else {\n                    pair.isActive = false;\n                    pair.contactCount = 0;\n                  }\n                };\n                Pair.id = function(bodyA, bodyB) {\n                  return bodyA.id < bodyB.id ? bodyA.id.toString(36) + ":" + bodyB.id.toString(36) : bodyB.id.toString(36) + ":" + bodyA.id.toString(36);\n                };\n              })();\n            }),\n            /* 10 */\n            /***/\n            (function(module2, exports2, __webpack_require__) {\n              var Constraint = {};\n              module2.exports = Constraint;\n              var Vertices = __webpack_require__(3);\n              var Vector = __webpack_require__(2);\n              var Sleeping = __webpack_require__(7);\n              var Bounds = __webpack_require__(1);\n              var Axes = __webpack_require__(11);\n              var Common = __webpack_require__(0);\n              (function() {\n                Constraint._warming = 0.4;\n                Constraint._torqueDampen = 1;\n                Constraint._minLength = 1e-6;\n                Constraint.create = function(options) {\n                  var constraint = options;\n                  if (constraint.bodyA && !constraint.pointA)\n                    constraint.pointA = { x: 0, y: 0 };\n                  if (constraint.bodyB && !constraint.pointB)\n                    constraint.pointB = { x: 0, y: 0 };\n                  var initialPointA = constraint.bodyA ? Vector.add(constraint.bodyA.position, constraint.pointA) : constraint.pointA, initialPointB = constraint.bodyB ? Vector.add(constraint.bodyB.position, constraint.pointB) : constraint.pointB, length = Vector.magnitude(Vector.sub(initialPointA, initialPointB));\n                  constraint.length = typeof constraint.length !== "undefined" ? constraint.length : length;\n                  constraint.id = constraint.id || Common.nextId();\n                  constraint.label = constraint.label || "Constraint";\n                  constraint.type = "constraint";\n                  constraint.stiffness = constraint.stiffness || (constraint.length > 0 ? 1 : 0.7);\n                  constraint.damping = constraint.damping || 0;\n                  constraint.angularStiffness = constraint.angularStiffness || 0;\n                  constraint.angleA = constraint.bodyA ? constraint.bodyA.angle : constraint.angleA;\n                  constraint.angleB = constraint.bodyB ? constraint.bodyB.angle : constraint.angleB;\n                  constraint.plugin = {};\n                  var render = {\n                    visible: true,\n                    lineWidth: 2,\n                    strokeStyle: "#ffffff",\n                    type: "line",\n                    anchors: true\n                  };\n                  if (constraint.length === 0 && constraint.stiffness > 0.1) {\n                    render.type = "pin";\n                    render.anchors = false;\n                  } else if (constraint.stiffness < 0.9) {\n                    render.type = "spring";\n                  }\n                  constraint.render = Common.extend(render, constraint.render);\n                  return constraint;\n                };\n                Constraint.preSolveAll = function(bodies) {\n                  for (var i = 0; i < bodies.length; i += 1) {\n                    var body = bodies[i], impulse = body.constraintImpulse;\n                    if (body.isStatic || impulse.x === 0 && impulse.y === 0 && impulse.angle === 0) {\n                      continue;\n                    }\n                    body.position.x += impulse.x;\n                    body.position.y += impulse.y;\n                    body.angle += impulse.angle;\n                  }\n                };\n                Constraint.solveAll = function(constraints, delta) {\n                  var timeScale = Common.clamp(delta / Common._baseDelta, 0, 1);\n                  for (var i = 0; i < constraints.length; i += 1) {\n                    var constraint = constraints[i], fixedA = !constraint.bodyA || constraint.bodyA && constraint.bodyA.isStatic, fixedB = !constraint.bodyB || constraint.bodyB && constraint.bodyB.isStatic;\n                    if (fixedA || fixedB) {\n                      Constraint.solve(constraints[i], timeScale);\n                    }\n                  }\n                  for (i = 0; i < constraints.length; i += 1) {\n                    constraint = constraints[i];\n                    fixedA = !constraint.bodyA || constraint.bodyA && constraint.bodyA.isStatic;\n                    fixedB = !constraint.bodyB || constraint.bodyB && constraint.bodyB.isStatic;\n                    if (!fixedA && !fixedB) {\n                      Constraint.solve(constraints[i], timeScale);\n                    }\n                  }\n                };\n                Constraint.solve = function(constraint, timeScale) {\n                  var bodyA = constraint.bodyA, bodyB = constraint.bodyB, pointA = constraint.pointA, pointB = constraint.pointB;\n                  if (!bodyA && !bodyB)\n                    return;\n                  if (bodyA && !bodyA.isStatic) {\n                    Vector.rotate(pointA, bodyA.angle - constraint.angleA, pointA);\n                    constraint.angleA = bodyA.angle;\n                  }\n                  if (bodyB && !bodyB.isStatic) {\n                    Vector.rotate(pointB, bodyB.angle - constraint.angleB, pointB);\n                    constraint.angleB = bodyB.angle;\n                  }\n                  var pointAWorld = pointA, pointBWorld = pointB;\n                  if (bodyA) pointAWorld = Vector.add(bodyA.position, pointA);\n                  if (bodyB) pointBWorld = Vector.add(bodyB.position, pointB);\n                  if (!pointAWorld || !pointBWorld)\n                    return;\n                  var delta = Vector.sub(pointAWorld, pointBWorld), currentLength = Vector.magnitude(delta);\n                  if (currentLength < Constraint._minLength) {\n                    currentLength = Constraint._minLength;\n                  }\n                  var difference = (currentLength - constraint.length) / currentLength, isRigid = constraint.stiffness >= 1 || constraint.length === 0, stiffness = isRigid ? constraint.stiffness * timeScale : constraint.stiffness * timeScale * timeScale, damping = constraint.damping * timeScale, force = Vector.mult(delta, difference * stiffness), massTotal = (bodyA ? bodyA.inverseMass : 0) + (bodyB ? bodyB.inverseMass : 0), inertiaTotal = (bodyA ? bodyA.inverseInertia : 0) + (bodyB ? bodyB.inverseInertia : 0), resistanceTotal = massTotal + inertiaTotal, torque, share, normal, normalVelocity, relativeVelocity;\n                  if (damping > 0) {\n                    var zero = Vector.create();\n                    normal = Vector.div(delta, currentLength);\n                    relativeVelocity = Vector.sub(\n                      bodyB && Vector.sub(bodyB.position, bodyB.positionPrev) || zero,\n                      bodyA && Vector.sub(bodyA.position, bodyA.positionPrev) || zero\n                    );\n                    normalVelocity = Vector.dot(normal, relativeVelocity);\n                  }\n                  if (bodyA && !bodyA.isStatic) {\n                    share = bodyA.inverseMass / massTotal;\n                    bodyA.constraintImpulse.x -= force.x * share;\n                    bodyA.constraintImpulse.y -= force.y * share;\n                    bodyA.position.x -= force.x * share;\n                    bodyA.position.y -= force.y * share;\n                    if (damping > 0) {\n                      bodyA.positionPrev.x -= damping * normal.x * normalVelocity * share;\n                      bodyA.positionPrev.y -= damping * normal.y * normalVelocity * share;\n                    }\n                    torque = Vector.cross(pointA, force) / resistanceTotal * Constraint._torqueDampen * bodyA.inverseInertia * (1 - constraint.angularStiffness);\n                    bodyA.constraintImpulse.angle -= torque;\n                    bodyA.angle -= torque;\n                  }\n                  if (bodyB && !bodyB.isStatic) {\n                    share = bodyB.inverseMass / massTotal;\n                    bodyB.constraintImpulse.x += force.x * share;\n                    bodyB.constraintImpulse.y += force.y * share;\n                    bodyB.position.x += force.x * share;\n                    bodyB.position.y += force.y * share;\n                    if (damping > 0) {\n                      bodyB.positionPrev.x += damping * normal.x * normalVelocity * share;\n                      bodyB.positionPrev.y += damping * normal.y * normalVelocity * share;\n                    }\n                    torque = Vector.cross(pointB, force) / resistanceTotal * Constraint._torqueDampen * bodyB.inverseInertia * (1 - constraint.angularStiffness);\n                    bodyB.constraintImpulse.angle += torque;\n                    bodyB.angle += torque;\n                  }\n                };\n                Constraint.postSolveAll = function(bodies) {\n                  for (var i = 0; i < bodies.length; i++) {\n                    var body = bodies[i], impulse = body.constraintImpulse;\n                    if (body.isStatic || impulse.x === 0 && impulse.y === 0 && impulse.angle === 0) {\n                      continue;\n                    }\n                    Sleeping.set(body, false);\n                    for (var j = 0; j < body.parts.length; j++) {\n                      var part = body.parts[j];\n                      Vertices.translate(part.vertices, impulse);\n                      if (j > 0) {\n                        part.position.x += impulse.x;\n                        part.position.y += impulse.y;\n                      }\n                      if (impulse.angle !== 0) {\n                        Vertices.rotate(part.vertices, impulse.angle, body.position);\n                        Axes.rotate(part.axes, impulse.angle);\n                        if (j > 0) {\n                          Vector.rotateAbout(part.position, impulse.angle, body.position, part.position);\n                        }\n                      }\n                      Bounds.update(part.bounds, part.vertices, body.velocity);\n                    }\n                    impulse.angle *= Constraint._warming;\n                    impulse.x *= Constraint._warming;\n                    impulse.y *= Constraint._warming;\n                  }\n                };\n                Constraint.pointAWorld = function(constraint) {\n                  return {\n                    x: (constraint.bodyA ? constraint.bodyA.position.x : 0) + (constraint.pointA ? constraint.pointA.x : 0),\n                    y: (constraint.bodyA ? constraint.bodyA.position.y : 0) + (constraint.pointA ? constraint.pointA.y : 0)\n                  };\n                };\n                Constraint.pointBWorld = function(constraint) {\n                  return {\n                    x: (constraint.bodyB ? constraint.bodyB.position.x : 0) + (constraint.pointB ? constraint.pointB.x : 0),\n                    y: (constraint.bodyB ? constraint.bodyB.position.y : 0) + (constraint.pointB ? constraint.pointB.y : 0)\n                  };\n                };\n                Constraint.currentLength = function(constraint) {\n                  var pointAX = (constraint.bodyA ? constraint.bodyA.position.x : 0) + (constraint.pointA ? constraint.pointA.x : 0);\n                  var pointAY = (constraint.bodyA ? constraint.bodyA.position.y : 0) + (constraint.pointA ? constraint.pointA.y : 0);\n                  var pointBX = (constraint.bodyB ? constraint.bodyB.position.x : 0) + (constraint.pointB ? constraint.pointB.x : 0);\n                  var pointBY = (constraint.bodyB ? constraint.bodyB.position.y : 0) + (constraint.pointB ? constraint.pointB.y : 0);\n                  var deltaX = pointAX - pointBX;\n                  var deltaY = pointAY - pointBY;\n                  return Math.sqrt(deltaX * deltaX + deltaY * deltaY);\n                };\n              })();\n            }),\n            /* 11 */\n            /***/\n            (function(module2, exports2, __webpack_require__) {\n              var Axes = {};\n              module2.exports = Axes;\n              var Vector = __webpack_require__(2);\n              var Common = __webpack_require__(0);\n              (function() {\n                Axes.fromVertices = function(vertices) {\n                  var axes = {};\n                  for (var i = 0; i < vertices.length; i++) {\n                    var j = (i + 1) % vertices.length, normal = Vector.normalise({\n                      x: vertices[j].y - vertices[i].y,\n                      y: vertices[i].x - vertices[j].x\n                    }), gradient = normal.y === 0 ? Infinity : normal.x / normal.y;\n                    gradient = gradient.toFixed(3).toString();\n                    axes[gradient] = normal;\n                  }\n                  return Common.values(axes);\n                };\n                Axes.rotate = function(axes, angle) {\n                  if (angle === 0)\n                    return;\n                  var cos = Math.cos(angle), sin = Math.sin(angle);\n                  for (var i = 0; i < axes.length; i++) {\n                    var axis = axes[i], xx;\n                    xx = axis.x * cos - axis.y * sin;\n                    axis.y = axis.x * sin + axis.y * cos;\n                    axis.x = xx;\n                  }\n                };\n              })();\n            }),\n            /* 12 */\n            /***/\n            (function(module2, exports2, __webpack_require__) {\n              var Bodies = {};\n              module2.exports = Bodies;\n              var Vertices = __webpack_require__(3);\n              var Common = __webpack_require__(0);\n              var Body = __webpack_require__(4);\n              var Bounds = __webpack_require__(1);\n              var Vector = __webpack_require__(2);\n              (function() {\n                Bodies.rectangle = function(x, y, width, height, options) {\n                  options = options || {};\n                  var rectangle = {\n                    label: "Rectangle Body",\n                    position: { x, y },\n                    vertices: Vertices.fromPath("L 0 0 L " + width + " 0 L " + width + " " + height + " L 0 " + height)\n                  };\n                  if (options.chamfer) {\n                    var chamfer = options.chamfer;\n                    rectangle.vertices = Vertices.chamfer(\n                      rectangle.vertices,\n                      chamfer.radius,\n                      chamfer.quality,\n                      chamfer.qualityMin,\n                      chamfer.qualityMax\n                    );\n                    delete options.chamfer;\n                  }\n                  return Body.create(Common.extend({}, rectangle, options));\n                };\n                Bodies.trapezoid = function(x, y, width, height, slope, options) {\n                  options = options || {};\n                  if (slope >= 1) {\n                    Common.warn("Bodies.trapezoid: slope parameter must be < 1.");\n                  }\n                  slope *= 0.5;\n                  var roof = (1 - slope * 2) * width;\n                  var x1 = width * slope, x2 = x1 + roof, x3 = x2 + x1, verticesPath;\n                  if (slope < 0.5) {\n                    verticesPath = "L 0 0 L " + x1 + " " + -height + " L " + x2 + " " + -height + " L " + x3 + " 0";\n                  } else {\n                    verticesPath = "L 0 0 L " + x2 + " " + -height + " L " + x3 + " 0";\n                  }\n                  var trapezoid = {\n                    label: "Trapezoid Body",\n                    position: { x, y },\n                    vertices: Vertices.fromPath(verticesPath)\n                  };\n                  if (options.chamfer) {\n                    var chamfer = options.chamfer;\n                    trapezoid.vertices = Vertices.chamfer(\n                      trapezoid.vertices,\n                      chamfer.radius,\n                      chamfer.quality,\n                      chamfer.qualityMin,\n                      chamfer.qualityMax\n                    );\n                    delete options.chamfer;\n                  }\n                  return Body.create(Common.extend({}, trapezoid, options));\n                };\n                Bodies.circle = function(x, y, radius, options, maxSides) {\n                  options = options || {};\n                  var circle = {\n                    label: "Circle Body",\n                    circleRadius: radius\n                  };\n                  maxSides = maxSides || 25;\n                  var sides = Math.ceil(Math.max(10, Math.min(maxSides, radius)));\n                  if (sides % 2 === 1)\n                    sides += 1;\n                  return Bodies.polygon(x, y, sides, radius, Common.extend({}, circle, options));\n                };\n                Bodies.polygon = function(x, y, sides, radius, options) {\n                  options = options || {};\n                  if (sides < 3)\n                    return Bodies.circle(x, y, radius, options);\n                  var theta = 2 * Math.PI / sides, path = "", offset = theta * 0.5;\n                  for (var i = 0; i < sides; i += 1) {\n                    var angle = offset + i * theta, xx = Math.cos(angle) * radius, yy = Math.sin(angle) * radius;\n                    path += "L " + xx.toFixed(3) + " " + yy.toFixed(3) + " ";\n                  }\n                  var polygon = {\n                    label: "Polygon Body",\n                    position: { x, y },\n                    vertices: Vertices.fromPath(path)\n                  };\n                  if (options.chamfer) {\n                    var chamfer = options.chamfer;\n                    polygon.vertices = Vertices.chamfer(\n                      polygon.vertices,\n                      chamfer.radius,\n                      chamfer.quality,\n                      chamfer.qualityMin,\n                      chamfer.qualityMax\n                    );\n                    delete options.chamfer;\n                  }\n                  return Body.create(Common.extend({}, polygon, options));\n                };\n                Bodies.fromVertices = function(x, y, vertexSets, options, flagInternal, removeCollinear, minimumArea, removeDuplicatePoints) {\n                  var decomp = Common.getDecomp(), canDecomp, body, parts, isConvex, isConcave, vertices, i, j, k, v, z;\n                  canDecomp = Boolean(decomp && decomp.quickDecomp);\n                  options = options || {};\n                  parts = [];\n                  flagInternal = typeof flagInternal !== "undefined" ? flagInternal : false;\n                  removeCollinear = typeof removeCollinear !== "undefined" ? removeCollinear : 0.01;\n                  minimumArea = typeof minimumArea !== "undefined" ? minimumArea : 10;\n                  removeDuplicatePoints = typeof removeDuplicatePoints !== "undefined" ? removeDuplicatePoints : 0.01;\n                  if (!Common.isArray(vertexSets[0])) {\n                    vertexSets = [vertexSets];\n                  }\n                  for (v = 0; v < vertexSets.length; v += 1) {\n                    vertices = vertexSets[v];\n                    isConvex = Vertices.isConvex(vertices);\n                    isConcave = !isConvex;\n                    if (isConcave && !canDecomp) {\n                      Common.warnOnce(\n                        "Bodies.fromVertices: Install the \'poly-decomp\' library and use Common.setDecomp or provide \'decomp\' as a global to decompose concave vertices."\n                      );\n                    }\n                    if (isConvex || !canDecomp) {\n                      if (isConvex) {\n                        vertices = Vertices.clockwiseSort(vertices);\n                      } else {\n                        vertices = Vertices.hull(vertices);\n                      }\n                      parts.push({\n                        position: { x, y },\n                        vertices\n                      });\n                    } else {\n                      var concave = vertices.map(function(vertex) {\n                        return [vertex.x, vertex.y];\n                      });\n                      decomp.makeCCW(concave);\n                      if (removeCollinear !== false)\n                        decomp.removeCollinearPoints(concave, removeCollinear);\n                      if (removeDuplicatePoints !== false && decomp.removeDuplicatePoints)\n                        decomp.removeDuplicatePoints(concave, removeDuplicatePoints);\n                      var decomposed = decomp.quickDecomp(concave);\n                      for (i = 0; i < decomposed.length; i++) {\n                        var chunk = decomposed[i];\n                        var chunkVertices = chunk.map(function(vertices2) {\n                          return {\n                            x: vertices2[0],\n                            y: vertices2[1]\n                          };\n                        });\n                        if (minimumArea > 0 && Vertices.area(chunkVertices) < minimumArea)\n                          continue;\n                        parts.push({\n                          position: Vertices.centre(chunkVertices),\n                          vertices: chunkVertices\n                        });\n                      }\n                    }\n                  }\n                  for (i = 0; i < parts.length; i++) {\n                    parts[i] = Body.create(Common.extend(parts[i], options));\n                  }\n                  if (flagInternal) {\n                    var coincident_max_dist = 5;\n                    for (i = 0; i < parts.length; i++) {\n                      var partA = parts[i];\n                      for (j = i + 1; j < parts.length; j++) {\n                        var partB = parts[j];\n                        if (Bounds.overlaps(partA.bounds, partB.bounds)) {\n                          var pav = partA.vertices, pbv = partB.vertices;\n                          for (k = 0; k < partA.vertices.length; k++) {\n                            for (z = 0; z < partB.vertices.length; z++) {\n                              var da = Vector.magnitudeSquared(Vector.sub(pav[(k + 1) % pav.length], pbv[z])), db = Vector.magnitudeSquared(Vector.sub(pav[k], pbv[(z + 1) % pbv.length]));\n                              if (da < coincident_max_dist && db < coincident_max_dist) {\n                                pav[k].isInternal = true;\n                                pbv[z].isInternal = true;\n                              }\n                            }\n                          }\n                        }\n                      }\n                    }\n                  }\n                  if (parts.length > 1) {\n                    body = Body.create(Common.extend({ parts: parts.slice(0) }, options));\n                    Body.setPosition(body, { x, y });\n                    return body;\n                  } else {\n                    return parts[0];\n                  }\n                };\n              })();\n            }),\n            /* 13 */\n            /***/\n            (function(module2, exports2, __webpack_require__) {\n              var Detector = {};\n              module2.exports = Detector;\n              var Common = __webpack_require__(0);\n              var Collision = __webpack_require__(8);\n              (function() {\n                Detector.create = function(options) {\n                  var defaults = {\n                    bodies: [],\n                    collisions: [],\n                    pairs: null\n                  };\n                  return Common.extend(defaults, options);\n                };\n                Detector.setBodies = function(detector, bodies) {\n                  detector.bodies = bodies.slice(0);\n                };\n                Detector.clear = function(detector) {\n                  detector.bodies = [];\n                  detector.collisions = [];\n                };\n                Detector.collisions = function(detector) {\n                  var pairs = detector.pairs, bodies = detector.bodies, bodiesLength = bodies.length, canCollide = Detector.canCollide, collides = Collision.collides, collisions = detector.collisions, collisionIndex = 0, i, j;\n                  bodies.sort(Detector._compareBoundsX);\n                  for (i = 0; i < bodiesLength; i++) {\n                    var bodyA = bodies[i], boundsA = bodyA.bounds, boundXMax = bodyA.bounds.max.x, boundYMax = bodyA.bounds.max.y, boundYMin = bodyA.bounds.min.y, bodyAStatic = bodyA.isStatic || bodyA.isSleeping, partsALength = bodyA.parts.length, partsASingle = partsALength === 1;\n                    for (j = i + 1; j < bodiesLength; j++) {\n                      var bodyB = bodies[j], boundsB = bodyB.bounds;\n                      if (boundsB.min.x > boundXMax) {\n                        break;\n                      }\n                      if (boundYMax < boundsB.min.y || boundYMin > boundsB.max.y) {\n                        continue;\n                      }\n                      if (bodyAStatic && (bodyB.isStatic || bodyB.isSleeping)) {\n                        continue;\n                      }\n                      if (!canCollide(bodyA.collisionFilter, bodyB.collisionFilter)) {\n                        continue;\n                      }\n                      var partsBLength = bodyB.parts.length;\n                      if (partsASingle && partsBLength === 1) {\n                        var collision = collides(bodyA, bodyB, pairs);\n                        if (collision) {\n                          collisions[collisionIndex++] = collision;\n                        }\n                      } else {\n                        var partsAStart = partsALength > 1 ? 1 : 0, partsBStart = partsBLength > 1 ? 1 : 0;\n                        for (var k = partsAStart; k < partsALength; k++) {\n                          var partA = bodyA.parts[k], boundsA = partA.bounds;\n                          for (var z = partsBStart; z < partsBLength; z++) {\n                            var partB = bodyB.parts[z], boundsB = partB.bounds;\n                            if (boundsA.min.x > boundsB.max.x || boundsA.max.x < boundsB.min.x || boundsA.max.y < boundsB.min.y || boundsA.min.y > boundsB.max.y) {\n                              continue;\n                            }\n                            var collision = collides(partA, partB, pairs);\n                            if (collision) {\n                              collisions[collisionIndex++] = collision;\n                            }\n                          }\n                        }\n                      }\n                    }\n                  }\n                  if (collisions.length !== collisionIndex) {\n                    collisions.length = collisionIndex;\n                  }\n                  return collisions;\n                };\n                Detector.canCollide = function(filterA, filterB) {\n                  if (filterA.group === filterB.group && filterA.group !== 0)\n                    return filterA.group > 0;\n                  return (filterA.mask & filterB.category) !== 0 && (filterB.mask & filterA.category) !== 0;\n                };\n                Detector._compareBoundsX = function(bodyA, bodyB) {\n                  return bodyA.bounds.min.x - bodyB.bounds.min.x;\n                };\n              })();\n            }),\n            /* 14 */\n            /***/\n            (function(module2, exports2, __webpack_require__) {\n              var Mouse = {};\n              module2.exports = Mouse;\n              var Common = __webpack_require__(0);\n              (function() {\n                Mouse.create = function(element) {\n                  var mouse = {};\n                  if (!element) {\n                    Common.log("Mouse.create: element was undefined, defaulting to document.body", "warn");\n                  }\n                  mouse.element = element || document.body;\n                  mouse.absolute = { x: 0, y: 0 };\n                  mouse.position = { x: 0, y: 0 };\n                  mouse.mousedownPosition = { x: 0, y: 0 };\n                  mouse.mouseupPosition = { x: 0, y: 0 };\n                  mouse.offset = { x: 0, y: 0 };\n                  mouse.scale = { x: 1, y: 1 };\n                  mouse.wheelDelta = 0;\n                  mouse.button = -1;\n                  mouse.pixelRatio = parseInt(mouse.element.getAttribute("data-pixel-ratio"), 10) || 1;\n                  mouse.sourceEvents = {\n                    mousemove: null,\n                    mousedown: null,\n                    mouseup: null,\n                    mousewheel: null\n                  };\n                  mouse.mousemove = function(event) {\n                    var position = Mouse._getRelativeMousePosition(event, mouse.element, mouse.pixelRatio), touches = event.changedTouches;\n                    if (touches) {\n                      mouse.button = 0;\n                      event.preventDefault();\n                    }\n                    mouse.absolute.x = position.x;\n                    mouse.absolute.y = position.y;\n                    mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;\n                    mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;\n                    mouse.sourceEvents.mousemove = event;\n                  };\n                  mouse.mousedown = function(event) {\n                    var position = Mouse._getRelativeMousePosition(event, mouse.element, mouse.pixelRatio), touches = event.changedTouches;\n                    if (touches) {\n                      mouse.button = 0;\n                      event.preventDefault();\n                    } else {\n                      mouse.button = event.button;\n                    }\n                    mouse.absolute.x = position.x;\n                    mouse.absolute.y = position.y;\n                    mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;\n                    mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;\n                    mouse.mousedownPosition.x = mouse.position.x;\n                    mouse.mousedownPosition.y = mouse.position.y;\n                    mouse.sourceEvents.mousedown = event;\n                  };\n                  mouse.mouseup = function(event) {\n                    var position = Mouse._getRelativeMousePosition(event, mouse.element, mouse.pixelRatio), touches = event.changedTouches;\n                    if (touches) {\n                      event.preventDefault();\n                    }\n                    mouse.button = -1;\n                    mouse.absolute.x = position.x;\n                    mouse.absolute.y = position.y;\n                    mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;\n                    mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;\n                    mouse.mouseupPosition.x = mouse.position.x;\n                    mouse.mouseupPosition.y = mouse.position.y;\n                    mouse.sourceEvents.mouseup = event;\n                  };\n                  mouse.mousewheel = function(event) {\n                    mouse.wheelDelta = Math.max(-1, Math.min(1, event.wheelDelta || -event.detail));\n                    event.preventDefault();\n                    mouse.sourceEvents.mousewheel = event;\n                  };\n                  Mouse.setElement(mouse, mouse.element);\n                  return mouse;\n                };\n                Mouse.setElement = function(mouse, element) {\n                  mouse.element = element;\n                  element.addEventListener("mousemove", mouse.mousemove, { passive: true });\n                  element.addEventListener("mousedown", mouse.mousedown, { passive: true });\n                  element.addEventListener("mouseup", mouse.mouseup, { passive: true });\n                  element.addEventListener("wheel", mouse.mousewheel, { passive: false });\n                  element.addEventListener("touchmove", mouse.mousemove, { passive: false });\n                  element.addEventListener("touchstart", mouse.mousedown, { passive: false });\n                  element.addEventListener("touchend", mouse.mouseup, { passive: false });\n                };\n                Mouse.clearSourceEvents = function(mouse) {\n                  mouse.sourceEvents.mousemove = null;\n                  mouse.sourceEvents.mousedown = null;\n                  mouse.sourceEvents.mouseup = null;\n                  mouse.sourceEvents.mousewheel = null;\n                  mouse.wheelDelta = 0;\n                };\n                Mouse.setOffset = function(mouse, offset) {\n                  mouse.offset.x = offset.x;\n                  mouse.offset.y = offset.y;\n                  mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;\n                  mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;\n                };\n                Mouse.setScale = function(mouse, scale) {\n                  mouse.scale.x = scale.x;\n                  mouse.scale.y = scale.y;\n                  mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;\n                  mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;\n                };\n                Mouse._getRelativeMousePosition = function(event, element, pixelRatio) {\n                  var elementBounds = element.getBoundingClientRect(), rootNode = document.documentElement || document.body.parentNode || document.body, scrollX = window.pageXOffset !== void 0 ? window.pageXOffset : rootNode.scrollLeft, scrollY = window.pageYOffset !== void 0 ? window.pageYOffset : rootNode.scrollTop, touches = event.changedTouches, x, y;\n                  if (touches) {\n                    x = touches[0].pageX - elementBounds.left - scrollX;\n                    y = touches[0].pageY - elementBounds.top - scrollY;\n                  } else {\n                    x = event.pageX - elementBounds.left - scrollX;\n                    y = event.pageY - elementBounds.top - scrollY;\n                  }\n                  return {\n                    x: x / (element.clientWidth / (element.width || element.clientWidth) * pixelRatio),\n                    y: y / (element.clientHeight / (element.height || element.clientHeight) * pixelRatio)\n                  };\n                };\n              })();\n            }),\n            /* 15 */\n            /***/\n            (function(module2, exports2, __webpack_require__) {\n              var Plugin = {};\n              module2.exports = Plugin;\n              var Common = __webpack_require__(0);\n              (function() {\n                Plugin._registry = {};\n                Plugin.register = function(plugin) {\n                  if (!Plugin.isPlugin(plugin)) {\n                    Common.warn("Plugin.register:", Plugin.toString(plugin), "does not implement all required fields.");\n                  }\n                  if (plugin.name in Plugin._registry) {\n                    var registered = Plugin._registry[plugin.name], pluginVersion = Plugin.versionParse(plugin.version).number, registeredVersion = Plugin.versionParse(registered.version).number;\n                    if (pluginVersion > registeredVersion) {\n                      Common.warn("Plugin.register:", Plugin.toString(registered), "was upgraded to", Plugin.toString(plugin));\n                      Plugin._registry[plugin.name] = plugin;\n                    } else if (pluginVersion < registeredVersion) {\n                      Common.warn("Plugin.register:", Plugin.toString(registered), "can not be downgraded to", Plugin.toString(plugin));\n                    } else if (plugin !== registered) {\n                      Common.warn("Plugin.register:", Plugin.toString(plugin), "is already registered to different plugin object");\n                    }\n                  } else {\n                    Plugin._registry[plugin.name] = plugin;\n                  }\n                  return plugin;\n                };\n                Plugin.resolve = function(dependency) {\n                  return Plugin._registry[Plugin.dependencyParse(dependency).name];\n                };\n                Plugin.toString = function(plugin) {\n                  return typeof plugin === "string" ? plugin : (plugin.name || "anonymous") + "@" + (plugin.version || plugin.range || "0.0.0");\n                };\n                Plugin.isPlugin = function(obj) {\n                  return obj && obj.name && obj.version && obj.install;\n                };\n                Plugin.isUsed = function(module3, name) {\n                  return module3.used.indexOf(name) > -1;\n                };\n                Plugin.isFor = function(plugin, module3) {\n                  var parsed = plugin.for && Plugin.dependencyParse(plugin.for);\n                  return !plugin.for || module3.name === parsed.name && Plugin.versionSatisfies(module3.version, parsed.range);\n                };\n                Plugin.use = function(module3, plugins) {\n                  module3.uses = (module3.uses || []).concat(plugins || []);\n                  if (module3.uses.length === 0) {\n                    Common.warn("Plugin.use:", Plugin.toString(module3), "does not specify any dependencies to install.");\n                    return;\n                  }\n                  var dependencies = Plugin.dependencies(module3), sortedDependencies = Common.topologicalSort(dependencies), status = [];\n                  for (var i = 0; i < sortedDependencies.length; i += 1) {\n                    if (sortedDependencies[i] === module3.name) {\n                      continue;\n                    }\n                    var plugin = Plugin.resolve(sortedDependencies[i]);\n                    if (!plugin) {\n                      status.push("\\u274C " + sortedDependencies[i]);\n                      continue;\n                    }\n                    if (Plugin.isUsed(module3, plugin.name)) {\n                      continue;\n                    }\n                    if (!Plugin.isFor(plugin, module3)) {\n                      Common.warn("Plugin.use:", Plugin.toString(plugin), "is for", plugin.for, "but installed on", Plugin.toString(module3) + ".");\n                      plugin._warned = true;\n                    }\n                    if (plugin.install) {\n                      plugin.install(module3);\n                    } else {\n                      Common.warn("Plugin.use:", Plugin.toString(plugin), "does not specify an install function.");\n                      plugin._warned = true;\n                    }\n                    if (plugin._warned) {\n                      status.push("\\u{1F536} " + Plugin.toString(plugin));\n                      delete plugin._warned;\n                    } else {\n                      status.push("\\u2705 " + Plugin.toString(plugin));\n                    }\n                    module3.used.push(plugin.name);\n                  }\n                  if (status.length > 0) {\n                    Common.info(status.join("  "));\n                  }\n                };\n                Plugin.dependencies = function(module3, tracked) {\n                  var parsedBase = Plugin.dependencyParse(module3), name = parsedBase.name;\n                  tracked = tracked || {};\n                  if (name in tracked) {\n                    return;\n                  }\n                  module3 = Plugin.resolve(module3) || module3;\n                  tracked[name] = Common.map(module3.uses || [], function(dependency) {\n                    if (Plugin.isPlugin(dependency)) {\n                      Plugin.register(dependency);\n                    }\n                    var parsed = Plugin.dependencyParse(dependency), resolved = Plugin.resolve(dependency);\n                    if (resolved && !Plugin.versionSatisfies(resolved.version, parsed.range)) {\n                      Common.warn(\n                        "Plugin.dependencies:",\n                        Plugin.toString(resolved),\n                        "does not satisfy",\n                        Plugin.toString(parsed),\n                        "used by",\n                        Plugin.toString(parsedBase) + "."\n                      );\n                      resolved._warned = true;\n                      module3._warned = true;\n                    } else if (!resolved) {\n                      Common.warn(\n                        "Plugin.dependencies:",\n                        Plugin.toString(dependency),\n                        "used by",\n                        Plugin.toString(parsedBase),\n                        "could not be resolved."\n                      );\n                      module3._warned = true;\n                    }\n                    return parsed.name;\n                  });\n                  for (var i = 0; i < tracked[name].length; i += 1) {\n                    Plugin.dependencies(tracked[name][i], tracked);\n                  }\n                  return tracked;\n                };\n                Plugin.dependencyParse = function(dependency) {\n                  if (Common.isString(dependency)) {\n                    var pattern = /^[\\w-]+(@(\\*|[\\^~]?\\d+\\.\\d+\\.\\d+(-[0-9A-Za-z-+]+)?))?$/;\n                    if (!pattern.test(dependency)) {\n                      Common.warn("Plugin.dependencyParse:", dependency, "is not a valid dependency string.");\n                    }\n                    return {\n                      name: dependency.split("@")[0],\n                      range: dependency.split("@")[1] || "*"\n                    };\n                  }\n                  return {\n                    name: dependency.name,\n                    range: dependency.range || dependency.version\n                  };\n                };\n                Plugin.versionParse = function(range) {\n                  var pattern = /^(\\*)|(\\^|~|>=|>)?\\s*((\\d+)\\.(\\d+)\\.(\\d+))(-[0-9A-Za-z-+]+)?$/;\n                  if (!pattern.test(range)) {\n                    Common.warn("Plugin.versionParse:", range, "is not a valid version or range.");\n                  }\n                  var parts = pattern.exec(range);\n                  var major = Number(parts[4]);\n                  var minor = Number(parts[5]);\n                  var patch = Number(parts[6]);\n                  return {\n                    isRange: Boolean(parts[1] || parts[2]),\n                    version: parts[3],\n                    range,\n                    operator: parts[1] || parts[2] || "",\n                    major,\n                    minor,\n                    patch,\n                    parts: [major, minor, patch],\n                    prerelease: parts[7],\n                    number: major * 1e8 + minor * 1e4 + patch\n                  };\n                };\n                Plugin.versionSatisfies = function(version, range) {\n                  range = range || "*";\n                  var r = Plugin.versionParse(range), v = Plugin.versionParse(version);\n                  if (r.isRange) {\n                    if (r.operator === "*" || version === "*") {\n                      return true;\n                    }\n                    if (r.operator === ">") {\n                      return v.number > r.number;\n                    }\n                    if (r.operator === ">=") {\n                      return v.number >= r.number;\n                    }\n                    if (r.operator === "~") {\n                      return v.major === r.major && v.minor === r.minor && v.patch >= r.patch;\n                    }\n                    if (r.operator === "^") {\n                      if (r.major > 0) {\n                        return v.major === r.major && v.number >= r.number;\n                      }\n                      if (r.minor > 0) {\n                        return v.minor === r.minor && v.patch >= r.patch;\n                      }\n                      return v.patch === r.patch;\n                    }\n                  }\n                  return version === range || version === "*";\n                };\n              })();\n            }),\n            /* 16 */\n            /***/\n            (function(module2, exports2) {\n              var Contact = {};\n              module2.exports = Contact;\n              (function() {\n                Contact.create = function(vertex) {\n                  return {\n                    vertex,\n                    normalImpulse: 0,\n                    tangentImpulse: 0\n                  };\n                };\n              })();\n            }),\n            /* 17 */\n            /***/\n            (function(module2, exports2, __webpack_require__) {\n              var Engine = {};\n              module2.exports = Engine;\n              var Sleeping = __webpack_require__(7);\n              var Resolver = __webpack_require__(18);\n              var Detector = __webpack_require__(13);\n              var Pairs = __webpack_require__(19);\n              var Events = __webpack_require__(5);\n              var Composite = __webpack_require__(6);\n              var Constraint = __webpack_require__(10);\n              var Common = __webpack_require__(0);\n              var Body = __webpack_require__(4);\n              (function() {\n                Engine._deltaMax = 1e3 / 60;\n                Engine.create = function(options) {\n                  options = options || {};\n                  var defaults = {\n                    positionIterations: 6,\n                    velocityIterations: 4,\n                    constraintIterations: 2,\n                    enableSleeping: false,\n                    events: [],\n                    plugin: {},\n                    gravity: {\n                      x: 0,\n                      y: 1,\n                      scale: 1e-3\n                    },\n                    timing: {\n                      timestamp: 0,\n                      timeScale: 1,\n                      lastDelta: 0,\n                      lastElapsed: 0,\n                      lastUpdatesPerFrame: 0\n                    }\n                  };\n                  var engine = Common.extend(defaults, options);\n                  engine.world = options.world || Composite.create({ label: "World" });\n                  engine.pairs = options.pairs || Pairs.create();\n                  engine.detector = options.detector || Detector.create();\n                  engine.detector.pairs = engine.pairs;\n                  engine.grid = { buckets: [] };\n                  engine.world.gravity = engine.gravity;\n                  engine.broadphase = engine.grid;\n                  engine.metrics = {};\n                  return engine;\n                };\n                Engine.update = function(engine, delta) {\n                  var startTime = Common.now();\n                  var world = engine.world, detector = engine.detector, pairs = engine.pairs, timing = engine.timing, timestamp = timing.timestamp, i;\n                  if (delta > Engine._deltaMax) {\n                    Common.warnOnce(\n                      "Matter.Engine.update: delta argument is recommended to be less than or equal to",\n                      Engine._deltaMax.toFixed(3),\n                      "ms."\n                    );\n                  }\n                  delta = typeof delta !== "undefined" ? delta : Common._baseDelta;\n                  delta *= timing.timeScale;\n                  timing.timestamp += delta;\n                  timing.lastDelta = delta;\n                  var event = {\n                    timestamp: timing.timestamp,\n                    delta\n                  };\n                  Events.trigger(engine, "beforeUpdate", event);\n                  var allBodies = Composite.allBodies(world), allConstraints = Composite.allConstraints(world);\n                  if (world.isModified) {\n                    Detector.setBodies(detector, allBodies);\n                    Composite.setModified(world, false, false, true);\n                  }\n                  if (engine.enableSleeping)\n                    Sleeping.update(allBodies, delta);\n                  Engine._bodiesApplyGravity(allBodies, engine.gravity);\n                  if (delta > 0) {\n                    Engine._bodiesUpdate(allBodies, delta);\n                  }\n                  Events.trigger(engine, "beforeSolve", event);\n                  Constraint.preSolveAll(allBodies);\n                  for (i = 0; i < engine.constraintIterations; i++) {\n                    Constraint.solveAll(allConstraints, delta);\n                  }\n                  Constraint.postSolveAll(allBodies);\n                  var collisions = Detector.collisions(detector);\n                  Pairs.update(pairs, collisions, timestamp);\n                  if (engine.enableSleeping)\n                    Sleeping.afterCollisions(pairs.list);\n                  if (pairs.collisionStart.length > 0) {\n                    Events.trigger(engine, "collisionStart", {\n                      pairs: pairs.collisionStart,\n                      timestamp: timing.timestamp,\n                      delta\n                    });\n                  }\n                  var positionDamping = Common.clamp(20 / engine.positionIterations, 0, 1);\n                  Resolver.preSolvePosition(pairs.list);\n                  for (i = 0; i < engine.positionIterations; i++) {\n                    Resolver.solvePosition(pairs.list, delta, positionDamping);\n                  }\n                  Resolver.postSolvePosition(allBodies);\n                  Constraint.preSolveAll(allBodies);\n                  for (i = 0; i < engine.constraintIterations; i++) {\n                    Constraint.solveAll(allConstraints, delta);\n                  }\n                  Constraint.postSolveAll(allBodies);\n                  Resolver.preSolveVelocity(pairs.list);\n                  for (i = 0; i < engine.velocityIterations; i++) {\n                    Resolver.solveVelocity(pairs.list, delta);\n                  }\n                  Engine._bodiesUpdateVelocities(allBodies);\n                  if (pairs.collisionActive.length > 0) {\n                    Events.trigger(engine, "collisionActive", {\n                      pairs: pairs.collisionActive,\n                      timestamp: timing.timestamp,\n                      delta\n                    });\n                  }\n                  if (pairs.collisionEnd.length > 0) {\n                    Events.trigger(engine, "collisionEnd", {\n                      pairs: pairs.collisionEnd,\n                      timestamp: timing.timestamp,\n                      delta\n                    });\n                  }\n                  Engine._bodiesClearForces(allBodies);\n                  Events.trigger(engine, "afterUpdate", event);\n                  engine.timing.lastElapsed = Common.now() - startTime;\n                  return engine;\n                };\n                Engine.merge = function(engineA, engineB) {\n                  Common.extend(engineA, engineB);\n                  if (engineB.world) {\n                    engineA.world = engineB.world;\n                    Engine.clear(engineA);\n                    var bodies = Composite.allBodies(engineA.world);\n                    for (var i = 0; i < bodies.length; i++) {\n                      var body = bodies[i];\n                      Sleeping.set(body, false);\n                      body.id = Common.nextId();\n                    }\n                  }\n                };\n                Engine.clear = function(engine) {\n                  Pairs.clear(engine.pairs);\n                  Detector.clear(engine.detector);\n                };\n                Engine._bodiesClearForces = function(bodies) {\n                  var bodiesLength = bodies.length;\n                  for (var i = 0; i < bodiesLength; i++) {\n                    var body = bodies[i];\n                    body.force.x = 0;\n                    body.force.y = 0;\n                    body.torque = 0;\n                  }\n                };\n                Engine._bodiesApplyGravity = function(bodies, gravity) {\n                  var gravityScale = typeof gravity.scale !== "undefined" ? gravity.scale : 1e-3, bodiesLength = bodies.length;\n                  if (gravity.x === 0 && gravity.y === 0 || gravityScale === 0) {\n                    return;\n                  }\n                  for (var i = 0; i < bodiesLength; i++) {\n                    var body = bodies[i];\n                    if (body.isStatic || body.isSleeping)\n                      continue;\n                    body.force.y += body.mass * gravity.y * gravityScale;\n                    body.force.x += body.mass * gravity.x * gravityScale;\n                  }\n                };\n                Engine._bodiesUpdate = function(bodies, delta) {\n                  var bodiesLength = bodies.length;\n                  for (var i = 0; i < bodiesLength; i++) {\n                    var body = bodies[i];\n                    if (body.isStatic || body.isSleeping)\n                      continue;\n                    Body.update(body, delta);\n                  }\n                };\n                Engine._bodiesUpdateVelocities = function(bodies) {\n                  var bodiesLength = bodies.length;\n                  for (var i = 0; i < bodiesLength; i++) {\n                    Body.updateVelocities(bodies[i]);\n                  }\n                };\n              })();\n            }),\n            /* 18 */\n            /***/\n            (function(module2, exports2, __webpack_require__) {\n              var Resolver = {};\n              module2.exports = Resolver;\n              var Vertices = __webpack_require__(3);\n              var Common = __webpack_require__(0);\n              var Bounds = __webpack_require__(1);\n              (function() {\n                Resolver._restingThresh = 2;\n                Resolver._restingThreshTangent = Math.sqrt(6);\n                Resolver._positionDampen = 0.9;\n                Resolver._positionWarming = 0.8;\n                Resolver._frictionNormalMultiplier = 5;\n                Resolver._frictionMaxStatic = Number.MAX_VALUE;\n                Resolver.preSolvePosition = function(pairs) {\n                  var i, pair, contactCount, pairsLength = pairs.length;\n                  for (i = 0; i < pairsLength; i++) {\n                    pair = pairs[i];\n                    if (!pair.isActive)\n                      continue;\n                    contactCount = pair.contactCount;\n                    pair.collision.parentA.totalContacts += contactCount;\n                    pair.collision.parentB.totalContacts += contactCount;\n                  }\n                };\n                Resolver.solvePosition = function(pairs, delta, damping) {\n                  var i, pair, collision, bodyA, bodyB, normal, contactShare, positionImpulse, positionDampen = Resolver._positionDampen * (damping || 1), slopDampen = Common.clamp(delta / Common._baseDelta, 0, 1), pairsLength = pairs.length;\n                  for (i = 0; i < pairsLength; i++) {\n                    pair = pairs[i];\n                    if (!pair.isActive || pair.isSensor)\n                      continue;\n                    collision = pair.collision;\n                    bodyA = collision.parentA;\n                    bodyB = collision.parentB;\n                    normal = collision.normal;\n                    pair.separation = collision.depth + normal.x * (bodyB.positionImpulse.x - bodyA.positionImpulse.x) + normal.y * (bodyB.positionImpulse.y - bodyA.positionImpulse.y);\n                  }\n                  for (i = 0; i < pairsLength; i++) {\n                    pair = pairs[i];\n                    if (!pair.isActive || pair.isSensor)\n                      continue;\n                    collision = pair.collision;\n                    bodyA = collision.parentA;\n                    bodyB = collision.parentB;\n                    normal = collision.normal;\n                    positionImpulse = pair.separation - pair.slop * slopDampen;\n                    if (bodyA.isStatic || bodyB.isStatic)\n                      positionImpulse *= 2;\n                    if (!(bodyA.isStatic || bodyA.isSleeping)) {\n                      contactShare = positionDampen / bodyA.totalContacts;\n                      bodyA.positionImpulse.x += normal.x * positionImpulse * contactShare;\n                      bodyA.positionImpulse.y += normal.y * positionImpulse * contactShare;\n                    }\n                    if (!(bodyB.isStatic || bodyB.isSleeping)) {\n                      contactShare = positionDampen / bodyB.totalContacts;\n                      bodyB.positionImpulse.x -= normal.x * positionImpulse * contactShare;\n                      bodyB.positionImpulse.y -= normal.y * positionImpulse * contactShare;\n                    }\n                  }\n                };\n                Resolver.postSolvePosition = function(bodies) {\n                  var positionWarming = Resolver._positionWarming, bodiesLength = bodies.length, verticesTranslate = Vertices.translate, boundsUpdate = Bounds.update;\n                  for (var i = 0; i < bodiesLength; i++) {\n                    var body = bodies[i], positionImpulse = body.positionImpulse, positionImpulseX = positionImpulse.x, positionImpulseY = positionImpulse.y, velocity = body.velocity;\n                    body.totalContacts = 0;\n                    if (positionImpulseX !== 0 || positionImpulseY !== 0) {\n                      for (var j = 0; j < body.parts.length; j++) {\n                        var part = body.parts[j];\n                        verticesTranslate(part.vertices, positionImpulse);\n                        boundsUpdate(part.bounds, part.vertices, velocity);\n                        part.position.x += positionImpulseX;\n                        part.position.y += positionImpulseY;\n                      }\n                      body.positionPrev.x += positionImpulseX;\n                      body.positionPrev.y += positionImpulseY;\n                      if (positionImpulseX * velocity.x + positionImpulseY * velocity.y < 0) {\n                        positionImpulse.x = 0;\n                        positionImpulse.y = 0;\n                      } else {\n                        positionImpulse.x *= positionWarming;\n                        positionImpulse.y *= positionWarming;\n                      }\n                    }\n                  }\n                };\n                Resolver.preSolveVelocity = function(pairs) {\n                  var pairsLength = pairs.length, i, j;\n                  for (i = 0; i < pairsLength; i++) {\n                    var pair = pairs[i];\n                    if (!pair.isActive || pair.isSensor)\n                      continue;\n                    var contacts = pair.contacts, contactCount = pair.contactCount, collision = pair.collision, bodyA = collision.parentA, bodyB = collision.parentB, normal = collision.normal, tangent = collision.tangent;\n                    for (j = 0; j < contactCount; j++) {\n                      var contact = contacts[j], contactVertex = contact.vertex, normalImpulse = contact.normalImpulse, tangentImpulse = contact.tangentImpulse;\n                      if (normalImpulse !== 0 || tangentImpulse !== 0) {\n                        var impulseX = normal.x * normalImpulse + tangent.x * tangentImpulse, impulseY = normal.y * normalImpulse + tangent.y * tangentImpulse;\n                        if (!(bodyA.isStatic || bodyA.isSleeping)) {\n                          bodyA.positionPrev.x += impulseX * bodyA.inverseMass;\n                          bodyA.positionPrev.y += impulseY * bodyA.inverseMass;\n                          bodyA.anglePrev += bodyA.inverseInertia * ((contactVertex.x - bodyA.position.x) * impulseY - (contactVertex.y - bodyA.position.y) * impulseX);\n                        }\n                        if (!(bodyB.isStatic || bodyB.isSleeping)) {\n                          bodyB.positionPrev.x -= impulseX * bodyB.inverseMass;\n                          bodyB.positionPrev.y -= impulseY * bodyB.inverseMass;\n                          bodyB.anglePrev -= bodyB.inverseInertia * ((contactVertex.x - bodyB.position.x) * impulseY - (contactVertex.y - bodyB.position.y) * impulseX);\n                        }\n                      }\n                    }\n                  }\n                };\n                Resolver.solveVelocity = function(pairs, delta) {\n                  var timeScale = delta / Common._baseDelta, timeScaleSquared = timeScale * timeScale, timeScaleCubed = timeScaleSquared * timeScale, restingThresh = -Resolver._restingThresh * timeScale, restingThreshTangent = Resolver._restingThreshTangent, frictionNormalMultiplier = Resolver._frictionNormalMultiplier * timeScale, frictionMaxStatic = Resolver._frictionMaxStatic, pairsLength = pairs.length, tangentImpulse, maxFriction, i, j;\n                  for (i = 0; i < pairsLength; i++) {\n                    var pair = pairs[i];\n                    if (!pair.isActive || pair.isSensor)\n                      continue;\n                    var collision = pair.collision, bodyA = collision.parentA, bodyB = collision.parentB, normalX = collision.normal.x, normalY = collision.normal.y, tangentX = collision.tangent.x, tangentY = collision.tangent.y, inverseMassTotal = pair.inverseMass, friction = pair.friction * pair.frictionStatic * frictionNormalMultiplier, contacts = pair.contacts, contactCount = pair.contactCount, contactShare = 1 / contactCount;\n                    var bodyAVelocityX = bodyA.position.x - bodyA.positionPrev.x, bodyAVelocityY = bodyA.position.y - bodyA.positionPrev.y, bodyAAngularVelocity = bodyA.angle - bodyA.anglePrev, bodyBVelocityX = bodyB.position.x - bodyB.positionPrev.x, bodyBVelocityY = bodyB.position.y - bodyB.positionPrev.y, bodyBAngularVelocity = bodyB.angle - bodyB.anglePrev;\n                    for (j = 0; j < contactCount; j++) {\n                      var contact = contacts[j], contactVertex = contact.vertex;\n                      var offsetAX = contactVertex.x - bodyA.position.x, offsetAY = contactVertex.y - bodyA.position.y, offsetBX = contactVertex.x - bodyB.position.x, offsetBY = contactVertex.y - bodyB.position.y;\n                      var velocityPointAX = bodyAVelocityX - offsetAY * bodyAAngularVelocity, velocityPointAY = bodyAVelocityY + offsetAX * bodyAAngularVelocity, velocityPointBX = bodyBVelocityX - offsetBY * bodyBAngularVelocity, velocityPointBY = bodyBVelocityY + offsetBX * bodyBAngularVelocity;\n                      var relativeVelocityX = velocityPointAX - velocityPointBX, relativeVelocityY = velocityPointAY - velocityPointBY;\n                      var normalVelocity = normalX * relativeVelocityX + normalY * relativeVelocityY, tangentVelocity = tangentX * relativeVelocityX + tangentY * relativeVelocityY;\n                      var normalOverlap = pair.separation + normalVelocity;\n                      var normalForce = Math.min(normalOverlap, 1);\n                      normalForce = normalOverlap < 0 ? 0 : normalForce;\n                      var frictionLimit = normalForce * friction;\n                      if (tangentVelocity < -frictionLimit || tangentVelocity > frictionLimit) {\n                        maxFriction = tangentVelocity > 0 ? tangentVelocity : -tangentVelocity;\n                        tangentImpulse = pair.friction * (tangentVelocity > 0 ? 1 : -1) * timeScaleCubed;\n                        if (tangentImpulse < -maxFriction) {\n                          tangentImpulse = -maxFriction;\n                        } else if (tangentImpulse > maxFriction) {\n                          tangentImpulse = maxFriction;\n                        }\n                      } else {\n                        tangentImpulse = tangentVelocity;\n                        maxFriction = frictionMaxStatic;\n                      }\n                      var oAcN = offsetAX * normalY - offsetAY * normalX, oBcN = offsetBX * normalY - offsetBY * normalX, share = contactShare / (inverseMassTotal + bodyA.inverseInertia * oAcN * oAcN + bodyB.inverseInertia * oBcN * oBcN);\n                      var normalImpulse = (1 + pair.restitution) * normalVelocity * share;\n                      tangentImpulse *= share;\n                      if (normalVelocity < restingThresh) {\n                        contact.normalImpulse = 0;\n                      } else {\n                        var contactNormalImpulse = contact.normalImpulse;\n                        contact.normalImpulse += normalImpulse;\n                        if (contact.normalImpulse > 0) contact.normalImpulse = 0;\n                        normalImpulse = contact.normalImpulse - contactNormalImpulse;\n                      }\n                      if (tangentVelocity < -restingThreshTangent || tangentVelocity > restingThreshTangent) {\n                        contact.tangentImpulse = 0;\n                      } else {\n                        var contactTangentImpulse = contact.tangentImpulse;\n                        contact.tangentImpulse += tangentImpulse;\n                        if (contact.tangentImpulse < -maxFriction) contact.tangentImpulse = -maxFriction;\n                        if (contact.tangentImpulse > maxFriction) contact.tangentImpulse = maxFriction;\n                        tangentImpulse = contact.tangentImpulse - contactTangentImpulse;\n                      }\n                      var impulseX = normalX * normalImpulse + tangentX * tangentImpulse, impulseY = normalY * normalImpulse + tangentY * tangentImpulse;\n                      if (!(bodyA.isStatic || bodyA.isSleeping)) {\n                        bodyA.positionPrev.x += impulseX * bodyA.inverseMass;\n                        bodyA.positionPrev.y += impulseY * bodyA.inverseMass;\n                        bodyA.anglePrev += (offsetAX * impulseY - offsetAY * impulseX) * bodyA.inverseInertia;\n                      }\n                      if (!(bodyB.isStatic || bodyB.isSleeping)) {\n                        bodyB.positionPrev.x -= impulseX * bodyB.inverseMass;\n                        bodyB.positionPrev.y -= impulseY * bodyB.inverseMass;\n                        bodyB.anglePrev -= (offsetBX * impulseY - offsetBY * impulseX) * bodyB.inverseInertia;\n                      }\n                    }\n                  }\n                };\n              })();\n            }),\n            /* 19 */\n            /***/\n            (function(module2, exports2, __webpack_require__) {\n              var Pairs = {};\n              module2.exports = Pairs;\n              var Pair = __webpack_require__(9);\n              var Common = __webpack_require__(0);\n              (function() {\n                Pairs.create = function(options) {\n                  return Common.extend({\n                    table: {},\n                    list: [],\n                    collisionStart: [],\n                    collisionActive: [],\n                    collisionEnd: []\n                  }, options);\n                };\n                Pairs.update = function(pairs, collisions, timestamp) {\n                  var pairUpdate = Pair.update, pairCreate = Pair.create, pairSetActive = Pair.setActive, pairsTable = pairs.table, pairsList = pairs.list, pairsListLength = pairsList.length, pairsListIndex = pairsListLength, collisionStart = pairs.collisionStart, collisionEnd = pairs.collisionEnd, collisionActive = pairs.collisionActive, collisionsLength = collisions.length, collisionStartIndex = 0, collisionEndIndex = 0, collisionActiveIndex = 0, collision, pair, i;\n                  for (i = 0; i < collisionsLength; i++) {\n                    collision = collisions[i];\n                    pair = collision.pair;\n                    if (pair) {\n                      if (pair.isActive) {\n                        collisionActive[collisionActiveIndex++] = pair;\n                      }\n                      pairUpdate(pair, collision, timestamp);\n                    } else {\n                      pair = pairCreate(collision, timestamp);\n                      pairsTable[pair.id] = pair;\n                      collisionStart[collisionStartIndex++] = pair;\n                      pairsList[pairsListIndex++] = pair;\n                    }\n                  }\n                  pairsListIndex = 0;\n                  pairsListLength = pairsList.length;\n                  for (i = 0; i < pairsListLength; i++) {\n                    pair = pairsList[i];\n                    if (pair.timeUpdated >= timestamp) {\n                      pairsList[pairsListIndex++] = pair;\n                    } else {\n                      pairSetActive(pair, false, timestamp);\n                      if (pair.collision.bodyA.sleepCounter > 0 && pair.collision.bodyB.sleepCounter > 0) {\n                        pairsList[pairsListIndex++] = pair;\n                      } else {\n                        collisionEnd[collisionEndIndex++] = pair;\n                        delete pairsTable[pair.id];\n                      }\n                    }\n                  }\n                  if (pairsList.length !== pairsListIndex) {\n                    pairsList.length = pairsListIndex;\n                  }\n                  if (collisionStart.length !== collisionStartIndex) {\n                    collisionStart.length = collisionStartIndex;\n                  }\n                  if (collisionEnd.length !== collisionEndIndex) {\n                    collisionEnd.length = collisionEndIndex;\n                  }\n                  if (collisionActive.length !== collisionActiveIndex) {\n                    collisionActive.length = collisionActiveIndex;\n                  }\n                };\n                Pairs.clear = function(pairs) {\n                  pairs.table = {};\n                  pairs.list.length = 0;\n                  pairs.collisionStart.length = 0;\n                  pairs.collisionActive.length = 0;\n                  pairs.collisionEnd.length = 0;\n                  return pairs;\n                };\n              })();\n            }),\n            /* 20 */\n            /***/\n            (function(module2, exports2, __webpack_require__) {\n              var Matter = module2.exports = __webpack_require__(21);\n              Matter.Axes = __webpack_require__(11);\n              Matter.Bodies = __webpack_require__(12);\n              Matter.Body = __webpack_require__(4);\n              Matter.Bounds = __webpack_require__(1);\n              Matter.Collision = __webpack_require__(8);\n              Matter.Common = __webpack_require__(0);\n              Matter.Composite = __webpack_require__(6);\n              Matter.Composites = __webpack_require__(22);\n              Matter.Constraint = __webpack_require__(10);\n              Matter.Contact = __webpack_require__(16);\n              Matter.Detector = __webpack_require__(13);\n              Matter.Engine = __webpack_require__(17);\n              Matter.Events = __webpack_require__(5);\n              Matter.Grid = __webpack_require__(23);\n              Matter.Mouse = __webpack_require__(14);\n              Matter.MouseConstraint = __webpack_require__(24);\n              Matter.Pair = __webpack_require__(9);\n              Matter.Pairs = __webpack_require__(19);\n              Matter.Plugin = __webpack_require__(15);\n              Matter.Query = __webpack_require__(25);\n              Matter.Render = __webpack_require__(26);\n              Matter.Resolver = __webpack_require__(18);\n              Matter.Runner = __webpack_require__(27);\n              Matter.SAT = __webpack_require__(28);\n              Matter.Sleeping = __webpack_require__(7);\n              Matter.Svg = __webpack_require__(29);\n              Matter.Vector = __webpack_require__(2);\n              Matter.Vertices = __webpack_require__(3);\n              Matter.World = __webpack_require__(30);\n              Matter.Engine.run = Matter.Runner.run;\n              Matter.Common.deprecated(Matter.Engine, "run", "Engine.run \\u27A4 use Matter.Runner.run(engine) instead");\n            }),\n            /* 21 */\n            /***/\n            (function(module2, exports2, __webpack_require__) {\n              var Matter = {};\n              module2.exports = Matter;\n              var Plugin = __webpack_require__(15);\n              var Common = __webpack_require__(0);\n              (function() {\n                Matter.name = "matter-js";\n                Matter.version = true ? "0.20.0" : void 0;\n                Matter.uses = [];\n                Matter.used = [];\n                Matter.use = function() {\n                  Plugin.use(Matter, Array.prototype.slice.call(arguments));\n                };\n                Matter.before = function(path, func) {\n                  path = path.replace(/^Matter./, "");\n                  return Common.chainPathBefore(Matter, path, func);\n                };\n                Matter.after = function(path, func) {\n                  path = path.replace(/^Matter./, "");\n                  return Common.chainPathAfter(Matter, path, func);\n                };\n              })();\n            }),\n            /* 22 */\n            /***/\n            (function(module2, exports2, __webpack_require__) {\n              var Composites = {};\n              module2.exports = Composites;\n              var Composite = __webpack_require__(6);\n              var Constraint = __webpack_require__(10);\n              var Common = __webpack_require__(0);\n              var Body = __webpack_require__(4);\n              var Bodies = __webpack_require__(12);\n              var deprecated = Common.deprecated;\n              (function() {\n                Composites.stack = function(x, y, columns, rows, columnGap, rowGap, callback) {\n                  var stack = Composite.create({ label: "Stack" }), currentX = x, currentY = y, lastBody, i = 0;\n                  for (var row = 0; row < rows; row++) {\n                    var maxHeight = 0;\n                    for (var column = 0; column < columns; column++) {\n                      var body = callback(currentX, currentY, column, row, lastBody, i);\n                      if (body) {\n                        var bodyHeight = body.bounds.max.y - body.bounds.min.y, bodyWidth = body.bounds.max.x - body.bounds.min.x;\n                        if (bodyHeight > maxHeight)\n                          maxHeight = bodyHeight;\n                        Body.translate(body, { x: bodyWidth * 0.5, y: bodyHeight * 0.5 });\n                        currentX = body.bounds.max.x + columnGap;\n                        Composite.addBody(stack, body);\n                        lastBody = body;\n                        i += 1;\n                      } else {\n                        currentX += columnGap;\n                      }\n                    }\n                    currentY += maxHeight + rowGap;\n                    currentX = x;\n                  }\n                  return stack;\n                };\n                Composites.chain = function(composite, xOffsetA, yOffsetA, xOffsetB, yOffsetB, options) {\n                  var bodies = composite.bodies;\n                  for (var i = 1; i < bodies.length; i++) {\n                    var bodyA = bodies[i - 1], bodyB = bodies[i], bodyAHeight = bodyA.bounds.max.y - bodyA.bounds.min.y, bodyAWidth = bodyA.bounds.max.x - bodyA.bounds.min.x, bodyBHeight = bodyB.bounds.max.y - bodyB.bounds.min.y, bodyBWidth = bodyB.bounds.max.x - bodyB.bounds.min.x;\n                    var defaults = {\n                      bodyA,\n                      pointA: { x: bodyAWidth * xOffsetA, y: bodyAHeight * yOffsetA },\n                      bodyB,\n                      pointB: { x: bodyBWidth * xOffsetB, y: bodyBHeight * yOffsetB }\n                    };\n                    var constraint = Common.extend(defaults, options);\n                    Composite.addConstraint(composite, Constraint.create(constraint));\n                  }\n                  composite.label += " Chain";\n                  return composite;\n                };\n                Composites.mesh = function(composite, columns, rows, crossBrace, options) {\n                  var bodies = composite.bodies, row, col, bodyA, bodyB, bodyC;\n                  for (row = 0; row < rows; row++) {\n                    for (col = 1; col < columns; col++) {\n                      bodyA = bodies[col - 1 + row * columns];\n                      bodyB = bodies[col + row * columns];\n                      Composite.addConstraint(composite, Constraint.create(Common.extend({ bodyA, bodyB }, options)));\n                    }\n                    if (row > 0) {\n                      for (col = 0; col < columns; col++) {\n                        bodyA = bodies[col + (row - 1) * columns];\n                        bodyB = bodies[col + row * columns];\n                        Composite.addConstraint(composite, Constraint.create(Common.extend({ bodyA, bodyB }, options)));\n                        if (crossBrace && col > 0) {\n                          bodyC = bodies[col - 1 + (row - 1) * columns];\n                          Composite.addConstraint(composite, Constraint.create(Common.extend({ bodyA: bodyC, bodyB }, options)));\n                        }\n                        if (crossBrace && col < columns - 1) {\n                          bodyC = bodies[col + 1 + (row - 1) * columns];\n                          Composite.addConstraint(composite, Constraint.create(Common.extend({ bodyA: bodyC, bodyB }, options)));\n                        }\n                      }\n                    }\n                  }\n                  composite.label += " Mesh";\n                  return composite;\n                };\n                Composites.pyramid = function(x, y, columns, rows, columnGap, rowGap, callback) {\n                  return Composites.stack(x, y, columns, rows, columnGap, rowGap, function(stackX, stackY, column, row, lastBody, i) {\n                    var actualRows = Math.min(rows, Math.ceil(columns / 2)), lastBodyWidth = lastBody ? lastBody.bounds.max.x - lastBody.bounds.min.x : 0;\n                    if (row > actualRows)\n                      return;\n                    row = actualRows - row;\n                    var start = row, end = columns - 1 - row;\n                    if (column < start || column > end)\n                      return;\n                    if (i === 1) {\n                      Body.translate(lastBody, { x: (column + (columns % 2 === 1 ? 1 : -1)) * lastBodyWidth, y: 0 });\n                    }\n                    var xOffset = lastBody ? column * lastBodyWidth : 0;\n                    return callback(x + xOffset + column * columnGap, stackY, column, row, lastBody, i);\n                  });\n                };\n                Composites.newtonsCradle = function(x, y, number, size, length) {\n                  var newtonsCradle = Composite.create({ label: "Newtons Cradle" });\n                  for (var i = 0; i < number; i++) {\n                    var separation = 1.9, circle = Bodies.circle(\n                      x + i * (size * separation),\n                      y + length,\n                      size,\n                      { inertia: Infinity, restitution: 1, friction: 0, frictionAir: 1e-4, slop: 1 }\n                    ), constraint = Constraint.create({ pointA: { x: x + i * (size * separation), y }, bodyB: circle });\n                    Composite.addBody(newtonsCradle, circle);\n                    Composite.addConstraint(newtonsCradle, constraint);\n                  }\n                  return newtonsCradle;\n                };\n                deprecated(Composites, "newtonsCradle", "Composites.newtonsCradle \\u27A4 moved to newtonsCradle example");\n                Composites.car = function(x, y, width, height, wheelSize) {\n                  var group = Body.nextGroup(true), wheelBase = 20, wheelAOffset = -width * 0.5 + wheelBase, wheelBOffset = width * 0.5 - wheelBase, wheelYOffset = 0;\n                  var car = Composite.create({ label: "Car" }), body = Bodies.rectangle(x, y, width, height, {\n                    collisionFilter: {\n                      group\n                    },\n                    chamfer: {\n                      radius: height * 0.5\n                    },\n                    density: 2e-4\n                  });\n                  var wheelA = Bodies.circle(x + wheelAOffset, y + wheelYOffset, wheelSize, {\n                    collisionFilter: {\n                      group\n                    },\n                    friction: 0.8\n                  });\n                  var wheelB = Bodies.circle(x + wheelBOffset, y + wheelYOffset, wheelSize, {\n                    collisionFilter: {\n                      group\n                    },\n                    friction: 0.8\n                  });\n                  var axelA = Constraint.create({\n                    bodyB: body,\n                    pointB: { x: wheelAOffset, y: wheelYOffset },\n                    bodyA: wheelA,\n                    stiffness: 1,\n                    length: 0\n                  });\n                  var axelB = Constraint.create({\n                    bodyB: body,\n                    pointB: { x: wheelBOffset, y: wheelYOffset },\n                    bodyA: wheelB,\n                    stiffness: 1,\n                    length: 0\n                  });\n                  Composite.addBody(car, body);\n                  Composite.addBody(car, wheelA);\n                  Composite.addBody(car, wheelB);\n                  Composite.addConstraint(car, axelA);\n                  Composite.addConstraint(car, axelB);\n                  return car;\n                };\n                deprecated(Composites, "car", "Composites.car \\u27A4 moved to car example");\n                Composites.softBody = function(x, y, columns, rows, columnGap, rowGap, crossBrace, particleRadius, particleOptions, constraintOptions) {\n                  particleOptions = Common.extend({ inertia: Infinity }, particleOptions);\n                  constraintOptions = Common.extend({ stiffness: 0.2, render: { type: "line", anchors: false } }, constraintOptions);\n                  var softBody = Composites.stack(x, y, columns, rows, columnGap, rowGap, function(stackX, stackY) {\n                    return Bodies.circle(stackX, stackY, particleRadius, particleOptions);\n                  });\n                  Composites.mesh(softBody, columns, rows, crossBrace, constraintOptions);\n                  softBody.label = "Soft Body";\n                  return softBody;\n                };\n                deprecated(Composites, "softBody", "Composites.softBody \\u27A4 moved to softBody and cloth examples");\n              })();\n            }),\n            /* 23 */\n            /***/\n            (function(module2, exports2, __webpack_require__) {\n              var Grid = {};\n              module2.exports = Grid;\n              var Pair = __webpack_require__(9);\n              var Common = __webpack_require__(0);\n              var deprecated = Common.deprecated;\n              (function() {\n                Grid.create = function(options) {\n                  var defaults = {\n                    buckets: {},\n                    pairs: {},\n                    pairsList: [],\n                    bucketWidth: 48,\n                    bucketHeight: 48\n                  };\n                  return Common.extend(defaults, options);\n                };\n                Grid.update = function(grid, bodies, engine, forceUpdate) {\n                  var i, col, row, world = engine.world, buckets = grid.buckets, bucket, bucketId, gridChanged = false;\n                  for (i = 0; i < bodies.length; i++) {\n                    var body = bodies[i];\n                    if (body.isSleeping && !forceUpdate)\n                      continue;\n                    if (world.bounds && (body.bounds.max.x < world.bounds.min.x || body.bounds.min.x > world.bounds.max.x || body.bounds.max.y < world.bounds.min.y || body.bounds.min.y > world.bounds.max.y))\n                      continue;\n                    var newRegion = Grid._getRegion(grid, body);\n                    if (!body.region || newRegion.id !== body.region.id || forceUpdate) {\n                      if (!body.region || forceUpdate)\n                        body.region = newRegion;\n                      var union = Grid._regionUnion(newRegion, body.region);\n                      for (col = union.startCol; col <= union.endCol; col++) {\n                        for (row = union.startRow; row <= union.endRow; row++) {\n                          bucketId = Grid._getBucketId(col, row);\n                          bucket = buckets[bucketId];\n                          var isInsideNewRegion = col >= newRegion.startCol && col <= newRegion.endCol && row >= newRegion.startRow && row <= newRegion.endRow;\n                          var isInsideOldRegion = col >= body.region.startCol && col <= body.region.endCol && row >= body.region.startRow && row <= body.region.endRow;\n                          if (!isInsideNewRegion && isInsideOldRegion) {\n                            if (isInsideOldRegion) {\n                              if (bucket)\n                                Grid._bucketRemoveBody(grid, bucket, body);\n                            }\n                          }\n                          if (body.region === newRegion || isInsideNewRegion && !isInsideOldRegion || forceUpdate) {\n                            if (!bucket)\n                              bucket = Grid._createBucket(buckets, bucketId);\n                            Grid._bucketAddBody(grid, bucket, body);\n                          }\n                        }\n                      }\n                      body.region = newRegion;\n                      gridChanged = true;\n                    }\n                  }\n                  if (gridChanged)\n                    grid.pairsList = Grid._createActivePairsList(grid);\n                };\n                deprecated(Grid, "update", "Grid.update \\u27A4 replaced by Matter.Detector");\n                Grid.clear = function(grid) {\n                  grid.buckets = {};\n                  grid.pairs = {};\n                  grid.pairsList = [];\n                };\n                deprecated(Grid, "clear", "Grid.clear \\u27A4 replaced by Matter.Detector");\n                Grid._regionUnion = function(regionA, regionB) {\n                  var startCol = Math.min(regionA.startCol, regionB.startCol), endCol = Math.max(regionA.endCol, regionB.endCol), startRow = Math.min(regionA.startRow, regionB.startRow), endRow = Math.max(regionA.endRow, regionB.endRow);\n                  return Grid._createRegion(startCol, endCol, startRow, endRow);\n                };\n                Grid._getRegion = function(grid, body) {\n                  var bounds = body.bounds, startCol = Math.floor(bounds.min.x / grid.bucketWidth), endCol = Math.floor(bounds.max.x / grid.bucketWidth), startRow = Math.floor(bounds.min.y / grid.bucketHeight), endRow = Math.floor(bounds.max.y / grid.bucketHeight);\n                  return Grid._createRegion(startCol, endCol, startRow, endRow);\n                };\n                Grid._createRegion = function(startCol, endCol, startRow, endRow) {\n                  return {\n                    id: startCol + "," + endCol + "," + startRow + "," + endRow,\n                    startCol,\n                    endCol,\n                    startRow,\n                    endRow\n                  };\n                };\n                Grid._getBucketId = function(column, row) {\n                  return "C" + column + "R" + row;\n                };\n                Grid._createBucket = function(buckets, bucketId) {\n                  var bucket = buckets[bucketId] = [];\n                  return bucket;\n                };\n                Grid._bucketAddBody = function(grid, bucket, body) {\n                  var gridPairs = grid.pairs, pairId = Pair.id, bucketLength = bucket.length, i;\n                  for (i = 0; i < bucketLength; i++) {\n                    var bodyB = bucket[i];\n                    if (body.id === bodyB.id || body.isStatic && bodyB.isStatic)\n                      continue;\n                    var id = pairId(body, bodyB), pair = gridPairs[id];\n                    if (pair) {\n                      pair[2] += 1;\n                    } else {\n                      gridPairs[id] = [body, bodyB, 1];\n                    }\n                  }\n                  bucket.push(body);\n                };\n                Grid._bucketRemoveBody = function(grid, bucket, body) {\n                  var gridPairs = grid.pairs, pairId = Pair.id, i;\n                  bucket.splice(Common.indexOf(bucket, body), 1);\n                  var bucketLength = bucket.length;\n                  for (i = 0; i < bucketLength; i++) {\n                    var pair = gridPairs[pairId(body, bucket[i])];\n                    if (pair)\n                      pair[2] -= 1;\n                  }\n                };\n                Grid._createActivePairsList = function(grid) {\n                  var pair, gridPairs = grid.pairs, pairKeys = Common.keys(gridPairs), pairKeysLength = pairKeys.length, pairs = [], k;\n                  for (k = 0; k < pairKeysLength; k++) {\n                    pair = gridPairs[pairKeys[k]];\n                    if (pair[2] > 0) {\n                      pairs.push(pair);\n                    } else {\n                      delete gridPairs[pairKeys[k]];\n                    }\n                  }\n                  return pairs;\n                };\n              })();\n            }),\n            /* 24 */\n            /***/\n            (function(module2, exports2, __webpack_require__) {\n              var MouseConstraint = {};\n              module2.exports = MouseConstraint;\n              var Vertices = __webpack_require__(3);\n              var Sleeping = __webpack_require__(7);\n              var Mouse = __webpack_require__(14);\n              var Events = __webpack_require__(5);\n              var Detector = __webpack_require__(13);\n              var Constraint = __webpack_require__(10);\n              var Composite = __webpack_require__(6);\n              var Common = __webpack_require__(0);\n              var Bounds = __webpack_require__(1);\n              (function() {\n                MouseConstraint.create = function(engine, options) {\n                  var mouse = (engine ? engine.mouse : null) || (options ? options.mouse : null);\n                  if (!mouse) {\n                    if (engine && engine.render && engine.render.canvas) {\n                      mouse = Mouse.create(engine.render.canvas);\n                    } else if (options && options.element) {\n                      mouse = Mouse.create(options.element);\n                    } else {\n                      mouse = Mouse.create();\n                      Common.warn("MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected");\n                    }\n                  }\n                  var constraint = Constraint.create({\n                    label: "Mouse Constraint",\n                    pointA: mouse.position,\n                    pointB: { x: 0, y: 0 },\n                    length: 0.01,\n                    stiffness: 0.1,\n                    angularStiffness: 1,\n                    render: {\n                      strokeStyle: "#90EE90",\n                      lineWidth: 3\n                    }\n                  });\n                  var defaults = {\n                    type: "mouseConstraint",\n                    mouse,\n                    element: null,\n                    body: null,\n                    constraint,\n                    collisionFilter: {\n                      category: 1,\n                      mask: 4294967295,\n                      group: 0\n                    }\n                  };\n                  var mouseConstraint = Common.extend(defaults, options);\n                  Events.on(engine, "beforeUpdate", function() {\n                    var allBodies = Composite.allBodies(engine.world);\n                    MouseConstraint.update(mouseConstraint, allBodies);\n                    MouseConstraint._triggerEvents(mouseConstraint);\n                  });\n                  return mouseConstraint;\n                };\n                MouseConstraint.update = function(mouseConstraint, bodies) {\n                  var mouse = mouseConstraint.mouse, constraint = mouseConstraint.constraint, body = mouseConstraint.body;\n                  if (mouse.button === 0) {\n                    if (!constraint.bodyB) {\n                      for (var i = 0; i < bodies.length; i++) {\n                        body = bodies[i];\n                        if (Bounds.contains(body.bounds, mouse.position) && Detector.canCollide(body.collisionFilter, mouseConstraint.collisionFilter)) {\n                          for (var j = body.parts.length > 1 ? 1 : 0; j < body.parts.length; j++) {\n                            var part = body.parts[j];\n                            if (Vertices.contains(part.vertices, mouse.position)) {\n                              constraint.pointA = mouse.position;\n                              constraint.bodyB = mouseConstraint.body = body;\n                              constraint.pointB = { x: mouse.position.x - body.position.x, y: mouse.position.y - body.position.y };\n                              constraint.angleB = body.angle;\n                              Sleeping.set(body, false);\n                              Events.trigger(mouseConstraint, "startdrag", { mouse, body });\n                              break;\n                            }\n                          }\n                        }\n                      }\n                    } else {\n                      Sleeping.set(constraint.bodyB, false);\n                      constraint.pointA = mouse.position;\n                    }\n                  } else {\n                    constraint.bodyB = mouseConstraint.body = null;\n                    constraint.pointB = null;\n                    if (body)\n                      Events.trigger(mouseConstraint, "enddrag", { mouse, body });\n                  }\n                };\n                MouseConstraint._triggerEvents = function(mouseConstraint) {\n                  var mouse = mouseConstraint.mouse, mouseEvents = mouse.sourceEvents;\n                  if (mouseEvents.mousemove)\n                    Events.trigger(mouseConstraint, "mousemove", { mouse });\n                  if (mouseEvents.mousedown)\n                    Events.trigger(mouseConstraint, "mousedown", { mouse });\n                  if (mouseEvents.mouseup)\n                    Events.trigger(mouseConstraint, "mouseup", { mouse });\n                  Mouse.clearSourceEvents(mouse);\n                };\n              })();\n            }),\n            /* 25 */\n            /***/\n            (function(module2, exports2, __webpack_require__) {\n              var Query = {};\n              module2.exports = Query;\n              var Vector = __webpack_require__(2);\n              var Collision = __webpack_require__(8);\n              var Bounds = __webpack_require__(1);\n              var Bodies = __webpack_require__(12);\n              var Vertices = __webpack_require__(3);\n              (function() {\n                Query.collides = function(body, bodies) {\n                  var collisions = [], bodiesLength = bodies.length, bounds = body.bounds, collides = Collision.collides, overlaps = Bounds.overlaps;\n                  for (var i = 0; i < bodiesLength; i++) {\n                    var bodyA = bodies[i], partsALength = bodyA.parts.length, partsAStart = partsALength === 1 ? 0 : 1;\n                    if (overlaps(bodyA.bounds, bounds)) {\n                      for (var j = partsAStart; j < partsALength; j++) {\n                        var part = bodyA.parts[j];\n                        if (overlaps(part.bounds, bounds)) {\n                          var collision = collides(part, body);\n                          if (collision) {\n                            collisions.push(collision);\n                            break;\n                          }\n                        }\n                      }\n                    }\n                  }\n                  return collisions;\n                };\n                Query.ray = function(bodies, startPoint, endPoint, rayWidth) {\n                  rayWidth = rayWidth || 1e-100;\n                  var rayAngle = Vector.angle(startPoint, endPoint), rayLength = Vector.magnitude(Vector.sub(startPoint, endPoint)), rayX = (endPoint.x + startPoint.x) * 0.5, rayY = (endPoint.y + startPoint.y) * 0.5, ray = Bodies.rectangle(rayX, rayY, rayLength, rayWidth, { angle: rayAngle }), collisions = Query.collides(ray, bodies);\n                  for (var i = 0; i < collisions.length; i += 1) {\n                    var collision = collisions[i];\n                    collision.body = collision.bodyB = collision.bodyA;\n                  }\n                  return collisions;\n                };\n                Query.region = function(bodies, bounds, outside) {\n                  var result = [];\n                  for (var i = 0; i < bodies.length; i++) {\n                    var body = bodies[i], overlaps = Bounds.overlaps(body.bounds, bounds);\n                    if (overlaps && !outside || !overlaps && outside)\n                      result.push(body);\n                  }\n                  return result;\n                };\n                Query.point = function(bodies, point) {\n                  var result = [];\n                  for (var i = 0; i < bodies.length; i++) {\n                    var body = bodies[i];\n                    if (Bounds.contains(body.bounds, point)) {\n                      for (var j = body.parts.length === 1 ? 0 : 1; j < body.parts.length; j++) {\n                        var part = body.parts[j];\n                        if (Bounds.contains(part.bounds, point) && Vertices.contains(part.vertices, point)) {\n                          result.push(body);\n                          break;\n                        }\n                      }\n                    }\n                  }\n                  return result;\n                };\n              })();\n            }),\n            /* 26 */\n            /***/\n            (function(module2, exports2, __webpack_require__) {\n              var Render = {};\n              module2.exports = Render;\n              var Body = __webpack_require__(4);\n              var Common = __webpack_require__(0);\n              var Composite = __webpack_require__(6);\n              var Bounds = __webpack_require__(1);\n              var Events = __webpack_require__(5);\n              var Vector = __webpack_require__(2);\n              var Mouse = __webpack_require__(14);\n              (function() {\n                var _requestAnimationFrame, _cancelAnimationFrame;\n                if (typeof window !== "undefined") {\n                  _requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {\n                    window.setTimeout(function() {\n                      callback(Common.now());\n                    }, 1e3 / 60);\n                  };\n                  _cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame;\n                }\n                Render._goodFps = 30;\n                Render._goodDelta = 1e3 / 60;\n                Render.create = function(options) {\n                  var defaults = {\n                    engine: null,\n                    element: null,\n                    canvas: null,\n                    mouse: null,\n                    frameRequestId: null,\n                    timing: {\n                      historySize: 60,\n                      delta: 0,\n                      deltaHistory: [],\n                      lastTime: 0,\n                      lastTimestamp: 0,\n                      lastElapsed: 0,\n                      timestampElapsed: 0,\n                      timestampElapsedHistory: [],\n                      engineDeltaHistory: [],\n                      engineElapsedHistory: [],\n                      engineUpdatesHistory: [],\n                      elapsedHistory: []\n                    },\n                    options: {\n                      width: 800,\n                      height: 600,\n                      pixelRatio: 1,\n                      background: "#14151f",\n                      wireframeBackground: "#14151f",\n                      wireframeStrokeStyle: "#bbb",\n                      hasBounds: !!options.bounds,\n                      enabled: true,\n                      wireframes: true,\n                      showSleeping: true,\n                      showDebug: false,\n                      showStats: false,\n                      showPerformance: false,\n                      showBounds: false,\n                      showVelocity: false,\n                      showCollisions: false,\n                      showSeparations: false,\n                      showAxes: false,\n                      showPositions: false,\n                      showAngleIndicator: false,\n                      showIds: false,\n                      showVertexNumbers: false,\n                      showConvexHulls: false,\n                      showInternalEdges: false,\n                      showMousePosition: false\n                    }\n                  };\n                  var render = Common.extend(defaults, options);\n                  if (render.canvas) {\n                    render.canvas.width = render.options.width || render.canvas.width;\n                    render.canvas.height = render.options.height || render.canvas.height;\n                  }\n                  render.mouse = options.mouse;\n                  render.engine = options.engine;\n                  render.canvas = render.canvas || _createCanvas(render.options.width, render.options.height);\n                  render.context = render.canvas.getContext("2d");\n                  render.textures = {};\n                  render.bounds = render.bounds || {\n                    min: {\n                      x: 0,\n                      y: 0\n                    },\n                    max: {\n                      x: render.canvas.width,\n                      y: render.canvas.height\n                    }\n                  };\n                  render.controller = Render;\n                  render.options.showBroadphase = false;\n                  if (render.options.pixelRatio !== 1) {\n                    Render.setPixelRatio(render, render.options.pixelRatio);\n                  }\n                  if (Common.isElement(render.element)) {\n                    render.element.appendChild(render.canvas);\n                  }\n                  return render;\n                };\n                Render.run = function(render) {\n                  (function loop(time) {\n                    render.frameRequestId = _requestAnimationFrame(loop);\n                    _updateTiming(render, time);\n                    Render.world(render, time);\n                    render.context.setTransform(render.options.pixelRatio, 0, 0, render.options.pixelRatio, 0, 0);\n                    if (render.options.showStats || render.options.showDebug) {\n                      Render.stats(render, render.context, time);\n                    }\n                    if (render.options.showPerformance || render.options.showDebug) {\n                      Render.performance(render, render.context, time);\n                    }\n                    render.context.setTransform(1, 0, 0, 1, 0, 0);\n                  })();\n                };\n                Render.stop = function(render) {\n                  _cancelAnimationFrame(render.frameRequestId);\n                };\n                Render.setPixelRatio = function(render, pixelRatio) {\n                  var options = render.options, canvas = render.canvas;\n                  if (pixelRatio === "auto") {\n                    pixelRatio = _getPixelRatio(canvas);\n                  }\n                  options.pixelRatio = pixelRatio;\n                  canvas.setAttribute("data-pixel-ratio", pixelRatio);\n                  canvas.width = options.width * pixelRatio;\n                  canvas.height = options.height * pixelRatio;\n                  canvas.style.width = options.width + "px";\n                  canvas.style.height = options.height + "px";\n                };\n                Render.setSize = function(render, width, height) {\n                  render.options.width = width;\n                  render.options.height = height;\n                  render.bounds.max.x = render.bounds.min.x + width;\n                  render.bounds.max.y = render.bounds.min.y + height;\n                  if (render.options.pixelRatio !== 1) {\n                    Render.setPixelRatio(render, render.options.pixelRatio);\n                  } else {\n                    render.canvas.width = width;\n                    render.canvas.height = height;\n                  }\n                };\n                Render.lookAt = function(render, objects, padding, center) {\n                  center = typeof center !== "undefined" ? center : true;\n                  objects = Common.isArray(objects) ? objects : [objects];\n                  padding = padding || {\n                    x: 0,\n                    y: 0\n                  };\n                  var bounds = {\n                    min: { x: Infinity, y: Infinity },\n                    max: { x: -Infinity, y: -Infinity }\n                  };\n                  for (var i = 0; i < objects.length; i += 1) {\n                    var object = objects[i], min = object.bounds ? object.bounds.min : object.min || object.position || object, max = object.bounds ? object.bounds.max : object.max || object.position || object;\n                    if (min && max) {\n                      if (min.x < bounds.min.x)\n                        bounds.min.x = min.x;\n                      if (max.x > bounds.max.x)\n                        bounds.max.x = max.x;\n                      if (min.y < bounds.min.y)\n                        bounds.min.y = min.y;\n                      if (max.y > bounds.max.y)\n                        bounds.max.y = max.y;\n                    }\n                  }\n                  var width = bounds.max.x - bounds.min.x + 2 * padding.x, height = bounds.max.y - bounds.min.y + 2 * padding.y, viewHeight = render.canvas.height, viewWidth = render.canvas.width, outerRatio = viewWidth / viewHeight, innerRatio = width / height, scaleX = 1, scaleY = 1;\n                  if (innerRatio > outerRatio) {\n                    scaleY = innerRatio / outerRatio;\n                  } else {\n                    scaleX = outerRatio / innerRatio;\n                  }\n                  render.options.hasBounds = true;\n                  render.bounds.min.x = bounds.min.x;\n                  render.bounds.max.x = bounds.min.x + width * scaleX;\n                  render.bounds.min.y = bounds.min.y;\n                  render.bounds.max.y = bounds.min.y + height * scaleY;\n                  if (center) {\n                    render.bounds.min.x += width * 0.5 - width * scaleX * 0.5;\n                    render.bounds.max.x += width * 0.5 - width * scaleX * 0.5;\n                    render.bounds.min.y += height * 0.5 - height * scaleY * 0.5;\n                    render.bounds.max.y += height * 0.5 - height * scaleY * 0.5;\n                  }\n                  render.bounds.min.x -= padding.x;\n                  render.bounds.max.x -= padding.x;\n                  render.bounds.min.y -= padding.y;\n                  render.bounds.max.y -= padding.y;\n                  if (render.mouse) {\n                    Mouse.setScale(render.mouse, {\n                      x: (render.bounds.max.x - render.bounds.min.x) / render.canvas.width,\n                      y: (render.bounds.max.y - render.bounds.min.y) / render.canvas.height\n                    });\n                    Mouse.setOffset(render.mouse, render.bounds.min);\n                  }\n                };\n                Render.startViewTransform = function(render) {\n                  var boundsWidth = render.bounds.max.x - render.bounds.min.x, boundsHeight = render.bounds.max.y - render.bounds.min.y, boundsScaleX = boundsWidth / render.options.width, boundsScaleY = boundsHeight / render.options.height;\n                  render.context.setTransform(\n                    render.options.pixelRatio / boundsScaleX,\n                    0,\n                    0,\n                    render.options.pixelRatio / boundsScaleY,\n                    0,\n                    0\n                  );\n                  render.context.translate(-render.bounds.min.x, -render.bounds.min.y);\n                };\n                Render.endViewTransform = function(render) {\n                  render.context.setTransform(render.options.pixelRatio, 0, 0, render.options.pixelRatio, 0, 0);\n                };\n                Render.world = function(render, time) {\n                  var startTime = Common.now(), engine = render.engine, world = engine.world, canvas = render.canvas, context = render.context, options = render.options, timing = render.timing;\n                  var allBodies = Composite.allBodies(world), allConstraints = Composite.allConstraints(world), background = options.wireframes ? options.wireframeBackground : options.background, bodies = [], constraints = [], i;\n                  var event = {\n                    timestamp: engine.timing.timestamp\n                  };\n                  Events.trigger(render, "beforeRender", event);\n                  if (render.currentBackground !== background)\n                    _applyBackground(render, background);\n                  context.globalCompositeOperation = "source-in";\n                  context.fillStyle = "transparent";\n                  context.fillRect(0, 0, canvas.width, canvas.height);\n                  context.globalCompositeOperation = "source-over";\n                  if (options.hasBounds) {\n                    for (i = 0; i < allBodies.length; i++) {\n                      var body = allBodies[i];\n                      if (Bounds.overlaps(body.bounds, render.bounds))\n                        bodies.push(body);\n                    }\n                    for (i = 0; i < allConstraints.length; i++) {\n                      var constraint = allConstraints[i], bodyA = constraint.bodyA, bodyB = constraint.bodyB, pointAWorld = constraint.pointA, pointBWorld = constraint.pointB;\n                      if (bodyA) pointAWorld = Vector.add(bodyA.position, constraint.pointA);\n                      if (bodyB) pointBWorld = Vector.add(bodyB.position, constraint.pointB);\n                      if (!pointAWorld || !pointBWorld)\n                        continue;\n                      if (Bounds.contains(render.bounds, pointAWorld) || Bounds.contains(render.bounds, pointBWorld))\n                        constraints.push(constraint);\n                    }\n                    Render.startViewTransform(render);\n                    if (render.mouse) {\n                      Mouse.setScale(render.mouse, {\n                        x: (render.bounds.max.x - render.bounds.min.x) / render.options.width,\n                        y: (render.bounds.max.y - render.bounds.min.y) / render.options.height\n                      });\n                      Mouse.setOffset(render.mouse, render.bounds.min);\n                    }\n                  } else {\n                    constraints = allConstraints;\n                    bodies = allBodies;\n                    if (render.options.pixelRatio !== 1) {\n                      render.context.setTransform(render.options.pixelRatio, 0, 0, render.options.pixelRatio, 0, 0);\n                    }\n                  }\n                  if (!options.wireframes || engine.enableSleeping && options.showSleeping) {\n                    Render.bodies(render, bodies, context);\n                  } else {\n                    if (options.showConvexHulls)\n                      Render.bodyConvexHulls(render, bodies, context);\n                    Render.bodyWireframes(render, bodies, context);\n                  }\n                  if (options.showBounds)\n                    Render.bodyBounds(render, bodies, context);\n                  if (options.showAxes || options.showAngleIndicator)\n                    Render.bodyAxes(render, bodies, context);\n                  if (options.showPositions)\n                    Render.bodyPositions(render, bodies, context);\n                  if (options.showVelocity)\n                    Render.bodyVelocity(render, bodies, context);\n                  if (options.showIds)\n                    Render.bodyIds(render, bodies, context);\n                  if (options.showSeparations)\n                    Render.separations(render, engine.pairs.list, context);\n                  if (options.showCollisions)\n                    Render.collisions(render, engine.pairs.list, context);\n                  if (options.showVertexNumbers)\n                    Render.vertexNumbers(render, bodies, context);\n                  if (options.showMousePosition)\n                    Render.mousePosition(render, render.mouse, context);\n                  Render.constraints(constraints, context);\n                  if (options.hasBounds) {\n                    Render.endViewTransform(render);\n                  }\n                  Events.trigger(render, "afterRender", event);\n                  timing.lastElapsed = Common.now() - startTime;\n                };\n                Render.stats = function(render, context, time) {\n                  var engine = render.engine, world = engine.world, bodies = Composite.allBodies(world), parts = 0, width = 55, height = 44, x = 0, y = 0;\n                  for (var i = 0; i < bodies.length; i += 1) {\n                    parts += bodies[i].parts.length;\n                  }\n                  var sections = {\n                    "Part": parts,\n                    "Body": bodies.length,\n                    "Cons": Composite.allConstraints(world).length,\n                    "Comp": Composite.allComposites(world).length,\n                    "Pair": engine.pairs.list.length\n                  };\n                  context.fillStyle = "#0e0f19";\n                  context.fillRect(x, y, width * 5.5, height);\n                  context.font = "12px Arial";\n                  context.textBaseline = "top";\n                  context.textAlign = "right";\n                  for (var key in sections) {\n                    var section = sections[key];\n                    context.fillStyle = "#aaa";\n                    context.fillText(key, x + width, y + 8);\n                    context.fillStyle = "#eee";\n                    context.fillText(section, x + width, y + 26);\n                    x += width;\n                  }\n                };\n                Render.performance = function(render, context) {\n                  var engine = render.engine, timing = render.timing, deltaHistory = timing.deltaHistory, elapsedHistory = timing.elapsedHistory, timestampElapsedHistory = timing.timestampElapsedHistory, engineDeltaHistory = timing.engineDeltaHistory, engineUpdatesHistory = timing.engineUpdatesHistory, engineElapsedHistory = timing.engineElapsedHistory, lastEngineUpdatesPerFrame = engine.timing.lastUpdatesPerFrame, lastEngineDelta = engine.timing.lastDelta;\n                  var deltaMean = _mean(deltaHistory), elapsedMean = _mean(elapsedHistory), engineDeltaMean = _mean(engineDeltaHistory), engineUpdatesMean = _mean(engineUpdatesHistory), engineElapsedMean = _mean(engineElapsedHistory), timestampElapsedMean = _mean(timestampElapsedHistory), rateMean = timestampElapsedMean / deltaMean || 0, neededUpdatesPerFrame = Math.round(deltaMean / lastEngineDelta), fps = 1e3 / deltaMean || 0;\n                  var graphHeight = 4, gap = 12, width = 60, height = 34, x = 10, y = 69;\n                  context.fillStyle = "#0e0f19";\n                  context.fillRect(0, 50, gap * 5 + width * 6 + 22, height);\n                  Render.status(\n                    context,\n                    x,\n                    y,\n                    width,\n                    graphHeight,\n                    deltaHistory.length,\n                    Math.round(fps) + " fps",\n                    fps / Render._goodFps,\n                    function(i) {\n                      return deltaHistory[i] / deltaMean - 1;\n                    }\n                  );\n                  Render.status(\n                    context,\n                    x + gap + width,\n                    y,\n                    width,\n                    graphHeight,\n                    engineDeltaHistory.length,\n                    lastEngineDelta.toFixed(2) + " dt",\n                    Render._goodDelta / lastEngineDelta,\n                    function(i) {\n                      return engineDeltaHistory[i] / engineDeltaMean - 1;\n                    }\n                  );\n                  Render.status(\n                    context,\n                    x + (gap + width) * 2,\n                    y,\n                    width,\n                    graphHeight,\n                    engineUpdatesHistory.length,\n                    lastEngineUpdatesPerFrame + " upf",\n                    Math.pow(Common.clamp(engineUpdatesMean / neededUpdatesPerFrame || 1, 0, 1), 4),\n                    function(i) {\n                      return engineUpdatesHistory[i] / engineUpdatesMean - 1;\n                    }\n                  );\n                  Render.status(\n                    context,\n                    x + (gap + width) * 3,\n                    y,\n                    width,\n                    graphHeight,\n                    engineElapsedHistory.length,\n                    engineElapsedMean.toFixed(2) + " ut",\n                    1 - lastEngineUpdatesPerFrame * engineElapsedMean / Render._goodFps,\n                    function(i) {\n                      return engineElapsedHistory[i] / engineElapsedMean - 1;\n                    }\n                  );\n                  Render.status(\n                    context,\n                    x + (gap + width) * 4,\n                    y,\n                    width,\n                    graphHeight,\n                    elapsedHistory.length,\n                    elapsedMean.toFixed(2) + " rt",\n                    1 - elapsedMean / Render._goodFps,\n                    function(i) {\n                      return elapsedHistory[i] / elapsedMean - 1;\n                    }\n                  );\n                  Render.status(\n                    context,\n                    x + (gap + width) * 5,\n                    y,\n                    width,\n                    graphHeight,\n                    timestampElapsedHistory.length,\n                    rateMean.toFixed(2) + " x",\n                    rateMean * rateMean * rateMean,\n                    function(i) {\n                      return (timestampElapsedHistory[i] / deltaHistory[i] / rateMean || 0) - 1;\n                    }\n                  );\n                };\n                Render.status = function(context, x, y, width, height, count, label, indicator, plotY) {\n                  context.strokeStyle = "#888";\n                  context.fillStyle = "#444";\n                  context.lineWidth = 1;\n                  context.fillRect(x, y + 7, width, 1);\n                  context.beginPath();\n                  context.moveTo(x, y + 7 - height * Common.clamp(0.4 * plotY(0), -2, 2));\n                  for (var i = 0; i < width; i += 1) {\n                    context.lineTo(x + i, y + 7 - (i < count ? height * Common.clamp(0.4 * plotY(i), -2, 2) : 0));\n                  }\n                  context.stroke();\n                  context.fillStyle = "hsl(" + Common.clamp(25 + 95 * indicator, 0, 120) + ",100%,60%)";\n                  context.fillRect(x, y - 7, 4, 4);\n                  context.font = "12px Arial";\n                  context.textBaseline = "middle";\n                  context.textAlign = "right";\n                  context.fillStyle = "#eee";\n                  context.fillText(label, x + width, y - 5);\n                };\n                Render.constraints = function(constraints, context) {\n                  var c = context;\n                  for (var i = 0; i < constraints.length; i++) {\n                    var constraint = constraints[i];\n                    if (!constraint.render.visible || !constraint.pointA || !constraint.pointB)\n                      continue;\n                    var bodyA = constraint.bodyA, bodyB = constraint.bodyB, start, end;\n                    if (bodyA) {\n                      start = Vector.add(bodyA.position, constraint.pointA);\n                    } else {\n                      start = constraint.pointA;\n                    }\n                    if (constraint.render.type === "pin") {\n                      c.beginPath();\n                      c.arc(start.x, start.y, 3, 0, 2 * Math.PI);\n                      c.closePath();\n                    } else {\n                      if (bodyB) {\n                        end = Vector.add(bodyB.position, constraint.pointB);\n                      } else {\n                        end = constraint.pointB;\n                      }\n                      c.beginPath();\n                      c.moveTo(start.x, start.y);\n                      if (constraint.render.type === "spring") {\n                        var delta = Vector.sub(end, start), normal = Vector.perp(Vector.normalise(delta)), coils = Math.ceil(Common.clamp(constraint.length / 5, 12, 20)), offset;\n                        for (var j = 1; j < coils; j += 1) {\n                          offset = j % 2 === 0 ? 1 : -1;\n                          c.lineTo(\n                            start.x + delta.x * (j / coils) + normal.x * offset * 4,\n                            start.y + delta.y * (j / coils) + normal.y * offset * 4\n                          );\n                        }\n                      }\n                      c.lineTo(end.x, end.y);\n                    }\n                    if (constraint.render.lineWidth) {\n                      c.lineWidth = constraint.render.lineWidth;\n                      c.strokeStyle = constraint.render.strokeStyle;\n                      c.stroke();\n                    }\n                    if (constraint.render.anchors) {\n                      c.fillStyle = constraint.render.strokeStyle;\n                      c.beginPath();\n                      c.arc(start.x, start.y, 3, 0, 2 * Math.PI);\n                      c.arc(end.x, end.y, 3, 0, 2 * Math.PI);\n                      c.closePath();\n                      c.fill();\n                    }\n                  }\n                };\n                Render.bodies = function(render, bodies, context) {\n                  var c = context, engine = render.engine, options = render.options, showInternalEdges = options.showInternalEdges || !options.wireframes, body, part, i, k;\n                  for (i = 0; i < bodies.length; i++) {\n                    body = bodies[i];\n                    if (!body.render.visible)\n                      continue;\n                    for (k = body.parts.length > 1 ? 1 : 0; k < body.parts.length; k++) {\n                      part = body.parts[k];\n                      if (!part.render.visible)\n                        continue;\n                      if (options.showSleeping && body.isSleeping) {\n                        c.globalAlpha = 0.5 * part.render.opacity;\n                      } else if (part.render.opacity !== 1) {\n                        c.globalAlpha = part.render.opacity;\n                      }\n                      if (part.render.sprite && part.render.sprite.texture && !options.wireframes) {\n                        var sprite = part.render.sprite, texture = _getTexture(render, sprite.texture);\n                        c.translate(part.position.x, part.position.y);\n                        c.rotate(part.angle);\n                        c.drawImage(\n                          texture,\n                          texture.width * -sprite.xOffset * sprite.xScale,\n                          texture.height * -sprite.yOffset * sprite.yScale,\n                          texture.width * sprite.xScale,\n                          texture.height * sprite.yScale\n                        );\n                        c.rotate(-part.angle);\n                        c.translate(-part.position.x, -part.position.y);\n                      } else {\n                        if (part.circleRadius) {\n                          c.beginPath();\n                          c.arc(part.position.x, part.position.y, part.circleRadius, 0, 2 * Math.PI);\n                        } else {\n                          c.beginPath();\n                          c.moveTo(part.vertices[0].x, part.vertices[0].y);\n                          for (var j = 1; j < part.vertices.length; j++) {\n                            if (!part.vertices[j - 1].isInternal || showInternalEdges) {\n                              c.lineTo(part.vertices[j].x, part.vertices[j].y);\n                            } else {\n                              c.moveTo(part.vertices[j].x, part.vertices[j].y);\n                            }\n                            if (part.vertices[j].isInternal && !showInternalEdges) {\n                              c.moveTo(part.vertices[(j + 1) % part.vertices.length].x, part.vertices[(j + 1) % part.vertices.length].y);\n                            }\n                          }\n                          c.lineTo(part.vertices[0].x, part.vertices[0].y);\n                          c.closePath();\n                        }\n                        if (!options.wireframes) {\n                          c.fillStyle = part.render.fillStyle;\n                          if (part.render.lineWidth) {\n                            c.lineWidth = part.render.lineWidth;\n                            c.strokeStyle = part.render.strokeStyle;\n                            c.stroke();\n                          }\n                          c.fill();\n                        } else {\n                          c.lineWidth = 1;\n                          c.strokeStyle = render.options.wireframeStrokeStyle;\n                          c.stroke();\n                        }\n                      }\n                      c.globalAlpha = 1;\n                    }\n                  }\n                };\n                Render.bodyWireframes = function(render, bodies, context) {\n                  var c = context, showInternalEdges = render.options.showInternalEdges, body, part, i, j, k;\n                  c.beginPath();\n                  for (i = 0; i < bodies.length; i++) {\n                    body = bodies[i];\n                    if (!body.render.visible)\n                      continue;\n                    for (k = body.parts.length > 1 ? 1 : 0; k < body.parts.length; k++) {\n                      part = body.parts[k];\n                      c.moveTo(part.vertices[0].x, part.vertices[0].y);\n                      for (j = 1; j < part.vertices.length; j++) {\n                        if (!part.vertices[j - 1].isInternal || showInternalEdges) {\n                          c.lineTo(part.vertices[j].x, part.vertices[j].y);\n                        } else {\n                          c.moveTo(part.vertices[j].x, part.vertices[j].y);\n                        }\n                        if (part.vertices[j].isInternal && !showInternalEdges) {\n                          c.moveTo(part.vertices[(j + 1) % part.vertices.length].x, part.vertices[(j + 1) % part.vertices.length].y);\n                        }\n                      }\n                      c.lineTo(part.vertices[0].x, part.vertices[0].y);\n                    }\n                  }\n                  c.lineWidth = 1;\n                  c.strokeStyle = render.options.wireframeStrokeStyle;\n                  c.stroke();\n                };\n                Render.bodyConvexHulls = function(render, bodies, context) {\n                  var c = context, body, part, i, j, k;\n                  c.beginPath();\n                  for (i = 0; i < bodies.length; i++) {\n                    body = bodies[i];\n                    if (!body.render.visible || body.parts.length === 1)\n                      continue;\n                    c.moveTo(body.vertices[0].x, body.vertices[0].y);\n                    for (j = 1; j < body.vertices.length; j++) {\n                      c.lineTo(body.vertices[j].x, body.vertices[j].y);\n                    }\n                    c.lineTo(body.vertices[0].x, body.vertices[0].y);\n                  }\n                  c.lineWidth = 1;\n                  c.strokeStyle = "rgba(255,255,255,0.2)";\n                  c.stroke();\n                };\n                Render.vertexNumbers = function(render, bodies, context) {\n                  var c = context, i, j, k;\n                  for (i = 0; i < bodies.length; i++) {\n                    var parts = bodies[i].parts;\n                    for (k = parts.length > 1 ? 1 : 0; k < parts.length; k++) {\n                      var part = parts[k];\n                      for (j = 0; j < part.vertices.length; j++) {\n                        c.fillStyle = "rgba(255,255,255,0.2)";\n                        c.fillText(i + "_" + j, part.position.x + (part.vertices[j].x - part.position.x) * 0.8, part.position.y + (part.vertices[j].y - part.position.y) * 0.8);\n                      }\n                    }\n                  }\n                };\n                Render.mousePosition = function(render, mouse, context) {\n                  var c = context;\n                  c.fillStyle = "rgba(255,255,255,0.8)";\n                  c.fillText(mouse.position.x + "  " + mouse.position.y, mouse.position.x + 5, mouse.position.y - 5);\n                };\n                Render.bodyBounds = function(render, bodies, context) {\n                  var c = context, engine = render.engine, options = render.options;\n                  c.beginPath();\n                  for (var i = 0; i < bodies.length; i++) {\n                    var body = bodies[i];\n                    if (body.render.visible) {\n                      var parts = bodies[i].parts;\n                      for (var j = parts.length > 1 ? 1 : 0; j < parts.length; j++) {\n                        var part = parts[j];\n                        c.rect(part.bounds.min.x, part.bounds.min.y, part.bounds.max.x - part.bounds.min.x, part.bounds.max.y - part.bounds.min.y);\n                      }\n                    }\n                  }\n                  if (options.wireframes) {\n                    c.strokeStyle = "rgba(255,255,255,0.08)";\n                  } else {\n                    c.strokeStyle = "rgba(0,0,0,0.1)";\n                  }\n                  c.lineWidth = 1;\n                  c.stroke();\n                };\n                Render.bodyAxes = function(render, bodies, context) {\n                  var c = context, engine = render.engine, options = render.options, part, i, j, k;\n                  c.beginPath();\n                  for (i = 0; i < bodies.length; i++) {\n                    var body = bodies[i], parts = body.parts;\n                    if (!body.render.visible)\n                      continue;\n                    if (options.showAxes) {\n                      for (j = parts.length > 1 ? 1 : 0; j < parts.length; j++) {\n                        part = parts[j];\n                        for (k = 0; k < part.axes.length; k++) {\n                          var axis = part.axes[k];\n                          c.moveTo(part.position.x, part.position.y);\n                          c.lineTo(part.position.x + axis.x * 20, part.position.y + axis.y * 20);\n                        }\n                      }\n                    } else {\n                      for (j = parts.length > 1 ? 1 : 0; j < parts.length; j++) {\n                        part = parts[j];\n                        for (k = 0; k < part.axes.length; k++) {\n                          c.moveTo(part.position.x, part.position.y);\n                          c.lineTo(\n                            (part.vertices[0].x + part.vertices[part.vertices.length - 1].x) / 2,\n                            (part.vertices[0].y + part.vertices[part.vertices.length - 1].y) / 2\n                          );\n                        }\n                      }\n                    }\n                  }\n                  if (options.wireframes) {\n                    c.strokeStyle = "indianred";\n                    c.lineWidth = 1;\n                  } else {\n                    c.strokeStyle = "rgba(255, 255, 255, 0.4)";\n                    c.globalCompositeOperation = "overlay";\n                    c.lineWidth = 2;\n                  }\n                  c.stroke();\n                  c.globalCompositeOperation = "source-over";\n                };\n                Render.bodyPositions = function(render, bodies, context) {\n                  var c = context, engine = render.engine, options = render.options, body, part, i, k;\n                  c.beginPath();\n                  for (i = 0; i < bodies.length; i++) {\n                    body = bodies[i];\n                    if (!body.render.visible)\n                      continue;\n                    for (k = 0; k < body.parts.length; k++) {\n                      part = body.parts[k];\n                      c.arc(part.position.x, part.position.y, 3, 0, 2 * Math.PI, false);\n                      c.closePath();\n                    }\n                  }\n                  if (options.wireframes) {\n                    c.fillStyle = "indianred";\n                  } else {\n                    c.fillStyle = "rgba(0,0,0,0.5)";\n                  }\n                  c.fill();\n                  c.beginPath();\n                  for (i = 0; i < bodies.length; i++) {\n                    body = bodies[i];\n                    if (body.render.visible) {\n                      c.arc(body.positionPrev.x, body.positionPrev.y, 2, 0, 2 * Math.PI, false);\n                      c.closePath();\n                    }\n                  }\n                  c.fillStyle = "rgba(255,165,0,0.8)";\n                  c.fill();\n                };\n                Render.bodyVelocity = function(render, bodies, context) {\n                  var c = context;\n                  c.beginPath();\n                  for (var i = 0; i < bodies.length; i++) {\n                    var body = bodies[i];\n                    if (!body.render.visible)\n                      continue;\n                    var velocity = Body.getVelocity(body);\n                    c.moveTo(body.position.x, body.position.y);\n                    c.lineTo(body.position.x + velocity.x, body.position.y + velocity.y);\n                  }\n                  c.lineWidth = 3;\n                  c.strokeStyle = "cornflowerblue";\n                  c.stroke();\n                };\n                Render.bodyIds = function(render, bodies, context) {\n                  var c = context, i, j;\n                  for (i = 0; i < bodies.length; i++) {\n                    if (!bodies[i].render.visible)\n                      continue;\n                    var parts = bodies[i].parts;\n                    for (j = parts.length > 1 ? 1 : 0; j < parts.length; j++) {\n                      var part = parts[j];\n                      c.font = "12px Arial";\n                      c.fillStyle = "rgba(255,255,255,0.5)";\n                      c.fillText(part.id, part.position.x + 10, part.position.y - 10);\n                    }\n                  }\n                };\n                Render.collisions = function(render, pairs, context) {\n                  var c = context, options = render.options, pair, collision, corrected, bodyA, bodyB, i, j;\n                  c.beginPath();\n                  for (i = 0; i < pairs.length; i++) {\n                    pair = pairs[i];\n                    if (!pair.isActive)\n                      continue;\n                    collision = pair.collision;\n                    for (j = 0; j < pair.contactCount; j++) {\n                      var contact = pair.contacts[j], vertex = contact.vertex;\n                      c.rect(vertex.x - 1.5, vertex.y - 1.5, 3.5, 3.5);\n                    }\n                  }\n                  if (options.wireframes) {\n                    c.fillStyle = "rgba(255,255,255,0.7)";\n                  } else {\n                    c.fillStyle = "orange";\n                  }\n                  c.fill();\n                  c.beginPath();\n                  for (i = 0; i < pairs.length; i++) {\n                    pair = pairs[i];\n                    if (!pair.isActive)\n                      continue;\n                    collision = pair.collision;\n                    if (pair.contactCount > 0) {\n                      var normalPosX = pair.contacts[0].vertex.x, normalPosY = pair.contacts[0].vertex.y;\n                      if (pair.contactCount === 2) {\n                        normalPosX = (pair.contacts[0].vertex.x + pair.contacts[1].vertex.x) / 2;\n                        normalPosY = (pair.contacts[0].vertex.y + pair.contacts[1].vertex.y) / 2;\n                      }\n                      if (collision.bodyB === collision.supports[0].body || collision.bodyA.isStatic === true) {\n                        c.moveTo(normalPosX - collision.normal.x * 8, normalPosY - collision.normal.y * 8);\n                      } else {\n                        c.moveTo(normalPosX + collision.normal.x * 8, normalPosY + collision.normal.y * 8);\n                      }\n                      c.lineTo(normalPosX, normalPosY);\n                    }\n                  }\n                  if (options.wireframes) {\n                    c.strokeStyle = "rgba(255,165,0,0.7)";\n                  } else {\n                    c.strokeStyle = "orange";\n                  }\n                  c.lineWidth = 1;\n                  c.stroke();\n                };\n                Render.separations = function(render, pairs, context) {\n                  var c = context, options = render.options, pair, collision, corrected, bodyA, bodyB, i, j;\n                  c.beginPath();\n                  for (i = 0; i < pairs.length; i++) {\n                    pair = pairs[i];\n                    if (!pair.isActive)\n                      continue;\n                    collision = pair.collision;\n                    bodyA = collision.bodyA;\n                    bodyB = collision.bodyB;\n                    var k = 1;\n                    if (!bodyB.isStatic && !bodyA.isStatic) k = 0.5;\n                    if (bodyB.isStatic) k = 0;\n                    c.moveTo(bodyB.position.x, bodyB.position.y);\n                    c.lineTo(bodyB.position.x - collision.penetration.x * k, bodyB.position.y - collision.penetration.y * k);\n                    k = 1;\n                    if (!bodyB.isStatic && !bodyA.isStatic) k = 0.5;\n                    if (bodyA.isStatic) k = 0;\n                    c.moveTo(bodyA.position.x, bodyA.position.y);\n                    c.lineTo(bodyA.position.x + collision.penetration.x * k, bodyA.position.y + collision.penetration.y * k);\n                  }\n                  if (options.wireframes) {\n                    c.strokeStyle = "rgba(255,165,0,0.5)";\n                  } else {\n                    c.strokeStyle = "orange";\n                  }\n                  c.stroke();\n                };\n                Render.inspector = function(inspector, context) {\n                  var engine = inspector.engine, selected = inspector.selected, render = inspector.render, options = render.options, bounds;\n                  if (options.hasBounds) {\n                    var boundsWidth = render.bounds.max.x - render.bounds.min.x, boundsHeight = render.bounds.max.y - render.bounds.min.y, boundsScaleX = boundsWidth / render.options.width, boundsScaleY = boundsHeight / render.options.height;\n                    context.scale(1 / boundsScaleX, 1 / boundsScaleY);\n                    context.translate(-render.bounds.min.x, -render.bounds.min.y);\n                  }\n                  for (var i = 0; i < selected.length; i++) {\n                    var item = selected[i].data;\n                    context.translate(0.5, 0.5);\n                    context.lineWidth = 1;\n                    context.strokeStyle = "rgba(255,165,0,0.9)";\n                    context.setLineDash([1, 2]);\n                    switch (item.type) {\n                      case "body":\n                        bounds = item.bounds;\n                        context.beginPath();\n                        context.rect(\n                          Math.floor(bounds.min.x - 3),\n                          Math.floor(bounds.min.y - 3),\n                          Math.floor(bounds.max.x - bounds.min.x + 6),\n                          Math.floor(bounds.max.y - bounds.min.y + 6)\n                        );\n                        context.closePath();\n                        context.stroke();\n                        break;\n                      case "constraint":\n                        var point = item.pointA;\n                        if (item.bodyA)\n                          point = item.pointB;\n                        context.beginPath();\n                        context.arc(point.x, point.y, 10, 0, 2 * Math.PI);\n                        context.closePath();\n                        context.stroke();\n                        break;\n                    }\n                    context.setLineDash([]);\n                    context.translate(-0.5, -0.5);\n                  }\n                  if (inspector.selectStart !== null) {\n                    context.translate(0.5, 0.5);\n                    context.lineWidth = 1;\n                    context.strokeStyle = "rgba(255,165,0,0.6)";\n                    context.fillStyle = "rgba(255,165,0,0.1)";\n                    bounds = inspector.selectBounds;\n                    context.beginPath();\n                    context.rect(\n                      Math.floor(bounds.min.x),\n                      Math.floor(bounds.min.y),\n                      Math.floor(bounds.max.x - bounds.min.x),\n                      Math.floor(bounds.max.y - bounds.min.y)\n                    );\n                    context.closePath();\n                    context.stroke();\n                    context.fill();\n                    context.translate(-0.5, -0.5);\n                  }\n                  if (options.hasBounds)\n                    context.setTransform(1, 0, 0, 1, 0, 0);\n                };\n                var _updateTiming = function(render, time) {\n                  var engine = render.engine, timing = render.timing, historySize = timing.historySize, timestamp = engine.timing.timestamp;\n                  timing.delta = time - timing.lastTime || Render._goodDelta;\n                  timing.lastTime = time;\n                  timing.timestampElapsed = timestamp - timing.lastTimestamp || 0;\n                  timing.lastTimestamp = timestamp;\n                  timing.deltaHistory.unshift(timing.delta);\n                  timing.deltaHistory.length = Math.min(timing.deltaHistory.length, historySize);\n                  timing.engineDeltaHistory.unshift(engine.timing.lastDelta);\n                  timing.engineDeltaHistory.length = Math.min(timing.engineDeltaHistory.length, historySize);\n                  timing.timestampElapsedHistory.unshift(timing.timestampElapsed);\n                  timing.timestampElapsedHistory.length = Math.min(timing.timestampElapsedHistory.length, historySize);\n                  timing.engineUpdatesHistory.unshift(engine.timing.lastUpdatesPerFrame);\n                  timing.engineUpdatesHistory.length = Math.min(timing.engineUpdatesHistory.length, historySize);\n                  timing.engineElapsedHistory.unshift(engine.timing.lastElapsed);\n                  timing.engineElapsedHistory.length = Math.min(timing.engineElapsedHistory.length, historySize);\n                  timing.elapsedHistory.unshift(timing.lastElapsed);\n                  timing.elapsedHistory.length = Math.min(timing.elapsedHistory.length, historySize);\n                };\n                var _mean = function(values) {\n                  var result = 0;\n                  for (var i = 0; i < values.length; i += 1) {\n                    result += values[i];\n                  }\n                  return result / values.length || 0;\n                };\n                var _createCanvas = function(width, height) {\n                  var canvas = document.createElement("canvas");\n                  canvas.width = width;\n                  canvas.height = height;\n                  canvas.oncontextmenu = function() {\n                    return false;\n                  };\n                  canvas.onselectstart = function() {\n                    return false;\n                  };\n                  return canvas;\n                };\n                var _getPixelRatio = function(canvas) {\n                  var context = canvas.getContext("2d"), devicePixelRatio = window.devicePixelRatio || 1, backingStorePixelRatio = context.webkitBackingStorePixelRatio || context.mozBackingStorePixelRatio || context.msBackingStorePixelRatio || context.oBackingStorePixelRatio || context.backingStorePixelRatio || 1;\n                  return devicePixelRatio / backingStorePixelRatio;\n                };\n                var _getTexture = function(render, imagePath) {\n                  var image = render.textures[imagePath];\n                  if (image)\n                    return image;\n                  image = render.textures[imagePath] = new Image();\n                  image.src = imagePath;\n                  return image;\n                };\n                var _applyBackground = function(render, background) {\n                  var cssBackground = background;\n                  if (/(jpg|gif|png)$/.test(background))\n                    cssBackground = "url(" + background + ")";\n                  render.canvas.style.background = cssBackground;\n                  render.canvas.style.backgroundSize = "contain";\n                  render.currentBackground = background;\n                };\n              })();\n            }),\n            /* 27 */\n            /***/\n            (function(module2, exports2, __webpack_require__) {\n              var Runner = {};\n              module2.exports = Runner;\n              var Events = __webpack_require__(5);\n              var Engine = __webpack_require__(17);\n              var Common = __webpack_require__(0);\n              (function() {\n                Runner._maxFrameDelta = 1e3 / 15;\n                Runner._frameDeltaFallback = 1e3 / 60;\n                Runner._timeBufferMargin = 1.5;\n                Runner._elapsedNextEstimate = 1;\n                Runner._smoothingLowerBound = 0.1;\n                Runner._smoothingUpperBound = 0.9;\n                Runner.create = function(options) {\n                  var defaults = {\n                    delta: 1e3 / 60,\n                    frameDelta: null,\n                    frameDeltaSmoothing: true,\n                    frameDeltaSnapping: true,\n                    frameDeltaHistory: [],\n                    frameDeltaHistorySize: 100,\n                    frameRequestId: null,\n                    timeBuffer: 0,\n                    timeLastTick: null,\n                    maxUpdates: null,\n                    maxFrameTime: 1e3 / 30,\n                    lastUpdatesDeferred: 0,\n                    enabled: true\n                  };\n                  var runner = Common.extend(defaults, options);\n                  runner.fps = 0;\n                  return runner;\n                };\n                Runner.run = function(runner, engine) {\n                  runner.timeBuffer = Runner._frameDeltaFallback;\n                  (function onFrame(time) {\n                    runner.frameRequestId = Runner._onNextFrame(runner, onFrame);\n                    if (time && runner.enabled) {\n                      Runner.tick(runner, engine, time);\n                    }\n                  })();\n                  return runner;\n                };\n                Runner.tick = function(runner, engine, time) {\n                  var tickStartTime = Common.now(), engineDelta = runner.delta, updateCount = 0;\n                  var frameDelta = time - runner.timeLastTick;\n                  if (!frameDelta || !runner.timeLastTick || frameDelta > Math.max(Runner._maxFrameDelta, runner.maxFrameTime)) {\n                    frameDelta = runner.frameDelta || Runner._frameDeltaFallback;\n                  }\n                  if (runner.frameDeltaSmoothing) {\n                    runner.frameDeltaHistory.push(frameDelta);\n                    runner.frameDeltaHistory = runner.frameDeltaHistory.slice(-runner.frameDeltaHistorySize);\n                    var deltaHistorySorted = runner.frameDeltaHistory.slice(0).sort();\n                    var deltaHistoryWindow = runner.frameDeltaHistory.slice(\n                      deltaHistorySorted.length * Runner._smoothingLowerBound,\n                      deltaHistorySorted.length * Runner._smoothingUpperBound\n                    );\n                    var frameDeltaSmoothed = _mean(deltaHistoryWindow);\n                    frameDelta = frameDeltaSmoothed || frameDelta;\n                  }\n                  if (runner.frameDeltaSnapping) {\n                    frameDelta = 1e3 / Math.round(1e3 / frameDelta);\n                  }\n                  runner.frameDelta = frameDelta;\n                  runner.timeLastTick = time;\n                  runner.timeBuffer += runner.frameDelta;\n                  runner.timeBuffer = Common.clamp(\n                    runner.timeBuffer,\n                    0,\n                    runner.frameDelta + engineDelta * Runner._timeBufferMargin\n                  );\n                  runner.lastUpdatesDeferred = 0;\n                  var maxUpdates = runner.maxUpdates || Math.ceil(runner.maxFrameTime / engineDelta);\n                  var event = {\n                    timestamp: engine.timing.timestamp\n                  };\n                  Events.trigger(runner, "beforeTick", event);\n                  Events.trigger(runner, "tick", event);\n                  var updateStartTime = Common.now();\n                  while (engineDelta > 0 && runner.timeBuffer >= engineDelta * Runner._timeBufferMargin) {\n                    Events.trigger(runner, "beforeUpdate", event);\n                    Engine.update(engine, engineDelta);\n                    Events.trigger(runner, "afterUpdate", event);\n                    runner.timeBuffer -= engineDelta;\n                    updateCount += 1;\n                    var elapsedTimeTotal = Common.now() - tickStartTime, elapsedTimeUpdates = Common.now() - updateStartTime, elapsedNextEstimate = elapsedTimeTotal + Runner._elapsedNextEstimate * elapsedTimeUpdates / updateCount;\n                    if (updateCount >= maxUpdates || elapsedNextEstimate > runner.maxFrameTime) {\n                      runner.lastUpdatesDeferred = Math.round(Math.max(0, runner.timeBuffer / engineDelta - Runner._timeBufferMargin));\n                      break;\n                    }\n                  }\n                  engine.timing.lastUpdatesPerFrame = updateCount;\n                  Events.trigger(runner, "afterTick", event);\n                  if (runner.frameDeltaHistory.length >= 100) {\n                    if (runner.lastUpdatesDeferred && Math.round(runner.frameDelta / engineDelta) > maxUpdates) {\n                      Common.warnOnce("Matter.Runner: runner reached runner.maxUpdates, see docs.");\n                    } else if (runner.lastUpdatesDeferred) {\n                      Common.warnOnce("Matter.Runner: runner reached runner.maxFrameTime, see docs.");\n                    }\n                    if (typeof runner.isFixed !== "undefined") {\n                      Common.warnOnce("Matter.Runner: runner.isFixed is now redundant, see docs.");\n                    }\n                    if (runner.deltaMin || runner.deltaMax) {\n                      Common.warnOnce("Matter.Runner: runner.deltaMin and runner.deltaMax were removed, see docs.");\n                    }\n                    if (runner.fps !== 0) {\n                      Common.warnOnce("Matter.Runner: runner.fps was replaced by runner.delta, see docs.");\n                    }\n                  }\n                };\n                Runner.stop = function(runner) {\n                  Runner._cancelNextFrame(runner);\n                };\n                Runner._onNextFrame = function(runner, callback) {\n                  if (typeof window !== "undefined" && window.requestAnimationFrame) {\n                    runner.frameRequestId = window.requestAnimationFrame(callback);\n                  } else {\n                    throw new Error("Matter.Runner: missing required global window.requestAnimationFrame.");\n                  }\n                  return runner.frameRequestId;\n                };\n                Runner._cancelNextFrame = function(runner) {\n                  if (typeof window !== "undefined" && window.cancelAnimationFrame) {\n                    window.cancelAnimationFrame(runner.frameRequestId);\n                  } else {\n                    throw new Error("Matter.Runner: missing required global window.cancelAnimationFrame.");\n                  }\n                };\n                var _mean = function(values) {\n                  var result = 0, valuesLength = values.length;\n                  for (var i = 0; i < valuesLength; i += 1) {\n                    result += values[i];\n                  }\n                  return result / valuesLength || 0;\n                };\n              })();\n            }),\n            /* 28 */\n            /***/\n            (function(module2, exports2, __webpack_require__) {\n              var SAT = {};\n              module2.exports = SAT;\n              var Collision = __webpack_require__(8);\n              var Common = __webpack_require__(0);\n              var deprecated = Common.deprecated;\n              (function() {\n                SAT.collides = function(bodyA, bodyB) {\n                  return Collision.collides(bodyA, bodyB);\n                };\n                deprecated(SAT, "collides", "SAT.collides \\u27A4 replaced by Collision.collides");\n              })();\n            }),\n            /* 29 */\n            /***/\n            (function(module2, exports2, __webpack_require__) {\n              var Svg = {};\n              module2.exports = Svg;\n              var Bounds = __webpack_require__(1);\n              var Common = __webpack_require__(0);\n              (function() {\n                Svg.pathToVertices = function(path, sampleLength) {\n                  if (typeof window !== "undefined" && !("SVGPathSeg" in window)) {\n                    Common.warn("Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.");\n                  }\n                  var i, il, total, point, segment, segments, segmentsQueue, lastSegment, lastPoint, segmentIndex, points = [], lx, ly, length = 0, x = 0, y = 0;\n                  sampleLength = sampleLength || 15;\n                  var addPoint = function(px, py, pathSegType) {\n                    var isRelative = pathSegType % 2 === 1 && pathSegType > 1;\n                    if (!lastPoint || px != lastPoint.x || py != lastPoint.y) {\n                      if (lastPoint && isRelative) {\n                        lx = lastPoint.x;\n                        ly = lastPoint.y;\n                      } else {\n                        lx = 0;\n                        ly = 0;\n                      }\n                      var point2 = {\n                        x: lx + px,\n                        y: ly + py\n                      };\n                      if (isRelative || !lastPoint) {\n                        lastPoint = point2;\n                      }\n                      points.push(point2);\n                      x = lx + px;\n                      y = ly + py;\n                    }\n                  };\n                  var addSegmentPoint = function(segment2) {\n                    var segType = segment2.pathSegTypeAsLetter.toUpperCase();\n                    if (segType === "Z")\n                      return;\n                    switch (segType) {\n                      case "M":\n                      case "L":\n                      case "T":\n                      case "C":\n                      case "S":\n                      case "Q":\n                        x = segment2.x;\n                        y = segment2.y;\n                        break;\n                      case "H":\n                        x = segment2.x;\n                        break;\n                      case "V":\n                        y = segment2.y;\n                        break;\n                    }\n                    addPoint(x, y, segment2.pathSegType);\n                  };\n                  Svg._svgPathToAbsolute(path);\n                  total = path.getTotalLength();\n                  segments = [];\n                  for (i = 0; i < path.pathSegList.numberOfItems; i += 1)\n                    segments.push(path.pathSegList.getItem(i));\n                  segmentsQueue = segments.concat();\n                  while (length < total) {\n                    segmentIndex = path.getPathSegAtLength(length);\n                    segment = segments[segmentIndex];\n                    if (segment != lastSegment) {\n                      while (segmentsQueue.length && segmentsQueue[0] != segment)\n                        addSegmentPoint(segmentsQueue.shift());\n                      lastSegment = segment;\n                    }\n                    switch (segment.pathSegTypeAsLetter.toUpperCase()) {\n                      case "C":\n                      case "T":\n                      case "S":\n                      case "Q":\n                      case "A":\n                        point = path.getPointAtLength(length);\n                        addPoint(point.x, point.y, 0);\n                        break;\n                    }\n                    length += sampleLength;\n                  }\n                  for (i = 0, il = segmentsQueue.length; i < il; ++i)\n                    addSegmentPoint(segmentsQueue[i]);\n                  return points;\n                };\n                Svg._svgPathToAbsolute = function(path) {\n                  var x0, y0, x1, y1, x2, y2, segs = path.pathSegList, x = 0, y = 0, len = segs.numberOfItems;\n                  for (var i = 0; i < len; ++i) {\n                    var seg = segs.getItem(i), segType = seg.pathSegTypeAsLetter;\n                    if (/[MLHVCSQTA]/.test(segType)) {\n                      if ("x" in seg) x = seg.x;\n                      if ("y" in seg) y = seg.y;\n                    } else {\n                      if ("x1" in seg) x1 = x + seg.x1;\n                      if ("x2" in seg) x2 = x + seg.x2;\n                      if ("y1" in seg) y1 = y + seg.y1;\n                      if ("y2" in seg) y2 = y + seg.y2;\n                      if ("x" in seg) x += seg.x;\n                      if ("y" in seg) y += seg.y;\n                      switch (segType) {\n                        case "m":\n                          segs.replaceItem(path.createSVGPathSegMovetoAbs(x, y), i);\n                          break;\n                        case "l":\n                          segs.replaceItem(path.createSVGPathSegLinetoAbs(x, y), i);\n                          break;\n                        case "h":\n                          segs.replaceItem(path.createSVGPathSegLinetoHorizontalAbs(x), i);\n                          break;\n                        case "v":\n                          segs.replaceItem(path.createSVGPathSegLinetoVerticalAbs(y), i);\n                          break;\n                        case "c":\n                          segs.replaceItem(path.createSVGPathSegCurvetoCubicAbs(x, y, x1, y1, x2, y2), i);\n                          break;\n                        case "s":\n                          segs.replaceItem(path.createSVGPathSegCurvetoCubicSmoothAbs(x, y, x2, y2), i);\n                          break;\n                        case "q":\n                          segs.replaceItem(path.createSVGPathSegCurvetoQuadraticAbs(x, y, x1, y1), i);\n                          break;\n                        case "t":\n                          segs.replaceItem(path.createSVGPathSegCurvetoQuadraticSmoothAbs(x, y), i);\n                          break;\n                        case "a":\n                          segs.replaceItem(path.createSVGPathSegArcAbs(x, y, seg.r1, seg.r2, seg.angle, seg.largeArcFlag, seg.sweepFlag), i);\n                          break;\n                        case "z":\n                        case "Z":\n                          x = x0;\n                          y = y0;\n                          break;\n                      }\n                    }\n                    if (segType == "M" || segType == "m") {\n                      x0 = x;\n                      y0 = y;\n                    }\n                  }\n                };\n              })();\n            }),\n            /* 30 */\n            /***/\n            (function(module2, exports2, __webpack_require__) {\n              var World = {};\n              module2.exports = World;\n              var Composite = __webpack_require__(6);\n              var Common = __webpack_require__(0);\n              (function() {\n                World.create = Composite.create;\n                World.add = Composite.add;\n                World.remove = Composite.remove;\n                World.clear = Composite.clear;\n                World.addComposite = Composite.addComposite;\n                World.addBody = Composite.addBody;\n                World.addConstraint = Composite.addConstraint;\n              })();\n            })\n            /******/\n          ])\n        );\n      });\n    }\n  });\n\n  // src/script.ts\n  var require_script = __commonJS({\n    "src/script.ts"() {\n      init_jquery_module();\n      var import_matter_js = __toESM(require_matter());\n      if (window.gravity_dlc_already_active) {\n        console.log("can\'t activate gravity dlc twice!");\n      } else {\n        let hasDirectText = function(el) {\n          return Array.from(el.childNodes).some(\n            (node) => node.nodeType === Node.TEXT_NODE && node.textContent?.trim()\n          );\n        }, visible = function(e) {\n          if ((e.css("background-color") != "rgba(0, 0, 0, 0)" && e.css("background-color") != "" || e.css("background-image") != "" && e.css("background-image") != "none" || hasDirectText(e[0]) || e[0] instanceof HTMLImageElement || e[0] instanceof SVGElement) && e[0].checkVisibility() && e.css("visibility") != "hidden") {\n            return 1;\n          }\n          for (let i = 0; i < e.children().length; i++) {\n            const e2 = e.children()[i];\n            if (visible(jquery_module_default(e2))) {\n              return 2;\n            }\n          }\n          return 0;\n        }, walk = function($e) {\n          let v = visible($e);\n          if (v == 0) {\n            return;\n          }\n          let e = { $: $e };\n          e.w = e.$.outerWidth(false);\n          e.h = e.$.outerHeight(false);\n          e.ax = pos(e.$).left;\n          e.ay = pos(e.$).top;\n          if ((hasDirectText($e[0]) || $e.css("border-radius") != "0px" && $e.css("border-radius") != "" && v == 1 || $e[0] instanceof SVGElement || $e[0] instanceof HTMLImageElement || $e.css("background-image") != "" && $e.css("background-image") != "none" && $e.css("width") != "") && e.w < window.innerWidth * 0.6 && e.h < window.innerHeight * 0.8 && e.ax < window.innerWidth && e.ay < innerHeight && e.ax + e.w > 0 && e.ay + e.h > 0) {\n            e.md = false;\n            e.ma = 0;\n            e.mb = 0;\n            pelements.push(e);\n          } else {\n            let children = $e.children();\n            for (let i = 0; i < children.length; i++) {\n              const e2 = children[i];\n              walk(jquery_module_default(e2));\n            }\n          }\n        }, pos = function(e, inner = false) {\n          let h = e.offsetParent();\n          let h3 = e.position();\n          let h4;\n          h4 = { left: parseFloat(e.css("margin-left")), top: parseFloat(e.css("margin-top")) };\n          if (h3 == void 0) {\n            return { left: 0, top: 0 };\n          }\n          if (!(h.get(0) instanceof HTMLHtmlElement) && h.length !== 0) {\n            let h2 = pos(h, true);\n            return { left: h2.left + h3.left + h4.left, top: h2.top + h3.top + h4.top };\n          } else {\n            return { left: h3.left + h4.left, top: h3.top + h4.top };\n          }\n        }, getComputedStyles = function(element) {\n          const computedStyles = window.getComputedStyle(element);\n          const inlineStyles = {};\n          for (let i = 0; i < computedStyles.length; i++) {\n            const key = computedStyles[i];\n            inlineStyles[key] = computedStyles.getPropertyValue(key);\n          }\n          return inlineStyles;\n        }, applyInlineStyles = function(element, styles) {\n          for (const key in styles) {\n            if (styles.hasOwnProperty(key)) {\n              element.style[key] = styles[key];\n            }\n          }\n        }, moveElementWithStyles = function(element, newParentSelector) {\n          if (!element) {\n            return;\n          }\n          const computedStyles = getComputedStyles(element);\n          const width = element.getBoundingClientRect().width;\n          const height = element.getBoundingClientRect().height;\n          const replacement = jquery_module_default(element.outerHTML);\n          clearIndices(replacement);\n          replacement.css("visibility", "hidden");\n          replacement.insertAfter(jquery_module_default(element));\n          const $element = jquery_module_default(element).detach();\n          applyInlineStyles(element, computedStyles);\n          jquery_module_default(element).css("width", width);\n          jquery_module_default(element).css("height", height);\n          jquery_module_default(newParentSelector).append($element);\n          $element.on("click change input keydown", (e) => {\n            e.stopImmediatePropagation();\n            replacement[0].click();\n          });\n        }, clearIndices = function(element) {\n          if (element[0].id) {\n            const computedStyles = getComputedStyles(element[0]);\n            applyInlineStyles(element[0], computedStyles);\n          }\n          element[0].id = "";\n          for (let i = 0; i < element.children().length; i++) {\n            const e = element.children()[i];\n            clearIndices(jquery_module_default(e));\n          }\n        }, lcomb = function(x1, y1, x2, y2, x3, y3) {\n          return { a: (x3 * y2 - x2 * y3) / (x1 * y2 - x2 * y1), b: (x3 * y1 - x1 * y3) / (x2 * y1 - x1 * y2) };\n        };\n        window.gravity_dlc_already_active = true;\n        console.log("inserting gravity dlc...");\n        Engine = import_matter_js.default.Engine, Runner = import_matter_js.default.Runner, Bodies = import_matter_js.default.Bodies, Composite = import_matter_js.default.Composite;\n        engine = Engine.create();\n        let pelements = [];\n        walk(jquery_module_default(document.body));\n        console.log(pelements);\n        let mm = false;\n        for (let i = 0; i < pelements.length; i++) {\n          let e = pelements[i];\n          moveElementWithStyles(e.$.get(0), document.body);\n          e.$.css("position", "absolute");\n          e.$.css("object-position", "0% 0%");\n          e.$.css("perceptive-origin", "0px 0px");\n          e.$.css("transform", "translate(" + e.ax + "px, " + e.ay + "px)");\n          e.$.css("transform-origin", "center");\n          e.$.css("margin", "0px");\n          e.$.css("left", "0px");\n          e.$.css("top", "0px");\n          e.$.css("z-index", "1000");\n          e.$.css("right", "unset");\n          e.$.css("bottom", "unset");\n          e.$.css("transition", "transform 0s");\n          if (e.ax == void 0 || e.ay == void 0 || e.w == void 0 || e.h == void 0) continue;\n          e.box = Bodies.rectangle(e.ax + e.w / 2, e.ay + e.h / 2, e.w, e.h);\n          import_matter_js.Body.applyForce(e.box, e.box.position, { x: (Math.random() * 2 - 1) * e.box.mass / 20, y: (Math.random() * 2 - 1) * e.box.mass / 20 });\n          Composite.add(engine.world, [e.box]);\n          e.$.on("mousedown", () => {\n            e.md = true;\n            if (e.box == void 0 || e.w == void 0 || e.h == void 0) return;\n            let h = lcomb(Math.cos(e.box.angle), Math.sin(e.box.angle), -Math.sin(e.box.angle), Math.cos(e.box.angle), mx - e.box.position.x, my - e.box.position.y);\n            e.ma = h.a;\n            e.mb = h.b;\n          });\n          e.$.on("click", (event) => {\n            if (mm) {\n              event.preventDefault();\n            }\n          });\n          jquery_module_default(document).on("mouseup", () => {\n            e.md = false;\n            if (e.box == void 0) return;\n          });\n        }\n        jquery_module_default(document.body).css("width", window.innerWidth + "px");\n        jquery_module_default(document.body).css("height", window.innerHeight + "px");\n        jquery_module_default(document.body).css("margin", "0px");\n        jquery_module_default(document.body).css("left", "0px");\n        jquery_module_default(document.body).css("top", "0px");\n        let mx = 0;\n        let my = 0;\n        jquery_module_default(document).on("click", () => {\n          mm = false;\n        });\n        jquery_module_default(document).on("mousedown", () => {\n          mm = false;\n        });\n        jquery_module_default(document).on("mousemove", (event) => {\n          mx = event.clientX;\n          my = event.clientY;\n          mm = true;\n        });\n        Composite.add(engine.world, [\n          Bodies.rectangle(window.innerWidth / 2, window.innerHeight + 30, window.innerWidth, 60, { isStatic: true }),\n          Bodies.rectangle(window.innerWidth / 2, -30, window.innerWidth, 60, { isStatic: true }),\n          Bodies.rectangle(-30, window.innerHeight / 2, 60, window.innerHeight, { isStatic: true }),\n          Bodies.rectangle(window.innerWidth + 30, window.innerHeight / 2, 60, window.innerHeight, { isStatic: true })\n        ]);\n        runner = Runner.create();\n        let frame = (t) => {\n          Runner.tick(runner, engine, t);\n          for (let i = 0; i < pelements.length; i++) {\n            const e = pelements[i];\n            if (e.md) {\n              if (e.box == void 0 || e.ma == void 0 || e.mb == void 0) return;\n              let v = { x: e.box.position.x + e.ma * Math.cos(e.box.angle) + e.mb * -Math.sin(e.box.angle), y: e.box.position.y + e.ma * Math.sin(e.box.angle) + e.mb * Math.cos(e.box.angle) };\n              let dx = mx - v.x;\n              let dy = my - v.y;\n              let vm = { x: (-e.box.velocity.x - e.box.angularVelocity * (e.box.position.x - v.x)) / 5e3 * e.box.mass, y: (-e.box.velocity.y + e.box.angularVelocity * (e.box.position.y - v.y)) / 5e3 * e.box.mass };\n              import_matter_js.Body.applyForce(e.box, v, { x: dx * e.box.mass / 1e4, y: dy * e.box.mass / 1e4 });\n              import_matter_js.Body.applyForce(e.box, v, vm);\n            }\n          }\n          for (let i = 0; i < pelements.length; i++) {\n            const e = pelements[i];\n            if (e.w == void 0 || e.h == void 0 || e.box == void 0) continue;\n            e.$.css("transform", "translate(" + (e.box.position.x - e.w / 2) + "px, " + (e.box.position.y - e.h / 2) + "px) rotate(" + e.box.angle / Math.PI * 180 + "deg)");\n          }\n          requestAnimationFrame(frame);\n        };\n        let b = true;\n        jquery_module_default(document).on("mousemove", () => {\n          if (b) {\n            b = false;\n            frame(0);\n          }\n        });\n        jquery_module_default(document.head).append(`<style>*{\n    -webkit-user-drag: none !important; /* For WebKit browsers */\n    user-drag: none; /* For other browsers that support this */\n    overflow: hidden;\n    user-select: none;\n  }</style>`);\n      }\n      var Engine;\n      var Runner;\n      var Bodies;\n      var Composite;\n      var engine;\n      var runner;\n    }\n  });\n  require_script();\n})();\n/*! Bundled license information:\n\njquery/dist-module/jquery.module.js:\n  (*!\n   * jQuery JavaScript Library v4.0.0\n   * https://jquery.com/\n   *\n   * Copyright OpenJS Foundation and other contributors\n   * Released under the MIT license\n   * https://jquery.com/license/\n   *\n   * Date: 2026-01-18T00:20Z\n   *)\n\nmatter-js/build/matter.js:\n  (*!\n   * matter-js 0.20.0 by @liabru\n   * http://brm.io/matter-js/\n   * License MIT\n   * \n   * The MIT License (MIT)\n   * \n   * Copyright (c) Liam Brummitt and contributors.\n   * \n   * Permission is hereby granted, free of charge, to any person obtaining a copy\n   * of this software and associated documentation files (the "Software"), to deal\n   * in the Software without restriction, including without limitation the rights\n   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n   * copies of the Software, and to permit persons to whom the Software is\n   * furnished to do so, subject to the following conditions:\n   * \n   * The above copyright notice and this permission notice shall be included in\n   * all copies or substantial portions of the Software.\n   * \n   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n   * THE SOFTWARE.\n   *)\n*/\n';
    }
  });

  // src/script.ts
  var require_script2 = __commonJS({
    "src/script.ts"() {
      init_jquery_module();
      var import_matter_js = __toESM(require_matter());
      var import_script = __toESM(require_script());
      if (chrome) {
        let s = document.createElement("script");
        s.textContent = import_script.default;
        document.head.append(s);
      } else if (window.gravity_dlc_already_active) {
        console.log("can't activate gravity dlc twice!");
      } else {
        let hasDirectText = function(el) {
          return Array.from(el.childNodes).some(
            (node) => node.nodeType === Node.TEXT_NODE && node.textContent?.trim()
          );
        }, visible = function(e) {
          if ((e.css("background-color") != "rgba(0, 0, 0, 0)" && e.css("background-color") != "" || e.css("background-image") != "" && e.css("background-image") != "none" || hasDirectText(e[0]) || e[0] instanceof HTMLImageElement || e[0] instanceof SVGElement) && e[0].checkVisibility() && e.css("visibility") != "hidden") {
            return 1;
          }
          for (let i = 0; i < e.children().length; i++) {
            const e2 = e.children()[i];
            if (visible(jquery_module_default(e2))) {
              return 2;
            }
          }
          return 0;
        }, walk = function($e) {
          let v = visible($e);
          if (v == 0) {
            return;
          }
          let e = { $: $e };
          e.w = e.$.outerWidth(false);
          e.h = e.$.outerHeight(false);
          e.ax = pos(e.$).left;
          e.ay = pos(e.$).top;
          if ((hasDirectText($e[0]) || $e.css("border-radius") != "0px" && $e.css("border-radius") != "" && v == 1 || $e[0] instanceof SVGElement || $e[0] instanceof HTMLImageElement || $e.css("background-image") != "" && $e.css("background-image") != "none" && $e.css("width") != "") && e.w < window.innerWidth * 0.6 && e.h < window.innerHeight * 0.8 && e.ax < window.innerWidth && e.ay < innerHeight && e.ax + e.w > 0 && e.ay + e.h > 0) {
            e.md = false;
            e.ma = 0;
            e.mb = 0;
            pelements.push(e);
          } else {
            let children = $e.children();
            for (let i = 0; i < children.length; i++) {
              const e2 = children[i];
              walk(jquery_module_default(e2));
            }
          }
        }, pos = function(e, inner = false) {
          let h = e.offsetParent();
          let h3 = e.position();
          let h4;
          h4 = { left: parseFloat(e.css("margin-left")), top: parseFloat(e.css("margin-top")) };
          if (h3 == void 0) {
            return { left: 0, top: 0 };
          }
          if (!(h.get(0) instanceof HTMLHtmlElement) && h.length !== 0) {
            let h2 = pos(h, true);
            return { left: h2.left + h3.left + h4.left, top: h2.top + h3.top + h4.top };
          } else {
            return { left: h3.left + h4.left, top: h3.top + h4.top };
          }
        }, getComputedStyles = function(element) {
          const computedStyles = window.getComputedStyle(element);
          const inlineStyles = {};
          for (let i = 0; i < computedStyles.length; i++) {
            const key = computedStyles[i];
            inlineStyles[key] = computedStyles.getPropertyValue(key);
          }
          return inlineStyles;
        }, applyInlineStyles = function(element, styles) {
          for (const key in styles) {
            if (styles.hasOwnProperty(key)) {
              element.style[key] = styles[key];
            }
          }
        }, moveElementWithStyles = function(element, newParentSelector) {
          if (!element) {
            return;
          }
          const computedStyles = getComputedStyles(element);
          const width = element.getBoundingClientRect().width;
          const height = element.getBoundingClientRect().height;
          const replacement = jquery_module_default(element.outerHTML);
          clearIndices(replacement);
          replacement.css("visibility", "hidden");
          replacement.insertAfter(jquery_module_default(element));
          const $element = jquery_module_default(element).detach();
          applyInlineStyles(element, computedStyles);
          jquery_module_default(element).css("width", width);
          jquery_module_default(element).css("height", height);
          jquery_module_default(newParentSelector).append($element);
          $element.on("click change input keydown", (e) => {
            e.stopImmediatePropagation();
            replacement[0].click();
          });
        }, clearIndices = function(element) {
          if (element[0].id) {
            const computedStyles = getComputedStyles(element[0]);
            applyInlineStyles(element[0], computedStyles);
          }
          element[0].id = "";
          for (let i = 0; i < element.children().length; i++) {
            const e = element.children()[i];
            clearIndices(jquery_module_default(e));
          }
        }, lcomb = function(x1, y1, x2, y2, x3, y3) {
          return { a: (x3 * y2 - x2 * y3) / (x1 * y2 - x2 * y1), b: (x3 * y1 - x1 * y3) / (x2 * y1 - x1 * y2) };
        };
        window.gravity_dlc_already_active = true;
        console.log("inserting gravity dlc...");
        Engine = import_matter_js.default.Engine, Runner = import_matter_js.default.Runner, Bodies = import_matter_js.default.Bodies, Composite = import_matter_js.default.Composite;
        engine = Engine.create();
        let pelements = [];
        walk(jquery_module_default(document.body));
        console.log(pelements);
        let mm = false;
        for (let i = 0; i < pelements.length; i++) {
          let e = pelements[i];
          moveElementWithStyles(e.$.get(0), document.body);
          e.$.css("position", "absolute");
          e.$.css("object-position", "0% 0%");
          e.$.css("perceptive-origin", "0px 0px");
          e.$.css("transform", "translate(" + e.ax + "px, " + e.ay + "px)");
          e.$.css("transform-origin", "center");
          e.$.css("margin", "0px");
          e.$.css("left", "0px");
          e.$.css("top", "0px");
          e.$.css("z-index", "1000");
          e.$.css("right", "unset");
          e.$.css("bottom", "unset");
          e.$.css("transition", "transform 0s");
          if (e.ax == void 0 || e.ay == void 0 || e.w == void 0 || e.h == void 0) continue;
          e.box = Bodies.rectangle(e.ax + e.w / 2, e.ay + e.h / 2, e.w, e.h);
          import_matter_js.Body.applyForce(e.box, e.box.position, { x: (Math.random() * 2 - 1) * e.box.mass / 20, y: (Math.random() * 2 - 1) * e.box.mass / 20 });
          Composite.add(engine.world, [e.box]);
          e.$.on("mousedown", () => {
            e.md = true;
            if (e.box == void 0 || e.w == void 0 || e.h == void 0) return;
            let h = lcomb(Math.cos(e.box.angle), Math.sin(e.box.angle), -Math.sin(e.box.angle), Math.cos(e.box.angle), mx - e.box.position.x, my - e.box.position.y);
            e.ma = h.a;
            e.mb = h.b;
          });
          e.$.on("click", (event) => {
            if (mm) {
              event.preventDefault();
            }
          });
          jquery_module_default(document).on("mouseup", () => {
            e.md = false;
            if (e.box == void 0) return;
          });
        }
        jquery_module_default(document.body).css("width", window.innerWidth + "px");
        jquery_module_default(document.body).css("height", window.innerHeight + "px");
        jquery_module_default(document.body).css("margin", "0px");
        jquery_module_default(document.body).css("left", "0px");
        jquery_module_default(document.body).css("top", "0px");
        let mx = 0;
        let my = 0;
        jquery_module_default(document).on("click", () => {
          mm = false;
        });
        jquery_module_default(document).on("mousedown", () => {
          mm = false;
        });
        jquery_module_default(document).on("mousemove", (event) => {
          mx = event.clientX;
          my = event.clientY;
          mm = true;
        });
        Composite.add(engine.world, [
          Bodies.rectangle(window.innerWidth / 2, window.innerHeight + 30, window.innerWidth, 60, { isStatic: true }),
          Bodies.rectangle(window.innerWidth / 2, -30, window.innerWidth, 60, { isStatic: true }),
          Bodies.rectangle(-30, window.innerHeight / 2, 60, window.innerHeight, { isStatic: true }),
          Bodies.rectangle(window.innerWidth + 30, window.innerHeight / 2, 60, window.innerHeight, { isStatic: true })
        ]);
        runner = Runner.create();
        let frame = (t) => {
          Runner.tick(runner, engine, t);
          for (let i = 0; i < pelements.length; i++) {
            const e = pelements[i];
            if (e.md) {
              if (e.box == void 0 || e.ma == void 0 || e.mb == void 0) return;
              let v = { x: e.box.position.x + e.ma * Math.cos(e.box.angle) + e.mb * -Math.sin(e.box.angle), y: e.box.position.y + e.ma * Math.sin(e.box.angle) + e.mb * Math.cos(e.box.angle) };
              let dx = mx - v.x;
              let dy = my - v.y;
              let vm = { x: (-e.box.velocity.x - e.box.angularVelocity * (e.box.position.x - v.x)) / 5e3 * e.box.mass, y: (-e.box.velocity.y + e.box.angularVelocity * (e.box.position.y - v.y)) / 5e3 * e.box.mass };
              import_matter_js.Body.applyForce(e.box, v, { x: dx * e.box.mass / 1e4, y: dy * e.box.mass / 1e4 });
              import_matter_js.Body.applyForce(e.box, v, vm);
            }
          }
          for (let i = 0; i < pelements.length; i++) {
            const e = pelements[i];
            if (e.w == void 0 || e.h == void 0 || e.box == void 0) continue;
            e.$.css("transform", "translate(" + (e.box.position.x - e.w / 2) + "px, " + (e.box.position.y - e.h / 2) + "px) rotate(" + e.box.angle / Math.PI * 180 + "deg)");
          }
          requestAnimationFrame(frame);
        };
        let b = true;
        jquery_module_default(document).on("mousemove", () => {
          if (b) {
            b = false;
            frame(0);
          }
        });
        jquery_module_default(document.head).append(`<style>*{
    -webkit-user-drag: none !important; /* For WebKit browsers */
    user-drag: none; /* For other browsers that support this */
    overflow: hidden;
    user-select: none;
  }</style>`);
      }
      var Engine;
      var Runner;
      var Bodies;
      var Composite;
      var engine;
      var runner;
    }
  });
  require_script2();
})();
/*! Bundled license information:

jquery/dist-module/jquery.module.js:
  (*!
   * jQuery JavaScript Library v4.0.0
   * https://jquery.com/
   *
   * Copyright OpenJS Foundation and other contributors
   * Released under the MIT license
   * https://jquery.com/license/
   *
   * Date: 2026-01-18T00:20Z
   *)

matter-js/build/matter.js:
  (*!
   * matter-js 0.20.0 by @liabru
   * http://brm.io/matter-js/
   * License MIT
   * 
   * The MIT License (MIT)
   * 
   * Copyright (c) Liam Brummitt and contributors.
   * 
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   * 
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   * 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   *)
*/
