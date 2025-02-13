import { SanityDocument } from "@sanity/client";

export type Player = {
  id: string;
  name: string;
  healthAmount: number;
  goldAmount: number;
  team: string;
  faction: SanityDocument;
};
