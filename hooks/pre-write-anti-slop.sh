#!/usr/bin/env bash
# pre-write-anti-slop.sh — Block generic patterns before write
# Warns if: inline styles detected, generic placeholder text ("Lorem ipsum",
# "Click here"), stock image URLs without project-specific alt text.
#
# Triggered by: PreToolUse (Write *.html|*.astro|*.jsx|*.tsx|*.svelte)

FILE="$1"

# TODO: Implement anti-slop checks
# - Detect inline styles
# - Detect generic placeholder text (Lorem ipsum, Click here, Learn more)
# - Detect stock image URLs without meaningful alt text

exit 0
