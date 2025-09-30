import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import Dashboard from "./Dashboard";

function App() {
  return (
    <div>
      <h1>MERN + Clerk</h1>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </SignedIn>
    </div>
  );
}

export default App;
