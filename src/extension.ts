import * as vscode from 'vscode';
import { executeSendCommand } from './send';

const host = 'localhost';
const port = 6666;

export let isKeyBindingsActive = false;

export const activate = (context: vscode.ExtensionContext) => {
	console.log("Send To Crow - activate");

	registerCommand(
		context,
		`sendToCrow.toggleActiveKeybindings`,
		createToggleActiveKeybindingsCommand()
	);

	registerCommand(
		context,
		`sendToCrow.sendSelection`,
		createSendSelectionCommand()
	);
};

const registerCommand = (
    context: vscode.ExtensionContext,
    name: string,
    command: (...args: any[]) => void
) => {
    let disposable = vscode.commands.registerCommand(name, command);
    context.subscriptions.push(disposable);
};

export const createToggleActiveKeybindingsCommand = () => {
	return () => {
		isKeyBindingsActive = !isKeyBindingsActive; 
		vscode.window.showInformationMessage(`Send To Crow - Keybindings ${isKeyBindingsActive ? "active" : "inactive"}`);
		vscode.commands.executeCommand(
			"setContext",
			`sendToCrow:isActive`,
			isKeyBindingsActive
		);
	};
};

const createSendSelectionCommand = () => {
    return () => {
        const { activeTextEditor } = vscode.window;
        if (!activeTextEditor) {
            return;
        }

        const { document, selection } = activeTextEditor;
        let range: vscode.Range;
        if (!selection.isEmpty) {
            range = selection;
        } else {
            const line = document.lineAt(selection.active.line);
            range = line.range;
        }
        const command = document.getText(range);

        executeSendCommand({
            host,
            port,
            command,
        });
    };
};

export const deactivate = () => {};


