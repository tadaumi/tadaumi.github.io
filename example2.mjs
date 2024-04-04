var img$1 = "<omossion>";

var formatMessage$1 = function formatMessage(messageData) {
  return messageData.defaultMessage;
};

var en$1 = {
  "xcratchExample.name": "Xcratch Example",
  "xcratchExample.doIt": "do it [SCRIPT]"
};
var ja$1 = {
  "xcratchExample.name": "Xcratchの例",
  "xcratchExample.doIt": "[SCRIPT] を実行する"
};
var translations$1 = {
  en: en$1,
  ja: ja$1,
  "ja-Hira": {
    "xcratchExample.name": "エクスクラッチの例",
    "xcratchExample.doIt": "[SCRIPT] を実行する"
  }
};

var entry = {
  get name() {
    return formatMessage$1({
      id: 'xcratchExample.name',
      defaultMessage: 'Xcratch Example',
      description: 'name of the extension'
    });
  },
  extensionId: 'xcratchExample',
  extensionURL: 'https://yokobond.github.io/xcx-xcratchExample/dist/xcratchExample.mjs',
  collaborator: 'xcratch',
  iconURL: img$1,
  insetIconURL: img$1,
  get description() {
    return formatMessage$1({
      defaultMessage: 'An extension for Xcratch',
      description: 'Description for this extension',
      id: 'xcratchExample.entry.description'
    });
  },
  featured: true,
  disabled: false,
  bluetoothRequired: false,
  internetConnectionRequired: false,
  helpLink: 'https://yokobond.github.io/xcx-xcratchExample/'
};

var BlockType$2 = {
  BOOLEAN: 'Boolean'
};

var ArgumentType$2 = {
  NUMBER: 'number',
  STRING: 'string'
};

var Color$2 = /*#__PURE__*/function () {
  function Color() {
    _classCallCheck(this, Color);
  }

  _createClass(Color, null, [{
    key: "RGB_BLACK",
    get: function get() {
      return {
        r: 0,
        g: 0,
        b: 0
      };
    }
  }, {
    key: "RGB_WHITE",
    get: function get() {
      return {
        r: 255,
        g: 255,
        b: 255
      };
    }
  }]);

  return Color;
}();

