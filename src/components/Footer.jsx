import React from "react";

const Footer = () => {
  return (
    <footer
      className="footer footer-center p-4"
      style={{
        backgroundColor: "var(--card-bg-color)",
        color: "var(--text-color)",
        borderTop: "1px solid var(--border-color)",
      }}
    >
      <div>
        <h2 className="text-2xl font-bold text-gray-400">
          Destina<span className="font-bold text-purple-400">Guide</span>
        </h2>
        <p className="text-sm">Your ultimate tourism guide.</p>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Destinaguide. All rights reserved.
        </p>
        <div className="grid grid-flow-col gap-4">
          <a className="link link-hover" href="mailto:contact@destinaguide.com">
            Contact
          </a>
          <a
            className="link link-hover"
            href="https://facebook.com/destinaguide"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            className="link link-hover"
            href="https://twitter.com/destinaguide"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            className="link link-hover"
            href="https://instagram.com/destinaguide"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
