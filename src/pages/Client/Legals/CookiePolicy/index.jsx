import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ScrollToTopButton from "../../../../components/events/ScrollToTopButton/ScrollToTopButton";
import "./CookiePolicy.css";

const sections = [
  {
    heading: "What are cookies?",
    blocks: [
      {
        body: `A cookie is a small piece of text sent to your browser by a website you visit. It helps the website remember information about your visit, which can make it easier to visit the site again and make the site more useful to you.`,
      },
    ],
  },
  {
    heading: "How See Tickets uses cookies",
    blocks: [
      {
        body: `We use cookies for several purposes, such as to make our services work, remember your preferences, and protect your account. Here's a look at the types of cookies we use:`,
      },
      {
        subheading: "Essential Cookies",
        body: `These are necessary for the core functionality of our services. For example, we use a cookie to keep you signed in. Without it, you'd have to sign in again on every page. These cookies are essential for security and accessibility.`,
      },
      {
        subheading: "Functionality Cookies",
        body: `These cookies remember your settings and preferences, like your preferred language, to provide a more personalized experience.`,
      },
      {
        subheading: "Performance & Analytics Cookies",
        body: `We use these cookies to understand how you interact with our services. This helps us find and fix problems and improve our platform for everyone.`,
      },
      {
        body: `For a more detailed look at how we handle your information, you can always read our main Privacy Policy.`,
      },
    ],
  },
  {
    heading: "Your choices",
    blocks: [
      {
        body: `You have choices about how cookies are used. Your browser will allow you to manage cookies from the websites you visit. You can typically find these settings in the 'options' or 'preferences' menu of your browser.

Keep in mind that if you disable certain cookies, some features of See Tickets may not function correctly.`,
      },
    ],
  },
];

function CookiePolicy() {
  const navigate = useNavigate();

  return (
    <div className="cookie-page">
      {/* Top bar */}
      <div className="cookie-topbar">
        <button className="cookie-back-btn" onClick={() => navigate(-1)}>
          <ArrowLeft />
          Back to Home
        </button>
      </div>

      {/* Card */}
      <div className="cookie-card">
        <h1 className="cookie-title">Cookie Policy</h1>
        <p className="cookie-published">Published on: 10th July 2025</p>

        <div className="cookie-sections">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="cookie-section-heading">{section.heading}</h2>
              <hr className="cookie-divider" />

              <div className="cookie-blocks">
                {section.blocks.map((block, i) => (
                  <div key={i}>
                    {block.subheading && (
                      <h3 className="cookie-subheading">{block.subheading}</h3>
                    )}
                    {block.body.split("\n\n").map((para, j) => (
                      <p key={j} className="cookie-paragraph">
                        {para}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </section>
          ))}

          {/* Footer */}
          <div>
            <hr className="cookie-footer-divider" />
            <p className="cookie-footer-note">Proclaimed by ICITIFIED LLP</p>
          </div>
        </div>
      </div>
      <ScrollToTopButton />
    </div>
  );
}

export default CookiePolicy;