var Cast$2 = /*#__PURE__*/function () {
  function Cast() {
    _classCallCheck(this, Cast);
  }

  _createClass(Cast, null, [{
    key: "toNumber",
    value: function toNumber(value) {
      if (typeof value === 'number') {
        if (Number.isNaN(value)) {
          return 0;
        }

        return value;
      }

      value = value.replace(/[\uff10-\uff19\uff0b\uff0e\uff45]/g, function (s) {
        return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
      });
      value = value.replace(/[-\uff0d\ufe63\u2212\u2010\u2043\u2011\u2012\u2013\u2014\ufe58\u2015\u23af\u23e4\u30fc\uff70\u2500\u2501]/g, '-');
      var n = Number(value);

      if (Number.isNaN(n)) {
        return 0;
      }

      return n;
    }
  }, {
    key: "toString",
    value: function toString(value) {
      return String(value).replace(/\\n/g, '\n').replace(/\\t/g, '\t');
    }
  }, {
    key: "isWhiteSpace",
    value: function isWhiteSpace(val) {
      return val === null || typeof val === 'string' && val.trim().length === 0;
    }
  }, {
    key: "isInt",
    value: function isInt(val) {
      if (typeof val === 'number') {
        if (isNaN(val)) {
          return true;
        }

        return val === parseInt(val, 10);
      } else if (typeof val === 'boolean') {
        return true;
      } else if (typeof val === 'string') {
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
  }, {
    key: "toListIndex",
    value: function toListIndex(index, length, acceptAll) {
      if (typeof index !== 'number') {
        if (index === 'all') {
          return acceptAll ? Cast$2.LIST_ALL : Cast$2.LIST_INVALID;
        }

        if (typeof index === 'string' && index.trim().length > 0) {
          var n = parseInt(index, 10);

          if (!isNaN(n)) {
            return n;
          }
        }

        return Cast$2.LIST_INVALID;
      }

      if (index === Cast$2.LIST_ALL) {
        return acceptAll ? Cast$2.LIST_ALL : Cast$2.LIST_INVALID;
      }

      if (index < 1) {
        return 1;
      }

      if (index > length) {
        return length;
      }

      return index;
    }
  }]);

  return Cast;
}();

var Base$1 = /*#__PURE__*/function () {
  function Base() {
    _classCallCheck(this, Base);
  }

  _createClass(Base, [{
    key: "isMousePressed",
    value: function isMousePressed() {
      return false;
    }
  }, {
    key: "toBoolean",
    value: function toBoolean(value) {
      return Boolean(value);
    }
  }, {
    key: "toNumber",
    value: function toNumber(value) {
      return Cast$2.toNumber(value);
    }
  }, {
    key: "toString",
    value: function toString(value) {
      return Cast$2.toString(value);
    }
  }, {
    key: "toText",
    value: function toText(value) {
      return String(value);
    }
  }, {
    key: "toJSON",
    value: function toJSON(value) {
      try {
        return JSON.parse(value);
      } catch (e) {
        return null;
      }
    }
  }, {
    key: "toColor",
    value: function toColor(value) {
      if (value instanceof Color$2) {
        return value;
      }

      if (typeof value === 'string') {
        var m = value.match(/^#([0-9a-fA-F]{6})$/);

        if (m) {
          var n = parseInt(m[1], 16);
          return {
            r: n >> 16 & 0xff,
            g: n >> 8 & 0xff,
            b: n & 0xff
          };
        }
      }

      return Color$2.RGB_BLACK;
    }
  }, {
    key: "toVariable",
    value: function toVariable(name) {
      return name;
    }
  }, {
    key: "toVector",
    value: function toVector(value) {
      return {
        x: this.toNumber(value.x),
        y: this.toNumber(value.y)
      };
    }
  }, {
    key: "toListIndex",
    value: function toListIndex(index, length) {
      return Cast$2.toListIndex(index, length, false);
    }
  }, {
    key: "toTextArray",
    value: function toTextArray(value) {
      if (value instanceof Array) {
        return value;
      }

      return [this.toText(value)];
    }
  }, {
    key: "toNumberArray",
    value: function toNumberArray(value) {
      if (value instanceof Array) {
        return value.map(this.toNumber.bind(this));
      }

      return [this.toNumber(value)];
    }
  }]);

  return Base;
}();

var cloneDeep$1 = function cloneDeep(obj) {
  return JSON.parse(JSON.stringify(obj));
};

var EVENTS$1 = {
  EVENT_HAT_CLICKED: 'EVENT_HAT_CLICKED'
};

var EVENTS$2 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  EVENT_HAT_CLICKED: EVENTS$1.EVENT_HAT_CLICKED
});

var BlockType$3 = {
  HAT: 'hat',
  COMMAND: 'command',
  REPORTER: 'reporter',
  BOOLEAN: 'Boolean',
  BLOCKS: 'blocks'
};

var ArgumentType$3 = {
  ANGLE: 'angle',
  TEXT: 'text',
  NUMBER: 'number',
  COLOR: 'color',
  BOOLEAN: 'Boolean'
};

var XcratchExampleExtension = /*#__PURE__*/function (_Extension) {
  _inherits(XcratchExampleExtension, _Extension);

  var _super = _createSuper(XcratchExampleExtension);

  function XcratchExampleExtension() {
    _classCallCheck(this, XcratchExampleExtension);

    return _super.call(this, {
      extensionId: 'xcratchExample',
      collaborator: 'xcratch'
    });
  }

  _createClass(XcratchExampleExtension, [{
    key: "openWindow",
    value: function openWindow() {
      var eventName = EVENTS$1.EVENT_HAT_CLICKED;
      var e = new Event(eventName);
      window.dispatchEvent(e);
    }
  }, {
    key: "onWindowOpen",
    value: function onWindowOpen(handler) {
      window.addEventListener(EVENTS$1.EVENT_HAT_CLICKED, handler);
    }
  }, {
    key: "onWindowClose",
    value: function onWindowClose(handler) {
      window.removeEventListener(EVENTS$1.EVENT_HAT_CLICKED, handler);
    }
  }]);

  return XcratchExampleExtension;
}(Extension);

var initExtension = function initExtension(Services) {
  var xcratchExampleExtension = new XcratchExampleExtension();
  Services.extensionManager.registerExtension(xcratchExampleExtension);
};

initExtension(Services);

var XcratchExample = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Base: Base$1,
  EVENTS: EVENTS$2,
  BlockType: BlockType$3,
  ArgumentType: ArgumentType$3,
  XcratchExampleExtension: XcratchExampleExtension,
  initExtension: initExtension
});

