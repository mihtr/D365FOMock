# D365FO UI Specifications - Detailed Reference

## Complete UI Component Specifications

This document provides precise specifications for all D365FO UI components based on Microsoft documentation and web research.

---

## Color Palette

### Primary Colors
```css
--d365-blue-primary: #0078d4;      /* Navigation bar, links, active states */
--d365-blue-light: #deecf9;        /* Selected row background */
--d365-blue-hover: #c7e0f4;        /* Selected row hover */
--d365-blue-dark: #2b579a;         /* Sidebar background */
```

### Neutral Colors
```css
--d365-white: #ffffff;             /* Content backgrounds */
--d365-gray-lightest: #faf9f8;     /* Action pane background */
--d365-gray-lighter: #f3f2f1;      /* Page background, hover states */
--d365-gray-light: #edebe9;        /* Grid row borders */
--d365-gray-medium: #e1dfdd;       /* Borders */
--d365-gray: #d2d0ce;              /* Input borders */
--d365-gray-dark: #a19f9d;         /* Scrollbar hover */
--d365-gray-darker: #605e5c;       /* Secondary text */
--d365-gray-darkest: #323130;      /* Primary text */
```

### Semantic Colors
```css
--d365-red: #a80000;               /* Error states */
--d365-yellow: #fff4ce;            /* Warning states */
--d365-green: #107c10;             /* Success states */
```

---

## Typography

### Font Families
```css
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
```

### Font Sizes
```css
--font-size-xlarge: 21px;          /* Page titles */
--font-size-large: 14px;           /* Module title */
--font-size-base: 12px;            /* Body text, grids, labels */
--font-size-small: 11px;           /* Command button labels, status bar */
--font-size-xsmall: 10px;          /* Dropdown indicators */
```

### Font Weights
```css
--font-weight-normal: 400;
--font-weight-semibold: 600;       /* Page titles, active tabs, grid headers */
```

### Line Heights
```css
--line-height-base: 1.4;
--line-height-compact: 1.2;        /* Button labels */
```

---

## Spacing System

### Padding
```css
--padding-xs: 4px;
--padding-sm: 8px;
--padding-md: 12px;
--padding-lg: 16px;
--padding-xl: 20px;
```

### Gaps
```css
--gap-xs: 4px;
--gap-sm: 8px;
--gap-md: 12px;
--gap-lg: 16px;
--gap-xl: 24px;
```

---

## Component Specifications

### Navigation Bar (Top Bar)

**Dimensions:**
- Height: `48px`
- Position: Fixed top
- Z-index: 1000

**Styling:**
```css
background-color: #0078d4;
color: white;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
```

**Structure:**
```
[☰ Menu] [Finance and Operations]     [Search Box]     [Company: USMF] [?][⚙][🔔][👤]
```

**Components:**
1. Hamburger menu button (left)
   - Size: 20px icon
   - Padding: 8px
   - Hover: rgba(255, 255, 255, 0.1)

2. App title
   - Font-size: 14px
   - Font-weight: 600
   - Margin-left: 12px

3. Search box (center)
   - Max-width: 600px
   - Background: rgba(255, 255, 255, 0.9)
   - Padding: 8px 12px
   - Border-radius: 2px

4. Company info
   - Font-size: 11px
   - Margin-right: 8px

5. Icon buttons (right)
   - Size: 16px icons
   - Padding: 8px each
   - Gap: 8px between
   - Hover: rgba(255, 255, 255, 0.1)

---

### Breadcrumb Navigation

**Dimensions:**
- Height: `40px`
- Position: Fixed (below nav bar)
- Top: `48px`
- Z-index: 999

**Styling:**
```css
background-color: #ffffff;
border-bottom: 1px solid #e1dfdd;
```

**Components:**
1. Back/Forward buttons
   - Border: 1px solid #d2d0ce
   - Padding: 4px 8px
   - Border-radius: 2px
   - Font-size: 14px

2. Home button
   - Same styling as navigation buttons
   - Icon: ⌂

---

### Sidebar (Left Navigation)

**Dimensions:**
- Width: `48px`
- Background: #2b579a
- Full height

**Buttons:**
- Padding: 12px
- Icon size: 18px
- Color: white
- Hover: rgba(255, 255, 255, 0.1)
- Border-radius: 2px

