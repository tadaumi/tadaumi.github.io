//import ArgumentType from '../../extension-support/argument-type';
// import BlockType from '../../extension-support/block-type';
//import Cast from '../../util/cast';
//import * as formatMessage from '../util/format-message';
//import * as ml5 from '../util/ml5.min.js';
//import ml5 from 'ml5';

var img$2 = 'data:image/png;base64,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';

var img$1 = "data:image/svg+xml,%3c%3fxml version='1.0' encoding='UTF-8' standalone='no'%3f%3e%3c!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg width='100%25' height='100%25' viewBox='0 0 53 53' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' xmlns:serif='http://www.serif.com/' style='fill-rule:evenodd%3bclip-rule:evenodd%3bstroke-linejoin:round%3bstroke-miterlimit:2%3b'%3e%3crect id='%e3%82%a2%e3%83%bc%e3%83%88%e3%83%9c%e3%83%bc%e3%83%891' x='0' y='-0' width='52.083' height='52.056' style='fill:none%3b'/%3e%3cclipPath id='_clip1'%3e%3crect x='0' y='-0' width='52.083' height='52.056'/%3e%3c/clipPath%3e%3cg clip-path='url(%23_clip1)'%3e%3cg%3e%3cg%3e%3cpath d='M17.605%2c14.113c1.125%2c0.983 1.582%2c2.148 2.563%2c3.17c2.407%2c2.507 4.811%2c5.102 7.423%2c7.551c4.352%2c4.079 10.045%2c7.577 14.675%2c11.435' style='fill:none%3bstroke:white%3bstroke-width:19.17px%3bstroke-linecap:round%3bstroke-miterlimit:1.5%3b'/%3e%3cpath d='M40.824%2c11.292c-0.914%2c2.03 -3.668%2c3.898 -5.723%2c5.559c-2.684%2c2.171 -5.276%2c4.398 -7.941%2c6.581c-7.278%2c5.958 -12.955%2c12.359 -18.301%2c19.04' style='fill:none%3bstroke:white%3bstroke-width:19.17px%3bstroke-linecap:round%3bstroke-miterlimit:1.5%3b'/%3e%3c/g%3e%3cg%3e%3cpath d='M17.605%2c14.113c1.125%2c0.983 1.582%2c2.148 2.563%2c3.17c2.407%2c2.507 4.811%2c5.102 7.423%2c7.551c4.352%2c4.079 10.045%2c7.577 14.675%2c11.435' style='fill:none%3bstroke:%23f9a83a%3bstroke-width:12.5px%3bstroke-linecap:round%3bstroke-miterlimit:1.5%3b'/%3e%3cpath d='M40.824%2c11.292c-0.914%2c2.03 -3.668%2c3.898 -5.723%2c5.559c-2.684%2c2.171 -5.276%2c4.398 -7.941%2c6.581c-7.278%2c5.958 -12.955%2c12.359 -18.301%2c19.04' style='fill:none%3bstroke:%23f9a83a%3bstroke-width:12.5px%3bstroke-linecap:round%3bstroke-miterlimit:1.5%3b'/%3e%3c/g%3e%3cg%3e%3cpath d='M16.783%2c15.055c0.264%2c0.231 0.482%2c0.475 0.679%2c0.725c0.621%2c0.785 1.078%2c1.612 1.804%2c2.368c1.456%2c1.517 2.91%2c3.065 4.41%2c4.594c0.996%2c1.015 2.012%2c2.021 3.06%2c3.004c1.353%2c1.268 2.831%2c2.481 4.368%2c3.666c3.429%2c2.643 7.152%2c5.143 10.362%2c7.817c0.53%2c0.442 1.319%2c0.37 1.76%2c-0.16c0.442%2c-0.53 0.37%2c-1.319 -0.16%2c-1.76c-3.233%2c-2.694 -6.982%2c-5.215 -10.435%2c-7.877c-1.472%2c-1.135 -2.89%2c-2.296 -4.185%2c-3.51c-1.023%2c-0.959 -2.014%2c-1.941 -2.985%2c-2.931c-1.494%2c-1.522 -2.942%2c-3.064 -4.392%2c-4.574c-0.667%2c-0.695 -1.075%2c-1.465 -1.645%2c-2.187c-0.288%2c-0.365 -0.61%2c-0.72 -0.997%2c-1.058c-0.52%2c-0.454 -1.31%2c-0.4 -1.764%2c0.119c-0.453%2c0.52 -0.4%2c1.31 0.12%2c1.764Z' style='fill:white%3b'/%3e%3cpath d='M39.685%2c10.779c-0.331%2c0.733 -0.963%2c1.428 -1.694%2c2.108c-1.138%2c1.059 -2.52%2c2.058 -3.676%2c2.992l-7.947%2c6.585c-3.596%2c2.944 -6.805%2c5.995 -9.778%2c9.133c-3.104%2c3.276 -5.949%2c6.648 -8.707%2c10.094c-0.431%2c0.539 -0.343%2c1.326 0.195%2c1.757c0.539%2c0.431 1.326%2c0.344 1.757%2c-0.195c2.715%2c-3.392 5.515%2c-6.712 8.57%2c-9.937c2.903%2c-3.064 6.036%2c-6.043 9.547%2c-8.917l7.935%2c-6.576c1.418%2c-1.146 3.155%2c-2.393 4.43%2c-3.716c0.716%2c-0.743 1.293%2c-1.516 1.647%2c-2.301c0.283%2c-0.629 0.003%2c-1.37 -0.626%2c-1.653c-0.629%2c-0.284 -1.37%2c-0.003 -1.653%2c0.626Z' style='fill:white%3b'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e";

