
'use client';

import { getCommandAction } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Mic, Send, Bot } from 'lucide-react';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';

/**
 * @file This file defines the Voice Demo section of the landing page,
 * an interactive component that simulates the AI voice command interpreter.
 */

const initialState = {
  data: null,
  error: null,
  input: '',
};

/**
 * A submit button that shows a loading spinner when the form is pending.
 * It uses the `useFormStatus` hook to track the submission state.
 * @returns {JSX.Element} The rendered submit button.
 */
function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="icon" aria-label="Send command" disabled={pending}>
      {pending ? <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-foreground"></div> : <Send />}
    </Button>
  );
}

/**
 * The VoiceDemo component provides an interactive demonstration of the Cierra AI.
 * Users can type a command, submit it, and see the AI's interpreted action and response.
 * It uses a Next.js Server Action (`getCommandAction`) to process the command.
 * @returns {JSX.Element} The rendered voice demo section.
 */
export default function VoiceDemo() {
  const [state, formAction] = useActionState(getCommandAction, initialState);

  const exampleCommands = [
    'Turn on the living room lights',
    'Play some music',
    'Set an alarm for 7:30 AM',
  ];

  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 sm:p-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
                Talk to Your Home
              </h2>
              <p className="text-lg text-muted-foreground">
                Cierra understands you. Our AI interprets natural language to
                execute commands seamlessly. Give it a try by typing a command
                below.
              </p>
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">Try these examples:</p>
                <div className="flex flex-wrap gap-2">
                  {exampleCommands.map((cmd) => (
                    <Button key={cmd} variant="outline" size="sm" className="bg-background/50"
                      onClick={() => {
                        const input = document.getElementById('command-input') as HTMLInputElement;
                        if (input) {
                          input.value = cmd;
                        }
                      }}>
                      &quot;{cmd}&quot;
                    </Button>
                  ))}
                </div>
              </div>
            </div>
            <Card className="bg-background/70 backdrop-blur-sm border-primary/20 shadow-lg shadow-primary/10">
              <CardHeader>
                <CardTitle className="font-headline text-2xl flex items-center gap-3">
                  <Mic className="text-primary glow-shadow" /> Cierra Voice Interpreter
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form action={formAction} className="space-y-4">
                  <div className="flex gap-2">
                    <Input
                      id="command-input"
                      name="command"
                      placeholder="e.g. 'Play music by Eminem'"
                      className="text-base"
                      defaultValue={state.input}
                    />
                    <SubmitButton />
                  </div>
                  {state.error && <p className="text-sm text-destructive">{state.error}</p>}
                </form>
                {(state.data || useFormStatus().pending) && (
                  <div className="mt-6">
                    <div className="mt-2 p-4 rounded-md bg-muted/50">
                      {useFormStatus().pending ? (
                          <div className="flex items-center gap-3">
                              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary"></div>
                              <span className="text-muted-foreground">Cierra is thinking...</span>
                          </div>
                      ) : state.data ? (
                        <div className="flex items-start gap-3">
                          <Bot className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <p className="text-foreground leading-relaxed">{state.data.response}</p>
                        </div>
                      ) : null}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
