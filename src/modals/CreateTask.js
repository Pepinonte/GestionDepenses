import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const CreateTaskPopup = ({ modal, toggle, save }) => {
  const [titre, setTitre] = useState("");
  const [depense, setDepense] = useState("");
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "titre") {
      setTitre(value);
    } else if (name === "depense") {
      setDepense(value);
    } else if (name === "date") {
      setDate(value);
    } else {
      setNote(value);
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    let taskObj = {};
    taskObj["Titre"] = titre;
    taskObj["Depense"] = depense;
    taskObj["Date"] = date;
    taskObj["Note"] = note;
    save(taskObj);
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Create Task</ModalHeader>
      <ModalBody>
        <div className="form-group">
          <label>Titre</label>
          <input
            type="text"
            className="form-control"
            value={titre}
            onChange={handleChange}
            name="titre"
          />
        </div>
        <div className="form-group">
          <label>Depense</label>
          <input
            type="text"
            className="form-control"
            value={depense}
            onChange={handleChange}
            name="depense"
          />
        </div>
        <div className="form-group">
          <label>date</label>
          <input
            type="text"
            className="form-control"
            value={date}
            onChange={handleChange}
            name="date"
          />
        </div>
        <div className="form-group">
          <label>Note</label>
          <textarea
            rows="5"
            className="form-control"
            value={note}
            onChange={handleChange}
            name="note"
          ></textarea>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleSave}>
          Create
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CreateTaskPopup;
