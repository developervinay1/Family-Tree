import React from "react";
import { db } from "../../../firebase";
import { collection } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import AnotherChild from "./AnotherChild";

export default function ChildrenListing({ path }) {
  const query = collection(db, path);
  const [docs, loading, error] = useCollectionData(query);
  return (
    <div>
      {loading && <h1>Loading</h1>}
      <ul className="list-disc px-6">
        {docs?.map((data) => {
          return (
            <div key={data.Name}>
              <li>{data.Name}</li>
              <AnotherChild path={`${path}/${data.Name}/Childs`} />
            </div>
          );
        })}
      </ul>
    </div>
  );
}
