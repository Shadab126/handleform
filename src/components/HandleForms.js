import React, { useState } from "react";
import Forms from "./Forms";

const HandleForms = () => {
  const [userData, setUserData] = useState([]);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  return (
    <div>
      <Forms
        userData={userData}
        setUserData={setUserData}
        name={name}
        setName={setName}
        number={number}
        setNumber={setNumber}
      />
    </div>
  );
};

export default HandleForms;
