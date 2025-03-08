import React from "react";

const Footer = () => {
  return (
    <footer className="footer footer-center p-4 bg-neutral text-neutral-content fixed bottom-0 left-0 w-full z-50">
      <div>
        <h2 className="font-bold text-xl">Destinaguide</h2>
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
