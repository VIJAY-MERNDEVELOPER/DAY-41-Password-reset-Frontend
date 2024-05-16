import React from "react";
import { UseUser } from "../context/UserContexts";

function Register() {
  const { user, setUser, handleRegister } = UseUser();

  return (
    <div className="container">
      <div
        className="row justify-content-center align-items-center"
        style={{ height: "80vh" }}
      >
        <div className="col-6">
          <h1 className="text-center"> Register Form </h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleRegister(e, user);
            }}
          >
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                User Name
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                aria-describedby="emailHelp"
                onChange={(e) => setUser({ ...user, username: e.target.value })}
              />
            </div>
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
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </div>
            <div className="row-col-3 text-center">
              <button type="submit" className="btn btn-primary ">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
