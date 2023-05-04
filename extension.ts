import * as vscode from 'vscode';
import * as child_process from 'child_process';

export function activate(context: vscode.ExtensionContext) {
    console.log('Extension "my-extension" is now active.');

    let disposable = vscode.commands.registerCommand('my-extension.runSpiceCode', () => {
        let editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage('No editor is active.');
            return;
        }
        let document = editor.document;
        if (document.languageId !== 'SPICE') {
            vscode.window.showErrorMessage('The active editor is not a SPICE file.');
            return;
        }
        let filePath = document.uri.fsPath;
        let command = `ngspice ${filePath}`;
        child_process.exec(command, (error, stdout, stderr) => {
            if (error) {
                vscode.window.showErrorMessage(`Failed to run SPICE code: \${error.message}`);
            } else {
                vscode.window.showInformationMessage('SPICE code executed successfully.');
            }
        });
    });

    context.subscriptions.push(disposable);

    let button = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
    button.text = '$(play) Run SPICE Code';
    button.tooltip = 'Run SPICE Code';
    button.command = 'my-extension.runSpiceCode';
    button.show();
}

export function deactivate() {}
