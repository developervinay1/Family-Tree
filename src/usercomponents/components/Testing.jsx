import { collection } from "firebase/firestore";
import React from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { db } from "../../../firebase";
import ChildrenListing from "./ChildrenListing";

export default function Testing() {
  const query = collection(db, "Users");
  const [docs, loading, error] = useCollectionData(query);
  return (
    <div className="max-w-7xl m-auto px-12 py-12">
      {loading && <h1>Loading Data</h1>}
      <ul className="list-decimal">
        {docs?.map((data) => {
          return (
            <div key={data.Name}>
              <li> {data.Name} </li>
              <ChildrenListing path={`Users/${data.Name}/Childs`} />
            </div>
          );
        })}
      </ul>
    </div>
  );
}
