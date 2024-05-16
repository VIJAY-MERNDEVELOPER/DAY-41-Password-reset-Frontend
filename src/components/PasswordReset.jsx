import React from "react";
import { UseUser } from "../context/UserContexts";
import { useLocation } from "react-router-dom";

function PasswordReset() {
  const { password, setPassword, changePassword } = UseUser();

  const searchParams = new URLSearchParams(window.location.search);

  const email = searchParams.get("email");

  const string = searchParams.get("string");

  return (
    <div className="container">
      <div
        className="row justify-content-center align-items-center"
        style={{ height: "80vh" }}
      >
        <div className="col-5">
          <h1 className="text-center mb-5">Reset Password </h1>
          <form onSubmit={(e) => changePassword(e, password, email, string)}>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="newPassword"
                onChange={(e) =>
                  setPassword({ ...password, newPassword: e.target.value })
                }
              />
            </div>{" "}
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                onChange={(e) =>
                  setPassword({ ...password, confirmPassword: e.target.value })
                }
              />
            </div>
            <div className=" col-8  text-end ">
              <button type="submit" className="btn btn-primary ">
                Change Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PasswordReset;
