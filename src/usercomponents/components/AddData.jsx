// import { doc, setDoc } from "firebase/firestore";
// import React, { useRef } from "react";
// import { db } from "../../../firebase";

import { doc, setDoc, collection, addDoc } from "firebase/firestore";
import React, { useRef } from "react";
import { db } from "../../../firebase";

export default function AddData({ path }) {
  const name = useRef();

  const handleForm = async (e) => {
    e.preventDefault();

    const parentDocRef = doc(db, path, name.current.value);

    // Set data in the parent document
    await setDoc(parentDocRef, { Name: name.current.value });

    // Create a subcollection reference named "Child"
    const childCollectionRef = collection(parentDocRef, "Childs");

    // Add a document to the "Child" subcollection
    await addDoc(childCollectionRef, { ChildProperty: "Value" });

    // Reset the form
    e.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleForm}>
        <input placeholder="Enter Name" type="text" ref={name} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export function AddGrandParentData({ path }) {
  const name = useRef();
  const handleForm = async (e) => {
    e.preventDefault();
    const docRef = doc(db, path, name.current.value);
    await setDoc(docRef, { Name: name.current.value });
    // Reset

    e.target.reset();
  };
  return (
    <div>
      <form onSubmit={handleForm}>
        <input placeholder="Enter Name" type="text" ref={name} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
