import { LegalView, legalMetadata } from "@/views/legal";

export const metadata = legalMetadata("privacy", "ms");

export default function Page() {
  return <LegalView kind="privacy" lang="ms" />;
}
