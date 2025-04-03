'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function LegalPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-indigo-900 mb-8">Legal Information</h1>
          
          <div className="space-y-8">
            {/* Legal Notice */}
            <section>
              <h2 className="text-2xl font-semibold text-indigo-900 mb-4">Legal Notice</h2>
              <div className="prose prose-indigo max-w-none">
                <p>
                  This website is operated by Resume Builder. By accessing or using our website, you agree to be bound by these terms and conditions.
                </p>
                <p>
                  All content provided on this website is for informational purposes only. We make no representations as to the accuracy or completeness of any information on this site or found by following any link on this site.
                </p>
              </div>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-2xl font-semibold text-indigo-900 mb-4">Intellectual Property</h2>
              <div className="prose prose-indigo max-w-none">
                <p>
                  All content, including but not limited to text, graphics, logos, button icons, images, audio clips, digital downloads, data compilations, and software, is the property of Resume Builder or its content suppliers and protected by international copyright laws.
                </p>
                <p>
                  The compilation of all content on this site is the exclusive property of Resume Builder and protected by international copyright laws.
                </p>
              </div>
            </section>

            {/* User Content */}
            <section>
              <h2 className="text-2xl font-semibold text-indigo-900 mb-4">User Content</h2>
              <div className="prose prose-indigo max-w-none">
                <p>
                  By submitting content to our website, you grant Resume Builder a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, and distribute your content in any existing or future media.
                </p>
                <p>
                  You represent and warrant that your content does not violate any third-party rights, including intellectual property rights and privacy rights.
                </p>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-2xl font-semibold text-indigo-900 mb-4">Limitation of Liability</h2>
              <div className="prose prose-indigo max-w-none">
                <p>
                  Resume Builder shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your access to or use of, or inability to access or use, the website or any content provided on or through the website.
                </p>
              </div>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-2xl font-semibold text-indigo-900 mb-4">Governing Law</h2>
              <div className="prose prose-indigo max-w-none">
                <p>
                  These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which Resume Builder operates, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                </p>
              </div>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-semibold text-indigo-900 mb-4">Contact Information</h2>
              <div className="prose prose-indigo max-w-none">
                <p>
                  If you have any questions about these terms and conditions, please contact us at:
                </p>
                <p>
                  Email: legal@resumebuilder.com<br />
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