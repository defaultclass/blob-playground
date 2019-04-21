import React from "react";
import PropTypes from "prop-types";
import styles from "./blob.module.css";
import Form from "../form/form";

const Blob = ({ radius, copyStatus, copyToClipboard }) => {
  let values = [];
  radius.forEach(item => values.push(`${item.value}%`));
  const radiusValue = values.join(" ");
  const blobStyle = {
    borderRadius: radiusValue
  };
  return (
    <>
      <div className={styles.blob} style={{ ...blobStyle }} />
      <Form value={radiusValue} status={copyStatus} handleSubmit={copyToClipboard} />
    </>
  );
};

Blob.propTypes = {
  radius: PropTypes.array.isRequired,
  copyStatus: PropTypes.bool.isRequired,
  copyToClipboard: PropTypes.func.isRequired
};

export default Blob;
