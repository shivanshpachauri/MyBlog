import React from "react";
export default function Header() {
  return (
    <div className=" text-center mt-5">
      <h1 className="display-1">Welcome ! &nbsp; Myblog</h1>
      <img
        src="https://picsum.photos/200/300"
        alt="random"
        className="rounded mx-auto d-block"
        // height={"500px"}
        // width={"2em"}
        style={{ ObjectFit: "cover" }}
      />
    </div>
  );
}
