import React from "react";
import { postemail } from "./http";
import RegisterForm from "./registrationform";
export default function HtmlForm() {
  const emailref = React.useRef();
  const passwordref = React.useRef();
  //   console.log(emailref.current.value, passwordref.current.value);
  async function handlesubmit(e) {
    e.preventDefault();
    const email = emailref.current.value;
    const password = passwordref.current.value;
    const response = await postemail(email, password);

    console.log(response);

    // console.log(emailref.current.value, passwordref.current.value);
    // console.log("hello world");
  }
  function handleclick() {
    console.log(emailref.current.value, passwordref.current.value);

    // emailref.current.value = "";
    // passwordref.current.value = "";
  }
  return (
    <div
      className="mt-4 container border border-primary justify-content-center"
      // width="100px"
      // height="100px"
    >
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
          // width="100px"
          // height="100px"
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
        />
        <button
          type="submit"
          className="m-3 btn btn-primary"
          onClick={handleclick}
        >
          Submit
        </button>

        <small id="emailHelpId" className="form-text text-muted">
          Help text
        </small>
      </form>
    </div>
  );
}
