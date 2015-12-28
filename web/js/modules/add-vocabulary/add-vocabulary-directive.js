import BaseDirective from 'components/utils/directive/base-directive';
import template from 'html!./add-vocabulary-template.html';

export default class AddVocabularyDirective extends BaseDirective {
    constructor() {
        super({
            template,
            controller: AddVocabularyirectiveController
        });
    }
}

class AddVocabularyirectiveController {
    constructor(VocabularyService) {
        'ngInject';

        this.VocabularyService = VocabularyService;

        this.form = {
            data: {}
        };
    }

    add() {
        this.VocabularyService.add(this.form.data).then((response) => {
            debugger;
        }, (error) => {
            debugger;
        });
    }
}
