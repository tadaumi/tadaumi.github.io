function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}

function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

/**
 * Types of block
 * @enum {string}
 */
var BlockType$1 = {
  /**
   * Boolean reporter with hexagonal shape
   */
  BOOLEAN: 'Boolean',
  /**
   * A button (not an actual block) for some special action, like making a variable
   */
  BUTTON: 'button',
  /**
   * Command block
   */
  COMMAND: 'command',
  /**
   * Specialized command block which may or may not run a child branch
   * The thread continues with the next block whether or not a child branch ran.
   */
  CONDITIONAL: 'conditional',
  /**
   * Specialized hat block with no implementation function
   * This stack only runs if the corresponding event is emitted by other code.
   */
  EVENT: 'event',
  /**
   * Hat block which conditionally starts a block stack
   */
  HAT: 'hat',
  /**
   * Specialized command block which may or may not run a child branch
   * If a child branch runs, the thread evaluates the loop block again.
   */
  LOOP: 'loop',
  /**
   * General reporter with numeric or string value
   */
  REPORTER: 'reporter'
};
var blockType = BlockType$1;

var Color$1 = /*#__PURE__*/function () {
  function Color() {
    _classCallCheck(this, Color);
  }
  _createClass(Color, null, [{
    key: "RGB_BLACK",
    get:
    /**
     * @typedef {object} RGBObject - An object representing a color in RGB format.
     * @property {number} r - the red component, in the range [0, 255].
     * @property {number} g - the green component, in the range [0, 255].
     * @property {number} b - the blue component, in the range [0, 255].
     */

    /**
     * @typedef {object} HSVObject - An object representing a color in HSV format.
     * @property {number} h - hue, in the range [0-359).
     * @property {number} s - saturation, in the range [0,1].
     * @property {number} v - value, in the range [0,1].
     */

    /** @type {RGBObject} */
    function get() {
      return {
        r: 0,
        g: 0,
        b: 0
      };
    }

    /** @type {RGBObject} */
  }, {
    key: "RGB_WHITE",
    get: function get() {
      return {
        r: 255,
        g: 255,
        b: 255
      };
    }

    /**
     * Convert a Scratch decimal color to a hex string, #RRGGBB.
     * @param {number} decimal RGB color as a decimal.
     * @return {string} RGB color as #RRGGBB hex string.
     */
  }, {
    key: "decimalToHex",
    value: function decimalToHex(decimal) {
      if (decimal < 0) {
        decimal += 0xFFFFFF + 1;
      }
      var hex = Number(decimal).toString(16);
      hex = "#".concat('000000'.substr(0, 6 - hex.length)).concat(hex);
      return hex;
    }

    /**
     * Convert a Scratch decimal color to an RGB color object.
     * @param {number} decimal RGB color as decimal.
     * @return {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
     */
  }, {
    key: "decimalToRgb",
    value: function decimalToRgb(decimal) {
      var a = decimal >> 24 & 0xFF;
      var r = decimal >> 16 & 0xFF;
      var g = decimal >> 8 & 0xFF;
      var b = decimal & 0xFF;
      return {
        r: r,
        g: g,
        b: b,
        a: a > 0 ? a : 255
      };
    }

    /**
     * Convert a hex color (e.g., F00, #03F, #0033FF) to an RGB color object.
     * CC-BY-SA Tim Down:
     * https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
     * @param {!string} hex Hex representation of the color.
     * @return {RGBObject} null on failure, or rgb: {r: red [0,255], g: green [0,255], b: blue [0,255]}.
     */
  }, {
    key: "hexToRgb",
    value: function hexToRgb(hex) {
      var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
      hex = hex.replace(shorthandRegex, function (m, r, g, b) {
        return r + r + g + g + b + b;
      });
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : null;
    }

    /**
     * Convert an RGB color object to a hex color.
     * @param {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
     * @return {!string} Hex representation of the color.
     */
  }, {
    key: "rgbToHex",
    value: function rgbToHex(rgb) {
      return Color.decimalToHex(Color.rgbToDecimal(rgb));
    }

    /**
     * Convert an RGB color object to a Scratch decimal color.
     * @param {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
     * @return {!number} Number representing the color.
     */
  }, {
    key: "rgbToDecimal",
    value: function rgbToDecimal(rgb) {
      return (rgb.r << 16) + (rgb.g << 8) + rgb.b;
    }

    /**
    * Convert a hex color (e.g., F00, #03F, #0033FF) to a decimal color number.
    * @param {!string} hex Hex representation of the color.
    * @return {!number} Number representing the color.
    */
  }, {
    key: "hexToDecimal",
    value: function hexToDecimal(hex) {
      return Color.rgbToDecimal(Color.hexToRgb(hex));
    }

    /**
     * Convert an HSV color to RGB format.
     * @param {HSVObject} hsv - {h: hue [0,360), s: saturation [0,1], v: value [0,1]}
     * @return {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
     */
  }, {
    key: "hsvToRgb",
    value: function hsvToRgb(hsv) {
      var h = hsv.h % 360;
      if (h < 0) h += 360;
      var s = Math.max(0, Math.min(hsv.s, 1));
      var v = Math.max(0, Math.min(hsv.v, 1));
      var i = Math.floor(h / 60);
      var f = h / 60 - i;
      var p = v * (1 - s);
      var q = v * (1 - s * f);
      var t = v * (1 - s * (1 - f));
      var r;
      var g;
      var b;
      switch (i) {
        default:
        case 0:
          r = v;
          g = t;
          b = p;
          break;
        case 1:
          r = q;
          g = v;
          b = p;
          break;
        case 2:
          r = p;
          g = v;
          b = t;
          break;
        case 3:
          r = p;
          g = q;
          b = v;
          break;
        case 4:
          r = t;
          g = p;
          b = v;
          break;
        case 5:
          r = v;
          g = p;
          b = q;
          break;
      }
      return {
        r: Math.floor(r * 255),
        g: Math.floor(g * 255),
        b: Math.floor(b * 255)
      };
    }

    /**
     * Convert an RGB color to HSV format.
     * @param {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
     * @return {HSVObject} hsv - {h: hue [0,360), s: saturation [0,1], v: value [0,1]}
     */
  }, {
    key: "rgbToHsv",
    value: function rgbToHsv(rgb) {
      var r = rgb.r / 255;
      var g = rgb.g / 255;
      var b = rgb.b / 255;
      var x = Math.min(Math.min(r, g), b);
      var v = Math.max(Math.max(r, g), b);

      // For grays, hue will be arbitrarily reported as zero. Otherwise, calculate
      var h = 0;
      var s = 0;
      if (x !== v) {
        var f = r === x ? g - b : g === x ? b - r : r - g;
        var i = r === x ? 3 : g === x ? 5 : 1;
        h = (i - f / (v - x)) * 60 % 360;
        s = (v - x) / v;
      }
      return {
        h: h,
        s: s,
        v: v
      };
    }

    /**
     * Linear interpolation between rgb0 and rgb1.
     * @param {RGBObject} rgb0 - the color corresponding to fraction1 <= 0.
     * @param {RGBObject} rgb1 - the color corresponding to fraction1 >= 1.
     * @param {number} fraction1 - the interpolation parameter. If this is 0.5, for example, mix the two colors equally.
     * @return {RGBObject} the interpolated color.
     */
  }, {
    key: "mixRgb",
    value: function mixRgb(rgb0, rgb1, fraction1) {
      if (fraction1 <= 0) return rgb0;
      if (fraction1 >= 1) return rgb1;
      var fraction0 = 1 - fraction1;
      return {
        r: fraction0 * rgb0.r + fraction1 * rgb1.r,
        g: fraction0 * rgb0.g + fraction1 * rgb1.g,
        b: fraction0 * rgb0.b + fraction1 * rgb1.b
      };
    }
  }]);
  return Color;
}();
var color$3 = Color$1;

