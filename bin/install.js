#!/usr/bin/env node

/**
 * Get Web Done — Installer
 *
 * Copies GWD commands, agents, workflows, templates, references,
 * hooks, skills, and scripts into the user's .claude/ directory.
 *
 * Usage:
 *   npx get-web-done-cc@latest           # Interactive
 *   npx get-web-done-cc --claude --global # Global ~/.claude/
 *   npx get-web-done-cc --claude --local  # Local ./.claude/
 *   npx get-web-done-cc --uninstall       # Remove GWD files
 */

'use strict';

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const PACKAGE_ROOT = path.resolve(__dirname, '..');

const COPY_DIRS = [
  { src: 'commands/web', dest: 'commands/web' },
  { src: 'agents',       dest: 'agents' },
  { src: 'get-web-done', dest: 'get-web-done' },
  { src: 'hooks',        dest: 'hooks', mergeHooks: true },
  { src: 'skills',       dest: 'skills' },
  { src: 'scripts',      dest: 'scripts' },
];

// --- Utility functions ---

function copyDirRecursive(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  let count = 0;

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      count += copyDirRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
      count++;
    }
  }
  return count;
}

function mergeHooksJson(srcPath, destPath) {
  const srcHooks = JSON.parse(fs.readFileSync(srcPath, 'utf8'));

  if (!fs.existsSync(destPath)) {
    fs.writeFileSync(destPath, JSON.stringify(srcHooks, null, 2) + '\n');
    return 'created';
  }

  const existing = JSON.parse(fs.readFileSync(destPath, 'utf8'));
  if (!existing.hooks) existing.hooks = {};

  for (const [event, matchers] of Object.entries(srcHooks.hooks || {})) {
    if (!existing.hooks[event]) {
      existing.hooks[event] = matchers;
    } else {
      for (const matcher of matchers) {
        const exists = existing.hooks[event].some(
          (m) => m.matcher === matcher.matcher
        );
        if (!exists) {
          existing.hooks[event].push(matcher);
        }
      }
    }
  }

  fs.writeFileSync(destPath, JSON.stringify(existing, null, 2) + '\n');
  return 'merged';
}

function removeDirIfExists(dirPath) {
  if (fs.existsSync(dirPath)) {
    fs.rmSync(dirPath, { recursive: true, force: true });
    return true;
  }
  return false;
}

function ask(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer.trim());
    });
  });
}

// --- Main ---

