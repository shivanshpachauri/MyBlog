import React from "react";
import { postemail } from "./http";
import RegisterForm from "./registrationform";
import "./loginform.css";
export default function HtmlForm() {
  const [form, setform] = React.useState({
    email: "",
    password: "",
  });
  const [formstate, setformstate] = React.useState(false);
  const emailref = React.useRef();
  const passwordref = React.useRef();
  function handlesubmit(e) {
    e.preventDefault();
    const email = emailref.current.value;
    const password = passwordref.current.value;
    const response = postemail(email, password);
    setformstate(true);
    setform({
      email: "",
      password: "",
    });
  }

  return (
    <div
      id="loginform"
      className="mt-4 container border border-primary justify-content-center"
    >
      <h1 className="m-1 p-2 text-center"> Login form</h1>
      <form className="mt-4" onSubmit={handlesubmit}>
        <label htmlFor="email" className="form-label">
          <strong>Email</strong>
        </label>
        <input
          ref={emailref}
          type="email"
          className=" form-control"
          name="email"
          id="formemail"
          aria-describedby="emailHelpId"
          placeholder="abc@mail.com"
          value={form.email}
          onChange={(e) => {
            setform({ ...form, email: e.target.value });
          }}
        />

        <label htmlFor="password" className="mt-2 form-label">
          <strong>Password</strong>
        </label>
        <input
          type="password"
          className=" form-control"
          ref={passwordref}
          name="password"
          id="formpassword"
          placeholder=""
          value={form.password}
          onChange={(e) => {
            setform({ ...form, password: e.target.value });
          }}
        />
        <button type="submit" className="m-3 btn btn-primary">
          Submit
        </button>
        {formstate && (
          <div class="alert alert-light" role="alert">
            <strong>Login successfully</strong>
          </div>
        )}
        <small id="emailHelpId" className="form-text text-muted">
          Help text
        </small>
      </form>
    </div>
  );
}
