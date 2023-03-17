import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import "./Logout.css"; // Import file CSS cho trang Log Out

function LogOut() {
  const [showMessage, setShowMessage] = useState(true);
  localStorage.removeItem("accessToken");
  useEffect(() => {
    setTimeout(() => {
      window.location.href = "/login";
    }, 1000);
  }, []);

  const handleAnimationEnd = () => {
    setShowMessage(false);
  };

  return (
    <div
      className="logout-container"
      style={{ backgroundImage: 'url("images/bg-01.jpg")' }}
    >
      {showMessage && (
        <div className="logout-message-container">
          <h2 className="logout-message" onAnimationEnd={handleAnimationEnd}>
            <FontAwesomeIcon icon={faSpinner} className="logout-icon" spin />{" "}
            {""}
            Thank you for supporting us
          </h2>
        </div>
      )}
    </div>
  );
}

export default LogOut;
