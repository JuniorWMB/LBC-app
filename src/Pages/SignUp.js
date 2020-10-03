import React from "react";
import SignUpForm from "../Components/SignUp/SignUpForm";

function SignUp({ onLog }) {
  return (
    <div>
      <SignUpForm onLog={onLog} />
    </div>
  );
}

export default SignUp;
