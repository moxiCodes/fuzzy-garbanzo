import styles from "./Alert.module.css";
import classNames from "classnames";

export type AlertType = "error" | "warning" | "info" | "success";

type AlertProps = {
  message: string;
  type?: AlertType;
};

export const Alert = ({ message, type = "info" }: AlertProps) => (
  <div className={classNames(styles.alertage, styles[type])}>{message}</div>
);