class ExtensionManager {
  constructor() {
    this._extensions = {};
  }

  registerExtension(extension) {
    const extensionId = extension.extensionId;

    if (!this._extensions[extensionId]) {
      this._extensions[extensionId] = extension;
    } else {
      throw new Error(`Extension with id ${extensionId} is already registered.`);
    }
  }

  getExtension(extensionId) {
    return this._extensions[extensionId];
  }

  getExtensionIds() {
    return Object.keys(this._extensions);
  }

}

var extensionManager = new ExtensionManager();

class Services {
  static registerService(serviceName, service) {
    Services._services[serviceName] = service;
  }

  static getService(serviceName) {
    return Services._services[serviceName];
  }

}

Services._services = {};

Services.registerService('extensionManager', extensionManager);

var init$1 = function init() {
  Services.registerService('extensionManager', extensionManager);
};

init$1();

var Hat = /*#__PURE__*/function () {
  function Hat() {
    _classCallCheck(this, Hat);
  }

  _createClass(Hat, null, [{
    key: "onEvent",
    value: function onEvent(eventName, handler) {
      Services.getService('extensionManager').getExtension('xcratchExample').onWindowOpen(handler);
    }
  }]);

  return Hat;
}();

var Command = /*#__PURE__*/function () {
  function Command() {
    _classCallCheck(this, Command);
  }

  _createClass(Command, null, [{
    key: "doIt",
    value: function doIt() {
      Services.getService('extensionManager').getExtension('xcratchExample').openWindow();
    }
  }]);

  return Command;
}();

var Reporter = /*#__PURE__*/function () {
  function Reporter() {
    _classCallCheck(this, Reporter);
  }

  _createClass(Reporter, null, [{
    key: "hello",
    value: function hello() {
      return 'hello';
    }
  }]);

  return Reporter;
}();

var BooleanBlock = /*#__PURE__*/function () {
  function BooleanBlock() {
    _classCallCheck(this, BooleanBlock);
  }

  _createClass(BooleanBlock, null, [{
    key: "isTrue",
    value: function isTrue() {
      return true;
    }
  }]);

  return BooleanBlock;
}();

var Blocks$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Hat: Hat,
  Command: Command,
  Reporter: Reporter,
  BooleanBlock: BooleanBlock
});

var XcratchExample$1 = XcratchExample;
var Blocks = Blocks$1;
var Base = Base$1;

exports.Blocks = Blocks;
exports.Base = Base;
exports.XcratchExample = XcratchExample$1;
})(window, window.Scratch);})();

/******/ })()
;

// `window` and `window.Scratch` are available now
window.Scratch = window.Scratch || {};
window.Scratch.extensions = window.Scratch.extensions || {};
window.Scratch.extensions.XcratchExample = window.Scratch.extensions.XcratchExample || {};
window.Scratch.vm = window.Scratch.vm || {};
window.Scratch.vm.runtime = window.Scratch.vm.runtime || {};

window.Scratch.extensions.XcratchExample = window.XcratchExample;

(function (exports, Scratch) {
  var ExtensionManager = Scratch.ExtensionManager;
  var Services = Scratch.Services;

  var init = function init() {
    Services.registerService('extensionManager', ExtensionManager);
  };

  init();
})(window, window.Scratch);