//===================
/*
var en$1 = {
	"handpose2scratch.entry.name": "handpose2scratch",
	"handpose2scratch.entry.description": "handpose2scratch"
};
var ja$1 = {
	"handpose2scratch.entry.name": "handpose2scratch",
	"handpose2scratch.entry.description": "handpose2scratchを実行する"
};
var translations$1 = {
	en: en$1,
	ja: ja$1,
	"ja-Hira": {
	"handpose2scratch.entry.name": "handpose2scratch",
	"handpose2scratch.entry.description": "handpose2scratchをじっこうする"
  }
};
*/
var en = {
	"handpose2scratch.name": "handpose2scratch",
	"handpose2scratch.sayHello": "handpose2scratch"
};
var ja = {
	"handpose2scratch.name": "handpose2scratch",
	"handpose2scratch.sayHello": "handpose2scratchを実行する"
};
var translations = {
	en: en,
	ja: ja,
	"ja-Hira": {
	"handpose2scratch.name": "handpose2scratch",
	"handpose2scratch.sayHello": "handpose2scratchをじっこうする"
}
};


/**
 * This is an extension for Xcratch.
 */


/**
 * Formatter to translate the messages in this extension.
 * This will be replaced which is used in the React component.
 * @param {object} messageData - data for format-message
 * @returns {string} - translated message for the current locale
 */
var formatMessage = function formatMessage(messageData) {
  return messageData.default;
};

var entry = {
  get name() {
    return formatMessage$1({
      id: 'handpose2scratch.entry.name',
      defaultMessage: 'handpseo2scratch',
      description: 'name of the extension'
    });
  },
  extensionId: 'handpose2scratch',
  extensionURL: 'https://xcratch.github.io/handpose.mjs',
  collaborator: 'xcratch',
  iconURL: img$2,
  insetIconURL: img$1,
  get description() {
    return formatMessage$1({
      defaultMessage: 'an extension for Xcratch',
      description: 'Description for this extension',
      id: 'handpose2scratch.entry.description'
    });
  },
  featured: true,
  disabled: false,
  bluetoothRequired: false,
  internetConnectionRequired: false,
  helpLink: 'https://xcratch.github.io/xcx-example/',  //should be changed
  setFormatMessage: function setFormatMessage(formatter) {
    formatMessage$1 = formatter;
  },
  //translationMap: translations$1
  translationMap: translations
};

function _classCallCheck$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _typeof$1(o) {
  "@babel/helpers - typeof";

  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof$1(o);
}

