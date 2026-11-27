# IB Design System (React)

React + CSS Modules implementation of the "IB - DS for Testing" Figma file.

- `src/tokens/tokens.css` – primitive + semantic colors, spacing, font family (from Figma Style Guides)
- `src/tokens/typography.css` – text styles as `.ib-*` classes (Lexend)
- `src/components/` – Button, InputField, Tabs, Accordion, TeamMemberCard

```
npm install
npm run dev
npm run build
```

Known gaps: Figma SVG assets were not imported (card corner shapes, social icons, arrow icon). The arrow and accordion plus/minus are temporary placeholders; the button corner cut (12px) is an estimate.
