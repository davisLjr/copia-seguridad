import React from "react";
import styles from "./Arrow.module.scss";

export const ArrowFloating = () => {
  return (
    <svg className={styles.arrow}>
      <path className={styles.a1} d="M0 0 L30 22 L60 0"></path>
      <path className={styles.a2} d="M0 20 L30 42 L60 20"></path>
      <path className={styles.a3} d="M0 40 L30 62 L60 40"></path>
    </svg>
  );
};
