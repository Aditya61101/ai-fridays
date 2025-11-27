export default function Challenge() {
  const challenges = [
    '{Describe the main pain points users face in this domain}',
    '{Explain the inefficiencies of existing solutions}',
    '{Describe why users need an AI-powered approach}',
  ];

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Problem Description */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">The Challenge</h2>
            <p className="text-lg text-muted-foreground">
              Today's solutions fall short. Users struggle with outdated approaches that waste time
              and resources.
            </p>
            <ul className="space-y-4">
              {challenges.map((challenge, idx) => (
                <li key={idx} className="flex gap-3 items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-destructive/20 border border-destructive/40">
                      <span className="text-xs text-destructive font-bold">✕</span>
                    </div>
                  </div>
                  <span className="text-muted-foreground">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Illustration */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-destructive/10 to-destructive/5 rounded-lg border border-border/40 overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-lg bg-destructive/20 border border-destructive/40">
                    <svg
                      className="w-10 h-10 text-destructive"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4v2m0 4v2M6.343 3.665c-.256-.565-1.012-.565-1.268 0l-1.44 3.163a1 1 0 01-.947.638H.958c-.624 0-.933.708-.387 1.122l2.56 1.861a1 1 0 01.388 1.122l-.943 3.161c-.256.565.107 1.097.72 1.097.232 0 .457-.072.644-.21l2.56-1.861a1 1 0 011.268 0l2.56 1.86c.187.139.412.211.644.211.613 0 .976-.532.72-1.097l-.943-3.161a1 1 0 01.388-1.122l2.56-1.86c.546-.415.237-1.122-.387-1.122h-3.35a1 1 0 01-.947-.638l-1.44-3.163z"
                      />
                    </svg>
                  </div>
                  <p className="text-sm text-muted-foreground">{'{PROBLEMS_ILLUSTRATION}'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
