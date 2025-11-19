import React from "react";
import Input from "./components/Input";
import TaskContainer from "./components/TaskContainer";

const App = () => {
  return (
    <div className="h-screen w-full flex justify-center gap-10 items-center flex-col">
      <h1 className="text-3xl font-bold">Todo list</h1>
      <div className="w-[50%] flex flex-col gap-10 justify-center items-center">
        <Input />
        <TaskContainer />
      </div>
    </div>
  );
};

export default App;
