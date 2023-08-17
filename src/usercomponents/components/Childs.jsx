import React from "react";
import { db } from "../../../firebase";
import { collection } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

export default function Childs({ path }) {
  const query = collection(db, path);
  const [docs, loading, error] = useCollectionData(query);
  return (
    <div>
      {loading && <h1>Loading</h1>}
      <ul className="list-disc px-6">
        {docs?.map((data) => {
          return <div key={data.Name}>{data.Name && <li>{data.Name}</li>}</div>;
        })}
      </ul>
    </div>
  );
}
