// // import React, { useState } from "react";
// // import axios from "axios";

// // const PaymentButton = () => {
// //   const [loading, setLoading] = useState(false);

// //   const handlePayment = async () => {
// //     if (loading) return;
// //     setLoading(true);

// //     try {
// //       // 1️⃣ Create order
// //       const { data } = await axios.post(
// //         "http://localhost:5000/create-order",
// //         { amount: 588 }
// //       );

// //       // 2️⃣ Razorpay options
// //       const options = {
// //         key: import.meta.env.VITE_RAZORPAY_KEY,
// //         amount: data.amount,
// //         currency: "INR",
// //         name: "One Day One Lakh",
// //         description: "Registration",
// //         order_id: data.id,

// //         handler: function (response) {
// //           console.log("PAYMENT SUCCESS:", response);
// //           alert("Payment Successful ✅");
// //         },

// //         prefill: {
// //           name: "sasi raja",
// //           email: "sasiraja100@gmail.com",
// //           contact: "95000 60448",
// //         },

// //         theme: {
// //           color: "#3399cc",
// //         },
// //       };

// //       const rzp = new window.Razorpay(options);

// //       rzp.on("payment.failed", function (response) {
// //         console.error("PAYMENT FAILED:", response.error);
// //         alert("Payment Failed ❌ " + response.error.description);
// //       });

// //       rzp.open();
// //     } catch (error) {
// //       console.error("Payment Error:", error.response?.data || error.message);
// //       alert("Server Error. Please try again!");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <button
// //       className="btn btn-primary w-100 py-2 fw-semibold"
// //       onClick={handlePayment}
// //       disabled={loading}
// //     >
// //       {loading ? "Processing..." : "Register Now"}
// //     </button>
// //   );
// // };

// // export default PaymentButton;


// import React, { useState } from "react";
// import axios from "axios";

// const PaymentButton = () => {
//   const [loading, setLoading] = useState(false);
//   const [customer, setCustomer] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     mobile: "",
//   });

//   const baseAmount = 588.82;
//   const gstRate = 0.042; // 4.2%
//   const gstAmount = +(baseAmount * gstRate).toFixed(2);
//   const finalAmount = +(baseAmount + gstAmount).toFixed(2); // 613.20

//   const handleChange = (e) => {
//     setCustomer({ ...customer, [e.target.name]: e.target.value });
//   };

//   const handlePayment = async () => {
//     if (loading) return;

//     if (!customer.firstName || !customer.lastName || !customer.email || !customer.mobile) {
//       alert("Please fill all customer details");
//       return;
//     }

//     setLoading(true);

//     try {
//       const { data } = await axios.post("http://localhost:5000/create-order", {
//         amount: finalAmount,
//       });

//       const options = {
//         key: import.meta.env.VITE_RAZORPAY_KEY,
//         amount: data.amount,
//         currency: "INR",
//         name: "Tamil Business Tribe",
//         description: "Course Registration",
//         order_id: data.id,
//         handler: function (response) {
//           alert("Payment Successful ✅");
//           console.log(response);
//         },
//         prefill: {
//           name: `${customer.firstName} ${customer.lastName}`,
//           email: customer.email,
//           contact: customer.mobile,
//         },
//         theme: {
//           color: "#000000",
//         },
//       };

//       const rzp = new window.Razorpay(options);
//       rzp.open();
//     } catch (error) {
//       console.error("Payment Error:", error.response?.data || error);
//       alert("Payment Failed ❌");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="container mt-5" style={{ maxWidth: "400px", border: "1px solid #ddd", padding: "20px", borderRadius: "10px", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}>
//       <h4 className="mb-4">Order Summary for ZRM Challenge (499 + 18% GST)</h4>
      
//       <div className="mb-3">
//         <div className="d-flex justify-content-between">
//           <span>Subtotal (1 item)</span>
//           <span>₹{baseAmount}</span>
//         </div>
//         <div className="d-flex justify-content-between">
//           <span>GST (4.2%)</span>
//           <span>₹{gstAmount}</span>
//         </div>
//         <hr />
//         <div className="d-flex justify-content-between fw-bold">
//           <span>Total</span>
//           <span>₹{finalAmount}</span>
//         </div>
//       </div>

