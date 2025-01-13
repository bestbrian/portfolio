This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

Style Guide:

1. Colors
   - BG/FG
     - Background: main page bg
     - Foreground: text colour over background
   - Card (cards, panels, sections)
     - Slight contrast from background
     - Card-foreground: text colour over card
   - Popover (drop-down, modals, tooltips)
   - Primary (CTA, interactive elements, links)
     - Primary-foreground: text colour on top of primary
   - Secondary (secondary actions, subtle highlights)
   - Muted (disclaimers, placeholders, subdued text)
   - Accent (icons, badges, minimal highlights)
   - Destructive (delete, error, “danger” actions)
   - Border/Input/Ring (lines, outlines, focus rings, BG)
     - input: text fields or subdued BG behind input elements
     - ring: highlight focus states
2. Typography
   - Font
     - H1: 3.16rem
     - H2: 2.37rem
     - H3: 1.77rem
     - H4: 1.33rem
     - Paragraph: 1rem
     - Legal: 0.75rem
   - Line-height
     - Paragraph: 1.5rem
     - Headings: 1.2rem
3. Spacing
   - Scale (Perfect Fourth)
     - XS: 0.75rem
     - SM: 1rem
     - MD: 1.33rem
     - LG: 1.77rem
     - XL: 2.37rem
   - Containers
     - Max-width: 70rem (1120px)
     - Smaller: 45rem (720px)
     - 2rem padding
   - Section: Top and bottom padding of ~ 2.37rem (XL).
   - Between Headings & Body: ~ 1.33rem (MD).
   - Between Paragraphs: ~ 1rem (SM or base).
4. Imagery
   - Profile: 4-5rem
   - Feature: fw (70rem)
   - Icons: 1rem
