import { Star, StarHalf } from 'lucide-react';
import { format } from 'date-fns';
import { reviews } from '../data/reviews';

const RatingStars = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
      ))}
      {hasHalfStar && <StarHalf className="w-5 h-5 fill-yellow-400 text-yellow-400" />}
      {[...Array(5 - Math.ceil(rating))].map((_, i) => (
        <Star key={`empty-${i}`} className="w-5 h-5 text-gray-300" />
      ))}
    </div>
  );
};

export default function Reviews() {
  return (
    <div id="reviews" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Coming Soon...
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            We're working on collecting success stories from our mentees.
          </p>
        </div>
        
        <div className="mt-12 flex justify-center">
          <div className="bg-gray-50 rounded-lg p-8 shadow-sm text-center max-w-md">
            <p className="text-gray-600">
              Stay tuned for inspiring testimonials from students who have achieved their goals with the help of our mentors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
