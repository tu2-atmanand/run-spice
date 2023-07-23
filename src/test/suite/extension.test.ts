import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';
// import * as myExtension from '../../extension';

suite('Extension Test Suite', async function () {

	async function sleep(ms: number) {
		return new Promise((resolve) => {
		  	setTimeout(resolve, ms);
		});
	}
	
	await sleep(5000);

	vscode.window.showInformationMessage('Start all tests.');
	fs.writeFileSync(file('test.cir'), 'hello', 'utf8');

	function file(relativePath: string) {
		const cwd = fs.realpathSync(vscode.workspace.workspaceFolders![0].uri.fsPath);
		return path.join(cwd, relativePath);
	}

	function uri(relativePath: string) {
		return vscode.Uri.file(file(relativePath));
	}
	
	async function open(relativePath: string) {
		const doc = await vscode.workspace.openTextDocument(uri(relativePath));
		await vscode.window.showTextDocument(doc);
		return doc;
	}

	test('run spice command', async function () {

		await sleep(5000);

		const appjs = await open('test.cir');
		
		const config = vscode.workspace.getConfiguration('run-spice');
		config.update('path', 'C:\\Tools\\Spice64\\bin\\ngspice.exe');   // TODO: Hardcoded path

		await vscode.commands.executeCommand('run-spice.run');

		await sleep(500000);

	});
	
	await sleep(500000);
});

