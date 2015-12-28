import angular from 'angular';
import MLIDirective from './mli-directive';

export default angular.module('LanguageLearner.MLIModule', [])
    .directive('mli', () => new MLIDirective())
    .name;
