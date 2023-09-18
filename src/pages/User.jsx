import React from "react";
import useAuth from "../context/useAuth";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function User() {
  const { currentUser, logout } = useAuth();
  const [showConfirmationModal, setShowConfirmationModal] =
    React.useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setShowConfirmationModal(true);
  };

  const confirmLogout = () => {
    logout();
    setShowConfirmationModal(false);
    navigate("/");
  };

  const closeModal = () => {
    setShowConfirmationModal(false);
  };

  const displayName = currentUser ? currentUser.displayName : "Guest";

  const primaryCustom = {
    marginRight: "10px",
    backgroundColor: "#b48821",
    color: "#fff",
  };

  const secondaryCustom = {
    marginRight: "10px",
    backgroundColor: "#7a6416",
    color: "#fff",
  };

  return (
    <div className="user-profile">
      <h1 className="card-title text-left">Welcome, {displayName}!</h1>

      <p className="card-text">
        You have successfully logged in to your account.
      </p>

      <button className="user-btn" onClick={handleLogout}>
        Logout
      </button>

      <Modal show={showConfirmationModal} onHide={closeModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Logout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to logout from your account?
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={closeModal}
            style={secondaryCustom}
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={confirmLogout}
            style={primaryCustom}
          >
            Logout
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default User;
