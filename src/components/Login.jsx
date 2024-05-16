import { Link } from "react-router-dom";
import { UseUser } from "../context/UserContexts";

function Login() {
  const { user, setUser, handleLogin } = UseUser();

  return (
    <>
      <div className="container">
        <div
          className="row justify-content-center align-items-center"
          style={{ height: "80vh" }}
        >
          <div className="col-6">
            <h1 className="text-center"> Login Form </h1>
            <form onSubmit={(e) => handleLogin(e, user)}>
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
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                />
              </div>
              <div className="row my-4  ">
                <div className="col-4 text-start">
                  <Link to={"/forgetpassword"} className="btn btn-primary ">
                    Forget Password
                  </Link>
                </div>
                <div className=" col-8  text-end ">
                  <button type="submit" className="btn btn-primary ">
                    Login
                  </button>
                </div>
              </div>

              <div className="row text-center my-5">
                <div className="col-12">
                  <Link to={"/register"} className="btn btn-primary ">
                    Register User
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
