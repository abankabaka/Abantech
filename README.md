# AbanTechnologies Digital Ecosystem

This is a high-performance Next.js application built for AbanTechnologies, featuring a futuristic "Cyber/Arctic/Matrix" theme system and an AI Solution Architect powered by Genkit.

## Local Development Setup

To run this project on your local machine after downloading:

1. **Extract the ZIP file** to a local directory.
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Environment Variables**:
   Create a `.env` file in the root directory and add your Firebase and Google AI credentials:
   ```env
   GOOGLE_GENAI_API_KEY=your_api_key_here
   # Add other Firebase config variables as needed
   ```
4. **Run the Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:9002](http://localhost:9002) in your browser.

## Project Structure

- `src/app`: Next.js App Router pages and layouts.
- `src/components`: Reusable UI components (ShadCN) and theme-specific sections.
- `src/ai`: Genkit AI flows and configuration for the Solution Architect.
- `src/firebase`: Firebase client initialization and custom hooks.

## Available Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run genkit:dev`: Starts the Genkit developer UI for testing AI flows.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS + ShadCN UI
- **AI**: Genkit with Gemini 2.5 Flash
- **Icons**: Lucide React
- **Fonts**: Space Grotesk (Headline), Inter (Body)
