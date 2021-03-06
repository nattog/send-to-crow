import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
import * as extension from '../../extension';

suite('Extension Test Suite', () => {
	vscode.window.showInformationMessage('Start all tests.');

	test('Key bindings toggles correctly', () => {
		const command = extension.createToggleKeybindingCommand();
		assert.strictEqual(false, extension.isKeyBindingActive);
		command();
		assert.strictEqual(true, extension.isKeyBindingActive);
		command();
		assert.strictEqual(false, extension.isKeyBindingActive);
	});
});