var Color = color$3;

/**
 * @fileoverview
 * Utilities for casting and comparing Scratch data-types.
 * Scratch behaves slightly differently from JavaScript in many respects,
 * and these differences should be encapsulated below.
 * For example, in Scratch, add(1, join("hello", world")) -> 1.
 * This is because "hello world" is cast to 0.
 * In JavaScript, 1 + Number("hello" + "world") would give you NaN.
 * Use when coercing a value before computation.
 */
var Cast$1 = /*#__PURE__*/function () {
  function Cast() {
    _classCallCheck(this, Cast);
  }
  _createClass(Cast, null, [{
    key: "toNumber",
    value:
    /**
     * Scratch cast to number.
     * Treats NaN as 0.
     * In Scratch 2.0, this is captured by `interp.numArg.`
     * @param {*} value Value to cast to number.
     * @return {number} The Scratch-casted number value.
     */
    function toNumber(value) {
      // If value is already a number we don't need to coerce it with
      // Number().
      if (typeof value === 'number') {
        // Scratch treats NaN as 0, when needed as a number.
        // E.g., 0 + NaN -> 0.
        if (Number.isNaN(value)) {
          return 0;
        }
        return value;
      }
      var n = Number(value);
      if (Number.isNaN(n)) {
        // Scratch treats NaN as 0, when needed as a number.
        // E.g., 0 + NaN -> 0.
        return 0;
      }
      return n;
    }

    /**
     * Scratch cast to boolean.
     * In Scratch 2.0, this is captured by `interp.boolArg.`
     * Treats some string values differently from JavaScript.
     * @param {*} value Value to cast to boolean.
     * @return {boolean} The Scratch-casted boolean value.
     */
  }, {
    key: "toBoolean",
    value: function toBoolean(value) {
      // Already a boolean?
      if (typeof value === 'boolean') {
        return value;
      }
      if (typeof value === 'string') {
        // These specific strings are treated as false in Scratch.
        if (value === '' || value === '0' || value.toLowerCase() === 'false') {
          return false;
        }
        // All other strings treated as true.
        return true;
      }
      // Coerce other values and numbers.
      return Boolean(value);
    }

    /**
     * Scratch cast to string.
     * @param {*} value Value to cast to string.
     * @return {string} The Scratch-casted string value.
     */
  }, {
    key: "toString",
    value: function toString(value) {
      return String(value);
    }

    /**
     * Cast any Scratch argument to an RGB color array to be used for the renderer.
     * @param {*} value Value to convert to RGB color array.
     * @return {Array.<number>} [r,g,b], values between 0-255.
     */
  }, {
    key: "toRgbColorList",
    value: function toRgbColorList(value) {
      var color = Cast.toRgbColorObject(value);
      return [color.r, color.g, color.b];
    }

    /**
     * Cast any Scratch argument to an RGB color object to be used for the renderer.
     * @param {*} value Value to convert to RGB color object.
     * @return {RGBOject} [r,g,b], values between 0-255.
     */
  }, {
    key: "toRgbColorObject",
    value: function toRgbColorObject(value) {
      var color;
      if (typeof value === 'string' && value.substring(0, 1) === '#') {
        color = Color.hexToRgb(value);

        // If the color wasn't *actually* a hex color, cast to black
        if (!color) color = {
          r: 0,
          g: 0,
          b: 0,
          a: 255
        };
      } else {
        color = Color.decimalToRgb(Cast.toNumber(value));
      }
      return color;
    }

    /**
     * Determine if a Scratch argument is a white space string (or null / empty).
     * @param {*} val value to check.
     * @return {boolean} True if the argument is all white spaces or null / empty.
     */
  }, {
    key: "isWhiteSpace",
    value: function isWhiteSpace(val) {
      return val === null || typeof val === 'string' && val.trim().length === 0;
    }

    /**
     * Compare two values, using Scratch cast, case-insensitive string compare, etc.
     * In Scratch 2.0, this is captured by `interp.compare.`
     * @param {*} v1 First value to compare.
     * @param {*} v2 Second value to compare.
     * @returns {number} Negative number if v1 < v2; 0 if equal; positive otherwise.
     */
  }, {
    key: "compare",
    value: function compare(v1, v2) {
      var n1 = Number(v1);
      var n2 = Number(v2);
      if (n1 === 0 && Cast.isWhiteSpace(v1)) {
        n1 = NaN;
      } else if (n2 === 0 && Cast.isWhiteSpace(v2)) {
        n2 = NaN;
      }
      if (isNaN(n1) || isNaN(n2)) {
        // At least one argument can't be converted to a number.
        // Scratch compares strings as case insensitive.
        var s1 = String(v1).toLowerCase();
        var s2 = String(v2).toLowerCase();
        if (s1 < s2) {
          return -1;
        } else if (s1 > s2) {
          return 1;
        }
        return 0;
      }
      // Handle the special case of Infinity
      if (n1 === Infinity && n2 === Infinity || n1 === -Infinity && n2 === -Infinity) {
        return 0;
      }
      // Compare as numbers.
      return n1 - n2;
    }

    /**
     * Determine if a Scratch argument number represents a round integer.
     * @param {*} val Value to check.
     * @return {boolean} True if number looks like an integer.
     */
  }, {
    key: "isInt",
    value: function isInt(val) {
      // Values that are already numbers.
      if (typeof val === 'number') {
        if (isNaN(val)) {
          // NaN is considered an integer.
          return true;
        }
        // True if it's "round" (e.g., 2.0 and 2).
        return val === parseInt(val, 10);
      } else if (typeof val === 'boolean') {
        // `True` and `false` always represent integer after Scratch cast.
        return true;
      } else if (typeof val === 'string') {
        // If it contains a decimal point, don't consider it an int.
        return val.indexOf('.') < 0;
      }
      return false;
    }
  }, {
    key: "LIST_INVALID",
    get: function get() {
      return 'INVALID';
    }
  }, {
    key: "LIST_ALL",
    get: function get() {
      return 'ALL';
    }

    /**
     * Compute a 1-based index into a list, based on a Scratch argument.
     * Two special cases may be returned:
     * LIST_ALL: if the block is referring to all of the items in the list.
     * LIST_INVALID: if the index was invalid in any way.
     * @param {*} index Scratch arg, including 1-based numbers or special cases.
     * @param {number} length Length of the list.
     * @param {boolean} acceptAll Whether it should accept "all" or not.
     * @return {(number|string)} 1-based index for list, LIST_ALL, or LIST_INVALID.
     */
  }, {
    key: "toListIndex",
    value: function toListIndex(index, length, acceptAll) {
      if (typeof index !== 'number') {
        if (index === 'all') {
          return acceptAll ? Cast.LIST_ALL : Cast.LIST_INVALID;
        }
        if (index === 'last') {
          if (length > 0) {
            return length;
          }
          return Cast.LIST_INVALID;
        } else if (index === 'random' || index === 'any') {
          if (length > 0) {
            return 1 + Math.floor(Math.random() * length);
          }
          return Cast.LIST_INVALID;
        }
      }
      index = Math.floor(Cast.toNumber(index));
      if (index < 1 || index > length) {
        return Cast.LIST_INVALID;
      }
      return index;
    }
  }]);
  return Cast;
}();
var cast = Cast$1;

