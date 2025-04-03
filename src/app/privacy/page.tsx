'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-indigo-900 mb-8">Privacy Policy</h1>
          
          <div className="space-y-8">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-semibold text-indigo-900 mb-4">Introduction</h2>
              <div className="prose prose-indigo max-w-none">
                <p>
                  At Resume Builder, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
                </p>
                <p>
                  Please read this Privacy Policy carefully. By accessing or using our website, you acknowledge that you have read, understood, and agree to be bound by all the terms of this Privacy Policy.
                </p>
              </div>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="text-2xl font-semibold text-indigo-900 mb-4">Information We Collect</h2>
              <div className="prose prose-indigo max-w-none">
                <h3 className="text-xl font-semibold text-indigo-800">Personal Information</h3>
                <p>We may collect personal information that you voluntarily provide to us when you:</p>
                <ul>
                  <li>Create an account</li>
                  <li>Fill out a resume form</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Contact us for support</li>
                </ul>
                <p>This information may include your name, email address, phone number, and other details you choose to provide.</p>

                <h3 className="text-xl font-semibold text-indigo-800 mt-6">Usage Data</h3>
                <p>We automatically collect certain information when you visit our website, including:</p>
                <ul>
                  <li>IP address</li>
                  <li>Browser type and version</li>
                  <li>Pages visited</li>
                  <li>Time spent on pages</li>
                  <li>Referring website</li>
                </ul>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section>
              <h2 className="text-2xl font-semibold text-indigo-900 mb-4">How We Use Your Information</h2>
              <div className="prose prose-indigo max-w-none">
                <p>We use the information we collect to:</p>
                <ul>
                  <li>Provide and maintain our services</li>
                  <li>Process your resume generation requests</li>
                  <li>Send you important updates and notifications</li>
                  <li>Improve our website and services</li>
                  <li>Respond to your inquiries and support requests</li>
                  <li>Send you marketing communications (with your consent)</li>
                </ul>
              </div>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-2xl font-semibold text-indigo-900 mb-4">Data Security</h2>
              <div className="prose prose-indigo max-w-none">
                <p>
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
                <p>
                  However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
                </p>
              </div>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl font-semibold text-indigo-900 mb-4">Your Rights</h2>
              <div className="prose prose-indigo max-w-none">
                <p>You have the right to:</p>
                <ul>
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Object to processing of your information</li>
                  <li>Request restriction of processing</li>
                  <li>Data portability</li>
                  <li>Withdraw consent</li>
                </ul>
              </div>
            </section>

            {/* Contact Us */}
            <section>
              <h2 className="text-2xl font-semibold text-indigo-900 mb-4">Contact Us</h2>
              <div className="prose prose-indigo max-w-none">
                <p>
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <p>
                  Email: privacy@resumebuilder.com<br />
                  Address: 123 Resume Street, Suite 100, Resume City, RC 12345
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 