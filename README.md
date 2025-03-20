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



````Props

<table>
  <tr>
    <th>Prop</th>
    <th>Type</th>
    <th>Required</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>type</code></td>
    <td>String</td>
    <td>✅</td>
    <td>Specifies the type of input field (e.g., <code>"text"</code>, <code>"email"</code>, <code>"password"</code>)</td>
  </tr>
  <tr>
    <td><code>name</code></td>
    <td>String</td>
    <td>✅</td>
    <td>The name attribute for the input field</td>
  </tr>
  <tr>
    <td><code>placeholder</code></td>
    <td>String</td>
    <td>❌</td>
    <td>Placeholder text for the input field</td>
  </tr>
  <tr>
    <td><code>value</code></td>
    <td>String</td>
    <td>✅</td>
    <td>Controlled value for the input field</td>
  </tr>
  <tr>
    <td><code>onChange</code></td>
    <td>Function</td>
    <td>✅</td>
    <td>Function triggered on input change</td>
  </tr>
  <tr>
    <td><code>label</code></td>
    <td>String</td>
    <td>❌</td>
    <td>Label text displayed above the input field</td>
  </tr>
  <tr>
    <td><code>validationRules</code></td>
    <td>Object</td>
    <td>❌</td>
    <td>Validation rules for the input (e.g., <code>{ required: true, message: "Error" }</code>)</td>
  </tr>
  <tr>
    <td><code>containerStyle</code></td>
    <td>Object</td>
    <td>❌</td>
    <td>Custom styles for the input container</td>
  </tr>
  <tr>
    <td><code>inputStyle</code></td>
    <td>Object</td>
    <td>❌</td>
    <td>Custom styles for the input field</td>
  </tr>
  <tr>
    <td><code>labelStyle</code></td>
    <td>Object</td>
    <td>❌</td>
    <td>Custom styles for the label</td>
  </tr>
  <tr>
    <td><code>errorStyle</code></td>
    <td>Object</td>
    <td>❌</td>
    <td>Custom styles for the error message</td>
  </tr>
</table>


