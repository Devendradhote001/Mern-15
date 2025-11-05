import React, { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    dob: "",
  });

  console.log(formData);

  

  return (
    <div>
      <h1>Hello</h1>
      <form action="">
        <input
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          type="text"
          placeholder="name"
        />
        <input
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          type="text"
          placeholder="Email"
        />
        <input
          onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
          type="text"
          placeholder="Mobile"
        />
        <input
          onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
          type="text"
          placeholder="DOB"
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
