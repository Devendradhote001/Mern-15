import React, { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    dob: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      mobile: "",
      dob: "",
    });
  };

  return (
    <div className="bg-gray-400">
      <h1>Hello</h1>
      <form onSubmit={handleSubmit} action="">
        <input
          value={formData.name}
          name="name"
          onChange={handleChange}
          type="text"
          placeholder="name"
        />
        <input
          value={formData.email}
          name="email"
          onChange={handleChange}
          type="text"
          placeholder="Email"
        />
        <input
          value={formData.mobile}
          name="mobile"
          onChange={handleChange}
          type="text"
          placeholder="Mobile"
        />
        <input
          value={formData.dob}
          name="dob"
          onChange={handleChange}
          type="text"
          placeholder="DOB"
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
