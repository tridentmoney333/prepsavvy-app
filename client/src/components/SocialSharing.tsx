import { Facebook, Twitter, Linkedin } from 'lucide-react';

export default function SocialSharing() {
  return (
    <div id="social" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-900">Share Your Success Story</h2>
          <p className="mt-2 text-lg text-gray-500">
            Join the community and inspire others on their journey
          </p>
        </div>

        <div className="mt-12">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Coming Soon...
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              We're working on collecting success stories from our mentees.
            </p>
          </div>
          
          <div className="mt-12 flex justify-center">
            <div className="bg-white rounded-lg p-8 shadow-sm text-center max-w-md">
              <p className="text-gray-600">
                Stay tuned for inspiring testimonials from students who have achieved their goals with the help of our mentors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
