import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ScrollToTopButton from "../../../components/events/ScrollToTopButton/ScrollToTopButton";
import "./PrivacyPolicy.css";

const sections = [
  {
    heading: "Information We Collect",
    blocks: [
      {
        body: `We build a range of services that help people daily to explore and enjoy local culture and events. The information we collect, and how that information is used, depends on how you use our services.`,
      },
      {
        subheading: "Information you create or provide to us",
        body: `When you create an account, purchase a ticket, or list an event, you provide us with personal information that includes your name, email, phone number, and potentially financial details for organizers.`,
      },
      {
        subheading: "Information we collect as you use our services",
        body: `We collect information about how you interact with our platform, such as the events you view or your search queries. We also use cookies to improve your experience. You can learn more in our Cookie Policy.`,
      },
    ],
  },
  {
    heading: "Why We Collect Data",
    blocks: [
      {
        body: `We use data to build better, more helpful services. For example, your data helps us:`,
      },
      {
        subheading: "Provide our services",
        body: `We use your information to deliver our services, like processing your ticket purchases or helping organizers manage their events.`,
      },
      {
        subheading: "Maintain & improve our services",
        body: `We also use your information to ensure our services are working as intended, such as tracking outages or troubleshooting issues that you report to us.`,
      },
      {
        subheading: "Communicate with you",
        body: `We use information we collect, like your email address, to interact with you directly. For example, we may send you a notification about your ticket or let you know about upcoming changes to our services.`,
      },
      {
        subheading: "Protect our users, the public, and our platform",
        body: `We use information to help improve the safety and reliability of our services. This includes detecting, preventing, and responding to fraud, abuse, security risks, and technical issues.`,
      },
    ],
  },
  {
    heading: "Public Profile Information",
    blocks: [
      {
        body: `To help users find and connect with friends, certain basic profile information is public by default and visible to anyone on the internet, including search engines and guest visitors:`,
      },
      {
        subheading: "Public Information",
        body: `Your display name, unique username, and profile picture (avatar) are public.`,
      },
      {
        subheading: "Private Information",
        body: `Your email address, phone number, and specific event bookings ("Outings") are private. Specific event participation history is only visible to users you have mutually accepted into your "Circle" via the Loop In feature. We do not expose your ticket pricing, order IDs, or financial checkout details to anyone.`,
      },
    ],
  },
  {
    heading: "Sharing Your Information",
    blocks: [
      {
        body: `We do not share your personal information with companies, organizations, or individuals outside of See Tickets except in the following cases:`,
      },
      {
        subheading: "With your consent",
        body: `We'll get your permission before sharing your information.`,
      },
      {
        subheading: "With event organizers",
        body: `If you purchase a ticket, we share necessary information like your name and contact details with the organizer for event management purposes.`,
      },
      {
        subheading: "For external processing",
        body: `We provide information to our trusted service providers to process it for us, based on our instructions and in compliance with our Privacy Policy and other appropriate confidentiality and security measures. For example, we use service providers for payment processing.`,
      },
      {
        subheading: "For legal reasons",
        body: `We will share personal information if we have a good-faith belief that it is necessary to meet any applicable law, regulation, legal process, or enforceable governmental request.`,
      },
    ],
  },
  {
    heading: "Managing and Deleting Your Information",
    blocks: [
      {
        body: `You have choices regarding the information we collect and how it's used. You can review and update your information in your account settings. You also have the right to request the deletion of your personal data. For more detail on how we handle data retention and deletion requests, please see our Data Policy.`,
      },
    ],
  },
];

function PrivacyPolicy() {
  const navigate = useNavigate();

  return (
    <div className="privacy-page">
      {/* Top bar */}
      <div className="privacy-topbar">
        <button className="privacy-back-btn" onClick={() => navigate(-1)}>
          <ArrowLeft />
          Back to Home
        </button>
      </div>

      {/* Card */}
      <div className="privacy-card">
        <h1 className="privacy-title">Privacy Policy</h1>
        <p className="privacy-published">Published on: 10th July 2025</p>

        <p className="privacy-intro">
          When you use See Tickets, you're trusting us with your information. We
          understand this is a big responsibility and work hard to protect your
          information and put you in control. This Privacy Policy is meant to
          help you understand what information we collect, why we collect it,
          and how you can update, manage, and delete your information.
        </p>

        <div className="privacy-sections">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="privacy-section-heading">{section.heading}</h2>
              <hr className="privacy-divider" />

              <div className="privacy-blocks">
                {section.blocks.map((block, i) => (
                  <div key={i}>
                    {block.subheading && (
                      <h3 className="privacy-subheading">{block.subheading}</h3>
                    )}
                    {block.body.split("\n\n").map((para, j) => (
                      <p key={j} className="privacy-paragraph">
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
            <hr className="privacy-footer-divider" />
            <p className="privacy-footer-note">Proclaimed by ICITIFIED LLP</p>
          </div>
        </div>
      </div>
      <ScrollToTopButton />
    </div>
  );
}

export default PrivacyPolicy;
