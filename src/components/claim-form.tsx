'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { handleClaimSubmission } from '@/lib/actions';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from "@/hooks/use-toast";
import { Loader2, CheckCircle, ShieldCheck } from 'lucide-react';

const claimFormSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  phone: z.string().min(1, "Phone number is required."),
  amountLost: z.coerce.number().min(1, "Amount lost must be greater than 0."),
  details: z.string().min(20, "Please provide at least 20 characters of details."),
});

type ClaimFormValues = z.infer<typeof claimFormSchema>;

export function ClaimForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const form = useForm<ClaimFormValues>({
    resolver: zodResolver(claimFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      amountLost: 0,
      details: ""
    }
  });

  async function onSubmit(data: ClaimFormValues) {
    setIsLoading(true);
    try {
      const submissionData = {
        ...data,
        scamType: 'Not specified',
        dateOfIncident: new Date().toISOString().split('T')[0],
        platform: 'Not specified',
      };

      const result = await handleClaimSubmission(submissionData);

      if (result.success) {
        setIsSuccess(true);
        toast({
          title: "Intake Complete",
          description: "Your case has been successfully submitted to our forensic team.",
        });
      } else {
        toast({
          variant: "destructive",
          title: "Submission Error",
          description: result.message,
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "System Error",
        description: "A connectivity issue occurred. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  }


  if (isSuccess) {
    return (
      <div className="text-center p-12 bg-white rounded-3xl shadow-premium border border-primary/5">
        <div className="mb-6 flex justify-center">
          <div className="p-4 bg-green-50 rounded-full">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
        </div>
        <h2 className="text-3xl font-extrabold mb-4 text-primary font-headline">Submission Received</h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Your claim is now in our secure intake queue. A senior recovery specialist will review your case and contact you within 24 business hours.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-premium border border-primary/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
        <ShieldCheck className="w-32 h-32 text-primary" />
      </div>

      <div className="mb-10">
        <h2 className="text-3xl font-extrabold text-primary font-headline mb-3">Case Initiation</h2>
        <p className="text-muted-foreground text-lg italic">
          Secure and confidential assessment of your situation.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold text-primary/70">Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" className="py-6 rounded-xl border-primary/10 focus:border-accent focus:ring-accent" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold text-primary/70">Corporate/Personal Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="you@example.com" className="py-6 rounded-xl border-primary/10 focus:border-accent focus:ring-accent" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold text-primary/70">Primary Phone</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="+1 (555) 000-0000" className="py-6 rounded-xl border-primary/10 focus:border-accent focus:ring-accent" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="amountLost"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold text-primary/70">Estimated Loss (USD)</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="50000" className="py-6 rounded-xl border-primary/10 focus:border-accent focus:ring-accent" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="details"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold text-primary/70">Brief Narrative of Loss</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Provide essential details regarding the timeline and nature of the incident."
                    className="rounded-xl border-primary/10 focus:border-accent focus:ring-accent min-h-[120px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="pt-4">
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full text-lg py-8 font-black uppercase tracking-widest rounded-xl shadow-premium hover:shadow-premium-hover transition-all duration-300"
              style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-3 h-6 w-6 animate-spin" />
                  Processing Intake...
                </>
              ) : (
                'Initiate Recovery Protocol'
              )}
            </Button>
            <p className="text-[10px] text-center mt-6 text-muted-foreground uppercase font-bold tracking-tighter">
              End-to-End Encryption Enabled • Verified Secure Connection
            </p>
          </div>
        </form>
      </Form>
    </div>
  );
}
