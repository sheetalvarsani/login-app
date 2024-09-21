import React, { useState } from "react";
import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";
import LoginUnsuccessful from "./components/LoginUnsuccessful/LoginUnsuccessful";
import "./App.css";

function App() {
  // variables to manage login status, username, and login failure status:
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [loginFailed, setLoginFailed] = useState(false);

  // function for successful login:
  const handleLogin = (inputUsername) => {
    if (inputUsername.trim() !== "") {
      setUsername(inputUsername);
      setIsLoggedIn(true);
      setLoginFailed(false);
    } else {
      setLoginFailed(true);
    }
  };

  // function for logout:
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  // function to retry login:
  const handleTryAgain = () => {
    setLoginFailed(false);
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <div>
          <Logout onLogout={handleLogout} username={username} />
        </div>
      ) : loginFailed ? (
        <div>
          <LoginUnsuccessful />
          <button onClick={handleTryAgain}>Try Again</button>
        </div>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
