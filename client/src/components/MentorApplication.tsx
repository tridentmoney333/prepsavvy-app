import { Check } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function MentorApplication() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    specialty: '',
    credentials: '',
    experience: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    // Reset form or show success message
    alert('Thank you for your application! We will be in touch soon.');
    setFormData({
      name: '',
      email: '',
      specialty: '',
      credentials: '',
      experience: ''
    });
  };

  return (
    <div id="mentor" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Become a Mentor
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Join our community of experienced professionals helping the next generation reach their goals.
            </p>

            <div className="mt-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Check className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">Share Your Expertise</h3>
                    <p className="mt-2 text-gray-500">
                      Guide students through the process you've already mastered. Your experience is invaluable.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Check className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">Flexible Schedule</h3>
                    <p className="mt-2 text-gray-500">
                      Set your own hours and availability. Mentor as much or as little as your schedule allows.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Check className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">Competitive Compensation</h3>
                    <p className="mt-2 text-gray-500">
                      Earn competitive rates for your time and expertise while making a meaningful impact.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 lg:mt-0">
            <div className="bg-white py-8 px-6 shadow-md rounded-lg sm:px-10">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <div className="mt-1">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="specialty" className="block text-sm font-medium text-gray-700">
                    Specialty
                  </label>
                  <div className="mt-1">
                    <select
                      id="specialty"
                      name="specialty"
                      required
                      value={formData.specialty}
                      onChange={handleChange}
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    >
                      <option value="">Select your specialty</option>
                      <option value="medicine">Medicine</option>
                      <option value="law">Law</option>
                      <option value="business">Business</option>
                      <option value="dental">Dental</option>
                      <option value="graduate">Graduate Programs</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="credentials" className="block text-sm font-medium text-gray-700">
                    Education & Credentials
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="credentials"
                      name="credentials"
                      rows={3}
                      required
                      value={formData.credentials}
                      onChange={handleChange}
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      placeholder="e.g., Harvard Law School, JD 2020"
                    ></textarea>
                  </div>
                </div>

                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
                    Mentoring Experience
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="experience"
                      name="experience"
                      rows={3}
                      value={formData.experience}
                      onChange={handleChange}
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      placeholder="Describe any previous mentoring or teaching experience"
                    ></textarea>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
