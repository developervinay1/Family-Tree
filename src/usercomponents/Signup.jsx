import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Signup() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const signUpUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        // const user = userCredential.user;
        alert("Account Created");
        // ...
      })
      .catch((error) => {
        console.log(error);
        // ..
      });
  };
  return (
    <div>
      <div class="bg-grey-lighter min-h-screen flex flex-col">
        <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 class="mb-8 text-3xl text-center">Sign Up</h1>
            <input
              type="email"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              type="submit"
              onClick={signUpUser}
              style={{ backgroundColor: "#fb923c" }}
              class="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
            >
              Create Account
            </Button>
            <hr />

            <p className="text-center">or</p>

            <hr />

            <Button
              type="submit"
              //   onClick={googleSignIn}
              style={{ backgroundColor: "#4285F4" }}
              class="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
            >
              Sign Up With Google
            </Button>
          </div>

          <div class="text-grey-dark mt-6">
            Alredy have an account ?
            <Link
              to={"/login"}
              class="ml-2 no-underline border-b border-blue text-blue"
            >
              Log In
            </Link>
            .
          </div>
        </div>
      </div>
    </div>
  );
}
