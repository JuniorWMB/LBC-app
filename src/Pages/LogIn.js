import React from "react";
import LogInInput from "../Components/Login/LogInInput";

function LogIn({ onLog }) {
  return (
    <div>
      <LogInInput onLog={onLog} />
    </div>
  );
}

export default LogIn;
