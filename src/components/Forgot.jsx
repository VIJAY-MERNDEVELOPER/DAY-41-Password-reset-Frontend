import React from "react";
import { UseUser } from "../context/UserContexts";

function Forgot() {
  const { user, setUser, sendResetLink } = UseUser();

  return (
    <div className="container">
      <div
        className="row justify-content-center align-items-center"
        style={{ height: "80vh" }}
      >
        <div className="col-6">
          <form
            onSubmit={(e) => {
              sendResetLink(e, user);
            }}
          >
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </div>
            <div className="row-col-12 text-center">
              <button type="submit" className="btn btn-primary ">
                Send Code
              </button>
            </div>
          </form>{" "}
        </div>
      </div>
    </div>
  );
}

export default Forgot;
