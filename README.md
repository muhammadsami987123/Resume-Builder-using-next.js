# Resume Builder

A modern, responsive web application for creating professional resumes with customizable templates. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Multiple professional resume templates
- 📝 Easy-to-use form interface
- 🖼️ Profile picture upload
- 📚 Sections for Experience, Education, and Skills
- 📥 Download resume in PDF format
- 📱 Fully responsive design
- 🎯 Modern and clean UI

## Tech Stack

- [Next.js](https://nextjs.org) - React framework
- [TypeScript](https://www.typescriptlang.org) - Type safety
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [React PDF](https://react-pdf.org) - PDF generation

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/muhammadsami987123/Resume-Builder-using-next.js.git
cd resume-builder
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
resume-builder/
├── src/
│   ├── app/              # Next.js app directory
│   │   ├── page.tsx      # Home page
│   │   ├── builder/      # Resume builder page
│   │   ├── templates/    # Template selection page
│   │   └── preview/      # Resume preview page
│   ├── components/       # React components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── ResumeForm.tsx
│   │   └── ResumePreview.tsx
│   └── types/            # TypeScript type definitions
└── public/               # Static assets
    └── templates/        # Template images
```

## Usage

1. Select a template from the templates page
2. Fill in your personal information
3. Add your work experience
4. Add your education details
5. Include your skills
6. Preview your resume
7. Download as PDF

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com) for the utility-first CSS framework
- [React PDF](https://react-pdf.org) for PDF generation capabilities
