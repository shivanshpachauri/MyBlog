import React, { useState } from "react";
import Button from "react-bootstrap/Button";
export default function Postcreation() {
  const [toggle, settoggle] = useState();
  const bodyref = React.useRef();
  const titleref = React.useRef();

  const [textarea, settextarea] = useState();

  function handlechange(e) {
    // console.log(e.target.value);
    settextarea(e.target.value);
  }
  function handlesubmit(e) {
    e.preventDefault();
    const title = titleref.current.value;
    const body = bodyref.current.value;
    const response = fetch("http://localhost:5173/api/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: title, body: body }),
    });
    console.log(response);

    console.log(titleref.current.value);
    console.log(bodyref.current.value);
  }
  return (
    <div className="container justify-content-center border border-2 mt-4 p-5">
      <form className="mb-3" onSubmit={handlesubmit}>
        {" "}
        <h2 className="text-center fw-bold fs-3">PostCreation</h2>
        <div className="container">
          <label htmlFor="Title" className="d-block form-label">
            Title
          </label>
          <input
            type="text"
            name="body"
            ref={titleref}
            placeholder="Title"
            className=" m-2 d-block form-control"
          />
          <label htmlFor="BlogInput" className="d-block form-label">
            Body
          </label>
          <textarea
            className="d-block form-control"
            name="BlogInput"
            id="bloginput"
            ref={bodyref}
            cols={30}
            rows="3"
            placeholder="Write your blog here"
            onChange={handlechange}
          ></textarea>
          {toggle && <h1 className="display-2">{textarea}</h1>}
        </div>
        <Button
          className="m-4"
          variant="primary"
          onClick={() => {
            settoggle(!toggle);
          }}
        >
          Add
        </Button>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
