import { useState } from "react";
import { Switch } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

function SignUp() {
  const [enabled, setEnabled] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/Login");
  };

  return (
    <div className="bg-[url('bgg.svg')] m-5 rounded-md h-96">
      <div className="flex justify-center ">
        <div className="m-5">
          <Nav />
          <div className="mb-5 text-white">
            <div className="flex justify-center text-4xl mb-5">
              <p>Welcome!</p>
            </div>
            <div className="flex justify-center text">
              <p>Use these awesome forms to login or create new</p>
            </div>
            <div className="flex justify-center">
              <p>account in your project for free.</p>
            </div>
          </div>
          <div className="mt-10 p-10 rounded-xl bg-slate-100 drop-shadow-xl">
            <div className="grid justify-items-center">
              <div className="mb-3 font-bold">
                <p>Register with</p>
              </div>
              <div className="flex mb-2">
                <div className="mr-2">
                  <button>
                    <img src="Facebook.svg" />
                  </button>
                </div>
                <div>
                  <button>
                    <img src="Apple.svg" />
                  </button>
                </div>
                <div className="ml-2">
                  <button>
                    <img src="Google.svg" />
                  </button>
                </div>
              </div>
              <div className="font-bold text-slate-400">or</div>
            </div>
            <div className="mb-3">
              <p>Name</p>
              <input
                className="border border-slate-200 block w-full text-sm rounded-md px-3 py-2 "
                placeholder="Your full name"
                type="text"
              />
            </div>
            <div className="mb-3">
              <p>Email</p>
              <input
                className="border border-slate-200 block w-full text-sm rounded-md px-3 py-2"
                placeholder="Your email address"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <p>Password</p>
              <input
                className="border border-slate-200 block w-full text-sm rounded-md px-3 py-2"
                placeholder="Your password"
                type="password"
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
              onClick={signUp}
            >
              SIGN UP
            </button>
            <p className="grid justify-items-center">
              Already have an account?
              <button onClick={handleLogin} className="text-teal-600">
                Sign in
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
