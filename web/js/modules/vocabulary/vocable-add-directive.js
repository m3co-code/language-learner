import angular from 'angular';
import BaseDirective from 'components/utils/directive/base-directive';
import template from 'html!./vocable-add-template.html';

export default class VocableAddDirective extends BaseDirective {
    constructor() {
        super({
            template,
            controller: VocableAddDirectiveController
        });
    }
}

class VocableAddDirectiveController {
    constructor(VocabularyService, $scope) {
        'ngInject';

        this.VocabularyService = VocabularyService;

        this.defaultData = {
            sourceLanguage: 'RUS',
            targetLanguage: 'DEU'
        };

        this.form = {
            data: angular.copy(this.defaultData)
        };

        this.$scope = $scope;
    }

    add() {
        this.VocabularyService.add(this.form.data).then((response) => {
            this.$scope.$emit('vocable.added', response.id);
            this.form.data = angular.copy(this.defaultData);
        });
    }
}
