import { Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface EmptyStateProps {
  onPromptClick?: (prompt: string) => void;
  className?: string;
}

const EXAMPLE_PROMPTS = [
  {
    title: 'Analyze this document',
    description: 'Ask me to review and summarize files',
    icon: '📄',
  },
  {
    title: 'Get creative ideas',
    description: 'Brainstorm and explore new concepts',
    icon: '💡',
  },
  {
    title: 'Write something',
    description: 'Help me craft content and copy',
    icon: '✍️',
  },
  {
    title: 'Answer questions',
    description: 'Get instant answers on any topic',
    icon: '❓',
  },
];

export default function EmptyState({ onPromptClick, className }: EmptyStateProps) {
  return (
    <div className={cn('flex flex-col items-center justify-center h-full px-4', className)}>
      {/* Header Section */}
      <div className="flex flex-col items-center gap-3 mb-12">
        <div className="p-3 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30">
          <Sparkles className="w-6 h-6 text-primary" />
        </div>
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-foreground">Start a conversation</h1>
          <p className="text-base text-muted-foreground max-w-md">
            Explore what's possible with AI assistance. Type a message or try one of the suggestions
            below.
          </p>
        </div>
      </div>

      {/* Example Prompts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-2xl">
        {EXAMPLE_PROMPTS.map((prompt, index) => (
          <button
            key={index}
            onClick={() => onPromptClick?.(prompt.title)}
            className={cn(
              'group relative p-4 rounded-lg border border-border bg-card/50 hover:bg-card',
              'transition-all duration-300 ease-out',
              'hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10',
              'text-left cursor-pointer overflow-hidden'
            )}
          >
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Content */}
            <div className="relative z-10 space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xl">{prompt.icon}</span>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {prompt.title}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground group-hover:text-muted-foreground/80 transition-colors">
                {prompt.description}
              </p>
            </div>

            {/* Arrow indicator */}
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <svg
                className="w-4 h-4 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </button>
        ))}
      </div>

      {/* Footer hint */}
      <div className="mt-12 pt-8 border-t border-border/50 text-center">
        <p className="text-sm text-muted-foreground">Or upload a file above to get started</p>
      </div>
    </div>
  );
}