//       <h5 className="mt-4 mb-3">Customer Information</h5>

//       <div className="mb-2">
//         <input
//           type="text"
//           name="firstName"
//           className="form-control mb-2"
//           placeholder="First Name*"
//           value={customer.firstName}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="lastName"
//           className="form-control mb-2"
//           placeholder="Last Name*"
//           value={customer.lastName}
//           onChange={handleChange}
//         />
//         <input
//           type="email"
//           name="email"
//           className="form-control mb-2"
//           placeholder="Email ID*"
//           value={customer.email}
//           onChange={handleChange}
//         />
//         <input
//           type="tel"
//           name="mobile"
//           className="form-control mb-2"
//           placeholder="Mobile No.*"
//           value={customer.mobile}
//           onChange={handleChange}
//         />
//       </div>

//       <button
//         className="btn btn-primary w-100 py-2 fw-semibold mt-3"
//         onClick={handlePayment}
//         disabled={loading}
//       >
//         {loading ? "Processing..." : "Proceed to Pay"}
//       </button>
//     </div>
//   );
// };

// export default PaymentButton;


import React, { useState } from "react";
import axios from "axios";
import "../Styles/Paymentbutton.css"; // Add this CSS file
// import React, { useState } from "react";
// import axios from "axios";
// import "./PaymentButton.css";

const PaymentButton = () => {
  const [loading, setLoading] = useState(false);
  const [customer, setCustomer] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
  });

  const baseAmount = 588.82;
  const gstRate = 0.042;
  const gstAmount = +(baseAmount * gstRate).toFixed(2);
  const finalAmount = +(baseAmount + gstAmount).toFixed(2);

  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const handlePayment = async () => {
    if (loading) return;
    if (!customer.firstName || !customer.lastName || !customer.email || !customer.mobile) {
      alert("Please fill all customer details");
      return;
    }
    setLoading(true);
    try {
      const { data } = await axios.post("http://localhost:5000/create-order", {
        amount: finalAmount,
      });
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY,
        amount: data.amount,
        currency: "INR",
        name: "Tamil Business Tribe",
        description: "ZRM Challenge Registration",
        order_id: data.id,
        handler: function (response) {
          alert("Payment Successful ✅");
          console.log(response);
        },
        prefill: {
          name: `${customer.firstName} ${customer.lastName}`,
          email: customer.email,
          contact: customer.mobile,
        },
        theme: { color: "#1e40af" },
      };
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment Error:", error.response?.data || error);
      alert("Payment Failed ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="payment-wrapper">
      <div className="payment-card">
        <div className="card-header">
          <div className="icon-wrapper">
            <svg className="payment-icon" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 2v20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
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
          <div className="price-divider"></div>
          <div className="total-row">
            <span>Total</span>
            <span>₹{finalAmount}</span>
          </div>
        </div>

        <div className="customer-section">
          <h5>Customer Details</h5>
          <div className="form-grid">
            <input
              type="text"
              name="firstName"
              className="form-input"
              placeholder="First Name *"
              value={customer.firstName}
              onChange={handleChange}
            />
            <input
              type="text"
              name="lastName"
              className="form-input"
              placeholder="Last Name *"
              value={customer.lastName}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email *"
              value={customer.email}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="mobile"
              className="form-input"
              placeholder="Mobile *"
              value={customer.mobile}
              onChange={handleChange}
            />
          </div>
        </div>

        <button
          className={`pay-button ${loading ? 'loading' : ''}`}
          onClick={handlePayment}
          disabled={loading}
        >
          {loading ? (
            <>
              <span className="spinner"></span>
              Processing...
            </>
          ) : (
            `Pay ₹${finalAmount}`
          )}
        </button>

        <div className="security-info">
          <span>🔒 Secure • Razorpay</span>
        </div>
      </div>
    </div>
  );
};

export default PaymentButton;
