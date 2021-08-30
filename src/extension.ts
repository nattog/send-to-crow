import * as vscode from 'vscode';
import { executeSendCommand } from './send';

const host = 'localhost';
const port = 6666;

export let isKeyBindingActive = false;

export const activate = (context: vscode.ExtensionContext) => {
    registerCommand(context, "sendToCrow.launch", createDruidLaunchCommand());

	registerCommand(
		context,
		`sendToCrow.toggleKeybinding`,
		createToggleKeybindingCommand()
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

export const createToggleKeybindingCommand = () => {
	return () => {
		isKeyBindingActive = !isKeyBindingActive; 
		vscode.window.showInformationMessage(`Send To Crow - Keybinding ${isKeyBindingActive ? "active" : "inactive"}`);
		vscode.commands.executeCommand(
			"setContext",
			`sendToCrow:isActive`,
			isKeyBindingActive
		);
	};
};

export const createDruidLaunchCommand = () => {
    return () => {
        vscode.window.showInformationMessage(`Send To Crow - Launching Druid`);
        const term = vscode.window.createTerminal({name: "druid"});
        term.sendText("druid", true);
        vscode.commands.executeCommand("workbench.action.terminal.", {
            "text": ""
        });
        term.show();
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
        
        const terminator = "\n";
        const command = document.getText(range) + terminator;

        executeSendCommand({
            host,
            port,
            command
        });
    };
};

export const deactivate = () => {};


