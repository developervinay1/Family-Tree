import React from "react";
import { db } from "../../../firebase";
import { collection } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import AnotherChild from "./AnotherChild";
import AddData from "./AddData";

export default function ChildrenListing({ path }) {
  const query = collection(db, path);
  const [docs, loading, error] = useCollectionData(query);
  return (
    <div>
      {loading && <h1>Loading</h1>}
      <ul className="list-disc px-6 grandParents space-x-4">
        {docs?.map((data) => {
          return (
            <div key={data.Name}>
              {data.Name && (
                <div>
                  <li>
                    {data.Name}
                    {/* <img
                src={data.Image}
                className="w-[200px] object-cover h-[200px]"
              /> */}
                  </li>
                  <AnotherChild path={`${path}/${data.Name}/Childs`} />
                  <AddData path={path} />
                </div>
              )}
            </div>
          );
        })}
      </ul>
    </div>
  );
}
