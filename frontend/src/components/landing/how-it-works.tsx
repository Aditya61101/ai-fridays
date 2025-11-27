import { Card } from '@/components/ui/card';
import { Upload, Brain, Zap, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Upload,
    number: '1',
    title: '{User inputs or uploads data}',
    description: 'Start by providing your input or uploading relevant data to the platform.',
  },
  {
    icon: Brain,
    number: '2',
    title: '{AI analyzes, processes, or plans}',
    description: 'Our AI analyzes and processes your data using advanced algorithms.',
  },
  {
    icon: Zap,
    number: '3',
    title: '{System generates insights/recommendations}',
    description: 'Get actionable insights, recommendations, or generated output instantly.',
  },
  {
    icon: CheckCircle,
    number: '4',
    title: '{User takes action or triggers workflow}',
    description: 'Take immediate action or integrate with your existing workflows.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Four simple steps to unlock the power of AI
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="relative">
                <Card className="p-6 bg-card/50 border-border/40 h-full hover:border-border/80 transition-all">
                  <div className="flex flex-col h-full gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 border border-primary/40">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-sm font-semibold text-primary">Step {step.number}</span>
                    </div>
                    <h3 className="font-semibold text-lg">{step.title}</h3>
                    <p className="text-sm text-muted-foreground flex-grow">{step.description}</p>
                  </div>
                </Card>
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border/40 -translate-y-1/2" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
