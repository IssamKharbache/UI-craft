"use client";
import Button from "@/components/buttons/Button";
import LoadingButton from "@/components/rootComp/LoadingButton";
import { validateEmail } from "@/utils/validateEmail";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const RegisterPage = () => {
  //state to track inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
//
  const router = useRouter();
  //loading and error states
  //
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    
    e.preventDefault();
     //validation email
     if (!validateEmail(email)) {
      setError("Please enter a valid email");
      return;
    }
    //validating password
    if (!password || password.length < 8) {
      setError("Password is required and must be at least 8 characters");
      return;
    }
    try {
      setLoading(true);
      const res = await fetch("/api/register",{
        method: "POST",
        headers:{
          "Content-Type": "application/json",
        },
        body:JSON.stringify({
          fullName,email,password
        })
      })
      
      if (res.status === 400) {
        setError("User with this email already registered");
        setLoading(false);
      }
      if (res.status === 200) {
        setError("");
        setLoading(false);
        router.push("/login");
      }
    } catch (error) {
      setError("Error, please try again");
      setLoading(false);
      console.log(error);
      
    }
  };
  return (
    <div className="bg-red-100 max-w-md mx-auto mt-[120px] rounded">
      <h1 className="text-2xl font-bold text-center m-8 pt-10">Register</h1>
      <div className="">
            {error ? (
              <p className="text-center bg-red-500 text-white mb-8 py-2 px-8 w-[80%] rounded mx-auto">
                {error}
              </p>
            ) : (
              ""
            )}
          </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-96 mx-auto pb-12"
      >
        <input
          onChange={(e) => setFullName(e.target.value)}
          type="text"
          placeholder="Full name"
          className="py-4 px-3 outline-none  border-2 focus:border-red-200 rounded-sm"
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Email"
          className="py-4 px-3 outline-none border-2 focus:border-red-200 rounded-sm "
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="text"
          placeholder="Password"
          className="py-4 px-3 outline-none border-2 focus:border-red-200 rounded-sm "
        />
        {
          loading ?  <LoadingButton />:<Button type="submit" label="Sign up" />
        }
      </form>
    </div>
  );
};

export default RegisterPage;
