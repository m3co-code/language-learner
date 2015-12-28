import angular from 'angular';
import uirouter from 'angular-ui-router';

import routingConfig from 'routing-config';

import multiLanguageInputComponent from 'components/multi-language-input';
import utilsComponent from 'components/utils';
import VocabularyComponent from 'components/vocabulary';

import dashboardModule from 'modules/dashboard';
import AddVocabularyModule from 'modules/add-vocabulary';


import '../scss/main.scss';

angular
    .module('LanguageLearner', [
        uirouter,
        multiLanguageInputComponent,
        utilsComponent,
        VocabularyComponent,
        dashboardModule,
        AddVocabularyModule
    ])
    .config(routingConfig);
