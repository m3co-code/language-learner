import angular from 'angular';
import VocabularyListDirective from './vocabulary-list-directive';
import VocableAddDirective from './vocable-add-directive';

export default angular.module('LanguageLearner.VocabularyModule', [])
    .directive('vocabularyList', () => new VocabularyListDirective())
    .directive('vocableAdd', () => new VocableAddDirective())
    .name;
