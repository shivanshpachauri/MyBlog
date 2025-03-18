import React from "react";
import "./postdelete.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { deleteblog } from "./http.js";
import { useQuery } from "@tanstack/react-query";
const PostDelete = () => {
  const [posts, setPosts] = React.useState([]);
  const [deletestate, setdeletestate] = React.useState(false);
  const { data, isLoading, isError } = useQuery({
    queryKey: ["blogskey"],
  });
  React.useEffect(() => {
    if (data) {
      setPosts(data);
    } else {
      setPosts([]);
    }
  }, [data]);

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
    return <h1>Error in fetching data</h1>;
  }
  const handleDelete = (post, index) => {
    deleteblog(post.title, post.body);
    setdeletestate(true);
    const newPosts = [...posts];
    newPosts.splice(index, 1);

    setPosts(newPosts);
  };

  return (
    <div id="postdeletecontainer" className="container mt-4">
      <h2 className="text-center fw-bold fs-1 m-4">Posts</h2>
      <hr style={{ opacity: "100%" }} />
      {deletestate ? (
        <div className="alert alert-info text-capitalize" role="alert">
          <strong>deleted success</strong>
        </div>
      ) : undefined}
      <ul className="list-group">
        {posts.map((post, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center shadow-sm p-3 mb-5 bg-body rounded text-capitalize"
            id="posts"
          >
            <h1 className="fs-4 fw-bold m-3" id="posttitle">
              {post.title}
            </h1>
            <p className="m-2 p-1" id="postbody">
              <small>{post.body}</small>
            </p>

            <button
              className="btn btn-danger btn-sm"
              onClick={() => handleDelete(post, index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostDelete;
