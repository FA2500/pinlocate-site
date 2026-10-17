import { GuidesIndexView, guidesIndexMetadata } from "@/views/guides";

export const metadata = guidesIndexMetadata("en");

export default function Page() {
  return <GuidesIndexView lang="en" />;
}
