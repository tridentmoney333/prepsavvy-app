import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'wouter';
import { mentors } from '../data/mentors';
import { reviews } from '../data/reviews';

// Star rating component for consistent display
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

// Calculate average rating from reviews
const calculateAverageRating = (mentorId: number): number => {
  const mentorReviews = reviews.filter(review => review.mentorId === mentorId);
  
  if (mentorReviews.length === 0) return 0;
  
  const totalRating = mentorReviews.reduce((sum, review) => sum + review.rating, 0);
  return parseFloat((totalRating / mentorReviews.length).toFixed(1));
};

export default function MentorList() {
  return (
    <div id="mentors" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Expert Mentors</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Connect with professionals who have walked the path you aspire to take
          </p>
        </div>

        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {mentors.map((mentor) => (
            <div key={mentor.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              <a href={`/mentor/${mentor.id}`} onClick={(e) => {
                // This ensures that when a user clicks on a mentor card, the page will scroll to top
                window.scrollTo(0, 0);
              }}>
                <div className="h-48 w-full relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                  <img className="h-full w-full object-cover" src={mentor.image} alt={mentor.name} />
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">{mentor.specialty}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-900">{mentor.name}</h3>
                    <div className="flex items-center">
                      <RatingStars rating={calculateAverageRating(mentor.id)} />
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">{mentor.degree}</p>
                  <p className="mt-4 text-sm text-gray-600 line-clamp-2">{mentor.description}</p>
                  <div className="mt-6 flex justify-between items-center">
                    <span className="text-blue-600 font-medium">{mentor.hourlyRate === 0 ? "Free" : `$${mentor.hourlyRate}/hour`}</span>
                    <div className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
                      View Profile
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div>
            <Link href="/mentors" onClick={() => { window.scrollTo({top: 0, left: 0, behavior: 'auto'}); }}>
              <div className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 cursor-pointer">
                View All Mentors
                <ArrowRight className="ml-2 h-5 w-5" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
