import React, { useState } from "react";
function App() {
  //combining both first and last name as a javascript object
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleFullNameChange(event) {
    //use deconstruction to shorten code and make it concise
    const { name, value } = event.target;
    //this code retains previous value
    //react saves previous value from state and this code pulls it out and
    //uses conditional code for both fields to be retained
    setFullName((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value
        };
      } else if (name === "email") {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: value
        };
      }
    });
  }
  // function handleLastNameChange() {
  //   setLastName(event.target.value);
  // }
  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          onChange={handleFullNameChange}
          type="text"
          // value={firstName}
          value={fullName.fName}
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={handleFullNameChange}
          type="text"
          // value={lastName}
          value={fullName.lName}
        />
        <input
          onChange={handleFullNameChange}
          value={fullName.email}
          name="email"
          placeholder="Email"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default App;
