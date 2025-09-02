// components/ui/SubmitButton.tsx

'use client';

import { useFormStatus } from 'react-dom';
import Button from './Button';
export function SubmitButton({ children, ...props }: React.ComponentProps<typeof Button>) {
  const { pending } = useFormStatus();
  return (
    <Button {...props} type="submit" disabled={pending}>
      {pending ? 'Envoi…' : children}
    </Button>
  );
}
