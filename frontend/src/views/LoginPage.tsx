import { useRef, useState } from "react";
import { InputField } from "../components/InputField";
import { GoDiscussionClosed } from "react-icons/go";
import { useAuthContext } from "../contexts/AuthContext";

export const LoginPage = () => {
  const { login } = useAuthContext();
  const username = useRef<string>("");
  const password = useRef<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Username: ", username.current);
    console.log("Password: ", password.current);
    login(username.current);
  };

  return (
    <div className="flex h-screen items-center justify-center ">
      <div className="flex min-h-max min-w-max flex-col rounded-lg bg-cyan-400 p-10">
        <h3 className="text-center text-3xl font-semibold">
          Sign in to discussion forum
        </h3>
        <GoDiscussionClosed className="my-6 self-center" size={36} />
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-6 px-16">
          <InputField
            type="text"
            label="Username"
            labelFor="text"
            required
            onChange={(e) => (username.current = e.target.value)}
          />
          <InputField
            type="password"
            label="Password"
            labelFor="password"
            required
            onChange={(e) => (password.current = e.target.value)}
          />
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-green-500 px-3 py-1.5 font-semibold leading-6 text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 "
          >
            Sign in
          </button>
        </form>
        <p className="mt-14 flex flex-col text-center ">
          <span className="text-gray-600">{"Don't have an account?"}</span>
          <button type="button" className="hover:text-green-300">
            Click here to create one
          </button>
        </p>
      </div>
    </div>
  );
};
