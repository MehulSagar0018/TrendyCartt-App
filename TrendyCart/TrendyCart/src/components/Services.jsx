import React from "react";
import { FaShoppingBag, FaTruck, FaCreditCard } from "react-icons/fa";

const Services = () => {
  return (
    <div style={{ padding: "1.5rem", backgroundColor: "#f4e5ec", minHeight: "100vh" }}>
      <div style={{ maxWidth: "64rem", margin: "0 auto", textAlign: "center" }}>
        <h1 style={{ fontSize: "2.25rem", fontWeight: "bold", color:"#4c4c4c", marginBottom: "1.5rem" }}>Our Services</h1>
        <p style={{ fontSize: "1.125rem", color: "#4b5563", marginBottom: "3rem" }}>
          Welcome to our online fashion store TrendyCart ! We offer a seamless shopping experience for women, featuring a wide range of stylish and trendy clothing. Explore our services below:
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
        <div style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",  backgroundColor: "#f9fafb",borderRadius: "1rem", textAlign: "center", padding: "1.5rem" }}>
          <FaShoppingBag style={{ color: "#ec4899", width: "3rem", height: "3rem", margin: "0 auto 1rem" }} />
          <h2 style={{ fontSize: "1.25rem", fontWeight: "600", color:"#4c4c4c" }}>Wide Selection</h2>
          <p style={{ color: "#6b7280", marginTop: "0.5rem" }}>
            Browse a curated collection of clothing and accessories for every occasion.
          </p>
        </div>

        <div style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", backgroundColor: "#f9fafb", borderRadius: "1rem", textAlign: "center", padding: "1.5rem" }}>
          <FaTruck style={{ color: "#ec4899", width: "3rem", height: "3rem", margin: "0 auto 1rem" }} />
          <h2 style={{ fontSize: "1.25rem", fontWeight: "600", color:"#4c4c4c"}}>Fast Shipping</h2>
          <p style={{ color: "#6b7280", marginTop: "0.5rem" }}>
            Enjoy quick and reliable shipping directly to your doorstep.
          </p>
        </div>

        <div style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", backgroundColor: "#f9fafb", borderRadius: "1rem", textAlign: "center", padding: "1.5rem" }}>
          <FaCreditCard style={{ color: "#ec4899", width: "3rem", height: "3rem", margin: "0 auto 1rem" }} />
          <h2 style={{ fontSize: "1.25rem", fontWeight: "600",color:"#4c4c4c" }}>Secure Payments</h2>
          <p style={{ color: "#6b7280", marginTop: "0.5rem" }}>
            Shop with confidence using our secure payment methods.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
