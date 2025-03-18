import React from "react";

export default function Footer() {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <div className="container">
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <a href="/create" className="nav-link px-2 text-muted">
              Create
            </a>
          </li>
          <li className="nav-item">
            <a href="/view" className="nav-link px-2 text-muted">
              View
            </a>
          </li>
          <li className="nav-item">
            <a href="/update" className="nav-link px-2 text-muted">
              Update
            </a>
          </li>
          <li className="nav-item">
            <a href="/delete" className="nav-link px-2 text-muted">
              Delete
            </a>
          </li>
        </ul>
        <p className="text-center text-muted">©{year} Ashu medical, Inc</p>
      </footer>
    </div>
  );
}
