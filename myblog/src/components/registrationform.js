import React from "react";
import { Button } from "react-bootstrap";
import "./registrationform.css";
import { postregister } from "./http";
export default function RegisterForm() {
  const [register, setregister] = React.useState({
    fullname: "",
    username: "",
    email: "",
    dob: "",
    password: "",
    gender: "",
  });
  const [registrationstate, setregistrationstate] = React.useState(false);
  function handlesubmit(e) {
    e.preventDefault();
    postregister(register);
    setregistrationstate(true);
    setregister({
      fullname: "",
      username: "",
      email: "",
      dob: "",
      password: "",
      gender: "",
    });
  }
  return (
    <form
      id="registrationform"
      className="container border border-primary p-5"
      onSubmit={handlesubmit}
    >
      <h1 className="text-center">Registration Form</h1>
      <div className="form-floating mb-3 mt-3 fw-semibold m-2 p-2">
        <div className="form-group ">
          <label htmlFor="formId1">Full Name</label>
          <input
            type="text"
            className="form-control"
            name="formId1"
            id="FullName"
            value={register.fullname}
            onChange={(e) =>
              setregister({ ...register, fullname: e.target.value })
            }
            placeholder="Enter your name"
          />
          <div className="d-block">
            <label htmlFor="dob">DOB</label>
            <input
              className="rounded shadow-sm"
              type="datetime-local"
              id="dob"
              value={register.dob}
              name="birthdaytime"
              onChange={(e) => {
                setregister({ ...register, dob: e.target.value });
              }}
            ></input>
          </div>
          <label htmlFor="Username">Username</label>
          <input
            type="text"
            className="form-control"
            name="Username"
            id="Username"
            value={register.username}
            onChange={(e) =>
              setregister({ ...register, username: e.target.value })
            }
            placeholder="Enter your username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="formId1">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            value={register.email}
            onChange={(e) =>
              setregister({ ...register, email: e.target.value })
            }
            placeholder="Enter your email"
          />
          <label htmlFor="formId1">Password</label>
          <input
            type="password"
            className="form-control"
            name="Password"
            id="Password"
            value={register.password}
            onChange={(e) =>
              setregister({ ...register, password: e.target.value })
            }
          />
          <label htmlFor="formId1">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            name="Confirmpassword"
            id="Confirmpassword"
          />
        </div>
        <div id="gender" className="container mt-3">
          <label htmlFor="gender" className="d-block fs-5">
            Gender
          </label>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              id="gendermale"
              name="gender"
              value="male"
              checked={register.gender === "male"}
              onChange={(e) =>
                setregister({ ...register, gender: e.target.value })
              }
            />
            <label className="form-check-label" htmlFor="gendermale">
              Male
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              id="genderfemale"
              name="gender"
              value="female"
              checked={register.gender === "female"}
              onChange={(e) =>
                setregister({ ...register, gender: e.target.value })
              }
            />
            <label className="form-check-label" htmlFor="genderfemale">
              Female
            </label>
          </div>
        </div>
      </div>
      <Button type="submit" className="btn btn-primary">
        Submit
      </Button>
      {registrationstate && (
        <div className="alert alert-primary" role="alert">
          <strong>registered successfully</strong>
        </div>
      )}
    </form>
  );
}
