import * as vscode from 'vscode';

import { MainViewProvider } from './MainViewProvider';

export async function activate(context: vscode.ExtensionContext) {

	const mainViewProvider = new MainViewProvider(context.extensionUri);

	context.subscriptions.push(
		vscode.window.registerWebviewViewProvider(
			'conceptualtask-main',
			mainViewProvider
		)
	);

	context.subscriptions.push(
		vscode.commands.registerCommand('conceptualtasks.helloWorld', () => {
			vscode.window.showInformationMessage('Hello World from ConceptualTasks!');
		})
	);


}

export function deactivate() { }
