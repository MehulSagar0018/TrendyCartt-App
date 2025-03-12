import { FaTruck, FaClock, FaBox, FaShippingFast, FaMapMarkerAlt } from "react-icons/fa";

const Shipping = () => {
  return (
    <div style={{ backgroundColor: "#f4e5ec" ,padding:"20px"}}>
      <div style={{ maxWidth: "768px", margin: "auto", padding: "24px",borderColor:"lightgray",borderWidth:"2px",borderStyle:"solid" ,borderRadius:"5px",backgroundColor:"white"}}>
      <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", textAlign: "center", marginBottom: "24px" ,color:"#4c4c4c"}}>Shipping Information</h2>
      <p style={{ fontSize: "1rem", color: "#4B5563", marginBottom: "16px" }}>
        We offer fast and reliable shipping options to ensure your order arrives on time.
      </p>
      <ul style={{ listStyleType: "none", paddingLeft: "0", color: "#4B5563" }}>
        <li style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
          <FaTruck size={25} style={{color:"#ec4899"}}/> Standard Shipping: 5-7 business days
        </li>
        <li style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
          <FaClock size={25} style={{color:"#ec4899"}}/> Express Shipping: 2-3 business days
        </li>
        <li style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
          <FaBox size={25} style={{color:"#ec4899"}}/> Overnight Shipping: 1 business day
        </li>
        <li style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
          <FaShippingFast size={25} style={{color:"#ec4899"}}/> International Shipping: 7-14 business days
        </li>
      </ul>
      <p style={{ fontSize: "1rem", color: "#4B5563", marginTop: "16px" }}>
        Orders over $50 qualify for free standard shipping.
      </p>
      <h3 style={{ fontSize: "1.25rem", fontWeight: "bold", marginTop: "24px" ,color:"#4c4c4c"}}>Tracking Your Order</h3>
      <p style={{ fontSize: "1rem", color: "#4B5563", marginBottom: "16px" }}>
        Once your order has shipped, you will receive a tracking number via email. You can also track your order status in your account under the 'Orders' section.
      </p>
      <h3 style={{ fontSize: "1.25rem", fontWeight: "bold", marginTop: "24px",color:"#4c4c4c" }}>Shipping Restrictions</h3>
      <p style={{ fontSize: "1rem", color: "#4B5563", marginBottom: "16px" }}>
        We currently do not ship to P.O. boxes or military addresses. Please provide a valid street address for delivery.
      </p>
      <h3 style={{ fontSize: "1.25rem", fontWeight: "bold", marginTop: "24px",color:"#4c4c4c" }}>Need Help?</h3>
      <p style={{ fontSize: "1rem", color: "#4B5563" }}>
        If you have any questions about shipping, please contact our customer support team.
      </p>
    </div>
    </div>
  );
};

export default Shipping;
