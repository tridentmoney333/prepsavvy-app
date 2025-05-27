import { GraduationCap, Users, Award, Sparkles } from 'lucide-react';

export default function AboutFounder() {
  return (
    <div id="about" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              ✨ The PrepSavvY Story
            </h2>
            <h3 className="mt-3 text-xl font-semibold text-blue-600">
              Real Mentorship. Real Results.
            </h3>
            <p className="mt-6 text-lg text-gray-500">
              PrepSavvY was co-founded by Mony Madlol — dental student, content creator, and mentor — to make the path to professional school more accessible and less overwhelming.
            </p>
            <p className="mt-4 text-lg text-gray-500">
              We're launching with what we know best: dentistry. This soft launch connects pre-dental students with mentors who've recently been accepted into top Canadian and U.S. programs.
            </p>
            <p className="mt-4 text-lg text-gray-500">
              But we're just getting started. Our goal is to grow PrepSavvY into a cross-discipline mentorship hub for students pursuing law, medicine, business, and beyond.
            </p>
            <p className="mt-4 text-lg text-gray-600 font-medium">
              We've been in your shoes. Now, we're building what we wish we had.
            </p>
          </div>

          <div className="mt-12 lg:mt-0">
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-medium text-gray-900">Our Mission</h3>
                <p className="mt-2 text-gray-500">
                  To empower the next generation of students through mentorship that's real, relatable, and rooted in lived experience. By starting with dentistry and expanding across disciplines, we're building a platform where every student has access to guidance from someone who's actually been there.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-medium text-gray-900">Our Approach</h3>
                <p className="mt-2 text-gray-500">
                  We believe great mentorship is more than just resume tips or test scores. Our mentors provide personalized, experience-based support that helps students navigate the unspoken challenges of applying to professional programs — with confidence, clarity, and community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
