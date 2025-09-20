'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Zap, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

export default function Pricing() {
  const router = useRouter();

  // ACTION_PLACEHOLDER_START
  const handleStarterPlan = () => {
    router.push('/');
  };
  const handleProfessionalPlan = () => {
    router.push('/');
  };
  const handleEnterprisePlan = () => {
    router.push('/');
  };
  const handleScheduleDemo = () => {
    router.push('/');
  };
  // ACTION_PLACEHOLDER_END

  const plans = [
    {
      name: 'Free Builder',
      description: "Perfect for testing FormFlow's powerful form creation",
      price: 'Free',
      period: '',
      badge: null,
      features: [
        'Up to 5 active forms',
        '100 responses per month',
        'Basic form templates',
        'Email notifications',
        'Standard form fields',
        'Mobile-responsive forms',
      ],
      cta: 'Start Building Forms',
      popular: false,
      action: handleStarterPlan,
    },
    {
      name: 'Pro Builder',
      description: 'Advanced form building for growing businesses',
      price: '$19',
      period: '/month',
      badge: 'Most Popular',
      features: [
        'Unlimited forms & responses',
        'Advanced logic & branching',
        'Custom themes & branding',
        'Payment integrations',
        'Advanced analytics dashboard',
        'Webhook integrations',
        'File upload capabilities',
        'Priority email support',
      ],
      cta: 'Upgrade to Pro',
      popular: true,
      action: handleProfessionalPlan,
    },
    {
      name: 'Enterprise',
      description: 'Complete form automation for large organizations',
      price: 'Custom',
      period: '',
      badge: 'White Glove',
      features: [
        'Everything in Pro Builder',
        'Advanced security & compliance',
        'Custom integrations & API',
        'Dedicated success manager',
        'SSO & team management',
        'Custom form workflows',
        '24/7 phone support',
        'On-premise deployment option',
      ],
      cta: 'Contact Sales Team',
      popular: false,
      action: handleEnterprisePlan,
    },
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Revolutionary Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/10 to-secondary/5" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge
            variant="outline"
            className="mb-6 px-6 py-2 bg-card/50 backdrop-blur-sm border-primary/20"
          >
            <Sparkles className="size-4 mr-2 text-primary" />
            FormFlow Pricing
          </Badge>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            Build Forms That
            <span className="block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Convert & Engage
            </span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-10">
            From simple contact forms to complex multi-step surveys, FormFlow adapts to your needs.
            Start free and scale as you grow.
          </p>

          {/* Revolutionary Billing Toggle */}
          <div className="inline-flex items-center p-1 bg-card/80 backdrop-blur-sm rounded-xl border border-primary/10 shadow-lg">
            <button className="px-6 py-3 text-sm font-medium bg-primary text-primary-foreground rounded-lg shadow-sm transition-all">
              Monthly Billing
            </button>
            <button className="px-6 py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Annual Billing
              <Badge variant="secondary" className="ml-2 text-xs bg-accent/20">
                Save 30%
              </Badge>
            </button>
          </div>
        </div>

        {/* Revolutionary Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={cn(
                'relative overflow-hidden transition-all duration-500 hover:shadow-2xl backdrop-blur-sm',
                plan.popular
                  ? 'border-primary/30 shadow-2xl shadow-primary/20 scale-105 bg-card/90'
                  : 'border-border/20 hover:border-primary/30 bg-card/60 hover:bg-card/80'
              )}
            >
              {/* Revolutionary Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Badge className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-6 py-2 shadow-lg">
                    <Star className="size-4 mr-2 fill-current" />
                    {plan.badge}
                  </Badge>
                </div>
              )}

              {/* Revolutionary Background Gradient */}
              {plan.popular && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10" />
              )}

              <CardHeader className="relative text-center pb-8 pt-8">
                {plan.badge && !plan.popular && (
                  <Badge
                    variant="outline"
                    className="mb-4 mx-auto w-fit bg-secondary/20 border-secondary/30"
                  >
                    {plan.badge}
                  </Badge>
                )}

                <CardTitle className="text-2xl mb-3 font-bold">{plan.name}</CardTitle>
                <CardDescription className="text-base mb-8 text-muted-foreground">
                  {plan.description}
                </CardDescription>

                <div className="flex items-end justify-center gap-1 mb-2">
                  <span
                    className={cn(
                      'text-5xl font-bold',
                      plan.popular
                        ? 'bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent'
                        : ''
                    )}
                  >
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-muted-foreground mb-2 text-lg">{plan.period}</span>
                  )}
                </div>
              </CardHeader>

              <CardContent className="relative space-y-8">
                {/* Revolutionary Features List */}
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-4">
                      <div
                        className={cn(
                          'size-6 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm',
                          plan.popular
                            ? 'bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30'
                            : 'bg-primary/10 border border-primary/20'
                        )}
                      >
                        <Check className="size-3 text-primary font-bold" />
                      </div>
                      <span className="text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Revolutionary CTA Button */}
                <Button
                  onClick={plan.action}
                  className={cn(
                    'w-full text-base py-6 font-semibold transition-all duration-300 shadow-lg',
                    plan.popular
                      ? 'bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-primary/30'
                      : 'hover:shadow-xl'
                  )}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.popular && <Zap className="size-4 mr-2" />}
                  {plan.cta}
                </Button>

                {plan.name === 'Pro Builder' && (
                  <p className="text-center text-sm text-muted-foreground">
                    14-day free trial • No credit card required • Cancel anytime
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Revolutionary Bottom Section */}
        <div className="text-center mt-20 max-w-3xl mx-auto">
          <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-8 border border-primary/10 shadow-xl">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Need Custom Form Solutions?
            </h3>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              Enterprise organizations trust FormFlow for mission-critical form workflows. Let's
              build something amazing together with custom integrations and dedicated support.
            </p>
            <Button
              onClick={handleScheduleDemo}
              variant="outline"
              size="lg"
              className="px-8 py-4 text-base font-semibold hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
            >
              <Sparkles className="size-4 mr-2" />
              Schedule Demo Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
