import { UserProfile } from "@clerk/clerk-react";
import React from "react";

function Dashboard() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <UserProfile />
    </div>
  );
}

export default Dashboard;
