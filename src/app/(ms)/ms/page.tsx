import { t } from "@/content";
import { pageMetadata } from "@/lib/metadata";
import { HomeView } from "@/views/home";

export const metadata = pageMetadata({ lang: "ms", path: "/", ...t("ms").meta.home });

export default function Page() {
  return <HomeView lang="ms" />;
}
