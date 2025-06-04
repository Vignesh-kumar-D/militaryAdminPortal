// src/pages/LoginPage.tsx
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../lib/firebase'; // Adjust path if needed

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../components/ui/form';

interface ErrorCode extends Error {
  code: string;
}
const loginSchema = z.object({
  email: z
    .string()
    .email({ message: 'Invalid Soldier ID format. Must be an email.' }),
  password: z
    .string()
    .min(6, { message: 'Secure Password must be at least 6 characters.' }),
});

type LoginFormData = z.infer<typeof loginSchema>;

const LoginPage = () => {
  const navigate = useNavigate();

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    form.clearErrors('root.firebase');

    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      toast.success('Successfully logged In!');
      navigate('/dashboard');
    } catch (err) {
      const error = err as ErrorCode;
      let errorMessage = 'Login failed. Please check your credentials.';
      let fieldToFocus: 'email' | 'password' | 'root.firebase' =
        'root.firebase';

      switch (error.code) {
        case 'auth/user-not-found':
        case 'auth/wrong-password':
        case 'auth/invalid-credential':
          errorMessage = 'Invalid Soldier ID or Secure Password.';
          fieldToFocus = 'password';
          break;
        case 'auth/invalid-email':
          errorMessage = 'Soldier ID format is invalid.';
          fieldToFocus = 'email';
          break;
        case 'auth/too-many-requests':
          errorMessage = 'Too many login attempts. Please try again later.';
          fieldToFocus = 'root.firebase';
          break;
        case 'auth/network-request-failed':
          errorMessage =
            'Network error. Please check your internet connection.';
          fieldToFocus = 'root.firebase';
          break;
        default:
          errorMessage = 'An unexpected error occurred. Please try again.';
          break;
      }
      toast.error('Firebase Auth Error', { description: error.message });

      form.setError(
        fieldToFocus,
        {
          type: 'server',
          message: errorMessage,
        },
        {
          shouldFocus: true,
        }
      );
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-8 relative overflow-hidden">
      {/* Background Gradients for Modern Feel */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-2/3 h-2/3 bg-primary rounded-full filter blur-3xl opacity-20 animate-blob mix-blend-multiply"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-accent rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000 mix-blend-multiply"></div>
      </div>

      {/* Login Card - Adjusted for a more compact dialog size */}
      <Card className="w-full max-w-sm sm:max-w-md z-10 p-4 shadow-2xl backdrop-blur-md bg-card/80 border-border transition-all duration-500 ease-in-out transform hover:scale-[1.01]">
        <CardHeader className="text-center mb-4">
          {' '}
          {/* Reduced bottom margin */}
          <CardTitle className="text-3xl sm:text-4xl font-heading text-primary font-bold tracking-tight leading-tight">
            {' '}
            {/* Reduced font size */}
            Commander Login
          </CardTitle>
          <CardDescription className="text-sm sm:text-base text-muted-foreground font-body mt-2">
            {' '}
            {/* Reduced font size */}
            Access your secure Command Center.
          </CardDescription>
        </CardHeader>

        <CardContent>
          {form.formState.errors.root?.firebase && (
            <div className="bg-destructive/10 border border-destructive text-destructive px-3 py-2 rounded-md mb-4 text-sm font-body animate-fade-in">
              {' '}
              {/* Reduced padding and margin */}
              {form.formState.errors.root.firebase.message}
            </div>
          )}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {' '}
              {/* Reduced vertical space */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-body text-sm text-foreground">
                      {' '}
                      {/* Reduced font size */}
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="e.g., commander.alpha@army.mil"
                        {...field}
                        className="font-body text-sm py-2.5 px-3 border-input focus:border-primary focus:ring-primary/50 transition-all duration-200" // Reduced input height and padding
                      />
                    </FormControl>
                    <FormMessage className="font-body text-xs text-destructive" />{' '}
                    {/* Reduced font size */}
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-body text-sm text-foreground">
                      {' '}
                      {/* Reduced font size */}
                      Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        {...field}
                        className="font-body text-sm py-2.5 px-3 border-input focus:border-primary focus:ring-primary/50 transition-all duration-200" // Reduced input height and padding
                      />
                    </FormControl>
                    <FormMessage className="font-body text-xs text-destructive" />{' '}
                    {/* Reduced font size */}
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full py-3 sm:py-3.5 font-heading tracking-wide text-base sm:text-lg mt-6 bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background transition-colors duration-200" // Reduced button height and font size, reduced top margin
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? 'Submitting...' : 'Submit'}
              </Button>
            </form>
          </Form>

          <div className="mt-6 text-center">
            {' '}
            {/* Reduced top margin */}
            <p className="text-xs text-muted-foreground font-body">
              {' '}
              {/* Reduced font size */}
              Need access? Contact your superior officer for authorization.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
