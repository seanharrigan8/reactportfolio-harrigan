import React from "react";
import "./Footer.css";

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
  return (
    <footer className="footer">
        <p>
            @ 2024 Sean Harrigan
            <br />
            <a href="#top" className="footer-link" onClick={scrollToTop}>
                Back to top
            </a>

        </p>

    </footer>
  );
}

export default Footer;