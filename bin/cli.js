#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');

// Function to get platform-specific npm command
function getNpmCommand() {
    return process.platform === 'win32' ? 'npm.cmd' : 'npm';
}

// Function to install dependencies with better cross-platform support
function installDependencies() {
    return new Promise((resolve, reject) => {
        console.log("Installing required dependencies...");

        const npm = getNpmCommand();
        const installProcess = spawn(npm, ['install', 'fs-extra'], {
            stdio: 'inherit',
            shell: true,
            env: { ...process.env },
            windowsHide: true,
            // Use path.resolve to ensure correct path handling across platforms
            cwd: path.resolve(__dirname, '..')
        });

        installProcess.on('error', (error) => {
            console.error('Failed to start npm install:', error);
            reject(error);
        });

        installProcess.on('close', (code) => {
            if (code !== 0) {
                reject(new Error(`npm install failed with code ${code}`));
                return;
            }
            resolve();
        });
    });
}

async function init() {
    try {
        await installDependencies();

        // Now that dependencies are installed, we can require and use them
        const { generateStructure } = require("../lib/generateFolders");
        console.log("\nGenerating structure for a fresh Node.js project...");
        await generateStructure();

        console.log("\n✨ Project structure generated successfully!");
        console.log("\n📦 To complete setup, run:");
        console.log(`\n   ${getNpmCommand()} install`);

    } catch (error) {
        console.error("\n❌ Error:", error.message);
        console.error("\nIf the error persists, try running:");
        console.log(`\n   ${getNpmCommand()} install -g fs-extra`);
        console.log("   npx node-folder-structure\n");
        process.exit(1);
    }
}

init();
