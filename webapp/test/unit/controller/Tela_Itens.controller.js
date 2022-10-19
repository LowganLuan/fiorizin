/*global QUnit*/

sap.ui.define([
	"fiorizin/controller/Tela_Itens.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Tela_Itens Controller");

	QUnit.test("I should test the Tela_Itens controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
