import { FaExclamation } from "react-icons/fa";

export const JobStatus = () => {
  return (
    <div className={"text-xl flex flex-row gap-2 items-center"}>
      <FaExclamation />
      <p>Available for hire </p>
    </div>
  );
};
