import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { fetchblogs, deleteblog } from "./http.js";
const PostDelete = () => {
  const [posts, setPosts] = React.useState([]);
  React.useEffect(() => {
    const fetchdata = async () => {
      try {
        const result = await fetchblogs();
        setPosts(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  }, []);
  // console.log(posts);

  // const [posts, setPosts] = useState(["Post 1", "Post 2", "Post 3"]);

  const handleDelete = (post, index) => {
    deleteblog(post.title, post.body);
    // console.log("title=\n", post.title, "body=\n", post.body);
    const newPosts = [...posts];
    newPosts.splice(index, 1);

    // deleteblog(post[index].title, post[index].body);
    setPosts(newPosts);
    // deleteblog(post[index].title, post[index].body);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center fw-bold fs-1 m-4">Posts</h2>
      <hr style={{ opacity: "100%" }} />
      <ul className="list-group">
        {posts.map((post, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center shadow-sm p-3 mb-5 bg-body rounded text-capitalize"
          >
            <h1 className="fs-4 fw-bold m-3">{post.title}</h1>
            <p className="m-2 p-1">
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
