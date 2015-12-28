export default function routingConfig($stateProvider, $locationProvider, $urlRouterProvider) {
    'ngInject';

    $stateProvider
        .state('dashboard', {
            url: '/',
            template: '<dashboard></dashboard>'
        });

    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
}
