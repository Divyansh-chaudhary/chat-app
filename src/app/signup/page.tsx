"use client";
import Button from "@/components/button";
import Link from "next/link";
import Image from "next/image";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
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
      <div>
        <p className="text-gray-950 text-4xl font-bold mb-6">
          Create your account
        </p>
        <article className="w-80 mx-autos">
          <form onSubmit={onSubmit}>
            <label htmlFor="email">Full name</label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full mb-6"
            />
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
            <p className="text-gray-950 font-lighter">
              Already have an account?{" "}
              <Link href="/login" className="text-blue-800">
                Log in
              </Link>
            </p>
          </form>
          <div className="text-gray-950 my-3 w-full">OR</div>
          <div className="border border-blue-800 mb-3 w-full rounded-sm">
            {/* <StyledButton className="flex align-center gap-2 justify-start p-3 w-full"> */}
            <button className="flex align-center gap-2 justify-start p-3 w-full">
              <Image src="/google.png" alt="microsoft" width={20} height={20} />
              <span className="text-xs">Continue with Google</span>
            </button>
            {/* </StyledButton> */}
          </div>
          <div className="border border-blue-800 w-full rounded-sm">
            <button className="flex align-center gap-2 justify-start p-3 w-full">
              {/* <StyledButton className="flex align-center gap-2 justify-start p-3 w-full"> */}
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
      </div>
    </main>
  );
}
