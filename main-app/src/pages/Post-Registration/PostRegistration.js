import LoginButton from "../../components/Features/Buttons/Login&RegisterButton";
import styles from "./styles/post-registration.module.css";
import { useNavigateTo } from "../../hooks/useNavigateTo";

const PostRegistration = () => {

  return (
    <div className={styles.post_registration_container}>
      <div className={styles.post_registration_text_box}>
        <h1>
          <span className={styles.post_registration_title}>Welcome !</span><br/> Log in and start your dream fit life today! 
        </h1>
        <LoginButton buttonHandler={useNavigateTo('/login')}>Log in</LoginButton>
      </div>
    </div>
  );
};

export default PostRegistration;
