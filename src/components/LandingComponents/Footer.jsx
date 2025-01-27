import React from 'react';

const Footer = () => {
  return (
    <footer style={{ background: '#000000', color: '#fff', padding: '1.5rem 2rem', textAlign: 'center' }}>
      <div style={{ marginBottom: '1rem' }}>
        <h3 style={{ margin: '0', fontSize: '1.5rem' }}>SwapBuddy</h3>
        <p style={{ margin: '0.5rem 0', fontSize: '0.9rem', color: '#ccc' }}>
          A solution to all your timetable issues.
        </p>
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1.5rem',
          marginBottom: '1rem',
        }}
      >
        <a
          href="/about"
          style={{ color: '#fff', textDecoration: 'none', fontSize: '0.9rem' }}
        >
          About Us
        </a>
        <a
          href="/contact"
          style={{ color: '#fff', textDecoration: 'none', fontSize: '0.9rem' }}
        >
          Contact
        </a>
        <a
          href="/privacy"
          style={{ color: '#fff', textDecoration: 'none', fontSize: '0.9rem' }}
        >
          Privacy Policy
        </a>
        <a
          href="/terms"
          style={{ color: '#fff', textDecoration: 'none', fontSize: '0.9rem' }}
        >
          Terms of Service
        </a>
      </div>
      <div>
        <p style={{ margin: '0', fontSize: '0.8rem', color: '#aaa' }}>
          &copy; {new Date().getFullYear()} SwapBuddy. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
