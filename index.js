#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const readline = require('readline');

// Minimal progress bar
function progress(current, total, title) {
    const percent = Math.round((current / total) * 100);
    const filled = Math.round((current / total) * 20);
    const bar = '█'.repeat(filled) + '░'.repeat(20 - filled);
    process.stdout.write(`\r${title}: [${bar}] ${percent}%`);
    if (current >= total) console.log();
}

// Copy with progress
function copyDir(src, dest, callback) {
    if (!fs.existsSync(src)) return;
    const stats = fs.statSync(src);
    
    if (stats.isDirectory()) {
        if (!fs.existsSync(dest)) fs.mkdirSync(dest);
        fs.readdirSync(src).forEach(item => {
            copyDir(path.join(src, item), path.join(dest, item), callback);
        });
    } else {
        fs.copyFileSync(src, dest);
        callback && callback();
    }
}

// Count files
function countFiles(dir) {
    if (!fs.existsSync(dir)) return 0;
    let count = 0;
    fs.readdirSync(dir).forEach(item => {
        const fullPath = path.join(dir, item);
        count += fs.statSync(fullPath).isDirectory() ? countFiles(fullPath) : 1;
    });
    return count;
}

// Spinner
function spin(msg) {
    const frames = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
    let i = 0;
    const interval = setInterval(() => process.stdout.write(`\r${frames[i++ % frames.length]} ${msg}`), 80);
    return () => { clearInterval(interval); process.stdout.write(`\r✓ ${msg}\n`); };
}

// Main function
async function create(name) {
    const templateDir = path.join(__dirname, 'template');
    
    if (fs.existsSync(name)) {
        console.log(`❌ Directory '${name}' already exists!`);
        process.exit(1);
    }

    console.log(`\n📁 Creating ${name}...\n`);

    // Copy files
    const total = countFiles(templateDir);
    let current = 0;
    copyDir(templateDir, name, () => progress(++current, total, '📄 Copying'));
    
    console.log('✓ Files copied!\n');

    // Install dependencies
    const stopSpin = spin('📦 Installing packages...');
    try {
        execSync('npm install --silent', { cwd: name, stdio: 'pipe' });
        stopSpin();
    } catch (error) {
        stopSpin();
        console.log('❌ Install failed:', error.message);
        process.exit(1);
    }

    console.log(`\n🎉 Done!\n\nNext steps:\n  cd ${name}\n  npm run dev\n`);
}

// Entry point
if (process.argv[2]) {
    create(process.argv[2]);
} else {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    rl.question('Project name [neo-portfolio]: ', (answer) => {
        rl.close();
        create(answer.trim() || 'neo-portfolio');
    });
}