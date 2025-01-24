import React from "react";
import "./postview.css";
import { useQuery } from "@tanstack/react-query";
export default function Postviewing() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["blogskey"],
  });
  if (isLoading) {
    return (
      <center>
        <button className=" text-center btn btn-primary" type="button" disabled>
          <span
            className="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          ></span>
          Loading...
        </button>
      </center>
    );
  }
  if (isError) {
    return <h1 className="text-capitalize">Fetchingdataerror</h1>;
  }
  return (
    <div id="postview" className="container shadow-sm mt-4">
      <h1 className="m-2 p-2 text-dark text-center">Blogs list</h1>
      {data &&
        data.map((item, index) => {
          return (
            <div key={index} className="card m-3  shadow-sm">
              <div className="card-header">
                <h4 className="card-title text-capitalize fw-bold ">
                  {item.title}
                </h4>
              </div>
              <div className="card-body text-capitalize">
                <p className="card-text">{item.body}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
}
