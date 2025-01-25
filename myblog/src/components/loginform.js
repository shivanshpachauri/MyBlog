import React from "react";
import { checkemail } from "./http";
import "./loginform.css";
import { useNavigate } from "react-router-dom";
export default function HtmlForm() {
  const navigate = useNavigate();
  const [form, setform] = React.useState({
    email: "",
    password: "",
  });
  const [formstate, setformstate] = React.useState(false);
  const [correctemailpassword, setcorrectemailpassword] = React.useState({
    email: false,
    password: false,
  });
  const emailref = React.useRef();
  const passwordref = React.useRef();
  async function check(email, password) {
    const response = await checkemail(email, password);
    if (response[0].email === email) {
      setcorrectemailpassword((prevState) => ({ ...prevState, email: true }));
    }
    if (response[0].password === password) {
      setcorrectemailpassword((prevState) => ({
        ...prevState,
        password: true,
      }));
    }

    if (response[0].email === email && response[0].password === password) {
      setTimeout(() => {
        navigate("/home");
      }, 5000);
      // navigate("/home");
    }
  }
  function handlesubmit(e) {
    e.preventDefault();
    const email = emailref.current.value;
    const password = passwordref.current.value;
    check(email, password);

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
        {correctemailpassword.email && (
          <div className="alert alert-success" role="alert">
            <strong>Email is correct</strong>
          </div>
        )}
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
        {correctemailpassword.password && (
          <div className="alert alert-danger" role="alert">
            <strong>password is correct</strong>
          </div>
        )}

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
          <div className="alert alert-light" role="alert">
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
