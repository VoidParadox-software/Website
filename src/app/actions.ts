
'use server';

import {
  interpretVoiceCommand,
  type InterpretVoiceCommandOutput,
} from '@/ai/flows/interpret-voice-commands';
import {z} from 'zod';

const commandSchema = z.string().min(1, 'Command cannot be empty.');

/**
 * A server action to interpret a user's voice command text.
 * It validates the input, calls the Genkit AI flow, and returns the result or an error.
 * @param prevState The previous state of the form action.
 * @param formData The form data submitted by the user.
 * @returns An object containing the AI's interpretation, any errors, and the original input.
 */
export async function getCommandAction(
  prevState: any,
  formData: FormData
): Promise<{
  data: InterpretVoiceCommandOutput | null;
  error: string | null;
  input: string;
}> {
  const command = formData.get('command') as string;
  const validatedCommand = commandSchema.safeParse(command);

  if (!validatedCommand.success) {
    return {
      data: null,
      error: validatedCommand.error.errors[0].message,
      input: command,
    };
  }

  try {
    const result = await interpretVoiceCommand({
      command: validatedCommand.data,
      userId: 'demo-user-123',
    });
    return {data: result, error: null, input: command};
  } catch (e) {
    console.error(e);
    return {data: null, error: 'Failed to interpret command.', input: command};
  }
}
