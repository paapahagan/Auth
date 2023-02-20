import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Switch } from "@headlessui/react";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

function Login() {
  const [enabled, setEnabled] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/SignUp");
  };

  const signIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="flex justify-between">
        <div className="flex w-1/2 justify-center mt-10 ">
          <form className="w-1/3 mx-auto p-2 grid content-center">
            <div className="grid content-center mb-5 ">
              <p className="text-4xl text-teal-500 mb-2">Welcome Back</p>
              <p>Enter your email and password to sign in</p>
            </div>
            <div className="mb-5">
              <p>Email</p>
              <input
                className="border border-slate-200 block w-full text-sm rounded-md px-3 py-2 "
                type="text"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <p>Password</p>
              <input
                className="border border-slate-200 block w-full text-sm rounded-md px-3 py-2 "
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex mt-2">
              <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`${
                  enabled ? "bg-teal-400" : "bg-gray-200"
                } relative inline-flex h-6 w-11 items-center rounded-full`}
              >
                <span
                  className={`${
                    enabled ? "translate-x-6" : "translate-x-1"
                  } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                />
              </Switch>
              <p className="ml-2">Remember me</p>
            </div>
            <button
              className="w-full bg-teal-400 rounded-lg mt-4 mb-4 p-2 text-white"
              onClick={signIn}
            >
              SIGN IN
            </button>
            <p className="grid justify-items-center">
              Don't have an account?
              <button className="text-teal-600" onClick={handleSignUp}>
                Sign up
              </button>
            </p>
            {user.email}
          </form>
        </div>
        <div>
          <div className="flex justify-end w-fit">
            <img src="bg.svg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
