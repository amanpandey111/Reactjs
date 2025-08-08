import React, { useState } from "react";

function First() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value, // ✅ dynamic key using variable
    }));
  };

  return (
    <>
      <input name="username" onChange={handleChange} />
      <input name="email" onChange={handleChange} />
      <p>{JSON.stringify(formData)}</p>
    </>
  );
}

export default First;
