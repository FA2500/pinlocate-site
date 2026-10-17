import type { Metadata } from "next";
import { RootShell } from "@/components/root-shell";
import { Logo } from "@/components/logo";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page not found · PinLocate",
  icons: { icon: "/favicon.ico" },
};

export { viewport } from "@/lib/metadata";

export default function GlobalNotFound() {
  return (
    <RootShell lang="en">
      <header className="border-b border-border">
        <div className="mx-auto flex h-16 max-w-6xl items-center px-4 sm:px-6">
          <a href="/" className="flex min-h-11 items-center gap-2.5 rounded-lg text-lg font-bold">
            <Logo />
            PinLocate
          </a>
        </div>
      </header>
      <main id="main" tabIndex={-1} className="mx-auto flex w-full max-w-2xl flex-1 flex-col gap-10 px-4 py-20 outline-none sm:px-6">
        <section className="flex flex-col items-start gap-4">
          <p className="text-sm font-bold tracking-wider text-brand uppercase">404</p>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Page not found</h1>
          <p className="text-muted">This page doesn&apos;t exist.</p>
          <a href="/" className={buttonVariants()}>
            Go to the PinLocate home page
          </a>
        </section>
        <section lang="ms" className="flex flex-col items-start gap-4 border-t border-border pt-10">
          <h2 className="text-2xl font-extrabold tracking-tight">Halaman tidak dijumpai</h2>
          <p className="text-muted">Halaman ini tidak wujud.</p>
          <a href="/ms/" className={buttonVariants({ variant: "outline" })}>
            Pergi ke laman utama PinLocate
          </a>
        </section>
      </main>
      <footer className="border-t border-border px-4 py-6 text-center text-sm text-muted">
        Contact / Hubungi:{" "}
        <a href="mailto:support@pinlocate.link" className="inline-flex min-h-11 items-center font-semibold text-brand underline underline-offset-4">
          support@pinlocate.link
        </a>
      </footer>
    </RootShell>
  );
}
