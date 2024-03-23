import styles from './styles/errors.module.css'

export default function LoadingError({error}) {
  return (
    <div className={styles.loading_error_container}>
      <h1>{`:(`}</h1>
      <p>{error}</p>
    </div>
  );
}

