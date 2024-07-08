import { useState } from "react";

type EmployeeSearchProps = {
  onSubmitSearch: (searchText: string) => void;
};

export const EmployeeSearch = ({ onSubmitSearch }: EmployeeSearchProps) => {
  const [searchText, setSearchText] = useState("");

  return (
    <>
      <input
        type="text"
        onChange={(event) => setSearchText(event.target.value)}
        onKeyUp={({ key }) => key === "Enter" && onSubmitSearch(searchText)}
      />
      <button
        onClick={() => {
          onSubmitSearch(searchText);
        }}
      >
        Search
      </button>
    </>
  );
};