**Common Icons:**
- ☰ Menu
- 📌 Pin/Favorites
- 🔍 Search
- ⭐ Recent

---

### Action Pane

**Tabs Section:**
- Background: white
- Border-bottom: 2px solid #e1dfdd
- Padding: 8px 16px 0 16px
- Overflow: auto (horizontal scroll)

**Tab Styling:**
```css
/* Inactive Tab */
background: none;
padding: 8px 16px;
border-radius: 2px 2px 0 0;
font-size: 12px;

/* Active Tab */
background: white;
font-weight: 600;
border-bottom: 2px solid #0078d4;
position: relative;
bottom: -2px;

/* Hover */
background: #f3f2f1;
```

**Commands Section:**
- Background: #faf9f8
- Border-bottom: 1px solid #e1dfdd
- Padding: 12px 16px
- Display: flex
- Gap: 24px
- Overflow: auto (horizontal scroll)

**Command Button:**
```css
/* Structure */
display: flex;
flex-direction: column;
align-items: center;
gap: 4px;
padding: 8px;
border: none;
background: none;
min-width: 60px;

/* Icon */
font-size: 20px;

/* Label */
font-size: 11px;
line-height: 1.2;
text-align: center;

/* Hover */
background: #e1dfdd;
border-radius: 2px;
cursor: pointer;
```

---

### Quick Filter

**Layout:**
```css
display: flex;
align-items: center;
gap: 8px;
padding: 8px 16px;
background: white;
```

**Components:**

1. Label
   - Font-size: 12px
   - Color: #605e5c

2. Input field
   - Flex: 1
   - Max-width: 300px
   - Border: 1px solid #d2d0ce
   - Padding: 6px 8px
   - Font-size: 12px
   - Border-radius: 2px

3. Field selector dropdown
   - Border: 1px solid #d2d0ce
   - Padding: 6px 8px
   - Font-size: 12px
   - Background: white
   - Cursor: pointer

**Focus State:**
```css
border-color: #0078d4;
outline: none;
```

---

### Data Grid

**Container:**
```css
flex: 1;
overflow: auto;
padding: 0 16px;
```

**Table:**
```css
width: 100%;
border-collapse: collapse;
font-size: 12px;
```

**Header:**
```css
/* Position */
position: sticky;
top: 0;
z-index: 10;

/* Styling */
background: #f3f2f1;
text-align: left;
padding: 8px 12px;
font-weight: 600;
border-bottom: 1px solid #d2d0ce;
white-space: nowrap;
user-select: none;

/* Hover */
background: #e1dfdd;
cursor: pointer;
```

**Rows:**
```css
/* Default */
border-bottom: 1px solid #edebe9;

/* Hover */
background: #f3f2f1;
cursor: pointer;

/* Selected */
background: #deecf9;

/* Selected + Hover */
background: #c7e0f4;
```

**Cells:**
```css
padding: 8px 12px;
vertical-align: middle;
```

**Links in Grid:**
```css
color: #0078d4;
text-decoration: none;

/* Hover */
text-decoration: underline;
```

**Checkbox Column:**
```css
width: 40px;
text-align: center;
```

---

### FastTabs

**Container:**
```css
background: white;
border: none;
```

**Tab Header:**
```css
/* Default */
background: #f3f2f1;
padding: 12px 16px;
border-top: 1px solid #e1dfdd;
font-size: 12px;
font-weight: 600;
text-transform: uppercase;
cursor: pointer;

/* Expanded */
background: white;
border-bottom: none;

/* Hover */
background: #edebe9;
```

**Tab Content:**
```css
padding: 16px;
border-bottom: 1px solid #e1dfdd;

/* Fields arranged in grid */
display: grid;
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
gap: 16px 24px;
```

---

### Form Fields

**Label:**
```css
font-size: 12px;
color: #605e5c;
margin-bottom: 4px;
display: block;
```

**Input:**
```css
width: 100%;
border: 1px solid #d2d0ce;
padding: 6px 8px;
font-size: 12px;
font-family: 'Segoe UI', sans-serif;
border-radius: 2px;
background: white;

/* Focus */
border-color: #0078d4;
outline: none;

/* Disabled */
background: #f3f2f1;
color: #a19f9d;
cursor: not-allowed;

/* Read-only */
border-color: transparent;
background: transparent;
cursor: default;
```

