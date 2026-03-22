---
name: "web:help"
description: "Show all available /web: commands with descriptions and examples."
disable-model-invocation: true
---
<objective>
Display the complete GWD command reference.

Output ONLY the reference content below. Do NOT add:
- Project-specific analysis
- Git status or file context
- Next-step suggestions
- Any commentary beyond the reference
</objective>

<execution_context>
@get-web-done/workflows/help.md
</execution_context>

<process>
Output the complete GWD command reference from @get-web-done/workflows/help.md.
Display the reference content directly — no additions or modifications.
</process>
