"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
const child_process = require("child_process");
function activate(context) {
    console.log('Extension "my-extension" is now active.');
    let disposable = vscode.commands.registerCommand('my-extension.runSpiceCode', () => {
        let editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage('No editor is active.');
            return;
        }
        let document = editor.document;
        if (document.languageId !== 'spice') {
            vscode.window.showErrorMessage('The active editor is not a SPICE file.');
            return;
        }
        let filePath = document.uri.fsPath;
        let command = `gnome-terminal -- ngspice -b \${filePath}`;
        child_process.exec(command, (error, stdout, stderr) => {
            if (error) {
                vscode.window.showErrorMessage(`Failed to run SPICE code: \${error.message}`);
            }
            else {
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
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map