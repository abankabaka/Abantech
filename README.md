# AbanTechnologies Digital Ecosystem

This is a high-performance Next.js 15 application built for AbanTechnologies, featuring a futuristic "Cyber/Arctic/Matrix" theme system and an AI Solution Architect powered by Genkit.

## Quick Start: Run Locally

To get this project running on your machine, follow these steps exactly:

### 1. Prerequisites
Ensure you have **Node.js 18.18 or higher** installed on your system.

### 2. Install Dependencies
Navigate to the project root in your terminal and run:
```bash
npm install
```

### 3. Environment Configuration
The "AI Solution Architect" requires a Google Gemini API key.
1. Create a file named `.env` in the root directory.
2. Add the following line (replace with your key from [Google AI Studio](https://aistudio.google.com/)):
   ```env
   GOOGLE_GENAI_API_KEY=your_api_key_here
   ```

### 4. Launch the Development Server
Start the project in development mode:
```bash
npm run dev
```
The application will be accessible at [http://localhost:9002](http://localhost:9002).

## Technical Architecture

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS + ShadCN UI
- **AI Engine**: Genkit with Google AI (Gemini 2.5 Flash)
- **Theme System**: Dynamic HSL variable switching (Cyber, Arctic, Matrix)
- **Interactivity**: Framer-motion-like CSS animations and Radix primitives

## Project Structure

- `src/app`: Application routes (Home, About, Services, Dashboard, Contact).
- `src/components`: Thematic UI components and layout wrappers.
- `src/ai`: Genkit flows for the AI Solution Architect.
- `src/hooks`: Custom hooks for theme management and UI state.

## Deployment
This project is ready to be deployed to **Firebase App Hosting** or any Vercel-compatible platform. Ensure your environment variables are set in your deployment dashboard.
