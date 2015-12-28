import BaseDirective from 'components/utils/directive/base-directive';
import template from 'html!./dashboard-template.html';

export default class DashboardDirective extends BaseDirective {
    constructor() {
        super({
            template,
            controller: DashboardDirectiveController
        });
    }
}

class DashboardDirectiveController {
    constructor() {
        'ngInject';
    }
}