async function main() {
  const args = process.argv.slice(2);
  const isGlobal = args.includes('--global');
  const isLocal = args.includes('--local');
  const isUninstall = args.includes('--uninstall');
  const nonInteractive = isGlobal || isLocal;

  console.log('');
  console.log('  Get Web Done (GWD)');
  console.log('  Agency-quality websites. Structured AI process. Zero AI slop.');
  console.log('');

  // Determine target directory
  let target;

  if (isGlobal) {
    target = path.join(process.env.HOME || process.env.USERPROFILE, '.claude');
  } else if (isLocal) {
    target = path.join(process.cwd(), '.claude');
  } else {
    console.log('  Where should GWD be installed?');
    console.log('');
    console.log('  1. Global  (~/.claude/) — available in all projects');
    console.log('  2. Local   (./.claude/) — this project only');
    console.log('');
    const answer = await ask('  Choice [1/2]: ');
    if (answer === '2' || answer.toLowerCase() === 'local') {
      target = path.join(process.cwd(), '.claude');
    } else {
      target = path.join(process.env.HOME || process.env.USERPROFILE, '.claude');
    }
  }

  console.log(`  Target: ${target}`);
  console.log('');

  // Uninstall
  if (isUninstall) {
    console.log('  Removing GWD files...');
    let removed = 0;
    for (const dir of COPY_DIRS) {
      if (removeDirIfExists(path.join(target, dir.dest))) {
        console.log(`    Removed ${dir.dest}/`);
        removed++;
      }
    }
    if (removed === 0) {
      console.log('  Nothing to remove — GWD not found at this location.');
    } else {
      console.log('');
      console.log(`  GWD removed from ${target}`);
    }
    return;
  }

  // Install
  console.log('  Installing...');
  let totalFiles = 0;

  for (const dir of COPY_DIRS) {
    const srcDir = path.join(PACKAGE_ROOT, dir.src);
    const destDir = path.join(target, dir.dest);

    if (!fs.existsSync(srcDir)) {
      console.log(`    Skipping ${dir.src}/ (not found in package)`);
      continue;
    }

    if (dir.mergeHooks) {
      // Copy all hook files, but merge hooks.json instead of overwriting
      fs.mkdirSync(destDir, { recursive: true });
      const entries = fs.readdirSync(srcDir, { withFileTypes: true });

      for (const entry of entries) {
        const srcPath = path.join(srcDir, entry.name);
        const destPath = path.join(destDir, entry.name);

        if (entry.name === 'hooks.json') {
          const result = mergeHooksJson(srcPath, destPath);
          console.log(`    hooks/hooks.json — ${result}`);
        } else if (entry.isFile()) {
          fs.copyFileSync(srcPath, destPath);
          // Preserve executable bit for shell scripts
          if (entry.name.endsWith('.sh')) {
            fs.chmodSync(destPath, 0o755);
          }
        }
        totalFiles++;
      }
    } else {
      const count = copyDirRecursive(srcDir, destDir);
      console.log(`    ${dir.dest}/ — ${count} files`);
      totalFiles += count;
    }
  }

  // Make scripts executable
  const scriptsDir = path.join(target, 'scripts');
  if (fs.existsSync(scriptsDir)) {
    for (const f of fs.readdirSync(scriptsDir)) {
      if (f.endsWith('.sh')) {
        fs.chmodSync(path.join(scriptsDir, f), 0o755);
      }
    }
  }

  console.log('');
  console.log(`  Installed ${totalFiles} files to ${target}`);
  console.log('');

  // MCP check
  console.log('  MCP Server Check:');
  const mcpConfigPaths = [
    path.join(process.cwd(), '.mcp.json'),
    path.join(process.env.HOME || process.env.USERPROFILE, '.claude', '.mcp.json'),
  ];

  let mcpConfig = null;
  for (const p of mcpConfigPaths) {
    if (fs.existsSync(p)) {
      try {
        mcpConfig = JSON.parse(fs.readFileSync(p, 'utf8'));
        break;
      } catch { /* ignore parse errors */ }
    }
  }

  const servers = mcpConfig?.mcpServers || {};
  const hasPlaywright = !!servers.playwright;
  const hasContext7 = !!servers.context7;

  console.log(`    Playwright MCP: ${hasPlaywright ? '✅ configured' : '❌ not found'}`);
  console.log(`    Context7 MCP:   ${hasContext7 ? '✅ configured' : '❌ not found'}`);

  if (!hasPlaywright || !hasContext7) {
    console.log('');
    console.log('  Recommended MCP setup (add to .mcp.json):');
    if (!hasPlaywright) {
      console.log('    "playwright": { "command": "npx", "args": ["-y", "@playwright/mcp@latest"] }');
    }
    if (!hasContext7) {
      console.log('    "context7": { "command": "npx", "args": ["-y", "@upstash/context7-mcp"] }');
    }
  }

  // External skills recommendations
  console.log('');
  console.log('  Recommended external skills (optional):');
  console.log('    npx skills add coreyhaines31/marketingskills');
  console.log('    npx skills add addyosmani/web-quality-skills');
  console.log('');

  // Verify
  const helpFile = path.join(target, 'commands', 'web', 'help.md');
  if (fs.existsSync(helpFile)) {
    console.log('  ✅ Verification passed — /web:help is available');
  } else {
    console.log('  ⚠️  Verification: commands/web/help.md not found at target');
  }

  console.log('');
  console.log('  Done! Type /web:help in Claude Code to see all commands.');
  console.log('');
}

main().catch((err) => {
  console.error('  Error:', err.message);
  process.exit(1);
});