var web = {exports: {}};

var minilog$2 = {exports: {}};

function M() {
  this._events = {};
}
M.prototype = {
  on: function on(ev, cb) {
    this._events || (this._events = {});
    var e = this._events;
    (e[ev] || (e[ev] = [])).push(cb);
    return this;
  },
  removeListener: function removeListener(ev, cb) {
    var e = this._events[ev] || [],
      i;
    for (i = e.length - 1; i >= 0 && e[i]; i--) {
      if (e[i] === cb || e[i].cb === cb) {
        e.splice(i, 1);
      }
    }
  },
  removeAllListeners: function removeAllListeners(ev) {
    if (!ev) {
      this._events = {};
    } else {
      this._events[ev] && (this._events[ev] = []);
    }
  },
  listeners: function listeners(ev) {
    return this._events ? this._events[ev] || [] : [];
  },
  emit: function emit(ev) {
    this._events || (this._events = {});
    var args = Array.prototype.slice.call(arguments, 1),
      i,
      e = this._events[ev] || [];
    for (i = e.length - 1; i >= 0 && e[i]; i--) {
      e[i].apply(this, args);
    }
    return this;
  },
  when: function when(ev, cb) {
    return this.once(ev, cb, true);
  },
  once: function once(ev, cb, when) {
    if (!cb) return this;
    function c() {
      if (!when) this.removeListener(ev, c);
      if (cb.apply(this, arguments) && when) this.removeListener(ev, c);
    }
    c.cb = cb;
    this.on(ev, c);
    return this;
  }
};
M.mixin = function (dest) {
  var o = M.prototype,
    k;
  for (k in o) {
    o.hasOwnProperty(k) && (dest.prototype[k] = o[k]);
  }
};
var microee$1 = M;

