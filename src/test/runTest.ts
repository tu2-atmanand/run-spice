import * as path from 'path';
import * as cp from 'child_process';
import { downloadAndUnzipVSCode, resolveCliArgsFromVSCodeExecutablePath, runTests} from '@vscode/test-electron';

async function main() {
	try {
		// The folder containing the Extension Manifest package.json
		// Passed to `--extensionDevelopmentPath`
		const extensionDevelopmentPath = path.resolve(__dirname, '../../');

		// The path to test runner
		// Passed to --extensionTestsPath
		const extensionTestsPath = path.resolve(__dirname, './suite/index');

		// Download and install specified VSCode version
		const vscodeExecutablePath = await downloadAndUnzipVSCode('1.50.1');

		// Use cp.spawn / cp.exec for custom setup
		const [cliPath, ...args] = resolveCliArgsFromVSCodeExecutablePath(vscodeExecutablePath);
		cp.spawnSync(
			cliPath,
			[...args, '--install-extension', 'bzisjo.vscode-spice-support'],
			{
			  encoding: 'utf-8',
			  stdio: 'inherit'
			}
		);
		
		// Run the extension test
		await runTests({
			vscodeExecutablePath,
			extensionDevelopmentPath,
			extensionTestsPath
		});
		
	} catch (err) {
		console.error('Failed to run tests', err);
		process.exit(1);
	}
}

main();
