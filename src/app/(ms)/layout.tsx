import type { ReactNode } from "react";
import { RootShell } from "@/components/root-shell";

export { viewport } from "@/lib/metadata";

export default function Layout({ children }: { children: ReactNode }) {
  return <RootShell lang="ms">{children}</RootShell>;
}
