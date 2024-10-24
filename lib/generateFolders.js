const fs = require('fs-extra');
const path = require('path');

// Function to create the required folder structure
async function generateStructure() {
    console.log("Generating file structure...");

    const projectDir = process.cwd();  // Current working directory

    // Define the new folders and subfolders
    const folders = [
        'public/temp',
        'src/configs',
        'src/constants',
        'src/controllers',
        'src/docs',
        'src/jobs',
        'src/loaders',
        'src/middlewares',
        'src/models',
        'src/routes',
        'src/services',
        'src/utils',
        'src/validators'
    ];

    // Define the initial files to be created
    const files = {
        [path.join(projectDir, 'src', 'configs', 'db.config.js')]: `// Database configuration`,
        [path.join(projectDir, 'src', 'configs', 'index.js')]: `// Configs index file`,
        [path.join(projectDir, 'src', 'constants', 'dbName.js')]: `// Define your DB names`,
        [path.join(projectDir, 'src', 'constants', 'index.js')]: `// Constants index file`,
        [path.join(projectDir, 'src', 'controllers', 'user.controller.js')]: `// User controller`,
        [path.join(projectDir, 'src', 'controllers', 'index.js')]: `// Controllers index file`,
        [path.join(projectDir, 'src', 'docs', 'swagger.docs.js')]: `// Swagger docs`,
        [path.join(projectDir, 'src', 'docs', 'index.js')]: `// Docs index file`,
        [path.join(projectDir, 'src', 'jobs', 'cron.jobs.js')]: `// Cron jobs`,
        [path.join(projectDir, 'src', 'jobs', 'index.js')]: `// Jobs index file`,
        [path.join(projectDir, 'src', 'loaders', 'config.loader.js')]: `// Config loader`,
        [path.join(projectDir, 'src', 'loaders', 'index.js')]: `// Loaders index file`,
        [path.join(projectDir, 'src', 'middlewares', 'auth.middleware.js')]: `// Authentication middleware`,
        [path.join(projectDir, 'src', 'middlewares', 'multer.middleware.js')]: `// Multer middleware`,
        [path.join(projectDir, 'src', 'middlewares', 'index.js')]: `// Middlewares index file`,
        [path.join(projectDir, 'src', 'models', 'user.model.js')]: `// User model`,
        [path.join(projectDir, 'src', 'models', 'seeders.js')]: `// Data seeders`,
        [path.join(projectDir, 'src', 'models', 'index.js')]: `// Models index file`,
        [path.join(projectDir, 'src', 'routes', 'user.routes.js')]: `// User routes`,
        [path.join(projectDir, 'src', 'routes', 'index.js')]: `// Routes index file`,
        [path.join(projectDir, 'src', 'services', 'inventory.services.js')]: `// Inventory services`,
        [path.join(projectDir, 'src', 'services', 'stripe.services.js')]: `// Stripe services`,
        [path.join(projectDir, 'src', 'services', 'index.js')]: `// Services index file`,
        [path.join(projectDir, 'src', 'utils', 'ApiError.js')]: `class ApiError extends Error {}`,
        [path.join(projectDir, 'src', 'utils', 'ApiResponse.js')]: `class ApiResponse {}`,
        [path.join(projectDir, 'src', 'utils', 'asyncHandler.js')]: `const asyncHandler = fn => {}`,
        [path.join(projectDir, 'src', 'utils', 'generateToken.js')]: `const generateToken = userId => {}`,
        [path.join(projectDir, 'src', 'utils', 'index.js')]: `// Utils index file`,
        [path.join(projectDir, 'src', 'validators', 'user.validator.js')]: `// User input validation`,
        [path.join(projectDir, 'src', 'validators', 'index.js')]: `// Validators index file`,
        [path.join(projectDir, 'src', 'app.js')]: `// Main application entry point`,
        [path.join(projectDir, 'src', 'index.js')]: `// Application start file`,
        [path.join(projectDir, '.env.sample')]: `# Environment variables sample`,
        [path.join(projectDir, '.gitignore')]: `node_modules\n.env`
    };

    // Create the directories
    for (let folder of folders) {
        await fs.ensureDir(path.join(projectDir, folder));
    }

    // Create the files
    for (let filePath in files) {
        await fs.outputFile(filePath, files[filePath]);
    }

    console.log('File structure created successfully!');
}

module.exports = { generateStructure };
