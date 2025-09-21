import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/kkkshitij01")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData((prevData) => (prevData = data));
  //       });
  //   }, []);
  return (
    <div className="text-center m-4 bg-gray-600 text-3xl p-4 text-white">
      Github Id : {data.login}
      <img src={data.avatar_url} alt="git hub" width={300} />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/kkkshitij01");
  return response.json();
};
