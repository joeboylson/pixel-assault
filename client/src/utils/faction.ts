/**
 * Backgrounds
 */
import MercenariesBackground from "../assets/images/faction_backgrounds/Troopers_Mercenaries.png";
import MontainTribesBackground from "../assets/images/faction_backgrounds/Troopers_MontainTribes.png";
import SiliconBackground from "../assets/images/faction_backgrounds/Troopers_Silicon.png";
import PlainsBackground from "../assets/images/faction_backgrounds/Troopers_Plains.png";
import NeutralBackground from "../assets/images/faction_backgrounds/Troopers_Neutral.png";

/**
 * Icons
 */
import MercenariesIcon from "../assets/images/faction_icons/Mercenary.png";
import MontainTribesIcon from "../assets/images/faction_icons/Mountain.png";
import SiliconIcon from "../assets/images/faction_icons/Silicon.png";
import PlainsIcon from "../assets/images/faction_icons/Plains.png";
import NeutralIcon from "../assets/images/faction_icons/Star.png";

/**
 * Banner
 */
import MercenariesBanner from "../assets/images/faction_banner/Painel Mercenary.png";
import MontainTribesBanner from "../assets/images/faction_banner/Painel Mountain.png";
import SiliconBanner from "../assets/images/faction_banner/Painel Silicon.png";
import PlainsBanner from "../assets/images/faction_banner/Painel Plains.png";
import NeutralBanner from "../assets/images/faction_banner/Painel Neutral.png";

type FactionSlug =
  | "mercenary-faction"
  | "mountain-faction"
  | "silicon-faction"
  | "plains-faction"
  | string;

export function getFactionBackground(factionSlug: FactionSlug) {
  switch (factionSlug) {
    case "mercenary-faction":
      return MercenariesBackground;
    case "mountain-faction":
      return MontainTribesBackground;
    case "silicon-faction":
      return SiliconBackground;
    case "plains-faction":
      return PlainsBackground;
    default:
      return NeutralBackground;
  }
}

export function getFactionIcon(factionSlug: FactionSlug) {
  switch (factionSlug) {
    case "mercenary-faction":
      return MercenariesIcon;
    case "mountain-faction":
      return MontainTribesIcon;
    case "silicon-faction":
      return SiliconIcon;
    case "plains-faction":
      return PlainsIcon;
    default:
      return NeutralIcon;
  }
}

export function getFactionBanner(factionSlug: FactionSlug) {
  switch (factionSlug) {
    case "mercenary-faction":
      return MercenariesBanner;
    case "mountain-faction":
      return MontainTribesBanner;
    case "silicon-faction":
      return SiliconBanner;
    case "plains-faction":
      return PlainsBanner;
    default:
      return NeutralBanner;
  }
}
