'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _babelGenerator = require('babel-generator');

var _babelGenerator2 = _interopRequireDefault(_babelGenerator);

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

var _sideEffectsSafe = require('side-effects-safe');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var info = (0, _debug2.default)('remove-pure-exps');

/**
 * Removes pure expression statements.
 */

exports.default = function () {
    return {
        visitor: {
            ExpressionStatement: function ExpressionStatement(path) {
                if ((0, _sideEffectsSafe.pureBabylon)(path.node.expression)) {
                    info('Removing: ' + source(path));
                    path.remove();
                }
            }
        }
    };
};

/**
 * Original or generated code (source for a transformed path may not be
 * available).
 */


function source(path) {
    return path.getSource() || (0, _babelGenerator2.default)(path.node).code;
}
