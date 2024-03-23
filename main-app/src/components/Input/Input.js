import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ErrorMessage from '../Error/ErrorMessage';

const Input = (props) => {
  return (
      <div className={props.className}>
        <div className={props.iconboxClass}>
          <FontAwesomeIcon icon={props.icon} />
        </div>
        <input
          type={props.type}
          placeholder={props.placeholder}
          onChange={props.onChange}
          className={props.inputClass}
          value={props.value}
        ></input>
        <ErrorMessage>{props.errorMessage}</ErrorMessage>
      </div>
  );
};

export default Input;
