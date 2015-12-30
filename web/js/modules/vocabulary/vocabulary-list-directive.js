import BaseDirective from 'components/utils/directive/base-directive';
import template from 'html!./vocabulary-list-template.html';

export default class VocabularyListDirective extends BaseDirective {
    constructor() {
        super({
            template,
            controller: VocabularyListDirectiveController
        });
    }
}

class VocabularyListDirectiveController {
    constructor(VocabularyService, $rootScope) {
        'ngInject';

        this.VocabularyService = VocabularyService;
        this.$rootScope = $rootScope;

        this.loadList();

        this.$rootScope.$on('vocable.added', () => {
            this.loadList();
        });
    }

    loadList() {
        this.VocabularyService.getList().then((response) => {
            this.vocabulary = response.data;
        });
    }
}