var microee = microee$1;

// Implements a subset of Node's stream.Transform - in a cross-platform manner.
function Transform$7() {}
microee.mixin(Transform$7);

// The write() signature is different from Node's
// --> makes it much easier to work with objects in logs.
// One of the lessons from v1 was that it's better to target
// a good browser rather than the lowest common denominator
// internally.
// If you want to use external streams, pipe() to ./stringify.js first.
Transform$7.prototype.write = function (name, level, args) {
  this.emit('item', name, level, args);
};
Transform$7.prototype.end = function () {
  this.emit('end');
  this.removeAllListeners();
};
Transform$7.prototype.pipe = function (dest) {
  var s = this;
  // prevent double piping
  s.emit('unpipe', dest);
  // tell the dest that it's being piped to
  dest.emit('pipe', s);
  function onItem() {
    dest.write.apply(dest, Array.prototype.slice.call(arguments));
  }
  function onEnd() {
    !dest._isStdio && dest.end();
  }
  s.on('item', onItem);
  s.on('end', onEnd);
  s.when('unpipe', function (from) {
    var match = from === dest || typeof from == 'undefined';
    if (match) {
      s.removeListener('item', onItem);
      s.removeListener('end', onEnd);
      dest.emit('unpipe');
    }
    return match;
  });
  return dest;
};
Transform$7.prototype.unpipe = function (from) {
  this.emit('unpipe', from);
  return this;
};
Transform$7.prototype.format = function (dest) {
  throw new Error(['Warning: .format() is deprecated in Minilog v2! Use .pipe() instead. For example:', 'var Minilog = require(\'minilog\');', 'Minilog', '  .pipe(Minilog.backends.console.formatClean)', '  .pipe(Minilog.backends.console);'].join('\n'));
};
Transform$7.mixin = function (dest) {
  var o = Transform$7.prototype,
    k;
  for (k in o) {
    o.hasOwnProperty(k) && (dest.prototype[k] = o[k]);
  }
};
var transform = Transform$7;

