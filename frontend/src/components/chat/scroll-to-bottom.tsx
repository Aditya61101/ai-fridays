import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ScrollToBottomButtonProps {
  onClick: () => void;
}

export default function ScrollToBottomButton({ onClick }: ScrollToBottomButtonProps) {
  return (
    <div className="fixed bottom-28 right-8 animate-in slide-in-from-top-2 duration-300">
      <Button
        onClick={onClick}
        size="icon"
        variant="outline"
        className={cn(
          'rounded-full shadow-lg hover:shadow-xl transition-all',
          'border-border bg-background hover:bg-muted'
        )}
        aria-label="Scroll to bottom"
      >
        <ChevronDown className="h-4 w-4" />
      </Button>
    </div>
  );
}
