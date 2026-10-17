import { LegalView, legalMetadata } from "@/views/legal";

export const metadata = legalMetadata("terms", "en");

export default function Page() {
  return <LegalView kind="terms" lang="en" />;
}
