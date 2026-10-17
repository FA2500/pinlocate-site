import { GuideView, guideMetadata } from "@/views/guides";

export const metadata = guideMetadata("balik-kampung", "en");

export default function Page() {
  return <GuideView id="balik-kampung" lang="en" />;
}
