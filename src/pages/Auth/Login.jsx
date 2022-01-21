import { useRef, useEffect } from "react";
import http from "../../services/http/";

const Login = () => {
  const onLogin = (e) => {
    e.preventDefault(); //Preventing auto reload

    const loggerStyle =
      "color: white; padding: 5px 8px; font-size: 20px; text-transform: uppercase; background: #00c300;";
    console.log("%c Submit!!!", loggerStyle);

    http
      .post("/login", {
        email: "test@example.com",
        password: "testPasscode",
      })
      .then((res) => console.log(res));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className="card m-5">
            <div className="card-header">
              <h2>Login</h2>
            </div>
            <form className="card-body" onSubmit={onLogin}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

export default Login;
