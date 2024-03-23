import React from 'react'
import styles from './styles/empty.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const EmptyExercise = () => {
    return (
        <div className = {`${styles.empty} ${styles.empty_ex_box}`}>
           <FontAwesomeIcon icon={faPlus} className={styles.plus_icon} /> 
           <h2>Add first exercise</h2>
        </div>
    )
} 

export default EmptyExercise; 