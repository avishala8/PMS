sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"pms/test/integration/pages/PurchaseOrderList",
	"pms/test/integration/pages/PurchaseOrderObjectPage",
	"pms/test/integration/pages/POItemObjectPage"
], function (JourneyRunner, PurchaseOrderList, PurchaseOrderObjectPage, POItemObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('pms') + '/test/flp.html#app-preview',
        pages: {
			onThePurchaseOrderList: PurchaseOrderList,
			onThePurchaseOrderObjectPage: PurchaseOrderObjectPage,
			onThePOItemObjectPage: POItemObjectPage
        },
        async: true
    });

    return runner;
});

