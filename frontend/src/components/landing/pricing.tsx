import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: '0',
    description: 'Perfect for getting started',
    features: ['{Feature 1}', '{Feature 2}', '{Feature 3}', '{Limited API calls}'],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '29',
    description: 'For power users',
    features: [
      '{Feature 1}',
      '{Feature 2}',
      '{Feature 3}',
      '{Feature 4}',
      '{Unlimited API calls}',
      '{Priority support}',
    ],
    cta: 'Start Free Trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large teams',
    features: [
      '{All Pro features}',
      '{Dedicated account manager}',
      '{Custom integrations}',
      '{SLA guarantee}',
      '{Advanced analytics}',
      '{On-premise deployment}',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section className="relative py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <Card
              key={idx}
              className={`p-8 relative overflow-hidden transition-all ${
                plan.highlighted
                  ? 'bg-primary/10 border-primary/50 ring-2 ring-primary/30'
                  : 'bg-card/50 border-border/40'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                  Popular
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{plan.description}</p>
                </div>

                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  {plan.price !== 'Custom' && <span className="text-muted-foreground">/month</span>}
                </div>

                <Button
                  className={`w-full rounded-lg ${
                    plan.highlighted
                      ? ''
                      : 'bg-secondary hover:bg-secondary/80 text-secondary-foreground'
                  }`}
                  variant={plan.highlighted ? 'default' : 'secondary'}
                >
                  {plan.cta}
                </Button>

                <div className="border-t border-border/40 pt-6 space-y-3">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
