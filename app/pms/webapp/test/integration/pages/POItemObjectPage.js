sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'pms',
            componentId: 'POItemObjectPage',
            contextPath: '/PurchaseOrder/Items'
        },
        CustomPageDefinitions
    );
});