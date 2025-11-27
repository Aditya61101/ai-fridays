import { Card } from '@/components/ui/card';

export default function About() {
  return (
    <section className="relative py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Company Info */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              About {'{PRODUCT_NAME}'}
            </h2>
            <p className="text-lg text-muted-foreground">{'{Mission statement placeholder}'}</p>
            <p className="text-lg text-muted-foreground">
              We&apos;re building the future of AI-powered solutions, one user at a time.
            </p>
          </div>

          {/* Right: Illustration */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/5 rounded-lg border border-border/40 overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="text-6xl">🚀</div>
                  <p className="text-sm text-muted-foreground">{'{About illustration}'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Members */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold mb-12 text-center">Our Team</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((member) => (
              <Card key={member} className="p-6 bg-card/50 border-border/40 text-center">
                <div className="flex justify-center mb-4">
                  <div className="text-5xl rounded-full">👤</div>
                </div>
                <h4 className="font-semibold">{'{Name}'}</h4>
                <p className="text-sm text-muted-foreground mt-1">{'{Placeholder Title}'}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
