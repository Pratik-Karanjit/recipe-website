import React from "react";

const SignUp = () => {
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary btn-lg"
        data-toggle="modal"
        data-target="#ModalLoginForm"
      >
        Launch demo modal
      </button>

      <div id="ModalLoginForm" className="modal fade">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title">Login</h1>
            </div>
            <div className="modal-body">
              <form role="form" method="POST" action="">
                <input type="hidden" name="_token" value="" />
                <div className="form-group">
                  <label className="control-label">E-Mail Address</label>
                  <div>
                    <input
                      type="email"
                      className="form-control input-lg"
                      name="email"
                      value=""
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label">Password</label>
                  <div>
                    <input
                      type="password"
                      className="form-control input-lg"
                      name="password"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div>
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" name="remember" /> Remember Me
                      </label>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div>
                    <button type="submit" className="btn btn-success">
                      Login
                    </button>

                    <a className="btn btn-link" href="">
                      Forgot Your Password?
                    </a>
                  </div>
                </div>
              </form>
              <h1>Or Signup!</h1>
              <form role="form" method="POST" action="">
                <input type="hidden" name="_token" value="" />
                <div className="form-group">
                  <label className="control-label">Username</label>
                  <div>
                    <input
                      type="text"
                      className="form-control input-lg"
                      name="name"
                      value=""
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label">E-Mail Address</label>
                  <div>
                    <input
                      type="email"
                      className="form-control input-lg"
                      name="email"
                      value=""
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label">Password</label>
                  <div>
                    <input
                      type="password"
                      className="form-control input-lg"
                      name="password"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label">Confirm Password</label>
                  <div>
                    <input
                      type="password"
                      className="form-control input-lg"
                      name="password_confirmation"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div>
                    <button type="submit" className="btn btn-success">
                      Register
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
