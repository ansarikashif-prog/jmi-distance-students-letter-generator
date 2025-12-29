import React from 'react';

/**
 * Footer Component
 * Displays contextual copyright and academic support information.
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="app-footer">
      <div className="app-footer-inner">
        <p>
          © {currentYear} Student Letter Generator · Supporting students with
          post-result academic letters and assignment requests.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
