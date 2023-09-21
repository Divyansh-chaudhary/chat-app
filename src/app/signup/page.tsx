"use client";
import Button from "@/components/button";
import { Divider, TextField } from "@mui/material";
import Link from "next/link";
import { Button as StyledButton } from "@mui/material";
import Image from "next/image";
import { FormEvent } from "react";

export default function SignupPage() {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("e", e);
  };

  return (
    <main className="min-h-screen bg-white flex items-center justify-center text-center">
      <div>
        <p className="text-gray-950 text-4xl font-bold mb-6">
          Create your account
        </p>
        <article className="w-80 mx-autos">
          <form onSubmit={onSubmit}>
            <TextField
              className="w-full mb-6"
              label="Email address"
              variant="outlined"
            />
            <br />
            <Button className="w-full mb-3">Continue</Button>
            <p className="text-gray-950 font-lighter">
              Already have an account?{" "}
              <Link href="/login" className="text-blue-800">
                Log in
              </Link>
            </p>
          </form>
          <Divider className="text-gray-950 my-3 w-full">OR</Divider>
          <div className="border border-blue-800 mb-3 w-full rounded-sm">
            <StyledButton className="flex align-center gap-2 justify-start p-3 w-full">
              <Image src="/google.png" alt="microsoft" width={20} height={20} />
              <span className="text-xs">Continue with Google</span>
            </StyledButton>
          </div>
          <div className="border border-blue-800 w-full rounded-sm">
            <StyledButton className="flex align-center gap-2 justify-start p-3 w-full">
              <Image
                src="/microsoft.png"
                alt="microsoft"
                width={20}
                height={20}
              />
              <span className="text-xs">Continue with Microsoft Account</span>
            </StyledButton>
          </div>
        </article>
      </div>
    </main>
  );
}
