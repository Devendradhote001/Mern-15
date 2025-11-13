import React from "react";
import { useForm } from "react-hook-form";

const App = () => {
  const { register, handleSubmit, reset } = useForm();
  

  const handleFormSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div>
      <h1>React hook form</h1>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "40%",
          gap: "15px",
        }}
        action=""
      >
        <input {...register("name")} type="text" placeholder="name" />
        <input {...register("email")} type="text" placeholder="email" />
        <input {...register("password")} type="text" placeholder="password" />
        <input type="submit" value="Create" />
      </form>
    </div>
  );
};

export default App;
