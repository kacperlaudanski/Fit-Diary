import LoginButton from "../../components/Buttons/Login&RegisterButton";
import styles from "./styles/post-registration.module.css";
import { useNavigate } from "react-router-dom";

const PostRegistration = () => {
  const navigate = useNavigate(); 
  return (
    <div className={styles.post_registration_container}>
      <div className={styles.post_registration_text_box}>
        <h1>
          <span className={styles.post_registration_title}>Welcome !</span><br/> Log in and start your dream fit life today! 
        </h1>
        <LoginButton buttonHandler={navigate('/login')}>Log in</LoginButton>
      </div>
    </div>
  );
};

export default PostRegistration;
