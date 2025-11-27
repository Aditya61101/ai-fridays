import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: '{This AI tool helped me achieve X}',
    name: '{User Name}',
    role: 'Early User',
    avatar: '👤',
  },
  {
    quote: '{Testimonial about productivity improvement}',
    name: '{User Name}',
    role: 'Beta Tester',
    avatar: '👤',
  },
  {
    quote: '{Testimonial about ROI and impact}',
    name: '{User Name}',
    role: 'Enterprise Customer',
    avatar: '👤',
  },
  {
    quote: '{Testimonial about ease of use}',
    name: '{User Name}',
    role: 'Power User',
    avatar: '👤',
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Trusted by Leaders</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what our users are saying about {'{PRODUCT_NAME}'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, idx) => (
            <Card key={idx} className="p-6 bg-card/50 border-border/40">
              <div className="space-y-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-border/40">
                  <div className="text-2xl">{testimonial.avatar}</div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
