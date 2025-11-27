import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contact" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
            Ready to experience {'{PRODUCT_NAME}'}?
          </h2>
          <p className="text-xl text-muted-foreground">
            {'{Insert final motivator sentence here}'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="rounded-full text-base">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full text-base bg-transparent">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
