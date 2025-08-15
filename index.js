#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function copyRecursiveSync(src, dest) {
    const exists = fs.existsSync(src);
    const stats = exists && fs.statSync(src);
    const isDirectory = exists && stats.isDirectory();
    if (isDirectory) {
        if (!fs.existsSync(dest)) fs.mkdirSync(dest);
        fs.readdirSync(src).forEach((childItemName) => {
            copyRecursiveSync(path.join(src, childItemName),
                path.join(dest, childItemName));
        });
    } else {
        fs.copyFileSync(src, dest);
    }
}


const readline = require('readline');
const templateDir = path.join(__dirname, 'template');

function askProjectName(defaultName, callback) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question(`Enter your portfolio project name [${defaultName}]: `, (answer) => {
        rl.close();
        callback(answer.trim() || defaultName);
    });
}

function createPortfolio(targetDir) {
    if (fs.existsSync(targetDir)) {
        console.error(`A folder named '${targetDir}' already exists. Please choose a different project name.`);
        process.exit(1);
    }
    console.log(`\nCreating your portfolio in '${targetDir}'...`);
    copyRecursiveSync(templateDir, targetDir);
    console.log('Installing dependencies for your portfolio...');
    execSync('npm install', { cwd: targetDir, stdio: 'inherit' });
    console.log('\nPortfolio setup complete!');
    console.log(`\nNext steps:\n  cd ${targetDir}\n  npm run dev`);
}

if (process.argv[2]) {
    createPortfolio(process.argv[2]);
} else {
    askProjectName('neo-portfolio', createPortfolio);
}
