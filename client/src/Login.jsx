import React from "react";
import { SignIn } from "@clerk/clerk-react";

function Login() {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r via-black/80 from-slate-700 to-slate-600">
      <div className="flex flex-col gap-4 justify-center items-center w-96 h-50 rounded-xl p-px bg-white/10 border border-white/20 backdrop-blur-md text-gray-800  shadow-lg">
        <SignIn />
      </div>
    </div>
  );
}

export default Login;
