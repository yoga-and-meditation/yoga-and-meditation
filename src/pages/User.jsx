import { useState } from "react";
import useAuth from "../context/useAuth";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function User() {
  const { currentUser, logout } = useAuth();
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  const handleLogout = () => {
    setShowConfirmationModal(true);
  };

  const confirmLogout = () => {
    logout(); // You should implement the logout function in your authentication context.
    setShowConfirmationModal(false); // Close the modal after logout
  };

  const closeModal = () => {
    setShowConfirmationModal(false);
  };

  return (
    <div className="user-profile">
      <h1 className="card-title text-left">
        Welcome, {currentUser ? currentUser.displayName || "User" : "User"}!
      </h1>
      <p className="card-text">
        You have successfully logged in to your account.
      </p>
      <button className="user-btn" onClick={handleLogout}>
        Logout
      </button>

      {/* Confirmation Modal */}
      <Modal
        show={showConfirmationModal}
        onHide={closeModal}
        centered // Center the modal
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirm Logout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to logout from your account?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={confirmLogout}>
            Logout
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default User;
