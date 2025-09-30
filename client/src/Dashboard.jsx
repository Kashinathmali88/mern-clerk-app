import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "@clerk/clerk-react";

function Dashboard() {
  const { getToken } = useAuth();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const token = await getToken();
      const res = await axios.get("http://localhost:5000/api/users/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(res.data);
    };
    fetchUser();
  }, [getToken]);

  return (
    <div>
      <h2>Dashboard</h2>
      {user ? (
        <>
          <p>Welcome, {user.username}</p>
          <p>Email: {user.email}</p>
          <p>Role: {user.role}</p>
        </>
      ) : (
        <p>Loading user...</p>
      )}
    </div>
  );
}

export default Dashboard;
