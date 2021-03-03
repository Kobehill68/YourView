import React, { useState } from "react";
import SignupForm from "./signupform";
import SuccessForm from "./successform";
import "./form.css";

const Signup = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className="form-container">
        {!isSubmitted ? (
          <SignupForm submitForm={submitForm} />
        ) : (
          <SuccessForm />
        )}
      </div>
    </>
  );
};

export default Signup;
