import styles from "./Button.module.css";

// `type` is used for styling; `htmlType` sets the underlying button's `type` attribute
function Button({ children, onClick, type = "primary", htmlType = "button" }) {
  return (
    <button
      type={htmlType}
      className={`${styles.btn} ${styles[type]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