// default filter
var Transform$6 = transform;
var levelMap = {
  debug: 1,
  info: 2,
  warn: 3,
  error: 4
};
function Filter() {
  this.enabled = true;
  this.defaultResult = true;
  this.clear();
}
Transform$6.mixin(Filter);

// allow all matching, with level >= given level
Filter.prototype.allow = function (name, level) {
  this._white.push({
    n: name,
    l: levelMap[level]
  });
  return this;
};

// deny all matching, with level <= given level
Filter.prototype.deny = function (name, level) {
  this._black.push({
    n: name,
    l: levelMap[level]
  });
  return this;
};
Filter.prototype.clear = function () {
  this._white = [];
  this._black = [];
  return this;
};
function test(rule, name) {
  // use .test for RegExps
  return rule.n.test ? rule.n.test(name) : rule.n == name;
}
Filter.prototype.test = function (name, level) {
  var i,
    len = Math.max(this._white.length, this._black.length);
  for (i = 0; i < len; i++) {
    if (this._white[i] && test(this._white[i], name) && levelMap[level] >= this._white[i].l) {
      return true;
    }
    if (this._black[i] && test(this._black[i], name) && levelMap[level] <= this._black[i].l) {
      return false;
    }
  }
  return this.defaultResult;
};
Filter.prototype.write = function (name, level, args) {
  if (!this.enabled || this.test(name, level)) {
    return this.emit('item', name, level, args);
  }
};
var filter = Filter;

