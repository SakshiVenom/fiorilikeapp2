/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"at/tech/app/fioirilikeapp2/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});