import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setToggle } from "../features/toggleSlice";

const Register = () => {
  const [regUsers, setRegUsers] = useState(
    () => JSON.parse(localStorage.getItem("reg user")) || []
  );
  const dispatch = useDispatch();
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const formSubmit = (data) => {
    let arr = [...regUsers, data];
    setRegUsers(arr);
    localStorage.setItem("reg user", JSON.stringify(arr));
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-slate-900 border border-white/10 shadow-xl rounded-2xl p-8 backdrop-blur">
        {/* Logo / Brand */}
        <div className="flex flex-col items-center gap-2 mb-8">
          <div className="h-12 w-12 rounded-2xl bg-gradient-to-tr from-indigo-500 via-sky-500 to-emerald-400 flex items-center justify-center text-white font-bold text-xl">
            A
          </div>
          <h2 className="text-xl font-semibold text-white tracking-tight">
            Welcome back
          </h2>
          <p className="text-sm text-slate-400">
            Sign in to continue to your dashboard
          </p>
        </div>

        <form onSubmit={handleSubmit(formSubmit)} className="space-y-6">
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="text-sm font-medium text-slate-200"
            >
              Name
            </label>
            <input
              {...register("name", { required: true })}
              id="name"
              type="text"
              autoComplete="name"
              placeholder="John doe"
              className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition"
            />
          </div>
          {/* Email */}
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-slate-200"
            >
              Email
            </label>
            <input
              {...register("email", { required: true })}
              id="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition"
            />
          </div>

          {/* Password */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="text-sm font-medium text-slate-200"
              >
                Password
              </label>
              <button
                type="button"
                className="text-xs text-sky-400 hover:text-sky-300"
              >
                Forgot password?
              </button>
            </div>
            <input
              {...register("password", { required: true })}
              id="password"
              type="password"
              autoComplete="current-password"
              placeholder="••••••••"
              className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-500 px-4 py-2.5 text-sm font-medium text-white shadow-lg shadow-sky-500/30 hover:shadow-sky-500/40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 focus:ring-offset-slate-900 transition"
          >
            Sign up
          </button>
        </form>

        {/* Footer text */}
        <p className="mt-6 text-center text-xs text-slate-500">
          Already have an account?{" "}
          <button
            onClick={() => dispatch(setToggle(true))}
            className="text-sky-400 hover:text-sky-300 font-medium"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default Register;
