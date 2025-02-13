import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { Player, WithChildren } from "../../types";

const PLAYERS_LOCALSTORAGE_KEY = "pixel-assault-players";

function getSavedPlayers() {
  console.log("GET SAVED PLAYERS");
  try {
    const healthSliderData = window.localStorage.getItem(
      PLAYERS_LOCALSTORAGE_KEY
    );
    if (!healthSliderData) return [];
    const healthSliders = JSON.parse(healthSliderData) as Player[];
    return healthSliders;
  } catch (_) {
    return [];
  }
}

function savePlayers(players: Player[]) {
  console.log("SAVE PLAYERS");
  const playerData = JSON.stringify(players);
  window.localStorage.setItem(PLAYERS_LOCALSTORAGE_KEY, playerData);
}

const contextDefaultValue = {
  players: [] as Player[],
  addNewPlayer: (_: Player) => {},
};

export const PlayerTrackerContext = createContext(contextDefaultValue);
export const PlayerTrackerProvider = PlayerTrackerContext.Provider;

export default function PlayerTrackerWrapper({ children }: WithChildren) {
  const [players, setPlayers] = useState<Player[]>();

  useEffect(() => {
    if (players === undefined) {
      const savedPlayers = getSavedPlayers();
      setPlayers(savedPlayers);
      return;
    }

    savePlayers(players);
    return;
  }, [players]);

  const addNewPlayer = useCallback(
    (player: Player) => {
      const _players = [...(players ?? []), player];
      setPlayers(_players);
    },
    [players]
  );

  const value = {
    players: (players ?? []) as Player[],
    addNewPlayer,
  };

  return (
    <PlayerTrackerProvider value={value}>{children}</PlayerTrackerProvider>
  );
}

export const usePlayerTrackerContext = () => useContext(PlayerTrackerContext);
