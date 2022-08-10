import React, { useEffect } from "react";
import { useLazyQuery } from "@apollo/client/react";
import { getWather } from "./schema/schema";
export default function Search() {
  const [something, { loading, data, error }] = useLazyQuery(getWather, {
    variables: { name: "tbilisi", config: { units: "metric" } },
  });
  useEffect(() => {
    something();
  }, []);
  if (error) {
    console.log(error);
  }
  if (loading) return <h1>loading</h1>;
  if (data) console.log(data);

  return (
    <div>
      <input placeholder="search city by name" />
      <button onClick={() => something()}>search</button>
    </div>
  );
}
