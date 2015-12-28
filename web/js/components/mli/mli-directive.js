import BaseDirective from 'components/utils/directive/base-directive';

export default class MLIDirective extends BaseDirective {
    constructor() {
        super({
            controller: MLIDirectiveController,
            restrict: 'A'
        });
    }
}

class MLIDirectiveController {
    constructor($element) {
        'ngInject';

        this.$element = $element;
        this.originalInput = '';
        this.shownInput = '';
        this.germanToRussianMapping = {
            'tsch': 'ч',
            'schz': 'щ',
            'sch': 'ш',
            'bbb': 'ь',
            'sz': 'з',
            'ja': 'я',
            'ch': 'ж',
            'ju': 'ь',
            'ä': 'э',
            'a': 'а',
            'b': 'ъ',
            'd': 'д',
            'e': 'е',
            'f': 'ф',
            'g': 'г',
            'h': 'х',
            'j': 'й',
            'k': 'к',
            'l': 'л',
            'n': 'н',
            'o': 'о',
            'p': 'п',
            'r': 'р',
            'u': 'у',
            's': 'с',
            'w': 'в',
            'y': 'ы',
            'z': 'ц',
            'm': 'м',
            'i': 'и',
            't': 'т'
        };

        $element.on('keyup', this.onInputReceived.bind(this));
    }

    onInputReceived() {
        const difference = this.getStringDifference(this.shownInput, this.$element.val());

        if (difference.equal) {
            return;
        }

        if (difference.added) {
            this.originalInput += difference.added;
        } else {
            this.originalInput = this.translateByValue(this.$element.val());
        }

        this.shownInput = this.translateByKey(this.originalInput);

        this.$element.val(this.shownInput);
    }

    getStringDifference(source, target) {
        switch (true) {
            case source.length > target.length:
                return {
                    equal: false,
                    removed: source.slice(target.length - source.length)
                };
            case source.length < target.length:
                return {
                    equal: false,
                    added: target.slice(source.length - target.length)
                };
            default:
                return {
                    equal: true
                };
        }
    }

    translateByKey(input, result = '') {
        const match = this.matchByKey(input) || { key: input.slice(0, 1), val: input.slice(0, 1) };

        if (input.length === match.key.length) {
            return result + match.val;
        }

        return this.translateByKey(input.slice(match.key.length), result + match.val);
    }

    matchByKey(inputString) {
        for (const key in this.germanToRussianMapping) {
            if (this.germanToRussianMapping.hasOwnProperty(key) && inputString.slice(0, key.length) === key) {
                return {
                    key,
                    val: this.germanToRussianMapping[key]
                };
            }
        }
    }

    translateByValue(input, result = '') {
        const match = this.matchByValue(input) || { key: input.slice(0, 1), val: input.slice(0, 1) };

        if (input.length === match.key.length) {
            return result + match.val;
        }

        return this.translateByValue(input.slice(match.key.length), result + match.val);
    }

    matchByValue(inputString) {
        for (const key in this.germanToRussianMapping) {
            if (this.germanToRussianMapping.hasOwnProperty(key) &&
                inputString.slice(0, 1) === this.germanToRussianMapping[key]) {
                return {
                    key,
                    val: this.germanToRussianMapping[key]
                };
            }
        }
    }
}
