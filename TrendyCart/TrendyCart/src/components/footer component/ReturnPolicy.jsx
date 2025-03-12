import { FaUndo, FaClock, FaCheckCircle } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

const ReturnPolicy = () => {
  return (
    <div style={{ backgroundColor: "#f4e5ec" ,padding:"20px"}}>
        <div style={{ maxWidth: "768px", margin: "auto", padding: "24px",borderColor:"lightgray",borderWidth:"2px",borderStyle:"solid" ,borderRadius:"5px",backgroundColor:"white"}}>
      <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", textAlign: "center", marginBottom: "24px",color:"#4c4c4c" }}>Return Policy</h2>
      <p style={{ fontSize: "1rem", color: "#4B5563", marginBottom: "16px" }}>
        We strive to ensure customer satisfaction with every purchase. If you're not happy with your order, you can return it under the following conditions:
      </p>
      <ul style={{ listStyleType: "none", paddingLeft: "0", color: "#4B5563" }}>
        <li style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
          <FaUndo size={20} style={{color:"#ec4899"}}/> Returns accepted within 30 days of purchase
        </li>
        <li style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
          <FaClock size={20} style={{color:"#ec4899"}}/> Processing time: 5-7 business days after we receive your return
        </li>
        <li style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
          <FaCheckCircle size={20} style={{color:"#ec4899"}}/> Items must be unused and in original packaging
        </li>
      </ul>
      <h3 style={{ fontSize: "1.25rem", fontWeight: "bold", marginTop: "24px",color:"#4c4c4c" }}>How to Initiate a Return</h3>
      <p style={{ fontSize: "1rem", color: "#4B5563", marginBottom: "16px" }}>
        To initiate a return, please visit our Returns page and follow the instructions. A return shipping label will be provided if applicable.
      </p>
      <h3 style={{ fontSize: "1.25rem", fontWeight: "bold", marginTop: "24px" ,color:"#4c4c4c" }}>Need Assistance?</h3>
      <p style={{ fontSize: "1rem", color: "#4B5563" }}>
        If you need any help regarding returns, feel free to contact our customer support team.
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "16px", color: "#4B5563" }}>
    <FaPhone size={20} style={{color:"#ec4899"}}/>Customer Support: (123) 456-7890
      </div>
    </div>
    </div>
  );
};

export default ReturnPolicy;
