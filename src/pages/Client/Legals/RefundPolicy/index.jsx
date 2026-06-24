import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ScrollToTopButton from "../../../../components/events/ScrollToTopButton/ScrollToTopButton";
import "./RefundPolicy.css";

const sections = [
  {
    heading: "General Policy",
    blocks: [
      {
        body: `All ticket sales are considered final. Refunds are not guaranteed and are processed only at the discretion of the event organizer or See Tickets. This policy outlines the terms and charges applicable if a refund is approved and issued.`,
      },
    ],
  },
  {
    heading: "Refund Charges",
    blocks: [
      {
        body: `For any approved refund, a standard processing charge of 11% of the total transaction amount will be deducted. This charge covers payment gateway fees and administrative costs associated with the refund process.

This 11% charge is applicable to every events, including those designated as "Exclusive Events".`,
      },
    ],
  },
  {
    heading: "Who Bears the Refund Cost?",
    blocks: [
      {
        body: `The event organizer has the discretion to decide how the 11% refund charge is handled. There are two options:`,
      },
      {
        subheading: "Organizer Bears Full Cost",
        body: `The organizer may choose to absorb the entire 11% charge. In this case, the attendee (the e-pass buyer) will receive a 100% full refund of their original payment. The 11% charge will be deducted from the organizer's future payout for the event.`,
      },
      {
        subheading: "Partial Refund to Attendee",
        body: `The organizer may decide that the attendee will bear the refund charge. In this scenario, the 11% charge is deducted directly from the amount refunded to the attendee. For example, on a ₹1000 ticket, the attendee would receive ₹890 back.`,
      },
      {
        body: `The decision on who bears the cost rests solely with the event organizer. Please refer to the specific event's terms and conditions or contact the organizer for details on their refund handling policy.`,
      },
    ],
  },
  {
    heading: "Initiating a Refund",
    blocks: [
      {
        body: `Refunds are not automatically processed. All refund requests must be initiated by an authorized personnel of See Tickets. If you believe you are eligible for a refund, you must create a support request from the See Tickets Help Centre.`,
      },
    ],
  },
];

function RefundPolicy() {
  const navigate = useNavigate();

  return (
    <div className="refund-page">
      {/* Top bar */}
      <div className="refund-topbar">
        <button className="refund-back-btn" onClick={() => navigate(-1)}>
          <ArrowLeft />
          Back to Home
        </button>
      </div>

      {/* Card */}
      <div className="refund-card">
        <h1 className="refund-title">Refund Policy</h1>
        <p className="refund-published">Published on: 10th September 2025</p>

        <div className="refund-sections">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="refund-section-heading">{section.heading}</h2>
              <hr className="refund-divider" />

              <div className="refund-blocks">
                {section.blocks.map((block, i) => (
                  <div key={i}>
                    {block.subheading && (
                      <h3 className="refund-subheading">{block.subheading}</h3>
                    )}
                    {block.body.split("\n\n").map((para, j) => (
                      <p key={j} className="refund-paragraph">
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
            <hr className="refund-footer-divider" />
            <p className="refund-footer-note">Proclaimed by ICITIFIED LLP</p>
          </div>
        </div>
      </div>
      <ScrollToTopButton />
    </div>
  );
}

export default RefundPolicy;
