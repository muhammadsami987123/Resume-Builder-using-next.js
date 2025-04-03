'use client';

import { Suspense } from 'react';
import ResumeForm from '@/components/ResumeForm';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ResumeData } from '@/types/resume';

function BuilderContent() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-indigo-900">Create Your Resume</h1>
              <p className="mt-4 text-xl text-indigo-600">
                Fill in your details to generate a professional resume
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <ResumeForm onSubmit={(data: ResumeData) => {
                localStorage.setItem('resumeData', JSON.stringify(data));
                window.location.href = '/preview';
              }} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default function BuilderPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BuilderContent />
    </Suspense>
  );
} 