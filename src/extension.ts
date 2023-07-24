// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as child_process from 'child_process';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "run-spice" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('run-spice.run', () => {
		// The code you place here will be executed every time your command is executed

		// Get active editor
		let editor = vscode.window.activeTextEditor;
		if (!editor) {
			vscode.window.showErrorMessage('No editor is active.');
			return;
		}

		// Get current document
		let document = editor.document;
		if (document.languageId.toUpperCase() !== 'SPICE') {
			vscode.window.showErrorMessage(`The active editor is not a SPICE file bat ${document.languageId}.`);
			return;
		}

		// Save document before spice execution
		document.save();

		// Get commande or path to the spice executable file.
		const config = vscode.workspace.getConfiguration('run-spice');
		const ngspicePath = config.get<string>("path", "ngspice");
		const command = `${ngspicePath} ${document.uri.fsPath}`;

		// Create a new terminal
		const terminal = vscode.window.createTerminal();
		terminal.show();

		// Run the command in the terminal
		terminal.sendText(command);

		// Run spice
		child_process.exec(command, (error, stdout, stderr) => {
			if (error) {
				vscode.window.showErrorMessage(`Failed to run SPICE code: ${error.message}`);
			} else {
				vscode.window.showInformationMessage('SPICE code executed successfully.');
			}
		});

	});

	context.subscriptions.push(disposable);

	// Create button on the status bar
	let button = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
	button.text = '$(play) Run SPICE Code';
	button.tooltip = 'Run SPICE Code';
	button.command = 'run-spice.run';
	button.show();
}

// This method is called when your extension is deactivated
export function deactivate() {}
