"use client";
import Button from "@/components/button";
import Link from "next/link";
import Image from "next/image";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [isEmailRegistered, setIsEmailRegistered] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    console.log("e", e);

    e.preventDefault();
    setIsEmailRegistered(true);

    if (isEmailRegistered) {
      router.push("/dashboard");
    }
  };

  return (
    <main className="min-h-screen bg-white flex items-center justify-center text-center">
      <article className="w-80">
        <p className="text-gray-950 text-4xl font-bold mb-6">Welcome back</p>
        <form onSubmit={onSubmit}>
          <label htmlFor="email">Email address</label>
          <input type="email" name="email" id="email" className="w-full mb-6" />
          <br />
          {isEmailRegistered && (
            <>
              <label htmlFor="fullName">Full name</label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                className="w-full mb-6"
              />
              <br />
            </>
          )}
          <Button className="w-full mb-3">Continue</Button>
        </form>
        <p className="text-gray-950 font-lighter">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-blue-800">
            Sign up
          </Link>
        </p>
        {/* <Divider className="text-gray-950 my-3 w-full">OR</Divider> */}
        <div>OR</div>
        <div className="border border-blue-800 mb-3 w-full rounded-sm">
          {/* <StyledButton className="flex align-center gap-2 justify-start p-3 w-full"> */}
          <button className="flex align-center gap-2 justify-start p-3 w-full">
            <Image src="/google.png" alt="microsoft" width={20} height={20} />
            <span className="text-xs">Continue with Google</span>
          </button>
          {/* </StyledButton> */}
        </div>
        <div className="border border-blue-800 w-full rounded-sm">
          {/* <StyledButton className="flex align-center gap-2 justify-start p-3 w-full"> */}
          <button className="flex align-center gap-2 justify-start p-3 w-full">
            <Image
              src="/microsoft.png"
              alt="microsoft"
              width={20}
              height={20}
            />
            <span className="text-xs">Continue with Microsoft Account</span>
          </button>
          {/* </StyledButton> */}
        </div>
      </article>
    </main>
  );
}
