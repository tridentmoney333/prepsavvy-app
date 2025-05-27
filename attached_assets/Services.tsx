import { GraduationCap, BookOpen, Award, Users, Brain, Scale, Briefcase, BarChart as ChartBar } from 'lucide-react';
import { useEffect } from 'react';

const programs = [
  {
    title: 'Law School',
    description: 'Expert guidance for LSAT preparation, personal statements, and law school applications.',
    icon: Scale,
  },
  {
    title: 'Business School',
    description: 'Strategic support for GMAT/GRE prep, MBA applications, and business school admissions.',
    icon: Briefcase,
  },
  {
    title: 'Graduate School',
    description: 'Comprehensive guidance for masters and PhD program applications across all disciplines.',
    icon: GraduationCap,
  },
  {
    title: 'Professional Programs',
    description: 'Expert mentorship for specialized programs including healthcare, engineering, and more.',
    icon: ChartBar,
  },
];

const features = [
  {
    title: 'Expert Mentors',
    description: 'Learn from graduates of top programs worldwide.',
    icon: Users,
  },
  {
    title: 'Test Success',
    description: 'Proven strategies for entrance exams.',
    icon: Award,
  },
  {
    title: 'Application Excellence',
    description: 'Stand out with compelling applications.',
    icon: Brain,
  },
  {
    title: 'Interview Mastery',
    description: 'Ace your interviews with confidence.',
    icon: BookOpen,
  },
];

export default function Services() {
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1
    });

    document.querySelectorAll('.scroll-trigger').forEach(element => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center scroll-trigger">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Your Path to Excellence
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Choose your journey and get matched with experienced mentors who've been there
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {programs.map((program, index) => (
              <div
                key={program.title}
                className="scroll-trigger relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-105"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div>
                  <span className="rounded-lg inline-flex p-3 bg-blue-50 text-blue-600 ring-4 ring-white">
                    <program.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                </div>
                <div className="mt-8">
                  <h3 className="text-lg font-medium">
                    <a href="#mentors" className="focus:outline-none">
                      <span className="absolute inset-0" aria-hidden="true" />
                      {program.title}
                    </a>
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {program.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-32 scroll-trigger">
          <h3 className="text-2xl font-bold text-center mb-16">The PrepSavvY Advantage</h3>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div 
                key={feature.title} 
                className="text-center scroll-trigger"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-center">
                  <feature.icon className="h-10 w-10 text-blue-600" />
                </div>
                <h4 className="mt-4 text-lg font-medium">{feature.title}</h4>
                <p className="mt-2 text-sm text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}