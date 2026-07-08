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

  // src/script.ts
  var require_script = __commonJS({
    "src/script.ts"() {
      init_jquery_module();
      var import_matter_js = __toESM(require_matter());
      if (window.gravity_dlc_already_active) {
        console.log("can't activate gravity dlc twice!");
      } else {
        let hasDirectText = function(el) {
          return Array.from(el.childNodes).some(
            (node) => node.nodeType === Node.TEXT_NODE && node.textContent?.trim()
          );
        }, visible = function(e) {
          if ((e.css("background-color") != "rgba(0, 0, 0, 0)" && e.css("background-color") != "" || e.css("background-image") != "" && e.css("background-image") != "none" || hasDirectText(e[0]) || e[0] instanceof HTMLImageElement || e[0] instanceof SVGElement) && e[0].checkVisibility() && e.css("visibility") != "hidden") {
            if (hasDirectText(e[0])) {
              console.log(e.text(), e[0]);
            }
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
          const parent = jquery_module_default(element).parent();
          const replacement = jquery_module_default(element.outerHTML);
          replacement.css("visibility", "hidden");
          replacement.insertAfter(jquery_module_default(element));
          const $element = jquery_module_default(element).detach();
          applyInlineStyles(element, computedStyles);
          jquery_module_default(newParentSelector).append($element);
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
  require_script();
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
