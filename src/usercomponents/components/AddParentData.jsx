import { addDoc, doc, collection, setDoc } from "firebase/firestore";
import React, { useRef } from "react";
import { db } from "../../../firebase";

export default function AddParentData({ path }) {
  const name = useRef();

  const handleForm = async (e) => {
    e.preventDefault();

    const parentDocRef = doc(db, path, name.current.value);
    const childCollectionRef = collection(parentDocRef, "Childs");

    await setDoc(parentDocRef, { Name: name.current.value });

    // Add a new child document to the nested collection
    await addDoc(childCollectionRef, { ChildName: "New Child" });

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
