import angular from 'angular';
import AddVocabularyDirective from './add-vocabulary-directive';

export default angular.module('LanguageLearner.AddVocabularyModule', [])
    .directive('addVocabulary', () => new AddVocabularyDirective())
    .name;
