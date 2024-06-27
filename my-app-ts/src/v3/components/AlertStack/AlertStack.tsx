import { useState } from "react";
import { Alert, MessageAlert } from "../Alert/Alert";

type AlertStackProps = {
  alerts: MessageAlert[];
};

export const AlertStack = ({ alerts }: AlertStackProps) => {
  const [myAlerts, setMyAlerts] = useState(alerts);

  console.log("alerts", myAlerts);

  return (
    <>
      {myAlerts.map((alert, index) => {
        return (
          <Alert
            key={index}
            id={index}
            message={alert.message}
            type={alert.type}
            onClosed={(id) =>
              setMyAlerts((alerts) => alerts.filter((_, index) => index !== id))
            }
          />
        );
      })}
    </>
  );
};
