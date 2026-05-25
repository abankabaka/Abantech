'use server';
/**
 * @fileOverview An AI chatbot that analyzes business requirements, recommends technical solutions,
 * and assists in booking consultations for AbanTechnologies.
 *
 * - aiSolutionArchitect - A function that handles the AI solution architect process.
 * - AISolutionArchitectInput - The input type for the aiSolutionArchitect function.
 * - AISolutionArchitectOutput - The return type for the aiSolutionArchitect function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AISolutionArchitectInputSchema = z.object({
  businessNeeds: z.string().describe('A detailed description of the client\'s business requirements and challenges.'),
});
export type AISolutionArchitectInput = z.infer<typeof AISolutionArchitectInputSchema>;

const AISolutionArchitectOutputSchema = z.object({
  summaryOfNeeds: z.string().describe('A concise summary of the client\'s business needs and challenges as understood by AbanTechnologies.'),
  recommendedSolutions: z.array(z.string()).describe('A list of recommended technical solutions from AbanTechnologies, tailored to the client\'s needs.'),
  potentialTechStack: z.array(z.string()).describe('A suggested list of technologies or approaches for implementing the recommended solutions.'),
  nextSteps: z.string().describe('Clear instructions on how the client can book a consultation with AbanTechnologies, including contact details.'),
});
export type AISolutionArchitectOutput = z.infer<typeof AISolutionArchitectOutputSchema>;

export async function aiSolutionArchitect(input: AISolutionArchitectInput): Promise<AISolutionArchitectOutput> {
  return aiSolutionArchitectFlow(input);
}

const companyInfo = `
COMPANY NAME: AbanTechnologies
TAGLINE: “Nothing to Something”
DOMAIN: abantechnologies.com
DESCRIPTION: Aban Technologies is an all-in-one digital agency that engineers robust systems, builds custom websites and applications, and designs captivating graphics to help businesses thrive in the modern era.

MISSION: To bridge the gap between complex technology and brilliant creative design. We are dedicated to providing businesses with the foundational systems, dynamic websites, fluid applications, and striking visual identities they need to lead, compete, and excel in the modern marketplace.

VISION: To redefine the digital landscape by engineering resilient technology frameworks and crafting iconic visual experiences that inspire trust and unlock boundless growth for enterprises worldwide.

CORE VALUES: Innovation in Every Dimension, Absolute Integrity & Trust, Functional Artistry, Customer-Centric Impact

COMPANY STORY: Aban Technologies was founded to eliminate the need for businesses to hire separate vendors for systems, websites, applications, and branding. The company combines secure engineering, modern UI/UX, cybersecurity awareness, AI integrations, and creative graphics under one ecosystem.

PROBLEMS WE SOLVE:
* Disconnected vendors
* Vulnerable systems
* Data tampering and trust issues
* Complex technology for normal businesses
* Slow and outdated websites
* Weak digital branding

UNIQUE ADVANTAGE: Aban Technologies unifies systems engineering, cybersecurity, AI integrations, website development, mobile applications, branding, and graphic design under one premium technology ecosystem.

SERVICES:
* Website Development
* Mobile App Development
* School Systems
* Graphics Design
* Branding
* Hosting
* UI/UX Design
* System Development
* Cybersecurity
* IT Consultation
* Digital Marketing
* AI Integrations

CONTACT DETAILS:
Phone: +256701949311, +256763180375
WhatsApp: +256701949311, +256763180375
Email: abantechnologies1@gmail.com
Location: Kampala, Uganda
`;

const prompt = ai.definePrompt({
  name: 'aiSolutionArchitectPrompt',
  input: {schema: AISolutionArchitectInputSchema},
  output: {schema: AISolutionArchitectOutputSchema},
  prompt: `You are an AI Solution Architect for AbanTechnologies, a leading digital agency. Your goal is to analyze potential clients' business needs, recommend suitable technical solutions from AbanTechnologies' service offerings, suggest a potential tech stack, and guide them on booking a consultation.

Here is detailed information about AbanTechnologies and its offerings:
${companyInfo}

Based on the client's business needs, provide:
1. A summary of their needs.
2. Recommended solutions leveraging AbanTechnologies' SERVICES and UNIQUE ADVANTAGES.
3. A potential technical stack or approach for these solutions.
4. Clear next steps on how to book a consultation, using the provided CONTACT DETAILS.

Client's Business Needs:
{{{businessNeeds}}}`,
});

const aiSolutionArchitectFlow = ai.defineFlow(
  {
    name: 'aiSolutionArchitectFlow',
    inputSchema: AISolutionArchitectInputSchema,
    outputSchema: AISolutionArchitectOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    if (!output) {
      throw new Error('Failed to get output from AI Solution Architect prompt.');
    }
    return output;
  }
);
