export default class BaseDirective {
    constructor(
        {
            template = '',
            controller = false,
            restrict = 'E',
            scope = {},
            transclude = false,
            compile = false,
            bindToController = true,
            require = false
        }
    ) {
        this.restrict = restrict;
        this.scope = scope;
        this.template = template;
        this.transclude = transclude;

        if (controller) {
            this.setController(controller, bindToController);
        }

        if (require) {
            this.require = require;
        }

        if (compile) {
            this.compile = compile;
        }
    }

    setController(controller, bindToController) {
        this.controller = controller;
        this.bindToController = bindToController;
        this.controllerAs = 'vm';
    }
}
