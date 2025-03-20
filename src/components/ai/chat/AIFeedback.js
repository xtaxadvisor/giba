import { ThumbsUp, ThumbsDown } from 'lucide-react';
import { Button } from '../../ui/Button.js';

/**
 * @typedef {Object} AIFeedbackProps
 * @property {(isPositive: boolean) => void} onFeedback - Callback for feedback.
 * @property {boolean} [disabled] - Whether the buttons are disabled.
 */

export function AIFeedback({ onFeedback, disabled }) {
  return (
    <div className="flex items-center space-x-2">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => onFeedback(true)}
        disabled={disabled}
        className="text-gray-500 hover:text-green-600"
      >
        <ThumbsUp className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => onFeedback(false)}
        disabled={disabled}
        className="text-gray-500 hover:text-red-600"
      >
        <ThumbsDown className="h-4 w-4" />
      </Button>
    </div>
  );
}

