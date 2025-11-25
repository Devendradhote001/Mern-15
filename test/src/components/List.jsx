import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";

const List = ({ val, id }) => {
  let { contextInputValue, setContextInputValue } = useContext(MyStore);

  const handleDel = () => {
    let filteredArr = contextInputValue.filter((val, index) => index != id);
    setContextInputValue(filteredArr);
  };

  return (
    <div>
      <p>{val}</p>
      <button>Update</button>
      <button onClick={handleDel}>Delete</button>
    </div>
  );
};

export default List;
