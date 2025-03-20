import React, { useState } from "react";
import PropTypes from "prop-types";

const InputField = ({
  type = "text",
  name,
  placeholder,
  value: initialValue = "",
  label,
  containerStyle,
  inputStyle,
  labelStyle,
  errorStyle,
  validationRules,
  onChange: parentOnChange,
}) => {
  const [value, setValue] = useState(initialValue);
  const [touched, setTouched] = useState(false);
  const [error, setError] = useState("");

  // Validate input based on validation rules
  const validateInput = (value) => {
    if (!validationRules) return true;

    if (validationRules.required && !value.trim()) {
      return "This field is required";
    }

    if (validationRules.pattern && !validationRules.pattern.test(value)) {
      return validationRules.message || "Invalid input";
    }

    return null; // No error
  };

  // Handle input change
  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);

    // Validate input
    const errorMessage = validateInput(newValue);
    setError(errorMessage);

    // Notify parent component of the change
    if (parentOnChange) {
      parentOnChange({
        target: {
          name,
          value: newValue,
          isValid: !errorMessage, // Pass whether the input is valid
        },
      });
    }
  };

  // Handle input blur
  const handleBlur = () => {
    setTouched(true);
    const errorMessage = validateInput(value);
    setError(errorMessage);
  };

  return (
    <div style={containerStyle}>
      {label && <label style={labelStyle}>{label}</label>}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        style={{
          ...inputStyle,
          border: error
            ? "1px solid red"
            : inputStyle?.border || "1px solid #ccc",
        }}
      />
      {touched && error && <span style={errorStyle}>{error}</span>}
    </div>
  );
};

InputField.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  containerStyle: PropTypes.object,
  inputStyle: PropTypes.object,
  labelStyle: PropTypes.object,
  errorStyle: PropTypes.object,
  validationRules: PropTypes.shape({
    required: PropTypes.bool,
    pattern: PropTypes.instanceOf(RegExp),
    message: PropTypes.string,
  }),
  onChange: PropTypes.func.isRequired, // Parent's onChange is required
};

export default InputField;
