'use server';

/**
 * @fileOverview This file defines a Genkit flow to automate daily routines based on user habits.
 *
 * - automateDailyRoutine - A function that triggers the daily routine automation flow.
 * - AutomateDailyRoutineInput - The input type for the automateDailyRoutine function.
 * - AutomateDailyRoutineOutput - The return type for the automateDailyRoutine function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';

const AutomateDailyRoutineInputSchema = z.object({
  time: z.string().describe('The current time of day.'),
  dayOfWeek: z.string().describe('The current day of the week.'),
  userCalendarEvents: z.string().describe('User calendar events for the day.'),
  previousUserActions: z.string().describe('A description of the user actions taken recently.'),
});
export type AutomateDailyRoutineInput = z.infer<typeof AutomateDailyRoutineInputSchema>;

const AutomateDailyRoutineOutputSchema = z.object({
  suggestedActions: z.string().describe('A list of suggested actions to automate the user routine, such as adjusting lights, temperature, and music, based on learned habits.'),
});
export type AutomateDailyRoutineOutput = z.infer<typeof AutomateDailyRoutineOutputSchema>;

export async function automateDailyRoutine(input: AutomateDailyRoutineInput): Promise<AutomateDailyRoutineOutput> {
  return automateDailyRoutineFlow(input);
}

const automateDailyRoutinePrompt = ai.definePrompt({
  name: 'automateDailyRoutinePrompt',
  input: {schema: AutomateDailyRoutineInputSchema},
  output: {schema: AutomateDailyRoutineOutputSchema},
  prompt: `You are an AI assistant that helps automate daily routines in a smart home.

  Based on the current time ({{{time}}}), day of the week ({{{dayOfWeek}}}), user calendar events ({{{userCalendarEvents}}}), and previous user actions ({{{previousUserActions}}}), suggest a list of actions to automate the user's routine.

  These actions may include adjusting lights, temperature, playing music, starting coffee, etc.  The goal is to make the user's home adapt to their lifestyle without manual adjustments. Be concise.`,
});

const automateDailyRoutineFlow = ai.defineFlow(
  {
    name: 'automateDailyRoutineFlow',
    inputSchema: AutomateDailyRoutineInputSchema,
    outputSchema: AutomateDailyRoutineOutputSchema,
  },
  async input => {
    const {output} = await automateDailyRoutinePrompt(input);
    return output!;
  }
);
