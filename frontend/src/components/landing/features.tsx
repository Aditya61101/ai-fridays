const featureBlocks = [
  {
    id: 1,
    title: '{FEATURE_TITLE_A}',
    description: '{Explain benefit in any domain}',
    position: 'left',
    icon: '🎯',
  },
  {
    id: 2,
    title: '{FEATURE_TITLE_B}',
    description: '{Explain how users interact with it}',
    position: 'right',
    icon: '⚡',
  },
  {
    id: 3,
    title: '{FEATURE_TITLE_C}',
    description: '{Explain what AI improves here}',
    position: 'left',
    icon: '🚀',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Powerful Features</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to succeed, powered by advanced AI technology
          </p>
        </div>

        <div className="space-y-24">
          {featureBlocks.map((feature) => (
            <div
              key={feature.id}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                feature.position === 'right' ? 'md:[&>:first-child]:order-2' : ''
              }`}
            >
              {/* Text Content */}
              <div className="space-y-6">
                <div className="text-5xl">{feature.icon}</div>
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight">{feature.title}</h3>
                <p className="text-lg text-muted-foreground">{feature.description}</p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    {'{Benefit point 1}'}
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    {'{Benefit point 2}'}
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    {'{Benefit point 3}'}
                  </li>
                </ul>
              </div>

              {/* Image Placeholder */}
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/5 rounded-lg border border-border/40 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-24 h-24 rounded-lg bg-primary/20 border border-primary/40">
                        <span className="text-4xl">{feature.icon}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {'{Feature image}' + feature.id}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
