import { Star, StarHalf } from 'lucide-react';
import { format } from 'date-fns';

interface Review {
  id: number;
  mentorId: number;
  rating: number;
  comment: string;
  userName: string;
  date: Date;
  program: string;
}

const reviews: Review[] = [
  {
    id: 1,
    mentorId: 1,
    rating: 5,
    comment: "Dr. Sarah was incredibly helpful with my medical school application. Her insights were invaluable!",
    userName: "Michael C.",
    date: new Date('2024-02-15'),
    program: "Pre-Med"
  },
  {
    id: 2,
    mentorId: 2,
    rating: 4.5,
    comment: "Great guidance on DAT preparation and application strategy.",
    userName: "Emily R.",
    date: new Date('2024-02-10'),
    program: "Pre-Dental"
  },
  // Add more reviews as needed
];

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
            What Our Students Say
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Real experiences from successful applicants
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {reviews.map((review) => (
            <div key={review.id} className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <RatingStars rating={review.rating} />
                  <p className="mt-2 font-medium text-gray-900">{review.userName}</p>
                  <p className="text-sm text-gray-500">{review.program}</p>
                </div>
                <span className="text-sm text-gray-500">
                  {format(review.date, 'MMM d, yyyy')}
                </span>
              </div>
              <p className="text-gray-600">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}