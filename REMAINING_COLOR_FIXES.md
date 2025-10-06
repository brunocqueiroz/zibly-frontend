# Remaining Color Contrast Fixes

## Summary of Changes Made

### Completed Files (3/11):
1. ✅ `/app/solutions/strategy/page.tsx`
2. ✅ `/app/solutions/consultants/page.tsx`
3. ✅ `/app/solutions/investment-banking/page.tsx`

### Changes Applied to Each File:

#### 1. Hero Section (bg-background)
```tsx
// BEFORE:
<h1 className="text-4xl...">Title</h1>
<p className="...text-muted-foreground...">Description</p>

// AFTER:
<h1 className="text-4xl... text-foreground">Title</h1>
<p className="...text-foreground...">Description</p>
```

#### 2. Second Section → Changed to bg-card
```tsx
// BEFORE:
<section className="...bg-background"> or <section className="...bg-secondary">
  <h2 className="...">Heading</h2>
  <p className="...text-muted-foreground...">Text</p>
  <h3 className="...">Subheading</h3>
  <p className="...text-muted-foreground...">Text</p>

// AFTER:
<section className="...bg-card">
  <h2 className="... text-card-foreground">Heading</h2>
  <p className="...text-card-foreground...">Text</p>
  <h3 className="... text-card-foreground">Subheading</h3>
  <p className="...text-card-foreground...">Text</p>
```

#### 3. Third Section (Solutions) → Changed to bg-background
```tsx
// BEFORE:
<section className="...bg-secondary">
  <h2 className="...">Your Solutions</h2>
  <p className="...text-muted-foreground...">Description</p>
  <div className="bg-card...">
    <h3 className="...">Feature</h3>
    <p className="...text-muted-foreground...">Description</p>

// AFTER:
<section className="...bg-background">
  <h2 className="... text-foreground">Your Solutions</h2>
  <p className="...text-foreground...">Description</p>
  <div className="bg-card...">
    <h3 className="... text-card-foreground">Feature</h3>
    <p className="...text-card-foreground...">Description</p>
```

#### 4. Deliverables Section → Changed to bg-card
```tsx
// BEFORE:
<section className="...bg-background">
  <div className="bg-card">
    <h3 className="... text-card-foreground">Deliverables</h3>
    <ul className="...text-card-foreground">

// AFTER:
<section className="...bg-card">
  <div className="bg-background">
    <h3 className="... text-foreground">Deliverables</h3>
    <ul className="...text-foreground">
```

## Remaining Files to Fix (8/11):

Apply the same pattern to these files:

1. `/app/solutions/private-equity/page.tsx`
2. `/app/solutions/accountants/page.tsx`
3. `/app/solutions/attorneys/page.tsx`
4. `/app/solutions/marketing/page.tsx`
5. `/app/solutions/product-managers/page.tsx`
6. `/app/solutions/mba-students/page.tsx`
7. `/app/solutions/law-students/page.tsx`
8. `/app/solutions/undergraduates/page.tsx`

## Alternation Pattern

The key is to alternate section backgrounds:
- Section 1 (Hero): `bg-background` → text-foreground
- Section 2: `bg-card` → text-card-foreground
- Section 3: `bg-background` → text-foreground (cards with bg-card use text-card-foreground)
- Section 4: `bg-card` → text-card-foreground (cards with bg-background use text-foreground)
- Continue pattern...

## Text Color Rules:

- **On bg-background**: Use `text-foreground` for h1, h2, h3, p
- **On bg-card**: Use `text-card-foreground` for h1, h2, h3, p
- **Cards inside sections**: Follow nested rule
  - `bg-card` card inside `bg-background` section → `text-card-foreground`
  - `bg-background` card inside `bg-card` section → `text-foreground`

## Common Issues Fixed:

1. Changed `text-muted-foreground` to context-appropriate color
2. Changed `bg-secondary` sections to either `bg-background` or `bg-card` for alternation
3. Added missing text color classes to headings
4. Ensured nested cards have contrasting colors from their parent section
