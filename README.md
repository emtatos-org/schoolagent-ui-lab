# SchoolAgent UI Lab

A component library and UI experimentation space for SchoolAgent, built with React, TypeScript, and Storybook.

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm

### Installation

```bash
npm install
```

### Development

Run Storybook locally:

```bash
npm run storybook
```

Build Storybook for production:

```bash
npm run build-storybook
```

## Chromatic Integration

This repository uses [Chromatic](https://www.chromatic.com/) for Storybook hosting and visual regression testing. Every push to `main` and every pull request automatically publishes the Storybook to Chromatic.

### How It Works

1. When you push to `main` or open a PR, the GitHub Actions workflow runs automatically
2. The workflow installs dependencies and publishes the Storybook to Chromatic
3. Chromatic hosts your Storybook and provides a shareable URL
4. You can find the Chromatic link in the GitHub Actions workflow run or in the PR checks

### Finding the Chromatic URL

After a successful workflow run:

1. Go to the **Actions** tab in GitHub
2. Click on the latest "Chromatic" workflow run
3. In the job output, look for the Chromatic URL (it will be in the "Publish to Chromatic" step)
4. For PRs, you can also find the Chromatic link in the PR checks section

### Setting Up Chromatic (Required)

To enable Chromatic publishing, you must add the `CHROMATIC_PROJECT_TOKEN` secret to your repository:

1. Create a Chromatic account at [chromatic.com](https://www.chromatic.com/)
2. Create a new project and link it to this repository
3. Copy the project token from Chromatic
4. In GitHub, go to **Settings** > **Secrets and variables** > **Actions**
5. Click **New repository secret**
6. Name: `CHROMATIC_PROJECT_TOKEN`
7. Value: Paste your Chromatic project token
8. Click **Add secret**

Without this secret, the workflow will fail with a clear error message indicating that the token is missing.

## Components

The library includes the following components:

- **Button** - A customizable button with variants (primary, secondary, danger) and sizes (small, medium, large)
- **Card** - A container component with variants (default, outlined, elevated)
- **NpTopBar** - Top navigation bar for NP training with "Tillbaka till ämnesval" (back) and "Logga ut" (logout) buttons. See `src/components/NpTopBar.stories.tsx` for the story, which serves as a spec for SchoolAgent2.

## Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start the Vite development server |
| `npm run build` | Build the application for production |
| `npm run storybook` | Start Storybook development server |
| `npm run build-storybook` | Build Storybook for production |
| `npm run lint` | Run ESLint |

## License

Private
