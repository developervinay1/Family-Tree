import React from "react";
import { db } from "../../../firebase";
import { collection } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import Childs from "./Childs";
import AddData from "./AddData";
import AddParentData from "./AddParentData";

export default function AnotherChild({ path }) {
  const query = collection(db, path);
  const [docs, loading, error] = useCollectionData(query);
  return (
    <div>
      {loading && <h1>Loading</h1>}
      <ul className="list-disc px-6 parents">
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
                  <Childs path={`${path}/${data.Name}/Childs/`} />
                </div>
              )}
            </div>
          );
        })}
        <AddParentData path={`${path}`} />
      </ul>
    </div>
  );
}