(function (module, exports) {
  var Transform = transform,
    Filter = filter;
  var log = new Transform(),
    slice = Array.prototype.slice;
  exports = module.exports = function create(name) {
    var o = function o() {
      log.write(name, undefined, slice.call(arguments));
      return o;
    };
    o.debug = function () {
      log.write(name, 'debug', slice.call(arguments));
      return o;
    };
    o.info = function () {
      log.write(name, 'info', slice.call(arguments));
      return o;
    };
    o.warn = function () {
      log.write(name, 'warn', slice.call(arguments));
      return o;
    };
    o.error = function () {
      log.write(name, 'error', slice.call(arguments));
      return o;
    };
    o.log = o.debug; // for interface compliance with Node and browser consoles
    o.suggest = exports.suggest;
    o.format = log.format;
    return o;
  };

  // filled in separately
  exports.defaultBackend = exports.defaultFormatter = null;
  exports.pipe = function (dest) {
    return log.pipe(dest);
  };
  exports.end = exports.unpipe = exports.disable = function (from) {
    return log.unpipe(from);
  };
  exports.Transform = Transform;
  exports.Filter = Filter;
  // this is the default filter that's applied when .enable() is called normally
  // you can bypass it completely and set up your own pipes
  exports.suggest = new Filter();
  exports.enable = function () {
    if (exports.defaultFormatter) {
      return log.pipe(exports.suggest) // filter
      .pipe(exports.defaultFormatter) // formatter
      .pipe(exports.defaultBackend); // backend
    }

    return log.pipe(exports.suggest) // filter
    .pipe(exports.defaultBackend); // formatter
  };
})(minilog$2, minilog$2.exports);

var hex = {
  black: '#000',
  red: '#c23621',
  green: '#25bc26',
  yellow: '#bbbb00',
  blue: '#492ee1',
  magenta: '#d338d3',
  cyan: '#33bbc8',
  gray: '#808080',
  purple: '#708'
};
function color$2(fg, isInverse) {
  if (isInverse) {
    return 'color: #fff; background: ' + hex[fg] + ';';
  } else {
    return 'color: ' + hex[fg] + ';';
  }
}
var util = color$2;

var Transform$5 = transform,
  color$1 = util;
var colors$1 = {
    debug: ['cyan'],
    info: ['purple'],
    warn: ['yellow', true],
    error: ['red', true]
  },
  logger$4 = new Transform$5();
logger$4.write = function (name, level, args) {
  var fn = console.log;
  if (console[level] && console[level].apply) {
    fn = console[level];
    fn.apply(console, ['%c' + name + ' %c' + level, color$1('gray'), color$1.apply(color$1, colors$1[level])].concat(args));
  }
};

// NOP, because piping the formatted logs can only cause trouble.
logger$4.pipe = function () {};
var color_1 = logger$4;

var Transform$4 = transform,
  color = util,
  colors = {
    debug: ['gray'],
    info: ['purple'],
    warn: ['yellow', true],
    error: ['red', true]
  },
  logger$3 = new Transform$4();
logger$3.write = function (name, level, args) {
  var fn = console.log;
  if (level != 'debug' && console[level]) {
    fn = console[level];
  }
  var i = 0;
  if (level != 'info') {
    for (; i < args.length; i++) {
      if (typeof args[i] != 'string') break;
    }
    fn.apply(console, ['%c' + name + ' ' + args.slice(0, i).join(' '), color.apply(color, colors[level])].concat(args.slice(i)));
  } else {
    fn.apply(console, ['%c' + name, color.apply(color, colors[level])].concat(args));
  }
};

// NOP, because piping the formatted logs can only cause trouble.
logger$3.pipe = function () {};
var minilog$1 = logger$3;

var Transform$3 = transform;
var newlines = /\n+$/,
  logger$2 = new Transform$3();
