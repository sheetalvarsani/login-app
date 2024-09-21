import React from "react";

/// Function to display loged in message and logout button:
const Logout = ({ onLogout, username }) => {
  return (
    <div className="Logged-In-Message">
      <h2>Welcome {username}! You are logged in.</h2>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default Logout;
