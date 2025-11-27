import { Card } from '@/components/ui/card';
import { Play } from 'lucide-react';

export default function Demo() {
  return (
    <section id="demo" className="relative py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">See It In Action</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch how {'{PRODUCT_NAME}'} transforms the way you work
          </p>
        </div>

        {/* Video Placeholder */}
        <Card className="mb-12 overflow-hidden bg-card/50 border-border/40">
          <div className="relative aspect-video bg-gradient-to-b from-primary/20 to-background">
            <button className="absolute inset-0 flex items-center justify-center group">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary transition-transform group-hover:scale-110">
                <Play className="h-7 w-7 text-primary-foreground ml-0.5" fill="currentColor" />
              </div>
            </button>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-3">
                <div className="text-4xl">🎬</div>
                <p className="text-sm text-muted-foreground">{'{VIDEO_PLACEHOLDER}'}</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Screenshot Gallery */}
        <div className="grid md:grid-cols-2 gap-6">
          {[1, 2].map((item) => (
            <Card key={item} className="aspect-video bg-card/50 border-border/40 overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center space-y-3">
                  <div className="text-4xl">📸</div>
                  <p className="text-sm text-muted-foreground">{'{Screenshot ' + item + '}'}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