**Required Field Indicator:**
```css
color: #a80000;
margin-left: 2px;
```

---

### Buttons

**Primary Button:**
```css
background: #0078d4;
color: white;
border: 1px solid #0078d4;
padding: 8px 16px;
font-size: 12px;
border-radius: 2px;
cursor: pointer;

/* Hover */
background: #106ebe;
border-color: #106ebe;

/* Active */
background: #005a9e;
border-color: #005a9e;

/* Disabled */
background: #f3f2f1;
color: #a19f9d;
border-color: #d2d0ce;
cursor: not-allowed;
```

**Secondary Button:**
```css
background: white;
color: #323130;
border: 1px solid #d2d0ce;
padding: 8px 16px;
font-size: 12px;
border-radius: 2px;
cursor: pointer;

/* Hover */
background: #f3f2f1;

/* Active */
background: #edebe9;
```

---

### FactBox Panel

**Container:**
```css
width: 300px;
background: white;
border-left: 1px solid #e1dfdd;
overflow-y: auto;
```

**FactBox Item:**
```css
border-bottom: 1px solid #e1dfdd;
```

**FactBox Header:**
```css
padding: 12px 16px;
background: #f3f2f1;
font-size: 12px;
font-weight: 600;
text-transform: uppercase;
```

**FactBox Content:**
```css
padding: 16px;
font-size: 12px;
```

---

### Status Bar (Bottom)

**Styling:**
```css
background: #f3f2f1;
border-top: 1px solid #e1dfdd;
padding: 8px 16px;
font-size: 11px;
color: #605e5c;
```

**Content:**
- Record count: "X records"
- Status messages
- Progress indicators

---

### Dialogs and Drop Dialogs

**Overlay:**
```css
background: rgba(0, 0, 0, 0.4);
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
z-index: 2000;
```

**Dialog:**
```css
background: white;
border: 1px solid #d2d0ce;
border-radius: 2px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
max-width: 600px;
margin: 100px auto;
```

**Dialog Header:**
```css
padding: 16px 20px;
border-bottom: 1px solid #e1dfdd;
font-size: 14px;
font-weight: 600;
```

**Dialog Content:**
```css
padding: 20px;
```

**Dialog Footer:**
```css
padding: 16px 20px;
border-top: 1px solid #e1dfdd;
text-align: right;
display: flex;
gap: 8px;
justify-content: flex-end;
```

---

### Notifications

**Message Bar:**
```css
padding: 12px 16px;
font-size: 12px;
display: flex;
align-items: center;
gap: 12px;
```

**Types:**
```css
/* Info */
background: #f3f9fd;
border-left: 4px solid #0078d4;

/* Success */
background: #f3fff3;
border-left: 4px solid #107c10;

/* Warning */
background: #fff4ce;
border-left: 4px solid #ffaa44;

/* Error */
background: #fef0f0;
border-left: 4px solid #a80000;
```

---

### Scrollbars

**Webkit Browsers:**
```css
::-webkit-scrollbar {
  width: 12px;
  height: 12px;
}

::-webkit-scrollbar-track {
  background: #f3f2f1;
}

::-webkit-scrollbar-thumb {
  background: #d2d0ce;
  border-radius: 6px;
}

::-webkit-scrollbar-thumb:hover {
  background: #a19f9d;
}
```

---

## Animation and Transitions

**Standard Transition:**
```css
transition: all 0.2s ease;
```

**Fast Transition:**
```css
transition: all 0.1s ease;
```

**Slow Transition:**
```css
transition: all 0.3s ease;
```

---

## Responsive Breakpoints

```css
--breakpoint-mobile: 576px;
--breakpoint-tablet: 768px;
--breakpoint-desktop: 992px;
--breakpoint-wide: 1200px;
```

**Responsive Behavior:**
- < 768px: Stack elements vertically
- 768px - 992px: Tablet layout, some horizontal arrangement
- > 992px: Full desktop layout

---

## Z-Index Layers

```css
--z-base: 1;
--z-dropdown: 100;
--z-sticky: 10;
--z-nav: 999;
--z-topbar: 1000;
--z-modal-backdrop: 2000;
--z-modal: 2001;
--z-tooltip: 2100;
```

---

*This specification is based on Microsoft documentation and web research. Use these specifications to ensure pixel-perfect D365FO mockups.*
