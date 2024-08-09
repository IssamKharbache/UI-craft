"use client";
import Button from "@/components/buttons/Button";
import LoadingButton from "@/components/rootComp/LoadingButton";
import { validateEmail } from "@/utils/validateEmail";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";
import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //
  const router = useRouter();
  //loading and error states
  //
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const session = useSession();
  
  useEffect(() => {
    if (session?.status === "authenticated") {
      router.push("/");
    }
  }, [session, router]);
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    //validation email
    if (!validateEmail(email)) {
      setError("Please enter a valid email");
      return;
    }
    setLoading(true);
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
     if (res?.url)router.replace("/");
    if (res?.error) {
      setLoading(false);
      setError("Email or password incorrect");
      
    }
    else {
      setLoading(false);
      setError("");
      
    }
  };
  return (
    <div className="bg-red-100 max-w-md mx-auto mt-[120px] rounded">
      <h1 className="text-2xl font-bold text-center m-8 pt-10">Login</h1>
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
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Email"
          className="py-4 px-3 outline-none border-2 focus:border-red-200 rounded-sm "
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          className="py-4 px-3 outline-none border-2 focus:border-red-200 rounded-sm "
        />
        {loading ? <LoadingButton /> : <Button type="submit" label="Sign in" />}
        <div className="text-center text-slate-500">- or -</div>
        <button
          type="button"
          className="flex items-center bg-white hover:bg-gray-200 transition rounded gap-3 justify-center mx-auto mt-4 w-full py-3"
          onClick={() => {
            signIn("google");
          }}
        >
           <FcGoogle size={30} />
          <span className="text-xl text-slate-500 font-bold">Google</span>
         
        </button>
        <button
          type="button"
          className="flex items-center bg-gray-800 hover:bg-gray-900 text-slate-200 transition rounded gap-3 justify-center mx-auto mt-4 w-full py-3"
          onClick={() => {
            signIn("github");
          }}
        >
          
          <BsGithub size={30} />
          <span className="text-xl text-slate-300 font-bold">GitHub</span>
        </button>
        <p className="text-center text-slate-600 text-sm">
          Don't have an account ?{" "}
          <Link className="text-blue-500 underline" href="/sign-up">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
