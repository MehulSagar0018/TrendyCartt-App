import { useState } from "react";

const faqs = [
  {
    question: "What is TrendyCart?",
    answer: "TrendyCart is an online marketplace for girl's fashion offering the latest trends in fashion  accessories ,cosmetics ,clothing and jewellary at unbeatable prices."
  },
  {
    question: "How can I track my order?",
    answer: "You can track your order by logging into your account and navigating to the 'Orders' section."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and Apple Pay."
  },
  {
    question: "What is your return policy?",
    answer: "You can return any unused item within 30 days for a full refund. See our Return Policy page for more details."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


return (
 <>
 <div style={{  backgroundColor: "#F3F4F6" ,padding:"20px"}}>
  <div style={{ maxWidth: "768px", margin: "auto", padding: "24px",border:"2px",borderRadius:"10px" ,backgroundColor: "white"}}>
      <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", textAlign: "center", marginBottom: "24px",color:"#4c4c4c" }}>Frequently Asked Questions</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {faqs.map((faq, index) => (
          <div key={index} style={{ borderBottom: "1px solid #D1D5DB" }}>
            <button
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "16px",
                textAlign: "left",
                fontWeight: "500",
                color: "#1F2937",
                background: "none",
                border: "none",
                cursor: "pointer"
              }}
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
            </button>
            {openIndex === index && (
              <div style={{ padding: "16px", color: "#4B5563" }}>
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
    </>

    
  );
}
export default FAQ;