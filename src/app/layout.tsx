import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Resume Builder - Create Professional Resumes Online',
  description: 'Create professional resumes in minutes with our easy-to-use resume builder. Choose from multiple templates, customize your content, and download your resume in PDF format.',
  keywords: 'resume builder, cv builder, professional resume, resume templates, job application',
  authors: [{ name: 'Resume Builder Team' }],
  creator: 'Resume Builder',
  publisher: 'Resume Builder',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#4F46E5',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} min-h-screen flex flex-col bg-gray-50`}>
        {/* <Navbar /> */}
        <main className="flex-grow">
          {children}
        </main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
