import angular from 'angular';
import MultiLanguageInputDirective from './multi-language-input-directive';

export default angular.module('LanguageLearner.MultiLanguageInputModule', [])
    .directive('multiLanguageInput', () => new MultiLanguageInputDirective())
    .name;
