import Link from "next/link";
import { ArrowLeft, Terminal } from "lucide-react";

export default function NotFound() {
  return (
    <main
      id="main-content"
      className="min-h-screen max-w-screen px-6 lg:mx-32 lg:px-12"
    >
      <section className="flex min-h-screen w-full flex-col justify-center gap-8 py-12 lg:p-6">
        <div className="grid w-full items-center gap-8 xl:grid-cols-2">
          <div className="flex max-w-xl flex-col gap-4">
            <p className="text-lg font-bold font-body uppercase text-muted-foreground">
              404
            </p>
            <h1 className="text-xl font-bold tracking-tighter sm:text-2xl lg:text-3xl xl:text-5xl/none">
              Page not found
            </h1>
            <p className="text-md font-body text-muted-foreground text-justify">
              The page you&apos;re looking for doesn&apos;t exist or has been
              moved. Head back home to keep exploring.
            </p>
            <Link
              href="/"
              className="mt-2 inline-flex w-fit items-center gap-2 text-brand underline-offset-4 hover:underline"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="text-lg font-body font-semibold">
                Back to home
              </span>
            </Link>
          </div>
          <div className="hidden items-center justify-center xl:flex">
            <Terminal className="h-64 w-64 text-brand/40" />
          </div>
        </div>
      </section>
    </main>
  );
}
