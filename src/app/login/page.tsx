"use client";
import Button from "@/components/button";
import { Divider, TextField } from "@mui/material";
import Link from "next/link";
import { Button as StyledButton } from "@mui/material";
import Image from "next/image";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    console.log("e", e);
    e.preventDefault();
    router.push("/dashboard");
  };
  return (
    <main className="min-h-screen bg-white flex items-center justify-center text-center">
      <article className="w-80">
        <p className="text-gray-950 text-4xl font-bold mb-6">Welcome back</p>
        <form onSubmit={onSubmit}>
          <TextField
            type="email"
            className="w-full mb-6"
            label="Email address"
            variant="outlined"
          />
          <br />
          <Button className="w-full mb-3">Continue</Button>
        </form>
        <p className="text-gray-950 font-lighter">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-blue-800">
            Sign up
          </Link>
        </p>
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
    </main>
  );
}
