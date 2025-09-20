'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Zap,
  Palette,
  BarChart3,
  Shield,
  Smartphone,
  Code2,
  Users,
  Workflow,
  Brain,
} from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Zap,
      title: 'Instant Form Creation',
      description:
        'Build professional forms in minutes with our intuitive drag-and-drop interface. No coding required.',
      badge: 'Speed',
    },
    {
      icon: Brain,
      title: 'AI-Powered Logic',
      description:
        'Smart conditional logic that adapts your forms based on user responses for better engagement.',
      badge: 'Intelligence',
    },
    {
      icon: Palette,
      title: 'Beautiful Templates',
      description:
        'Choose from 100+ stunning templates or create custom designs that match your brand perfectly.',
      badge: 'Design',
    },
    {
      icon: BarChart3,
      title: 'Real-Time Analytics',
      description:
        'Track form performance, conversion rates, and user behavior with detailed insights dashboard.',
      badge: 'Analytics',
    },
    {
      icon: Workflow,
      title: 'Seamless Integrations',
      description:
        'Connect with 500+ apps including Slack, Mailchimp, Zapier, and your favorite CRM tools.',
      badge: 'Automation',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description:
        'GDPR compliant with SSL encryption, data protection, and secure cloud storage for peace of mind.',
      badge: 'Security',
    },
    {
      icon: Smartphone,
      title: 'Mobile Optimized',
      description:
        'Forms that look perfect on any device with responsive design and touch-friendly interfaces.',
      badge: 'Responsive',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description:
        'Work together with unlimited team members, role-based permissions, and shared workspaces.',
      badge: 'Teamwork',
    },
    {
      icon: Code2,
      title: 'Developer API',
      description:
        'Powerful REST API and webhooks for custom integrations and advanced form functionality.',
      badge: 'Technical',
    },
  ];

  const handleStartBuilding = () => {
    window.location.href = '/signup';
  };

  const handleViewDemo = () => {
    window.location.href = '/demo';
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background via-muted/10 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <Badge
            variant="outline"
            className="mb-6 px-6 py-2 text-sm border-primary/20 bg-primary/5"
          >
            FormFlow Features
          </Badge>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            Everything You Need to
            <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Build Amazing Forms
            </span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            From simple contact forms to complex surveys, FormFlow provides all the tools you need
            to collect data, engage users, and grow your business.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-border/40 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 bg-card/50 backdrop-blur-sm"
              >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-accent/5 to-secondary/8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105" />

                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-500" />

                <CardHeader className="relative z-10 pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="size-14 rounded-2xl bg-gradient-to-br from-primary/15 to-accent/15 flex items-center justify-center group-hover:from-primary/25 group-hover:to-accent/25 transition-all duration-300 group-hover:scale-110">
                      <Icon className="size-7 text-primary group-hover:text-accent transition-colors duration-300" />
                    </div>
                    <Badge
                      variant="secondary"
                      className="text-xs font-medium bg-secondary/80 hover:bg-secondary"
                    >
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative z-10">
                  <CardDescription className="text-base leading-relaxed text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-primary/30 group-hover:via-accent/30 group-hover:to-secondary/30 transition-all duration-500" />
              </Card>
            );
          })}
        </div>

        {/* Enhanced Bottom CTA */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Data Collection?</h3>
            <p className="text-muted-foreground text-lg">
              Join 50,000+ businesses already using FormFlow to create better forms and collect more
              responses.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={handleStartBuilding}
              className="group px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-105 min-w-[200px]"
            >
              Start Building Forms
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </button>

            <button
              onClick={handleViewDemo}
              className="px-8 py-4 border-2 border-border hover:border-primary/50 rounded-xl font-semibold text-lg hover:bg-accent/50 transition-all duration-300 hover:scale-105 min-w-[200px]"
            >
              Watch Demo
            </button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="size-2 bg-primary rounded-full"></div>
              <span>Free 14-day trial</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="size-2 bg-accent rounded-full"></div>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="size-2 bg-secondary rounded-full"></div>
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
