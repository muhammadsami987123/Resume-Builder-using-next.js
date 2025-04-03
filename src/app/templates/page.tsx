'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface Template {
  id: string;
  name: string;
  description: string;
  image: string;
  category: 'Professional' | 'Creative' | 'Minimalist';
  color: string;
  preview: string;
}

const templates: Template[] = [
  {
    id: '1',
    name: 'Classic Professional',
    description: 'A timeless design perfect for corporate and traditional industries.',
    image: '/templates/classic.png',
    category: 'Professional',
    color: 'from-blue-100 to-blue-200',
    preview: '/templates/previews/classic-preview.png',
  },
  {
    id: '2',
    name: 'Modern Minimalist',
    description: 'Clean and contemporary design with a focus on typography.',
    image: '/templates/minimalist.png',
    category: 'Minimalist',
    color: 'from-gray-100 to-gray-200',
    preview: '/templates/previews/minimalist-preview.png',
  },
  {
    id: '3',
    name: 'Creative Portfolio',
    description: 'Ideal for designers, artists, and creative professionals.',
    image: '/templates/creative.png',
    category: 'Creative',
    color: 'from-purple-100 to-purple-200',
    preview: '/templates/previews/creative-preview.png',
  },
  {
    id: '4',
    name: 'Executive',
    description: 'Sophisticated layout designed for senior-level professionals.',
    image: '/templates/executive.png',
    category: 'Professional',
    color: 'from-indigo-100 to-indigo-200',
    preview: '/templates/previews/executive-preview.png',
  },
  {
    id: '5',
    name: 'Tech Specialist',
    description: 'Perfect for IT professionals and technical experts.',
    image: '/templates/tech.png',
    category: 'Professional',
    color: 'from-green-100 to-green-200',
    preview: '/templates/previews/tech-preview.png',
  },
  {
    id: '6',
    name: 'Artistic',
    description: 'Unique design for creative fields and artistic professions.',
    image: '/templates/artistic.png',
    category: 'Creative',
    color: 'from-pink-100 to-pink-200',
    preview: '/templates/previews/artistic-preview.png',
  },
];

export default function TemplatesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const categories = ['All', 'Professional', 'Creative', 'Minimalist'];

  const filteredTemplates = templates.filter((template) => {
    const matchesCategory = selectedCategory === 'All' || template.category === selectedCategory;
    const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const openPreview = (template: Template) => {
    setSelectedTemplate(template);
    setIsPreviewOpen(true);
  };

  const closePreview = () => {
    setIsPreviewOpen(false);
    setSelectedTemplate(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-indigo-900 mb-4">Resume Templates</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our professionally designed templates to create a resume that stands out
            </p>
          </div>

          {/* Search and Filter Section */}
          <div className="mb-8 flex flex-col sm:flex-row gap-4 justify-between items-center">
            <div className="w-full sm:w-96">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search templates..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-lg border-2 border-indigo-200 bg-white px-4 py-2 pl-10 text-indigo-900 shadow-sm transition-colors duration-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:ring-opacity-50"
                />
                <svg
                  className="absolute left-3 top-2.5 h-5 w-5 text-indigo-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    selectedCategory === category
                      ? 'bg-indigo-600 text-white'
                      : 'bg-white text-indigo-600 border-2 border-indigo-200 hover:bg-indigo-50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Templates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTemplates.map((template) => (
              <div
                key={template.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-200 hover:scale-105"
              >
                <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                  <div className={`w-full h-48 bg-gradient-to-br ${template.color} flex items-center justify-center relative`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-40 bg-white shadow-lg rounded-lg p-4 transform rotate-3">
                        <div className="h-full flex flex-col">
                          <div className="h-2 w-16 bg-gray-200 rounded mb-2"></div>
                          <div className="h-2 w-24 bg-gray-200 rounded mb-2"></div>
                          <div className="h-2 w-20 bg-gray-200 rounded mb-4"></div>
                          <div className="h-2 w-28 bg-gray-200 rounded mb-2"></div>
                          <div className="h-2 w-20 bg-gray-200 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-indigo-900">{template.name}</h3>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-600">
                      {template.category}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{template.description}</p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => openPreview(template)}
                      className="flex-1 px-4 py-2 bg-white text-indigo-600 border-2 border-indigo-200 rounded-lg hover:bg-indigo-50 transition-colors duration-200"
                    >
                      Preview
                    </button>
                    <Link
                      href={`/builder?template=${template.id}`}
                      className="flex-1 text-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200"
                    >
                      Use Template
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredTemplates.length === 0 && (
            <div className="text-center py-12">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="mt-2 text-lg font-medium text-gray-900">No templates found</h3>
              <p className="mt-1 text-gray-500">
                Try adjusting your search or filter to find what you looking for.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />

      {/* Template Preview Modal */}
      {isPreviewOpen && selectedTemplate && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-indigo-900">{selectedTemplate.name}</h2>
                <button
                  onClick={closePreview}
                  className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg overflow-hidden">
                <div className={`w-full h-96 bg-gradient-to-br ${selectedTemplate.color} flex items-center justify-center`}>
                  <div className="w-64 h-80 bg-white shadow-2xl rounded-lg p-6 transform rotate-3">
                    <div className="h-full flex flex-col space-y-4">
                      <div className="h-3 w-24 bg-gray-200 rounded"></div>
                      <div className="h-2 w-32 bg-gray-200 rounded"></div>
                      <div className="h-2 w-28 bg-gray-200 rounded"></div>
                      <div className="h-2 w-36 bg-gray-200 rounded"></div>
                      <div className="h-2 w-24 bg-gray-200 rounded"></div>
                      <div className="h-2 w-32 bg-gray-200 rounded"></div>
                      <div className="h-2 w-28 bg-gray-200 rounded"></div>
                      <div className="h-2 w-36 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex justify-end gap-4">
                <button
                  onClick={closePreview}
                  className="px-4 py-2 text-indigo-600 border-2 border-indigo-200 rounded-lg hover:bg-indigo-50 transition-colors duration-200"
                >
                  Close
                </button>
                <Link
                  href={`/builder?template=${selectedTemplate.id}`}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200"
                >
                  Use This Template
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 