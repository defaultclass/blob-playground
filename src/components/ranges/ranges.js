import React from "react";
import PropTypes from "prop-types";
import styles from "./ranges.module.css";

const Ranges = ({ ranges, handleChange }) => {
  const range = ranges.map(input => {
    return (
      <section key={input.id} className={styles.rangeWrapper}>
        <label htmlFor={input.id} className={styles.label}>
          {input.name}
        </label>
        <div className={styles.inputWrapper}>
          <input
            type="range"
            className={styles.input}
            id={input.id}
            value={input.value}
            onChange={handleChange}
          />
          <div className={styles.inputBar} style={{ width: `${input.value}%` }} />
        </div>
      </section>
    );
  });
  return <section className={styles.wrapper}>{range}</section>;
};

Ranges.propTypes = {
  ranges: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default Ranges;
