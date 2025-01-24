import "./postupdate.css";
import { updateblog } from "./http";
import { Button } from "react-bootstrap";
import React from "react";
import { useQuery } from "@tanstack/react-query";
export default function Postupdate() {
  const [data1, setdata] = React.useState([]);
  const [editingIndex, setEditingIndex] = React.useState(null);
  const [editValue, setEditValue] = React.useState("");
  const [editingcompleted, seteditingcompleted] = React.useState(false);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["blogskey"],
  });
  React.useEffect(() => {
    setdata(data);
  }, [data]);
  function handleClick(index, item) {
    setEditingIndex(index);
    setEditValue(item.body);
  }

  function handleSave(index, item) {
    const response = updateblog(item.title, editValue);
    console.log(response);

    seteditingcompleted(true);
    const updatedData = data.map((item, i) =>
      i === index ? { ...item, body: editValue } : item
    );
    setdata(updatedData);

    setEditingIndex(null);
  }

  function handleChange(event) {
    setEditValue(event.target.value);
  }
  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <div
          className="spinner-border text-primary spinner-border-sm"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  if (isError) {
    return <h1>Error in fetching</h1>;
  }

  return (
    <center>
      <div
        id="postupdate"
        className="table-responsive mt-4 m-4 justify-content-center text-capitalize fit-content"
      >
        <div id="myblogid" className="container">
          <h1 className="text-center text-capitalize fw-bolder m-4">My blog</h1>
        </div>
        <hr />
        <div id="tabletitleid" className="container">
          <h2 className="text-center text-capitalize fw-bolder m-4">
            <em>Table</em>
          </h2>
        </div>
        <hr />
        <center>
          <table
            style={{ width: "1050px", justifyContent: "center" }}
            className="table table-striped table-hover table-borderless  align-middle"
          >
            <thead className="text-center text-capitalize fs-3 ">
              <tr>
                <th>Title</th>
                <th>Body</th>
                <th>Button</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {data1.map((item, index) => {
                return (
                  <tr key={index} className=" ">
                    <td className="text-capitalize text-center fs-5 fw-bolder m-1">
                      {item.title}
                    </td>
                    {editingIndex === index ? (
                      <td>
                        <input
                          type="text"
                          value={editValue}
                          onChange={handleChange}
                          style={{ width: "500px" }}
                          className="d-flex rounded"
                        />
                      </td>
                    ) : (
                      <td className="fw-small m-1">{item.body}</td>
                    )}
                    <td>
                      {editingIndex === index ? (
                        <Button
                          variant="success"
                          className="m-1"
                          onClick={() => handleSave(index, item)}
                        >
                          Save
                        </Button>
                      ) : (
                        <Button
                          variant="primary"
                          className="m-1"
                          onClick={() => handleClick(index, item)}
                        >
                          Update
                        </Button>
                      )}
                      {editingcompleted && editingIndex === null && (
                        <div className="alert alert-success m-1" role="alert">
                          <strong>Updated successfully</strong>
                        </div>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot></tfoot>
          </table>
        </center>
      </div>
    </center>
  );
}
