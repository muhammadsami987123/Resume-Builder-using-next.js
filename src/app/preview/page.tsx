'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ResumeData } from '@/types/resume';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PreviewPage() {
  const [resumeData, setResumeData] = useState<ResumeData | null>(null);

  useEffect(() => {
    // Get resume data from localStorage
    const savedResume = localStorage.getItem('resumeData');
    if (savedResume) {
      setResumeData(JSON.parse(savedResume));
    }
  }, []);

  if (!resumeData) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-indigo-900 mb-4">No Resume Data Found</h1>
            <p className="text-gray-600 mb-6">Please go back and fill out the resume form.</p>
            <button
              onClick={() => window.history.back()}
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200"
            >
              Go Back
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-indigo-900">
                {resumeData.personalInfo.firstName} {resumeData.personalInfo.lastName}
              </h1>
              <p className="text-gray-600">{resumeData.personalInfo.email}</p>
              <p className="text-gray-600">{resumeData.personalInfo.phone}</p>
            </div>
            {resumeData.personalInfo.profilePicture && (
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-indigo-200">
                <Image
                  src={resumeData.personalInfo.profilePicture}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>

          {/* Summary */}
          {resumeData.personalInfo.summary && (
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-indigo-900 mb-2">Professional Summary</h2>
              <p className="text-gray-700">{resumeData.personalInfo.summary}</p>
            </div>
          )}

          {/* Experience */}
          {resumeData.experience.length > 0 && (
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-indigo-900 mb-4">Experience</h2>
              {resumeData.experience.map((exp) => (
                <div key={exp.id} className="mb-6">
                  <h3 className="text-lg font-semibold text-indigo-900">{exp.position}</h3>
                  <p className="text-gray-600">{exp.company}</p>
                  <p className="text-gray-500 text-sm">
                    {exp.startDate} - {exp.endDate}
                  </p>
                  <p className="text-gray-700 mt-2">{exp.description}</p>
                </div>
              ))}
            </div>
          )}

          {/* Education */}
          {resumeData.education.length > 0 && (
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-indigo-900 mb-4">Education</h2>
              {resumeData.education.map((edu) => (
                <div key={edu.id} className="mb-6">
                  <h3 className="text-lg font-semibold text-indigo-900">{edu.degree}</h3>
                  <p className="text-gray-600">{edu.school}</p>
                  <p className="text-gray-500 text-sm">
                    {edu.startDate} - {edu.endDate}
                  </p>
                  <p className="text-gray-700 mt-2">{edu.description}</p>
                </div>
              ))}
            </div>
          )}

          {/* Skills */}
          {resumeData.skills.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold text-indigo-900 mb-4">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {resumeData.skills.map((skill) => (
                  <div
                    key={skill.id}
                    className="px-4 py-2 bg-indigo-100 text-indigo-900 rounded-full"
                  >
                    {skill.name} ({skill.level}%)
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="mt-8 flex justify-end space-x-4">
            <button
              onClick={() => window.history.back()}
              className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors duration-200"
            >
              Edit Resume
            </button>
            <button
              onClick={() => window.print()}
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200"
            >
              Download PDF
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 