import {
  Briefcase,
  Camera,
  CloudUpload,
  History,
  HousePlus,
  Languages,
  MapPin,
  Navigation,
  NotebookPen,
  Package,
  Route,
  Share2,
  Sheet,
  Tags,
  UsersRound,
  Wrench,
  ArchiveRestore,
  type LucideProps,
} from "lucide-react";
import type { IconName } from "@/content/types";

const icons = {
  pin: MapPin,
  landmark: NotebookPen,
  camera: Camera,
  share: Share2,
  navigate: Navigation,
  people: UsersRound,
  backup: ArchiveRestore,
  language: Languages,
  route: Route,
  history: History,
  tag: Tags,
  sheet: Sheet,
  cloud: CloudUpload,
  family: HousePlus,
  package: Package,
  wrench: Wrench,
  briefcase: Briefcase,
} satisfies Record<IconName, unknown>;

export function Icon({ name, ...props }: { name: IconName } & LucideProps) {
  const Component = icons[name];
  return <Component aria-hidden="true" {...props} />;
}
