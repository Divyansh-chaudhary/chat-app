import Button from "@/components/button";
import { jomhuria } from "@/config/fonts";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-slate-950 h-screen flex items-center justify-center flex-col p-4">
      <article className="flex-1  flex items-center justify-center">
        <section>
          <p className={`${jomhuria.className} text-center text-7xl`}>
            Get Started
          </p>
          <div className="flex items-center justify-center gap-6 flex-col sm:flex-row">
            <Link href="/login" className="w-full">
              <Button className="w-full">Login</Button>
            </Link>
            <Link href="/signup" className="w-full">
              <Button className="w-full">Singup</Button>
            </Link>
          </div>
        </section>
      </article>
      <article className=" mb-8">
        <p>Chat Anonymously</p>
      </article>
    </main>
  );
}
