import BaseDirective from 'components/utils/directive/base-directive';
import template from 'html!./multi-language-input-template.html';

export default class MultiLanguageInputDirective extends BaseDirective {
    constructor() {
        super({
            template
        });
    }
}
