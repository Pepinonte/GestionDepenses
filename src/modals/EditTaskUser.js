import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const EditTaskPopup = ({ modal, toggle, updateTask, taskObj }) => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "user") {
      setUser(value);
    } else {
      setPass(value);
    }
  };

  useEffect(() => {
    setUser(taskObj.User);
    setPass(taskObj.Pass);
  }, [taskObj.User, taskObj.Pass]);

  const handleUpdate = (e) => {
    e.preventDefault();
    let taskObj = {};
    taskObj["User"] = user;
    taskObj["Pass"] = pass;
    updateTask(taskObj);
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Modification Depense</ModalHeader>
      <ModalBody>
        <div className="form-group">
          <label>Identifiant</label>
          <input
            type="text"
            className="form-control"
            value={user}
            onChange={handleChange}
            name="user"
          />
        </div>
        <div className="form-group">
          <label>Mot de passe</label>
          <input
            type="text"
            className="form-control"
            value={pass}
            onChange={handleChange}
            name="pass"
          />
        </div>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleUpdate}>
          Modifier
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default EditTaskPopup;
