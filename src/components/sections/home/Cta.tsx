'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Sparkles, Users, Zap, Shield } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Cta() {
  const router = useRouter();

  // ACTION_PLACEHOLDER_START
  const handlePrimaryAction = () => {
    router.push('/'); // Start building forms
  };
  const handleSecondaryAction = () => {
    router.push('/'); // Schedule demo
  };
  // ACTION_PLACEHOLDER_END

  const stats = [
    { value: '25K+', label: 'Form Creators', icon: Users },
    { value: '99.9%', label: 'Uptime', icon: Shield },
    { value: '500+', label: 'Templates', icon: Zap },
    { value: '4.8/5', label: 'User Rating', icon: Sparkles },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Revolutionary Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      <div className="absolute top-0 left-1/4 size-96 bg-primary/20 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-0 right-1/4 size-96 bg-accent/20 rounded-full blur-3xl opacity-20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main CTA */}
        <Card className="border-primary/20 bg-background/80 backdrop-blur-sm shadow-2xl shadow-primary/10 overflow-hidden hover:shadow-primary/20 transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

          <CardContent className="relative p-12 lg:p-16">
            <div className="text-center max-w-4xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-8 hover:bg-primary/20 transition-colors">
                <Sparkles className="size-4 mr-2" />
                Free Trial Available
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                Ready to Build Your
                <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Perfect Form?
                </span>
              </h2>

              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
                Join 25,000+ form creators who trust FormFlow for their data collection needs. Start
                building professional forms in minutes with our drag-and-drop builder.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <Button
                  size="lg"
                  className="group text-base px-8 py-4 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transition-all duration-300"
                  onClick={handlePrimaryAction}
                >
                  Build Your First Form
                  <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base px-8 py-4 border-primary/20 hover:bg-primary/5 hover:border-primary/40 transition-all duration-300"
                  onClick={handleSecondaryAction}
                >
                  See FormFlow in Action
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="text-center mb-12">
                <p className="text-sm text-muted-foreground mb-6">
                  Trusted by businesses, educators, and creators worldwide
                </p>
                <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                  {/* Form builder industry logos placeholders */}
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="h-8 w-24 bg-gradient-to-r from-muted to-muted/50 rounded opacity-50 hover:opacity-70 transition-opacity"
                    />
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="text-center group">
                      <div className="size-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300">
                        <Icon className="size-6 text-primary group-hover:scale-110 transition-transform" />
                      </div>
                      <div className="text-2xl lg:text-3xl font-bold text-foreground mb-1 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Bottom Section */}
        <div className="text-center mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="space-y-2 group">
              <div className="size-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                <div className="size-6 rounded-full bg-gradient-to-r from-primary to-accent" />
              </div>
              <h3 className="font-semibold">Free Forever Plan</h3>
              <p className="text-sm text-muted-foreground">
                Start building forms today, no credit card required
              </p>
            </div>

            <div className="space-y-2 group">
              <div className="size-12 mx-auto rounded-full bg-accent/10 flex items-center justify-center mb-3 group-hover:bg-accent/20 transition-colors">
                <Shield className="size-6 text-accent" />
              </div>
              <h3 className="font-semibold">Enterprise Security</h3>
              <p className="text-sm text-muted-foreground">
                GDPR compliant with 256-bit SSL encryption
              </p>
            </div>

            <div className="space-y-2 group">
              <div className="size-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                <Sparkles className="size-6 text-primary" />
              </div>
              <h3 className="font-semibold">AI-Powered Forms</h3>
              <p className="text-sm text-muted-foreground">
                Smart logic and automated workflows included
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
