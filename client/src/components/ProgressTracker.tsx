import { CheckCircle, CheckSquare, FileText, FilePlus, Clipboard, DollarSign, Calendar, Award, FileCheck, BookOpen, AlertCircle, Clock } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

// Define the dentistry school application steps based on the provided image
interface ApplicationStep {
  id: number;
  step: number;
  name: string;
  icon: JSX.Element;
  statusOptions: string[];
  currentStatus: string;
  notes: string;
  animationDelay: number;
}

export default function ProgressTracker() {
  const [visibleSections, setVisibleSections] = useState<number[]>([]);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Dental School Application Steps
  const dentalSchoolSteps: ApplicationStep[] = [
    {
      id: 1,
      step: 1,
      name: "Pre-req Courses",
      icon: <CheckSquare className="h-6 w-6" />,
      statusOptions: ["In Progress", "Completed 📚"],
      currentStatus: "In Progress",
      notes: "Bio, Chem, Organic Chem, Biochem, Physics. Must be completed before enrollment.",
      animationDelay: 0
    },
    {
      id: 2,
      step: 2,
      name: "DAT Score",
      icon: <BookOpen className="h-6 w-6" />,
      statusOptions: ["Not Started", "In Progress", "Completed ✅"],
      currentStatus: "Completed ✅",
      notes: "CDAT (Canada) or ADA DAT (U.S.). Canadian schools often require the Perceptual Ability & Reading sections.",
      animationDelay: 100
    },
    {
      id: 3,
      step: 3,
      name: "Personal Statement",
      icon: <FileText className="h-6 w-6" />,
      statusOptions: ["Not Started", "In Review", "Completed 📝"],
      currentStatus: "In Review",
      notes: "Central to AADSAS & Canadian schools. Often customized per school.",
      animationDelay: 200
    },
    {
      id: 4,
      step: 4,
      name: "Letters of Recommendation",
      icon: <Clipboard className="h-6 w-6" />,
      statusOptions: ["Not Started", "In Progress", "Completed 📨"],
      currentStatus: "In Progress",
      notes: "Usually 2–3 referees (academic + dentist). Schulich requires a dentist reference.",
      animationDelay: 300
    },
    {
      id: 5,
      step: 5,
      name: "Interview",
      icon: <Calendar className="h-6 w-6" />,
      statusOptions: ["Not Invited", "Scheduled", "Completed 🎙️"],
      currentStatus: "Not Invited",
      notes: "MMI (Schulich) or traditional interview (many U.S. schools).",
      animationDelay: 400
    },
    {
      id: 6,
      step: 6,
      name: "Decision",
      icon: <Award className="h-6 w-6" />,
      statusOptions: ["Waiting", "Waitlisted", "Rejected", "Accepted 🎉"],
      currentStatus: "Waiting",
      notes: "Offer status. Some schools rank applicants post-interview.",
      animationDelay: 500
    }
  ];

  // Handle scroll-based animation effect
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how much of the section is visible in the viewport
      const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
      const sectionHeight = rect.height;
      
      // Calculate the percentage of the section that is visible
      const visibilityPercentage = Math.max(0, Math.min(100, (visibleHeight / sectionHeight) * 100));
      
      // Calculate scroll percentage based on section position
      // This creates a value that changes as you scroll through the section
      const scrollValue = (1 - (rect.top / windowHeight)) * 100;
      const percentage = Math.max(0, Math.min(100, scrollValue));
      
      setScrollPercentage(percentage);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle scroll effects for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const stepId = Number(entry.target.getAttribute('data-step-id'));
            if (!visibleSections.includes(stepId)) {
              setVisibleSections(prev => [...prev, stepId]);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.3 // Element is considered visible when 30% is in viewport
      }
    );

    // Observe section ref for main animations
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Observe all step refs for individual step animations
    stepRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      stepRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [stepRefs]);

  // Get status color based on status
  const getStatusColor = (status: string) => {
    if (status.includes("Completed") || status.includes("Verified") || status.includes("Paid") || status.includes("Accepted")) 
      return "bg-green-100 text-green-800";
    if (status.includes("In Progress") || status.includes("In Review") || status.includes("Scheduled"))
      return "bg-blue-100 text-blue-800";
    if (status.includes("Not Started") || status.includes("Not Invited") || status.includes("Waiting"))
      return "bg-gray-100 text-gray-800";
    if (status.includes("Waitlisted"))
      return "bg-yellow-100 text-yellow-800";
    if (status.includes("Rejected"))
      return "bg-red-100 text-red-800";
    return "bg-gray-100 text-gray-800";
  };
  
  // Get icon color based on status
  const getIconColor = (status: string) => {
    if (status.includes("Completed") || status.includes("Verified") || status.includes("Paid") || status.includes("Accepted"))
      return "text-green-500";
    if (status.includes("In Progress") || status.includes("In Review") || status.includes("Scheduled"))
      return "text-blue-500";
    if (status.includes("Not Started") || status.includes("Not Invited") || status.includes("Waiting"))
      return "text-gray-400";
    if (status.includes("Waitlisted"))
      return "text-yellow-500";
    if (status.includes("Rejected"))
      return "text-red-500";
    return "text-gray-400";
  };

  return (
    <div id="roadmap" className="bg-white py-12 overflow-hidden">
      <div 
        ref={sectionRef}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-500 transform`}
        style={{
          opacity: Math.max(0.8, Math.min(1, scrollPercentage / 50)),
          transform: `translateY(${Math.max(0, Math.min(2, 2 - (scrollPercentage / 25)))}px)`
        }}
      >
        <div className="text-center mb-8">
          <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
            Dental School Application Roadmap
          </h2>
          <p className="mt-3 text-lg text-gray-500 max-w-2xl mx-auto">
            Track your journey to dental school with our roadmap of the application process.
          </p>
        </div>

        {/* Header with checkmark and title */}
        <div className="bg-green-50 border-l-4 border-green-500 p-3 mb-6 rounded-md">
          <div className="flex items-center">
            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
            <h3 className="text-base font-bold text-gray-900">Dentistry School Tracker</h3>
          </div>
          <p className="text-xs text-gray-600 mt-1">Follow these 6 critical steps to organize your dental school applications.</p>
        </div>

        {/* Timeline with steps */}
        <div className="relative">
          {/* Vertical line connecting steps */}
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-blue-200 z-0"></div>

          {/* Application steps */}
          <div className="space-y-12">
            {dentalSchoolSteps.map((step, idx) => (
              <div 
                key={step.id}
                ref={el => stepRefs.current[idx] = el}
                data-step-id={step.id}
                className={`relative z-10 transition-all duration-1000 transform ${
                  visibleSections.includes(step.id) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${step.animationDelay}ms` }}
              >
                <div className="flex items-start">
                  {/* Step number with icon */}
                  <div className={`
                    flex items-center justify-center w-10 h-10 rounded-full shadow-md border-2 border-white z-10
                    ${getStatusColor(step.currentStatus)} 
                    transition-all duration-500 transform
                    ${visibleSections.includes(step.id) ? 'scale-100' : 'scale-0'}
                    ${scrollPercentage > 40 && scrollPercentage < 60 ? 'animate-pulse' : ''}
                  `}>
                    <div className={getIconColor(step.currentStatus)}>
                      <div className="h-4 w-4">{step.icon}</div>
                    </div>
                  </div>

                  {/* Step details card */}
                  <div 
                    className="ml-4 bg-white rounded-lg overflow-hidden flex-1 transition-all duration-500 transform"
                    style={{
                      boxShadow: scrollPercentage > 30 && scrollPercentage < 70 ? '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' : '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                      transform: scrollPercentage > 30 && scrollPercentage < 70 ? 'scale(1.005)' : 'scale(1)'
                    }}
                  >
                    <div className="px-3 py-2 border-b border-gray-200 bg-gray-50">
                      <div className="flex justify-between items-center">
                        <h3 className="text-base font-bold text-gray-900 flex items-center">
                          <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2">
                            {step.step}
                          </span>
                          {step.name}
                        </h3>
                        <div className={`${getStatusColor(step.currentStatus)} text-xs font-semibold px-2 py-0.5 rounded-full`}>
                          {step.currentStatus}
                        </div>
                      </div>
                    </div>

                    <div className="p-3">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {/* Status options */}
                        <div>
                          <h4 className="text-xs font-medium text-gray-500 mb-1">Status Options</h4>
                          <div className="flex flex-wrap gap-1">
                            {step.statusOptions.map((status, i) => (
                              <span 
                                key={i} 
                                className={`
                                  text-xs font-medium px-1.5 py-0.5 rounded-full text-[10px]
                                  ${status === step.currentStatus 
                                    ? getStatusColor(status) + ' ring-1 ring-offset-1 ring-blue-300' 
                                    : 'bg-gray-100 text-gray-800'}
                                `}
                              >
                                {status}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Notes section */}
                        <div>
                          <h4 className="text-xs font-medium text-gray-500 mb-1">Notes</h4>
                          <p className="text-xs text-gray-700">{step.notes}</p>
                        </div>
                      </div>

                      {/* Tips or actions */}
                      <div className="mt-3 bg-blue-50 p-2 rounded-md">
                        <div className="flex items-start">
                          <AlertCircle className="h-4 w-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                          <div>
                            <h4 className="text-xs font-medium text-blue-800">Pro Tip</h4>
                            <p className="text-xs text-blue-700 mt-0.5">
                              {step.step === 1 && "Aim for high grades in science prerequisites."}
                              {step.step === 2 && "Start DAT prep 3-4 months before test date."}
                              {step.step === 3 && "Show passion for dentistry in your personal statement."}
                              {step.step === 4 && "Build relationships early for strong recommendation letters."}
                              {step.step === 5 && "Practice with mock interviews for your specific school."}
                              {step.step === 6 && "Compare all offers including financial packages."}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline completion indicator */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center px-3 py-1.5 bg-blue-600 text-white rounded-md shadow-sm text-sm">
            <Clock className="mr-1.5 h-4 w-4" />
            <span>Stay on track with deadlines!</span>
          </div>
        </div>
      </div>
    </div>
  );
}
