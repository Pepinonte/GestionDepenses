import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const EditTaskPopup = ({ modal, toggle, updateTask, taskObj }) => {
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

  useEffect(() => {
    setTitre(taskObj.Titre);
    setDepense(taskObj.Depense);
    setDate(taskObj.Date);
    setNote(taskObj.Note);
  }, [taskObj.Date, taskObj.Depense, taskObj.Note, taskObj.Titre]);

  const handleUpdate = (e) => {
    e.preventDefault();
    let taskObj = {};
    taskObj["Titre"] = titre;
    taskObj["Depense"] = depense;
    taskObj["Date"] = date;
    taskObj["Note"] = note;
    updateTask(taskObj);
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Modification Depense</ModalHeader>
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
