import generate from 'babel-generator';
import debug from 'debug';
import {pureBabylon as pure} from 'side-effects-safe';

const info = debug('remove-pure-exps');


/**
 * Removes pure expression statements.
 */
export default () => ({
    visitor: {
        ExpressionStatement(path) {
            if (pure(path.node.expression)) {
                info(`Removing: ${source(path)}`);
                path.remove();
            }
        }
    }
});


/**
 * Original or generated code (source for a transformed path may not be
 * available).
 */
function source(path) {
    return path.getSource() || generate(path.node).code;
}
