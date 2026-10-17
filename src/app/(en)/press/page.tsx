import { PressView, pressMetadata } from "@/views/press";

export const metadata = pressMetadata("en");

export default function Page() {
  return <PressView lang="en" />;
}
