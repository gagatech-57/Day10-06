import React, { useState } from "react";
import Modal from "./PotalModel";
function NModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div style={{ padding: 20 }}>
      <h1>REACT PORTAL EXAMPLE</h1>

      <button onClick={() => setShowModal(true)}>
        OPEN MODAL
      </button>

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <h2>THIS IS A MODAL!</h2>
          <p>IT WAS CREATED USING REACT PORTAL.</p>
        </Modal>
      )}
    </div>
  );
}

export default NModal;