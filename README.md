# InputField Component

A reusable and customizable input field component for React.

## Installation

```bash
npm install input-field-part


`````Usage

import React, { useState } from "react";
import InputField from "input-field-part";

function MyForm() {
  const [formData, setFormData] = useState({ name: "" });

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <InputField
      type="text"
      name="name"
      placeholder="Enter your name"
      value={formData.name}
      onChange={handleInputChange}
      label="Name"
      validationRules={{
        required: true,
        message: "Please enter a valid name",
      }}
      containerStyle={{
        marginBottom: "20px",
        display: "flex",
        flexDirection: "column",
      }}
      inputStyle={{
        width: "100%",
        padding: "10px",
        borderRadius: "4px",
        fontSize: "16px",
      }}
      labelStyle={{
        display: "block",
        marginBottom: "5px",
        fontWeight: "bold",
      }}
      errorStyle={{
        color: "red",
        fontSize: "14px",
        marginTop: "5px",
      }}
    />
  );
}

export default MyForm;



## Props

| Prop            | Type     | Required | Description |
|----------------|---------|----------|-------------|
| `type`         | String  | ✅  | Specifies the type of input field (e.g., `"text"`, `"email"`, `"password"`) |
| `name`         | String  | ✅  | The name attribute for the input field |
| `placeholder`  | String  | ❌  | Placeholder text for the input field |
| `value`        | String  | ✅  | Controlled value for the input field |
| `onChange`     | Function | ✅  | Function triggered on input change |
| `label`        | String  | ❌  | Label text displayed above the input field |
| `validationRules` | Object | ❌  | Validation rules for the input (e.g., `{ required: true, message: "Error" }`) |
| `containerStyle` | Object | ❌  | Custom styles for the input container |
| `inputStyle` | Object | ❌  | Custom styles for the input field |
| `labelStyle` | Object | ❌  | Custom styles for the label |
| `errorStyle` | Object | ❌  | Custom styles for the error message |



