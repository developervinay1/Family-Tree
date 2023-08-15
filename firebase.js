import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBNDSWX9SVce7zakhIkDb8oGIPkJxtGA-8",
  authDomain: "family-tree-16d59.firebaseapp.com",
  projectId: "family-tree-16d59",
  storageBucket: "family-tree-16d59.appspot.com",
  messagingSenderId: "259074037731",
  appId: "1:259074037731:web:df8135047497bf4e3af2d6",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
