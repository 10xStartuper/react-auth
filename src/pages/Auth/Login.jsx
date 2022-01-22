import { useRef, useState } from "react";
import http from "../../services/http/";

const Login = ({ setToken }) => {
  const loginInput = useRef(null);
  const passwordInput = useRef(null);

  const onLogin = (e) => {
    e.preventDefault(); //Preventing auto reload

    const loggerStyle = `
      color: white; 
      padding: 5px 8px; 
      font-size: 20px; 
      text-transform: uppercase; 
      background: #00c300;
    `;
    console.log(
      `%c\nLogin: ${loginInput.current.value}\nPassword: ${passwordInput.current.value}`,
      loggerStyle
    );

    http
      .post("/login", {
        email: loginInput.current.value,
        password: passwordInput.current.value,
      })
      .then((res) => {
        console.log(res.data);
        setToken(res.data.token);
        window.localStorage.setItem("token", res.data.token);
      })
      .catch((err) => {
        setHasError(true);
      });
  };

  const [hasError, setHasError] = useState(false);

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
              {hasError && (
                <div className="alert alert-danger" role="alert">
                  Error occured while logging in, please try again!
                </div>
              )}
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  ref={loginInput}
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
                  ref={passwordInput}
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
