import { Calendar } from 'lucide-react';

interface CalendlyButtonProps {
  username: string;
  text?: string;
  className?: string;
}

export default function CalendlyButton({
  username,
  text = 'Schedule a Session',
  className = ''
}: CalendlyButtonProps) {
  const calendlyUrl = `https://calendly.com/${username}`;

  return (
    <a
      href={calendlyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors ${className}`}
    >
      <Calendar className="w-5 h-5" />
      {text}
    </a>
  );
}