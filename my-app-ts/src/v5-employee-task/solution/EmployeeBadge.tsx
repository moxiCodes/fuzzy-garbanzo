import { Employee } from "../Employee";
import styles from "./EmployeeBadge.module.css";

export const EmployeeBadge = (employee: Employee) => {
  const {
    cohort,
    details: { firstName, middleName, lastName },
    email,
    jobTitle,
    team,
    imagePath,
  } = employee;
  return (
    <div className={styles.employeeBadge}>
      <img alt={`${firstName} ${lastName}`} src={`/images/${imagePath}`} />
      <div>
        <h2>
          {firstName} {middleName ?? ""} {lastName}
        </h2>
        <div>Job Title: {jobTitle}</div>
        <div>
          <span>Email:</span>
          <a href={`mailto:${email}`}>{email}</a>
        </div>
        <div>Cohort: {cohort ?? "-"}</div>
        <div>Team: {team}</div>
      </div>
    </div>
  );
};
