import { Card } from '@/components/ui/card';
import { Zap, Brain, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: '{FEATURE_1_TITLE}',
    description: '{FEATURE_1_DESCRIPTION}',
  },
  {
    icon: Zap,
    title: '{FEATURE_2_TITLE}',
    description: '{FEATURE_2_DESCRIPTION}',
  },
  {
    icon: Sparkles,
    title: '{FEATURE_3_TITLE}',
    description: '{FEATURE_3_DESCRIPTION}',
  },
];

export default function Solution() {
  return (
    <section className="relative py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Our AI-Powered Solution</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {'{Explain how the product uses AI to solve the problem}'}{' '}
            {'{Highlight automation, intelligence, and personalization}'}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <Card
                key={idx}
                className="p-6 bg-card/50 border-border/40 hover:border-border/80 transition-all hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/20 border border-primary/40">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
