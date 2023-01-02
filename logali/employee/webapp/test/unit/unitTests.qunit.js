/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"dff_space_Emp/employee/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
