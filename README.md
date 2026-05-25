# AbanTechnologies Digital Ecosystem

This is a high-performance Next.js 15 application built for AbanTechnologies, featuring a futuristic "Cyber/Arctic/Matrix" theme system and an AI Solution Architect powered by Genkit.

## Technical Architecture

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + ShadCN UI (Radix Primitives)
- **AI Engine**: Genkit with Google AI (Gemini 2.5 Flash)
- **Themes**: 3-tier HSL variable system (Cyber Blue, Arctic White, Matrix Green)
- **Icons**: Lucide React
- **Fonts**: Space Grotesk (Headline) & Inter (Body)

## Local Development Setup

To run this project on your local machine:

1. **Install Dependencies**:
   ```bash
   npm install
   ```
2. **Environment Variables**:
   Create a `.env` file in the root directory and add your credentials:
   ```env
   GOOGLE_GENAI_API_KEY=your_api_key_here
   ```
3. **Run the Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:9002](http://localhost:9002) in your browser.

## Project Structure

- `src/app`: Next.js App Router pages and layouts.
- `src/components`: Reusable UI components and theme-specific sections.
- `src/ai`: Genkit AI flows for technical solutioning.
- `src/firebase`: Firebase client initialization and utilities.
- `src/hooks`: Custom React hooks for UI and state.

## Theme System
The app uses a sophisticated theme-switching mechanism. Global colors are bound to HSL variables in `src/app/globals.css`. The `ThemeProvider` toggles CSS classes on the `<html>` element to swap these variables instantly without page reloads.

## AI Solution Architect
The "Solution Architect" is a server-side Genkit flow (`src/ai/flows/ai-solution-architect.ts`) that analyzes user input against the AbanTechnologies service catalog to provide bespoke technical roadmaps.
