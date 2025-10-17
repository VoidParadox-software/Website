
# Cierra Smart Home - VoidParadox

Welcome to the Cierra Smart Home website project! This is a Next.js application built with Firebase Studio. This documentation will guide you through the project structure, how to make edits, and how to run it locally.

## Table of Contents

- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Editing Content](#editing-content)
  - [Text and Copy](#text-and-copy)
  - [Styling](#styling)
  - [Components](#components)
- [AI Functionality](#ai-functionality)
- [Deployment](#deployment)

## Tech Stack

This project is built with a modern, robust tech stack:

-   **Framework**: [Next.js](https://nextjs.org/) (using the App Router)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Generative AI**: [Google's Genkit](https://firebase.google.com/docs/genkit)
-   **Icons**: [Lucide React](https://lucide.dev/guide/packages/lucide-react)

## Project Structure

Here's a breakdown of the most important files and directories:

```
.
├── src
│   ├── app
│   │   ├── page.tsx         # The main entry point for the landing page.
│   │   ├── layout.tsx       # Main layout of the application, includes fonts and global styles.
│   │   ├── globals.css      # Global styles and theme variables (colors, etc.).
│   │   ├── actions.ts       # Server-side actions for form submissions (e.g., the voice demo).
│   │   │
│   │   ├── accessories/page.tsx     # Page for showcasing smart accessories.
│   │   ├── cierra-core/page.tsx     # Page detailing the Cierra Core hub.
│   │   ├── cierra-infinity/page.tsx # Page for the premium Infinity package.
│   │   ├── cierra-modular/page.tsx  # Page for the customizable Modular package.
│   │   ├── contact/page.tsx         # The contact form and contact details page.
│   │   ├── cookies/page.tsx         # The cookie policy page.
│   │   ├── documentation/page.tsx   # A hub for linking to all documentation pages.
│   │   ├── faq/page.tsx             # The Frequently Asked Questions page.
│   │   ├── installation/page.tsx    # Step-by-step installation guide.
│   │   ├── privacy/page.tsx         # The privacy policy page.
│   │   ├── smart-modules/page.tsx   # Page showcasing the different smart modules.
│   │   ├── terms/page.tsx           # The terms and conditions page.
│   │   └── warranty/page.tsx        # The warranty information page.
│   │
│   ├── components
│   │   ├── ui/              # Reusable UI components from shadcn/ui.
│   │   ├── common/          # General-purpose components (e.g., AnimatedText, AnimatedSection).
│   │   └── landing/         # Components specific to the landing page sections (Hero, Features, etc.).
│   │
│   ├── ai
│   │   ├── flows/           # Genkit AI flows for features like voice interpretation.
│   │   └── genkit.ts        # Genkit configuration.
│   │
│   └── lib
│       ├── utils.ts         # Utility functions, like `cn` for combining class names.
│       └── placeholder-images.json # Data for placeholder images used throughout the site.
│
├── public/                  # Static assets like images (if any).
├── SETUP.md                 # Detailed instructions for setting up the project locally.
├── DEPLOYMENT.md            # Step-by-step deployment guide.
└── README.md                # This file.
```

## Getting Started

To run the project locally, you'll need [Node.js](https://nodejs.org/) installed.

For a detailed, step-by-step guide on how to set up your local development environment, install dependencies, and configure API keys, please see the **[SETUP.md](./SETUP.md)** file.

A quick summary is:

1.  **Install dependencies**:
    ```bash
    npm install
    ```

2.  **Set up your `.env` file** (see `SETUP.md` for details).

3.  **Run the development server**:
    ```bash
    npm run dev
    ```

The application will be available at `http://localhost:9002`.

## Editing Content

### Text and Copy

Most of the text is located within the `.tsx` files in the `src/app/` directory for individual pages, or the `src/components/landing/` directory for sections on the homepage. For example, to change the text in the hero section, you would edit `src/components/landing/hero.tsx`.

### Styling

-   **Colors**: The color scheme is defined using CSS variables in `src/app/globals.css`. You can change the values for `--primary`, `--background`, `--accent`, etc., to alter the overall theme.
-   **Layout and Sizing**: Components are styled using Tailwind CSS utility classes directly in the JSX files. For example, `p-4` adds padding, and `flex` creates a flexbox container.
-   **Frosted Glass Effect**: The frosted glass effect on the section containers is achieved with `bg-card/50` (semi-transparent background) and `backdrop-blur-sm` classes.

### Components

The landing page (`src/app/page.tsx`) is built from several components found in `src/components/landing/`.

-   `Header.tsx`: The floating navigation bar.
-   `Hero.tsx`: The main "Fill the Void" section.
-   `Features.tsx`: "A Home That Knows You" section.
-   `DayInTheLife.tsx`: The timeline component.
-   `VoiceDemo.tsx`: The interactive voice command demo.
-   `UseCases.tsx`: The tabbed section for different user types.
-   `Pricing.tsx`: The pricing tiers.
-   `Newsletter.tsx`: The newsletter subscription form.
-   `Footer.tsx`: The site footer.

To change the layout or content of a specific section, you will need to edit the corresponding component file.

## AI Functionality

The AI-powered features, like the voice command interpreter in the demo, are handled by Google's Genkit.

-   **Flows**: The logic is defined in `src/ai/flows/`. For example, `interpret-voice-commands.ts` contains the Genkit flow that takes a user's text command and converts it into a structured action.
-   **Prompts**: Inside each flow file, you'll find a prompt (e.g., `interpretVoiceCommandPrompt`). This is the instruction given to the AI model. You can edit this prompt to change the AI's behavior, personality, or capabilities.
-   **Server Actions**: The front-end communicates with these AI flows via Next.js Server Actions, defined in `src/app/actions.ts`.

## Deployment

For a detailed, step-by-step guide on how to deploy this website to your own server and connect a custom domain, please see the `DEPLOYMENT.md` file included in the project.
