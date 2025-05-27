import { useEffect } from 'react';

interface CalendlyEmbedProps {
  username: string;
  styles?: React.CSSProperties;
}

export default function CalendlyEmbed({ username, styles }: CalendlyEmbedProps) {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up
      document.body.removeChild(script);
    };
  }, []);

  const defaultStyles: React.CSSProperties = {
    minWidth: '320px',
    height: '700px',
    ...styles
  };

  return (
    <div 
      className="calendly-inline-widget" 
      data-url={`https://calendly.com/${username}`}
      style={defaultStyles}
    />
  );
}