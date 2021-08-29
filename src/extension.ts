// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { executeSendCommand } from './send';
import { info } from './util';


const host = 'localhost';
const port = 6666;


// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	info("activate");

	registerCommand(
		context,
		`sendToCrow.sendSelection`,
		createSendSelectionCommand()
	);
}

function registerCommand(
    context: vscode.ExtensionContext,
    name: string,
    command: (...args: any[]) => void
): void {
    let disposable = vscode.commands.registerCommand(name, command);
    context.subscriptions.push(disposable);
}

function createSendSelectionCommand(
): () => void {
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
}

// this method is called when your extension is deactivated
export function deactivate() {}


