import { useState, useEffect } from 'react';
import { useRoute } from 'wouter';
import { Star, Calendar, Award, BookOpen, Globe, User, Briefcase, Clock, ArrowLeft, Check } from 'lucide-react';
import { mentors } from '../data/mentors';
import { reviews } from '../data/reviews';
import CalendlyButton from './CalendlyButton';
import CalendlyEmbed from './CalendlyEmbed';

// Star rating component reused from Reviews.tsx
const RatingStars = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
      ))}
      {hasHalfStar && <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />}
      {[...Array(5 - Math.ceil(rating))].map((_, i) => (
        <Star key={`empty-${i}`} className="w-5 h-5 text-gray-300" />
      ))}
    </div>
  );
};

interface MentorProfileProps {
  id?: string;
}

export default function MentorProfile({ id }: MentorProfileProps) {
  const [, params] = useRoute<{ id: string }>('/mentor/:id');
  const [activeTab, setActiveTab] = useState('about');
  const [showCalendlyEmbed, setShowCalendlyEmbed] = useState(false);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Get mentor ID from either props or route params
  const mentorId = id ? parseInt(id, 10) : params ? parseInt(params.id, 10) : null;
  const mentor = mentorId ? mentors.find(m => m.id === mentorId) : null;
  
  if (!mentor) return <div className="p-10 text-center">Mentor not found</div>;
  
  // Filter reviews for this mentor
  const mentorReviews = reviews.filter(review => review.mentorId === mentorId);
  
  // Calculate average rating from reviews
  const calculateAverageRating = (reviews: typeof mentorReviews): number => {
    if (reviews.length === 0) return 0;
    
    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    return parseFloat((totalRating / reviews.length).toFixed(1));
  };
  
  // Get the dynamically calculated average rating
  const averageRating = calculateAverageRating(mentorReviews);
  
  const bookSession = () => {
    // Show the Calendly embed when user clicks on Book Session
    setShowCalendlyEmbed(true);
  };

  return (
    <div className="bg-white py-2 sm:py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-3 sm:mb-6">
          <a href="/#mentors">
            <div className="inline-flex items-center text-blue-600 hover:text-blue-800 cursor-pointer">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Mentors
            </div>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">


          {/* Left Column - Profile Overview */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              {/* Header with Image and Basic Info */}
              <div className="h-64 w-full relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                <img className="h-full w-full object-cover" src={mentor.image} alt={mentor.name} />
                <div className="absolute bottom-4 left-4 z-20 text-white">
                  <h1 className="text-3xl font-bold">{mentor.name}</h1>
                  <p className="text-lg">{mentor.title}</p>
                  <div className="flex items-center mt-2">
                    <RatingStars rating={averageRating} />
                    <span className="ml-2 text-white">{averageRating} ({mentorReviews.length} reviews)</span>
                  </div>
                </div>
              </div>

              {/* Tabs Navigation */}
              <div className="border-b border-gray-200">
                <nav className="flex -mb-px justify-between w-full">
                  <button
                    onClick={() => setActiveTab('about')}
                    className={`py-3 sm:py-4 px-2 sm:px-6 border-b-2 font-medium text-xs sm:text-sm flex flex-col sm:flex-row items-center justify-center flex-1 ${
                      activeTab === 'about'
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <User className="w-4 h-4 mb-1 sm:mb-0 sm:mr-2" />
                    <span>About</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('experience')}
                    className={`py-3 sm:py-4 px-2 sm:px-6 border-b-2 font-medium text-xs sm:text-sm flex flex-col sm:flex-row items-center justify-center flex-1 ${
                      activeTab === 'experience'
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <Briefcase className="w-4 h-4 mb-1 sm:mb-0 sm:mr-2" />
                    <span>Experience</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('reviews')}
                    className={`py-3 sm:py-4 px-2 sm:px-6 border-b-2 font-medium text-xs sm:text-sm flex flex-col sm:flex-row items-center justify-center flex-1 ${
                      activeTab === 'reviews'
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <Star className="w-4 h-4 mb-1 sm:mb-0 sm:mr-2" />
                    <span>Reviews</span>
                  </button>
                </nav>
              </div>

              {/* Tab Content */}
              <div className="p-3 sm:p-6">
                {/* About Tab */}
                {activeTab === 'about' && (
                  <div>
                    <h2 className="text-xl font-semibold mb-4">Biography</h2>
                    <p className="text-gray-700 mb-6">{mentor.biography}</p>

                    <h3 className="text-lg font-semibold mb-3">Specialties</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                      {mentor.specialties.map((specialty, index) => (
                        <div key={index} className="flex items-center">
                          <Check className="w-4 h-4 text-green-500 mr-2" />
                          <span className="text-gray-700">{specialty}</span>
                        </div>
                      ))}
                    </div>

                    <h3 className="text-lg font-semibold mb-3">Languages</h3>
                    <div className="flex flex-wrap mb-6">
                      {mentor.languages.map((language, index) => (
                        <div key={index} className="flex items-center mr-4 mb-2">
                          <Globe className="w-4 h-4 text-blue-500 mr-2" />
                          <span className="text-gray-700">{language}</span>
                        </div>
                      ))}
                    </div>

                    {mentor.publications && (
                      <>
                        <h3 className="text-lg font-semibold mb-3">Publications</h3>
                        <ul className="list-disc pl-5 mb-6">
                          {mentor.publications.map((publication, index) => (
                            <li key={index} className="text-gray-700 mb-2">{publication}</li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                )}

                {/* Experience Tab */}
                {activeTab === 'experience' && (
                  <div>
                    <h2 className="text-xl font-semibold mb-4">Education</h2>
                    <div className="space-y-4 mb-8">
                      {mentor.education.map((edu, index) => (
                        <div key={index} className="border-l-2 border-blue-500 pl-4 py-2">
                          <div className="flex items-center">
                            <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 mr-2 flex-shrink-0" />
                            <h3 className="text-base sm:text-lg font-medium">{edu.institution}</h3>
                          </div>
                          <p className="text-gray-600 text-sm sm:text-base">{edu.degree} in {edu.field}, {edu.year}</p>
                        </div>
                      ))}
                    </div>

                    <h2 className="text-xl font-semibold mb-4">Professional Experience</h2>
                    <div className="space-y-6 mb-8">
                      {mentor.experience.map((exp, index) => (
                        <div key={index} className="border-l-2 border-gray-300 pl-4 py-2">
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
                            <div>
                              <h3 className="text-md sm:text-lg font-medium">{exp.role}</h3>
                              <p className="text-gray-600 text-sm">{exp.organization}</p>
                            </div>
                            <span className="text-xs sm:text-sm bg-gray-100 px-2 py-1 rounded text-gray-600 mt-1 sm:mt-0 w-fit">{exp.duration}</span>
                          </div>
                          <p className="mt-2 text-gray-700 text-sm sm:text-base">{exp.description}</p>
                        </div>
                      ))}
                    </div>

                    <h2 className="text-xl font-semibold mb-4">Awards & Recognition</h2>
                    <div className="space-y-4">
                      {mentor.awards.map((award, index) => (
                        <div key={index} className="flex items-start">
                          <Award className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 mt-1 mr-2 sm:mr-3 flex-shrink-0" />
                          <div>
                            <h3 className="font-medium text-sm sm:text-base">{award.title}</h3>
                            <p className="text-gray-600 text-xs sm:text-sm">{award.issuer}, {award.year}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Reviews Tab */}
                {activeTab === 'reviews' && (
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="bg-blue-100 rounded-full p-3 mr-4">
                        <Star className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h2 className="text-xl font-semibold">{averageRating} out of 5</h2>
                        <p className="text-gray-600">{mentorReviews.length} reviews</p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      {mentorReviews.length > 0 ? (
                        mentorReviews.map((review) => (
                          <div key={review.id} className="bg-gray-50 rounded-lg p-3 sm:p-4 shadow-sm">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-1">
                              <div>
                                <h3 className="font-medium text-sm sm:text-base">{review.userName}</h3>
                                <p className="text-xs sm:text-sm text-gray-500">{review.program}</p>
                              </div>
                              <div className="flex items-center">
                                <RatingStars rating={review.rating} />
                                <span className="text-xs ml-2 text-gray-500 sm:hidden">{review.rating.toFixed(1)}</span>
                              </div>
                            </div>
                            <p className="text-gray-700 text-sm sm:text-base">{review.comment}</p>
                            <p className="text-xs sm:text-sm text-gray-500 mt-2">
                              {review.date.toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                              })}
                            </p>
                          </div>
                        ))
                      ) : (
                        <p className="text-gray-500">No reviews yet for this mentor.</p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Only Booking Box - Above Mony's Journey */}
            <div className="lg:hidden mt-8 mb-4 bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-3 border-b border-gray-100">
                <h2 className="text-base font-semibold mb-2">Book a Session</h2>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 text-blue-600 mr-2" />
                    <span className="text-sm">60 min</span>
                  </div>
                  <span className="text-sm font-bold text-green-600">{mentor.hourlyRate === 0 ? "Free" : `$${mentor.hourlyRate}/hour`}</span>
                </div>
                
                <CalendlyButton 
                  username={mentor.calendlyLink.replace('https://calendly.com/', '')}
                  text="Schedule Session"
                  className="w-full text-sm py-2"
                />
              </div>
            </div>

            {/* Mony's Personal Journey */}
            <div className="mt-8 bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-3 sm:p-6">
                <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Mony's Journey</h2>
                <div className="space-y-4 sm:space-y-6">
                  <div className="border-l-4 border-blue-500 pl-3 sm:pl-4 py-1 sm:py-2">
                    <p className="text-gray-700 text-sm sm:text-base mb-3 sm:mb-4">
                      "When I first decided to apply to dental school, I didn't have a roadmap—just a last-minute decision and a lot of questions. I didn't know anyone in the field, and I had to figure out how to stand out while staying true to my story. Through trial, error, and endless reflection, I learned how to turn uncertainty into purpose.
                    </p>
                    <p className="text-gray-700 text-sm sm:text-base mb-3 sm:mb-4">
                      That journey taught me the value of authenticity. I crafted a personal statement rooted in my lived experience as a first-generation student and an immigrant, and I leaned into the things that made me different—because they were also the things that made me strong.
                    </p>
                    <p className="text-gray-700 text-sm sm:text-base mb-3 sm:mb-4">
                      Now, as a dental student at the Schulich School of Medicine & Dentistry, I'm committed to making sure no student has to go through the application process alone. That's why I co-founded PrepSavvY—to help others navigate their journey with the kind of mentorship I wish I had."
                    </p>
                    <div className="mt-3 sm:mt-4">
                      <p className="font-medium text-sm sm:text-base">Mony Madlol</p>
                      <p className="text-xs sm:text-sm text-gray-600">Co-founder, PrepSavvY</p>
                      <p className="text-xs sm:text-sm text-gray-600">DDS Candidate, Schulich School of Medicine & Dentistry</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Booking (hidden on mobile) */}
          <div className="hidden lg:block">
            <div className="bg-white rounded-xl shadow-md overflow-hidden sticky top-20 sm:top-24">
              <div className="p-4 sm:p-6">
                <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Book a Session</h2>
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2" />
                    <span className="text-sm sm:text-base">60 min</span>
                  </div>
                  <span className="text-lg sm:text-xl font-bold text-green-600">{mentor.hourlyRate === 0 ? "Free" : `$${mentor.hourlyRate}/hour`}</span>
                </div>

                {showCalendlyEmbed ? (
                  // Show Calendly embed when user clicks book session
                  <div className="mt-4">
                    <CalendlyEmbed 
                      username={mentor.calendlyLink.replace('https://calendly.com/', '')} 
                      styles={{ height: '630px' }}
                    />
                  </div>
                ) : (
                  // Show Calendly booking button
                  <div className="mt-4">
                    <p className="text-gray-700 mb-4 text-center">
                      Schedule a mentoring session with {mentor.name} directly through Calendly.
                    </p>
                    
                    <CalendlyButton 
                      username={mentor.calendlyLink.replace('https://calendly.com/', '')}
                      text="Schedule with Calendly"
                      className="w-full mb-4"
                    />
                    
                    <p className="text-sm text-gray-500 mt-4 text-center">
                      Choose a time that works for your schedule
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}