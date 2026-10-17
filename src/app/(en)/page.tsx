import { t } from "@/content";
import { pageMetadata } from "@/lib/metadata";
import { HomeView } from "@/views/home";

export const metadata = pageMetadata({ lang: "en", path: "/", ...t("en").meta.home });

export default function Page() {
  return <HomeView lang="en" />;
}
