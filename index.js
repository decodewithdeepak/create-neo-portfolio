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
            const srcPath = path.join(src, item);
            let destPath = path.join(dest, item);
            
            // Handle gitignore.template -> .gitignore conversion
            if (item === 'gitignore.template') {
                destPath = path.join(dest, '.gitignore');
            }
            
            copyDir(srcPath, destPath, callback);
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

    // Install dependencies with progress
    console.log('📦 Installing packages...');
    const packages = ['next', 'react', 'react-dom', 'tailwindcss', 'typescript', 'framer-motion', 'lucide-react', '@types/node', '@types/react', '@types/react-dom', 'autoprefixer', 'postcss', 'eslint', 'eslint-config-next'];
    let installProgress = 0;
    
    const installInterval = setInterval(() => {
        installProgress = Math.min(installProgress + Math.random() * 15, 95);
        progress(installProgress, 100, '📦 Installing');
    }, 300);
    
    try {
        execSync('npm install --silent', { cwd: name, stdio: 'pipe' });
        clearInterval(installInterval);
        progress(100, 100, '📦 Installing');
        console.log('✓ Packages installed!\n');
    } catch (error) {
        clearInterval(installInterval);
        console.log('\n❌ Install failed:', error.message);
        process.exit(1);
    }

    // Initialize git repository
    console.log('🔧 Initializing git repository...');
    try {
        execSync('git init', { cwd: name, stdio: 'pipe' });
        execSync('git add .', { cwd: name, stdio: 'pipe' });
        execSync('git commit -m "Initial commit from neo-portfolio"', { cwd: name, stdio: 'pipe' });
        console.log('✓ Git repository initialized!\n');
    } catch (error) {
        console.log('⚠️  Git initialization failed (this is optional):', error.message);
    }

    console.log(`🎉 Done!\n\nNext steps:\n  cd ${name}\n  npm run dev\n`);
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