import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { Player, WithChildren } from "../../types";
import { uniq } from "lodash";

const PLAYERS_LOCALSTORAGE_KEY = "pixel-assault-players";

function getSavedPlayers() {
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
  const playerData = JSON.stringify(players);
  window.localStorage.setItem(PLAYERS_LOCALSTORAGE_KEY, playerData);
}

const contextDefaultValue = {
  players: [] as Player[],
  teams: [] as string[],
  isEmpty: true,
  addNewPlayer: (_: Player) => {},
  removePlayer: (_: Player) => {},
  decrementPlayerHealth: (_: string) => {},
  incrementPlayerHealth: (_: string) => {},
  decrementPlayerGold: (_: string) => {},
  incrementPlayerGold: (_: string) => {},
};

export const PlayerTrackerContext = createContext(contextDefaultValue);
export const PlayerTrackerProvider = PlayerTrackerContext.Provider;

export default function PlayerTrackerWrapper({ children }: WithChildren) {
  const [players, setPlayers] = useState<Player[]>();

  const teams = uniq(
    (players ?? []).map((p) => p.team ?? "Unnamed Team") ?? []
  );
  const isEmpty = teams.length === 0;

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

  const removePlayer = useCallback(
    (player: Player) => {
      const _players = (players ?? []).filter((p) => p.id !== player.id);
      setPlayers(_players);
    },
    [players]
  );

  const _changePlayerHealth = useCallback(
    (playerId: string, amount: number) => {
      return players?.map((p) => {
        if (p.id === playerId) {
          const healthAmount = p.healthAmount + amount;
          if (healthAmount > 100) return { ...p, healthAmount: 100 };
          if (healthAmount < 0) return { ...p, healthAmount: 0 };
          return { ...p, healthAmount };
        }
        return p;
      });
    },
    [players]
  );

  const decrementPlayerHealth = useCallback(
    (playerId: string) => {
      const _players = _changePlayerHealth(playerId, -1);
      setPlayers(_players);
    },
    [_changePlayerHealth]
  );

  const incrementPlayerHealth = useCallback(
    (playerId: string) => {
      const _players = _changePlayerHealth(playerId, 1);
      setPlayers(_players);
    },
    [_changePlayerHealth]
  );

  const _changePlayerGold = useCallback(
    (playerId: string, amount: number) => {
      return players?.map((p) => {
        if (p.id === playerId) {
          const goldAmount = p.goldAmount + amount;
          if (goldAmount < 0) return { ...p, goldAmount: 0 };
          return { ...p, goldAmount };
        }
        return p;
      });
    },
    [players]
  );

  const decrementPlayerGold = useCallback(
    (playerId: string) => {
      const _players = _changePlayerGold(playerId, -1);
      setPlayers(_players);
    },
    [_changePlayerGold]
  );

  const incrementPlayerGold = useCallback(
    (playerId: string) => {
      const _players = _changePlayerGold(playerId, 1);
      setPlayers(_players);
    },
    [_changePlayerGold]
  );

  const value = {
    players: (players ?? []) as Player[],
    teams,
    isEmpty,
    addNewPlayer,
    removePlayer,
    decrementPlayerHealth,
    incrementPlayerHealth,
    decrementPlayerGold,
    incrementPlayerGold,
  };

  return (
    <PlayerTrackerProvider value={value}>{children}</PlayerTrackerProvider>
  );
}

export const usePlayerTrackerContext = () => useContext(PlayerTrackerContext);
