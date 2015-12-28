import angular from 'angular';
import DashboardDirective from './dashboard-directive';

export default angular.module('LanguageLearner.dashboardModule', [])
    .directive('dashboard', () => new DashboardDirective())
    .name;
