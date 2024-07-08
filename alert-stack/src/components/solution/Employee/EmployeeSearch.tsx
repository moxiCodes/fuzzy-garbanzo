import { useRef, useState } from "react";

type EmployeeSearchProps = {
  onSubmitSearch: (searchText: string) => void;
};

export const EmployeeSearch = ({ onSubmitSearch }: EmployeeSearchProps) => {
  const [searchText, setSearchText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <input
        type="text"
        ref={inputRef}
        onChange={(event) => setSearchText(event.target.value)}
        onKeyUp={({ key }) => key === "Enter" && onSubmitSearch(searchText)}
      />
      <button
        onClick={() => {
          console.log("value of reference", inputRef.current?.value);
          onSubmitSearch(searchText);
        }}
      >
        Search
      </button>
    </>
  );
};
