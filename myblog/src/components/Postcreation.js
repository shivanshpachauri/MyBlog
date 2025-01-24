import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { postblog } from "./http";
import "./Postcreation.css";
export default function Postcreation() {
  const [blogbody, setblogbody] = useState({
    title: "",
    body: "",
  });
  const [postedsuccess, setpostedsuccess] = useState(false);
  const bodyref = React.useRef();
  const titleref = React.useRef();

  async function handlesubmit(e) {
    e.preventDefault();
    const title = titleref.current.value;
    const body = bodyref.current.value;
    const response = postblog({ title: title, body: body });
    setpostedsuccess(true);
    setblogbody({
      title: "",
      body: "",
    });
    console.log(response);
  }
  return (
    <div
      id="postcreationcontainer"
      className="container justify-content-center border border-2 mt-4 p-5"
    >
      <form className="mb-3" onSubmit={handlesubmit}>
        {" "}
        <h2 className="text-center fw-bold fs-3">PostCreation</h2>
        <div className="container">
          <label htmlFor="Title" className="d-block form-label">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={blogbody.title}
            ref={titleref}
            placeholder="Title"
            className=" m-2 d-block form-control"
            onChange={(e) => {
              setblogbody({ ...blogbody, title: e.target.value });
            }}
          />
          <label htmlFor="BlogInput" className="d-block form-label">
            Body
          </label>
          <textarea
            className="d-block form-control"
            name="body"
            id="bloginput"
            value={blogbody.body}
            ref={bodyref}
            cols={30}
            rows="3"
            placeholder="Write your blog here"
            onChange={(e) => {
              setblogbody({ ...blogbody, body: e.target.value });
            }}
          ></textarea>
        </div>
        {postedsuccess && (
          <div className="m-4 p-2 alert alert-primary" role="alert">
            Posted successfully
          </div>
        )}
        <Button className="m-4 p-2" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}
