import React from "react";

const SignIn = () => {
  return (
    <>
      <div className="card bg-base-100 w-full mx-auto md:mt-20 mt-8 max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-4xl font-bold">Login now!</h1>
          <form className="fieldset">
            <label className="label">Email</label>
            <input type="email" name="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" name="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
