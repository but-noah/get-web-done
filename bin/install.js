#!/usr/bin/env node

/**
 * Get Web Done — Installer
 *
 * Copies GWD commands, agents, workflows, templates, references,
 * hooks, skills, and scripts into the user's .claude/ directory.
 *
 * Usage:
 *   npx get-web-done-cc@latest
 *   npx get-web-done-cc --claude --global
 *   npx get-web-done-cc --claude --local
 *   npx get-web-done-cc --claude --global --uninstall
 */

'use strict';

const fs = require('fs');
const path = require('path');

// TODO: Implement installer logic
// 1. Prompt: Runtime (Claude Code default)
// 2. Prompt: Location — Global (~/.claude/) or Local (./.claude/)
// 3. Copy files:
//    - commands/web/* → {target}/commands/web/
//    - agents/* → {target}/agents/
//    - hooks/* → {target}/hooks/ (merge with existing hooks.json)
//    - skills/* → {target}/skills/
//    - get-web-done/* → {target}/get-web-done/
//    - scripts/* → {target}/scripts/
// 4. MCP check: Playwright, Context7
// 5. External skills check: marketingskills, designer-skills, web-quality-skills
// 6. Verify: /web:help should list all commands

console.log('get-web-done-cc installer — not yet implemented');
process.exit(0);