logger$2.write = function (name, level, args) {
  var i = args.length - 1;
  if (typeof console === 'undefined' || !console.log) {
    return;
  }
  if (console.log.apply) {
    return console.log.apply(console, [name, level].concat(args));
  } else if (JSON && JSON.stringify) {
    // console.log.apply is undefined in IE8 and IE9
    // for IE8/9: make console.log at least a bit less awful
    if (args[i] && typeof args[i] == 'string') {
      args[i] = args[i].replace(newlines, '');
    }
    try {
      for (i = 0; i < args.length; i++) {
        args[i] = JSON.stringify(args[i]);
      }
    } catch (e) {}
    console.log(args.join(' '));
  }
};
logger$2.formatters = ['color', 'minilog'];
logger$2.color = color_1;
logger$2.minilog = minilog$1;
var console_1 = logger$2;

var Transform$2 = transform,
  cache$1 = [];
var logger$1 = new Transform$2();
logger$1.write = function (name, level, args) {
  cache$1.push([name, level, args]);
};

// utility functions
logger$1.get = function () {
  return cache$1;
};
logger$1.empty = function () {
  cache$1 = [];
};
var array = logger$1;

var Transform$1 = transform,
  cache = false;
var logger = new Transform$1();
logger.write = function (name, level, args) {
  if (typeof window == 'undefined' || typeof JSON == 'undefined' || !JSON.stringify || !JSON.parse) return;
  try {
    if (!cache) {
      cache = window.localStorage.minilog ? JSON.parse(window.localStorage.minilog) : [];
    }
    cache.push([new Date().toString(), name, level, args]);
    window.localStorage.minilog = JSON.stringify(cache);
  } catch (e) {}
};
var localstorage = logger;

var Transform = transform;
var cid = new Date().valueOf().toString(36);
function AjaxLogger(options) {
  this.url = options.url || '';
  this.cache = [];
  this.timer = null;
  this.interval = options.interval || 30 * 1000;
  this.enabled = true;
  this.jQuery = window.jQuery;
  this.extras = {};
}
Transform.mixin(AjaxLogger);
AjaxLogger.prototype.write = function (name, level, args) {
  if (!this.timer) {
    this.init();
  }
  this.cache.push([name, level].concat(args));
};
AjaxLogger.prototype.init = function () {
  if (!this.enabled || !this.jQuery) return;
  var self = this;
  this.timer = setTimeout(function () {
    var i,
      logs = [],
      ajaxData,
      url = self.url;
    if (self.cache.length == 0) return self.init();
    // Test each log line and only log the ones that are valid (e.g. don't have circular references).
    // Slight performance hit but benefit is we log all valid lines.
    for (i = 0; i < self.cache.length; i++) {
      try {
        JSON.stringify(self.cache[i]);
        logs.push(self.cache[i]);
      } catch (e) {}
    }
    if (self.jQuery.isEmptyObject(self.extras)) {
      ajaxData = JSON.stringify({
        logs: logs
      });
      url = self.url + '?client_id=' + cid;
    } else {
      ajaxData = JSON.stringify(self.jQuery.extend({
        logs: logs
      }, self.extras));
    }
    self.jQuery.ajax(url, {
      type: 'POST',
      cache: false,
      processData: false,
      data: ajaxData,
      contentType: 'application/json',
      timeout: 10000
    }).success(function (data, status, jqxhr) {
      if (data.interval) {
        self.interval = Math.max(1000, data.interval);
      }
    }).error(function () {
      self.interval = 30000;
    }).always(function () {
      self.init();
    });
    self.cache = [];
  }, this.interval);
};
AjaxLogger.prototype.end = function () {};

// wait until jQuery is defined. Useful if you don't control the load order.
AjaxLogger.jQueryWait = function (onDone) {
  if (typeof window !== 'undefined' && (window.jQuery || window.$)) {
    return onDone(window.jQuery || window.$);
  } else if (typeof window !== 'undefined') {
    setTimeout(function () {
      AjaxLogger.jQueryWait(onDone);
    }, 200);
  }
};
var jquery_simple = AjaxLogger;

