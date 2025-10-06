# Color Contrast Fixes for Solutions Pages

## Pattern Applied

All solutions pages follow this alternating pattern:

### Section Pattern:
1. **Hero** (bg-background): h1, p use text-foreground
2. **Section 2** (bg-card): h2, h3, p use text-card-foreground  
3. **Section 3** (bg-background): h2, p use text-foreground; cards with bg-card use text-card-foreground
4. **Section 4** (bg-card): h2 uses text-card-foreground; cards with bg-background use text-foreground
5. Continue alternating...

## Files Completed:
✅ strategy/page.tsx
✅ consultants/page.tsx  
✅ investment-banking/page.tsx

## Files Remaining:
- private-equity/page.tsx
- accountants/page.tsx
- attorneys/page.tsx
- marketing/page.tsx
- product-managers/page.tsx
- mba-students/page.tsx
- law-students/page.tsx
- undergraduates/page.tsx

## Key Changes Per File:

### Hero Section
- h1: add `text-foreground`
- p: change `text-muted-foreground` to `text-foreground`

### Second Section  
- Change `bg-background` or `bg-secondary` to `bg-card`
- h2: add `text-card-foreground`
- h3: add `text-card-foreground`
- p: change `text-muted-foreground` to `text-card-foreground`

### Third Section (Solutions/Use Cases)
- Change `bg-secondary` to `bg-background`
- h2, p: add `text-foreground`
- Cards with `bg-card`: h3, p use `text-card-foreground`

### Fourth Section (Deliverables)
- Change `bg-background` to `bg-card`
- Cards with `bg-background`: h3, lists use `text-foreground`
- Cards with `bg-card` (if any): h3, lists use `text-card-foreground`

### Additional Sections
- Continue alternating bg-background/bg-card
- Match text colors to background context
