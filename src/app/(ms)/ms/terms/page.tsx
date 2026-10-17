import { LegalView, legalMetadata } from "@/views/legal";

export const metadata = legalMetadata("terms", "ms");

export default function Page() {
  return <LegalView kind="terms" lang="ms" />;
}
