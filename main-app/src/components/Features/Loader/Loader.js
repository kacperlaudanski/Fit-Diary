import React from "react";
import styles from './styles/loader.module.css'

const Loader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}></div> 
      <div className={styles.middle}></div> 
      <div className={styles.bottom}></div> 
    </div> 
  )
}

export default Loader; 
