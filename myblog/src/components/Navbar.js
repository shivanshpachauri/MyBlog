import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchblogs } from "./http";

import { NavLink, Outlet } from "react-router-dom";
export default function Navbar() {
  const { isLoading, isError } = useQuery({
    queryKey: ["blogskey"],
    queryFn: fetchblogs,
  });
  if (isError) {
    <h1>Error in fetching</h1>;
  }
  if (isLoading) {
    return (
      <center className="m-4 p-2">
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
  return (
    <>
      <nav
        className=" text-capitalize navbar navbar-expand-sm navbar-light shadow-sm"
        style={{ marginBottom: "20px", backgroundColor: "#E8F9FF" }}
      >
        <div className="container">
          <a href="/" className="navbar-brand">
            MyBlog
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <NavLink to="/create" className="nav-link" aria-current="page">
                  Create
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/view" className="nav-link">
                  View
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/update" className="nav-link">
                  update
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/delete" className="nav-link">
                  delete
                </NavLink>
              </li>
            </ul>
            <form className="d-flex my-2 my-lg-0">
              <NavLink to="/register" className="nav-link m-2">
                Register
              </NavLink>
              <NavLink to="/login" className="nav-link m-2">
                login
              </NavLink>
              <input
                className="form-control me-sm-2"
                type="text"
                placeholder="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="search"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
