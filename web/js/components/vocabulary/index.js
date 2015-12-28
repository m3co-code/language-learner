import angular from 'angular';
import VocabularyService from './vocabulary-service';

export default angular.module('LanguageLearner.VocabularyComponent', [])
    .service('VocabularyService', VocabularyService)
    .name;
