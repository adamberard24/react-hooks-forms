import React, { useState } from "react";
import Form from "./Form"
import DisplayData from './DisplayData'

function ParentComponent() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");

  function handleFirstNameChange(event) {
    setFirstName(event.target.value)
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value)
  }

  return (
    <div>
    <Form
    firstName={firstName}
    lastName={lastName}
    handleFirstNameChange={handleFirstNameChange}
    handleLasstNameChange={handleLastNameChange}
    />
    <DisplayData firstName={firstName} LastName={lastName} />
    </div>
  );
}

export default ParentComponent;
