import React, { useState } from "react";
import axios from "axios";
import "../Styles/Paymentbutton.css";

/* ================= CONFIG ================= */
const API_BASE =
  import.meta.env.MODE === "development"
    ? "http://localhost:5000"
    : "https://shree-software-1.onrender.com";

/* ================= COMPONENT ================= */
const PaymentButton = () => {
  const [loading, setLoading] = useState(false);
  const [customer, setCustomer] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
  });

  /* ================= PRICE CALC ================= */
  const baseAmount = 588.82;
  const gstRate = 0.042;
  const gstAmount = +(baseAmount * gstRate).toFixed(2);
  const finalAmount = +(baseAmount + gstAmount).toFixed(2);

  /* ================= HANDLERS ================= */
  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const handlePayment = async () => {
    if (loading) return;

    if (
      !customer.firstName ||
      !customer.lastName ||
      !customer.email ||
      !customer.mobile
    ) {
      alert("Please fill all customer details");
      return;
    }

    setLoading(true);

    try {
      /* 1️⃣ CREATE ORDER */
      const { data } = await axios.post(
        `${API_BASE}/create-order`,
        { amount: finalAmount }
      );

      /* 2️⃣ RAZORPAY OPTIONS */
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY, // PUBLIC KEY ONLY
        amount: data.amount,
        currency: "INR",
        name: "Tamil Business Tribe",
        description: "ZRM Challenge Registration",
        order_id: data.id,

        handler: function (response) {
          console.log("✅ PAYMENT SUCCESS:", response);
          alert("Payment Successful ✅");
        },

        prefill: {
          name: `${customer.firstName} ${customer.lastName}`,
          email: customer.email,
          contact: customer.mobile,
        },

        theme: {
          color: "#1e40af",
        },
      };

      /* 3️⃣ OPEN CHECKOUT */
      const rzp = new window.Razorpay(options);

      rzp.on("payment.failed", function (response) {
        console.error("❌ PAYMENT FAILED:", response.error);
        alert(response.error.description || "Payment Failed ❌");
      });

      rzp.open();
    } catch (error) {
      console.error("❌ SERVER ERROR:", error.response?.data || error.message);
      alert("Payment Failed ❌");
    } finally {
      setLoading(false);
    }
  };

  /* ================= UI ================= */
  return (
    <div className="payment-wrapper">
      <div className="payment-card">
        <div className="card-header">
          <h3>ZRM Challenge</h3>
          <p>₹{finalAmount} • Secure Checkout</p>
        </div>

        <div className="order-summary">
          <div className="price-row">
            <span>Subtotal</span>
            <span>₹{baseAmount.toFixed(2)}</span>
          </div>
          <div className="price-row">
            <span>GST (4.2%)</span>
            <span>₹{gstAmount}</span>
          </div>
          <hr />
          <div className="total-row">
            <strong>Total</strong>
            <strong>₹{finalAmount}</strong>
          </div>
        </div>

        <div className="customer-section">
          <input
            type="text"
            name="firstName"
            placeholder="First Name *"
            value={customer.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name *"
            value={customer.lastName}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email *"
            value={customer.email}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="mobile"
            placeholder="Mobile *"
            value={customer.mobile}
            onChange={handleChange}
          />
        </div>

        <button
          className="pay-button"
          onClick={handlePayment}
          disabled={loading}
        >
          {loading ? "Processing..." : `Pay ₹${finalAmount}`}
        </button>

        <div className="security-info">
          🔒 Secured by Razorpay
        </div>
      </div>
    </div>
  );
};

export default PaymentButton;
