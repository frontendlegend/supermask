(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

exports.__esModule = true;
var input_1 = require("./ts/input");
window.onload = function () {
    (0, input_1.superMask)();
};

},{"./ts/input":17}],2:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.caretPosition = void 0;
var caretPosition = function caretPosition(field) {
    var carPos = 0;
    if (field.selectionStart || field.selectionStart === 0) {
        carPos = field.selectionDirection === 'backward' ? field.selectionStart : field.selectionEnd;
    }
    return carPos;
};
exports.caretPosition = caretPosition;

},{}],3:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.formatPhone = void 0;
var repeatString_1 = require("./repeatString");
var formatPhone = function formatPhone(phone) {
    if (phone === void 0) {
        phone = 7 + (0, repeatString_1.repeatString)("_", 10);
    }
    var arr = phone.split("");
    var countryCode = "+" + (arr[0] || "_");
    var areaCode = "(" + (arr[1] || "_") + (arr[2] || "_") + (arr[3] || "_") + ")";
    var telPrefix = "" + (arr[4] || "_") + (arr[5] || "_") + (arr[6] || "_");
    var lineNumber = "" + (arr[7] || "_") + (arr[8] || "_") + "-" + (arr[9] || "_") + (arr[10] || "_");
    return countryCode + " " + areaCode + " " + telPrefix + "-" + lineNumber;
};
exports.formatPhone = formatPhone;

},{"./repeatString":6}],4:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.moveBackwards = void 0;
var moveBackwards = function moveBackwards(arr, curPos, input) {
    if ([0, 1, 2].indexOf(curPos) !== -1) {
        input.element.setSelectionRange(arr.indexOf('_'), arr.indexOf('_'));
    } else if (/\d/.test(arr[curPos - 1])) {
        input.element.setSelectionRange(curPos, curPos);
    } else if (/_/.test(arr[curPos - 1])) {
        input.element.setSelectionRange(curPos, curPos);
    } else if (/-/.test(arr[curPos - 1])) {
        input.element.setSelectionRange(curPos - 1, curPos - 1);
    } else if (/ /.test(arr[curPos - 1]) && /\)/.test(arr[curPos - 2])) {
        input.element.setSelectionRange(curPos - 2, curPos - 2);
    } else if (/ /.test(arr[curPos]) && /\)/.test(arr[curPos - 1])) {
        input.element.setSelectionRange(curPos - 1, curPos - 1);
    } else if (/\(/.test(arr[curPos - 1])) {
        input.element.setSelectionRange(curPos, curPos);
    } else if (/\)/.test(arr[curPos])) {
        input.element.setSelectionRange(curPos + 1, curPos + 1);
    }
};
exports.moveBackwards = moveBackwards;

},{}],5:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.moveForward = void 0;
var moveForward = function moveForward(arr, curPos, input) {
    if (!/_/.test(arr[curPos])) {
        input.element.setSelectionRange(arr.indexOf("_"), arr.indexOf("_"));
    }
};
exports.moveForward = moveForward;

},{}],6:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.repeatString = void 0;
var repeatString = function repeatString(str, times) {
    var repeated = "";
    for (var i = 0; i < times; i++) {
        repeated += str;
    }
    return repeated;
};
exports.repeatString = repeatString;

},{}],7:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.typing = void 0;
var typing = function typing(arr, curPos, char) {
    if (/\+|\d|_/.test(arr[curPos]) && [0, 1].indexOf(curPos) === -1) {
        if (char) {
            if (/\d/.test(char) && curPos === arr.indexOf("_")) {
                return char;
            } else {
                return arr[curPos];
            }
        } else {
            return "_";
        }
    } else {
        return arr[curPos];
    }
};
exports.typing = typing;

},{}],8:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.Array = void 0;
var Array = /** @class */function () {
    function Array() {
        this.value = [];
    }
    Array.prototype.define = function (array) {
        this.value = array;
    };
    Array.prototype.string = function () {
        return this.value.toString().replace(/,/g, "");
    };
    return Array;
}();
exports.Array = Array;

},{}],9:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.Input = void 0;
var caretPosition_1 = require("../../functions/caretPosition");
var Input = /** @class */function () {
    function Input() {
        this.element = document.getElementById("phoneInput");
    }
    Input.prototype["default"] = function (value) {
        this.element.defaultValue = value;
    };
    Input.prototype.value = function (value) {
        this.element.value = value;
    };
    Input.prototype.array = function () {
        return this.element.value.split("");
    };
    Input.prototype.digits = function () {
        var _a;
        return (_a = this.element.value.match(/\d/g)) === null || _a === void 0 ? void 0 : _a.toString().replace(/,/g, "");
    };
    Input.prototype.position = function () {
        return (0, caretPosition_1.caretPosition)(this.element);
    };
    return Input;
}();
exports.Input = Input;

},{"../../functions/caretPosition":2}],10:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.Selection = void 0;
var Selection = /** @class */function () {
    function Selection() {
        this.state = {
            selectStart: null,
            selectEnd: null,
            selected: ""
        };
    }
    return Selection;
}();
exports.Selection = Selection;

},{}],11:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.inputEvent = void 0;
var selected_1 = require("./selected");
var notSelected_1 = require("./notSelected");
var inputEvent = function inputEvent(e, input, array, selection) {
    e.preventDefault();
    var digits = input.digits();
    var selectStart = selection.state.selectStart;
    var selected = selection.state.selected;
    if ((digits === null || digits === void 0 ? void 0 : digits.length) >= 12) {
        input.value(array.string());
    } else if ((digits === null || digits === void 0 ? void 0 : digits.length) !== 12) {
        if (selected) {
            (0, selected_1.ifSelected)(input, array, selection, selectStart, selected);
        } else if (!selected) {
            (0, notSelected_1.ifNotSelected)(e, input, array);
        }
    }
};
exports.inputEvent = inputEvent;

},{"./notSelected":12,"./selected":13}],12:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.ifNotSelected = void 0;
var moveBackwards_1 = require("../../../functions/moveBackwards");
var typing_1 = require("../../../functions/typing");
var ifNotSelected = function ifNotSelected(e, input, array) {
    var char = e instanceof InputEvent && e.data;
    var curPos = char ? input.position() - 1 : input.position();
    array.value.splice(curPos, 1, (0, typing_1.typing)(array.value, curPos, char));
    input.value(array.string());
    if (char) {
        input.element.setSelectionRange(array.value.indexOf('_'), array.value.indexOf('_'));
    } else {
        (0, moveBackwards_1.moveBackwards)(array.value, curPos, input);
    }
};
exports.ifNotSelected = ifNotSelected;

},{"../../../functions/moveBackwards":4,"../../../functions/typing":7}],13:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.ifSelected = void 0;
var ifSelected = function ifSelected(input, array, selection, selectStart, selected) {
    if (selected.match(/^\+[7]/g)) {
        var selectedCut = selected.substring(2);
        var arrCut_1 = array.value.splice(2);
        selectedCut.split("").forEach(function (char, idx) {
            if (/\d/.test(char)) {
                arrCut_1.splice(selectStart + idx, 1, '_');
            } else if (!/\d/.test(char)) {
                arrCut_1.splice(selectStart + idx, 1, arrCut_1[selectStart + idx]);
            }
        });
        array.value = array.value.concat(arrCut_1);
        input.value(array.string());
        selection.state.selected = "";
    } else {
        selected.split("").forEach(function (char, idx) {
            if (/\d/.test(char)) {
                array.value.splice(selectStart + idx, 1, '_');
            } else if (!/\d/.test(char)) {
                array.value.splice(selectStart + idx, 1, array.value[selectStart + idx]);
            }
        });
        input.value(array.string());
        selection.state.selected = "";
    }
};
exports.ifSelected = ifSelected;

},{}],14:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.keyDownEvent = void 0;
var moveForward_1 = require("../../functions/moveForward");
var keyDownEvent = function keyDownEvent(e, input, array) {
    e.stopPropagation();
    var curPos = input.position();
    var notTypingKeys = ['Backspace', 'ArrowLeft', 'ArrowRight'];
    if (notTypingKeys.indexOf(e.key) === -1 && array.value[curPos]) {
        (0, moveForward_1.moveForward)(array.value, curPos, input);
    }
};
exports.keyDownEvent = keyDownEvent;

},{"../../functions/moveForward":5}],15:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.pasteEvent = void 0;
var pasteEvent = function pasteEvent(e, input, array) {
    e.preventDefault();
    var clipboardData = e.clipboardData;
    var pasted = clipboardData === null || clipboardData === void 0 ? void 0 : clipboardData.getData('Text');
    var pastedDigitsArr = pasted.match(/\d/g);
    pastedDigitsArr === null || pastedDigitsArr === void 0 ? void 0 : pastedDigitsArr.splice(array.value.filter(function (x) {
        return x === '_';
    }).length);
    pastedDigitsArr === null || pastedDigitsArr === void 0 ? void 0 : pastedDigitsArr.forEach(function (char) {
        array.value.splice(array.value.indexOf('_'), 1, char);
    });
    input.value(array.string());
    input.element.setSelectionRange(array.value.indexOf('_'), array.value.indexOf('_'));
};
exports.pasteEvent = pasteEvent;

},{}],16:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.selectEvent = void 0;
var selectEvent = function selectEvent(e, selection) {
    var target = e.target;
    var value = target.value;
    selection.state = {
        selectStart: target.selectionStart,
        selectEnd: target.selectionEnd,
        selected: value.substring(target.selectionStart, target.selectionEnd)
    };
    console.log(selection.state);
};
exports.selectEvent = selectEvent;

},{}],17:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.superMask = void 0;
var input_1 = require("./classes/input");
var selection_1 = require("./classes/selection");
var formatPhone_1 = require("../functions/formatPhone");
var select_1 = require("./events/select");
var paste_1 = require("./events/paste");
var keyDown_1 = require("./events/keyDown");
var input_2 = require("./events/input");
var array_1 = require("./classes/array");
var superMask = function superMask() {
    var input = new input_1.Input();
    var array = new array_1.Array();
    var selection = new selection_1.Selection();
    input["default"]((0, formatPhone_1.formatPhone)());
    array.define(input.array());
    input.element.addEventListener("select", function (e) {
        return (0, select_1.selectEvent)(e, selection);
    });
    input.element.addEventListener("paste", function (e) {
        return (0, paste_1.pasteEvent)(e, input, array);
    });
    input.element.addEventListener("keydown", function (e) {
        return (0, keyDown_1.keyDownEvent)(e, input, array);
    });
    input.element.addEventListener("input", function (e) {
        return (0, input_2.inputEvent)(e, input, array, selection);
    });
};
exports.superMask = superMask;

},{"../functions/formatPhone":3,"./classes/array":8,"./classes/input":9,"./classes/selection":10,"./events/input":11,"./events/keyDown":14,"./events/paste":15,"./events/select":16}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvbWFpbi50cyIsInNyYy90cy9mdW5jdGlvbnMvY2FyZXRQb3NpdGlvbi50cyIsInNyYy90cy9mdW5jdGlvbnMvZm9ybWF0UGhvbmUudHMiLCJzcmMvdHMvZnVuY3Rpb25zL21vdmVCYWNrd2FyZHMudHMiLCJzcmMvdHMvZnVuY3Rpb25zL21vdmVGb3J3YXJkLnRzIiwic3JjL3RzL2Z1bmN0aW9ucy9yZXBlYXRTdHJpbmcudHMiLCJzcmMvdHMvZnVuY3Rpb25zL3R5cGluZy50cyIsInNyYy90cy9pbnB1dC9jbGFzc2VzL2FycmF5LnRzIiwic3JjL3RzL2lucHV0L2NsYXNzZXMvaW5wdXQudHMiLCJzcmMvdHMvaW5wdXQvY2xhc3Nlcy9zZWxlY3Rpb24udHMiLCJzcmMvdHMvaW5wdXQvZXZlbnRzL2lucHV0L2luZGV4LnRzIiwic3JjL3RzL2lucHV0L2V2ZW50cy9pbnB1dC9ub3RTZWxlY3RlZC50cyIsInNyYy90cy9pbnB1dC9ldmVudHMvaW5wdXQvc2VsZWN0ZWQudHMiLCJzcmMvdHMvaW5wdXQvZXZlbnRzL2tleURvd24udHMiLCJzcmMvdHMvaW5wdXQvZXZlbnRzL3Bhc3RlLnRzIiwic3JjL3RzL2lucHV0L2V2ZW50cy9zZWxlY3QudHMiLCJzcmMvdHMvaW5wdXQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUNBQSxJQUFBLFVBQUEsUUFBQSxZQUFBLENBQUE7QUFFQSxPQUFPLE1BQVAsR0FBZ0IsWUFBQTtBQUNkLEtBQUEsR0FBQSxRQUFBLFNBQUE7QUFDRCxDQUZEOzs7Ozs7O0FDRk8sSUFBTSxnQkFBZ0IsU0FBaEIsYUFBZ0IsQ0FBQyxLQUFELEVBQXdCO0FBQ25ELFFBQUksU0FBUyxDQUFiO0FBRUEsUUFBSSxNQUFNLGNBQU4sSUFBd0IsTUFBTSxjQUFOLEtBQXlCLENBQXJELEVBQXdEO0FBQ3RELGlCQUFTLE1BQU0sa0JBQU4sS0FBNkIs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QUQsRUFBRTtBQUFLLGVBQUEsQ0FBQSxHQUFBLFFBQUEsVUFBQSxFQUFXLENBQVgsRUFBYyxLQUFkLEVBQUEsS0FBQSxDQUFBO0FBQTJCLEtBRi9EO0FBSUEsVUFDRyxPQURILENBRUcsZ0JBRkgsQ0FFb0IsU0FGcEIsRUFFK0IsVUFBQyxDQUFELEVBQUU7QUFBSyxlQUFBLENBQUEsR0FBQSxVQUFBLFlBQUEsRUFBYSxDQUFiLEVBQWdCLEtBQWhCLEVBQUEsS0FBQSxDQUFBO0FBQTZCLEtBRm5FO0FBSUEsVUFDRyxPQURILENBRUcsZ0JBRkgsQ0FFb0IsT0FGcEIsRUFFNkIsVUFBQyxDQUFELEVBQUU7QUFBSyxlQUFBLENBQUEsR0FBQSxRQUFBLFVBQUEsRUFBVyxDQUFYLEVBQWMsS0FBZCxFQUFxQixLQUFyQixFQUFBLFNBQUEsQ0FBQTtBQUFzQyxLQUYxRTtBQUdELENBekJNO0FBQU0sUUFBQSxTQUFBLEdBQVMsU0FBVCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCB7IHN1cGVyTWFzayB9IGZyb20gXCIuL3RzL2lucHV0XCJcclxuXHJcbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgc3VwZXJNYXNrKCk7XHJcbn0iLCJleHBvcnQgY29uc3QgY2FyZXRQb3NpdGlvbiA9IChmaWVsZDogSFRNTElucHV0RWxlbWVudCkgPT4ge1xyXG4gIGxldCBjYXJQb3MgPSAwO1xyXG5cclxuICBpZiAoZmllbGQuc2VsZWN0aW9uU3RhcnQgfHwgZmllbGQuc2VsZWN0aW9uU3RhcnQgPT09IDApIHtcclxuICAgIGNhclBvcyA9IGZpZWxkLnNlbGVjdGlvbkRpcmVjdGlvbiA9PT0gJ2JhY2t3YXJkJ1xyXG4gICAgICA/IGZpZWxkLnNlbGVjdGlvblN0YXJ0XHJcbiAgICAgIDogZmllbGQuc2VsZWN0aW9uRW5kO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNhclBvc1xyXG59IiwiaW1wb3J0IHsgcmVwZWF0U3RyaW5nIH0gZnJvbSBcIi4vcmVwZWF0U3RyaW5nXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZm9ybWF0UGhvbmUgPSAocGhvbmUgPSA3ICsgcmVwZWF0U3RyaW5nKFwiX1wiLCAxMCkpID0+IHtcclxuICBjb25zdCBhcnIgPSBwaG9uZS5zcGxpdChcIlwiKTtcclxuXHJcbiAgY29uc3QgY291bnRyeUNvZGUgPSBgKyR7YXJyWzBdIHx8IFwiX1wifWA7XHJcbiAgY29uc3QgYXJlYUNvZGUgPSBgKCR7YXJyWzFdIHx8IFwiX1wifSR7YXJyWzJdIHx8IFwiX1wifSR7YXJyWzNdIHx8IFwiX1wifSlgO1xyXG4gIGNvbnN0IHRlbFByZWZpeCA9IGAke2Fycls0XSB8fCBcIl9cIn0ke2Fycls1XSB8fCBcIl9cIn0ke2Fycls2XSB8fCBcIl9cIn1gO1xyXG4gIGNvbnN0IGxpbmVOdW1iZXIgPSBgJHthcnJbN10gfHwgXCJfXCJ9JHthcnJbOF0gfHwgXCJfXCJ9LSR7YXJyWzldIHx8IFwiX1wifSR7YXJyWzEwXSB8fCBcIl9cIn1gO1xyXG4gIFxyXG4gIHJldHVybiBgJHtjb3VudHJ5Q29kZX0gJHthcmVhQ29kZX0gJHt0ZWxQcmVmaXh9LSR7bGluZU51bWJlcn1gO1xyXG59IiwiaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiLi4vaW5wdXQvY2xhc3Nlcy9pbnB1dFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IG1vdmVCYWNrd2FyZHMgPSAoXHJcbiAgYXJyOiBzdHJpbmdbXSxcclxuICBjdXJQb3M6IG51bWJlcixcclxuICBpbnB1dDogSW5wdXRcclxuKSA9PiB7XHJcbiAgaWYgKFswLCAxLCAyXS5pbmRleE9mKGN1clBvcykgIT09IC0xKSB7XHJcbiAgICBpbnB1dFxyXG4gICAgICAuZWxlbWVudFxyXG4gICAgICAuc2V0U2VsZWN0aW9uUmFuZ2UoYXJyLmluZGV4T2YoJ18nKSwgYXJyLmluZGV4T2YoJ18nKSk7XHJcbiAgfVxyXG4gIGVsc2UgaWYgKC9cXGQvLnRlc3QoYXJyW2N1clBvcyAtIDFdKSkge1xyXG4gICAgaW5wdXRcclxuICAgICAgLmVsZW1lbnRcclxuICAgICAgLnNldFNlbGVjdGlvblJhbmdlKGN1clBvcywgY3VyUG9zKTsgXHJcbiAgfSBcclxuICBlbHNlIGlmICgvXy8udGVzdChhcnJbY3VyUG9zIC0gMV0pKSB7XHJcbiAgICBpbnB1dFxyXG4gICAgICAuZWxlbWVudFxyXG4gICAgICAuc2V0U2VsZWN0aW9uUmFuZ2UoY3VyUG9zLCBjdXJQb3MpOyBcclxuICB9IFxyXG4gIGVsc2UgaWYgKC8tLy50ZXN0KGFycltjdXJQb3MgLSAxXSkpIHtcclxuICAgIGlucHV0XHJcbiAgICAgIC5lbGVtZW50XHJcbiAgICAgIC5zZXRTZWxlY3Rpb25SYW5nZShjdXJQb3MgLSAxLCBjdXJQb3MgLSAxKTsgXHJcbiAgfSBcclxuICBlbHNlIGlmICgvIC8udGVzdChhcnJbY3VyUG9zIC0gMV0pICYmIC9cXCkvLnRlc3QoYXJyW2N1clBvcyAtIDJdKSkge1xyXG4gICAgaW5wdXRcclxuICAgICAgLmVsZW1lbnRcclxuICAgICAgLnNldFNlbGVjdGlvblJhbmdlKGN1clBvcyAtIDIsIGN1clBvcyAtIDIpOyBcclxuICB9IFxyXG4gIGVsc2UgaWYgKC8gLy50ZXN0KGFycltjdXJQb3NdKSAmJiAvXFwpLy50ZXN0KGFycltjdXJQb3MgLSAxXSkpIHtcclxuICAgIGlucHV0XHJcbiAgICAgIC5lbGVtZW50XHJcbiAgICAgIC5zZXRTZWxlY3Rpb25SYW5nZShjdXJQb3MgLSAxLCBjdXJQb3MgLSAxKTsgXHJcbiAgfSBcclxuICBlbHNlIGlmICgvXFwoLy50ZXN0KGFycltjdXJQb3MgLSAxXSkpIHtcclxuICAgIGlucHV0XHJcbiAgICAgIC5lbGVtZW50XHJcbiAgICAgIC5zZXRTZWxlY3Rpb25SYW5nZShjdXJQb3MsIGN1clBvcyk7IFxyXG4gIH0gXHJcbiAgZWxzZSBpZiAoL1xcKS8udGVzdChhcnJbY3VyUG9zXSkpIHtcclxuICAgIGlucHV0XHJcbiAgICAgIC5lbGVtZW50XHJcbiAgICAgIC5zZXRTZWxlY3Rpb25SYW5nZShjdXJQb3MgKyAxLCBjdXJQb3MgKyAxKTsgXHJcbiAgfSBcclxufSIsImltcG9ydCB7IElucHV0IH0gZnJvbSBcIi4uL2lucHV0L2NsYXNzZXMvaW5wdXRcIlxyXG5cclxuZXhwb3J0IGNvbnN0IG1vdmVGb3J3YXJkID0gKFxyXG4gIGFycjogc3RyaW5nW10sXHJcbiAgY3VyUG9zOiBudW1iZXIsXHJcbiAgaW5wdXQ6IElucHV0XHJcbikgPT4ge1xyXG4gIGlmICghL18vLnRlc3QoYXJyW2N1clBvc10pKSB7XHJcbiAgICBpbnB1dFxyXG4gICAgICAuZWxlbWVudCAgXHJcbiAgICAgIC5zZXRTZWxlY3Rpb25SYW5nZShhcnIuaW5kZXhPZihcIl9cIiksIGFyci5pbmRleE9mKFwiX1wiKSlcclxuICB9XHJcbn0iLCJleHBvcnQgY29uc3QgcmVwZWF0U3RyaW5nID0gKHN0cjogc3RyaW5nLCB0aW1lczogbnVtYmVyKSA9PiB7XHJcbiAgbGV0IHJlcGVhdGVkID0gXCJcIjtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aW1lczsgaSsrKSB7XHJcbiAgICByZXBlYXRlZCArPSBzdHI7XHJcbiAgfVxyXG4gIFxyXG4gIHJldHVybiByZXBlYXRlZFxyXG59IiwiZXhwb3J0IGNvbnN0IHR5cGluZyA9IChcclxuICBhcnI6IHN0cmluZ1tdLFxyXG4gIGN1clBvczogbnVtYmVyLFxyXG4gIGNoYXI6IHN0cmluZ1xyXG4pID0+IHtcclxuICBpZiAoL1xcK3xcXGR8Xy8udGVzdChhcnJbY3VyUG9zXSkgJiYgWzAsIDFdLmluZGV4T2YoY3VyUG9zKSA9PT0gLTEpIHtcclxuICAgIFxyXG4gICAgaWYgKGNoYXIpIHsgXHJcbiAgICAgIGlmICgvXFxkLy50ZXN0KGNoYXIpICYmIGN1clBvcyA9PT0gYXJyLmluZGV4T2YoXCJfXCIpKSB7IHJldHVybiBjaGFyIH1cclxuICAgICAgZWxzZSB7IHJldHVybiBhcnJbY3VyUG9zXSB9XHJcbiAgICB9IFxyXG4gICAgZWxzZSB7IHJldHVybiBcIl9cIiB9XHJcbiAgfSBcclxuICBlbHNlIHsgcmV0dXJuIGFycltjdXJQb3NdIH1cclxufSIsImV4cG9ydCBjbGFzcyBBcnJheSB7XHJcbiAgdmFsdWU6IHN0cmluZ1tdO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMudmFsdWUgPSBbXVxyXG4gIH1cclxuXHJcbiAgZGVmaW5lKGFycmF5KSB7XHJcbiAgICB0aGlzLnZhbHVlID0gYXJyYXlcclxuICB9XHJcbiAgc3RyaW5nKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudmFsdWUudG9TdHJpbmcoKS5yZXBsYWNlKC8sL2csIFwiXCIpXHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgY2FyZXRQb3NpdGlvbiB9IGZyb20gXCIuLi8uLi9mdW5jdGlvbnMvY2FyZXRQb3NpdGlvblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIElucHV0IHtcclxuICBlbGVtZW50OiBIVE1MSW5wdXRFbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGhvbmVJbnB1dFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50XHJcbiAgfVxyXG5cclxuICBkZWZhdWx0ICh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmVsZW1lbnQuZGVmYXVsdFZhbHVlID0gdmFsdWVcclxuICB9XHJcbiAgdmFsdWUgKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuZWxlbWVudC52YWx1ZSA9IHZhbHVlXHJcbiAgfVxyXG5cclxuICBhcnJheSgpIHtcclxuICAgIHJldHVybiB0aGlzLmVsZW1lbnQudmFsdWUuc3BsaXQoXCJcIilcclxuICB9XHJcbiAgZGlnaXRzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudC52YWx1ZS5tYXRjaCgvXFxkL2cpPy50b1N0cmluZygpLnJlcGxhY2UoLywvZywgXCJcIik7XHJcbiAgfVxyXG5cclxuICBwb3NpdGlvbigpIHtcclxuICAgIHJldHVybiBjYXJldFBvc2l0aW9uKHRoaXMuZWxlbWVudCk7XHJcbiAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIFNlbGVjdGlvbiB7XHJcbiAgc3RhdGU6IHtcclxuICAgIHNlbGVjdFN0YXJ0OiBudW1iZXI7XHJcbiAgICBzZWxlY3RFbmQ6IG51bWJlcjtcclxuICAgIHNlbGVjdGVkOiBzdHJpbmc7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHNlbGVjdFN0YXJ0OiBudWxsLFxyXG4gICAgICBzZWxlY3RFbmQ6IG51bGwsXHJcbiAgICAgIHNlbGVjdGVkOiBcIlwiXHJcbiAgICB9XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiLi4vLi4vY2xhc3Nlcy9pbnB1dFwiO1xyXG5pbXBvcnQgeyBBcnJheSB9IGZyb20gXCIuLi8uLi9jbGFzc2VzL2FycmF5XCI7XHJcbmltcG9ydCB7IFNlbGVjdGlvbiB9IGZyb20gXCIuLi8uLi9jbGFzc2VzL3NlbGVjdGlvblwiO1xyXG5pbXBvcnQgeyBpZlNlbGVjdGVkIH0gZnJvbSBcIi4vc2VsZWN0ZWRcIjtcclxuaW1wb3J0IHsgaWZOb3RTZWxlY3RlZCB9IGZyb20gXCIuL25vdFNlbGVjdGVkXCI7XHJcblxyXG5leHBvcnQgY29uc3QgaW5wdXRFdmVudCA9IChcclxuICBlOiBFdmVudCxcclxuICBpbnB1dDogSW5wdXQsXHJcbiAgYXJyYXk6IEFycmF5LFxyXG4gIHNlbGVjdGlvbjogU2VsZWN0aW9uXHJcbikgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgY29uc3QgZGlnaXRzID0gaW5wdXQuZGlnaXRzKCk7XHJcblxyXG4gIGNvbnN0IHNlbGVjdFN0YXJ0ID0gc2VsZWN0aW9uLnN0YXRlLnNlbGVjdFN0YXJ0O1xyXG4gIGNvbnN0IHNlbGVjdGVkID0gc2VsZWN0aW9uLnN0YXRlLnNlbGVjdGVkO1xyXG5cclxuICBpZiAoZGlnaXRzPy5sZW5ndGggPj0gMTIpIHtcclxuICAgIGlucHV0LnZhbHVlKGFycmF5LnN0cmluZygpKTtcclxuICB9XHJcbiAgZWxzZSBpZiAoZGlnaXRzPy5sZW5ndGggIT09IDEyKSB7XHJcbiAgICBpZiAoc2VsZWN0ZWQpIHtcclxuICAgICAgaWZTZWxlY3RlZChpbnB1dCwgYXJyYXksIHNlbGVjdGlvbiwgc2VsZWN0U3RhcnQsIHNlbGVjdGVkKVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoIXNlbGVjdGVkKSB7XHJcbiAgICAgIGlmTm90U2VsZWN0ZWQoZSwgaW5wdXQsIGFycmF5KVxyXG4gICAgfVxyXG4gIH1cclxufSIsImltcG9ydCB7IG1vdmVCYWNrd2FyZHMgfSBmcm9tIFwiLi4vLi4vLi4vZnVuY3Rpb25zL21vdmVCYWNrd2FyZHNcIjtcclxuaW1wb3J0IHsgdHlwaW5nIH0gZnJvbSBcIi4uLy4uLy4uL2Z1bmN0aW9ucy90eXBpbmdcIjtcclxuaW1wb3J0IHsgQXJyYXkgfSBmcm9tIFwiLi4vLi4vY2xhc3Nlcy9hcnJheVwiO1xyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCIuLi8uLi9jbGFzc2VzL2lucHV0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgaWZOb3RTZWxlY3RlZCA9IChcclxuICBlOiBFdmVudCxcclxuICBpbnB1dDogSW5wdXQsXHJcbiAgYXJyYXk6IEFycmF5XHJcbikgPT4ge1xyXG4gIGNvbnN0IGNoYXIgPSBlIGluc3RhbmNlb2YgSW5wdXRFdmVudCAmJiBlLmRhdGE7XHJcbiAgY29uc3QgY3VyUG9zID0gY2hhciA/IGlucHV0LnBvc2l0aW9uKCkgLSAxIDogaW5wdXQucG9zaXRpb24oKTtcclxuXHJcbiAgYXJyYXkudmFsdWUuc3BsaWNlKGN1clBvcywgMSwgdHlwaW5nKGFycmF5LnZhbHVlLCBjdXJQb3MsIGNoYXIpKTtcclxuICBpbnB1dC52YWx1ZShhcnJheS5zdHJpbmcoKSk7XHJcblxyXG4gIGlmIChjaGFyKSB7XHJcbiAgICBpbnB1dFxyXG4gICAgICAuZWxlbWVudCAgXHJcbiAgICAgIC5zZXRTZWxlY3Rpb25SYW5nZShcclxuICAgICAgICBhcnJheS52YWx1ZS5pbmRleE9mKCdfJyksIGFycmF5LnZhbHVlLmluZGV4T2YoJ18nKVxyXG4gICAgICApO1xyXG4gIH1cclxuICBlbHNlIHsgbW92ZUJhY2t3YXJkcyhhcnJheS52YWx1ZSwgY3VyUG9zLCBpbnB1dCkgfVxyXG59IiwiaW1wb3J0IHsgQXJyYXkgfSBmcm9tIFwiLi4vLi4vY2xhc3Nlcy9hcnJheVwiO1xyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCIuLi8uLi9jbGFzc2VzL2lucHV0XCI7XHJcbmltcG9ydCB7IFNlbGVjdGlvbiB9IGZyb20gXCIuLi8uLi9jbGFzc2VzL3NlbGVjdGlvblwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGlmU2VsZWN0ZWQgPSAoXHJcbiAgaW5wdXQ6IElucHV0LFxyXG4gIGFycmF5OiBBcnJheSxcclxuICBzZWxlY3Rpb246IFNlbGVjdGlvbixcclxuICBzZWxlY3RTdGFydDogbnVtYmVyLFxyXG4gIHNlbGVjdGVkOiBzdHJpbmcsXHJcbikgPT4ge1xyXG4gIGlmIChzZWxlY3RlZC5tYXRjaCgvXlxcK1s3XS9nKSkge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRDdXQgPSBzZWxlY3RlZC5zdWJzdHJpbmcoMik7XHJcbiAgICBjb25zdCBhcnJDdXQgPSBhcnJheS52YWx1ZS5zcGxpY2UoMik7XHJcblxyXG4gICAgc2VsZWN0ZWRDdXQuc3BsaXQoXCJcIikuZm9yRWFjaCgoY2hhciwgaWR4KSA9PiB7XHJcbiAgICAgIGlmICgvXFxkLy50ZXN0KGNoYXIpKSB7XHJcbiAgICAgICAgYXJyQ3V0LnNwbGljZShzZWxlY3RTdGFydCArIGlkeCwgMSwgJ18nKVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKCEvXFxkLy50ZXN0KGNoYXIpKSB7XHJcbiAgICAgICAgYXJyQ3V0LnNwbGljZShzZWxlY3RTdGFydCArIGlkeCwgMSwgYXJyQ3V0W3NlbGVjdFN0YXJ0ICsgaWR4XSlcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgYXJyYXkudmFsdWUgPSBhcnJheS52YWx1ZS5jb25jYXQoYXJyQ3V0KTtcclxuICAgIGlucHV0LnZhbHVlKGFycmF5LnN0cmluZygpKTtcclxuICBcclxuICAgIHNlbGVjdGlvbi5zdGF0ZS5zZWxlY3RlZCA9IFwiXCI7XHJcbiAgfVxyXG4gIGVsc2UgeyBcclxuICAgIHNlbGVjdGVkLnNwbGl0KFwiXCIpLmZvckVhY2goKGNoYXIsIGlkeCkgPT4ge1xyXG4gICAgICBpZiAoL1xcZC8udGVzdChjaGFyKSkge1xyXG4gICAgICAgIGFycmF5LnZhbHVlLnNwbGljZShzZWxlY3RTdGFydCArIGlkeCwgMSwgJ18nKVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKCEvXFxkLy50ZXN0KGNoYXIpKSB7XHJcbiAgICAgICAgYXJyYXkudmFsdWUuc3BsaWNlKFxyXG4gICAgICAgICAgc2VsZWN0U3RhcnQgKyBpZHgsIDEsIGFycmF5LnZhbHVlW3NlbGVjdFN0YXJ0ICsgaWR4XVxyXG4gICAgICAgIClcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaW5wdXQudmFsdWUoYXJyYXkuc3RyaW5nKCkpO1xyXG4gICAgc2VsZWN0aW9uLnN0YXRlLnNlbGVjdGVkID0gXCJcIjtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBtb3ZlRm9yd2FyZCB9IGZyb20gXCIuLi8uLi9mdW5jdGlvbnMvbW92ZUZvcndhcmRcIjtcclxuaW1wb3J0IHsgQXJyYXkgfSBmcm9tIFwiLi4vY2xhc3Nlcy9hcnJheVwiO1xyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCIuLi9jbGFzc2VzL2lucHV0XCI7XHJcblxyXG5leHBvcnQgY29uc3Qga2V5RG93bkV2ZW50ID0gKFxyXG4gIGU6IEtleWJvYXJkRXZlbnQsXHJcbiAgaW5wdXQ6IElucHV0LFxyXG4gIGFycmF5OiBBcnJheVxyXG4pID0+IHtcclxuICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICBjb25zdCBjdXJQb3MgPSBpbnB1dC5wb3NpdGlvbigpO1xyXG4gIGNvbnN0IG5vdFR5cGluZ0tleXMgPSBbJ0JhY2tzcGFjZScsICdBcnJvd0xlZnQnLCAnQXJyb3dSaWdodCddO1xyXG4gIFxyXG4gIGlmIChub3RUeXBpbmdLZXlzLmluZGV4T2YoZS5rZXkpID09PSAtMSAmJiBhcnJheS52YWx1ZVtjdXJQb3NdKSB7XHJcbiAgICBtb3ZlRm9yd2FyZChhcnJheS52YWx1ZSwgY3VyUG9zLCBpbnB1dClcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBBcnJheSB9IGZyb20gXCIuLi9jbGFzc2VzL2FycmF5XCI7XHJcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIi4uL2NsYXNzZXMvaW5wdXRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBwYXN0ZUV2ZW50ID0gKFxyXG4gIGU6IENsaXBib2FyZEV2ZW50LFxyXG4gIGlucHV0OiBJbnB1dCxcclxuICBhcnJheTogQXJyYXlcclxuKSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICBjb25zdCBjbGlwYm9hcmREYXRhID0gZS5jbGlwYm9hcmREYXRhO1xyXG4gIGNvbnN0IHBhc3RlZCA9IGNsaXBib2FyZERhdGE/LmdldERhdGEoJ1RleHQnKTtcclxuICBjb25zdCBwYXN0ZWREaWdpdHNBcnIgPSBwYXN0ZWQubWF0Y2goL1xcZC9nKTtcclxuXHJcbiAgcGFzdGVkRGlnaXRzQXJyPy5zcGxpY2UoXHJcbiAgICBhcnJheVxyXG4gICAgICAudmFsdWVcclxuICAgICAgLmZpbHRlcih4ID0+IHggPT09ICdfJykubGVuZ3RoXHJcbiAgKTtcclxuXHJcbiAgcGFzdGVkRGlnaXRzQXJyPy5mb3JFYWNoKGNoYXIgPT4ge1xyXG4gICAgYXJyYXlcclxuICAgICAgLnZhbHVlXHJcbiAgICAgIC5zcGxpY2UoYXJyYXkudmFsdWUuaW5kZXhPZignXycpLCAxLCBjaGFyKVxyXG4gIH0pO1xyXG5cclxuICBpbnB1dFxyXG4gICAgLnZhbHVlKGFycmF5LnN0cmluZygpKTtcclxuICBpbnB1dFxyXG4gICAgLmVsZW1lbnRcclxuICAgIC5zZXRTZWxlY3Rpb25SYW5nZShcclxuICAgICAgYXJyYXkudmFsdWUuaW5kZXhPZignXycpLCBcclxuICAgICAgYXJyYXkudmFsdWUuaW5kZXhPZignXycpXHJcbiAgICApO1xyXG59IiwiaW1wb3J0IHsgU2VsZWN0SW50IH0gZnJvbSBcIi4uLy4uL3R5cGVzL3NlbGVjdGlvblwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlbGVjdEV2ZW50ID0gKFxyXG4gIGU6IEV2ZW50LFxyXG4gIHNlbGVjdGlvbjogU2VsZWN0SW50XHJcbikgPT4ge1xyXG4gIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgY29uc3QgdmFsdWUgPSB0YXJnZXQudmFsdWU7XHJcblxyXG4gIHNlbGVjdGlvbi5zdGF0ZSA9IHtcclxuICAgIHNlbGVjdFN0YXJ0OiB0YXJnZXQuc2VsZWN0aW9uU3RhcnQsXHJcbiAgICBzZWxlY3RFbmQ6IHRhcmdldC5zZWxlY3Rpb25FbmQsXHJcbiAgICBzZWxlY3RlZDogdmFsdWUuc3Vic3RyaW5nKHRhcmdldC5zZWxlY3Rpb25TdGFydCwgdGFyZ2V0LnNlbGVjdGlvbkVuZClcclxuICB9XHJcblxyXG4gIGNvbnNvbGUubG9nKHNlbGVjdGlvbi5zdGF0ZSlcclxufSIsImltcG9ydCB7IElucHV0IH0gZnJvbSBcIi4vY2xhc3Nlcy9pbnB1dFwiO1xyXG5pbXBvcnQgeyBTZWxlY3Rpb24gfSBmcm9tIFwiLi9jbGFzc2VzL3NlbGVjdGlvblwiO1xyXG5pbXBvcnQgeyBmb3JtYXRQaG9uZSB9IGZyb20gXCIuLi9mdW5jdGlvbnMvZm9ybWF0UGhvbmVcIjtcclxuaW1wb3J0IHsgc2VsZWN0RXZlbnQgfSBmcm9tIFwiLi9ldmVudHMvc2VsZWN0XCI7XHJcbmltcG9ydCB7IHBhc3RlRXZlbnQgfSBmcm9tIFwiLi9ldmVudHMvcGFzdGVcIjtcclxuaW1wb3J0IHsga2V5RG93bkV2ZW50IH0gZnJvbSBcIi4vZXZlbnRzL2tleURvd25cIjtcclxuaW1wb3J0IHsgaW5wdXRFdmVudCB9IGZyb20gXCIuL2V2ZW50cy9pbnB1dFwiO1xyXG5pbXBvcnQgeyBBcnJheSB9IGZyb20gXCIuL2NsYXNzZXMvYXJyYXlcIjtcclxuXHJcblxyXG5leHBvcnQgY29uc3Qgc3VwZXJNYXNrID0gKCkgPT4ge1xyXG4gIGNvbnN0IGlucHV0ID0gbmV3IElucHV0O1xyXG4gIGNvbnN0IGFycmF5ID0gbmV3IEFycmF5O1xyXG4gIGNvbnN0IHNlbGVjdGlvbiA9IG5ldyBTZWxlY3Rpb247XHJcblxyXG4gIGlucHV0XHJcbiAgICAuZGVmYXVsdChmb3JtYXRQaG9uZSgpKTtcclxuICBhcnJheVxyXG4gICAgLmRlZmluZShpbnB1dC5hcnJheSgpKTtcclxuICBcclxuICBpbnB1dFxyXG4gICAgLmVsZW1lbnRcclxuICAgIC5hZGRFdmVudExpc3RlbmVyKFwic2VsZWN0XCIsIChlKSA9PiBzZWxlY3RFdmVudChlLCBzZWxlY3Rpb24pKTtcclxuICBcclxuICBpbnB1dFxyXG4gICAgLmVsZW1lbnRcclxuICAgIC5hZGRFdmVudExpc3RlbmVyKFwicGFzdGVcIiwgKGUpID0+IHBhc3RlRXZlbnQoZSwgaW5wdXQsIGFycmF5KSk7XHJcblxyXG4gIGlucHV0XHJcbiAgICAuZWxlbWVudFxyXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiBrZXlEb3duRXZlbnQoZSwgaW5wdXQsIGFycmF5KSk7XHJcblxyXG4gIGlucHV0XHJcbiAgICAuZWxlbWVudFxyXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4gaW5wdXRFdmVudChlLCBpbnB1dCwgYXJyYXksIHNlbGVjdGlvbikpO1xyXG59Il19
