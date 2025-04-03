'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import ResumeForm from '@/components/ResumeForm';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ResumeData } from '@/types/resume';

interface Template {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
}

const templates: Template[] = [
  {
    id: '1',
    name: 'Classic Professional',
    description: 'A timeless design perfect for corporate and traditional industries.',
    image: '/templates/classic.png',
    category: 'Professional',
  },
  {
    id: '2',
    name: 'Modern Minimalist',
    description: 'Clean and contemporary design with a focus on typography.',
    image: '/templates/minimalist.png',
    category: 'Minimalist',
  },
  {
    id: '3',
    name: 'Creative Portfolio',
    description: 'Ideal for designers, artists, and creative professionals.',
    image: '/templates/creative.png',
    category: 'Creative',
  },
  {
    id: '4',
    name: 'Executive',
    description: 'Sophisticated layout designed for senior-level professionals.',
    image: '/templates/executive.png',
    category: 'Professional',
  },
  {
    id: '5',
    name: 'Tech Specialist',
    description: 'Perfect for IT professionals and technical experts.',
    image: '/templates/tech.png',
    category: 'Professional',
  },
  {
    id: '6',
    name: 'Artistic',
    description: 'Unique design for creative fields and artistic professions.',
    image: '/templates/artistic.png',
    category: 'Creative',
  },
];

export default function BuilderPage() {
  const searchParams = useSearchParams();
  const templateId = searchParams.get('template');
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);

  useEffect(() => {
    if (templateId) {
      const template = templates.find((t) => t.id === templateId);
      setSelectedTemplate(template || null);
    }
  }, [templateId]);

  const handleSubmit = (data: ResumeData) => {
    // Handle form submission with the selected template
    console.log('Form data:', data);
    console.log('Selected template:', selectedTemplate);
    // Here you would typically save the data and generate the resume
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {selectedTemplate ? (
            <div className="mb-6 sm:mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <h1 className="text-2xl sm:text-3xl font-bold text-indigo-900">Resume Builder</h1>
                <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-600">
                    {selectedTemplate.category}
                  </span>
                  <Link
                    href="/templates"
                    className="text-indigo-600 hover:text-indigo-700 transition-colors duration-200"
                  >
                    Change Template
                  </Link>
                </div>
              </div>
              <p className="mt-2 text-sm sm:text-base text-gray-600">
                Using template: <span className="font-medium">{selectedTemplate.name}</span>
              </p>
            </div>
          ) : (
            <div className="text-center mb-6 sm:mb-8">
              <h1 className="text-2xl sm:text-3xl font-bold text-indigo-900 mb-2 sm:mb-4">Resume Builder</h1>
              <p className="text-sm sm:text-base text-gray-600">
                Please select a template from the{' '}
                <Link href="/templates" className="text-indigo-600 hover:text-indigo-700">
                  templates page
                </Link>
              </p>
            </div>
          )}

          {selectedTemplate && (
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
              <ResumeForm onSubmit={handleSubmit} />
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
} 