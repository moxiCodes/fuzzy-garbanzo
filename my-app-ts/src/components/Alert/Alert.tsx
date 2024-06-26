import "./Alert.css";
import classNames from "classnames";

export type AlertType = "error" | "warning" | "info" | "success";

type AlertProps = {
  message: string;
  type?: AlertType;
};

export const Alert = ({ message, type = "info" }: AlertProps) => (
  <div className={classNames("alert", type)}>{message}</div>
);
