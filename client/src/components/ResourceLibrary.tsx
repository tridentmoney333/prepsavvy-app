import { useState } from 'react';
import { Download, PlayCircle, Book } from 'lucide-react';
import { resources } from '../data/resources';

type ResourceCategory = 'All Resources' | 'Test Preparation' | 'Application Materials' | 'Interview Preparation';

export default function ResourceLibrary() {
  const [activeCategory, setActiveCategory] = useState<ResourceCategory>('All Resources');

  const filteredResources = activeCategory === 'All Resources' 
    ? resources 
    : resources.filter(resource => resource.category === activeCategory);

  return (
    <div id="resources" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Resource Library</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Access our collection of guides, practice tests, and insider knowledge
          </p>
        </div>

        <div className="mt-12">
          <div className="flex flex-wrap justify-center mb-8 space-x-2">
            {['All Resources', 'Test Preparation', 'Application Materials', 'Interview Preparation'].map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category as ResourceCategory)}
                className={`px-4 py-2 text-sm font-medium rounded-md mb-2 ${
                  activeCategory === category
                    ? 'text-white bg-blue-600 hover:bg-blue-700'
                    : 'text-gray-700 bg-white hover:bg-gray-50'
                } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((resource) => (
              <div key={resource.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow relative group">
                {/* Overlay with Coming Soon text - only visible on hover using group-hover */}
                <div className="absolute inset-0 bg-gray-800 bg-opacity-70 flex items-center justify-center z-10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white font-bold text-xl">Coming Soon</div>
                </div>
                <div className="p-6 relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="bg-blue-100 p-2 rounded-md">
                        {resource.type === 'PDF' ? (
                          <Book className="h-6 w-6 text-blue-600" />
                        ) : (
                          <PlayCircle className="h-6 w-6 text-blue-600" />
                        )}
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-900">{resource.title}</h3>
                        <span className="text-sm text-gray-500">
                          {resource.type} • {resource.size}
                        </span>
                      </div>
                    </div>
                    {resource.isPopular && (
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Popular</span>
                    )}
                    {resource.isNew && (
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">New</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{resource.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-sm text-gray-500">
                      {resource.type === 'PDF' ? (
                        <>
                          <Download className="h-4 w-4 mr-1" />
                          {resource.downloads} downloads
                        </>
                      ) : (
                        <>
                          <PlayCircle className="h-4 w-4 mr-1" />
                          {resource.views} views
                        </>
                      )}
                    </div>
                    <button className="inline-flex items-center text-blue-600 font-medium text-sm hover:underline">
                      {resource.type === 'PDF' ? 'Download' : 'Watch Video'}
                      {resource.type === 'PDF' ? (
                        <Download className="h-4 w-4 ml-1" />
                      ) : (
                        <PlayCircle className="h-4 w-4 ml-1" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Resources button removed */}
        </div>
      </div>
    </div>
  );
}
