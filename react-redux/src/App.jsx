import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addValue, decrement, increment } from "./features/counterSlice";

const App = () => {
  const dispatch = useDispatch();
  let { count } = useSelector((state) => {
    return state.counter;
  });

  const [inpValue, setInpValue] = useState(0);

  return (
    <div>
      <h1>Redux --- {count}</h1>

      <input
        onChange={(e) => setInpValue(e.target.value)}
        type="number"
        placeholder="type..."
      />
      <button onClick={() => dispatch(increment())}>Incr</button>
      <button onClick={() => dispatch(decrement())}>Dec</button>
      <button onClick={() => dispatch(addValue(inpValue))}>Add by vlue</button>
    </div>
  );
};

export default App;
