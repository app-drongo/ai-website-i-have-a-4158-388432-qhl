'use client';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Star, Users, Zap } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Hero() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ACTION_PLACEHOLDER_START
  const handlePrimaryAction = () => {
    router.push('/'); // Start building forms
  };

  const handleSecondaryAction = () => {
    setIsModalOpen(true); // Open demo video
  };

  const handleBadgeAction = () => {
    router.push('/'); // View AI features
  };
  // ACTION_PLACEHOLDER_END

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-20 left-20 size-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 size-96 bg-accent/15 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-28">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <button
              onClick={handleBadgeAction}
              className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary hover:bg-primary/20 transition-colors cursor-pointer"
              data-action-type="badge-link"
            >
              <Zap className="size-4 mr-2" />
              New: AI-Powered Form Intelligence
              <ArrowRight className="ml-2 size-4" />
            </button>
          </div>

          {/* Main Content */}
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
              Create Beautiful Forms
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                That Actually Convert
              </span>
              In Minutes, Not Hours
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Build stunning, responsive forms with drag-and-drop simplicity. Collect responses,
              analyze data, and automate workflows—all without writing a single line of code.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                size="lg"
                className="group text-base px-8"
                onClick={handlePrimaryAction}
                data-action-type="primary-cta"
              >
                Build Your First Form
                <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group text-base px-8"
                onClick={handleSecondaryAction}
                data-action-type="secondary-cta"
              >
                <Play className="mr-2 size-5 transition-transform group-hover:scale-110" />
                See FormFlow in Action
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="size-8 rounded-full bg-gradient-to-br from-primary to-primary/60 border-2 border-background" />
                  <div className="size-8 rounded-full bg-gradient-to-br from-accent to-accent/60 border-2 border-background" />
                  <div className="size-8 rounded-full bg-gradient-to-br from-secondary to-secondary/60 border-2 border-background" />
                </div>
                <span className="ml-2">
                  <Users className="inline size-4 mr-1" />
                  25,000+ form creators
                </span>
              </div>

              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-4 fill-primary text-primary" />
                ))}
                <span className="ml-2">4.8/5 from 2,400+ reviews</span>
              </div>
            </div>
          </div>

          {/* Hero Form Preview */}
          <div className="mt-16 relative">
            <div className="relative mx-auto max-w-4xl">
              <div className="rounded-2xl border bg-card p-6 shadow-2xl">
                <div className="rounded-xl bg-gradient-to-br from-muted/30 to-muted/50 p-8">
                  {/* Form Preview */}
                  <div className="bg-background rounded-lg p-6 space-y-4">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-semibold text-foreground">
                        Customer Feedback Form
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="size-2 bg-primary rounded-full animate-pulse" />
                        Live Preview
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="h-4 bg-muted rounded w-3/4" />
                      <div className="h-10 bg-muted/50 rounded border-2 border-dashed border-primary/30" />
                      <div className="h-4 bg-muted rounded w-1/2" />
                      <div className="h-24 bg-muted/50 rounded border-2 border-dashed border-accent/30" />
                      <div className="flex justify-end">
                        <div className="h-10 w-32 bg-primary/20 rounded" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 size-8 bg-primary rounded-full animate-pulse flex items-center justify-center">
                <Zap className="size-4 text-background" />
              </div>
              <div className="absolute -bottom-4 -right-4 size-6 bg-accent rounded-full animate-pulse delay-1000" />
              <div className="absolute top-1/2 -right-8 size-4 bg-secondary rounded-full animate-pulse delay-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
