import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import styles from "./Logout.module.css"

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
      className={styles.logout_container}
      style={{ backgroundImage: 'url("images/bg-01.jpg")' }}
    >
      {showMessage && (
        <div className= {styles.logout_message_container}>
          <h2 className={styles.logout_message} onAnimationEnd={handleAnimationEnd}>
            <FontAwesomeIcon icon={faSpinner} className={styles.logout_icon} spin />{" "}
            {""}
            Thank you for supporting us
          </h2>
        </div>
      )}
    </div>
  );
}

export default LogOut;
