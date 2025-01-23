import React from "react";
// import { useLoaderData } from "react-router-dom";
import { fetchblogs } from "./http";
// import { Link } from "react-router-dom";
export default function Postviewing() {
  const [data, setdata] = React.useState([]);
  React.useEffect(() => {
    const fetchdata = async () => {
      try {
        const result = await fetchblogs();
        setdata(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  }, []);
  // console.log(data);

  // const { data } = useLoaderData();
  // console.log(data);
  // React.useEffect(() => {
  //   console.log(data.title);
  // });
  // let stringify = "";
  // React.useEffect(() => {
  //   const data = fetchblogs();
  //   stringify = JSON.stringify(data);
  //   console.log(stringify);

  //   setdata(stringify);
  // }, []);
  // console.log(data1);

  // const data = fetchblogs();
  // data.forEach((element) => {
  //   console.log(element);
  // });
  // console.log(data);

  return (
    <div className=" container shadow-sm mt-4">
      <h1 className="m-4 text-center">Blogs list</h1>
      {/* {data && data.map((item) => <h3>{item.title}</h3>)} */}
      {data &&
        data.map((item, index) => {
          return (
            <div key={index} className="card m-3  shadow-sm">
              <div className="card-header m-2">
                <div className="card-body">
                  <h4 className="card-title text-capitalize fw-bold ">
                    {item.title}
                  </h4>
                  <p className="card-text">{item.body}</p>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
