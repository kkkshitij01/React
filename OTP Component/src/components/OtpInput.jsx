import React, { useEffect, useState, useRef } from "react";
import "../App.css"
export default function OtpInput({ length = 4, onOtpSubmit = () => { } }) {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      // on load of component , bring the cursor to the first input box
      inputRefs.current[0].focus();
    }

  }, []);
  const handleChange = (e, index) => {
    let value = e.target.value;
    const newOtp = [...otp];
    if (value.length === length) {
      for (let i = 0; i < length; i++) {
        newOtp[i] = value.charAt(i);
      }
      inputRefs.current[length - 1].focus();
    } else {
      newOtp[index] = value.substring(value.length - 1);
      //Moving Focus to Next input field
      if (value && index < length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
    setOtp(newOtp);
    const combinedOtp = newOtp.join("");
    // call validation route if all fields are filed
    if (combinedOtp.length === length) {
      // submint trigger in parent component
      onOtpSubmit(combinedOtp)
    }

  }
  const handleClick = (index) => {
    // if a input value exist
    // then bring the curser in front of number in the input box 
    inputRefs.current[index].setSelectionRange(1, 1);

    if (index > 0 && checkFirstEmpty(index)) {
      inputRefs.current[otp.indexOf("")].focus();
    }
  }
  function checkFirstEmpty(index) {
    for (let i = 0; i < index; i++) {
      if (!otp[i]) {
        return true
      }
    }
  }
  const handleKeyDown = (e, index) => {
    //Moving Focus to previous input field
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  }
  return (
    <div>
      {otp.map((value, index) => (
        <input
          ref={(input) => { inputRefs.current[index] = input }}
          className="otpInput"
          value={value}
          key={index}
          type="text"
          onChange={(e) => {
            handleChange(e, index);
          }}
          onClick={() => {
            handleClick(index);
          }}
          onKeyDown={(e) => { handleKeyDown(e, index) }}
        />
      ))}
    </div>
  );
}
