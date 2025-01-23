// import React from "react";
import { fetchblogs, updateblog } from "./http";
import { Button } from "react-bootstrap";
import React from "react";
export default function Postupdate() {
  const [data, setdata] = React.useState([]);
  const [editingIndex, setEditingIndex] = React.useState(null);
  const [editValue, setEditValue] = React.useState("");

  function handleClick(index, item) {
    setEditingIndex(index);
    setEditValue(item.body);
  }

  async function handleSave(index, item) {
    const response = await updateblog(item.title, editValue);

    // console.log(item.title, editValue, response);

    const updatedData = data.map((item, i) =>
      i === index ? { ...item, body: editValue } : item
    );
    setdata(updatedData);
    console.log(
      "\n item ",
      item,
      "\nindex=",
      index,
      "\ndata=",
      data,
      "\nupdatedData=",
      updatedData,
      "\nedit value=",
      editValue
    );

    setEditingIndex(null);
  }

  function handleChange(event) {
    setEditValue(event.target.value);
  }

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchblogs();
        setdata(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="table-responsive mt-4 m-4 justify-content-center text-capitalize fit-content">
      <h1 className="text-center text-capitalize fw-bolder m-4">My blog</h1>

      <h2 className="text-center text-capitalize fw-bolder m-4">Table</h2>
      <center>
        <table
          style={{ width: "1050px", justifyContent: "center" }}
          className="table table-striped table-hover table-borderless   align-middle"
        >
          <thead className="text-center text-capitalize fs-3 table-light">
            <tr>
              <th>Title</th>
              <th>Body</th>
              <th>Button</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {data.map((item, index) => {
              return (
                <tr key={index} className=" ">
                  <td
                    style={{
                      display: "flex",
                      wrapcontent: "wrap",
                      justifyContent: "center",
                    }}
                    className="text-capitalize text-center fs-5 fw-bolder m-1"
                  >
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
                    <Button
                      variant="primary"
                      className="m-1"
                      onClick={() => handleClick(index, item)}
                    >
                      Update
                    </Button>
                    {editingIndex === index && (
                      <Button
                        variant="success"
                        className="m-1"
                        onClick={() => handleSave(index, item)}
                      >
                        Save
                      </Button>
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
  );
}
