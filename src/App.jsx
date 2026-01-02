import React, { useState, useRef } from 'react';

// ===============================
// COMPONENTS
// ===============================
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import StudentForm from './components/StudentForm.jsx';
import LanguageToggle from './components/LanguageToggle.jsx';
import LetterPreview from './components/LetterPreview.jsx';
import FloatingActions from './components/FloatingActions.jsx';

// ===============================
// LETTER TEMPLATES
// ===============================
import englishLetter from './letters/letter.en.js';
import hindiLetter from './letters/letter.hi.js';

// ===============================
// UTILS
// ===============================
import { generatePDF } from './utils/pdfGenerator.js';
import { logStudentActivity } from './firebase/logService.js';
import { scrollToElement } from './utils/scrollHelpers.js';

const App = () => {
  // ===============================
  // STATE
  // ===============================
  const [studentData, setStudentData] = useState(null);
  const [language, setLanguage] = useState('en');
  const [letterContent, setLetterContent] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  // ===============================
  // REFS
  // ===============================
  const previewRef = useRef(null);

  // ===============================
  // HANDLERS
  // ===============================
  const handleFormSubmit = (data) => {
    setStudentData(data);
    setLanguage('en');
    setLetterContent(englishLetter(data));
    setIsSubmitted(true);

    setTimeout(() => {
      scrollToElement(previewRef, 80);
    }, 100);
  };

  const handleLanguageChange = (lang) => {
    if (!studentData) return;

    setLanguage(lang);
    setLetterContent(
      lang === 'hi'
        ? hindiLetter(studentData)
        : englishLetter(studentData)
    );
  };

  const handleDownloadPDF = () => {
    if (!studentData || !letterContent || isGeneratingPDF) return;

    setIsGeneratingPDF(true);

    try {
      generatePDF({ studentData, letterContent });

      logStudentActivity({
        studentData,
        language,
        action: 'pdf_download'
      });
    } catch (error) {
      console.error('PDF generation failed:', error);
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  const handleSendMail = () => {
    if (!studentData || !letterContent) return;

    logStudentActivity({
      studentData,
      language,
      action: 'send_mail'
    });

    const subject = encodeURIComponent(
      'Submission of Academic Representation'
    );

    const body = encodeURIComponent(
      `${letterContent}\n\nSincerely,\n${studentData.fullName}`
    );

    const to = encodeURIComponent(
      'mrizvi@jmi.ac.in,c.smoinuddin@jmi.ac.in,mhaque4@jmi.ac.in,g.mgaffar@jmi.ac.in'
    );
    
    const cc = encodeURIComponent('vc@jmi.in');


    window.location.href = `mailto:${to}?cc=${cc}&subject=${subject}&body=${body}`;

  };

  // ===============================
  // RENDER
  // ===============================
  return (
    <>
      <Header />

      <main className="app-container">
        <StudentForm onSubmit={handleFormSubmit} />

        {isSubmitted && (
          <LanguageToggle
            language={language}
            onChange={handleLanguageChange}
          />
        )}

        {isSubmitted && (
          <section ref={previewRef}>
            <LetterPreview
              content={letterContent}
              onChange={setLetterContent}
            />
          </section>
        )}

        {isSubmitted && (
          <FloatingActions
            onDownload={handleDownloadPDF}
            onSendMail={handleSendMail}
            isGenerating={isGeneratingPDF}
          />
        )}
      </main>

      <Footer />
    </>
  );
};

export default App;
