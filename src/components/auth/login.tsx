'use client'

import { signIn } from "next-auth/react"
import { Button } from "../ui/button"
import { useState } from "react";

interface loginProps {
  
}

const AuthButton = ({} : loginProps) => {
  const [error, setError] = useState("");

  const signInWithGoogle = async () => {
    try {
      const result = await signIn("google", {
        redirect: false,
        callbackUrl: window.location.href,
      });
      console.log("result:", result);
      if (result?.error) {
        throw new Error(result.error);
      }
    } catch (error: any) {
      setError(error);
      alert("Unable to sign in");
    } finally {
      alert("Signed in");
    }
  };
  return (
    <div className="flex flex-col justify-center items-center h-full w-full">
    <h1>
      Welcome
    </h1>
    <Button variant='outline' onClick={() => signInWithGoogle}>
      Login With Google
    </Button>
  </div>
    )
}

export default AuthButton