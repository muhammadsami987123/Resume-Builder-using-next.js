import { useState } from 'react';
import { ResumeData,  Experience, Education, Skill } from '../types/resume';
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface ResumeFormProps {
  onSubmit: (data: ResumeData) => void;
  onDownloadPDF?: () => void;
}

export default function ResumeForm({ onSubmit, onDownloadPDF }: ResumeFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState<ResumeData>({
    personalInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
      summary: '',
      profilePicture: null,
    },
    experience: [],
    education: [],
    skills: [],
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.personalInfo.firstName || !formData.personalInfo.lastName || !formData.personalInfo.email) {
      alert('Please fill in all required fields');
      return;
    }

    try {
      // Call the onSubmit prop with the form data
      onSubmit(formData);
      
      // Navigate to the preview page
      router.push('/preview');
    } catch (error) {
      console.error('Error generating resume:', error);
      alert('Failed to generate resume. Please try again.');
    }
  };

  const handlePersonalInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [name]: value,
      },
    }));
  };

  const handleProfilePictureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          personalInfo: {
            ...prev.personalInfo,
            profilePicture: reader.result as string,
          },
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const addExperience = () => {
    const newExperience: Experience = {
      id: uuidv4(),
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      description: '',
    };
    setFormData((prev) => ({
      ...prev,
      experience: [...prev.experience, newExperience],
    }));
  };

  const handleExperienceChange = (index: number, field: keyof Experience, value: string) => {
    setFormData((prev) => {
      const updatedExperience = [...prev.experience];
      updatedExperience[index] = {
        ...updatedExperience[index],
        [field]: value,
      };
      return {
        ...prev,
        experience: updatedExperience,
      };
    });
  };

  const removeExperience = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      experience: prev.experience.filter((_, i) => i !== index),
    }));
  };

  const addEducation = () => {
    const newEducation: Education = {
      id: uuidv4(),
      school: '',
      degree: '',
      field: '',
      startDate: '',
      endDate: '',
      description: '',
    };
    setFormData((prev) => ({
      ...prev,
      education: [...prev.education, newEducation],
    }));
  };

  const handleEducationChange = (index: number, field: keyof Education, value: string) => {
    setFormData((prev) => {
      const updatedEducation = [...prev.education];
      updatedEducation[index] = {
        ...updatedEducation[index],
        [field]: value,
      };
      return {
        ...prev,
        education: updatedEducation,
      };
    });
  };

  const removeEducation = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index),
    }));
  };

  const addSkill = () => {
    const newSkill: Skill = {
      id: uuidv4(),
      name: '',
      level: 0,
    };
    setFormData((prev) => ({
      ...prev,
      skills: [...prev.skills, newSkill],
    }));
  };

  const handleSkillChange = (index: number, field: keyof Skill, value: string | number) => {
    setFormData((prev) => {
      const updatedSkills = [...prev.skills];
      updatedSkills[index] = {
        ...updatedSkills[index],
        [field]: value,
      };
      return {
        ...prev,
        skills: updatedSkills,
      };
    });
  };

  const removeSkill = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index),
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Personal Information Section */}
      <div className="bg-white rounded-xl shadow-lg p-6 space-y-6">
        <h2 className="text-2xl font-bold text-indigo-900 mb-6">Personal Information</h2>
        
        {/* Profile Picture Upload */}
        <div className="flex flex-col items-center space-y-4">
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-indigo-200">
            {formData.personalInfo.profilePicture ? (
              <Image
                src={formData.personalInfo.profilePicture}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-indigo-100 flex items-center justify-center">
                <svg className="w-16 h-16 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            )}
          </div>
          <label className="cursor-pointer">
            <input
              type="file"
              accept="image/*"
              onChange={handleProfilePictureChange}
              className="hidden"
            />
            <span className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200">
              Upload Photo
            </span>
          </label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.personalInfo.firstName}
              onChange={handlePersonalInfoChange}
              className="w-full rounded-lg border-2 border-indigo-200 bg-white px-4 py-2 text-indigo-900 shadow-sm transition-colors duration-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.personalInfo.lastName}
              onChange={handlePersonalInfoChange}
              className="w-full rounded-lg border-2 border-indigo-200 bg-white px-4 py-2 text-indigo-900 shadow-sm transition-colors duration-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.personalInfo.email}
              onChange={handlePersonalInfoChange}
              className="w-full rounded-lg border-2 border-indigo-200 bg-white px-4 py-2 text-indigo-900 shadow-sm transition-colors duration-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.personalInfo.phone}
              onChange={handlePersonalInfoChange}
              className="w-full rounded-lg border-2 border-indigo-200 bg-white px-4 py-2 text-indigo-900 shadow-sm transition-colors duration-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.personalInfo.address}
              onChange={handlePersonalInfoChange}
              className="w-full rounded-lg border-2 border-indigo-200 bg-white px-4 py-2 text-indigo-900 shadow-sm transition-colors duration-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.personalInfo.city}
              onChange={handlePersonalInfoChange}
              className="w-full rounded-lg border-2 border-indigo-200 bg-white px-4 py-2 text-indigo-900 shadow-sm transition-colors duration-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>
          <div>
            <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
              State
            </label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.personalInfo.state}
              onChange={handlePersonalInfoChange}
              className="w-full rounded-lg border-2 border-indigo-200 bg-white px-4 py-2 text-indigo-900 shadow-sm transition-colors duration-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>
          <div>
            <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
              ZIP Code
            </label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              value={formData.personalInfo.zipCode}
              onChange={handlePersonalInfoChange}
              className="w-full rounded-lg border-2 border-indigo-200 bg-white px-4 py-2 text-indigo-900 shadow-sm transition-colors duration-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="summary" className="block text-sm font-medium text-gray-700 mb-1">
              Professional Summary
            </label>
            <textarea
              id="summary"
              name="summary"
              value={formData.personalInfo.summary}
              onChange={handlePersonalInfoChange}
              rows={4}
              className="w-full rounded-lg border-2 border-indigo-200 bg-white px-4 py-2 text-indigo-900 shadow-sm transition-colors duration-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-indigo-900">Experience</h2>
          <button
            type="button"
            onClick={addExperience}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
          >
            <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add Experience
          </button>
        </div>
        {formData.experience.map((exp, index) => (
          <div key={exp.id} className="mb-6 p-6 border border-indigo-100 rounded-lg bg-indigo-50">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold text-indigo-900">Experience #{index + 1}</h3>
              <button
                type="button"
                onClick={() => removeExperience(index)}
                className="text-red-500 hover:text-red-700 transition-colors duration-200"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-indigo-900 mb-1">Company</label>
                <input
                  type="text"
                  value={exp.company}
                  onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
                  className="w-full rounded-md border-2 border-indigo-200 bg-white px-4 py-2 text-indigo-900 shadow-sm transition-colors duration-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-indigo-900 mb-1">Position</label>
                <input
                  type="text"
                  value={exp.position}
                  onChange={(e) => handleExperienceChange(index, 'position', e.target.value)}
                  className="w-full rounded-md border-2 border-indigo-200 bg-white px-4 py-2 text-indigo-900 shadow-sm transition-colors duration-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-indigo-900 mb-1">Start Date</label>
                <input
                  type="date"
                  value={exp.startDate}
                  onChange={(e) => handleExperienceChange(index, 'startDate', e.target.value)}
                  className="w-full rounded-md border-2 border-indigo-200 bg-white px-4 py-2 text-indigo-900 shadow-sm transition-colors duration-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-indigo-900 mb-1">End Date</label>
                <input
                  type="date"
                  value={exp.endDate}
                  onChange={(e) => handleExperienceChange(index, 'endDate', e.target.value)}
                  className="w-full rounded-md border-2 border-indigo-200 bg-white px-4 py-2 text-indigo-900 shadow-sm transition-colors duration-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-indigo-900 mb-1">Description</label>
                <textarea
                  value={exp.description}
                  onChange={(e) => handleExperienceChange(index, 'description', e.target.value)}
                  rows={3}
                  className="w-full rounded-md border-2 border-indigo-200 bg-white px-4 py-2 text-indigo-900 shadow-sm transition-colors duration-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Education Section */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-indigo-900">Education</h2>
          <button
            type="button"
            onClick={addEducation}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
          >
            <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add Education
          </button>
        </div>
        {formData.education.map((edu, index) => (
          <div key={edu.id} className="mb-6 p-6 border border-indigo-100 rounded-lg bg-indigo-50">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold text-indigo-900">Education #{index + 1}</h3>
              <button
                type="button"
                onClick={() => removeEducation(index)}
                className="text-red-500 hover:text-red-700 transition-colors duration-200"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-indigo-900 mb-1">School</label>
                <input
                  type="text"
                  value={edu.school}
                  onChange={(e) => handleEducationChange(index, 'school', e.target.value)}
                  className="w-full rounded-md border-2 border-indigo-200 bg-white px-4 py-2 text-indigo-900 shadow-sm transition-colors duration-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-indigo-900 mb-1">Degree</label>
                <input
                  type="text"
                  value={edu.degree}
                  onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
                  className="w-full rounded-md border-2 border-indigo-200 bg-white px-4 py-2 text-indigo-900 shadow-sm transition-colors duration-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-indigo-900 mb-1">Field of Study</label>
                <input
                  type="text"
                  value={edu.field}
                  onChange={(e) => handleEducationChange(index, 'field', e.target.value)}
                  className="w-full rounded-md border-2 border-indigo-200 bg-white px-4 py-2 text-indigo-900 shadow-sm transition-colors duration-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-indigo-900 mb-1">Start Date</label>
                <input
                  type="date"
                  value={edu.startDate}
                  onChange={(e) => handleEducationChange(index, 'startDate', e.target.value)}
                  className="w-full rounded-md border-2 border-indigo-200 bg-white px-4 py-2 text-indigo-900 shadow-sm transition-colors duration-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-indigo-900 mb-1">End Date</label>
                <input
                  type="date"
                  value={edu.endDate}
                  onChange={(e) => handleEducationChange(index, 'endDate', e.target.value)}
                  className="w-full rounded-md border-2 border-indigo-200 bg-white px-4 py-2 text-indigo-900 shadow-sm transition-colors duration-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-indigo-900 mb-1">Description</label>
                <textarea
                  value={edu.description}
                  onChange={(e) => handleEducationChange(index, 'description', e.target.value)}
                  rows={3}
                  className="w-full rounded-md border-2 border-indigo-200 bg-white px-4 py-2 text-indigo-900 shadow-sm transition-colors duration-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Skills Section */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-indigo-900">Skills</h2>
          <button
            type="button"
            onClick={addSkill}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
          >
            <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add Skill
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {formData.skills.map((skill, index) => (
            <div key={skill.id} className="flex items-center space-x-4 p-4 border border-indigo-100 rounded-lg bg-indigo-50">
              <div className="flex-grow">
                <input
                  type="text"
                  value={skill.name}
                  onChange={(e) => handleSkillChange(index, 'name', e.target.value)}
                  placeholder="Skill Name"
                  className="w-full rounded-md border-2 border-indigo-200 bg-white px-4 py-2 text-indigo-900 shadow-sm transition-colors duration-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div className="w-24">
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={skill.level}
                  onChange={(e) => handleSkillChange(index, 'level', parseInt(e.target.value))}
                  placeholder="Level"
                  className="w-full rounded-md border-2 border-indigo-200 bg-white px-4 py-2 text-indigo-900 shadow-sm transition-colors duration-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <button
                type="button"
                onClick={() => removeSkill(index)}
                className="text-red-500 hover:text-red-700 transition-colors duration-200"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={() => router.push('/templates')}
          className="inline-flex items-center px-6 py-3 border border-indigo-600 text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 transition-colors duration-200"
        >
          Back to Templates
        </button>
        <button
          type="submit"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
        >
          Generate Resume
        </button>
      </div>
    </form>
  );
} 