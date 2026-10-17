import { GuidesIndexView, guidesIndexMetadata } from "@/views/guides";

export const metadata = guidesIndexMetadata("ms");

export default function Page() {
  return <GuidesIndexView lang="ms" />;
}
