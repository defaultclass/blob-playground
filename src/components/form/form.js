import React from "react";
import PropTypes from "prop-types";
import styles from "./form.module.css";

const Form = ({ value, status, handleSubmit }) => {
  const copyStatus = status ? "Copied" : "Copy";
  return (
    <form className={styles.form}>
      <label className={styles.label}>{copyStatus} Border Radius CSS</label>
      <input
        type="text"
        id="copyCSS"
        className={styles.input}
        readOnly
        value={`border-radius: ${value};`}
        onClick={handleSubmit}
      />
    </form>
  );
};

Form.propTypes = {
  value: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default Form;
