import { doc, setDoc } from "firebase/firestore";
import React, { useRef } from "react";
import { db } from "../../../firebase";

export default function AddData({ path }) {
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
