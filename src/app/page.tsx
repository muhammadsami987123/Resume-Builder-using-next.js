'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ResumeForm from '@/components/ResumeForm';
import ResumePreview from '@/components/ResumePreview';
import { ResumeData } from '../types/resume';

export default function Home() {
  const [resumeData, setResumeData] = useState<ResumeData | null>(null);

  const handleSubmit = (data: ResumeData) => {
    setResumeData(data);
  };

  const handleDownloadPDF = () => {
    if (resumeData) {
      const link = document.createElement('a');
      link.download = 'resume.pdf';
      link.href = URL.createObjectURL(new Blob([JSON.stringify(resumeData)], { type: 'application/pdf' }));
      link.click();
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-indigo-900">Professional Resume Builder</h1>
              <p className="mt-4 text-xl text-indigo-600">
                Create your perfect resume in minutes
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <ResumeForm 
                  onSubmit={handleSubmit}
                  onDownloadPDF={resumeData ? handleDownloadPDF : undefined}
                />
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                {resumeData ? (
                  <ResumePreview data={resumeData} />
                ) : (
                  <div className="flex items-center justify-center h-full p-8">
                    <div className="text-center text-gray-500">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      <h3 className="mt-2 text-sm font-medium text-gray-900">No resume yet</h3>
                      <p className="mt-1 text-sm text-gray-500">Fill out the form to generate your resume</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
