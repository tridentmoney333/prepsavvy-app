import React from 'react';
import { GraduationCap, Users, Award, Sparkles } from 'lucide-react';

export default function AboutFounder() {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              From Dreams to Reality: The PrepSavvY Story
            </h2>
            <p className="mt-6 text-lg text-gray-500">
              Our journey began with a simple belief: everyone deserves access to quality mentorship and guidance for their academic and professional goals. What started as peer-to-peer support among friends has grown into a community of successful mentors helping the next generation achieve their dreams.
            </p>
            <p className="mt-4 text-lg text-gray-500">
              Our mentors have gained acceptance to top programs worldwide, including Harvard Law, Wharton MBA, Stanford Medical School, and more. We understand the challenges because we've been there.
            </p>

            <div className="mt-8">
              <div className="grid grid-cols-3 gap-4">
                <div className="border border-gray-200 rounded-lg p-4 text-center">
                  <GraduationCap className="h-8 w-8 mx-auto text-blue-600" />
                  <div className="mt-2 font-semibold text-gray-900">500+</div>
                  <div className="text-sm text-gray-500">Acceptances</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4 text-center">
                  <Users className="h-8 w-8 mx-auto text-blue-600" />
                  <div className="mt-2 font-semibold text-gray-900">1000+</div>
                  <div className="text-sm text-gray-500">Students Mentored</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4 text-center">
                  <Award className="h-8 w-8 mx-auto text-blue-600" />
                  <div className="mt-2 font-semibold text-gray-900">95%</div>
                  <div className="text-sm text-gray-500">Success Rate</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 lg:mt-0">
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-medium text-gray-900">Our Mission</h3>
                <p className="mt-2 text-gray-500">
                  To democratize access to quality mentorship and guidance, ensuring every ambitious student has the support they need to reach their full potential.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-medium text-gray-900">Our Approach</h3>
                <p className="mt-2 text-gray-500">
                  We believe in personalized mentorship that goes beyond test scores. Our mentors provide holistic guidance, helping you develop the skills, mindset, and confidence needed for long-term success.
                </p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <blockquote className="text-blue-900 italic">
                  "PrepSavvY is more than a mentorship platform—it's a community of dreamers and achievers supporting each other on the path to success."
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="#mentors"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 transition-all duration-200 transform hover:scale-105"
          >
            Start Your Journey Today
            <Sparkles className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}