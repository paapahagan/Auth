import React from "react";

function Nav() {
  return (
    <div className="">
      <div className="flex justify-center ">
        <div className="mb-5 w-fit rounded-2xl  drop-shadow-xl ml-5 mr-5">
          <ul className="flex justify-center ">
            <li className=" flex m-2 text-white">
              <img src="dash.svg" className="mr-1" />
              <button> DASHBOARD </button>
            </li>
            <li className="flex m-2 text-white">
              <img src="profile.svg" className="mr-1" />
              <button> PROFILE </button>
            </li>
            <li className="flex m-2 text-white">
              <img src="sign.svg" className="mr-1" />
              <button> SIGN UP </button>
            </li>
            <li className="flex m-2 text-white">
              <img src="key.svg" className="mr-1" />
              <button> SIGN IN</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;
