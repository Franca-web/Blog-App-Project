import React, { useEffect, useState } from "react";
import axios from "axios";
function Homepage() {
  const [loading, setLoading] = useState(true);
  const [Posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setPosts(response.data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  });

  return (
    <div>
      {loading && <h1> Testing Conditions </h1>}

      {Posts.map((Posts) => (
        <h3 key={Posts.id}> {Posts.title} </h3>
      ))}
    </div>
  );
}
export default Homepage;
