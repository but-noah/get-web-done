# Contributing to Get Web Done

## Development Workflow

1. **Read the spec first** — `specs/gwd-spec.md` is the single source of truth
2. **Check the roadmap** — `CLAUDE.md` has the build roadmap with milestones
3. **One milestone at a time** — don't jump ahead; each milestone builds on the previous
4. **Branch per milestone or task** — use `milestone/N-description` or `feature/description`

## File Conventions

| File type | Format | Constraints |
|-----------|--------|-------------|
| Commands | YAML frontmatter + XML body | `disable-model-invocation: true` |
| Agents | XML structure (`<agent>`) | < 200 lines total |
| Workflows | XML structure (`<workflow>`) | Referenced by commands via `@path` |
| Templates | Markdown with section structure | Match spec §21 exactly |
| References | Markdown | < 300 lines each |
| Skills | YAML frontmatter + content | `user-invocable: false` for background skills |
| Hooks | Bash scripts | POSIX-compatible, deterministic |

## PR Guidelines

- Fill out the PR template completely — especially the Constraints Checklist
- Reference the spec section (§) for every structural decision
- One logical change per PR — don't mix milestone work
- Update `CLAUDE.md` project status if the PR completes a roadmap item

## Commit Message Format

```
type: summary — key items affected

- Detail 1
- Detail 2

Next: what comes after this
```

Types: `init`, `feat`, `fix`, `refactor`, `docs`, `chore`, `test`

## Quality Gates

Before merging, verify:
- Agent prompts < 200 lines
- Reference files < 300 lines
- All frontmatter is valid YAML
- All XML is well-formed
- No placeholder text left in implemented files (stubs are fine for future milestones)
- CLAUDE.md roadmap checkboxes updated
