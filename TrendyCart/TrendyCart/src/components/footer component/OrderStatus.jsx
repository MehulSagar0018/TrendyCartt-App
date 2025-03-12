import { FaShippingFast, FaBoxOpen, FaCheckCircle, FaTruck, FaTimesCircle } from "react-icons/fa";

const OrderStatus = () => {
  return (
    <div style={{ backgroundColor: "#f4e5ec",padding:"20px"}}>  
        <div style={{ maxWidth: "768px", margin: "auto", padding: "24px",backgroundColor:"white",borderRadius:"10px" ,borderColor:"lightgray",borderWidth:"2px",borderStyle:"solid"}}>
      <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", textAlign: "center", marginBottom: "24px",color:"#4c4c4c" }}>Order Status</h2>
      <p style={{ fontSize: "1rem", color: "black", marginBottom: "16px" }}>
        Track the status of your order in real-time and stay updated on its progress.
      </p>
      <ul style={{ listStyleType: "none", paddingLeft: "0", color: "#4B5563" }}>
        <li style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
          <FaCheckCircle size={25} style={{color:"#ed4b82"}}/> Order Confirmed
        </li>
        <li style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
          <FaBoxOpen size={25}  style={{color:"#ed4b82"}}/> Order Processed
        </li>
        <li style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
          <FaTruck size={25}  style={{color:"#ed4b82"}}/> Out for Delivery
        </li>
        <li style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
          <FaShippingFast size={25}  style={{color:"#ed4b82"}} /> Delivered
        </li>
        <li style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px", color: "#DC2626" }}>
          <FaTimesCircle size={25}  style={{color:"red"}}/> Order Canceled
        </li>
      </ul>
      <h3 style={{ fontSize: "1.25rem", fontWeight: "bold", marginTop: "24px",color:"#4c4c4c" }}>Check Your Order</h3>
      <p style={{ fontSize: "1rem", color: "black", marginBottom: "16px" }}>
        Enter your order number on our tracking page to get real-time updates.
      </p>
      <h3 style={{ fontSize: "1.25rem", fontWeight: "bold", marginTop: "24px",color:"#4c4c4c" }}>Need Help?</h3>
      <p style={{ fontSize: "1rem", color: "black" }}>
        If you have any issues with your order, please contact our customer support team.
      </p>
    </div>
    </div>
  );
};

export default OrderStatus;
