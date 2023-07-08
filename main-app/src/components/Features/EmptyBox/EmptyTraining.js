import React from 'react'
import styles from './styles/empty.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const EmptyTraining = () => {
    return (
        <div className = {`${styles.empty} ${styles.empty_training_box}`}>
           <FontAwesomeIcon icon={faPlus} className={styles.plus_icon} /> 
           <h2>Add first training</h2>
        </div>
    )
} 

export default EmptyTraining; 