(function (module, exports) {
  var Minilog = minilog$2.exports;
  var oldEnable = Minilog.enable,
    oldDisable = Minilog.disable,
    isChrome = typeof navigator != 'undefined' && /chrome/i.test(navigator.userAgent),
    console = console_1;

  // Use a more capable logging backend if on Chrome
  Minilog.defaultBackend = isChrome ? console.minilog : console;

  // apply enable inputs from localStorage and from the URL
  if (typeof window != 'undefined') {
    try {
      Minilog.enable(JSON.parse(window.localStorage['minilogSettings']));
    } catch (e) {}
    if (window.location && window.location.search) {
      var match = RegExp('[?&]minilog=([^&]*)').exec(window.location.search);
      match && Minilog.enable(decodeURIComponent(match[1]));
    }
  }

  // Make enable also add to localStorage
  Minilog.enable = function () {
    oldEnable.call(Minilog, true);
    try {
      window.localStorage['minilogSettings'] = JSON.stringify(true);
    } catch (e) {}
    return this;
  };
  Minilog.disable = function () {
    oldDisable.call(Minilog);
    try {
      delete window.localStorage.minilogSettings;
    } catch (e) {}
    return this;
  };
  exports = module.exports = Minilog;
  exports.backends = {
    array: array,
    browser: Minilog.defaultBackend,
    localStorage: localstorage,
    jQuery: jquery_simple
  };
})(web, web.exports);

var minilog = web.exports;
minilog.enable();
var log$1 = minilog('vm');

var BlockType = blockType;
var Cast = cast;
var log = log$1;

/**
 * Icon svg to be displayed at the left edge of each extension block, encoded as a data URI.
 * @type {string}
 */
// eslint-disable-next-line max-len
var blockIconURI = 'data:image/svg+xml;base64,﻿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';

/**
 * Icon svg to be displayed in the category menu, encoded as a data URI.
 * @type {string}
 */
// eslint-disable-next-line max-len
var menuIconURI = 'data:image/svg+xml;base64,﻿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';

/**
 * Class for the new blocks in Scratch 3.0
 * @param {Runtime} runtime - the runtime instantiating this block package.
 * @constructor
 */
var Scratch3NewBlocks = /*#__PURE__*/function () {
  function Scratch3NewBlocks(runtime) {
    _classCallCheck(this, Scratch3NewBlocks);
    /**
     * The runtime instantiating this block package.
     * @type {Runtime}
     */
    this.runtime = runtime;

    //this._onTargetCreated = this._onTargetCreated.bind(this);
    //this.runtime.on('targetWasCreated', this._onTargetCreated);
  }

  /**
   * @returns {object} metadata for this extension and its blocks.
   */
  _createClass(Scratch3NewBlocks, [{
    key: "getInfo",
    value: function getInfo() {
      return {
        id: 'newblocks',
        name: 'New Blocks',
        menuIconURI: menuIconURI,
        blockIconURI: blockIconURI,
        blocks: [
        /*
           {
               opcode: 'writeLog',
               blockType: BlockType.COMMAND,
               text: 'log [TEXT]',
               arguments: {
                   TEXT: {
                       type: ArgumentType.STRING,
                       defaultValue: "hello"
                   }
               }
           },
           */
        {
          opcode: 'chatGPT',
          text: 'chatgpt',
          //blockType: BlockType.REPORTER
          blockType: BlockType.COMMAND
        }],
        menus: {}
      };
    }

    /**
     * Write log.
     * @param {object} args - the block arguments.
     * @property {number} TEXT - the text.
     */
  }, {
    key: "writeLog",
    value: function writeLog(args) {
      var text = Cast.toString(args.TEXT);
      log.log(text);
    }

    /**
     * Get the browser.
     * @return {number} - the user agent.
     */
  }, {
    key: "chatGPT",
    value: function chatGPT() {
      //return navigator.userAgent;
      window.open('https://www.tadaumi.com/chatgpt/', '_blank');
    }
  }]);
  return Scratch3NewBlocks;
}();
var blockClass = Scratch3NewBlocks;

export { blockClass };