function toPrimitive$1(t, r) {
  if ("object" != _typeof$1(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof$1(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}

function toPropertyKey$1(t) {
  var i = toPrimitive$1(t, "string");
  return "symbol" == _typeof$1(i) ? i : String(i);
}

function _defineProperties$1(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, toPropertyKey$1(descriptor.key), descriptor);
  }
}
function _createClass$1(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties$1(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var BlockType = {
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
var blockType = BlockType;
var BlockType$1 = /*@__PURE__*/getDefaultExportFromCjs(blockType);

/**
 * Block argument types
 * @enum {string}
 */
var ArgumentType = {
  /**
   * Numeric value with angle picker
   */
  ANGLE: 'angle',
  /**
   * Boolean value with hexagonal placeholder
   */
  BOOLEAN: 'Boolean',
  /**
   * Numeric value with color picker
   */
  COLOR: 'color',
  /**
   * Numeric value with text field
   */
  NUMBER: 'number',
  /**
   * String value with text field
   */
  STRING: 'string',
  /**
   * String value with matrix field
   */
  MATRIX: 'matrix',
  /**
   * MIDI note number with note picker (piano) field
   */
  NOTE: 'note',
  /**
   * Inline image on block (as part of the label)
   */
  IMAGE: 'image',
  /**
   * List of values
   */
  LIST: 'list'
};
var argumentType = ArgumentType;
var ArgumentType$1 = /*@__PURE__*/getDefaultExportFromCjs(argumentType);

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

function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}

function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : String(i);
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
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
var Cast = /*#__PURE__*/function () {
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
      // Replace full-width numbers with half-width ones.
      value = value.replace(/[０-９＋．ｅ]/g, function (s) {
        return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
      });
      value = value.replace(/[-－﹣−‐⁃‑‒–—﹘―⎯⏤ーｰ─━]/g, '-');
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
      return String(value).replace(/\\n/g, '\n').replace(/\\t/g, '\t');
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
        var s1 = Cast.toString(v1).toLowerCase();
        var s2 = Cast.toString(v2).toLowerCase();
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
var cast = Cast;
var Cast$1 = /*@__PURE__*/getDefaultExportFromCjs(cast);

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
function Transform$4() {}
microee.mixin(Transform$4);

// The write() signature is different from Node's
// --> makes it much easier to work with objects in logs.
// One of the lessons from v1 was that it's better to target
// a good browser rather than the lowest common denominator
// internally.
// If you want to use external streams, pipe() to ./stringify.js first.
Transform$4.prototype.write = function (name, level, args) {
  this.emit('item', name, level, args);
};
Transform$4.prototype.end = function () {
  this.emit('end');
  this.removeAllListeners();
};
Transform$4.prototype.pipe = function (dest) {
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
Transform$4.prototype.unpipe = function (from) {
  this.emit('unpipe', from);
  return this;
};
Transform$4.prototype.format = function (dest) {
  throw new Error(['Warning: .format() is deprecated in Minilog v2! Use .pipe() instead. For example:', 'var Minilog = require(\'minilog\');', 'Minilog', '  .pipe(Minilog.backends.console.formatClean)', '  .pipe(Minilog.backends.console);'].join('\n'));
};
Transform$4.mixin = function (dest) {
  var o = Transform$4.prototype,
    k;
  for (k in o) {
    o.hasOwnProperty(k) && (dest.prototype[k] = o[k]);
  }
};
var transform = Transform$4;

// default filter
var Transform$3 = transform;
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
Transform$3.mixin(Filter);

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
var minilogExports = minilog$2.exports;

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

var Transform$2 = transform,
  color$1 = util;
var colors$1 = {
    debug: ['cyan'],
    info: ['purple'],
    warn: ['yellow', true],
    error: ['red', true]
  },
  logger$2 = new Transform$2();
logger$2.write = function (name, level, args) {
  var fn = console.log;
  if (console[level] && console[level].apply) {
    fn = console[level];
    fn.apply(console, ['%c' + name + ' %c' + level, color$1('gray'), color$1.apply(color$1, colors$1[level])].concat(args));
  }
};

// NOP, because piping the formatted logs can only cause trouble.
logger$2.pipe = function () {};
var color_1 = logger$2;

var Transform$1 = transform,
  color = util,
  colors = {
    debug: ['gray'],
    info: ['purple'],
    warn: ['yellow', true],
    error: ['red', true]
  },
  logger$1 = new Transform$1();
logger$1.write = function (name, level, args) {
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
logger$1.pipe = function () {};
var minilog$1 = logger$1;

var Transform = transform;
var newlines = /\n+$/,
  logger = new Transform();
logger.write = function (name, level, args) {
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
logger.formatters = ['color', 'minilog'];
logger.color = color_1;
logger.minilog = minilog$1;
var console_1 = logger;

var array;
var hasRequiredArray;
function requireArray() {
  if (hasRequiredArray) return array;
  hasRequiredArray = 1;
  var Transform = transform,
    cache = [];
  var logger = new Transform();
  logger.write = function (name, level, args) {
    cache.push([name, level, args]);
  };

  // utility functions
  logger.get = function () {
    return cache;
  };
  logger.empty = function () {
    cache = [];
  };
  array = logger;
  return array;
}

var localstorage;
var hasRequiredLocalstorage;
function requireLocalstorage() {
  if (hasRequiredLocalstorage) return localstorage;
  hasRequiredLocalstorage = 1;
  var Transform = transform,
    cache = false;
  var logger = new Transform();
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
  localstorage = logger;
  return localstorage;
}

var jquery_simple;
var hasRequiredJquery_simple;
function requireJquery_simple() {
  if (hasRequiredJquery_simple) return jquery_simple;
  hasRequiredJquery_simple = 1;
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
  jquery_simple = AjaxLogger;
  return jquery_simple;
}

(function (module, exports) {
  var Minilog = minilogExports;
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
    array: requireArray(),
    browser: Minilog.defaultBackend,
    localStorage: requireLocalstorage(),
    jQuery: requireJquery_simple()
  };
})(web, web.exports);
var webExports = web.exports;

var minilog = webExports;
minilog.enable();
var log = minilog('vm');
var log$1 = /*@__PURE__*/getDefaultExportFromCjs(log);

const img = 'data:image/png;base64,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';


/**
 * Formatter which is used for translation.
 * This will be replaced which is used in the runtime.
 * @param {object} messageData - format-message object
 * @returns {string} - message for the locale
 */

/**
 * Setup format-message for this extension.
 */
var setupTranslations = function setupTranslations() {
  var localeSetup = formatMessage.setup();
  if (localeSetup && localeSetup.translations[localeSetup.locale]) {
    Object.assign(localeSetup.translations[localeSetup.locale], translations[localeSetup.locale]);
  }
};
//var EXTENSION_ID = 'handpose';

/**
 * URL to get this extension as a module.
 * When it was loaded as a module, 'extensionURL' will be replaced a URL which is retrieved from.
 * @type {string}
 */
//var extensionURL = 'https://yokobond.github.io/xcx-handpose/dist/handpose.mjs';
//var extensionURL = 'https://xcratch.github.io/handpose.mjs';

/**
 * Scratch 3.0 blocks for example of Xcratch.
 */
const Message = {
  getX: {
    'ja': '[LANDMARK] のx座標',
    'ja-Hira': '[LANDMARK] のxざひょう',
    'en': 'x of [LANDMARK]'
  },
  getY: {
    'ja': '[LANDMARK] のy座標',
    'ja-Hira': '[LANDMARK] のyざひょう',
    'en': 'y of [LANDMARK]'
  },
  getZ: {
    'ja': '[LANDMARK] のz座標',
    'ja-Hira': '[LANDMARK] のzざひょう',
    'en': 'z of [LANDMARK]'
  },
  videoToggle: {
    'ja': 'ビデオを [VIDEO_STATE] にする',
    'ja-Hira': 'ビデオを [VIDEO_STATE] にする',
    'en': 'turn video [VIDEO_STATE]'
  },
  setRatio: {
    'ja': '倍率を [RATIO] にする',
    'ja-Hira': 'ばいりつを [RATIO] にする',
    'en': 'set ratio to [RATIO]'
  },
  setInterval: {
    'ja': '認識を [INTERVAL] 秒ごとに行う',
    'ja-Hira': 'にんしきを [INTERVAL] びょうごとにおこなう',
    'en': 'Label once every [INTERVAL] seconds'
  },
  on: {
    'ja': '入',
    'ja-Hira': 'いり',
    'en': 'on'
  },
  off: {
    'ja': '切',
    'ja-Hira': 'きり',
    'en': 'off'
  },
  video_on_flipped: {
    'ja': '左右反転',
    'ja-Hira': 'さゆうはんてん',
    'en': 'on flipped'
  },
  please_wait: {
    'ja': '準備に時間がかかります。少しの間、操作ができなくなりますがお待ち下さい。',
    'ja-Hira': 'じゅんびにじかんがかかります。すこしのあいだ、そうさができなくなりますがおまちください。',
    'en': 'Setup takes a while. The browser will get stuck, but please wait.'
  },
  landmarks: [
    {
      'ja': '手首',
      'ja-Hira': 'てくび',
      'en': 'wrist'
    },
    {
      'ja': '親指の根元',
      'ja-Hira': 'おやゆびのねもと',
      'en': 'the base of thumb'
    },
    {
      'ja': '親指の第2関節',
      'ja-Hira': 'おやゆびのだい2かんせつ',
      'en': 'the 2nd joint of thumb'
    },
    {
      'ja': '親指の第1関節',
      'ja-Hira': 'おやゆびのだい1かんせつ',
      'en': 'the 1st joint of thumb'
    },
    {
      'ja': '親指の先端',
      'ja-Hira': 'おやゆびのさき',
      'en': 'thumb'
    },
    {
      'ja': '人差し指の第3関節',
      'ja-Hira': 'ひとさしゆびのだい3かんせつ',
      'en': 'the 3rd joint of index finger'
    },
    {
      'ja': '人差し指の第2関節',
      'ja-Hira': 'ひとさしゆびのだい2かんせつ',
      'en': 'the 2nd joint of index finger'
    },
    {
      'ja': '人差し指の第1関節',
      'ja-Hira': 'ひとさしゆびのだい1かんせつ',
      'en': 'the 1st joint of index finger'
    },
    {
      'ja': '人差し指の先端',
      'ja-Hira': 'ひとさしゆびのせんたん',
      'en': 'index finger'
    },
    {
      'ja': '中指の第3関節',
      'ja-Hira': 'なかゆびのだい3かんせつ',
      'en': 'the 3rd joint of middle finger'
    },
    {
      'ja': '中指の第2関節',
      'ja-Hira': 'なかゆびのだい2かんせつ',
      'en': 'the 2nd joint of middle finger'
    },
    {
      'ja': '中指の第1関節',
      'ja-Hira': 'なかゆびのだい1かんせつ',
      'en': 'the 1st joint of middle finger'
    },
    {
      'ja': '中指の先端',
      'ja-Hira': 'なかゆびのせんたん',
      'en': 'middle finger'
    },
    {
      'ja': '薬指の第3関節',
      'ja-Hira': 'くすりゆびのだい3かんせつ',
      'en': 'the 3rd joint of ring finger'
    },
    {
      'ja': '薬指の第2関節',
      'ja-Hira': 'くすりゆびのだい2かんせつ',
      'en': 'the 2nd joint of ring finger'
    },
    {
      'ja': '薬指の第1関節',
      'ja-Hira': 'くすりゆびのだい1かんせつ',
      'en': 'the 1st joint of ring finger'
    },
    {
      'ja': '薬指の先端',
      'ja-Hira': 'くすりゆびのせんたん',
      'en': 'ring finger'
    },
    {
      'ja': '小指の第3関節',
      'ja-Hira': 'こゆびのだい3かんせつ',
      'en': 'the 3rd joint of little finger'
    },
    {
      'ja': '小指の第2関節',
      'ja-Hira': 'こゆびのだい2かんせつ',
      'en': 'the 2nd joint of little finger'
    },
    {
      'ja': '小指の第1関節',
      'ja-Hira': 'こゆびのだい1かんせつ',
      'en': 'the 1st joint of little finger'
    },
    {
      'ja': '小指の先端',
      'ja-Hira': 'こゆびのせんたん',
      'en': 'little finger'
    }
  ]
};


// 利用可能なロケールを定義
const AvailableLocales = ['en', 'ja', 'ja-Hira']; // 使用するロケールコード

function setLocale() {
    alert("setLocale");
    let locale = formatMessage.setup().locale;
    if (AvailableLocales.includes(locale)) {
        return locale;
    } else {
        return 'en';
    }
}

// 手のポーズモデルを動的に読み込む関数

/*
async function loadHandposeModel() {
  alert("loadHandposeModel");
  try {
    const response = await fetch('https://cdn.jsdelivr.net/npm/@tensorflow-models/handpose');
    alert("response");
    const modelScript = await response.text();
    alert("modelScript");
    console.log("Handpose model script loaded.");
    eval(modelScript); // スクリプトを実行して手のポーズ機能を追加
    alert("eval");
    if (typeof Handpose !== 'undefined') {
        console.log("Handpose is defined.");
    } else {
        console.error("Handpose is not defined.");
    }
  } catch (err) {
    console.error("Error loading handpose model:", err);
  }
}
*/

export function loadHandposeModel() {
  console.log("loadHandposeModel: ml5 library loaded successfully!");
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/ml5@latest/dist/ml5.min.js';
    //script.src = 'https://tadaumi.github.io/ml5.min.js';
    script.async = true;

    script.onload = () => {
      if (typeof ml5 !== 'undefined') {
        console.log("onload: ml5 library loaded successfully!");
        resolve();
      } else {
        alert("onload: Failed to load ml5 library");
        reject(new Error('Failed to load ml5 library.'));
      }
    };
    script.onerror = (err) => {
      alert("onerror: Failed to load ml5 library ");
      reject(new Error(`Failed to load ml5 library: ${err.message}`     ));
    };
    document.head.appendChild(script);
  });
}
    
var extensionBlocks = /*#__PURE__*/function () {
  //alert("extensionBlocks");
  //this.log("extensionBlocks");
  // ml5 の手のポーズモデルを定義
  function loadMl5HandPose(videoElement) {
    return new Promise((resolve, reject) => {
      const handpose_tmp = ml5.handPose(videoElement, () => {
        console.log("handpose_tmp", handpose_tmp);
        resolve(handpose_tmp); // handposeのインスタンスをresolveで返す
      });
      
      if (!handpose_tmp) {
        reject(new Error("Failed to load handpose model"));
      }
    });
  }
  
  /**
   * Construct a set of blocks for handpose.
   * @param {Runtime} runtime - the Scratch 3.0 runtime.
   */
  function ExtensionBlocks(runtime) {
    //alert("ExtensionBlocks");
    
    _classCallCheck$1(this, ExtensionBlocks);
    
    /**
     * The Scratch 3.0 runtime.
     * @type {Runtime}
     */
    
    this.runtime = runtime;
    console.log("runtime: ", this.runtime);
    if (runtime.formatMessage) {
      // Replace 'formatMessage' to a formatter which is used in the runtime.
      formatMessage = runtime.formatMessage;
    }
    
    // インスタンス変数の初期化
    //alert("ExtensionBlocks_initialize");
    const handpose = {}; 
    this.landmarks = [];
    this.ratio = 0.75;
    this._locale = this.setLocale();
    console.log("ExtensionBlocks_initialized");
    
    this.runtime.ioDevices.video.enableVideo()
      .then(() => {
        console.log("enableVideo: Video enabled successfully");
        console.log("Video IO devices:", this.runtime.ioDevices.video);
        this.video = this.runtime.ioDevices.video.provider.video;
        console.log("Video element:", this.video); // ビデオ要素の確認
        console.log("Video element reference:", this.video instanceof HTMLVideoElement); // trueならDOMのvideo要素
        this.runtime.ioDevices.video.mirror = true;
        console.log("Mirror setting after default:", this.runtime.ioDevices.video.mirror);

        if (this.video) {
          this.detectHand(); // ビデオが取得できた場合のみ手の検出を開始
        } else {
          console.error("Failed to initialize video.");
        }
        //this.detectHand(); // ビデオが有効になった後に手の検出を呼び出す
      })
      .catch((err) => {
          console.error("Error enabling video:", err);
      });
      
    // 手の検出を開始
    //alert("ExtensionBlocks_before_detecthand");
    this.detectHand = () => {
      //this.video = this.runtime.ioDevices.video.provider.video;
      //alert("ExtensionBlocks_detecthand");
      
      alert(Message.please_wait[this._locale]);

      // handposeモデルの読み込み
      return loadHandposeModel()
        .then(() => {
          //alert("loadHandposeModel: ml5 library loaded!");
          console.log("Handpose model loaded. Initializing...");
        
          const videoElement = this.runtime.ioDevices.video.provider.video;
          if (!videoElement) {
            alert("Video element is not available");
            console.error("Video element is not available.");
            return;
          }
          if (videoElement.readyState === 4) {  // HAVE_ENOUGH_DATA
              document.body.appendChild(videoElement); // ビデオをページに表示
              console.log("Video is ready for handpose detection: ", videoElement);
          }
          alert("Video element is ready: ", videoElement);
          
          const canvas = document.createElement('canvas');
          const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

          if (!gl) {
            console.error("WebGL is not supported.");
          } else {
            alert("using WebGL");
            console.log("WebGL context initialized successfully.");
          }
          videoElement.appendChild(canvas);
          
          
          // ビデオストリームを取得し、videoElementに設定 
          navigator.mediaDevices.getUserMedia({ video: true })
            .then(stream => {
              const videoElement = this.runtime.ioDevices.video.provider.video; // Make sure to reference the correct video element
              if (!videoElement) {
                console.error("Video element not found");
                return;
              }
              videoElement.srcObject = stream;
              console.log("navigator.mediaDevices.getUserMedia: videoElement: ", videoElement);
              videoElement.play(); // ストリームを再生
              console.log("Video stream started: videoElement: ", videoElement);
          
              alert("Video stream started: videoElement: ", videoElement);

              videoElement.addEventListener('loadeddata', async () => {
                //alert("videoElement.addEventListener: Video element is ready");
                console.log("videoElement.addEventListener: videoElement: ", videoElement);
                try {
                  // handposeモデルのロードが完了するまで待つ
                  const handpose = await loadMl5HandPose(videoElement);
                  console.log("Handpose model loaded: ", handpose);
                  
                  videoElement = this.runtime.ioDevices.video.provider.video;
                  console.log("after const handpose: videoElement: ", videoElement);
                  console.log("Video Element readyState:", videoElement.readyState);
                  console.log("Video Element srcObject:", videoElement.srcObject);
                  console.log("Video Element paused:", videoElement.paused);
                  console.log("after const handpose: videoElement after log: ", videoElement);
                  this.startHandDetection(handpose, videoElement);
                } catch (error) {
                  console.error("Error loading handpose model:", error);
                }
                
                /*
                alert("after const handpose: " + handpose);
                // 手のポーズの検出を開始
                let intervalId = setInterval(() => {
                  alert("setInterval");
                  handpose.detect(videoElement, (results) => {
                    console.log("Results:", results);
                    console.log("results[0]: " + results[0]);
                    console.log("Keypoints:", results[0].keypoints);
                    //if (results && results.length > 0 && !isNaN(results[0].confidence)) {
                    if (results && results.length > 0) {
                      results.forEach(hand => {
                        this.landmarks = hand.landmarks; // Stretch3の処理に相当する部分
                        console.log("Landmarks:", this.landmarks);
                        
                        // 必要なら、ここで他の処理を追加
                      });
                      alert("Hand detected!");
                      
                      //this.landmarks = results[0]
                      console.log("landmarks: " + this.landmarks);
                      clearInterval(intervalId);
                      alert("Stopped the interval.");
                      console.log("Stopped the interval.");
                      
                    } else {
                      alert("No hand detected or error occurred.");
                      console.log("Results: ", results);
                    }
                  });
                  
                }, 100); // 100ミリ秒ごとに検出を行う
                */
              });  //end of videoElement.addEventListener
            })
            .catch(error => {
              console.error("Error accessing the camera: ", error);
            }); 
        })
        .catch(err => {
          console.error("Error loading handpose model:", err);
        });
      
    };  //end of detecthand
  };   //end of ExtensionBlocks

  // 手の検出を開始するメソッド
  ExtensionBlocks.prototype.startHandDetection = function(handpose, videoElement) {
    alert("startHandDetection");
    console.log("startHandDetection: ", videoElement);
    if (!videoElement) {
        console.error("No video element provided or initialized.");
        return;
    }
    
    // 手の検出を開始
    const detectHands = () => {
      alert("detectHands");
      //handpose.detect((error, results) => {
      if (videoElement.readyState === 4) {
        alert("videoElement.readyState === 4");
        handpose.detect(videoElement, (error, results) => {
          if (error) {
            console.log("handpose.detect error!: ", error);
            return;
          }
          alert("handpose.detect", results);
          if (results && results.length > 0) {
            results.forEach(hand => {
              console.log("hand:", hand);
              this.landmarks = hand.landmarks; // Stretch3の処理に相当する部分
              console.log("Landmarks:", this.landmarks);
            });
          } else {
            alert("handpose.detect: results failed", results);
          }
        });
        // 次のフレームをリクエスト
        requestAnimationFrame(detectHands);
        console.log("requested next frame");
      } else {
          console.log("Video element not ready.");
      }
      alert("detectHands_end");
    };
    
    console.log("startHandDetection: Handpose model loaded and ready for detection.");
    alert("startHandDetection: Handpose model loaded");
    detectHands(); // モデルロード完了後に手の検出を開始
    alert("startHandDetection_end");
  };

  ExtensionBlocks.prototype.LANDMARK_MENU = function () {
      //alert("LANDMARK_MENU");
      const landmark_menu = [];
      for (let i = 1; i <= 21; i++) {
          landmark_menu.push({text: `${Message.landmarks[i - 1][this._locale]} (${i})`, value: String(i)});
      }
      return landmark_menu;
  };
  
  ExtensionBlocks.prototype.VIDEO_MENU = function () {
      //alert("VIDEO_MENU");
      return [
          { text: Message.off[this._locale], value: 'off' },
          { text: Message.on[this._locale], value: 'on' },
          { text: Message.video_on_flipped[this._locale], value: 'on-flipped' }
      ];
  };

  ExtensionBlocks.prototype.INTERVAL_MENU = function () {
      return [
          { text: '0.1', value: '0.1' },
          { text: '0.2', value: '0.2' },
          { text: '0.5', value: '0.5' },
          { text: '1.0', value: '1.0' }
      ];
  };

  ExtensionBlocks.prototype.RATIO_MENU = function () {
      return [
          { text: '0.5', value: '0.5' },
          { text: '0.75', value: '0.75' },
          { text: '1', value: '1' },
          { text: '1.5', value: '1.5' },
          { text: '2.0', value: '2.0' }
      ];
  };
  
  ExtensionBlocks.prototype.setLocale = function () {
      let locale = formatMessage.setup().locale;
      if (AvailableLocales.includes(locale)) {
          return locale;
      } else {
          return 'en';
      }
  };
  
  ExtensionBlocks.prototype.getInfo = function () {
      //alert("getInfo");
      return {
          id: 'handpose2scratch',
          name: 'handpose2Scratch',
          blockIconURI: img,
          blocks: [
            // ... (ブロック定義をそのまま配置)
            {
              opcode: 'getX',
              blockType: BlockType.REPORTER,
              text: Message.getX[this._locale],
              arguments: {
                  LANDMARK: {
                      type: ArgumentType.STRING,
                      menu: 'landmark',
                      defaultValue: '1'
                  }
              }
            }
          ],
          menus: {
              landmark: { acceptReporters: true, items: this.LANDMARK_MENU() },
              videoMenu: { acceptReporters: true, items: this.VIDEO_MENU() },
              ratioMenu: { acceptReporters: true, items: this.RATIO_MENU() },
              intervalMenu: { acceptReporters: true, items: this.INTERVAL_MENU() }
          }
      };
  };
  
  ExtensionBlocks.prototype.getX = function (args) {
    //alert("getX");
    let landmarkIndex = parseInt(args.LANDMARK, 10) - 1;
    console.log("args.LANDMARK: ", args.LANDMARK);
    console.log("Landmark index: ", landmarkIndex);
    console.log("landmarks: ", this.landmarks);
    console.log("Keypoints: ", this.landmarks.keypoints);
    //if (this.landmarks[landmark]) {
    if (this.landmarks && this.landmarks.keypoints && this.landmarks.keypoints.length > landmarkIndex) {
      alert("getX");
      let keypoint = this.landmarks.keypoints[landmarkIndex];
      console.log("Keypoint: ", keypoint);
      
      if (this.runtime.ioDevices.video.mirror === false) {
        return -1 * (240 - keypoint[0] * this.ratio);
      } else {
        return 240 - keypoint[0] * this.ratio;
      }
    } else {
      alert("getX_failed");
      return "";
    }
  };
  
  return ExtensionBlocks;
}();

export { extensionBlocks as blockClass, entry };
//# sourceMappingURL=handpose.mjs.map
