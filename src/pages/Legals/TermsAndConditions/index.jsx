import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ScrollToTopButton from "../../../components/events/ScrollToTopButton/ScrollToTopButton";
import "./TermsAndConditions.css";

const sections = [
  {
    heading: "Welcome to Locality",
    blocks: [
      {
        body: `Thank you for using Locality! Our mission is to create a vibrant hub for local communities. These Terms and Conditions ("Terms") define the relationship between you and Locality. When we speak of "we", "us", and "our", we mean Locality. By using our services, you agree to these terms, so please read them carefully.`,
      },
    ],
  },
  {
    heading: "What you can expect from us",
    blocks: [
      {
        subheading: "A Broad Range of Useful Services",
        body: `We provide a marketplace to connect event organizers, vendors, and attendees. We work hard to maintain a safe and respectful environment for everyone. This includes developing and enforcing policies that prohibit harmful content and behavior.`,
      },
      {
        subheading: "Continuous Improvement",
        body: `We're constantly developing new features and technologies to improve our services. As part of this, we may add or remove features, change usage limits, or update our platform. We will provide notice when making a material change that negatively impacts your use of our services.`,
      },
    ],
  },
  {
    heading: "What we expect from you",
    blocks: [
      {
        subheading: "Follow these terms and the law",
        body: `The permission we give you to use our services continues as long as you meet your responsibilities in these terms and our Privacy Policy. You are responsible for ensuring your activities on the platform, whether you're listing an event or buying a ticket, comply with all applicable laws.`,
      },
      {
        subheading: "Respect others",
        body: `Our community is built on respect. You must not engage in fraudulent, abusive, or illegal activities. Do not misuse our services, interfere with them, or try to access them using a method other than the interface and the instructions we provide.`,
      },
    ],
  },
  {
    heading: "Content on Locality",
    blocks: [
      {
        subheading: "Your content",
        body: `Our service allows you to upload your own content, like event descriptions and posters. You retain ownership of any intellectual property rights that you hold in that content. In short, what belongs to you stays yours.

When you upload content, you give Locality a worldwide, royalty-free license to use, host, store, reproduce, and display that content for the purpose of operating, promoting, and improving our services.`,
      },
      {
        subheading: "Platform content",
        body: `Our services also contain content that belongs to Locality — for example, our logos, branding, and the design of the platform. You may use this content as permitted by these terms, but we retain all intellectual property rights.`,
      },
    ],
  },
  {
    heading: "Viewing and Managing Your Tickets",
    blocks: [
      {
        subheading: "Accessing your tickets",
        body: `Once a purchase is confirmed, your tickets are available in the "My Tickets" section of your account. Each ticket includes a unique QR code used for entry verification at the event venue. You are responsible for keeping your ticket and account credentials secure, as we cannot guarantee entry for tickets that have been shared, screenshotted, or distributed to others.`,
      },
      {
        subheading: "Cancellations and refunds",
        body: `Refund eligibility is set by the individual event organizer and is shown on the event page before you complete a purchase. Where an organizer permits cancellations, refunds will be processed to your original payment method within a reasonable time after approval. Locality does not guarantee refunds for events that are not cancelled or rescheduled by the organizer.

If an event is cancelled or rescheduled by the organizer, you will be notified through the contact details on your account, and any applicable refund or rescheduling options will be made available in your "My Tickets" section.`,
      },
      {
        subheading: "Ticket transfers",
        body: `Where an event organizer allows it, you may transfer a ticket to another user through the platform. Once a transfer is completed, the original ticket is deactivated and only the new holder's ticket will be valid for entry. Locality is not responsible for tickets transferred or shared outside the platform's transfer feature.`,
      },
    ],
  },
  {
    heading: "Profiles and Social Discovery",
    blocks: [
      {
        subheading: "Public Profile Visibility",
        body: `To foster social discovery and community building, when you create a Locality profile, your Name, unique Username, and Profile Picture are made publicly accessible on the internet. This allows other users and public visitors to search for, identify, and send connection requests to you.`,
      },
      {
        subheading: "The Loop In Feature",
        body: `Locality features a connection system called "Loop In". Sending a connection request or accepting one establishes a mutual social link ("Looped" status). While public details are accessible to anyone, details of your personal outings and your circle (people you're Looped with) remain private by default and are only shared with users in your mutual "Circle" (those with whom you are mutually Looped).

When you create a profile, we automatically create a unique profile link (e.g., locality.in/u/YourUniqueName). Locality is not liable for any consequences arising from the sharing of this link.`,
      },
    ],
  },
  {
    heading: "Delivery Partner Terms",
    blocks: [
      {
        body: `By signing up as a Delivery Partner, you agree to act as an independent contractor. You are responsible for your own vehicle, safety, and compliance with all local traffic laws. You agree to represent Locality professionally and ensure timely and secure delivery of physical tickets. Payouts for completed deliveries will be made to your verified bank account based on the fee structure agreed upon. We reserve the right to deactivate your partner account for any violation of these terms or for safety concerns. For full details on the delivery process, please see our Delivery Policy.`,
      },
    ],
  },
  {
    heading: "Service-related details",
    blocks: [
      {
        subheading: "Platform's Role as an Intermediary",
        body: `Locality acts solely as an intermediary. We don't own, control, operate, or guarantee the quality or safety of events listed by third-party organizers. We provide the marketplace, but the contract for the event service is between the organizer and the attendee.`,
      },
      {
        subheading: "Platform's Right to Manage the Marketplace",
        body: `To ensure a healthy and evolving ecosystem, Locality retains full, perennial, and unrestricted authority to modify, suspend, or terminate any aspect of the marketplace at our sole discretion. This includes changing fees, altering features, modifying eligibility criteria, and suspending or banning Participants for violations or at our discretion, with or without notice. Your continued use of the platform means you accept these changes.`,
      },
    ],
  },
  {
    heading: "In case of problems or disagreements",
    blocks: [
      {
        subheading: "Disclaimer of Warranty",
        body: `We provide our services using a reasonable level of skill and care. But there are certain things that we don't promise about our services. Other than as expressly stated, we don't make any commitments about the content within the services, the specific functions of the services, or their reliability, availability, or ability to meet your needs. We provide the services "as is".`,
      },
      {
        subheading: "Limitation of Liability",
        body: `To the extent permitted by law, Locality will not be responsible for lost profits, revenues, or data; financial losses; or indirect, special, consequential, exemplary, or punitive damages. We are not liable for any injury, death, or any negative event that occurs in connection with an event listed on our platform. The use of the platform and attendance at any event is entirely at your own risk.`,
      },
      {
        subheading: "Dispute Resolution and Governing Law",
        body: `If a dispute arises between participants, Locality may, but is not obligated to, mediate. Any decision we make in such cases will be final. These terms are governed by the laws of India, with exclusive jurisdiction in the courts of Ahmedabad, Gujarat.`,
      },
    ],
  },
];

function TermsAndConditions() {
  const navigate = useNavigate();

  return (
    <div className="terms-page">
      {/* Top bar */}
      <div className="terms-topbar">
        <button className="terms-back-btn" onClick={() => navigate(-1)}>
          <ArrowLeft />
          Back to Home
        </button>
      </div>

      {/* Card */}
      <div className="terms-card">
        <h1 className="terms-title">Terms and Conditions</h1>
        <p className="terms-published">Published on: 10th July 2025</p>

        <div className="terms-sections">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="terms-section-heading">{section.heading}</h2>
              <hr className="terms-divider" />

              <div className="terms-blocks">
                {section.blocks.map((block, i) => (
                  <div key={i}>
                    {block.subheading && (
                      <h3 className="terms-subheading">{block.subheading}</h3>
                    )}
                    {block.body.split("\n\n").map((para, j) => (
                      <p key={j} className="terms-paragraph">
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
            <hr className="terms-footer-divider" />
            <p className="terms-footer-note">Proclaimed by ICITIFIED LLP</p>
          </div>
        </div>
      </div>
      <ScrollToTopButton />
    </div>
  );
}

export default TermsAndConditions;
