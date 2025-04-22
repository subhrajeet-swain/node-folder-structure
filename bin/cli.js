#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');

// Get app name from command line arguments
const appName = process.argv[2] || '.';

// Function to get platform-specific npm command
function getNpmCommand() {
    return process.platform === 'win32' ? 'npm.cmd' : 'npm';
}

// Function to install dependencies with better cross-platform support
function installDependencies(projectPath) {
    return new Promise((resolve, reject) => {
        console.log("Installing required dependencies...");

        const npm = getNpmCommand();
        const installProcess = spawn(npm, ['install'], {
            stdio: 'inherit',
            shell: true,
            env: { ...process.env },
            windowsHide: true,
            cwd: projectPath
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
        // Now that dependencies are installed, we can require and use them
        const { generateStructure } = require("../lib/generateFolders");
        console.log("\nGenerating structure for a fresh Node.js project...");

        await generateStructure(appName);

        const projectPath = appName === '.' ? process.cwd() : path.join(process.cwd(), appName);
        await installDependencies(projectPath);

        console.log("\n✨ Project structure generated successfully!");
        console.log(`\n🎉 Created ${appName === '.' ? 'new Express app' : appName} at ${projectPath}`);
        console.log("\n👉 To get started:");
        if (appName !== '.') {
            console.log(`   cd ${appName}`);
        }
        console.log("   npm run dev");

    } catch (error) {
        console.error("\n❌ Error:", error.message);
        process.exit(1);
    }
}

init();
