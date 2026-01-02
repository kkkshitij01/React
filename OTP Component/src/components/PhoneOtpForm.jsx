import React, { useState } from "react";
import OtpInput from "./OtpInput";
import "../App.css"

export default function PhoneOtpForm() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const [showOtp, setShowOtp] = useState(false);
  const onOtpSubmit = (otp) => {
    console.log("SUCCESS" + otp);
  };
  const handlePhoneNumberSubmit = (event) => {
    event.preventDefault();
    // PHONE VALIDATION
    const regex = /[^0-9]/;
    if (phoneNumber.length != 10 || regex.test(phoneNumber)) {
      alert("Enter Valid 10 Digit Number");
      return;
    }
    setShowOtp(true);
  };
  return (
    <div>
      {!showOtp ? (
        <form onSubmit={handlePhoneNumberSubmit}>
          <input
            className="inp"
            onChange={(e) => setPhoneNumber(e.target.value)}
            type="text"
            value={phoneNumber}
            placeholder="Phone Number"
          />
          <button className='btn' type="submit">Submit</button>
        </form>
      ) : (
        <div>
          {" "}
          <h3 >Enter OTP sent to <span className="heading">{phoneNumber}</span></h3>
          <OtpInput length={4} onOtpSubmit={onOtpSubmit} />
        </div>
      )}
    </div>
  );
}
