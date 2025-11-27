import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";

const List = ({ val }) => {
  let { contextInputValue, setContextInputValue, setEditedId } =
    useContext(MyStore);

  const handleDelete = () => {
    let filteredarr = contextInputValue.filter((elem) => elem.id !== val.id);
    setContextInputValue(filteredarr);
  };

  return (
    <div>
      <p>{val.task}</p>
      <button onClick={() => setEditedId(val.id)}>Update</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default List;
