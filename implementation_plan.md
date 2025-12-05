# Implementation Plan: Fix Syntax Errors and Convert to Vanilla CSS

## Problem Analysis
The project has multiple JSXEscape syntax errors across several files:
- Footer.tsx: 6 problems including apostrophe escaping issues
- HeroSection.tsx: 16 syntax errors 
- page.tsx: 1 syntax error

## Root Cause
The errors appear to be related to:
1. Improper JSX escaping of special characters (apostrophes, quotes)
2. Potentially malformed JSX syntax
3. Possible issues with custom CSS classes (fjellro-* classes)

## Solution Approach
1. **Fix JSX Syntax Errors**: 
   - Properly escape apostrophes and quotes in JSX text content
   - Fix any malformed JSX elements
   - Ensure proper string interpolation

2. **Convert to Vanilla CSS**:
   - Remove Tailwind/custom CSS classes
   - Create vanilla CSS stylesheets
   - Implement responsive design with media queries
   - Maintain the dark theme and modern aesthetic

3. **Maintain Design Quality**:
   - Keep glassmorphism effects
   - Preserve hover states and transitions
   - Ensure proper spacing and typography
   - Maintain responsive layout

## Verification Steps
1. Check that all syntax errors are resolved
2. Verify that vanilla CSS renders correctly
3. Test responsive behavior
4. Ensure dark theme is maintained
5. Validate that all interactive elements work

## Files to Modify
- src/components/layout/Footer.tsx
- src/components/sections/HeroSection.tsx  
- src/app/page.tsx
- Create new CSS files for styling