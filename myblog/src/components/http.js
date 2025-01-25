// import React from "react";
export async function checkemail(email, password) {
  const response = await fetch("http://localhost:5173/api/login", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email, password: password }),
  });
  if (!response.ok) {
    throw new Error("error");
  }
  const data = await response.json();

  return data;
}

export async function fetchblogs() {
  const response = await fetch("http://localhost:5173/api/view");
  if (!response.ok) {
    throw new Error("error");
  }
  return await response.json();
}
export async function postblog({ title, body }) {
  const response = await fetch("http://localhost:5173/api/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: title, body: body }),
  });
  console.log(response);

  if (!response.ok) {
    throw new Error("error");
  }
  return response.json();
}

export async function updateblog(title, body) {
  const response = await fetch("http://localhost:5173/api/update", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: title, body: body }),
  });
  if (!response.ok) {
    throw Error("cannot delete");
  }
  return response.json();
}

export async function deleteblog(title, body) {
  const response = await fetch("http://localhost:5173/api/delete", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: title, body: body }),
  });
  if (!response.ok) {
    throw new Error("cannot delete");
  }
  return response.json();
}

export async function postregister(register) {
  const { fullname, dob, username, email, password, gender } = register;
  const response = await fetch("http://localhost:5173/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
      gender: gender,
      dob: dob,
      username: username,
      fullname: fullname,
    }),
  });
  if (!response.ok) {
    throw new Error("error");
  }
  return response.json();
}
