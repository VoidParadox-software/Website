'use server';

/**
 * @fileOverview Interprets voice commands to control the smart home.
 *
 * - interpretVoiceCommand - A function that takes voice input and returns an action to perform.
 * - InterpretVoiceCommandInput - The input type for the interpretVoiceCommand function.
 * - InterpretVoiceCommandOutput - The return type for the interpretVoiceCommand function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const InterpretVoiceCommandInputSchema = z.object({
  command: z.string().describe('The voice command to interpret.'),
  userId: z.string().describe('The ID of the user making the request.'),
});
export type InterpretVoiceCommandInput = z.infer<
  typeof InterpretVoiceCommandInputSchema
>;

const InterpretVoiceCommandOutputSchema = z.object({
  action: z.string().describe('The action to perform (e.g., turnOnLights, playMusic).'),
  parameters: z.string().describe('The parameters for the action as a JSON string.'),
  response: z.string().describe('A natural language response to the user about the action being taken.'),
});
export type InterpretVoiceCommandOutput = z.infer<
  typeof InterpretVoiceCommandOutputSchema
>;

export async function interpretVoiceCommand(
  input: InterpretVoiceCommandInput
): Promise<InterpretVoiceCommandOutput> {
  return interpretVoiceCommandFlow(input);
}

const interpretVoiceCommandPrompt = ai.definePrompt({
  name: 'interpretVoiceCommandPrompt',
  input: {schema: InterpretVoiceCommandInputSchema},
  output: {schema: InterpretVoiceCommandOutputSchema},
  prompt: `You are a smart home AI assistant named Cierra. You interpret voice commands from users and determine the appropriate action to take. You then formulate a concise, natural language response confirming the action. **You must respond in the same language as the user's command.**

  User ID: {{{userId}}}

  The user's command is: {{{command}}}

  Determine the best action to take and any parameters required. Return the action and parameters in a JSON format. The parameters should be a JSON string.
  Also, create a friendly, conversational response to the user confirming what you've done.

  For example, if the command is "turn on the living room lights", the action should be "turnOnLights" and the parameters should be '{ "room": "living room" }'. The response should be "Sure, I'm turning on the lights in the living room."

  Another example, if the command is "play music", the action should be "playMusic" and the parameters should be an empty JSON string '{}'. The response could be "Okay, playing some music for you." If a user specifies artist/song, action should still be playMusic and parameters should include the artist/song, for example '{ "artist": "Eminem", "song": "Lose Yourself" }'. The response should be "Now playing 'Lose Yourself' by Eminem.". Do not include the user id in the output.

  If the user asks about the weather, then action should be getWeather and parameters should be '{}'. If the user specifies city, then action should be getWeather and the parameter should be '{ "city": "city name" }'. The response should be "Let me check the weather for you."

  If the user is asking to set an alarm or reminder, the action should be setAlarm and parameters should specify the time and a message, for example '{ "time": "7:00 AM", "message": "wake up" }'. The response should be "I've set an alarm for you at 7:00 AM."

  Here are some possible actions:
  - turnOnLights
  - turnOffLights
  - playMusic
  - pauseMusic
  - stopMusic
  - setAlarm
  - getWeather
  - adjustTemperature
  - lockDoors
  - unlockDoors
  - startCoffee
  - stopCoffee
  - openBlinds
  - closeBlinds

  Return the JSON:`,
});

const interpretVoiceCommandFlow = ai.defineFlow(
  {
    name: 'interpretVoiceCommandFlow',
    inputSchema: InterpretVoiceCommandInputSchema,
    outputSchema: InterpretVoiceCommandOutputSchema,
  },
  async input => {
    const {output} = await interpretVoiceCommandPrompt(input);
    return output!;
  }
);
