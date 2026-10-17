import { t } from "@/content";
import { pageMetadata } from "@/lib/metadata";
import { LinkView } from "@/views/link";

export const metadata = pageMetadata({ lang: "ms", path: "/p/", ...t("ms").meta.link, noindex: true });

export default function Page() {
  return <LinkView lang="ms" />;
}
