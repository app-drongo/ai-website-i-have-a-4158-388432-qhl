'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Users,
  Headphones,
  Calendar,
  Zap,
  Shield,
  Rocket,
} from 'lucide-react';

export default function Contact() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  // ACTION_PLACEHOLDER_START
  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    // Process form submission and redirect to success
    console.log('FormFlow contact submitted:', formData);
    router.push('/');
  };

  const handleStartBuilding = () => {
    router.push('/');
  };

  const handleScheduleDemo = () => {
    router.push('/');
  };
  // ACTION_PLACEHOLDER_END

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactMethods = [
    {
      icon: MessageSquare,
      title: 'Live Support Chat',
      description: 'Get instant help with form building',
      contact: 'Average response: 2 minutes',
      action: 'Start Chat',
      highlight: 'Most Popular',
    },
    {
      icon: Mail,
      title: 'Technical Support',
      description: 'Complex integrations & custom solutions',
      contact: 'support@formflow.io',
      action: 'Send Email',
    },
    {
      icon: Phone,
      title: 'Enterprise Sales',
      description: 'Custom plans & volume discounts',
      contact: '+1 (555) FORMFLOW',
      action: 'Schedule Call',
    },
  ];

  const supportTiers = [
    {
      tier: 'Startup Plan',
      response: '24-48 hours',
      channels: 'Email, Chat',
      features: ['Form builder support', 'Integration help', 'Best practices guide'],
    },
    {
      tier: 'Business Plan',
      response: '4-8 hours',
      channels: 'Priority chat, Email, Phone',
      features: ['Advanced automation help', 'Custom branding support', 'Analytics guidance'],
    },
    {
      tier: 'Enterprise Plan',
      response: '1-2 hours',
      channels: 'Dedicated success manager',
      features: ['White-glove onboarding', 'Custom integrations', '24/7 priority support'],
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-accent/10 to-secondary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-6 py-2 bg-primary/10 border-primary/20">
            <Headphones className="size-4 mr-2" />
            Support & Contact
          </Badge>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Need Help Building
            <span className="block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Amazing Forms?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Our FormFlow experts are here to help you create powerful forms that convert. From
            simple contact forms to complex multi-step workflows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={handleStartBuilding} size="lg" className="px-8 py-6 text-lg group">
              <Rocket className="mr-2 size-5 transition-transform group-hover:translate-y-[-2px]" />
              Start Building Now
            </Button>
            <Button
              onClick={handleScheduleDemo}
              variant="outline"
              size="lg"
              className="px-8 py-6 text-lg"
            >
              <Calendar className="mr-2 size-5" />
              Book a Demo
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-border/50 shadow-lg bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl flex items-center gap-3">
                  <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Send className="size-5 text-primary" />
                  </div>
                  Get FormFlow Support
                </CardTitle>
                <CardDescription className="text-base">
                  Tell us about your form building needs and we'll help you create the perfect
                  solution.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmitForm} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold mb-3 text-foreground"
                      >
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-4 border border-border rounded-xl bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200"
                        placeholder="Sarah Johnson"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold mb-3 text-foreground"
                      >
                        Work Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-4 border border-border rounded-xl bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200"
                        placeholder="sarah@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-semibold mb-3 text-foreground"
                    >
                      Company & Role
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-4 border border-border rounded-xl bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200"
                      placeholder="TechCorp Inc. - Marketing Manager"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold mb-3 text-foreground"
                    >
                      What forms do you want to build? *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-4 border border-border rounded-xl bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200 resize-none"
                      placeholder="I need help creating lead capture forms for our SaaS product. Looking for multi-step forms with conditional logic and CRM integration..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full text-lg py-6 group bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
                  >
                    Send Message & Get Help
                    <Send className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Methods & Support Info */}
          <div className="space-y-6">
            {/* Quick Contact */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Zap className="size-5 text-primary" />
                Quick Support
              </h3>
              <div className="space-y-3">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <Card
                      key={index}
                      className="border-border/50 hover:border-primary/30 transition-all duration-200 cursor-pointer group bg-card/30 backdrop-blur-sm"
                    >
                      <CardContent className="p-5">
                        <div className="flex items-start gap-4">
                          <div className="size-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-200">
                            <Icon className="size-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-semibold">{method.title}</h4>
                              {method.highlight && (
                                <Badge
                                  variant="secondary"
                                  className="text-xs bg-primary/10 text-primary"
                                >
                                  {method.highlight}
                                </Badge>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">
                              {method.description}
                            </p>
                            <p className="text-sm font-medium text-primary">{method.contact}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Support Tiers */}
            <Card className="border-border/50 bg-card/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Shield className="size-5 text-primary" />
                  Support Response Times
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {supportTiers.map((tier, index) => (
                  <div
                    key={index}
                    className="p-4 border border-border/30 rounded-lg bg-background/20"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-sm">{tier.tier}</h4>
                      <Badge variant="outline" className="text-xs">
                        {tier.response}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">{tier.channels}</p>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <div className="size-1 rounded-full bg-primary/60" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="border-border/50 bg-card/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                  <Clock className="size-5 text-primary" />
                  Support Hours
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Live Chat</span>
                    <span className="font-medium">24/7 Available</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Phone Support</span>
                    <span>Mon-Fri 6AM-6PM PST</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Email Support</span>
                    <span>Always Open</span>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/20">
                  <p className="text-sm font-medium flex items-center gap-2 text-primary">
                    <Users className="size-4" />
                    Enterprise customers get dedicated success managers
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
